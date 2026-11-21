/* Worked, illustrative examples. No external requests or model calls. */
(function () {
  'use strict';
  let serial = 0;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const shared = {
    en: { illustrative:'Illustrative worked example · not a model transcript', before:'Before · incorrect', after:'After · corrected', check:'Acceptance check', source:'Source', superseded:'v1 · superseded', active:'v2 · active', reason:'Correction', request:'Current request' },
    es: { illustrative:'Ejemplo ilustrativo resuelto · no es una transcripción de un modelo', before:'Antes · incorrecto', after:'Después · corregido', check:'Comprobación de aceptación', source:'Fuente', superseded:'v1 · sustituida', active:'v2 · vigente', reason:'Corrección', request:'Solicitud vigente' }
  };
  const units = {
    en: {
      general:{title:'A correction that can be checked',intro:'The supplied time is 120 milliseconds. The first answer changes its unit label but fails to change the number.',bad:'This describes a time one thousand times too long.',good:'One second contains 1,000 milliseconds.',check:'Convert the corrected result back: 0.120 seconds × 1,000 = 120 milliseconds.',note:'Ask for the calculation to be repeated from the original measurement, then inspect the conversion. An apology is not evidence that the number was repaired.'},
      technical:{title:'Keep the measurement fixed; repair the conversion',intro:'Illustrative measured decay time: τ = 120 ms. A unit error also changes the inferred decay rate λ = 1/τ.',bad:'This would imply λ ≈ 0.00833 s⁻¹.',good:'This gives λ ≈ 8.33 s⁻¹.',check:'The conversion must round-trip to 120 ms. With the unrounded rate, λτ = 1.',note:'A factor-of-1,000 unit error propagates into the reciprocal rate. Correct the input conversion before comparing any fit or scientific interpretation.'},
      engineer:{title:'Turn the correction into a regression case',intro:'Test the conversion boundary independently of the language model. Preserve the raw value and unit; convert once into the computational representation.',bad:'Defect: the parser relabels ms as s without scaling.',good:'Expected normalized value: tau_s = 0.120.',check:'Check both the expected value and the inverse conversion; do not accept a repaired explanation without a passing computation.',note:'The assertions below are an illustrative test specification, not a report of an executed tool run.',code:'tau_ms = 120\ntau_s = tau_ms / 1000\nassert abs(tau_s - 0.120) < 1e-12\nassert abs(tau_s * 1000 - tau_ms) < 1e-9'}
    },
    es: {
      general:{title:'Una corrección que se puede comprobar',intro:'El tiempo suministrado es de 120 milisegundos. La primera respuesta cambia la etiqueta de la unidad, pero no el número.',bad:'Esto describe un tiempo mil veces mayor.',good:'Un segundo contiene 1.000 milisegundos.',check:'Convierta el resultado corregido de nuevo: 0,120 segundos × 1.000 = 120 milisegundos.',note:'Pida repetir el cálculo a partir de la medición original y examine la conversión. Una disculpa no demuestra que se haya corregido el número.'},
      technical:{title:'Mantenga la medición; corrija la conversión',intro:'Tiempo de decaimiento medido ilustrativo: τ = 120 ms. Un error de unidades también cambia la tasa inferida λ = 1/τ.',bad:'Esto implicaría λ ≈ 0,00833 s⁻¹.',good:'Esto da λ ≈ 8,33 s⁻¹.',check:'La conversión inversa debe dar 120 ms. Con la tasa sin redondear, λτ = 1.',note:'Un error de unidades de un factor de 1.000 se propaga a la tasa recíproca. Corrija la conversión de entrada antes de comparar ajustes o interpretaciones científicas.'},
      engineer:{title:'Convierta la corrección en una prueba de regresión',intro:'Pruebe la conversión independientemente del modelo de lenguaje. Conserve el valor y la unidad originales; convierta una sola vez a la representación de cálculo.',bad:'Defecto: el analizador cambia ms por s sin aplicar el factor.',good:'Valor normalizado esperado: tau_s = 0.120.',check:'Compruebe el valor esperado y la conversión inversa; una explicación corregida no sustituye un cálculo que pase las pruebas.',note:'Las aserciones siguientes son una especificación ilustrativa de prueba, no el registro de una ejecución.',code:'tau_ms = 120\ntau_s = tau_ms / 1000\nassert abs(tau_s - 0.120) < 1e-12\nassert abs(tau_s * 1000 - tau_ms) < 1e-9'}
    }
  };
  const goals = {
    en: {
      general:{title:'The same data, two different jobs',input:'Input: a table of a signal fading over time',left:'Explore a suitable explanation',leftSteps:['Ask the assistant to propose a method.','Inspect the plot and differences between predictions and measurements.'],right:'Repeat a documented procedure',rightSteps:['Supply the procedure to reproduce.','Keep its specified steps and report any departure.'],gate:'In either job: preserve the supplied values and units, and show how the answer was obtained.',note:'A different method may be useful for exploration but fail a request to reproduce a particular analysis.'},
      technical:{title:'Choose which decisions the assistant may make',input:'Input: the same decay measurements and supplied uncertainties',left:'Goal-level analysis',leftSteps:['Compare an exponential with and without a constant background.','Inspect residuals and explain how assumptions affect the conclusion.'],right:'Method-constrained reproduction',rightSteps:['Use the supplied model, weighting rule and parameter constraints.','Record deviations instead of silently improving the procedure.'],gate:'Acceptance gate: unchanged input data and units; reproducible computation; residuals returned.',note:'The exploration may choose an implementation. The reproduction must also satisfy the specified method; a plausible parameter value alone is insufficient.'},
      engineer:{title:'Separate outcome constraints from method constraints',input:'A shared input artifact and two explicit task contracts',left:'Delegate method selection',leftSteps:['Allow a proposed model comparison and implementation.','Validate outputs against data-integrity and numerical checks.'],right:'Constrain the algorithm',rightSteps:['Fix model, weighting and parameter bounds from the reference procedure.','Check the execution record for unauthorized substitutions.'],gate:'Shared checks: input identity, unit conversion, executable artifact and residual output. Reproduction adds a method-conformance check.',note:'Make acceptance independent of the assistant’s confidence. If the reference omits a required choice, surface the ambiguity before treating the reproduction as complete.'}
    },
    es: {
      general:{title:'Los mismos datos, dos trabajos distintos',input:'Entrada: una tabla de una señal que disminuye con el tiempo',left:'Explorar una explicación adecuada',leftSteps:['Pida al asistente que proponga un método.','Examine la gráfica y las diferencias entre predicciones y mediciones.'],right:'Repetir un procedimiento documentado',rightSteps:['Proporcione el procedimiento que se debe reproducir.','Mantenga sus pasos y señale cualquier desviación.'],gate:'En ambos trabajos: conservar los valores y las unidades suministrados, y mostrar cómo se obtuvo la respuesta.',note:'Un método distinto puede servir para explorar, pero incumplir una solicitud de reproducir un análisis concreto.'},
      technical:{title:'Decida qué elecciones puede hacer el asistente',input:'Entrada: las mismas mediciones de decaimiento y sus incertidumbres',left:'Análisis definido por el objetivo',leftSteps:['Compare una exponencial con y sin fondo constante.','Examine los residuos y explique cómo afectan las hipótesis a la conclusión.'],right:'Reproducción con método fijado',rightSteps:['Use el modelo, la ponderación y las restricciones de parámetros suministrados.','Registre las desviaciones en vez de mejorar el procedimiento sin avisar.'],gate:'Criterio de aceptación: datos y unidades intactos; cálculo reproducible; residuos incluidos.',note:'La exploración puede elegir una implementación. La reproducción también debe cumplir el método indicado; un parámetro plausible no basta.'},
      engineer:{title:'Separe las restricciones del resultado y del método',input:'Un mismo archivo de entrada y dos contratos de tarea explícitos',left:'Delegar la elección del método',leftSteps:['Permita proponer una comparación de modelos y su implementación.','Valide las salidas con comprobaciones numéricas y de integridad de datos.'],right:'Restringir el algoritmo',rightSteps:['Fije modelo, ponderación y límites según el procedimiento de referencia.','Revise el registro de ejecución para detectar sustituciones no autorizadas.'],gate:'Comprobaciones comunes: identidad de entrada, conversión de unidades, código ejecutable y residuos. La reproducción añade conformidad con el método.',note:'La aceptación debe ser independiente de la confianza del asistente. Si la referencia omite una decisión necesaria, señale la ambigüedad antes de dar por completada la reproducción.'}
    }
  };
  const context = {
    en: {
      general:{title:'A correction must replace the active instruction',source:'The supplied table labels its time column “milliseconds”.',old:'Treat the time values as seconds.',correction:'The table header says milliseconds; the earlier brief was wrong.',active:'Read the values as milliseconds. Convert them to seconds for the calculation.',request:'Use the corrected brief for the next calculation. Keep the original table available for checking.',note:'Keeping both versions in the conversation is not enough. Mark which version is current so a summary does not revive the old assumption.'},
      technical:{title:'Keep source evidence attached to the current brief',source:'Illustrative input header: time_ms. Example row: 120.',old:'Assumption: the time column is already in seconds.',correction:'The source header contradicts v1. Replace the unit assumption, not the measured values.',active:'Raw time: 120 ms. Computational time: 0.120 s. Convert exactly once.',request:'Recompute downstream quantities from the original input using v2; preserve the original uncertainties and their stated units.',note:'A summary should retain the correction and its source. If an uncertainty unit is missing, flag it rather than infer it from the corrected time column.'},
      engineer:{title:'Assemble context with explicit precedence and provenance',source:'Illustrative authoritative input: column time_ms; raw value 120.',old:'unit = s\nstatus = superseded',correction:'Promote the checked source header over the stale summary. Retain v1 only as revision history.',active:'input_unit = ms\ncompute_unit = s\nscale = 0.001\nstatus = active',request:'Deliver v2 and the relevant source excerpt to the model. Reject a plan that treats 120 as seconds or applies the conversion twice.',note:'This is an example of an application-level context policy. A version label alone does not enforce it: inspect the assembled input and validate the resulting computation.'}
    },
    es: {
      general:{title:'La corrección debe sustituir la instrucción vigente',source:'La tabla suministrada identifica su columna de tiempo como «milisegundos».',old:'Tratar los valores de tiempo como segundos.',correction:'La cabecera indica milisegundos; el resumen anterior era incorrecto.',active:'Leer los valores como milisegundos. Convertirlos a segundos para el cálculo.',request:'Usar el resumen corregido para el siguiente cálculo. Conservar la tabla original para comprobarlo.',note:'No basta con mantener ambas versiones en la conversación. Marque cuál está vigente para que un resumen no recupere la hipótesis antigua.'},
      technical:{title:'Vincule la evidencia original al resumen vigente',source:'Cabecera de entrada ilustrativa: time_ms. Fila de ejemplo: 120.',old:'Hipótesis: la columna de tiempo ya está en segundos.',correction:'La cabecera contradice v1. Sustituya la hipótesis sobre la unidad, no los valores medidos.',active:'Tiempo original: 120 ms. Tiempo de cálculo: 0,120 s. Convertir una sola vez.',request:'Recalcular las cantidades derivadas desde la entrada original usando v2; conservar las incertidumbres originales y sus unidades declaradas.',note:'Un resumen debe conservar la corrección y su fuente. Si falta la unidad de una incertidumbre, señálelo en vez de inferirla a partir de la columna corregida.'},
      engineer:{title:'Prepare el contexto con precedencia y procedencia explícitas',source:'Entrada autorizada ilustrativa: columna time_ms; valor original 120.',old:'unit = s\nstatus = superseded',correction:'Dé prioridad a la cabecera comprobada frente al resumen obsoleto. Conserve v1 solo como historial de revisión.',active:'input_unit = ms\ncompute_unit = s\nscale = 0.001\nstatus = active',request:'Entregue v2 y el fragmento pertinente de la fuente al modelo. Rechace un plan que interprete 120 como segundos o aplique la conversión dos veces.',note:'Es una política de contexto a nivel de aplicación. Una etiqueta de versión no la impone por sí sola: examine la entrada preparada y valide el cálculo resultante.'}
    }
  };
  function wrap(lang, title, body) {
    const captionId = 'wx-caption-' + (++serial);
    return `<figure class="wx-figure" lang="${lang}" aria-labelledby="${captionId}"><figcaption id="${captionId}"><span class="wx-tag">${esc(shared[lang].illustrative)}</span>${esc(title)}</figcaption>${body}</figure>`;
  }
  function unitFigure(lang, audience) {
    const t=units[lang][audience], s=shared[lang], decimal=lang==='es'?'0,120':'0.120';
    return wrap(lang,t.title,`<p>${esc(t.intro)}</p><div class="wx-pair"><section class="wx-panel wx-old"><span class="wx-state">${esc(s.before)}</span><strong class="wx-number"><s>120 s</s></strong><p>${esc(t.bad)}</p></section><section class="wx-panel wx-active"><span class="wx-state">${esc(s.after)}</span><strong class="wx-number">${decimal} s</strong><p>${esc(t.good)}</p></section></div><div class="wx-equation"><span>120 ms</span> <span>× (1 s / 1000 ms)</span> <span>= <strong>${decimal} s</strong></span></div><p class="wx-check"><strong>${esc(s.check)}:</strong> ${esc(t.check)}</p>${t.code?`<code class="wx-code">${esc(t.code)}</code>`:''}<p class="wx-note">${esc(t.note)}</p>`);
  }
  function goalFigure(lang,audience) {
    const t=goals[lang][audience];
    const lane=(title,steps)=>`<section class="wx-lane"><span class="wx-arrow" aria-hidden="true">↓</span><h4>${esc(title)}</h4><ol>${steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><span class="wx-arrow" aria-hidden="true">↓</span></section>`;
    return wrap(lang,t.title,`<p class="wx-input">${esc(t.input)}</p><div class="wx-flow">${lane(t.left,t.leftSteps)}${lane(t.right,t.rightSteps)}</div><p class="wx-gate">${esc(t.gate)}</p><p class="wx-note">${esc(t.note)}</p>`);
  }
  function contextFigure(lang,audience) {
    const t=context[lang][audience],s=shared[lang];
    const revisionText=value=>audience==='engineer'?`<code>${esc(value)}</code>`:`<p>${esc(value)}</p>`;
    return wrap(lang,t.title,`<p class="wx-source"><strong>${esc(s.source)}:</strong> ${esc(t.source)}</p><div class="wx-pair"><section class="wx-panel wx-old"><h4>${esc(s.superseded)}</h4>${revisionText(t.old)}</section><section class="wx-panel wx-active"><h4>${esc(s.active)}</h4>${revisionText(t.active)}</section></div><dl class="wx-revision"><dt>${esc(s.reason)}</dt><dd>${esc(t.correction)}</dd><dt>${esc(s.request)}</dt><dd>${esc(t.request)}</dd></dl><p class="wx-note">${esc(t.note)}</p>`);
  }
  const reversalFixture = Object.freeze({animals:'hare, deer, wolf, fox, bear', plants:'rose, fern, reed, moss, flax'});
  const reversalCopy = {
    en:{
      title:'Reverse, then check the supplied list', animals:'Animal list', plants:'Plant list', run:'Run the enumeration', reset:'Restore classroom lists',
      instruction:'Which listed animal becomes a listed plant when its spelling is reversed?',
      edit:'Edit either list to test another vocabulary. English words are used in both language versions.',
      format:'Separate words with commas or spaces. Use letters a–z; case is ignored and duplicates are removed. Limit: 40 words per list, 30 letters per word.',
      ready:'Not run yet. Run to check every candidate.', stale:'Lists changed. Run again to check the edited inputs.',
      invalid:'Cannot run: each list must contain 1–40 words, each 1–30 letters a–z, separated by commas or whitespace.',
      candidate:'Animal candidate', reversed:'Reversed spelling', member:'In supplied plant list?', yes:'Yes · match', no:'No',
      result:(n,h)=>`Executed locally: ${n} distinct candidates checked; ${h} ${h===1?'match':'matches'} in the supplied plant list.`,
      code:'Show the executed comparison function', normalization:'The inputs are validated, lowercased and deduplicated before this function runs.',
      scope:'The labels “animal” and “plant” come from the supplied lists. The code checks spelling and membership, not biological categories. Edited or synthetic lists change the question.',
      limits:'This is a classroom code demonstration, not a recorded AI failure. It cannot diagnose tokenization or measure a model’s accuracy.',
      general:'A direct answer proposes a word. Running this small check shows how every candidate was tested—and which names were included.',
      technical:'Enumerate the finite candidate set, reverse each spelling and test membership in the supplied plant set. A unique hit here establishes uniqueness only within these lists.',
      engineer:'Keep the lexicons and transformation explicit. The table exposes every candidate; the displayed function is the same function executed locally. This ASCII-only task does not test Unicode grapheme handling or semantic classification.'
    },
    es:{
      title:'Invierta las letras y compruebe la lista', animals:'Lista de animales', plants:'Lista de plantas', run:'Ejecutar la enumeración', reset:'Restaurar las listas del ejemplo',
      instruction:'¿Qué animal de la lista se convierte en una planta de la lista al invertir sus letras?',
      edit:'Edite cualquiera de las listas para probar otro vocabulario. Ambas versiones de idioma usan palabras inglesas.',
      format:'Separe las palabras con comas o espacios. Use letras a–z; se ignoran las mayúsculas y se eliminan duplicados. Límite: 40 palabras por lista, 30 letras por palabra.',
      ready:'Aún no se ha ejecutado. Ejecute para comprobar todos los candidatos.', stale:'Las listas han cambiado. Ejecute de nuevo para comprobar las entradas editadas.',
      invalid:'No se puede ejecutar: cada lista debe contener entre 1 y 40 palabras de 1–30 letras a–z, separadas por comas o espacios en blanco.',
      candidate:'Animal candidato', reversed:'Letras invertidas', member:'¿Está en la lista de plantas?', yes:'Sí · coincidencia', no:'No',
      result:(n,h)=>`Ejecutado localmente: ${n} candidatos distintos comprobados; ${h} ${h===1?'coincidencia':'coincidencias'} en la lista de plantas suministrada.`,
      code:'Ver la función de comparación ejecutada', normalization:'Antes de ejecutar esta función se validan las entradas, se convierten a minúsculas y se eliminan duplicados.',
      scope:'Las categorías «animal» y «planta» proceden de las listas suministradas. El código comprueba letras y pertenencia, no categorías biológicas. Las listas editadas o sintéticas cambian la pregunta.',
      limits:'Es una demostración de código para el aula, no un fallo de IA registrado. No permite diagnosticar la tokenización ni medir la precisión de un modelo.',
      general:'Una respuesta directa propone una palabra. Esta pequeña comprobación muestra cómo se probó cada candidato y qué nombres se incluyeron.',
      technical:'Enumere el conjunto finito de candidatos, invierta sus letras y compruebe su pertenencia al conjunto de plantas suministrado. Una coincidencia única solo demuestra unicidad dentro de estas listas.',
      engineer:'Mantenga explícitos los vocabularios y la transformación. La tabla muestra cada candidato; la función visible es la misma que se ejecuta localmente. Esta tarea limitada a ASCII no prueba grafemas Unicode ni clasificación semántica.'
    }
  };
  // Called by the UI and exposed for deterministic integration checks.
  function enumerateReversals(animals, plants) {
    const plantSet = new Set(plants);
    return animals.map(animal => {
      const reversed = Array.from(animal).reverse().join('');
      return {animal, reversed, match: plantSet.has(reversed)};
    });
  }
  function parseLexicon(text) {
    if(typeof text!=='string' || text.length>2000 || !/^[a-zA-Z,\s]+$/.test(text)) throw new Error('Invalid lexicon');
    const words = Array.from(new Set(text.trim().toLowerCase().split(/[,\s]+/).filter(Boolean)));
    if(!words.length || words.length>40 || words.some(word=>word.length>30)) throw new Error('Invalid lexicon');
    return words;
  }
  function reversalFigure(lang,audience) {
    const t=reversalCopy[lang], prefix='wx-reversal-'+(++serial);
    return wrap(lang,t.title,`<div class="wx-reversal" data-wx-reversal data-wx-language="${lang}"><p><strong>${esc(t.instruction)}</strong></p><p class="wx-note">${esc(t[audience])}</p><div class="wx-lexicons"><label for="${prefix}-animals">${esc(t.animals)}<textarea id="${prefix}-animals" data-wx-animals rows="2" maxlength="2000" spellcheck="false" autocapitalize="none" aria-describedby="${prefix}-format">${esc(reversalFixture.animals)}</textarea></label><label for="${prefix}-plants">${esc(t.plants)}<textarea id="${prefix}-plants" data-wx-plants rows="2" maxlength="2000" spellcheck="false" autocapitalize="none" aria-describedby="${prefix}-format">${esc(reversalFixture.plants)}</textarea></label></div><p class="wx-note">${esc(t.edit)}</p><p id="${prefix}-format" class="wx-note">${esc(t.format)}</p><div class="wx-actions"><button type="button" data-wx-run>${esc(t.run)}</button><button type="button" data-wx-reset>${esc(t.reset)}</button></div><p class="wx-run-status" data-wx-status role="status" aria-live="polite" aria-atomic="true">${esc(t.ready)}</p><div data-wx-results></div><details class="wx-code-details"><summary>${esc(t.code)}</summary><p class="wx-note">${esc(t.normalization)}</p><pre><code>${esc(enumerateReversals.toString())}</code></pre></details><p class="wx-note">${esc(t.scope)}</p><p class="wx-note">${esc(t.limits)}</p></div>`);
  }
  const boundReversals = new WeakSet();
  function bind(root) {
    root = root || document;
    const panels = Array.from(root.querySelectorAll('[data-wx-reversal]'));
    if(root.matches && root.matches('[data-wx-reversal]')) panels.unshift(root);
    panels.forEach(panel=>{
      if(boundReversals.has(panel)) return;
      boundReversals.add(panel);
      const t=reversalCopy[panel.dataset.wxLanguage==='es'?'es':'en'];
      const animals=panel.querySelector('[data-wx-animals]'), plants=panel.querySelector('[data-wx-plants]');
      const status=panel.querySelector('[data-wx-status]'), results=panel.querySelector('[data-wx-results]');
      const clear=message=>{results.replaceChildren();status.textContent=message;};
      panel.addEventListener('input',event=>{
        if(event.target===animals || event.target===plants) clear(t.stale);
      });
      panel.querySelector('[data-wx-reset]').addEventListener('click',()=>{
        animals.value=reversalFixture.animals; plants.value=reversalFixture.plants; clear(t.ready);
      });
      panel.querySelector('[data-wx-run]').addEventListener('click',()=>{
        let rows;
        try { rows=enumerateReversals(parseLexicon(animals.value),parseLexicon(plants.value)); }
        catch { clear(t.invalid); return; }
        const hits=rows.filter(row=>row.match).length;
        status.textContent=t.result(rows.length,hits);
        results.innerHTML=`<table class="wx-reversal-table"><caption>${esc(t.result(rows.length,hits))}</caption><thead><tr><th scope="col">${esc(t.candidate)}</th><th scope="col">${esc(t.reversed)}</th><th scope="col">${esc(t.member)}</th></tr></thead><tbody>${rows.map(row=>`<tr${row.match?' class="wx-match"':''}><th scope="row"><code>${esc(row.animal)}</code></th><td><code>${esc(row.reversed)}</code></td><td>${esc(row.match?t.yes:t.no)}</td></tr>`).join('')}</tbody></table>`;
      });
    });
  }
  window.WorkflowExamples = Object.freeze({
    bind,
    bindRiddle: bind,
    enumerateReversals,
    render(id,language,audience) {
      const lang=language==='es'?'es':'en';
      const level=['general','technical','engineer'].includes(audience)?audience:'technical';
      if(String(id)==='8') return unitFigure(lang,level);
      if(String(id)==='9') return goalFigure(lang,level);
      if(String(id)==='12') return contextFigure(lang,level);
      if(String(id)==='riddle') return reversalFigure(lang,level);
      return '';
    }
  });
})();

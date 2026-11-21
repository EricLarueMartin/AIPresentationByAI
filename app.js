/* Static presentation viewer. No remote services or telemetry. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id), E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const db=window.PRESENTATION;
  const edition='Numbered edition · 21 Nov 2026';
  if(!db?.slides?.length){$('slide').innerHTML='<h1>Presentation content could not load</h1><p>Keep index.html, content.js, styles.css and app.js in the same directory.</p>';return;}
  const map=new Map(db.slides.map(s=>[String(s.id),s]));
  const resolveId=id=>db.aliases?.[id]||id;
  const read=(k,d)=>{try{return localStorage.getItem(k)??d}catch{return d}};
  const save=(k,v)=>{try{localStorage.setItem(k,v);return true}catch{return false}};
  const state={route:new URLSearchParams(location.search).get('route')||'all',id:resolveId(decodeURIComponent(location.hash.slice(1))||'1'),view:new URLSearchParams(location.search).get('view')||read('ai-talk-view','read'),audience:new URLSearchParams(location.search).get('audience')||read('ai-talk-audience','technical'),lang:read('ai-talk-language','en'),review:{},all:false};
  if(!db.routes[state.route]&&state.route!=='all')state.route='30';
  if(!['general','technical','engineer'].includes(state.audience))state.audience='technical';
  if(!map.has(state.id))state.id=db.slides[0].id;
  if(!['read','present','discuss'].includes(state.view))state.view='read';
  try {
      const saved=read('ai-talk-review-numbered',null);
      if(saved!==null) {
        state.review=JSON.parse(saved)||{};
      } else {
        const legacy=JSON.parse(read('ai-talk-review','{}'))||{};
        // Prefer the latest dated decision. In undated drafts, lettered IDs
        // identify the later edition of the same topic.
        const entries=Object.entries(legacy).sort(([a,x],[b,y])=>
          (Date.parse(y?.updated)||0)-(Date.parse(x?.updated)||0) ||
          Number(/\d[a-z]$/.test(b))-Number(/\d[a-z]$/.test(a)));
        for(const [key,entry] of entries){
          const [prefix,after]=key.split(':');
          const oldId=after??prefix;
          const id=db.legacyReviews[oldId]??`previous-${oldId}`;
          const newKey=after?`${prefix}:${id}`:id;
          if(state.review[newKey]) state.review[`previous-${key}`]=entry;
          else state.review[newKey]=entry;
        }
        if(Object.keys(legacy).length) save('ai-talk-review-numbered',JSON.stringify(state.review));
      }
    } catch {}
  if(!['en','es'].includes(state.lang))state.lang='en';
  const L=(en,es)=>state.lang==='es'?es:en;
  const tr=(s,audience=state.audience)=>({...s,...(state.lang==='es'?window.PRESENTATION_ES?.slides?.[s.id]:{}),...(window.AUDIENCE_CONTENT?.[audience]?.[s.id]||{}),...(state.lang==='es'?window.AUDIENCE_ES?.[audience]?.[s.id]:{}),id:s.id,visual:s.visual,sources:s.sources});
  const routeTable=()=>window.AUDIENCE_ROUTES?.[state.audience]||db.routes;
  const routeSeconds=()=>window.AUDIENCE_ROUTE_SECONDS?.[state.audience]||db.routeSeconds;
  const reviewKey=(id=state.id)=>state.audience==='technical'?id:state.audience+':'+id;
  const audienceLabels={en:{general:'General audience',technical:'Scientists & engineers',engineer:'AI engineers'},es:{general:'Público general',technical:'Ciencia e ingeniería',engineer:'Ingeniería de IA'}};
  const audienceDescriptions={en:{general:'No AI background assumed. Familiar examples and terms explained as they appear.',technical:'Scientific literacy assumed. AI concepts connect to experiments, tools and engineering decisions.',engineer:'AI background assumed. Focus on implementation choices, resource tradeoffs and evaluation design.'},es:{general:'Sin conocimientos previos de IA. Ejemplos cotidianos y términos explicados al aparecer.',technical:'Supone conocimientos científicos. Los conceptos de IA se conectan con experimentos, herramientas y decisiones de ingeniería.',engineer:'Supone conocimientos de IA. Se centra en implementación, recursos y diseño de evaluaciones.'}};
  const audienceLabel=()=>audienceLabels[state.lang][state.audience];
  const slides=()=>state.route==='all'?db.slides.map(s=>String(s.id)):(routeTable()[state.route]||routeTable()['30']).map(String);
  if(!slides().includes(state.id))state.route='all';
  const card=(title,body='',accent=false,n='')=>`<div class="diagram-card${accent?' accent':''}">${n?`<span class="step-num">${E(n)}</span>`:''}<b>${E(title)}</b>${body?`<small>${E(body)}</small>`:''}</div>`;
  const cap=s=>`<p class="visual-caption">${E(s)}</p>`;
  const caption=(en,es)=>cap(L(en,es));
  const table=(headers,rows)=>`<table><thead><tr>${headers.map(x=>`<th scope="col">${E(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((x,i)=>i?`<td>${E(x)}</td>`:`<th scope="row">${E(x)}</th>`).join('')}</tr>`).join('')}</tbody></table>`;
  const matrix=(small=false)=>`<div class="matrix${small?' small':''}" aria-hidden="true">${'<span></span>'.repeat(small?8:16)}</div>`;
  const text={en:{brand:'AT THE WORKBENCH',draft:'REVIEW EDITION 06',outline:'YOUR ROUTE',length:'Presentation length',descs:{3:'A focused three-minute route.',10:'A short route with a worked example.',30:'25 minutes + 5 minutes for discussion.',60:'50 minutes + 10 minutes for discussion.',all:'Read the complete guide, including optional depth.'},routes:{3:'3 min · Lightning',10:'10 min · Essentials',30:'30 min · The field guide',60:'60 min · A closer look',all:'Full guide · All sections'},notes:'Presenter notes',sources:'Sources',review:'Review this slide',print:'Print route',full:'Full screen',prev:'Previous',next:'Next',up:'UP NEXT',end:'End of this route',optional:'Go deeper',scope:'Sources & scope',reviewH:'Your review',reviewExplain:'Decisions are saved in this browser. Marking a slide for removal keeps it in this draft until you approve an edit.',note:'What should change?',export:'Export all review notes',saved:'Saved locally',failed:'Browser storage unavailable. Export your notes to keep them.',all:'Read the full guide',help:'Keyboard shortcuts ?',foot:'AI-assisted editorial draft · Sources and scope accompany each section · November 2026',start:'Start timer',pause:'Pause',themeLight:'Switch to light mode',themeDark:'Switch to dark mode',keep:'Keep',revise:'Revise',remove:'Propose removal',clear:'Clear decision',slide:'Slide',target:'Target',checked:'Source scope: studies support their stated tasks and conditions; a benchmark is not a guarantee for your task.',none:'This slide is a suggested practice or part of the presentation’s own workflow.',private:'Aggregate historical project result; no public report supplied.',helpH:'Keyboard shortcuts',helpD:['Previous / next slide','First / last slide','Show / hide outline','Presenter notes','Switch theme','This guide','Close this guide']},es:{brand:'EN EL BANCO DE TRABAJO',draft:'EDICIÓN 06',outline:'TU RECORRIDO',length:'Duración de la presentación',descs:{3:'Un recorrido centrado de tres minutos.',10:'Un recorrido breve con un ejemplo resuelto.',30:'25 minutos + 5 de conversación.',60:'50 minutos + 10 de conversación.',all:'Lea la guía completa, con contenido adicional.'},routes:{3:'3 min · Charla breve',10:'10 min · Lo esencial',30:'30 min · Guía práctica',60:'60 min · Con más detalle',all:'Guía completa · Todas las secciones'},notes:'Notas del ponente',sources:'Fuentes',review:'Revisar diapositiva',print:'Imprimir recorrido',full:'Pantalla completa',prev:'Anterior',next:'Siguiente',up:'A CONTINUACIÓN',end:'Fin de este recorrido',optional:'Más detalle',scope:'Fuentes y alcance',reviewH:'Tu revisión',reviewExplain:'Las decisiones se guardan en este navegador. Proponer una eliminación conserva la diapositiva hasta aprobar la edición.',note:'¿Qué debería cambiar?',export:'Exportar todas las notas',saved:'Guardado localmente',failed:'Almacenamiento no disponible. Exporta tus notas para conservarlas.',all:'Leer la guía completa',help:'Atajos de teclado ?',foot:'Borrador editorial asistido por IA · Fuentes y alcance en cada sección · Noviembre de 2026',start:'Iniciar cronómetro',pause:'Pausar',themeLight:'Cambiar al modo claro',themeDark:'Cambiar al modo oscuro',keep:'Conservar',revise:'Revisar',remove:'Proponer eliminación',clear:'Borrar decisión',slide:'Diapositiva',target:'Objetivo',checked:'Alcance: los estudios respaldan sus tareas y condiciones; una prueba no garantiza el resultado en tu tarea.',none:'Esta diapositiva propone una práctica o describe el proceso de esta presentación.',private:'Resultado histórico agregado del proyecto; no hay informe público disponible.',helpH:'Atajos de teclado',helpD:['Diapositiva anterior / siguiente','Primera / última diapositiva','Mostrar / ocultar índice','Notas del ponente','Cambiar tema','Esta guía','Cerrar esta guía']}};
  let timerStart=0,timerElapsed=0,reviewPersisted=true;
  function ui(){const t=text[state.lang];$('previous').setAttribute('aria-label',t.prev);$('next').setAttribute('aria-label',t.next);$('language-label').textContent=L('Language','Idioma');$('outline-toggle').setAttribute('aria-label',L('Show or hide outline','Mostrar u ocultar índice'));$('help-close').setAttribute('aria-label',L('Close','Cerrar')); document.documentElement.lang=state.lang;$('language').value=state.lang;$('brand-name').textContent=t.brand;$('draft-label').textContent=t.draft;$('outline-label').textContent=t.outline;$('route-label').textContent=t.length;for(const o of $('route').options)o.textContent=t.routes[o.value];$('route-description').textContent=t.descs[state.route];$('audience-label').textContent=L('Knowledge level','Nivel de conocimientos');$('audience').value=state.audience;for(const o of $('audience').options)o.textContent=audienceLabels[state.lang][o.value];$('audience-description').textContent=L('Choose level and length independently.','Elija el nivel y la duración por separado.');$('audience-name').textContent=audienceLabel();$('audience-context').textContent=audienceDescriptions[state.lang][state.audience];$('route-summary').textContent=(state.route==='all'?L('Full guide','Guía completa'):state.route+' min')+' · '+slides().length+L(' sections',' secciones');document.body.dataset.audience=state.audience;['notes','sources','review'].forEach(x=>$(`${x}-toggle`).textContent=t[x]);$('print-button').textContent=t.print;$('fullscreen-button').textContent=t.full;$('previous').querySelector('span').textContent=t.prev;$('next').querySelector('span').textContent=t.next;$('notes-heading').textContent=t.notes;$('sources-heading').textContent=t.scope;$('review-heading').textContent=t.reviewH;$('review-explainer').textContent=t.reviewExplain;$('review-note-label').textContent=t.note;$('export-review').textContent=t.export;$('optional-label').textContent=t.optional;$('all-slides').textContent=t.all;$('help-toggle').textContent=t.help;$('help-heading').textContent=t.helpH;$('page-foot').textContent=t.foot;$('next-label').textContent=t.up;$('notes-next-label').textContent=t.up;['keep','revise','remove',''].forEach(x=>document.querySelector(`[data-review="${x}"]`).textContent=t[x||'clear']);document.querySelectorAll('#help-dialog dd').forEach((el,i)=>el.textContent=t.helpD[i]);$('timer-toggle').textContent=timerStart?t.pause:t.start;themeLabel();}
function visual(s) {
    const V = window.PresentationVisuals;
    switch (s.visual) {
      case 'worked-example':
        for(const examples of [window.WorkflowExamples,window.TrainingExamples,window.FieldExamples]){
          const figure=examples?.render(s.id,state.lang,state.audience);
          if(figure) return figure;
        }
        return '';
      case 'moe': return V.moe(state.lang,s.id);
      case 'network': return V.network(state.lang);
      case 'tool-hub': return V.toolHub(state.lang);
      case 'agent-loop': return V.agentLoop(state.lang);
      case 'fit': return '<div id="science-demo"></div>';
      case 'prompt':
        if(s.points.length) return '';
        return `<blockquote class="worked-brief"><p>${L('“Fit the supplied data with and without a constant background. Use the uncertainties in column three. Return the fitted lifetime in seconds and a residual plot for each model.”','«Ajusta los datos con y sin un fondo constante. Usa las incertidumbres de la tercera columna. Devuelve la vida media en segundos y un gráfico de residuos para cada modelo».')}</p></blockquote>`;
      case 'research':
        if(s.points.length) return '';
        return table([L('Attribution question','Pregunta de atribución'),L('Comparison to run','Comparación propuesta')],[
          [L('Did extra reasoning help?','¿Ayudó el razonamiento adicional?'),L('Keep the checkpoint and tools fixed. Vary the inference budget.','Mantén fijos el modelo y las herramientas. Varía el presupuesto de inferencia.')],
          [L('Did retrieval help?','¿Ayudó la recuperación de información?'),L('Use the same model and questions. Supply the retrieved passages to one condition.','Usa el mismo modelo y las mismas preguntas. Añade los pasajes recuperados en una de las condiciones.')]
        ]);
      case 'rules':
        return s.points.length ? '' : table([L('System','Sistema'),L('Source of its behavior','Origen de su comportamiento')],s.comparison);
      case 'handoff':
        return `<blockquote class="worked-brief"><p>${L('Please compare the two fits in the attached report. The three late-time points share a calibration uncertainty. Does the apparent offset survive when that uncertainty is included?', 'Compara los dos ajustes del informe adjunto. Los tres últimos puntos comparten una incertidumbre de calibración. ¿Persiste el aparente desplazamiento al tenerla en cuenta?')}</p><footer>${L('An example brief for the second model','Ejemplo de encargo para el segundo modelo')}</footer></blockquote>`;
      case 'correction':
        return `<blockquote class="worked-brief"><p>${L('“You used seconds. The file header says milliseconds. Rerun the fit and show what changes in the reported lifetime.”','«Usaste segundos. El encabezado del archivo indica milisegundos. Repite el ajuste y muestra cómo cambia la vida media estimada».')}</p></blockquote>`;
      case 'interfaces':
        return table([L('Access granted','Acceso concedido'),L('What the assistant can do','Qué puede hacer el asistente')],[
          [L('Pasted text','Texto pegado'),L('Explain an excerpt.','Explicar un fragmento.')],
          [L('Search tool','Herramienta de búsqueda'),L('Look up a paper and return a link.','Localizar un artículo y enlazarlo.')],
          [L('Writable workspace + runner','Archivos editables y ejecución'),L('Edit the analysis and execute it on the supplied data.','Editar el análisis y ejecutarlo con los datos disponibles.')],
          [L('Dedicated computer with a camera','Equipo dedicado con cámara'),L('Capture a new frame when the application permits it.','Capturar una imagen nueva si la aplicación lo permite.')]
        ]);
      case 'deployment':
        return table([L('Example','Ejemplo'),L('What constrains the choice?','¿Qué condiciona la elección?')],[
          ['Raspberry Pi + AI HAT+ 2',L('Camera input and support for the chosen model.','La cámara y la compatibilidad del modelo elegido.')],
          ['DGX Spark',L('Memory available to the model. A 200 Gb/s link can connect systems when the software supports distributing the work.','La memoria disponible. Un enlace de 200 Gb/s conecta equipos cuando el software permite repartir el trabajo.')],
          [L('Hosted model','Modelo alojado'),L('Data allowed to leave the site and the provider’s model and tool options.','Los datos que pueden salir y los modelos y herramientas del proveedor.')]
        ]);
      case 'qlora':
        return table([L('Memory allocation','Uso de memoria'),L('During QLoRA training','Durante el ajuste con QLoRA')],[
          [L('Base weights','Pesos del modelo base'),L('Frozen. Stored in a low-bit format.','Fijos. Se almacenan con pocos bits.')],
          [L('Adapter weights','Pesos del adaptador'),L('Updated at higher precision.','Se actualizan con mayor precisión.')],
          [L('Intermediate results','Resultados intermedios'),L('Working memory depends on the sequence length and batch.','La memoria de trabajo depende de la longitud de secuencia y del lote.')]
        ]);
      case 'lima':
        return `<figure class="study-result"><div class="study-value">43%</div><figcaption>${L('In LIMA’s human comparison, judges tied or preferred the tuned model’s answer to GPT-4’s in 43% of cases. Ties are included. The judgments concerned the sampled answers.','En la comparación de LIMA, el jurado valoró igual o mejor la respuesta del modelo ajustado que la de GPT-4 en el 43 % de los casos. El porcentaje incluye empates y se refiere a las respuestas evaluadas.')}</figcaption></figure>`;
      case 'ewc':
        return table([L('When to test','Cuándo evaluar'),L('Earlier task A','Tarea anterior A'),L('New task B','Nueva tarea B')],[
          [L('After learning A','Tras aprender A'),L('Record baseline','Registrar referencia'),'—'],
          [L('After learning B','Tras aprender B'),L('Measure retention','Medir retención'),L('Measure learning','Medir aprendizaje')]
        ])+caption('Use the same checks for ordinary sequential training and for EWC. The table shows what to measure.','Aplica las mismas pruebas al entrenamiento secuencial ordinario y a EWC. La tabla indica qué medir.');
      case 'budget':
        return `<div class="mono-box">${L('Cost per accepted result','Coste por resultado aceptado')}<br>= ${L('total cost of all attempts','coste total de todos los intentos')}<br>÷ ${L('number of accepted results','número de resultados aceptados')}</div>`;
      case 'scaling':
        return `<div class="mono-box">C ≈ 6ND<br><br>6 × (2N) × (2D) = 4C</div>${caption('N counts parameters and D counts training tokens in this dense-model estimate.','En esta estimación para modelos densos, N cuenta parámetros y D cuenta tokens de entrenamiento.')}`;
      case 'precision-test':
        return s.points.length>1?'':table([L('Comparison','Comparación'),L('What changes?','¿Qué cambia?')],[
          [L('16-bit LoRA vs. 4-bit QLoRA','LoRA de 16 bits frente a QLoRA de 4 bits'),L('Main difference under matched settings: how the frozen base is stored.','Con las demás condiciones iguales, cambia cómo se almacena la base fija.')],
          [L('Full tuning vs. QLoRA','Ajuste completo frente a QLoRA'),L('Both precision and which weights can change.','Cambian la precisión y el conjunto de pesos ajustables.')]
        ]);
      default: return standardVisual(s);
    }
  }
function slideBody(s) {
    const points=s.points || [];
    if(!points.length) return '';
    if(s.kind==='list' || s.kind==='steps'){
      const tag=s.kind==='steps'?'ol':'ul';
      return `<${tag} class="points authored-${s.kind}">${points.map(p=>`<li>${E(p)}</li>`).join('')}</${tag}>`;
    }
    return `<div class="authored-${s.kind}">${points.map(p=>`<p>${E(p)}</p>`).join('')}</div>`;
  }
const bareWordEncodings=[["cl100k_base",["str","aw","berry"],[496,675,15717]],["o200k_base",["st","raw","berry"],[302,1618,19772]]];
function tokenFigure(){
    return `<figure class="token-compare"><figcaption>${L('Two tokenizers read the same word','Dos tokenizadores leen la misma palabra')} <code>strawberry</code></figcaption>
      ${bareWordEncodings.map(([encoding,pieces,ids])=>`<div class="encoding-line"><b>${encoding}</b><div class="encoding-pieces">${pieces.map((p,i)=>`<span style="flex-grow:${p.length}"><strong>${p}</strong>${state.audience==='engineer'?`<small>ID ${ids[i]}</small>`:''}</span>`).join('')}</div></div>`).join('')}
      <p class="visual-caption">${L('Each box is one token. Both rows encode the ten letters with no leading space.','Cada recuadro es un token. Ambas filas codifican las diez letras sin espacio inicial.')}</p>
      <details class="space-experiment"><summary>${L('What changes if a space comes first?','¿Qué cambia al añadir un espacio al principio?')}</summary>
        <div class="encoding-line"><b>o200k_base</b><div class="encoding-pieces"><span><strong>␣strawberry</strong>${state.audience==='engineer'?'<small>ID 101830</small>':''}</span></div></div>
        <p class="visual-caption">${L('Here ␣ marks one ordinary space. The space and the whole word now share one token. There are still three r’s.','Aquí ␣ representa un espacio normal. El espacio y la palabra entera forman ahora un solo token. Sigue habiendo tres erres.')}</p>
      </details></figure>`;
  }
function compressionFigure(){
    const rows=[[16,14],[8,7],[4,3.5]];
    return `<figure class="weight-bars"><figcaption>${L('Storing seven billion weights','Almacenar siete mil millones de pesos')}</figcaption>
      ${rows.map(([bits,gb])=>`<div class="weight-row"><span>${bits} bits</span><div class="weight-track" aria-hidden="true"><i style="width:${100*bits/16}%"></i></div><b>${gb.toLocaleString(state.lang)} GB</b></div>`).join('')}
      <p class="visual-caption">${state.audience==='general'?L('Halving the bits per weight halves the raw storage. Test the smaller version on the same task to see how its answers change.','Reducir a la mitad los bits por peso reduce a la mitad el espacio bruto. Prueba la versión más pequeña con la misma tarea para ver cómo cambian sus respuestas.'):L('Raw decimal GB = parameters × bits / 8 / 10⁹. Quantization scales, activations and temporary buffers add memory. These sizes alone tell us neither throughput nor retained accuracy.','GB decimales brutos = parámetros × bits / 8 / 10⁹. Las escalas de cuantización, las activaciones y los búferes temporales añaden memoria. Para conocer la velocidad y la precisión hay que medirlas.')}</p></figure>`;
  }

function characterExample(){
    const figureUrl=E(db.sources.strawberryChat.url);
    return `<figure class="recorded-count">
      <figcaption>GPT‑4o · ${L('November 3, 2024','3 de noviembre de 2024')}</figcaption>
      <p class="count-prompt">${L('How many times does lowercase r occur in','¿Cuántas veces aparece la r minúscula en')} <code>strawberry</code>?</p>
      <p class="recorded-answer"><strong>2</strong><span>${L('GPT‑4o’s first answer','Primera respuesta de GPT‑4o')}</span></p>
      <details class="python-followup"${state.view==='present'?'':' open'}>
        <summary>${L('Reveal the Python follow-up','Ver qué ocurrió al pedir Python')}</summary>
        <p>${L('The user repeated the question and added “Use Python.”','El usuario repitió la pregunta y añadió «Use Python» (usa Python).')}</p>
        <pre><code>text = "strawberry"
count = text.count("r")
count</code></pre>
        <p class="recorded-answer"><strong>3</strong><span>${L('Python output. GPT‑4o then answered 3.','Resultado de Python. GPT‑4o respondió entonces que eran 3.')}</span></p>
        <div class="count-positions" role="img" aria-label="${L('The three r’s are at positions 3, 8 and 9.','Las tres erres están en las posiciones 3, 8 y 9.')}">${Array.from('strawberry',(c,i)=>`<span class="${c==='r'?'match':''}"><b>${c}</b><small>${i+1}</small></span>`).join('')}</div>
      </details>
      <p class="visual-caption">${L('The transcript shows what GPT‑4o answered. The cause of its first error is unknown.','El registro muestra qué respondió GPT‑4o. Se desconoce la causa de su primer error.')}</p>
      <a class="count-citation" href="${figureUrl}" target="_blank" rel="noopener noreferrer">${L('Original screenshots · Krakowski (2025), Figure 2','Capturas originales · Krakowski (2025), figura 2')}</a>
    </figure>
    <details class="count-playground"><summary>${L('Try the browser counter on another word','Probar el contador del navegador con otra palabra')}</summary><div class="character-example">
      <label for="count-word">${L('Word to count','Palabra para el recuento')}</label>
      <input id="count-word" type="text" spellcheck="false" autocapitalize="none" autocomplete="off" value="strawberry">
      <div id="token-example"><span>${L('How o200k_base encodes this input','Cómo codifica o200k_base esta entrada')}</span>
        <div class="tokens" id="count-tokens"></div>
        <button type="button" id="word-spacing"></button>
      </div>
      <div class="count-output"><span>${L('Characters checked by the browser','Caracteres que examina el navegador')}</span>
        <div id="count-spelling" aria-hidden="true"></div>
        <output for="count-word" aria-live="polite"><b id="letter-result">3</b> ${L('lowercase r matches','coincidencias de r minúscula')}</output>
      </div>
      <code>[...word].filter(c =&gt; c === 'r').length</code>
    </div></details>`;
  }
function bindCharacterExample(){
    const input=$('count-word');
    const toggle=$('word-spacing');
    // Exact outputs of o200k_base for these two literals. Arbitrary text
    // still has a character count, but requires a tokenizer to show its IDs.
    const pieces=new Map([
      ['strawberry',['st','raw','berry']],
      [' strawberry',[' strawberry']]
    ]);
    function update(){
      const word=input.value;
      $('letter-result').textContent=String([...word].filter(c=>c==='r').length);
      $('count-spelling').innerHTML=word.split('r').map(E).join('<mark>r</mark>');
      const tokens=pieces.get(word);
      $('token-example').hidden=!tokens;
      if(tokens){
        $('count-tokens').innerHTML=tokens.map(t=>`<span class="token">${E(t.replace(' ','␣'))}</span>`).join('');
        toggle.textContent=word.startsWith(' ')?L('Remove the leading space','Quitar el espacio inicial'):L('Add a leading space','Añadir un espacio inicial');
      }
    }
    input.oninput=update;
    toggle.onclick=()=>{
      input.value=input.value.startsWith(' ')?'strawberry':' strawberry';
      update();
    };
    update();
  }

function standardVisual(s){
  switch(s.visual){
    case 'timeline':return `<div class="timeline">${[['1958','Perceptron',L('Learned weights','Pesos aprendidos')],['1966','ELIZA',L('Scripted conversation','Conversación con reglas')],['1986',L('Backpropagation','Retropropagación'),L('Multilayer learning','Aprendizaje multicapa')],['2003',L('Neural language model','Modelo de lenguaje neuronal'),L('Distributed representations','Representaciones distribuidas')],['2017','Transformer',L('Attention + feedforward layers','Atención + capas densas')],['2020s',L('Models + tools','Modelos + herramientas'),L('From responses to workflows','De respuestas a tareas')]].map(x=>`<div class="timeline-item"><span>${E(x[0])}</span><b>${E(x[1])}</b><small>${E(x[2])}</small></div>`).join('')}</div>`;
    case 'tokens': return tokenFigure();
    case 'efficiency': return compressionFigure();
    case 'cost':return `<div class="visual-title">${L('ILLUSTRATIVE WEIGHT STORAGE','ALMACENAMIENTO ILUSTRATIVO DE PESOS')}</div><div class="cost-controls"><label for="params">${L('Parameters','Parámetros')}: <b id="params-label">7B</b></label><input id="params" type="range" min="1" max="70" value="7" aria-label="Billions of parameters"><label for="precision">${L('Bits per weight','Bits por peso')}: <b id="precision-label">16</b></label><input id="precision" type="range" min="2" max="16" step="2" value="16" aria-label="Bits per weight"></div><div class="cost-result"><span id="weight-result">14</span> GB</div>${caption('Decimal GB, raw weights only. Training also needs gradients, optimizer state, activations and temporary buffers. 4-bit storage also has metadata.','GB decimales, solo pesos brutos. El entrenamiento necesita gradientes, estados del optimizador, activaciones y búferes. 4 bits también requiere metadatos.')}<div class="mono-box" style="margin-top:17px">C ≈ 6 × N × D</div>${caption('Dense pretraining approximation: N parameters, D training tokens. Not a device benchmark or time estimate.','Aproximación de preentrenamiento denso: N parámetros, D tokens. No es una prueba de dispositivo ni una estimación de tiempo.')}`;
    case 'lora':return `<div class="mono-box">W′ = W + BA</div><div class="lora-diagram"><div>${matrix()}<div class="math-label">${L('Frozen W','W congelada')}</div></div><span class="math-symbol">+</span><div>${matrix(true)}<div class="math-label">B</div></div><span class="math-symbol">×</span><div>${matrix(true)}<div class="math-label">A</div></div></div>${caption('The learned factors B and A supply the update. The diagram absorbs the usual scaling factor into B.','Los factores aprendidos B y A aportan la actualización. En este esquema, B incorpora el factor de escala habitual.')}`;
    case 'memory':return `${table([L('Quantity','Magnitud'),L('Simple scaling','Crecimiento aproximado')],[[L('Weight storage','Almacenamiento de pesos'),'∝ N × bits'],[L('KV cache','Caché KV'),'∝ context × layers'],[L('Dense prompt attention work','Trabajo de atención densa'),'∝ context²']])}<div class="scaling-grid"><div class="scaling-cell">L</div><div class="scaling-cell">2L</div><div class="scaling-cell">4L</div><div class="scaling-cell">1×</div><div class="scaling-cell">4×</div><div class="scaling-cell">16×</div></div>${caption('Bottom row: relative dense-attention work only, keeping other dimensions fixed. KV cache also depends on heads, width, precision and batching.','Fila inferior: solo trabajo relativo de atención densa, con las demás dimensiones fijas. La caché KV también depende de cabezas, anchura, precisión y lotes.')}`;
    case 'pi':return `<div class="horizontal-diagram">${card(L('Camera','Cámara'),L('Images of the physical setup','Imágenes del montaje'))}${card('USB',L('Microphones, adapters, peripherals','Micrófonos, adaptadores, periféricos'))}</div><div class="diagram-arrow" aria-hidden="true">↓</div>${card('Raspberry Pi',L('Capture · develop · inspect · run compatible models','Capturar · desarrollar · revisar · ejecutar modelos'),true)}<div class="diagram-arrow" aria-hidden="true">↓</div>${card(L('Observable result','Resultado observable'),L('A saved image, measured value or checked action','Imagen guardada, valor medido o acción comprobada'))}${caption('A general workflow: give the AI access to relevant evidence and a development environment, with explicit scope.','Flujo general: dar acceso a evidencia relevante y un entorno de desarrollo, con alcance explícito.')}`;
    case 'characters': return characterExample();
    default: return '';
  }
}
  function renderReader(){
    const s=tr(map.get(state.id)),v=state.view,root=$('reader-content');
    document.body.dataset.view=v;
    if(v!=='present'){$('slide-counter').textContent=L('Section ','Sección ')+s.id+' · '+(slides().indexOf(state.id)+1)+' / '+slides().length;$('slide').querySelector('.slide-id').textContent=L('Section ','Sección ')+s.id;$('review-toggle').textContent=L('Review this section','Revisar esta sección');$('print-button').textContent=L('Print reading guide','Imprimir la guía');}
    const labels={read:L('Read','Leer'),present:L('Present','Presentar'),discuss:L('Discuss','Debatir')};
    document.querySelectorAll('#view-modes [data-view]').forEach(b=>{b.textContent=labels[b.dataset.view];b.setAttribute('aria-pressed',String(v===b.dataset.view));});
    $('view-label').textContent=L('FORMAT','FORMATO');
    $('view-description').textContent=v==='read'?L('Explanations to read at your own pace.','Explicaciones para leer a su ritmo.'):v==='discuss'?L('Questions for a seminar or group discussion.','Preguntas para un seminario o debate.'):L('Visual slides with optional presenter notes.','Diapositivas visuales con notas opcionales.');
    root.hidden=v==='present';
    const prose=(s.reading||[s.notes]).map(p=>'<p>'+E(p)+'</p>').join('');
    const questions='<ol class="discussion-questions">'+(s.discussion||[]).map(q=>'<li>'+E(q)+'</li>').join('')+'</ol>';
    root.innerHTML=v==='discuss'?'<section class="discussion-block"><h2>'+L('Questions for discussion','Preguntas para debatir')+'</h2>'+questions+'</section><details class="reading-reference"><summary>'+L('Reference explanation','Explicación de referencia')+'</summary><div class="reader-prose">'+prose+'</div></details>':'<div class="reader-prose"><h2>'+L('Explanation','Explicación')+'</h2>'+prose+'</div><details class="reading-reference"><summary>'+L('Questions for discussion','Preguntas para debatir')+'</summary>'+questions+'</details>';
    $('notes-toggle').hidden=v!=='present';
    if(v!=='present'){$('notes-panel').hidden=true;$('notes-toggle').setAttribute('aria-expanded','false');}
  }
  function render(){renderSlide();renderReader();}
  function sources(s){const t=text[state.lang];$('source-scope').textContent=t.checked;$('source-list').innerHTML=(s.sources||[]).map(k=>{const src=db.sources[k];if(!src)return `<li>${E(k)}</li>`;return `<li>${src.url?`<a href="${E(src.url)}" target="_blank" rel="noopener noreferrer">${E(src.title)}</a>`:E(src.title)}${src.year?` <small>${E(src.year)}</small>`:''}${!src.url?`<p>${E(t.private)}</p>`:''}</li>`}).join('')||`<li>${E(t.none)}</li>`;}
  function outline(){let last='';$('slide-list').innerHTML=slides().map(id=>{const s=tr(map.get(id)),head=s.section!==last?`<h2 class="nav-section">${E(s.section)}</h2>`:'';last=s.section;return head+`<button class="slide-link" data-id="${E(id)}" aria-current="${state.id===id}"><span class="id">${E(id)}</span><span>${E(s.title)}</span>${state.review[reviewKey(id)]?.decision?'<span class="review-dot" aria-label="Reviewed">•</span>':''}</button>`}).join('');$('route').value=state.route;}
  function url(){try{const u=new URL(location.href);u.searchParams.set('route',state.route);u.searchParams.set('view',state.view);u.searchParams.set('audience',state.audience);u.hash=state.id;history.replaceState({},'',u)}catch{}const list=$('slide-list'),active=list.querySelector('[aria-current="true"]');if(active){const a=active.getBoundingClientRect(),b=list.getBoundingClientRect();if(a.top<b.top)list.scrollTop-=b.top-a.top;else if(a.bottom>b.bottom)list.scrollTop+=a.bottom-b.bottom;}}
  function renderSlide() {
    const s=tr(map.get(state.id)), ids=slides(), i=ids.indexOf(state.id);
    const t=text[state.lang], next=map.get(ids[i+1]);
    ui();
    outline();
    const figure=visual(s);
    const figurePanel=figure?`<div class="visual">${figure}</div>`:'';
    const displayedFigure=figure && state.view==='discuss'
      ? `<details class="discussion-figure"><summary>${L('Look at the example','Ver el ejemplo')}</summary>${figurePanel}</details>`
      : figurePanel;
    const points=slideBody(s);
    const focusFigure=s.visual==='worked-example' && state.view==='present' && !!figure;
    const supplementary=focusFigure && points
      ? `<details class="worked-notes"><summary>${L('More on the method','Más sobre el método')}</summary>${points}</details>`:'';
    $('slide').className=`slide visual-${s.visual} ${figure?'with-figure':'text-slide'} ${s.visual==='cover'?'cover':''} ${s.visual==='fit'?'full-visual':''}`;
    $('slide').innerHTML=`<div class="slide-grid"><div class="slide-copy"><span class="eyebrow">${E(s.eyebrow||s.section)}</span><h1 id="slide-title">${E(s.title)}</h1><p class="lead">${E(s.lead)}</p>${focusFigure?'':points}</div>${displayedFigure}${supplementary}</div><span class="slide-id">${E(t.slide)} ${E(s.id)}</span>`;
    const seconds=routeSeconds()?.[state.route]?.[s.id] || s.seconds || 60;
    $('chapter-label').textContent=s.section.toUpperCase();
    $('slide-counter').textContent=`${t.slide} ${s.id} · ${t.target} ${Math.round(seconds)}s`;
    $('route-count').textContent=`${i+1} / ${ids.length}`;
    $('route-percent').textContent=`${Math.round((i+1)/ids.length*100)}%`;
    $('progress-fill').style.width=`${(i+1)/ids.length*100}%`;
    $('next-title').textContent=next?`${next.id} / ${tr(next).title}`:t.end;
    $('notes-next').textContent=$('next-title').textContent;
    $('previous').disabled=i<=0;
    $('next').disabled=i>=ids.length-1;
    $('speaker-notes').textContent=s.notes || s.lead;
    $('optional-notes').textContent=s.optional || '';
    sources(s);
    reviewUI();
    url();
    $('announcer').textContent=`${t.slide} ${s.id}: ${s.title}`;
    bindVisual(s);
    document.title=`${audienceLabel()} · ${s.id} · ${s.title} — AI at the workbench`;
  }

  function bindVisual(s){if($('science-demo')){if(window.ScienceDemo)window.ScienceDemo.mount($('science-demo'),state.lang);else $('science-demo').textContent=L('Scientific demo could not load.','No se pudo cargar la demostración.');}if($('count-word'))bindCharacterExample();if($('params')){const update=()=>{$('params-label').textContent=`${$('params').value}B`;$('precision-label').textContent=$('precision').value;$('weight-result').textContent=(Number($('params').value)*Number($('precision').value)/8).toLocaleString(state.lang,{maximumFractionDigits:2})};$('params').oninput=update;$('precision').oninput=update;update();}}
  function go(id){id=resolveId(id);if(!map.has(id))return;state.id=id;render();$('main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
  function step(d){const ids=slides();const id=ids[ids.indexOf(state.id)+d];if(id)go(id);}
  function panel(name){const p=$(name+'-panel'),b=$(name+'-toggle');p.hidden=!p.hidden;b.setAttribute('aria-expanded',String(!p.hidden));}
  function reviewUI(){const r=state.review[reviewKey()]||{};$('review-note').value=r.note||'';document.querySelectorAll('[data-review]').forEach(b=>b.setAttribute('aria-pressed',String((r.decision||'')===b.dataset.review)));$('review-save-state').textContent=text[state.lang][reviewPersisted?'saved':'failed'];}
  function persistReview(){reviewPersisted=save('ai-talk-review-numbered',JSON.stringify(state.review));$('review-save-state').textContent=text[state.lang][reviewPersisted?'saved':'failed'];}
  function themeLabel(){const dark=document.documentElement.dataset.theme==='dark';$('theme-toggle').textContent=dark?'☀':'☾';$('theme-toggle').title=$('theme-toggle').ariaLabel=text[state.lang][dark?'themeLight':'themeDark'];}
  function outlineToggle(){document.body.classList.toggle('outline-hidden');const open=!document.body.classList.contains('outline-hidden');$('outline-toggle').setAttribute('aria-expanded',String(open));save('ai-talk-outline',String(open));}
  function download(name,value){const a=document.createElement('a'),u=URL.createObjectURL(new Blob([value],{type:'application/json;charset=utf-8'}));a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
  $('route').insertAdjacentHTML('beforeend','<option value="all">All slides · Review library</option>');
  $('slide-list').onclick=e=>{const b=e.target.closest('[data-id]');if(b){go(b.dataset.id);if(innerWidth<901&&!document.body.classList.contains('outline-hidden'))outlineToggle();}};
  function fitRoute(){if(!slides().includes(state.id)){const index=db.slides.findIndex(s=>s.id===state.id);state.id=slides().find(id=>db.slides.findIndex(s=>s.id===id)>=index)||slides().at(-1);}}
  $('route').onchange=()=>{state.route=$('route').value;fitRoute();render();};
  $('audience').onchange=()=>{state.audience=$('audience').value;save('ai-talk-audience',state.audience);fitRoute();render();$('announcer').textContent=audienceLabel()+': '+slides().length+L(' sections in this route.',' secciones en este recorrido.');};
  document.querySelectorAll('#view-modes [data-view]').forEach(b=>b.onclick=()=>{state.view=b.dataset.view;save('ai-talk-view',state.view);render();});
  $('language').onchange=()=>{state.lang=$('language').value;save('ai-talk-language',state.lang);render();};
  $('outline-toggle').onclick=outlineToggle;
  $('theme-toggle').onclick=()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';save('ai-talk-theme',document.documentElement.dataset.theme);themeLabel();};
  ['notes','sources','review'].forEach(x=>$(x+'-toggle').onclick=()=>panel(x));
  $('previous').onclick=()=>step(-1);$('next').onclick=()=>step(1);
  document.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>{state.review[reviewKey()]={...(state.review[reviewKey()]||{}),decision:b.dataset.review,updated:new Date().toISOString()};persistReview();reviewUI();outline();});
  $('review-note').oninput=()=>{state.review[reviewKey()]={...(state.review[reviewKey()]||{}),note:$('review-note').value,updated:new Date().toISOString()};persistReview();};
  $('export-review').onclick=()=>{
    const rows=Object.entries(state.review).map(([key,record])=>{
      const archived=key.startsWith('previous-');
      const originalKey=archived?key.slice('previous-'.length):key;
      const parts=originalKey.split(':');
      const audience=parts.length>1?parts[0]:'technical';
      const oldId=parts.at(-1);
      const id=archived?(db.legacyReviews[oldId]||oldId):oldId;
      const title=map.has(id)?tr(map.get(id),audience).title:('Previous draft section '+id);
      return {...record,id,audience,title,...(archived?{previousReviewKey:originalKey}:{})};
    });
    download('ai-presentation-review.json',JSON.stringify({
      version:edition,audience:state.audience,route:state.route,exported:new Date().toISOString(),slides:rows
    },null,2));
  };
  $('all-slides').onclick=()=>{state.route='all';state.view='read';save('ai-talk-view',state.view);render();};
  $('help-toggle').onclick=()=>$('help-dialog').showModal();$('help-close').onclick=()=>$('help-dialog').close();
  $('fullscreen-button').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{$('announcer').textContent=L('Full screen is unavailable in this browser.','Pantalla completa no disponible.');}};
  $('timer-toggle').onclick=()=>{if(timerStart){timerElapsed+=Date.now()-timerStart;timerStart=0;}else timerStart=Date.now();$('timer-toggle').textContent=text[state.lang][timerStart?'pause':'start'];};
  $('timer-reset').onclick=()=>{timerElapsed=0;if(timerStart)timerStart=Date.now();$('elapsed').textContent='00:00';};
  setInterval(()=>{const s=Math.floor((timerElapsed+(timerStart?Date.now()-timerStart:0))/1000);$('elapsed').textContent=`${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;},500);
  function preparePrint(){const root=$('print-root');root.innerHTML=slides().map(id=>{const s=tr(map.get(id));return '<section class="print-slide"><p>'+E(edition)+' · '+E(audienceLabel())+' · '+E(state.route==='all'?L('Full guide','Guía completa'):state.route+' min')+' · '+E(s.id)+' · '+E(s.section)+'</p><h1>'+E(s.title)+'</h1><p>'+E(s.lead)+'</p>'+slideBody(s)+ (s.reading||[s.notes]).map(p=>'<p>'+E(p)+'</p>').join('')+'<h2>'+L('Discussion','Debate')+'</h2><ol>'+(s.discussion||[]).map(q=>'<li>'+E(q)+'</li>').join('')+'</ol><div class="print-notes"><ul>'+(s.sources||[]).map(k=>{const src=db.sources[k];return src?'<li>'+E(src.title)+' '+(src.url?'<a href="'+E(src.url)+'">'+E(src.url)+'</a>':'')+'</li>':''}).join('')+'</ul></div></section>';}).join('');root.hidden=false;}
  window.addEventListener('beforeprint',preparePrint);
  $('print-button').onclick=()=>{preparePrint();window.print();};
  window.addEventListener('afterprint',()=>{$('print-root').hidden=true});
  window.addEventListener('hashchange',()=>{const id=resolveId(decodeURIComponent(location.hash.slice(1)));if(map.has(id)&&id!==state.id){if(!slides().includes(id))state.route='all';go(id);}});
  window.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select,[contenteditable=true]')||$('help-dialog').open)return;if(e.altKey||e.ctrlKey||e.metaKey)return;const k=e.key.toLowerCase();if(state.view!=='present'&&[' ','pagedown','pageup','home','end'].includes(k))return;if(k===' '&&e.target.closest('button,summary,a,[role=button]'))return;if(['arrowright','pagedown',' '].includes(k)){e.preventDefault();step(1)}else if(['arrowleft','pageup'].includes(k)){e.preventDefault();step(-1)}else if(k==='home'){e.preventDefault();go(slides()[0])}else if(k==='end'){e.preventDefault();go(slides().at(-1))}else if(k==='o')outlineToggle();else if(k==='n'){state.view='present';save('ai-talk-view',state.view);render();panel('notes');}else if(k==='t')$('theme-toggle').click();else if(k==='?')$('help-dialog').showModal();});
  if(innerWidth<901||read('ai-talk-outline','true')==='false'){document.body.classList.add('outline-hidden');$('outline-toggle').setAttribute('aria-expanded','false');}
  render();
})();

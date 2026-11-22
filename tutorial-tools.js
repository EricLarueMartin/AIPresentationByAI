/* A local teaching example. No AI calls, remote requests or project-file writes. */
(() => {
  'use strict';
  let serial = 0;
  const csv = 'time_s,temperature_C\n0,80\n60,65\n120,54\n180,46\n240,40';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const languages = {
    en: {
      title:'Choose an interface, then check its access',
      context:'Use these five invented cooling measurements. Check how fast the temperature changes during the first minute.',
      choose:'Choose an interface',
      interfaces:{browser:'Browser chat',workspace:'Workspace app / IDE',cli:'Command line (CLI)',notebook:'Notebook',api:'API / embedded application'},
      profiles:{
        browser:'Start a new chat in a browser assistant available to you. Paste the CSV below and ask: “Check the first interval in °C/s and show the calculation.” Use its code tool if one is available.',
        workspace:'Create a practice folder, save cooling.csv and open the folder in your assistant’s workspace or IDE. Ask it to prepare an analysis; review the changes and execution access.',
        cli:'Open a terminal in a practice folder and save cooling.csv there. If an AI CLI is installed, launch it in that folder and ask it to read the CSV and show the first-interval calculation.',
        notebook:'Put the CSV in one notebook cell. Ask for a calculation in the next cell, then run it and keep the displayed result beside the input.',
        api:'Your application supplies the input and handles model responses or tool requests. Its code defines the available operations.'
      },
      modality:'Input → output',
      modes:'CSV / text → numerical result + plot',
      modeNote:'Voice and image input require their own app, model or tool support.',
      tools:'Connected tools', permissions:'Allowed operations',
      runner:'Code runner connected', files:'Project-file tool connected', execute:'Allow code execution', write:'Allow writing a result file',
      settings:'These example settings do not change another app’s permissions.',
      check:'Run the local arithmetic check',
      missingRunner:'Connect a code runner to execute a check.',
      missingPermission:'The runner is connected; execution is not allowed yet.',
      ready:'Ready to execute the local example.',
      screenOnly:'The result can stay on screen; project-file access is optional.',
      writeReady:'A result-file write would be permitted in this example setup. This page does not perform that write.',
      writeMissing:'A write permission does not connect a file tool. Connect that tool before planning a file write.',
      filesReadOnly:'The project-file tool is connected; writing is not allowed.',
      beforeRun:'The result will appear here. The plot and CSV let you check the first interval by hand.',
      result:'Calculated from the first two measurements', rate:'First-interval signed rate',
      arithmetic:'(65 − 80) °C ÷ (60 − 0) s',
      checkText:'The negative sign means the temperature is falling. This is an average over the first interval.',
      scope:'The button runs local browser code. It makes no AI request or project-file changes, and fits no physical cooling model.',
      plotTitle:'Cooling example: the first interval is highlighted',
      plotDesc:'Five synthetic points: time 0, 60, 120, 180 and 240 seconds; temperature 80, 65, 54, 46 and 40 degrees Celsius. The first interval drops 15 degrees in 60 seconds.',
      time:'Time (s)', temperature:'Temperature (°C)', data:'Inspect cooling.csv · five rows',
      caption:'The first 60 seconds are highlighted. The points stay the same for every interface.',
      printSetup:'Worked configuration: notebook, connected code runner, execution allowed. Project-file access and writing are unnecessary for this on-screen check.',
      printResult:'Calculated from the first two measurements',
      failed:'The local fixture failed its known-answer check.'
    },
    es: {
      title:'Elija una interfaz y compruebe su acceso',
      context:'Use estas cinco temperaturas de enfriamiento inventadas. Compruebe cómo cambia la temperatura durante el primer minuto.',
      choose:'Elija una interfaz',
      interfaces:{browser:'Chat en el navegador',workspace:'Aplicación de trabajo / IDE',cli:'Línea de comandos (CLI)',notebook:'Cuaderno de cálculo',api:'API / aplicación integrada'},
      profiles:{
        browser:'Abra un chat nuevo en un asistente web al que tenga acceso. Pegue el CSV y pida: «Comprueba el primer intervalo en °C/s y muestra el cálculo». Use su herramienta de código si está disponible.',
        workspace:'Cree una carpeta de práctica, guarde cooling.csv y ábrala en el espacio de trabajo o IDE del asistente. Pida que prepare un análisis; revise los cambios y el permiso de ejecución.',
        cli:'Abra una terminal en una carpeta de práctica y guarde allí cooling.csv. Si tiene una CLI de IA instalada, iníciela en esa carpeta y pídale que lea el CSV y calcule el primer intervalo.',
        notebook:'Coloque el CSV en una celda del cuaderno. Pida el cálculo en la siguiente, ejecútela y conserve el resultado junto a la entrada.',
        api:'La aplicación aporta la entrada y gestiona respuestas o solicitudes de herramientas del modelo. Su código define las operaciones disponibles.'
      },
      modality:'Entrada → salida',
      modes:'CSV / texto → resultado numérico + gráfico',
      modeNote:'La entrada de voz e imágenes necesita compatibilidad específica de la aplicación, el modelo o las herramientas.',
      tools:'Herramientas conectadas', permissions:'Operaciones permitidas',
      runner:'Ejecutor de código conectado', files:'Herramienta de archivos conectada', execute:'Permitir ejecutar código', write:'Permitir escribir un archivo de resultados',
      settings:'Estos ajustes de ejemplo no cambian los permisos de otra aplicación.',
      check:'Ejecutar la comprobación aritmética local',
      missingRunner:'Conecte un ejecutor de código para realizar una comprobación.',
      missingPermission:'El ejecutor está conectado; todavía no se permite ejecutar.',
      ready:'Preparado para ejecutar el ejemplo local.',
      screenOnly:'El resultado puede quedarse en pantalla; el acceso a archivos del proyecto es opcional.',
      writeReady:'Esta configuración permitiría escribir un archivo de resultados. La página no realiza esa escritura.',
      writeMissing:'Un permiso de escritura no conecta una herramienta de archivos. Conéctela antes de planear una escritura.',
      filesReadOnly:'La herramienta de archivos está conectada; no se permite escribir.',
      beforeRun:'El resultado aparecerá aquí. El gráfico y el CSV permiten comprobar el primer intervalo a mano.',
      result:'Calculado con las dos primeras mediciones', rate:'Tasa con signo del primer intervalo',
      arithmetic:'(65 − 80) °C ÷ (60 − 0) s',
      checkText:'El signo negativo indica que la temperatura baja. Es una media durante el primer intervalo.',
      scope:'El botón ejecuta código local en el navegador. No realiza solicitudes de IA, cambia archivos del proyecto ni ajusta un modelo físico de enfriamiento.',
      plotTitle:'Ejemplo de enfriamiento: se destaca el primer intervalo',
      plotDesc:'Cinco puntos sintéticos: tiempos 0, 60, 120, 180 y 240 segundos; temperaturas 80, 65, 54, 46 y 40 grados Celsius. El primer intervalo baja 15 grados en 60 segundos.',
      time:'Tiempo (s)', temperature:'Temperatura (°C)', data:'Examinar cooling.csv · cinco filas',
      caption:'Se destacan los primeros 60 segundos. Los puntos son los mismos con cualquier interfaz.',
      printSetup:'Configuración ilustrada: cuaderno, ejecutor de código conectado y ejecución permitida. No hacen falta acceso a archivos del proyecto ni escritura para comprobar el resultado en pantalla.',
      printResult:'Calculado con las dos primeras mediciones',
      failed:'El ejemplo local no ha superado la comprobación de respuesta conocida.'
    }
  };
  const locale = language => language === 'es' ? 'es' : 'en';
  const number = (value, language, digits=2) => value.toLocaleString(language === 'es' ? 'es-ES' : 'en-US',{maximumFractionDigits:digits}).replace(/^-/, '−');
  function fixture() {
    const lines = csv.split('\n'), headers = lines.shift().split(',');
    const rows = lines.map(line => line.split(',').map(Number));
    const valid = headers.join(',') === 'time_s,temperature_C' && rows.length === 5 && rows.every(row => row.length === 2 && row.every(Number.isFinite));
    if (!valid) throw new Error('Invalid synthetic cooling fixture');
    const seconds = rows[1][0] - rows[0][0], delta = rows[1][1] - rows[0][1];
    const rate = delta / seconds;
    return {csv,headers,rows,seconds,delta,rate,perMinute:rate*60,pass:seconds===60&&delta===-15&&Math.abs(rate-(-0.25))<1e-12};
  }
  function access(configuration) {
    return {canExecute:!!configuration.runner&&!!configuration.execute,canWrite:!!configuration.files&&!!configuration.write};
  }
  function resultHTML(t,language,printed=false) {
    const result = fixture();
    if(!result.pass)throw new Error(t.failed);
    return `<p class="tt-result-heading" data-tt-computed>${escape(printed?t.printResult:t.result)}</p><p class="tt-rate-label">${escape(t.rate)}</p><output class="tt-rate">${number(result.rate,language)} °C/s <small>= ${number(result.perMinute,language)} °C/min</small></output><p class="tt-arithmetic">${escape(t.arithmetic)}</p><p class="tt-check-text">${escape(t.checkText)}</p>`;
  }
  function plot(t,uid) {
    const rows=fixture().rows, x=value=>62+value/240*320, y=value=>208-(value-40)/40*148;
    return `<svg class="tt-plot" viewBox="0 0 432 278" role="img" aria-labelledby="${uid}-plot-title ${uid}-plot-desc"><title id="${uid}-plot-title">${escape(t.plotTitle)}</title><desc id="${uid}-plot-desc">${escape(t.plotDesc)}</desc><text class="tt-axis-title" x="62" y="27" text-anchor="start">${escape(t.temperature)}</text>${[40,60,80].map(value=>`<path class="tt-grid" d="M62 ${y(value)}H382"/><text class="tt-tick" x="49" y="${y(value)+6}" text-anchor="end">${value}</text>`).join('')}<path class="tt-axis" d="M62 52V208H389"/>${[0,60,120,180,240].map(value=>`<text class="tt-tick" x="${x(value)}" y="235" text-anchor="middle">${value}</text>`).join('')}<text class="tt-axis-title" x="222" y="267" text-anchor="middle">${escape(t.time)}</text><path class="tt-series" d="${rows.map((row,index)=>(index?'L':'M')+x(row[0])+' '+y(row[1])).join(' ')}"/><path class="tt-highlight" d="M${x(rows[0][0])} ${y(rows[0][1])}L${x(rows[1][0])} ${y(rows[1][1])}"/>${rows.map((row,index)=>`<circle class="${index<2?'tt-point-active':'tt-point'}" cx="${x(row[0])}" cy="${y(row[1])}" r="5"/>`).join('')}<text class="tt-interval-label" x="145" y="62" text-anchor="start">−15 °C / 60 s</text></svg>`;
  }
  function controls(t,uid) {
    const checkbox=(key,label,checked=false)=>`<label class="tt-choice" for="${uid}-${key}"><input type="checkbox" id="${uid}-${key}" data-tt-control="${key}"${checked?' checked':''}><span>${escape(label)}</span></label>`;
    return `<div class="tt-interface"><label for="${uid}-interface">${escape(t.choose)}</label><select id="${uid}-interface" data-tt-interface>${Object.entries(t.interfaces).map(([key,label])=>`<option value="${key}">${escape(label)}</option>`).join('')}</select><p class="tt-profile" data-tt-profile>${escape(t.profiles.browser)}</p></div><div class="tt-capabilities"><fieldset><legend>${escape(t.tools)}</legend>${checkbox('runner',t.runner,true)}${checkbox('files',t.files)}</fieldset><fieldset><legend>${escape(t.permissions)}</legend>${checkbox('execute',t.execute)}${checkbox('write',t.write)}</fieldset></div><p class="tt-settings">${escape(t.settings)}</p><div class="tt-status" role="status" aria-live="polite"><p data-tt-execution>${escape(t.missingPermission)}</p><p data-tt-files>${escape(t.screenOnly)}</p></div><button class="tt-run" type="button" data-tt-run disabled>${escape(t.check)}</button>`;
  }
  function render(language='en',options={}) {
    const lang=locale(language),t=languages[lang],uid='tt-'+(++serial),printed=options?.print===true;
    return `<section class="tt-example${printed?' tt-print':''}" data-tutorial-tools data-tt-language="${lang}" aria-labelledby="${uid}-heading"><h2 id="${uid}-heading" class="tt-title">${escape(t.title)}</h2><p class="tt-context">${escape(t.context)}</p><div class="tt-modalities"><strong>${escape(t.modality)}</strong><span>${escape(t.modes)}</span></div><div class="tt-layout"><div class="tt-setup">${printed?`<p class="tt-print-setup">${escape(t.printSetup)}</p>`:controls(t,uid)}</div><div class="tt-worked"><figure class="tt-figure">${plot(t,uid)}<figcaption>${escape(t.caption)}</figcaption></figure>${printed?`<pre class="tt-csv">${escape(csv)}</pre>`:`<details class="tt-data"><summary>${escape(t.data)}</summary><pre class="tt-csv">${escape(csv)}</pre></details>`}<div class="tt-result" data-tt-result role="status" aria-live="polite">${printed?resultHTML(t,lang,true):`<p>${escape(t.beforeRun)}</p>`}</div></div></div><p class="tt-mode-note">${escape(t.modeNote)}</p><p class="tt-scope">${escape(t.scope)}</p></section>`;
  }
  function mount(container,language='en') {
    const roots=[];
    if(container?.matches?.('[data-tutorial-tools]'))roots.push(container);
    if(container?.querySelectorAll)roots.push(...container.querySelectorAll('[data-tutorial-tools]'));
    for(const root of roots){
      if(root.classList.contains('tt-print')||root.dataset.ttBound==='true')continue;
      root.dataset.ttBound='true';
      const lang=locale(root.dataset.ttLanguage||language),t=languages[lang];
      const get=key=>root.querySelector(`[data-tt-control="${key}"]`);
      const config=()=>Object.fromEntries(['runner','files','execute','write'].map(key=>[key,get(key).checked]));
      const update=()=>{
        const current=config(),allowed=access(current);
        const selected=root.querySelector('[data-tt-interface]').value;
        root.querySelector('[data-tt-profile]').textContent=t.profiles[selected]||t.profiles.browser;
        root.querySelector('[data-tt-execution]').textContent=!current.runner?t.missingRunner:!current.execute?t.missingPermission:t.ready;
        root.querySelector('[data-tt-files]').textContent=allowed.canWrite?t.writeReady:current.write&&!current.files?t.writeMissing:current.files?t.filesReadOnly:t.screenOnly;
        root.querySelector('[data-tt-run]').disabled=!allowed.canExecute;
        root.querySelector('[data-tt-result]').innerHTML=`<p>${escape(t.beforeRun)}</p>`;
      };
      root.addEventListener('change',update);
      root.querySelector('[data-tt-run]').addEventListener('click',()=>{
        if(!access(config()).canExecute)return;
        root.querySelector('[data-tt-result]').innerHTML=resultHTML(t,lang);
      });
      update();
    }
  }
  window.TutorialTools=Object.freeze({render,mount,inspect:()=>({...fixture(),interfaceIds:Object.keys(languages.en.interfaces)}),evaluate:access});
})();

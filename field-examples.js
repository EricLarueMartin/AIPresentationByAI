/* Worked illustrations only. No model calls, external files or presentation data are changed. */
(() => {
  'use strict';

  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const copy = {
    en: {
      invented: 'INVENTED NUMBERS · NOT A PUBLISHED RESULT',
      retention: 'Learning B can cost performance on A',
      fixed: 'The same 20 fixed test cases per task, before and after training on B.',
      earlier: 'Earlier task A', newer: 'New task B', correct: 'Correct / 20',
      before: 'Before B', after: 'After B', loss: 'correct on A', gain: 'correct on B',
      plotLabel: 'Hypothetical counts on fixed tests. Before training on B: task A 18 of 20, task B 4 of 20. After training on B: task A 12 of 20, task B 17 of 20. A loses 6 correct answers while B gains 13.',
      retentionCaption: {
        general: 'B improved, but A got worse. A method that protects old skills must be checked on both tasks.',
        technical: 'These counts illustrate forgetting and new-task gain separately. They are not measurements of replay, EWC, sleep-inspired training or any other method.',
        engineer: 'Tests stay fixed and outside training. A retention intervention would need its own controlled comparison at matched exposure; these invented counts establish no method’s efficacy.'
      },
      fixture: 'WORKED HANDOFF · SYNTHETIC CSV',
      handoff: 'Read the units before reporting the speed',
      request: {
        general: '“Use motion.csv to find the average speed in metres per second. Leave the input unchanged and show how you checked the units.”',
        technical: '“Estimate mean speed from motion.csv in m/s. Preserve the CSV; show the time conversion and run a known-answer acceptance check.”',
        engineer: '“Parse motion.csv using its time_ms and position_m headers. Preserve the source, report mean speed in m/s, and execute the duration and known-answer checks.”'
      },
      task: 'Task brief', source: 'Supplied artifact', header: 'The header supplies the unit.',
      diagnostic: 'If milliseconds are read as seconds', correction: 'Convert the time span',
      checked: 'Computed result', check: 'Acceptance check executed in this page',
      duration: 'Time span', distance: 'Distance', speed: 'Mean speed',
      durationCheck: 'Converted time span is 1 s', speedCheck: 'Speed is 2 m/s',
      pass: 'PASS', fail: 'FAIL',
      handoffCaption: {
        general: 'The browser reads these three made-up rows and runs the checks. The result comes from a calculation; no AI model is called.',
        technical: 'The browser computes this synthetic fixture and compares against the independent known answer. No model call or real measurement is involved; the supplied CSV text stays unchanged.',
        engineer: 'This fixture checks unit handling with a known answer, not general parser robustness. The browser executes the arithmetic and checks below; it does not claim an AI agent ran them.'
      }
    },
    es: {
      invented: 'NÚMEROS INVENTADOS · NO ES UN RESULTADO PUBLICADO',
      retention: 'Aprender B puede reducir el rendimiento en A',
      fixed: 'Los mismos 20 casos de prueba fijos por tarea, antes y después de entrenar con B.',
      earlier: 'Tarea anterior A', newer: 'Tarea nueva B', correct: 'Aciertos / 20',
      before: 'Antes de B', after: 'Después de B', loss: 'aciertos en A', gain: 'aciertos en B',
      plotLabel: 'Recuentos hipotéticos con pruebas fijas. Antes de entrenar con B: tarea A, 18 de 20; tarea B, 4 de 20. Después de entrenar con B: tarea A, 12 de 20; tarea B, 17 de 20. A pierde 6 aciertos mientras B gana 13.',
      retentionCaption: {
        general: 'B mejoró, pero A empeoró. Un método que proteja las habilidades anteriores debe comprobarse en ambas tareas.',
        technical: 'Estos recuentos ilustran por separado el olvido y la mejora en la tarea nueva. No son mediciones de repetición, EWC, entrenamiento inspirado en el sueño ni ningún otro método.',
        engineer: 'Las pruebas permanecen fijas y fuera del entrenamiento. Una intervención de retención necesitaría su propia comparación controlada con exposición equivalente; estos recuentos inventados no demuestran la eficacia de ningún método.'
      },
      fixture: 'TRASPASO ILUSTRADO · CSV SINTÉTICO',
      handoff: 'Lea las unidades antes de informar la velocidad',
      request: {
        general: '«Usa motion.csv para obtener la velocidad media en metros por segundo. Conserva la entrada y muestra cómo comprobaste las unidades».',
        technical: '«Estima la velocidad media de motion.csv en m/s. Conserva el CSV; muestra la conversión del tiempo y ejecuta una prueba de aceptación de respuesta conocida».',
        engineer: '«Interpreta motion.csv utilizando sus cabeceras time_ms y position_m. Conserva la fuente, informa la velocidad media en m/s y ejecuta las comprobaciones de duración y respuesta conocida».'
      },
      task: 'Encargo', source: 'Archivo suministrado', header: 'La cabecera indica la unidad.',
      diagnostic: 'Si se interpretan milisegundos como segundos', correction: 'Convertir el intervalo de tiempo',
      checked: 'Resultado calculado', check: 'Prueba de aceptación ejecutada en esta página',
      duration: 'Intervalo de tiempo', distance: 'Distancia', speed: 'Velocidad media',
      durationCheck: 'El intervalo convertido es 1 s', speedCheck: 'La velocidad es 2 m/s',
      pass: 'PASA', fail: 'FALLA',
      handoffCaption: {
        general: 'El navegador lee estas tres filas inventadas y ejecuta las comprobaciones. El resultado procede de un cálculo; no se llama a un modelo de IA.',
        technical: 'El navegador calcula este ejemplo sintético y lo compara con la respuesta conocida independiente. No intervienen un modelo ni una medición real; el texto CSV suministrado se conserva.',
        engineer: 'Este caso comprueba las unidades con una respuesta conocida, no la robustez general del analizador. El navegador ejecuta la aritmética y las comprobaciones mostradas; no afirma que las haya ejecutado un agente de IA.'
      }
    }
  };

  function retention(t, audience) {
    const y = value => 232 - value * 9.5;
    const grid = [0, 5, 10, 15, 20].map(value => `
      <g class="fx-gridline"><path d="M58 ${y(value)}H378"/><text x="44" y="${y(value) + 6}">${value}</text></g>`).join('');
    return `<figure class="fx-example fx-retention">
      <p class="fx-disclosure">${escapeHTML(t.invented)}</p>
      <h2 class="fx-title">${escapeHTML(t.retention)}</h2>
      <p class="fx-context">${escapeHTML(t.fixed)}</p>
      <div class="fx-legend" aria-hidden="true"><span><i class="fx-key-a"></i>${escapeHTML(t.earlier)}</span><span><i class="fx-key-b"></i>${escapeHTML(t.newer)}</span></div>
      <svg class="fx-plot" viewBox="0 0 440 292" role="img" aria-label="${escapeHTML(t.plotLabel)}">
        <text class="fx-axis-label" x="58" y="23">${escapeHTML(t.correct)}</text>
        ${grid}
        <path class="fx-axis" d="M58 42V232H378"/>
        <path class="fx-series-a" d="M78 ${y(18)}L358 ${y(12)}"/>
        <path class="fx-series-b" d="M78 ${y(4)}L358 ${y(17)}"/>
        <g class="fx-marker-a"><circle cx="78" cy="${y(18)}" r="6"/><circle cx="358" cy="${y(12)}" r="6"/></g>
        <g class="fx-marker-b"><rect x="72" y="${y(4) - 6}" width="12" height="12"/><rect x="352" y="${y(17) - 6}" width="12" height="12"/></g>
        <g class="fx-counts"><text x="94" y="${y(18) - 9}">A: 18/20</text><text x="342" y="${y(12) + 28}" text-anchor="end">A: 12/20</text><text x="94" y="${y(4) + 28}">B: 4/20</text><text x="342" y="${y(17) - 14}" text-anchor="end">B: 17/20</text></g>
        <g class="fx-phase"><text x="78" y="269">${escapeHTML(t.before)}</text><text x="358" y="269">${escapeHTML(t.after)}</text></g>
      </svg>
      <div class="fx-change-strip"><span class="fx-loss">−6 <small>${escapeHTML(t.loss)}</small></span><span class="fx-gain">+13 <small>${escapeHTML(t.gain)}</small></span></div>
      <figcaption>${escapeHTML(t.retentionCaption[audience])}</figcaption>
    </figure>`;
  }

  // The handoff result and PASS/FAIL labels are computed, not a fictional execution transcript.
  function motionFixture() {
    const csv = 'time_ms,position_m\n0,0\n500,1\n1000,2';
    const lines = csv.split('\n');
    const header = lines.shift().split(',');
    const timeIndex = header.indexOf('time_ms');
    const positionIndex = header.indexOf('position_m');
    const rows = lines.map(line => line.split(',').map(Number));
    if (timeIndex < 0 || positionIndex < 0 || rows.some(row => row.length !== 2 || row.some(v => !Number.isFinite(v)))) {
      throw new Error('Invalid synthetic motion fixture');
    }
    const first = rows[0], last = rows[rows.length - 1];
    const elapsedMs = last[timeIndex] - first[timeIndex];
    const elapsedS = elapsedMs / 1000;
    const distanceM = last[positionIndex] - first[positionIndex];
    const speed = distanceM / elapsedS;
    const durationOK = Math.abs(elapsedS - 1) < 1e-12;
    const speedOK = Math.abs(speed - 2) < 1e-12;
    return {csv, rows, elapsedMs, elapsedS, distanceM, speed, naive: distanceM / elapsedMs, durationOK, speedOK};
  }

  function handoff(t, audience) {
    const result = motionFixture();
    const check = (ok, label, expression) => `<div class="fx-check-row"><strong class="${ok ? 'fx-pass' : 'fx-fail'}">${escapeHTML(ok ? t.pass : t.fail)}</strong><span>${escapeHTML(label)}</span>${audience === 'engineer' ? `<code>${escapeHTML(expression)}</code>` : ''}</div>`;
    const dataRows = result.rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join('');
    return `<figure class="fx-example fx-handoff">
      <p class="fx-disclosure">${escapeHTML(t.fixture)}</p>
      <h2 class="fx-title">${escapeHTML(t.handoff)}</h2>
      <blockquote class="fx-brief"><span>${escapeHTML(t.task)}</span>${escapeHTML(t.request[audience])}</blockquote>
      <div class="fx-artifact">
        <div class="fx-file-heading"><span>${escapeHTML(t.source)}</span><strong>motion.csv</strong></div>
        <table class="fx-csv"><thead><tr><th scope="col"><mark>time_ms</mark></th><th scope="col">position_m</th></tr></thead><tbody>${dataRows}</tbody></table>
        <p class="fx-header-note">${escapeHTML(t.header)}</p>
        <p class="fx-diagnostic">${escapeHTML(t.diagnostic)}: <s>${result.naive.toFixed(3)} m/s</s></p>
        <div class="fx-conversion"><span>${escapeHTML(t.correction)}</span><code>${result.elapsedMs} ms ÷ 1000 = ${result.elapsedS.toFixed(3)} s</code></div>
        <div class="fx-result"><span>${escapeHTML(t.checked)}</span><output>${result.distanceM.toFixed(3)} m ÷ ${result.elapsedS.toFixed(3)} s = <strong>${result.speed.toFixed(3)} m/s</strong></output></div>
        <div class="fx-check"><h3>${escapeHTML(t.check)}</h3>${check(result.durationOK, t.durationCheck, 'Math.abs(elapsedS - 1) < 1e-12')}${check(result.speedOK, t.speedCheck, 'Math.abs(speed - 2) < 1e-12')}</div>
      </div>
      <figcaption>${escapeHTML(t.handoffCaption[audience])}</figcaption>
    </figure>`;
  }

  function render(id, language = 'en', audience = 'technical') {
    const t = copy[language === 'es' ? 'es' : 'en'];
    const level = audience === 'general' || audience === 'engineer' ? audience : 'technical';
    if (String(id) === '32') return retention(t, level);
    if (String(id) === '38') return handoff(t, level);
    return '';
  }

  window.FieldExamples = Object.freeze({render});
})();

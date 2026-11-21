/* Synthetic data, numerical least squares and residual inspection. No AI call. */
(function () {
  'use strict';
  const SIGMA = 0.25;
  const TRUE = { A: 8.5, tau: 2.2, b: 1.5 };
  let serial = 0;
  let seed = 1142026;
  function random() {
    seed = (1664525 * seed + 1013904223) >>> 0;
    return (seed + 0.5) / 4294967296;
  }
  const data = Array.from({ length: 31 }, (_, i) => {
    const t = i * 0.3;
    const noise = Math.sqrt(-2 * Math.log(random())) * Math.cos(2 * Math.PI * random());
    return { t, y: TRUE.A * Math.exp(-t / TRUE.tau) + TRUE.b + SIGMA * noise };
  });
  function inverse(matrix) {
    const n = matrix.length;
    const a = matrix.map((row, i) => [...row, ...Array.from({ length: n }, (_, j) => +(i === j))]);
    for (let c = 0; c < n; c++) {
      let p = c;
      for (let r = c + 1; r < n; r++) if (Math.abs(a[r][c]) > Math.abs(a[p][c])) p = r;
      if (Math.abs(a[p][c]) < 1e-14) return null;
      [a[p], a[c]] = [a[c], a[p]];
      const v = a[c][c];
      for (let j = 0; j < 2 * n; j++) a[c][j] /= v;
      for (let r = 0; r < n; r++) if (r !== c) {
        const factor = a[r][c];
        for (let j = 0; j < 2 * n; j++) a[r][j] -= factor * a[c][j];
      }
    }
    return a.map(row => row.slice(n));
  }
  function atTau(tau, withBackground) {
    let se = 0, see = 0, sy = 0, sey = 0;
    data.forEach(p => {
      const e = Math.exp(-p.t / tau);
      se += e; see += e * e; sy += p.y; sey += e * p.y;
    });
    const n = data.length;
    const determinant = n * see - se * se;
    const A = withBackground ? (n * sey - se * sy) / determinant : sey / see;
    const b = withBackground ? (sy - A * se) / n : 0;
    const sse = data.reduce((sum, p) => sum + (p.y - A * Math.exp(-p.t / tau) - b) ** 2, 0);
    return { A, tau, b, sse };
  }
  function fit(withBackground) {
    // Variable projection: solve A (and b) exactly at each tau; search log(tau).
    const lo = Math.log(0.2), hi = Math.log(25), count = 240;
    let best = 0, bestValue = Infinity;
    for (let i = 0; i <= count; i++) {
      const value = atTau(Math.exp(lo + (hi - lo) * i / count), withBackground).sse;
      if (value < bestValue) { best = i; bestValue = value; }
    }
    let a = lo + (hi - lo) * Math.max(0, best - 1) / count;
    let b = lo + (hi - lo) * Math.min(count, best + 1) / count;
    const g = (Math.sqrt(5) - 1) / 2;
    let c = b - g * (b - a), d = a + g * (b - a);
    let fc = atTau(Math.exp(c), withBackground).sse;
    let fd = atTau(Math.exp(d), withBackground).sse;
    for (let i = 0; i < 85; i++) {
      if (fc < fd) { b = d; d = c; fd = fc; c = b - g * (b - a); fc = atTau(Math.exp(c), withBackground).sse; }
      else { a = c; c = d; fc = fd; d = a + g * (b - a); fd = atTau(Math.exp(d), withBackground).sse; }
    }
    const result = atTau(Math.exp((a + b) / 2), withBackground);
    result.k = withBackground ? 3 : 2;
    result.withBackground = withBackground;
    result.residuals = data.map(p => p.y - result.A * Math.exp(-p.t / result.tau) - result.b);
    result.chi2 = result.sse / SIGMA ** 2;
    result.reducedChi2 = result.chi2 / (data.length - result.k);
    result.aic = result.chi2 + 2 * result.k; // Known equal Gaussian sigma; shared constant omitted.
    const jtj = Array.from({ length: result.k }, () => Array(result.k).fill(0));
    data.forEach(p => {
      const e = Math.exp(-p.t / result.tau);
      const row = [e, result.A * e * p.t / result.tau ** 2];
      if (withBackground) row.push(1);
      row.forEach((x, i) => row.forEach((y, j) => { jtj[i][j] += x * y; }));
    });
    const inv = inverse(jtj);
    result.errors = inv ? inv.map((row, i) => Math.sqrt(Math.max(0, row[i] * SIGMA ** 2))) : [];
    return result;
  }
  const fits = [fit(false), fit(true)];
  const words = {
    en: {
      label: 'Synthetic decay fitting and residual diagnosis',
      badge: 'SYNTHETIC DATA · LOCAL NUMERICAL CODE',
      model: 'Compare models', pure: 'Decay only', background: 'Decay + background',
      caption: 'Same 31 observations · independent Gaussian noise · supplied σ = 0.25 a.u.',
      signal: 'Signal (a.u.)', time: 'Time (s)', residual: 'Residual (a.u.)',
      points: 'Observations', fit: 'Numerical fit', band: '±1σ reference',
      parameters: 'Fitted parameters ± approximate 1 standard error',
      metric: 'Model', k: 'Parameters', chi: 'Reduced χ²', aic: 'AIC*',
      pureMessage: 'The residuals curve systematically: the decay-only model is missing a constant background. Small error bars do not repair a wrong model.',
      bgMessage: 'Adding a background removes the main residual pattern and lowers AIC on the same data. This supports this candidate model for this synthetic example.',
      methods: 'Method and limits',
      methodText: 'For each positive τ, solve A and optional b by linear least squares; search τ from 0.2 to 25 s. Uncertainties use the local Jacobian covariance with the supplied σ. They assume this model, independent Gaussian errors and a locally linear approximation; they omit model-selection and systematic uncertainty.',
      aicText: '* AIC = χ² + 2k with the common Gaussian constant omitted. σ is supplied, not estimated, so k is 2 or 3. Compare only fits to these same observations and noise assumptions. Reduced χ² uses n − k degrees of freedom.',
      truth: 'Generating values: A = 8.5 a.u., τ = 2.2 s, b = 1.5 a.u. A fixed seeded noise sequence keeps the observations identical on every visit.',
      code: 'See the AI-authored Python equivalent',
      codeIntro: 'This page executes JavaScript. The self-contained SciPy example below fits the same values. No language-model prediction supplies the fitted numbers.',
      download: 'Download synthetic data',
      pipeline: 'Prompt → language model generates code → numerical fit → residuals → interpretation',
      plotDescription: 'Top: synthetic observations with one-sigma error bars and selected fitted curve. Bottom: residuals against time on the same horizontal scale, with a zero line and one-sigma reference band.'
    },
    es: {
      label: 'Ajuste de decaimiento sintético y diagnóstico de residuos',
      badge: 'DATOS SINTÉTICOS · CÁLCULO NUMÉRICO LOCAL',
      model: 'Comparar modelos', pure: 'Solo decaimiento', background: 'Decaimiento + fondo',
      caption: 'Las mismas 31 observaciones · ruido gaussiano independiente · σ conocida = 0,25 u.a.',
      signal: 'Señal (u.a.)', time: 'Tiempo (s)', residual: 'Residuo (u.a.)',
      points: 'Observaciones', fit: 'Ajuste numérico', band: 'Referencia ±1σ',
      parameters: 'Parámetros ajustados ± aproximadamente 1 error estándar',
      metric: 'Modelo', k: 'Parámetros', chi: 'χ² reducida', aic: 'AIC*',
      pureMessage: 'Los residuos presentan curvatura sistemática: el modelo sin fondo omite un fondo constante. Barras de error pequeñas no corrigen un modelo inadecuado.',
      bgMessage: 'Añadir un fondo elimina el patrón principal de los residuos y reduce el AIC con los mismos datos. Esto favorece este modelo candidato para este ejemplo sintético.',
      methods: 'Método y limitaciones',
      methodText: 'Para cada τ positiva, se calculan A y, si corresponde, b mediante mínimos cuadrados lineales; se busca τ entre 0,2 y 25 s. Las incertidumbres usan la covarianza del jacobiano local y la σ conocida. Suponen este modelo, errores gaussianos independientes y una aproximación local lineal; omiten incertidumbres sistemáticas y de selección del modelo.',
      aicText: '* AIC = χ² + 2k, omitiendo la constante gaussiana común. σ es conocida, no estimada, por lo que k es 2 o 3. Solo se comparan ajustes a estas mismas observaciones con las mismas hipótesis de ruido. La χ² reducida usa n − k grados de libertad.',
      truth: 'Valores generadores: A = 8,5 u.a., τ = 2,2 s, b = 1,5 u.a. Una secuencia de ruido con semilla fija conserva las mismas observaciones.',
      code: 'Ver el equivalente en Python escrito con IA',
      codeIntro: 'Esta página ejecuta JavaScript. El ejemplo autónomo de SciPy ajusta los mismos valores. Los resultados numéricos no proceden de una predicción del modelo de lenguaje.',
      download: 'Descargar datos sintéticos',
      pipeline: 'Petición → el modelo de lenguaje escribe código → ajuste numérico → residuos → interpretación',
      plotDescription: 'Arriba: observaciones sintéticas con barras de error de una sigma y la curva ajustada. Abajo: residuos en la misma escala de tiempo, con línea cero y banda de referencia de una sigma.'
    }
  };
  const fmt = (value, digits = 2) => Number(value).toFixed(digits);
  function plot(result, w, uid) {
    const width = 920, height = 350, left = 80, right = 22, xend = width - right;
    const x = t => left + t / 9 * (xend - left);
    const top = 18, bottom = 185, ryTop = 214, ryBottom = 284;
    const y = value => bottom - value / 11 * (bottom - top);
    const rmax = Math.max(0.8, ...fits.flatMap(f => f.residuals.map(Math.abs))) * 1.16;
    const ry = value => (ryTop + ryBottom) / 2 - value / (2 * rmax) * (ryBottom - ryTop);
    let svg = `<svg class="demo-plot" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${uid}-title ${uid}-desc"><title id="${uid}-title">${w.label}</title><desc id="${uid}-desc">${w.plotDescription}</desc>`;
    [0, 2, 4, 6, 8, 10].forEach(v => { svg += `<line class="demo-grid" x1="${left}" y1="${y(v)}" x2="${xend}" y2="${y(v)}"/><text class="demo-tick" x="${left - 12}" y="${y(v) + 4}" text-anchor="end">${v}</text>`; });
    [0, 1.5, 3, 4.5, 6, 7.5, 9].forEach(v => { svg += `<line class="demo-grid" x1="${x(v)}" y1="${top}" x2="${x(v)}" y2="${ryBottom}"/><text class="demo-tick" x="${x(v)}" y="${ryBottom + 25}" text-anchor="middle">${v}</text>`; });
    svg += `<rect class="demo-band" x="${left}" y="${ry(SIGMA)}" width="${xend - left}" height="${ry(-SIGMA) - ry(SIGMA)}"/><line class="demo-zero" x1="${left}" y1="${ry(0)}" x2="${xend}" y2="${ry(0)}"/>`;
    [-1, 0, 1].forEach(v => { if (Math.abs(v) <= rmax) svg += `<text class="demo-tick" x="${left - 12}" y="${ry(v) + 4}" text-anchor="end">${v}</text>`; });
    const path = Array.from({ length: 181 }, (_, i) => {
      const t = i * 0.05;
      return `${i ? 'L' : 'M'}${x(t).toFixed(2)},${y(result.A * Math.exp(-t / result.tau) + result.b).toFixed(2)}`;
    }).join(' ');
    svg += `<path class="demo-fitcurve" d="${path}"/>`;
    data.forEach((p, i) => {
      svg += `<line class="demo-error" x1="${x(p.t)}" y1="${y(p.y - SIGMA)}" x2="${x(p.t)}" y2="${y(p.y + SIGMA)}"/><circle class="demo-point" cx="${x(p.t)}" cy="${y(p.y)}" r="3.5"/><circle class="demo-residual" cx="${x(p.t)}" cy="${ry(result.residuals[i])}" r="3.5"/>`;
    });
    svg += `<text class="demo-axis" transform="translate(18 ${(top + bottom) / 2}) rotate(-90)" text-anchor="middle">${w.signal}</text><text class="demo-axis" transform="translate(18 ${(ryTop + ryBottom) / 2}) rotate(-90)" text-anchor="middle">${w.residual}</text><text class="demo-axis" x="${(left + xend) / 2}" y="${height - 5}" text-anchor="middle">${w.time}</text></svg>`;
    return svg;
  }
  function python(result) {
    const t = data.map(p => fmt(p.t, 1)).join(', ');
    const y = data.map(p => fmt(p.y, 8)).join(', ');
    const parameters = result.withBackground ? 'A, tau, b' : 'A, tau';
    return `import numpy as np\nfrom scipy.optimize import curve_fit\nimport matplotlib.pyplot as plt\n\n# Synthetic observations, not a scientific measurement.\nt = np.array([${t}])  # seconds\ny = np.array([${y}])  # arbitrary units\nsigma = np.full_like(t, 0.25)  # supplied, not fitted\n\ndef model(t, ${parameters}):\n    return A * np.exp(-t / tau)${result.withBackground ? ' + b' : ''}\n\np, covariance = curve_fit(model, t, y,\n    p0=${result.withBackground ? '[8, 2, 1]' : '[8, 3]'}, sigma=sigma, absolute_sigma=True,\n    bounds=(${result.withBackground ? '[0, 0.2, -np.inf], [np.inf, 25, np.inf]' : '[0, 0.2], [np.inf, 25]'}))\nresidual = y - model(t, *p)\nchi2 = np.sum((residual / sigma)**2)\nk = len(p)\nprint("parameters:", p, "+/-", np.sqrt(np.diag(covariance)))\nprint("reduced chi-squared:", chi2 / (len(t) - k))\nprint("AIC (common constant omitted):", chi2 + 2*k)\n\nfig, (ax, rx) = plt.subplots(2, 1, sharex=True,\n    gridspec_kw={"height_ratios": [3, 1]})\nax.errorbar(t, y, yerr=sigma, fmt="o", label="synthetic data")\nax.plot(t, model(t, *p), label="fit")\nax.set_ylabel("Signal (a.u.)"); ax.legend()\nrx.axhline(0, color="gray")\nrx.scatter(t, residual)\nrx.set(xlabel="Time (s)", ylabel="Residual (a.u.)")\nplt.show()`;
  }
  const css = `
    .science-demo{font-size:clamp(.78rem,1vw,.98rem);color:var(--text);min-width:0}
    .science-demo .demo-top{display:flex;align-items:center;justify-content:space-between;gap:.7rem;flex-wrap:wrap}
    .science-demo .demo-badge{font-size:.65rem;letter-spacing:.1em;font-weight:750;color:var(--accent)}
    .science-demo .demo-controls{display:flex;gap:.35rem;flex-wrap:wrap}
    .science-demo .demo-button{font:inherit;padding:.45rem .7rem;border:1px solid var(--line);border-radius:7px;background:var(--panel);color:var(--text);cursor:pointer}
    .science-demo .demo-button[aria-pressed="true"]{background:var(--accent);color:var(--bg);border-color:var(--accent);font-weight:700}
    .science-demo .demo-button:focus-visible,.science-demo summary:focus-visible{outline:3px solid var(--accent);outline-offset:3px}
    .science-demo .demo-caption{color:var(--muted);font-size:.75rem;margin:.55rem 0 .2rem}
    .science-demo .demo-plot{width:100%;height:auto;display:block;min-height:180px;max-height:340px}
    .science-demo .demo-grid{stroke:var(--line);stroke-width:.8}
    .science-demo .demo-tick{font:20px system-ui;fill:var(--muted)}
    .science-demo .demo-axis{font:18px system-ui;fill:var(--muted)}
    .science-demo .demo-point{fill:var(--panel);stroke:var(--text);stroke-width:1.6}
    .science-demo .demo-error{stroke:var(--muted);stroke-width:1.2}
    .science-demo .demo-fitcurve{fill:none;stroke:var(--accent);stroke-width:3}
    .science-demo .demo-residual{fill:var(--accent)}
    .science-demo .demo-band{fill:var(--accent);opacity:.08}
    .science-demo .demo-zero{stroke:var(--muted);stroke-width:1.2;stroke-dasharray:5 4}
    .science-demo .demo-summary{display:grid;grid-template-columns:1fr 1fr;gap:1rem;align-items:start}
    .science-demo .demo-parameters{display:flex;gap:.8rem;flex-wrap:wrap;margin:.4rem 0;font-size:1rem;font-variant-numeric:tabular-nums}
    .science-demo .demo-parameters span{white-space:nowrap}
    .science-demo .demo-description{font-size:.7rem;color:var(--muted);margin:0}
    .science-demo .demo-table{width:100%;border-collapse:collapse;font-size:.75rem;font-variant-numeric:tabular-nums}
    .science-demo .demo-table th,.science-demo .demo-table td{padding:.35rem .45rem;border-bottom:1px solid var(--line);text-align:right}
    .science-demo .demo-table th:first-child,.science-demo .demo-table td:first-child{text-align:left}
    .science-demo .demo-table tr[aria-current="true"]{color:var(--accent);font-weight:700}
    .science-demo .demo-insight{border-left:3px solid var(--accent);padding:.5rem .75rem;margin:.7rem 0;font-size:.85rem;background:var(--panel)}
    .science-demo .demo-pipeline{font-size:.72rem;color:var(--muted);margin:.5rem 0}
    .science-demo details{font-size:.78rem;border-top:1px solid var(--line);padding:.5rem 0}
    .science-demo summary{cursor:pointer;color:var(--muted)}
    .science-demo details p{line-height:1.5;margin:.5rem 0}
    .science-demo pre{white-space:pre;overflow:auto;background:var(--panel);padding:.8rem;border-radius:7px;font-size:.72rem;max-height:300px;line-height:1.5}
    .science-demo .demo-download{margin:.3rem 0;font-size:.73rem}
    @media(max-width:650px){.science-demo .demo-summary{grid-template-columns:1fr;gap:.3rem}.science-demo .demo-plot{min-height:155px}.science-demo .demo-controls{width:100%}.science-demo .demo-button{flex:1}.science-demo .demo-table{font-size:.69rem}}
  `;
  function escape(value) { return String(value).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }
  function mount(container, language) {
    const w = words[language === 'es' ? 'es' : 'en'];
    const uid = `science-demo-${++serial}`;
    let selected = 0;
    function render() {
      const r = fits[selected];
      container.innerHTML = `<section class="science-demo" aria-label="${w.label}"><style>${css}</style>
        <div class="demo-top"><span class="demo-badge">${w.badge}</span><div class="demo-controls" role="group" aria-label="${w.model}">
          <button type="button" class="demo-button" data-model="0" aria-pressed="${selected === 0}">${w.pure}</button>
          <button type="button" class="demo-button" data-model="1" aria-pressed="${selected === 1}">${w.background}</button></div></div>
        <p class="demo-caption">${w.caption}</p>${plot(r, w, uid)}
        <div class="demo-summary"><div><p class="demo-description">${w.parameters}</p><div class="demo-parameters">
          <span>A = ${fmt(r.A)} ± ${fmt(r.errors[0])}</span><span>τ = ${fmt(r.tau)} ± ${fmt(r.errors[1])} s</span>${r.withBackground ? `<span>b = ${fmt(r.b)} ± ${fmt(r.errors[2])}</span>` : ''}</div></div>
          <table class="demo-table"><thead><tr><th>${w.metric}</th><th>k</th><th>${w.chi}</th><th>${w.aic}</th></tr></thead><tbody>${fits.map((f, i) => `<tr aria-current="${selected === i}"><td>${i ? w.background : w.pure}</td><td>${f.k}</td><td>${fmt(f.reducedChi2)}</td><td>${fmt(f.aic, 1)}</td></tr>`).join('')}</tbody></table></div>
        <p class="demo-insight" role="status">${r.withBackground ? w.bgMessage : w.pureMessage}</p>
        <p class="demo-pipeline">${w.pipeline}</p>
        <details><summary>${w.methods}</summary><p>${w.methodText}</p><p>${w.aicText}</p><p>${w.truth}</p><button type="button" class="demo-button demo-download">${w.download}</button></details>
        <details><summary>${w.code}</summary><p>${w.codeIntro}</p><pre><code>${escape(python(r))}</code></pre></details></section>`;
      container.querySelectorAll('[data-model]').forEach(button => {
        button.addEventListener('click', () => {
          const index = Number(button.dataset.model);
          if (index === selected) return;
          selected = index;
          render();
          container.querySelector(`[data-model="${selected}"]`).focus({ preventScroll: true });
        });
      });
      container.querySelector('.demo-download').addEventListener('click', () => {
        const csv = 'time_s,signal_au,sigma_au\n' + data.map(p => `${p.t.toFixed(1)},${p.y.toFixed(8)},${SIGMA}`).join('\n') + '\n';
        const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
        const anchor = document.createElement('a');
        anchor.href = url; anchor.download = 'synthetic-decay.csv'; anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      });
    }
    render();
  }
  window.ScienceDemo = {
    mount,
    getResults: () => JSON.parse(JSON.stringify({ sigma: SIGMA, truth: TRUE, data, fits }))
  };
})();

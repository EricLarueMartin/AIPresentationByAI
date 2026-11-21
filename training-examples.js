/* Quantitative teaching examples. No model calls or training are performed. */
(() => {
  'use strict';
  let sequence = 0;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dimension = 4096, rank = 8;
  const baseParameters = dimension * dimension;
  const adapterParameters = 2 * dimension * rank;
  const methods = ['scratch', 'full', 'lora', 'qlora'];
  // Fixed synthetic scores. Twenty clips contain the wake word; eighty do not.
  // Only the decision threshold changes. Scores are not calibrated probabilities.
  const clips = [
    ...Array.from({length:14}, (_, i) => ({wake:true, score:0.96 - i * 0.02})),
    ...[0.60,0.55,0.48,0.40,0.20,0.10].map(score => ({wake:true, score})),
    ...[0.85,0.80,0.73,0.70].map(score => ({wake:false, score})),
    ...Array.from({length:12}, (_, i) => ({wake:false, score:0.62 - i * 0.023})),
    ...Array.from({length:64}, (_, i) => ({wake:false, score:0.30 - i * 0.004}))
  ];
  const lexicon = {
    en: {
      trainingTitle:'Which weights may change?', trainingLegend:'Choose a training method',
      scratch:'From scratch', full:'Full fine-tuning', lora:'LoRA', qlora:'QLoRA',
      syntheticMatrix:'ILLUSTRATIVE MATRIX · NOT A MODEL TRAINING RUN',
      dimension:'One linear weight matrix: 4,096 × 4,096; adapter rank r = 8.',
      trainable:'TRAINABLE', frozen:'FROZEN', initial:'Initialization', count:'Trainable parameters', raw:'Raw stored weights',
      random:'Random initialization', pretrained:'Pretrained checkpoint', quantized:'Pretrained base, stored at 4 bits',
      base:'Base W', factors:'Trainable factors', effective:'Effective transformation W′', output:'Output', optimizer:'Optimizer updates W',
      baseLabel:'4,096 × 4,096', bLabel:'B: 4,096 × 8', aLabel:'A: 8 × 4,096',
      scratchExplanation:'Every coefficient in this example matrix is eligible for learning. Starting from random weights requires learning representations as well as the target task.',
      fullExplanation:'The same 16,777,216 coefficients are eligible for updates, but training begins with pretrained weights. The initialization and data workload distinguish this from training from scratch.',
      loraExplanation:'Freeze W and train B and A. Their 65,536 coefficients are 0.390625% of the base matrix’s parameter count. The matrix product constrains the update to rank at most 8.',
      qloraExplanation:'Keep the base frozen in a low-bit representation and train higher-precision factors. Four-bit storage does not mean every arithmetic operation or adapter weight uses four bits.',
      fullMemory:'32 MiB base', loraMemory:'32 MiB base + 128 KiB adapters', qloraMemory:'8 MiB base + 128 KiB adapters',
      scope:'Counts refer to this one matrix, not a whole model. MiB = 2²⁰ bytes; KiB = 2¹⁰ bytes. The raw estimates assume 16-bit base/adapters except the nominal 4-bit QLoRA base. Quantization metadata and all working state are excluded.',
      legendTrainable:'Solid border: may receive a parameter update', legendFrozen:'Dashed border: frozen base',
      diagramScope:'The grid is a schematic of groups of weights. The effective transformation is a mathematical view, not a claim that another full matrix is allocated.',
      generalCaption:'The model can keep its existing weights fixed while learning a much smaller adjustment. Extra memory is still needed while training runs.',
      technicalCaption:'Fewer trainable weights reduce gradient and optimizer state. They do not remove the base computation or activation storage, and do not predict an equal reduction in training time.',
      engineerCaption:'For this matrix, dr + rd = 65,536 versus d² = 16,777,216: 256× fewer trainable coefficients. Backpropagation through relevant frozen operations remains; optimizer precision, checkpointing and target-module placement determine practical memory.',
      evaluationTitle:'One threshold, two kinds of error', evaluationLegend:'Change only the decision threshold',
      low:'Lower cutoff · 0.35', high:'Higher cutoff · 0.65', syntheticEvaluation:'100 SYNTHETIC CLIPS · FIXED LABELS AND SCORES',
      evaluationIntro:'20 clips contain the wake word; 80 do not. Raising the cutoff makes the detector trigger less often.',
      matrixCaption:'Rows show the known label; columns show the detector’s decision.', actual:'Known label', triggers:'Triggers', silent:'No trigger',
      present:'Wake word present', absent:'Wake word absent', tp:'Correct detections', fn:'Missed wakes', fp:'False alarms', tn:'Correct rejections',
      tileCaption:'Each tile is one clip, grouped by the known label. The first 20 are wake-word clips. The same clips keep the same positions at both thresholds.',
      recall:'Wake recall', falseRate:'False-alarm rate', precision:'Trigger precision', accuracy:'Overall accuracy',
      recallDetail:'of the 20 wake-word clips', falseDetail:'of the 80 clips without the word', precisionDetail:'of all detector triggers', accuracyDetail:'of all 100 clips',
      lowInterpretation:'The lower cutoff detects 18 of 20 wakes, but also triggers on 16 clips without the word.',
      highInterpretation:'The higher cutoff removes 12 false alarms and loses 4 correct detections. Accuracy rises from 82% to 90% while wake recall falls from 90% to 70%.',
      generalEvaluation:'A detector that interrupts less often can also miss more real requests. Which error matters more depends on how the detector will be used.',
      technicalEvaluation:'These rates use clips as trials. A false-alarm percentage over clips is not a false-activation rate per hour of continuous listening. A trigger can open the next stage; it does not authorize an action.',
      engineerEvaluation:'Scores are illustrative and not assumed calibrated probabilities. Precision depends on prevalence, fixed here at 20%. Select a threshold on development data, then evaluate untouched sessions; include false activations per hour for a continuously running wake detector.',
      noBenchmark:'This example demonstrates arithmetic and a decision tradeoff. It is not a result from a real wake-word model or evidence of deployment performance.',
      metricMethod:'Metric definitions', metrics:'Recall = TP/(TP+FN). False-alarm rate = FP/(FP+TN). Precision = TP/(TP+FP). Accuracy = (TP+TN)/100.',
      sameData:'Nothing was retrained. Only score ≥ threshold changes the decision.'
    },
    es: {
      trainingTitle:'¿Qué pesos pueden cambiar?', trainingLegend:'Elija un método de entrenamiento',
      scratch:'Desde cero', full:'Ajuste completo', lora:'LoRA', qlora:'QLoRA',
      syntheticMatrix:'MATRIZ ILUSTRATIVA · NO ES UN ENTRENAMIENTO REAL',
      dimension:'Una matriz de pesos lineal: 4.096 × 4.096; rango del adaptador r = 8.',
      trainable:'AJUSTABLE', frozen:'FIJO', initial:'Inicialización', count:'Parámetros ajustables', raw:'Pesos almacenados en bruto',
      random:'Inicialización aleatoria', pretrained:'Punto de partida preentrenado', quantized:'Base preentrenada almacenada a 4 bits',
      base:'Base W', factors:'Factores ajustables', effective:'Transformación efectiva W′', output:'Salida', optimizer:'El optimizador actualiza W',
      baseLabel:'4.096 × 4.096', bLabel:'B: 4.096 × 8', aLabel:'A: 8 × 4.096',
      scratchExplanation:'Todos los coeficientes de esta matriz pueden aprenderse. Empezar con pesos aleatorios exige aprender representaciones además de la tarea deseada.',
      fullExplanation:'Los mismos 16.777.216 coeficientes pueden actualizarse, pero se parte de pesos preentrenados. La inicialización y la cantidad de datos procesados lo distinguen del entrenamiento desde cero.',
      loraExplanation:'Se fija W y se entrenan B y A. Sus 65.536 coeficientes equivalen al 0,390625 % del número de parámetros de la matriz base. El producto limita la actualización a un rango máximo de 8.',
      qloraExplanation:'La base permanece fija y almacenada con pocos bits; los factores se entrenan con mayor precisión. Almacenar a cuatro bits no implica que toda operación o peso del adaptador use cuatro bits.',
      fullMemory:'Base: 32 MiB', loraMemory:'Base: 32 MiB + adaptadores: 128 KiB', qloraMemory:'Base: 8 MiB + adaptadores: 128 KiB',
      scope:'Los recuentos corresponden a esta matriz, no al modelo completo. MiB = 2²⁰ bytes; KiB = 2¹⁰ bytes. Las estimaciones brutas suponen base y adaptadores a 16 bits, salvo la base QLoRA nominal de 4 bits. Se omiten metadatos de cuantización y todo estado de trabajo.',
      legendTrainable:'Borde continuo: puede recibir una actualización', legendFrozen:'Borde discontinuo: base fija',
      diagramScope:'La cuadrícula representa grupos de pesos. La transformación efectiva es una vista matemática; no implica asignar otra matriz completa en memoria.',
      generalCaption:'El modelo puede conservar sus pesos y aprender un ajuste mucho menor. El entrenamiento sigue necesitando memoria adicional.',
      technicalCaption:'Reducir los pesos ajustables reduce los gradientes y el estado del optimizador. No elimina el cálculo de la base ni las activaciones, ni predice una reducción igual del tiempo de entrenamiento.',
      engineerCaption:'Para esta matriz, dr + rd = 65.536 frente a d² = 16.777.216: 256 veces menos coeficientes ajustables. Sigue siendo necesaria la propagación por las operaciones fijas pertinentes; la precisión del optimizador, el guardado de activaciones y los módulos elegidos determinan la memoria práctica.',
      evaluationTitle:'Un umbral, dos tipos de error', evaluationLegend:'Cambie solo el umbral de decisión',
      low:'Umbral menor · 0,35', high:'Umbral mayor · 0,65', syntheticEvaluation:'100 CLIPS SINTÉTICOS · ETIQUETAS Y PUNTUACIONES FIJAS',
      evaluationIntro:'20 clips contienen la palabra de activación y 80 no. Elevar el umbral hace que el detector se active con menos frecuencia.',
      matrixCaption:'Las filas indican la etiqueta conocida y las columnas, la decisión del detector.', actual:'Etiqueta conocida', triggers:'Se activa', silent:'No se activa',
      present:'Palabra presente', absent:'Palabra ausente', tp:'Detecciones correctas', fn:'Activaciones omitidas', fp:'Falsas alarmas', tn:'Rechazos correctos',
      tileCaption:'Cada casilla representa un clip, agrupado por su etiqueta. Los primeros 20 contienen la palabra. Los mismos clips conservan su posición con ambos umbrales.',
      recall:'Sensibilidad', falseRate:'Tasa de falsas alarmas', precision:'Precisión de las activaciones', accuracy:'Exactitud global',
      recallDetail:'de los 20 clips con la palabra', falseDetail:'de los 80 clips sin la palabra', precisionDetail:'de todas las activaciones', accuracyDetail:'de los 100 clips',
      lowInterpretation:'El umbral menor detecta 18 de 20 palabras, pero también se activa en 16 clips que no la contienen.',
      highInterpretation:'El umbral mayor elimina 12 falsas alarmas y pierde 4 detecciones correctas. La exactitud sube del 82 % al 90 %, mientras que la sensibilidad baja del 90 % al 70 %.',
      generalEvaluation:'Un detector que interrumpe menos también puede perder más peticiones reales. La importancia de cada error depende de su uso.',
      technicalEvaluation:'Estas tasas usan clips como ensayos. El porcentaje de falsas alarmas por clip no equivale a falsas activaciones por hora de escucha continua. Detectar la palabra puede abrir la siguiente etapa; no autoriza una acción.',
      engineerEvaluation:'Las puntuaciones son ilustrativas y no se suponen probabilidades calibradas. La precisión depende de la prevalencia, fijada aquí en el 20 %. Elija el umbral con datos de desarrollo y evalúe sesiones intactas; incluya falsas activaciones por hora para un detector continuo.',
      noBenchmark:'El ejemplo muestra cálculos y un compromiso de decisión. No procede de un modelo real ni demuestra rendimiento operativo.',
      metricMethod:'Definiciones de las métricas', metrics:'Sensibilidad = VP/(VP+FN). Falsas alarmas = FP/(FP+VN). Precisión = VP/(VP+FP). Exactitud = (VP+VN)/100.',
      sameData:'No se ha reentrenado nada. Solo cambia la decisión: puntuación ≥ umbral.'
    }
  };
  const localized = lang => lang === 'es' ? 'es' : 'en';
  const audienceKey = audience => ['general','engineer'].includes(audience) ? audience : 'technical';
  const format = (number, lang, digits=0) => number.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US', {maximumFractionDigits:digits});
  function grid(x,y,size,trainable,random=false,lowBit=false) {
    let cells='';
    for(let row=0;row<8;row++)for(let col=0;col<8;col++){
      const tone=random?((row*17+col*11+row*col*3)%17)/17:(row+col+2)/16;
      const opacity=lowBit?0.18+Math.round(tone*3)*0.15:0.18+tone*0.46;
      cells+=`<rect x="${x+col*size/8}" y="${y+row*size/8}" width="${size/8-2}" height="${size/8-2}" rx="2" class="tx-cell ${trainable?'tx-adjustable':'tx-fixed'}" fill-opacity="${opacity.toFixed(2)}"/>`;
    }
    return cells;
  }
  function trainingDiagram(method,t,uid) {
    const adapter=method==='lora'||method==='qlora',fixed=adapter;
    let shape='';
    if(adapter){
      shape=grid(24,91,150,false,false,method==='qlora');
      shape+=`<text x="99" y="58" class="tx-svg-title">${escape(t.base)}</text><text x="99" y="78" class="tx-svg-small">${escape(t.frozen)}${method==='qlora'?' · 4-bit':''}</text><text x="99" y="264" class="tx-svg-small">${escape(t.baseLabel)}</text><text x="195" y="175" class="tx-svg-math">+</text>`;
      for(let i=0;i<8;i++)shape+=`<rect x="235" y="${91+i*150/8}" width="23" height="${150/8-2}" rx="2" class="tx-cell tx-adjustable"/><rect x="${302+i*150/8}" y="153" width="${150/8-2}" height="23" rx="2" class="tx-cell tx-adjustable"/>`;
      shape+=`<text x="344" y="58" class="tx-svg-title">${escape(t.factors)}</text><text x="344" y="78" class="tx-svg-small">${escape(t.trainable)} · 16-bit</text><text x="278" y="175" class="tx-svg-math">×</text><text x="247" y="264" class="tx-svg-small">${escape(t.bLabel)}</text><text x="377" y="205" class="tx-svg-small">${escape(t.aLabel)}</text><text x="480" y="175" class="tx-svg-math">=</text>`;
      shape+=grid(520,91,150,true);
      shape+=`<text x="595" y="58" class="tx-svg-title">${escape(t.effective)}</text><text x="595" y="264" class="tx-svg-small">W′ = W + (α/r)BA</text>`;
    }else{
      shape=grid(210,91,160,true,method==='scratch');
      shape+=`<text x="290" y="57" class="tx-svg-title">W · 4,096 × 4,096</text><text x="290" y="78" class="tx-svg-small">${escape(t.trainable)} · 16-bit</text><path d="M56 172 H189 M392 172 H559" class="tx-data-line" marker-end="url(#${uid}-arrow)"/><text x="94" y="150" class="tx-svg-title">x</text><text x="512" y="150" class="tx-svg-title">${escape(t.output)}</text><path d="M290 297 V263" class="tx-update-line" marker-end="url(#${uid}-arrow)"/><text x="464" y="308" class="tx-svg-small">${escape(t.optimizer)}</text>`;
    }
    const desc=adapter?`${t.base}: ${t.frozen}. ${t.factors}: ${t.trainable}. ${t.bLabel}; ${t.aLabel}. W′ = W + (α/r)BA.`:`${t.baseLabel}; ${t.trainable}. ${method==='scratch'?t.random:t.pretrained}.`;
    return `<svg class="tx-training-svg tx-training-landscape" viewBox="0 0 710 330" role="img" aria-labelledby="${uid}-title ${uid}-desc"><title id="${uid}-title">${escape(t[method])}</title><desc id="${uid}-desc">${escape(desc)}</desc><defs><marker id="${uid}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10Z" class="tx-arrowhead"/></marker></defs>${shape}</svg>`;
  }
  function trainingPortrait(method,t,uid) {
    const adapter=method==='lora'||method==='qlora';
    let shape='';
    if(adapter){
      shape=grid(23,70,110,false,false,method==='qlora');
      shape+=`<text x="78" y="29" class="tx-svg-title">${escape(t.base)}</text><text x="78" y="50" class="tx-svg-small">${escape(t.frozen)}${method==='qlora'?' · 4-bit':''}</text><text x="78" y="202" class="tx-svg-small">${escape(t.baseLabel)}</text><text x="162" y="136" class="tx-svg-math">+</text>`;
      for(let i=0;i<8;i++)shape+=`<rect x="196" y="${80+i*92/8}" width="14" height="${92/8-1.5}" rx="1" class="tx-cell tx-adjustable"/><rect x="${244+i*92/8}" y="120" width="${92/8-1.5}" height="14" rx="1" class="tx-cell tx-adjustable"/>`;
      shape+=`<text x="268" y="29" class="tx-svg-title">B × A</text><text x="268" y="50" class="tx-svg-small">${escape(t.trainable)}</text><text x="226" y="139" class="tx-svg-math">×</text><text x="205" y="202" class="tx-svg-small">4,096 × 8</text><text x="290" y="166" class="tx-svg-small">8 × 4,096</text><text x="180" y="268" class="tx-svg-math">=</text><text x="180" y="302" class="tx-svg-title">${escape(t.effective)}</text>`;
      shape+=grid(125,322,110,true);
      shape+=`<text x="180" y="460" class="tx-svg-small">W′ = W + (α/r)BA</text>`;
    }else{
      shape=grid(110,80,140,true,method==='scratch');
      shape+=`<text x="180" y="29" class="tx-svg-title">W · 4,096 × 4,096</text><text x="180" y="52" class="tx-svg-small">${escape(t.trainable)} · 16-bit</text><path d="M18 150 H96 M266 150 H342" class="tx-data-line" marker-end="url(#${uid}-arrow)"/><text x="46" y="125" class="tx-svg-title">x</text><text x="310" y="125" class="tx-svg-title">y</text><path d="M180 291 V235" class="tx-update-line" marker-end="url(#${uid}-arrow)"/><text x="180" y="318" class="tx-svg-small">${escape(t.optimizer)}</text>`;
    }
    const desc=adapter?`${t.base}: ${t.frozen}. B × A: ${t.trainable}. W′ = W + (α/r)BA.`:`${t.baseLabel}; ${t.trainable}. ${method==='scratch'?t.random:t.pretrained}.`;
    return `<svg class="tx-training-svg tx-training-portrait" viewBox="0 0 360 ${adapter?485:350}" role="img" aria-labelledby="${uid}-title ${uid}-desc"><title id="${uid}-title">${escape(t[method])}</title><desc id="${uid}-desc">${escape(desc)}</desc><defs><marker id="${uid}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10Z" class="tx-arrowhead"/></marker></defs>${shape}</svg>`;
  }
  function renderTraining(lang,audience,uid) {
    const t=lexicon[lang],a=audienceKey(audience);
    const choices=methods.map(method=>`<input class="tx-choice" type="radio" name="${uid}-method" id="${uid}-${method}" value="${method}"${method==='lora'?' checked':''}><label class="tx-option" for="${uid}-${method}">${escape(t[method])}</label>`).join('');
    const panels=methods.map(method=>{
      const adapter=method==='lora'||method==='qlora';
      const initial=method==='scratch'?t.random:method==='qlora'?t.quantized:t.pretrained;
      const storage=method==='qlora'?t.qloraMemory:adapter?t.loraMemory:t.fullMemory;
      return `<section class="tx-panel" data-tx-panel="${method}" aria-label="${escape(t[method])}">${trainingDiagram(method,t,uid+'-'+method+'-wide')}${trainingPortrait(method,t,uid+'-'+method+'-narrow')}<dl class="tx-numbers"><div><dt>${escape(t.initial)}</dt><dd>${escape(initial)}</dd></div><div><dt>${escape(t.count)}</dt><dd class="tx-value">${format(adapter?adapterParameters:baseParameters,lang)}</dd></div><div><dt>${escape(t.raw)}</dt><dd>${escape(storage)}</dd></div></dl><p class="tx-explanation">${escape(t[method+'Explanation'])}</p></section>`;
    }).join('');
    return `<section class="tx-example tx-training" data-tx-example="training" aria-labelledby="${uid}-heading"><p class="tx-badge">${escape(t.syntheticMatrix)}</p><h2 class="tx-heading" id="${uid}-heading">${escape(t.trainingTitle)}</h2><p class="tx-intro">${escape(t.dimension)}</p><fieldset class="tx-methods"><legend>${escape(t.trainingLegend)}</legend>${choices}<div class="tx-panels">${panels}</div></fieldset><div class="tx-legend"><span><i class="tx-swatch tx-adjustable" aria-hidden="true"></i>${escape(t.legendTrainable)}</span><span><i class="tx-swatch tx-fixed" aria-hidden="true"></i>${escape(t.legendFrozen)}</span></div><p class="tx-caption">${escape(t[a+'Caption'])}</p><details class="tx-details"><summary>${escape(lang==='es'?'Alcance de las cifras':'Scope of the numbers')}</summary><p>${escape(t.scope)}</p><p>${escape(t.diagramScope)}</p></details></section>`;
  }
  function statistics(threshold) {
    const result={tp:0,fn:0,fp:0,tn:0};
    for(const c of clips){const positive=c.score>=threshold;result[c.wake?(positive?'tp':'fn'):(positive?'fp':'tn')]++;}
    return {...result,recall:result.tp/(result.tp+result.fn),falseRate:result.fp/(result.fp+result.tn),precision:result.tp/(result.tp+result.fp),accuracy:(result.tp+result.tn)/clips.length};
  }
  function tiles(threshold,t) {
    return `<div class="tx-clips" role="img" aria-label="${escape(t.tileCaption)}">${clips.map((c,i)=>{const trigger=c.score>=threshold,key=c.wake?(trigger?'tp':'fn'):(trigger?'fp':'tn'),symbol={tp:'✓',fn:'−',fp:'+',tn:'·'}[key];return `<span class="tx-clip tx-${key}${c.wake?' tx-wake':''}" aria-hidden="true" data-tx-clip="${i+1}" data-tx-outcome="${key}">${symbol}</span>`;}).join('')}</div>`;
  }
  function renderEvaluation(lang,audience,uid) {
    const t=lexicon[lang],a=audienceKey(audience),percent=value=>format(value*100,lang,1)+'%';
    const choices=[0.35,0.65].map((threshold,i)=>`<input class="tx-choice" type="radio" name="${uid}-threshold" id="${uid}-cutoff-${i}" value="${threshold}"${i===0?' checked':''}><label class="tx-option" for="${uid}-cutoff-${i}">${escape(i?t.high:t.low)}</label>`).join('');
    const panels=[0.35,0.65].map((threshold,i)=>{
      const s=statistics(threshold);
      const cell=(key)=>`<td class="tx-${key}"><strong>${s[key]}</strong><span>${escape(t[key])}</span></td>`;
      const matrix=`<table class="tx-confusion"><caption>${escape(t.matrixCaption)}</caption><thead><tr><th scope="col">${escape(t.actual)}</th><th scope="col">${escape(t.triggers)}</th><th scope="col">${escape(t.silent)}</th></tr></thead><tbody><tr><th scope="row">${escape(t.present)}<small>20</small></th>${cell('tp')}${cell('fn')}</tr><tr><th scope="row">${escape(t.absent)}<small>80</small></th>${cell('fp')}${cell('tn')}</tr></tbody></table>`;
      const metrics=['recall','falseRate','precision','accuracy'].map(key=>`<div><dt>${escape(t[key])}</dt><dd>${percent(s[key])}</dd><small>${escape(t[{recall:'recallDetail',falseRate:'falseDetail',precision:'precisionDetail',accuracy:'accuracyDetail'}[key]])}</small></div>`).join('');
      return `<section class="tx-panel" data-tx-threshold="${threshold}" aria-label="${escape(i?t.high:t.low)}"><div class="tx-evaluation-grid"><figure class="tx-tile-figure">${tiles(threshold,t)}<figcaption>${escape(t.tileCaption)}</figcaption></figure>${matrix}</div><dl class="tx-metrics">${metrics}</dl><p class="tx-explanation">${escape(i?t.highInterpretation:t.lowInterpretation)}</p></section>`;
    }).join('');
    return `<section class="tx-example tx-evaluation" data-tx-example="evaluation" aria-labelledby="${uid}-heading"><p class="tx-badge">${escape(t.syntheticEvaluation)}</p><h2 class="tx-heading" id="${uid}-heading">${escape(t.evaluationTitle)}</h2><p class="tx-intro">${escape(t.evaluationIntro)}</p><fieldset class="tx-thresholds"><legend>${escape(t.evaluationLegend)}</legend>${choices}<div class="tx-panels">${panels}</div></fieldset><div class="tx-legend tx-outcome-legend">${['tp','fn','fp','tn'].map(key=>`<span><i class="tx-clip tx-${key}" aria-hidden="true">${{tp:'✓',fn:'−',fp:'+',tn:'·'}[key]}</i>${escape(t[key])}</span>`).join('')}</div><p class="tx-same-data">${escape(t.sameData)}</p><p class="tx-caption">${escape(t[a+'Evaluation'])}</p><details class="tx-details"><summary>${escape(t.metricMethod)}</summary><p>${escape(t.metrics)}</p><p>${escape(t.noBenchmark)}</p></details></section>`;
  }
  window.TrainingExamples={
    render(id,language='en',audience='technical'){
      const lang=localized(language),uid='tx-'+(++sequence);
      return String(id)==='23'?renderTraining(lang,audience,uid):String(id)==='28'?renderEvaluation(lang,audience,uid):'';
    },
    inspect(){return {dimension,rank,baseParameters,adapterParameters,baseFP16Bytes:baseParameters*2,base4BitBytes:baseParameters/2,adapterFP16Bytes:adapterParameters*2,clips:clips.map(c=>({...c})),low:statistics(0.35),high:statistics(0.65)};}
  };
})();

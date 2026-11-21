/* Topic-specific presentation visuals. SVGs show structure, not measured runs. */
(() => {
  'use strict';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const selected=[1,5];
  const texts=lang=>lang==='es'?{
    title:'Enrutamiento dentro de una capa MoE',
    description:'Ejemplo para un token: el enrutador selecciona los expertos E2 y E6. Reciben la misma representación del token. Sus salidas se combinan con los pesos del enrutador y el resultado continúa por el modelo. Los otros seis expertos no se ejecutan para este token.',
    input:'Representación de un token',layer:'Una capa MoE dentro del modelo',layerShort:'Una capa MoE',router:'Enrutador',choose:'Selecciona expertos y pesos',active:'ACTIVO',stored:'Disponible',combine:'Combinar salidas seleccionadas',weights:'Suma ponderada por el enrutador',output:'Continuar por el modelo',
    legendOn:'Se ejecuta para este token',legendOff:'No seleccionado para este token',
    caption:'Ejemplo: 2 de 8 expertos activos. Todos requieren almacenamiento. Se omiten conexiones residuales y normalización. La selección puede cambiar con el token y la capa.'
  }:{
    title:'Routing inside one MoE layer',
    description:'Illustration for one token: the router selects experts E2 and E6. They receive the same token representation. Their outputs are combined using router weights and the result continues through the model. The other six experts are not executed for this token.',
    input:'One token’s representation',layer:'One MoE layer inside the model',layerShort:'One MoE layer',router:'Router',choose:'Selects experts and weights',active:'ACTIVE',stored:'Available',combine:'Combine selected outputs',weights:'Weighted sum using router weights',output:'Continue through the model',
    legendOn:'Runs for this token',legendOff:'Not selected for this token',
    caption:'Illustration: 2 of 8 experts active. All experts need storage. Residual connections and normalization are omitted. Selection can change with the token and layer.'
  };
  function moeSvg(lang,narrow,id){
    const t=texts(lang),uid='moe-'+id+'-'+(narrow?'portrait':'landscape');
    const w=narrow?360:1000,h=narrow?625:540;
    const cx=w/2,routerY=narrow?91:95,routerW=narrow?240:330,routerH=68;
    const mergeY=narrow?470:378,mergeW=narrow?294:360;
    const positions=Array.from({length:8},(_,i)=>narrow?{x:48+(i%4)*88,y:i<4?224:358}:{x:90+i*(820/7),y:242});
    const expertW=narrow?74:94,expertH=70;
    const line=(d,active,attrs='')=>`<path d="${d}" class="moe-wire ${active?'selected':'available'}" ${active?`marker-end="url(#${uid}-arrow)"`:''} ${attrs}/>`;
    let branches='';
    // Available paths first, selected data paths on top. Dashed paths are possibilities, not work being run.
    for(const active of [false,true])for(let i=0;i<8;i++)if(selected.includes(i)===active){
      const p=positions[i],from=routerY+routerH;
      const d=narrow&&i>=4?`M${cx} ${from} V178 H4 V328 H${p.x} V${p.y}`:`M${cx} ${from} V${narrow?188:205} H${p.x} V${p.y}`;
      branches+=line(d,active,`data-route="expert-${i+1}"`);
    }
    const nodes=positions.map((p,i)=>`<g class="moe-expert ${selected.includes(i)?'selected':'available'}" data-expert="${i+1}" data-active="${selected.includes(i)}"><rect x="${p.x-expertW/2}" y="${p.y}" width="${expertW}" height="${expertH}" rx="12"/><text x="${p.x}" y="${p.y+29}" class="moe-expert-name">E${i+1}</text><text x="${p.x}" y="${p.y+53}" class="moe-expert-status">${esc(selected.includes(i)?t.active:t.stored)}</text></g>`).join('');
    const merge=selected.map(i=>{const p=positions[i],bus=narrow?(i<4?308:445):346;return line(`M${p.x} ${p.y+expertH} V${bus} H${cx} V${mergeY}`,true,`data-merge="expert-${i+1}"`);}).join('');
    return `<svg class="moe-svg ${narrow?'moe-portrait':'moe-landscape'}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="${uid}-title ${uid}-desc" data-layout="${narrow?'portrait':'landscape'}"><title id="${uid}-title">${esc(t.title)}</title><desc id="${uid}-desc">${esc(t.description)}</desc><defs><marker id="${uid}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" class="moe-arrowhead"/></marker></defs>
      <rect x="${narrow?1:12}" y="64" width="${narrow?358:976}" height="${narrow?490:394}" rx="20" class="moe-layer"/><text x="${narrow?14:31}" y="84" class="moe-layer-label">${esc(narrow?t.layerShort:t.layer)}</text>
      <text x="${cx}" y="31" class="moe-input">${esc(t.input)}</text>${line(`M${cx} 44 V${routerY}`,true)}
      <g class="moe-router" data-node="router"><rect x="${cx-routerW/2}" y="${routerY}" width="${routerW}" height="${routerH}" rx="12"/><text x="${cx}" y="${routerY+29}" class="moe-node-title">${esc(t.router)}</text><text x="${cx}" y="${routerY+52}" class="moe-node-detail">${esc(t.choose)}</text></g>
      ${branches}${nodes}${merge}
      <g class="moe-combine" data-node="combine"><rect x="${cx-mergeW/2}" y="${mergeY}" width="${mergeW}" height="66" rx="12"/><text x="${cx}" y="${mergeY+28}" class="moe-node-title">${esc(t.combine)}</text><text x="${cx}" y="${mergeY+51}" class="moe-node-detail">${esc(t.weights)}</text></g>
      ${line(`M${cx} ${mergeY+66} V${narrow?583:489}`,true,'data-route="next-layer"')}<text x="${cx}" y="${narrow?609:516}" class="moe-output">${esc(t.output)}</text>
    </svg>`;
  }
  function moe(lang,id){const t=texts(lang);return `<figure class="moe-figure" data-concept="moe">${moeSvg(lang,false,id)}${moeSvg(lang,true,id)}<div class="moe-legend"><span><i class="selected" aria-hidden="true"></i>${esc(t.legendOn)}</span><span><i class="available" aria-hidden="true"></i>${esc(t.legendOff)}</span></div><figcaption>${esc(t.caption)}</figcaption></figure>`;}
  function network(lang){const es=lang==='es';let lines='',nodes='';const layers=[[40,[40,110,180]],[155,[20,80,140,200]],[270,[60,160]]];for(let l=0;l<2;l++)for(const y of layers[l][1])for(const z of layers[l+1][1])lines+=`<line x1="${layers[l][0]+13}" y1="${y}" x2="${layers[l+1][0]-13}" y2="${z}"/>`;for(const [x,ys]of layers)for(const y of ys)nodes+=`<circle cx="${x}" cy="${y}" r="13"/>`;return `<figure class="network-figure" data-concept="network"><svg viewBox="0 0 310 240" role="img" aria-label="${es?'Red con capas de nodos conectados':'Network with layers of connected nodes'}"><g class="network-links">${lines}</g><g class="network-nodes">${nodes}</g></svg><figcaption>${es?'El entrenamiento ajusta los pesos de las conexiones para mejorar un objetivo. Esquema, no arquitectura de un modelo concreto.':'Training adjusts connection weights to improve an objective. Schematic, not a particular model architecture.'}</figcaption></figure>`;}
  function agentLoop(lang){const es=lang==='es';return `<figure class="concept-figure" data-concept="agent-loop"><svg viewBox="0 0 460 350" role="img" aria-label="${es?'Observar, actuar, comprobar y repetir si hace falta':'Observe, act, check and repeat if needed'}"><defs><marker id="agent-loop-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z"/></marker></defs><g class="concept-paths"><path d="M145 90 H315"/><path d="M365 140 V270 H280"/><path d="M180 270 H95 V140"/></g><g class="concept-nodes">${[[95,90,es?'Observar':'Observe'],[365,90,es?'Actuar':'Act'],[230,270,es?'Comprobar':'Check']].map(([x,y,label])=>`<circle cx="${x}" cy="${y}" r="50"/><text x="${x}" y="${y+6}">${label}</text>`).join('')}</g></svg><figcaption>${es?'Compruebe el estado real frente al objetivo. Repita solo si hace falta; deténgase cuando se cumpla el criterio o se necesite revisión.':'Compare actual state with the goal. Repeat only if needed; stop when the success criterion is met or review is required.'}</figcaption></figure>`;}
  function toolHub(lang){const es=lang==='es';return `<figure class="concept-figure" data-concept="tool-hub"><svg viewBox="0 0 460 360" role="img" aria-label="${es?'El asistente y la aplicación intercambian peticiones y resultados con código, búsqueda, archivos y sensores':'The assistant and application exchange requests and results with code, search, files and sensors'}"><g class="hub-links"><path d="M168 180 H100 M292 180 H360 M230 118 V77 M230 242 V283"/></g><g class="concept-nodes"><circle cx="230" cy="180" r="62"/><text x="230" y="175">${es?'Asistente':'Assistant'}</text><text x="230" y="199">${es?'+ aplicación':'+ application'}</text>${[[65,180,es?'Buscar':'Search'],[395,180,es?'Archivos':'Files'],[230,42,es?'Código':'Code'],[230,318,es?'Sensores':'Sensors']].map(([x,y,label])=>`<circle cx="${x}" cy="${y}" r="35"/><text x="${x}" y="${y+6}">${label}</text>`).join('')}</g></svg><figcaption>${es?'La aplicación ejecuta las herramientas permitidas y devuelve resultados. No todas las interfaces ofrecen las mismas herramientas.':'The application executes permitted tools and returns results. Available tools depend on the interface.'}</figcaption></figure>`;}
  window.PresentationVisuals={moe,moeSvg,network,agentLoop,toolHub};
})();

window.AUDIENCE_ES = {
  "general": {
    "1": {
      "title": "Obtener trabajo útil de la IA",
      "lead": "La IA resulta útil cuando ayuda a producir un resultado que puede comprobarse. Esta guía se preparó con ayuda de IA y está pendiente de revisión editorial.",
      "points": [],
      "reading": [
        "La IA puede ayudar a explicar un tema desconocido, redactar un informe o preparar un programa pequeño. Un buen comienzo es una tarea cuyo resultado pueda examinarse. Por ejemplo, pida resumir un documento suministrado y compruebe que sus afirmaciones importantes coinciden con la fuente.",
        "El mismo enfoque sirve para trabajo más técnico: describir el objetivo, proporcionar información relevante y revisar lo producido. Una respuesta que parece segura sigue necesitando comprobación. Esta guía distingue el modelo que genera la respuesta de las herramientas que pueden buscar, calcular o modificar archivos por él."
      ],
      "discussion": [
        "¿Qué tarea útil podría comprobarse lo suficiente para que constituyera un primer experimento razonable?"
      ],
      "notes": "Presente el resumen de un documento como ejemplo: la fuente permite comprobar si la respuesta conservó una limitación importante. Centre la apertura en la utilidad y la revisión, sin recitar una lista de comprobaciones.",
      "optional": "El material permite lectura independiente, presentación y debate. Los recorridos cortos seleccionan unas pocas ideas prácticas; los largos añaden mecanismos y experimentos publicados. Los pasajes de lectura aportan explicaciones sin necesitar un ponente, y las preguntas de debate conectan cada tema con decisiones de laboratorio o ingeniería. La IA ayudó a preparar esta revisión; la revisión editorial sigue pendiente.",
      "kind": "prose"
    },
    "2": {
      "title": "Cómo surgieron los asistentes actuales",
      "lead": "Los asistentes modernos surgieron de varias ideas distintas. La cronología recorre algunos ejemplos influyentes; los métodos anteriores siguen presentes en los sistemas actuales.",
      "points": [],
      "reading": [
        "Las primeras redes neuronales aprendían patrones sencillos mediante ejemplos. ELIZA, un programa conversacional publicado en 1966, utilizaba en cambio reglas escritas para producir respuestas. Avances posteriores hicieron práctico entrenar redes con varias capas, permitiéndoles aprender relaciones más complejas en los datos.",
        "Los modelos de lenguaje aprendieron patrones en secuencias de palabras. La arquitectura Transformer, presentada en Attention Is All You Need en 2017, ofreció otra forma de procesarlas. Los asistentes actuales combinan modelos entrenados con instrucciones y herramientas. Las ideas anteriores no han desaparecido: un sistema moderno puede contener reglas convencionales, programas numéricos y varios tipos de modelos aprendidos."
      ],
      "discussion": [
        "¿Por qué un sistema moderno de IA puede seguir incluyendo reglas escritas por personas?"
      ],
      "notes": "Las primeras redes neuronales aprendían patrones sencillos mediante ejemplos. ELIZA, un programa conversacional publicado en 1966, utilizaba en cambio reglas escritas para producir respuestas. Avances posteriores hicieron práctico entrenar redes con varias capas, permitiéndoles aprender relaciones más complejas en los datos.",
      "optional": "Esta historia no es una progresión única desde las reglas hasta la inteligencia. Las redes convolucionales capturan estructura espacial; las recurrentes y LSTM modelan secuencias; la atención es anterior al Transformer. Las capas de propagación hacia delante siguen siendo centrales en los Transformers. El artículo de retropropagación de 1986 popularizó y demostró el método, sin originar cada una de sus partes. Los modelos de lenguaje también son anteriores a las redes neuronales y a las interfaces conversacionales. Estas diferencias explican que un sistema moderno combine métodos de varias épocas.",
      "kind": "prose"
    },
    "3": {
      "title": "Las personas escriben reglas; los modelos aprenden patrones",
      "lead": "Las respuestas de ELIZA procedían de reglas escritas por personas. Un modelo neuronal de lenguaje aprende valores numéricos durante el entrenamiento.",
      "points": [
        "Las reglas escritas especifican qué hacer cuando aparece un patrón en la entrada.",
        "Los pesos aprendidos influyen en la respuesta tras ajustarse con ejemplos de entrenamiento."
      ],
      "reading": [
        "El guion DOCTOR de ELIZA buscaba patrones en un mensaje y construía una respuesta mediante reglas escritas por personas. Un modelo neuronal moderno aprende patrones al entrenarse: los datos cambian sus ajustes numéricos, llamados pesos. Utiliza esos ajustes aprendidos para responder a entradas nuevas.",
        "Las personas siguen eligiendo cómo se construye y entrena el modelo. Una nueva petición normalmente aporta información de trabajo en lugar de cambiar sus pesos. Una aplicación puede combinar un modelo entrenado con reglas y comprobaciones explícitas."
      ],
      "notes": "ELIZA usaba reglas escritas para reconocer patrones y construir respuestas. Un modelo neuronal moderno aprende patrones de los datos ajustando pesos numéricos. La IA incluye ambos enfoques, que pueden combinarse.",
      "optional": "Las personas eligen la arquitectura, los datos y el objetivo, aunque la correspondencia entre entrada y respuesta se aprenda. Una petición normal cambia el contexto actual; el entrenamiento cambia los pesos. Un sistema puede combinar un modelo entrenado con reglas, herramientas y comprobaciones explícitas.",
      "discussion": [
        "¿Qué tarea podría resolverse mediante una regla escrita clara?",
        "¿Qué tarea sería más fácil enseñar mediante ejemplos?"
      ],
      "kind": "comparison"
    },
    "4": {
      "title": "El texto se divide en fragmentos",
      "lead": "Los dos tokenizadores reciben exactamente la misma palabra. Fíjate en dónde termina el primer fragmento de cada fila.",
      "points": [],
      "reading": [
        "Antes de procesar texto, un modelo de lenguaje suele recibir una secuencia de fragmentos numerados llamados tokens. Un fragmento puede ser una palabra completa, parte de una palabra o puntuación. Un nombre desconocido puede necesitar varios fragmentos aunque parezca una sola palabra en la página.",
        "Sin espacio inicial, cl100k_base divide strawberry en str, aw y berry. o200k_base la divide en st, raw y berry. Ambos producen tres tokens en este ejemplo, aunque cambian los límites y los identificadores. En o200k_base, al añadir un espacio al principio, el espacio y la palabra entera forman un solo token. Siguen siendo tres erres."
      ],
      "discussion": [
        "¿Por qué un nombre técnico corto podría necesitar más fragmentos que una palabra familiar más larga?"
      ],
      "notes": "Antes de procesar texto, un modelo de lenguaje suele recibir una secuencia de fragmentos numerados llamados tokens. Un fragmento puede ser una palabra completa, parte de una palabra o puntuación. Un nombre desconocido puede necesitar varios fragmentos aunque parezca una sola palabra en la página.",
      "optional": "Sin espacio inicial, cl100k_base divide strawberry en str, aw y berry. o200k_base la divide en st, raw y berry. Ambos producen tres tokens en este ejemplo, aunque cambian los límites y los identificadores. En o200k_base, al añadir un espacio al principio, el espacio y la palabra entera forman un solo token. Siguen siendo tres erres.",
      "kind": "prose"
    },
    "5": {
      "title": "Contar las erres de strawberry",
      "lead": "Hay tres r minúsculas, en las posiciones 3, 8 y 9. La conversación muestra una primera respuesta seguida de una comprobación con Python.",
      "points": [],
      "reading": [
        "Strawberry, que significa fresa en inglés, tiene tres r minúsculas: st[r]awbe[r][r]y. Contando las letras desde 1, aparecen en las posiciones 3, 8 y 9. En una conversación del 3 de noviembre de 2024, GPT-4o respondió primero 2. El usuario repitió la pregunta y añadió «Use Python». El programa text.count(\"r\"), con text igual a \"strawberry\", devolvió 3 y GPT-4o dio ese resultado. Sebastian Krakowski publicó la conversación y el resultado del código en la figura 2 de su artículo de 2025.",
        "El resultado se puede comprobar con las letras visibles. Escribir código no equivale a ejecutarlo: la salida registrada muestra que se realizó el recuento. Un modelo también puede conocer la palabra y acertar sin herramientas. Este intercambio no explica por qué falló la primera respuesta ni mide con qué frecuencia se equivocan los modelos. El contador editable del navegador es otra demostración, que comprueba una entrada nueva mediante un cálculo local."
      ],
      "discussion": [
        "¿Qué aportó ejecutar el programa que no aportaba por sí sola la primera respuesta?"
      ],
      "notes": "Compare las dos respuestas con la palabra: una r en la posición 3 y otras dos en las posiciones 8 y 9. El código mostrado cuenta r minúsculas en la palabra exacta. Krakowski (2025), figura 2, documenta esta conversación de GPT-4o del 3 de noviembre de 2024. El contador del navegador es una demostración independiente. El caso publicado no explica por qué falló la primera respuesta.",
      "optional": "El contador opcional permite editar la palabra y ejecutar un programa en el navegador. Para «strawberry» devuelve 3 r, en las posiciones 3, 8 y 9 contando desde 1. Es una demostración distinta del caso publicado. No llama a GPT-4o ni reproduce su sesión de Python.",
      "kind": "prose"
    },
    "6": {
      "title": "Escriba una petición útil",
      "lead": "La concisión elimina palabras que no aportan nada útil. Debe conservar la información que determina la respuesta.",
      "points": [
        "Petición insuficiente: «Resume este informe».",
        "Encargo útil: «Resume el informe suministrado para una persona recién incorporada al equipo. Explica los términos desconocidos, conserva las limitaciones importantes y vincula las afirmaciones clave con la fuente»."
      ],
      "reading": [
        "«Resume esto» deja abiertas muchas decisiones. Una petición más útil podría decir: resume el informe suministrado para una persona recién incorporada al equipo, explica términos desconocidos, conserva las limitaciones importantes y devuelve tres párrafos breves. Las palabras añadidas describen para qué sirve el resultado y cómo debe redactarse.",
        "Las peticiones útiles indican el objetivo, la información relevante, las restricciones y la salida deseada. También explican cómo se comprobará el resultado. Elimine repeticiones y relleno, conservando detalles que cambiarían la respuesta. Si falta información necesaria, pida al asistente que identifique esa carencia antes de emprender un trabajo largo."
      ],
      "discussion": [
        "¿Qué necesitaría saber un asistente antes de resumir un informe para un nuevo colega?",
        "¿Qué detalle podría retirarse sin cambiar el resultado deseado?"
      ],
      "notes": "Utilice las dos peticiones como ejemplo. Pregunte qué requisito añadido cambia la respuesta. Evite sustituir el ejemplo por un número fijo de consejos para formular peticiones.",
      "optional": "Una plantilla reutilizable tiene seis campos: objetivo, contexto, restricciones, público, resultado deseado y criterios de aceptación. Complete solo los que importen. Un ejemplo puede aclarar un formato ambiguo mejor que varios párrafos de adjetivos. Si una restricción cambia la respuesta, merece conservarse incluso en una petición concisa.",
      "kind": "comparison"
    },
    "7": {
      "title": "Un asistente puede organizar un cálculo",
      "lead": "El modelo de lenguaje puede preparar un análisis, mientras el software numérico realiza el cálculo. En esta demostración el navegador calcula el ajuste directamente, sin llamar a un modelo de IA.",
      "points": [],
      "reading": [
        "Un asistente al que se pide ajustar una curva puede explicar la petición, preparar código e interpretar el resultado. Después, un programa numérico realiza el ajuste. Aplicar el modelo de IA entrenado se llama inferencia del modelo; estimar valores desconocidos a partir de mediciones también se llama inferencia en estadística. Son usos diferentes de la palabra.",
        "El ejemplo del navegador utiliza mediciones inventadas y calcula directamente mediante código, sin llamar a un modelo de IA. Compare la curva con las diferencias entre ella y los datos, llamadas residuos. Un ajuste aparentemente suave puede dejar un patrón en esas diferencias. Una explicación plausible debe comprobarse frente al resultado realmente calculado."
      ],
      "discussion": [
        "¿Qué parte de este ejemplo realiza el código numérico y qué aportaría un modelo de lenguaje?"
      ],
      "notes": "Un asistente al que se pide ajustar una curva puede explicar la petición, preparar código e interpretar el resultado. Después, un programa numérico realiza el ajuste. Aplicar el modelo de IA entrenado se llama inferencia del modelo; estimar valores desconocidos a partir de mediciones también se llama inferencia en estadística. Son usos diferentes de la palabra.",
      "optional": "Los datos de decaimiento son sintéticos e ilustran decisiones de análisis, en lugar de mediciones de un sistema físico. Un optimizador numérico minimiza una función objetivo; no demuestra un mecanismo físico. Generar código no prueba que se haya ejecutado, y la interpretación escrita debe comprobarse frente a los resultados numéricos reales y la estructura de los residuos.",
      "kind": "prose"
    },
    "8": {
      "title": "Haga concretas las correcciones",
      "lead": "«Estas mediciones están en milisegundos, no en segundos. Corrige la conversión y repite el cálculo, conservando los mismos datos».",
      "points": [
        "Una corrección útil identifica el defecto y permite comprobar el resultado revisado."
      ],
      "reading": [
        "«Eso está mal» dice al asistente que hubo un fallo, pero no identifica cómo repararlo. «Estas mediciones están en milisegundos, no en segundos; corrige la conversión y repite el cálculo» aporta un problema observable y una acción concreta. También facilita comprobar el resultado revisado.",
        "Una corrección puede conservar trabajo válido: los datos suministrados, la estructura del informe o las partes ya verificadas. Después del cambio, examine el resultado en vez de aceptar una explicación de por qué falló la respuesta anterior. La corrección puede mejorar la conversación actual sin modificar permanentemente el modelo entrenado que utilizarán otras conversaciones."
      ],
      "discussion": [
        "¿Qué hace que la corrección citada sea más fácil de aplicar que «eso está mal»?"
      ],
      "notes": "«Eso está mal» dice al asistente que hubo un fallo, pero no identifica cómo repararlo. «Estas mediciones están en milisegundos, no en segundos; corrige la conversión y repite el cálculo» aporta un problema observable y una acción concreta. También facilita comprobar el resultado revisado.",
      "optional": "Cuando el modelo cuestione su interpretación, evalúe la evidencia en vez de forzar que esté de acuerdo. A la inversa, una explicación fluida de su error anterior no demuestra que la reparación sea correcta. Compruebe el documento o cálculo modificado.",
      "kind": "prose"
    },
    "9": {
      "title": "Especifique el destino",
      "lead": "Indique el resultado necesario. Exija un procedimiento concreto cuando el propio procedimiento forme parte del trabajo.",
      "points": [
        "Una comparación abierta puede dejar al asistente margen para elegir pasos útiles.",
        "Repetir un método publicado exige hacer explícitos su procedimiento y sus supuestos."
      ],
      "reading": [
        "En una tarea abierta, describa el resultado deseado y sus límites. Un asistente que prepara una comparación puede elegir una secuencia útil de búsquedas y comprobaciones. Dar demasiados pasos innecesarios puede dificultar la tarea, sobre todo si presuponen una solución antes de examinar la evidencia.",
        "Algunos procedimientos sí son requisitos. Reproducir un cálculo publicado o seguir un método de calibración exige pasos y supuestos explícitos. La diferencia está en si debe conservarse el propio método. Pida un resultado respaldado por fuentes, cálculos o un documento examinable. Una explicación larga no demuestra por sí sola que el trabajo sea correcto."
      ],
      "discussion": [
        "¿Qué parte de una tarea es un método obligatorio en vez de una sugerencia?",
        "¿Qué evidencia debería acompañar al resultado si el asistente elige los pasos?"
      ],
      "notes": "En una tarea abierta, describa el resultado deseado y sus límites. Un asistente que prepara una comparación puede elegir una secuencia útil de búsquedas y comprobaciones. Dar demasiados pasos innecesarios puede dificultar la tarea, sobre todo si presuponen una solución antes de examinar la evidencia.",
      "optional": "Las recomendaciones del proveedor cambian con los modelos. Compare una petición centrada en el objetivo con un procedimiento prescrito en tareas representativas antes de convertir cualquiera de los estilos en regla universal. Una explicación ayuda a revisar, pero su longitud no mide directamente la fiabilidad.",
      "kind": "comparison"
    },
    "10": {
      "title": "Un asistente puede preparar el encargo de otro",
      "lead": "Un modelo de menor coste puede preparar un encargo para otro más capaz, de forma parecida a redactar un correo para un especialista. El traspaso solo ayuda si conserva los detalles importantes.",
      "points": [
        "Para una petición que ya está clara, acudir directamente al especialista puede ser más sencillo."
      ],
      "reading": [
        "Un modelo de menor coste puede organizar una petición compleja en unas instrucciones claras para otro más capaz. Se parece a redactar un correo para un especialista: explicar el problema, enumerar hechos e identificar preguntas abiertas. El especialista también necesita acceso a la información original que un resumen no pueda sustituir de forma fiable.",
        "El paso adicional puede eliminar repeticiones, pero también perder un detalle crucial o añadir demora. Para una petición ya clara, una llamada directa puede funcionar mejor. Compare el proceso completo, incluida la revisión del traspaso y la reparación de errores. Dos asistentes son una elección de flujo, no una mejora automática respecto a uno."
      ],
      "discussion": [
        "¿Qué dato sería peligroso perder cuando un asistente prepara el encargo de otro?"
      ],
      "notes": "Un modelo de menor coste puede organizar una petición compleja en unas instrucciones claras para otro más capaz. Se parece a redactar un correo para un especialista: explicar el problema, enumerar hechos e identificar preguntas abiertas. El especialista también necesita acceso a la información original que un resumen no pueda sustituir de forma fiable.",
      "optional": "El especialista puede ser un modelo de frontera, un modelo pequeño ajustado o software convencional. El traspaso debe distinguir hechos, supuestos y acciones propuestas, conservando acceso al material de origen cuando importen los detalles. Mida el coste total, la demora, el esfuerzo de revisión y la tasa de fallos, incluida la llamada de preparación. Una etapa adicional de modelo es una decisión de diseño que debe probarse, no una mejora automática de calidad.",
      "kind": "prose"
    },
    "11": {
      "title": "La información útil importa más que el tono",
      "lead": "La cortesía es natural. Una corrección como «usaste las unidades equivocadas» resulta más útil para mejorar la exactitud que los elogios o el enfado.",
      "points": [],
      "reading": [
        "Un asistente responde al texto recibido, por lo que el tono emocional puede influir en la respuesta. Sin embargo, no hay una regla fiable según la cual enfadarse, elogiar o ser muy cortés mejore la exactitud. Los estudios de cortesía encuentran efectos según la tarea y el idioma, en vez de una receta única.",
        "Una respuesta útil a un error identifica el supuesto equivocado, aporta evidencia e indica el cambio deseado. Preguntar qué sigue siendo incierto ayuda cuando esa incertidumbre afecta a una decisión. Estar de acuerdo no demuestra tener razón: el asistente puede aceptar una corrección equivocada. Darle las gracias tampoco reentrena automáticamente su modelo ni conserva lo aprendido en otra conversación."
      ],
      "discussion": [
        "¿Cómo podría transformarse la frustración por un error en información que el asistente pueda utilizar?"
      ],
      "notes": "Explique que el tono puede afectar a una respuesta sin establecer una regla fiable sobre su exactitud. Dar las gracias no reentrena automáticamente el modelo. Utilice la corrección de unidades como ejemplo concreto.",
      "optional": "Un formato útil de corrección es: observación, evidencia, cambio solicitado y elementos que deben conservarse. Si el asistente ha entendido mal el objetivo varias veces, vuelva a indicar el encargo actual y retire instrucciones obsoletas. No suponga que el aparente aprendizaje de una conversación persiste en otra sesión o versión del modelo.",
      "kind": "prose"
    },
    "12": {
      "title": "Mantenga clara la información de trabajo",
      "lead": "Una conversación larga puede contener instrucciones obsoletas. Mantenga un encargo actualizado y vuelva a las fuentes originales cuando un resumen pueda haber perdido un detalle importante.",
      "points": [
        "Un resumen puede convertir por accidente una pregunta sin resolver en un hecho acordado."
      ],
      "reading": [
        "La información disponible mientras un asistente trabaja se llama contexto. Puede contener la petición, mensajes anteriores, documentos recuperados y resultados de herramientas. Un contexto amplio puede ayudar, pero las instrucciones antiguas y el material repetido también pueden ocultar la tarea actual y sus restricciones importantes.",
        "Conserve un registro breve de decisiones actuales, fuentes fiables y preguntas abiertas. Recupere documentos relevantes cuando hagan falta, en vez de pegarlo todo en cada petición. Los resúmenes ayudan a gestionar trabajos largos, pero pueden omitir detalles. Compruébelos frente a la evidencia original si perder una unidad, excepción o requisito cambiaría la respuesta."
      ],
      "discussion": [
        "¿Qué cuestión sin resolver podría aparecer por accidente en un resumen como una decisión ya tomada?"
      ],
      "notes": "La información disponible mientras un asistente trabaja se llama contexto. Puede contener la petición, mensajes anteriores, documentos recuperados y resultados de herramientas. Un contexto amplio puede ayudar, pero las instrucciones antiguas y el material repetido también pueden ocultar la tarea actual y sus restricciones importantes.",
      "optional": "Una aplicación puede resumir o recuperar el historial en vez de enviar todos los mensajes anteriores en cada llamada. El contexto, las notas persistentes y los pesos entrenados tienen duraciones distintas. Si un requisito es crítico, inclúyalo en la tarea actual o en un documento autorizado que el agente pueda consultar.",
      "kind": "prose"
    },
    "13": {
      "title": "Varias formas de hacer más útil la IA",
      "lead": "Elija la intervención que responda al problema real.",
      "points": [
        "Una petición especifica el encargo actual.",
        "Una habilidad registra un procedimiento reutilizable, a veces con scripts de apoyo.",
        "La recuperación aporta documentos o registros relevantes.",
        "El ajuste fino utiliza ejemplos para modificar el comportamiento aprendido."
      ],
      "reading": [
        "Una petición describe la tarea inmediata. Una habilidad agrupa instrucciones reutilizables y, a veces, scripts de apoyo, como un procedimiento documentado. La recuperación incorpora información relevante de documentos o bases de datos. El ajuste fino cambia los parámetros aprendidos mediante ejemplos. Son formas diferentes de mejorar la utilidad del sistema.",
        "Elija según el problema observado. Si falta una especificación actual, hace falta una fuente fiable. Un procedimiento de informes mal entendido repetidamente puede necesitar mejores instrucciones o una habilidad. El entrenamiento puede merecer una prueba para un comportamiento estable que muchos ejemplos puedan demostrar. Una habilidad no concede por sí sola permiso para controlar archivos o equipos ni garantiza conocimiento experto."
      ],
      "discussion": [
        "¿Una especificación de equipo ausente requiere entrenamiento o acceso al documento?",
        "¿Qué procedimiento repetido podría documentarse como habilidad reutilizable?"
      ],
      "notes": "Una petición describe la tarea inmediata. Una habilidad agrupa instrucciones reutilizables y, a veces, scripts de apoyo, como un procedimiento documentado. La recuperación incorpora información relevante de documentos o bases de datos. El ajuste fino cambia los parámetros aprendidos mediante ejemplos. Son formas diferentes de mejorar la utilidad del sistema.",
      "optional": "Una habilidad no garantiza conocimiento experto ni permiso de ejecución. Cargar instrucciones no actualiza los pesos neuronales. Un documento recuperado es evidencia que debe evaluarse, y un adaptador entrenado puede seguir necesitando documentos actuales y herramientas fiables.",
      "kind": "list"
    },
    "14": {
      "title": "Compruebe qué puede hacer realmente la aplicación",
      "lead": "Dos ventanas de chat de aspecto similar pueden tener capacidades muy distintas. Compruebe qué herramientas y archivos proporciona realmente la aplicación.",
      "points": [
        "«Completado» debe respaldarse con un archivo modificado, un resultado devuelto u otro efecto observable."
      ],
      "reading": [
        "Una ventana de chat puede ofrecer búsquedas, cálculos o aplicaciones conectadas. Un asistente de terminal puede acceder a archivos y comandos, o estar muy restringido. El aspecto de la interfaz no determina su capacidad. Esta depende de las herramientas disponibles y de los permisos que se les concedan.",
        "Una máquina virtual puede proporcionar un entorno separado de desarrollo; un ordenador dedicado puede conectarse a sensores. Identifique los recursos relevantes y el resultado que debe verificarse en cada caso. Un mensaje de «terminado» no equivale a un archivo modificado o un estado medido del dispositivo. El software debe aplicar los permisos; pedirlos en texto no basta."
      ],
      "discussion": [
        "¿Cómo podría comprobarse el resultado de una tarea de edición de archivos?"
      ],
      "notes": "Una ventana de chat puede ofrecer búsquedas, cálculos o aplicaciones conectadas. Un asistente de terminal puede acceder a archivos y comandos, o estar muy restringido. El aspecto de la interfaz no determina su capacidad. Esta depende de las herramientas disponibles y de los permisos que se les concedan.",
      "optional": "Entre los límites útiles están los directorios seleccionados, el acceso de solo lectura a datos, un entorno desechable e interfaces explícitas de control. Los permisos proceden de la aplicación y del sistema operativo. Una instrucción en lenguaje natural no constituye por sí sola un control de acceso.",
      "kind": "prose"
    },
    "15": {
      "title": "Distinga tarea, modelo y herramienta",
      "lead": "Un asistente puede elegir una herramienta que utilice un método distinto del suyo. Un programa numérico puede ajustar datos; un generador de imágenes puede crear una imagen.",
      "points": [
        "Un Transformer es un diseño de red. La difusión es un método de generación que puede utilizar un Transformer en su interior."
      ],
      "reading": [
        "La IA es un campo amplio. El aprendizaje automático es una familia de métodos que aprende mediante ejemplos, y un Transformer es un diseño de red. Un asistente de tareas puede utilizar un modelo de lenguaje para seleccionar una herramienta y después llamar a código convencional, un buscador u otro modelo entrenado para realizar una parte del trabajo.",
        "La generación de imágenes ilustra la diferencia. Muchos modelos de difusión aprenden a eliminar ruido y crean una imagen mediante pasos repetidos de eliminación. La propia red que elimina ruido puede ser un Transformer, por lo que los nombres no son categorías rivales. Generar imágenes es una herramienta posible; la cuestión práctica es cómo el sistema elige herramientas y comprueba resultados."
      ],
      "discussion": [
        "¿Por qué un mismo asistente puede utilizar tanto un programa numérico como un generador de imágenes?"
      ],
      "notes": "La IA es un campo amplio. El aprendizaje automático es una familia de métodos que aprende mediante ejemplos, y un Transformer es un diseño de red. Un asistente de tareas puede utilizar un modelo de lenguaje para seleccionar una herramienta y después llamar a código convencional, un buscador u otro modelo entrenado para realizar una parte del trabajo.",
      "optional": "ReAct es un ejemplo influyente de alternar razonamiento del modelo con acciones externas, no una especificación implementada por todos los agentes. Una herramienta puede ejecutar código convencional, llamar a otro modelo o acceder a una aplicación. La difusión sirve aquí como comparación arquitectónica breve; el tema principal es especificar tareas y revisar los sistemas que coordinan herramientas.",
      "kind": "prose"
    },
    "16": {
      "title": "Compruebe qué ocurrió después de actuar",
      "lead": "Tras modificar un archivo o ejecutar una herramienta, el asistente necesita examinar lo ocurrido. La siguiente acción debe depender de esa evidencia.",
      "points": [],
      "reading": [
        "Un agente es un sistema que puede usar herramientas mientras persigue un objetivo. Si se le pide reparar un programa pequeño, necesita examinar el archivo, modificarlo de forma adecuada y ejecutar una comprobación. Proponer una reparación es distinto de aplicarla y demostrar que funciona.",
        "La acción siguiente debe depender del resultado observado. Un fallo de comprobación puede exigir otro cambio o más información. Una llamada exitosa puede producir un documento incorrecto, de modo que siguen importando los criterios originales de aceptación. En tareas repetidas, una secuencia fija puede ser más fácil de revisar que un agente abierto que elige cada paso."
      ],
      "discussion": [
        "¿Qué debería ocurrir cuando una herramienta se ejecuta correctamente pero produce un resultado equivocado?"
      ],
      "notes": "Un agente es un sistema que puede usar herramientas mientras persigue un objetivo. Si se le pide reparar un programa pequeño, necesita examinar el archivo, modificarlo de forma adecuada y ejecutar una comprobación. Proponer una reparación es distinto de aplicarla y demostrar que funciona.",
      "optional": "Evalúe tanto el resultado final como el camino seguido para producirlo. Las pruebas también pueden ser incorrectas o estar mal especificadas. Conserve un registro suficiente para distinguir un malentendido del modelo, contexto faltante, un fallo de herramienta y una evaluación defectuosa.",
      "kind": "prose"
    },
    "17": {
      "title": "Un ordenador pequeño conecta la IA con observaciones",
      "lead": "Una Raspberry Pi con cámara proporciona un banco de trabajo concreto. Utilice un objeto de prueba conocido para comprobar la imagen antes de juzgar la interpretación del modelo.",
      "points": [
        "Los periféricos USB compatibles pueden añadir observaciones o interfaces, dentro de los límites de alimentación y ancho de banda."
      ],
      "reading": [
        "Una Raspberry Pi puede captar imágenes y ejecutar software para guardarlas, mostrarlas o procesarlas. Los dispositivos USB compatibles añaden micrófonos, almacenamiento o conexiones con otros equipos. Un asistente puede ayudar a preparar un script de captura o interpretar una imagen si su aplicación ofrece las herramientas y el acceso adecuados.",
        "Distinga obtener una imagen fiable de interpretarla. Una foto borrosa, mala iluminación o un ajuste incorrecto pueden explicar un resultado malo antes de intervenir el modelo. Use un objeto conocido y registre las condiciones de captura. Las conexiones adicionales requieren controladores compatibles, alimentación suficiente y ancho de banda disponible; un concentrador no elimina esos límites."
      ],
      "discussion": [
        "¿Qué objeto conocido ayudaría a comprobar la cámara antes de evaluar una interpretación de IA?"
      ],
      "notes": "Una Raspberry Pi puede captar imágenes y ejecutar software para guardarlas, mostrarlas o procesarlas. Los dispositivos USB compatibles añaden micrófonos, almacenamiento o conexiones con otros equipos. Un asistente puede ayudar a preparar un script de captura o interpretar una imagen si su aplicación ofrece las herramientas y el acceso adecuados.",
      "optional": "La ampliación sigue limitada por la compatibilidad de controladores, la alimentación eléctrica y el ancho de banda compartido. Un concentrador crea puntos de conexión, no capacidad independiente ilimitada. Una demostración reproducible registra los ajustes de captura, la iluminación, la versión del software y el resultado esperado. Las acciones físicas requieren su propio ciclo de control y verificación; interpretar correctamente una imagen no demuestra una actuación correcta.",
      "kind": "prose"
    },
    "18": {
      "title": "Elija dónde se realiza el trabajo",
      "lead": "Dónde se ejecuta una tarea depende de lo que necesita y de qué información puede salir del entorno local.",
      "points": [
        "Un dispositivo cercano puede ocuparse de una tarea de detección acotada.",
        "Una estación de trabajo local puede ejecutar modelos adecuados bajo control local.",
        "Un servicio alojado proporciona modelos en el hardware del proveedor."
      ],
      "reading": [
        "Un dispositivo pequeño próximo al sensor puede realizar una tarea limitada, como interpretar una secuencia de cámara compatible. Una estación local puede admitir modelos con otras necesidades de memoria. Un servicio alojado ejecuta modelos en equipos del proveedor. Un sistema útil puede combinar estos papeles sin elegir un solo lugar para todo.",
        "La elección depende de la tarea, la memoria, el mantenimiento y qué información puede salir del entorno local. Procesar localmente puede reducir el envío externo de datos, pero siguen importando registros y servicios conectados. Ampliar el hardware también exige software compatible. Una conexión rápida une ordenadores; no combina automáticamente sus memorias ni determina la velocidad de un modelo."
      ],
      "discussion": [
        "¿Qué parte de una tarea propuesta debería realizarse cerca del sensor y por qué?"
      ],
      "notes": "Un dispositivo pequeño próximo al sensor puede realizar una tarea limitada, como interpretar una secuencia de cámara compatible. Una estación local puede admitir modelos con otras necesidades de memoria. Un servicio alojado ejecuta modelos en equipos del proveedor. Un sistema útil puede combinar estos papeles sin elegir un solo lugar para todo.",
      "optional": "La documentación de AI HAT+ 2 especifica 8 GB de memoria dedicada del acelerador. NVIDIA documenta un enlace de red de 200 Gb/s para conectar DGX Sparks; no es una medida de velocidad del modelo ni un conjunto automático de memoria compartida. La privacidad local también depende de registros, conservación, llamadas remotas y configuración. El despliegue debe evaluarse como un flujo completo de datos.",
      "kind": "comparison"
    },
    "19": {
      "title": "Dedique esfuerzo adicional donde ayude",
      "lead": "Un mayor esfuerzo de razonamiento resulta útil cuando mejora el resultado lo suficiente para justificar el trabajo adicional.",
      "points": [
        "Un detector de una función acotada puede necesitar un modelo pequeño especializado.",
        "Una síntesis difícil puede beneficiarse de más deliberación o de comparar respuestas candidatas."
      ],
      "reading": [
        "Algunos sistemas permiten al modelo dedicar más esfuerzo antes de responder. Otros métodos prueban varios candidatos o utilizan comprobaciones para seleccionar uno. Son maneras de usar cómputo adicional durante una tarea. Pueden ayudar en problemas difíciles, pero una respuesta más larga no demuestra una mejora.",
        "Una clasificación simple puede necesitar un modelo pequeño especializado, mientras que una comparación difícil puede justificar más análisis. Un programa puede realizar mejor un cálculo exacto. Distinga modelo, herramientas y esfuerzo de razonamiento al comparar opciones. Pruébelos con los mismos criterios de éxito, incluyendo la demora y la revisión necesaria para obtener un resultado útil."
      ],
      "discussion": [
        "¿Qué tarea se beneficiaría de comparar varias respuestas posibles?",
        "¿Cómo mediría una mejora sin juzgar la longitud de la explicación?"
      ],
      "notes": "Algunos sistemas permiten al modelo dedicar más esfuerzo antes de responder. Otros métodos prueban varios candidatos o utilizan comprobaciones para seleccionar uno. Son maneras de usar cómputo adicional durante una tarea. Pueden ayudar en problemas difíciles, pero una respuesta más larga no demuestra una mejora.",
      "optional": "Informe del protocolo de inferencia que produjo un resultado de evaluación. Un modelo con herramientas, un presupuesto largo y muchos intentos es un sistema evaluado distinto del mismo modelo que responde una vez. Los tokens y el tiempo transcurrido son medidas contables útiles, pero por sí solos no explican la diferencia de calidad.",
      "kind": "comparison"
    },
    "20": {
      "title": "Presupueste para la tarea terminada",
      "lead": "Una respuesta barata puede resultar costosa si exige reparaciones repetidas. Compare el esfuerzo necesario para obtener un resultado aceptable, incluido el tiempo de revisión.",
      "points": [],
      "reading": [
        "Una primera respuesta barata puede resultar costosa si necesita varios intentos y mucha revisión. Un modelo más capaz puede costar más por llamada y terminar una tarea difícil con menos reparaciones. La comparación útil es el proceso completo que produce un resultado aceptable, incluido el tiempo de comprobarlo.",
        "Conserve contexto relevante y solicite la salida que realmente utilizará. Las comprobaciones independientes a veces pueden ejecutarse en paralelo, pero cada agente necesita instrucciones y coordinación. Las tarifas y reglas de uso varían: examine registros reales en vez de deducirlas de la longitud de la petición. Ahorrar unas palabras corteses puede importar menos que evitar una investigación redundante."
      ],
      "discussion": [
        "¿Cuándo podría una primera respuesta más cara reducir el esfuerzo total?"
      ],
      "notes": "Una primera respuesta barata puede resultar costosa si necesita varios intentos y mucha revisión. Un modelo más capaz puede costar más por llamada y terminar una tarea difícil con menos reparaciones. La comparación útil es el proceso completo que produce un resultado aceptable, incluido el tiempo de comprobarlo.",
      "optional": "Una cascada genérica de modelos puede preparar el encargo de forma económica y enviar un paso difícil concreto a un modelo más capaz. Su valor debe incluir el coste de comprobar el traspaso. Los nombres, las escalas de esfuerzo, las tarifas de créditos y las políticas de caché varían según proveedor y versión; utilice registros de uso reales al comparar alternativas. Un ciclo redundante de herramientas puede dominar el coste de un intercambio conversacional corto.",
      "kind": "prose"
    },
    "21": {
      "title": "Tamaño del modelo y memoria de trabajo son distintos",
      "lead": "Una petición más larga aumenta el trabajo necesario para procesar la tarea; no añade nuevos pesos aprendidos al modelo.",
      "points": [
        "Los pesos almacenados describen el modelo entrenado.",
        "El contexto de trabajo contiene información para la tarea actual."
      ],
      "reading": [
        "Los ajustes aprendidos de un modelo se llaman parámetros o pesos. Almacenar más necesita más memoria. Durante una conversación, el sistema también necesita espacio para el texto y los cálculos en curso. Aumentar el texto no añade nuevos pesos aprendidos al modelo.",
        "Algunas operaciones del Transformer comparan muchos pares de fragmentos de texto, por lo que su trabajo puede crecer rápidamente con peticiones largas. Otros costes de memoria crecen de forma diferente. El software eficiente reduce movimientos de datos innecesarios, pero no hay una regla única para todo el sistema. Los límites prácticos dependen del modelo, el texto y la implementación."
      ],
      "discussion": [
        "¿Por qué un documento largo necesita más memoria de trabajo sin cambiar el modelo?",
        "¿Por qué una regla sencilla no basta para predecir todos los costes de memoria?"
      ],
      "notes": "Los ajustes aprendidos de un modelo se llaman parámetros o pesos. Almacenar más necesita más memoria. Durante una conversación, el sistema también necesita espacio para el texto y los cálculos en curso. Aumentar el texto no añade nuevos pesos aprendidos al modelo.",
      "optional": "Con anchura de capa d y contexto n fijos, la atención contiene un término O(n²d), mientras que las proyecciones y las capas de propagación hacia delante también consumen cómputo. La generación con caché añade un token cada vez, por lo que su coste por token difiere del procesamiento de una entrada completa. La arquitectura, la atención con consultas agrupadas, los lotes y la precisión cambian constantes y necesidades de memoria.",
      "kind": "comparison"
    },
    "22": {
      "title": "Entrenar cambia los parámetros aprendidos",
      "lead": "El entrenamiento utiliza los errores en ejemplos para ajustar los valores aprendidos por una red. Un menor error de entrenamiento debe traducirse en un comportamiento útil ante casos nuevos.",
      "points": [],
      "reading": [
        "Una red neuronal transforma una entrada en una salida mediante numerosos parámetros aprendidos. Durante el entrenamiento, una función de pérdida mide cuánto se aleja la salida del objetivo elegido. Un procedimiento de aprendizaje utiliza esa diferencia para ajustar los parámetros. Repetirlo con muchos ejemplos puede mejorar la tarea de entrenamiento.",
        "Aplicar el modelo entrenado a una entrada nueva es distinto de entrenarlo. El uso habitual aplica los parámetros existentes. Un error menor de entrenamiento tampoco garantiza utilidad: el modelo puede memorizar o aprovechar un atajo no deseado. Hacen falta pruebas separadas para comprobar si el comportamiento funciona en las situaciones relevantes."
      ],
      "discussion": [
        "¿Cómo podría un modelo mejorar su puntuación de entrenamiento sin aprender la tarea deseada?"
      ],
      "notes": "Una red neuronal transforma una entrada en una salida mediante numerosos parámetros aprendidos. Durante el entrenamiento, una función de pérdida mide cuánto se aleja la salida del objetivo elegido. Un procedimiento de aprendizaje utiliza esa diferencia para ajustar los parámetros. Repetirlo con muchos ejemplos puede mejorar la tarea de entrenamiento.",
      "optional": "Los gradientes indican sensibilidad local, no una explicación legible del conocimiento almacenado. Un modelo puede reducir la pérdida de entrenamiento y a la vez sobreajustarse o aprender atajos. Se necesitan datos separados para evaluar si el comportamiento se transfiere a los casos relevantes.",
      "kind": "prose"
    },
    "23": {
      "title": "Empezar desde cero difiere de adaptar",
      "lead": "Adaptar un modelo preentrenado parte de patrones ya aprendidos. Entrenar desde cero exige adquirir los patrones que necesita la tarea.",
      "points": [
        "El preentrenamiento de grandes modelos generales requiere muchos datos y cálculo.",
        "Un detector pequeño y específico puede seguir siendo un proyecto práctico de entrenamiento desde cero."
      ],
      "reading": [
        "Entrenar desde cero comienza con parámetros que aún no han aprendido los patrones deseados. Crear así un gran modelo general de lenguaje exige muchos datos y cómputo. Una tarea pequeña, como detectar un sonido concreto, puede ser un proyecto desde cero más práctico con recursos modestos.",
        "La adaptación comienza con un modelo ya entrenado. El ajuste completo cambia muchos o todos sus parámetros mediante ejemplos de la tarea nueva. Los adaptadores aprenden un cambio añadido menor. Sus necesidades de memoria y datos son distintas. Ejecutar un modelo existente también supone un trabajo mucho menor que repetir todo el entrenamiento que lo produjo."
      ],
      "discussion": [
        "¿Cuándo sería más adecuado un detector pequeño que un modelo general?",
        "¿Qué conocimiento útil podría aportar ya el modelo existente?"
      ],
      "notes": "Entrenar desde cero comienza con parámetros que aún no han aprendido los patrones deseados. Crear así un gran modelo general de lenguaje exige muchos datos y cómputo. Una tarea pequeña, como detectar un sonido concreto, puede ser un proyecto desde cero más práctico con recursos modestos.",
      "optional": "El preentrenamiento continuado suele prolongar un objetivo general de predicción con datos adicionales de un dominio; el ajuste supervisado utiliza demostraciones de tareas. «Ajuste completo» describe qué parámetros cambian, no si el modelo comenzó desde cero. Entrenar adaptadores sigue requiriendo cómputo hacia delante y retropropagación a través de las capas relevantes.",
      "kind": "comparison"
    },
    "24": {
      "title": "Entrenar requiere más que espacio para el modelo",
      "lead": "Disponer de espacio para los pesos de un modelo no significa disponer de espacio para todo su entrenamiento. Un ordenador puede ejecutar un modelo que no puede entrenar por completo.",
      "points": [
        "La memoria de trabajo y las exposiciones repetidas a los datos de entrenamiento deben presupuestarse por separado."
      ],
      "reading": [
        "Un modelo necesita memoria para sus parámetros aprendidos, pero el entrenamiento también conserva información para calcular y aplicar actualizaciones. Ese estado adicional depende del método de entrenamiento. En el uso habitual, los búferes de trabajo y el contexto actual siguen necesitando espacio además de los pesos.",
        "Esto explica que un ordenador pueda ejecutar un modelo y no entrenarlo completamente. El trabajo también depende de cuántos datos se presentan y cuántas veces se repiten. Las estimaciones simples comparan órdenes de magnitud, pero no predicen la duración en un dispositivo concreto. Las fórmulas y los ejemplos de almacenamiento detallados figuran en la explicación opcional."
      ],
      "discussion": [
        "¿Por qué un ordenador puede ejecutar un modelo que no puede entrenar por completo?"
      ],
      "notes": "Un modelo necesita memoria para sus parámetros aprendidos, pero el entrenamiento también conserva información para calcular y aplicar actualizaciones. Ese estado adicional depende del método de entrenamiento. En el uso habitual, los búferes de trabajo y el contexto actual siguen necesitando espacio además de los pesos.",
      "optional": "Una estimación aproximada de entrenamiento denso es C ≈ 6ND: C son operaciones de coma flotante del cálculo hacia delante y hacia atrás, N es el número de parámetros y D los tokens presentados, incluidas las repeticiones. Un modelo de 7 mil millones de parámetros expuesto a un billón de tokens da unas 4.2 × 10²² operaciones. Por separado, 7 mil millones de pesos brutos ocupan unos 14 GB decimales a 16 bits o 3.5 GB a 4 bits. Son cifras de almacenamiento de pesos, no requisitos completos de memoria. El entrenamiento añade activaciones, gradientes, estado del optimizador y búferes temporales; la cuantización añade metadatos. Las fórmulas estiman componentes del trabajo y del almacenamiento, no duración o velocidad de un dispositivo. El cómputo de LoRA no puede estimarse contando solo sus parámetros de adaptador entrenables.",
      "kind": "prose"
    },
    "25": {
      "title": "LoRA aprende un ajuste pequeño",
      "lead": "LoRA mantiene fijo el modelo original y aprende un ajuste compacto junto a él. El diagrama muestra la base grande y el cambio añadido, mucho menor.",
      "points": [
        "La base sigue participando en el cálculo, por lo que menos valores entrenables no implican una reducción proporcional del trabajo."
      ],
      "reading": [
        "LoRA es un método para adaptar un modelo entrenado. Congela sus parámetros originales y aprende una modificación añadida compacta. Esta puede guardarse por separado, facilitando conservar varias versiones por tareas sin almacenar un modelo entrenado completo para cada una.",
        "La memoria ahorrada procede en parte de actualizar y registrar menos parámetros durante el entrenamiento. El modelo original sigue participando en los cálculos, por lo que el cómputo no disminuye en la misma proporción. El ajuste depende de su base y necesita evaluación. Congelar la base no garantiza que la versión adaptada conserve todas las capacidades anteriores."
      ],
      "discussion": [
        "¿Por qué la base que no cambia sigue teniendo que participar en el trabajo?"
      ],
      "notes": "LoRA es un método para adaptar un modelo entrenado. Congela sus parámetros originales y aprende una modificación añadida compacta. Esta puede guardarse por separado, facilitando conservar varias versiones por tareas sin almacenar un modelo entrenado completo para cada una.",
      "optional": "La actualización W′ = W + BA a veces puede integrarse en los pesos para su ejecución, según la implementación y la precisión. Un adaptador depende de su modelo base y configuración. Aumentar el rango no es beneficioso automáticamente, y conservar la base congelada no garantiza que el comportamiento global evite el olvido.",
      "kind": "prose"
    },
    "26": {
      "title": "QLoRA reduce el almacenamiento de adaptación",
      "lead": "QLoRA almacena la base fija de forma más compacta mientras entrena pequeños ajustes. Puede reducir la memoria de adaptación sin hacer que cualquier tarea quepa ni que todas las operaciones sean más rápidas.",
      "points": [],
      "reading": [
        "La cuantización representa valores con menos bits y puede reducir la memoria del modelo. QLoRA combina una base cuantizada fija con los pequeños ajustes entrenables de LoRA. Permite realizar algunas adaptaciones con menos memoria que almacenar toda la base a mayor precisión.",
        "El entrenamiento completo sigue necesitando espacio para cálculos, metadatos y adaptadores. Una demostración publicada bajo ciertas condiciones no garantiza que quepa cualquier modelo o longitud de documento. Usar menos memoria tampoco implica automáticamente ir más rápido. Compare el comportamiento con una referencia adecuada antes de aceptar el ahorro."
      ],
      "discussion": [
        "¿Qué debe comprobarse antes de aceptar una adaptación que ahorra memoria?"
      ],
      "notes": "La cuantización representa valores con menos bits y puede reducir la memoria del modelo. QLoRA combina una base cuantizada fija con los pequeños ajustes entrenables de LoRA. Permite realizar algunas adaptaciones con menos memoria que almacenar toda la base a mayor precisión.",
      "optional": "El almacenamiento bruto a cuatro bits es solo una parte mínima de la memoria. La ubicación de adaptadores, la longitud de secuencia, el tamaño de lote, el guardado de activaciones y la implementación de cuantización pueden dominar el ajuste práctico a la memoria disponible. QLoRA puede ahorrar memoria sin mejorar el tiempo real de ejecución. Es una forma de adaptar pesos preentrenados, no un atajo para recrear su preentrenamiento original.",
      "kind": "prose"
    },
    "27": {
      "title": "Los ejemplos útiles importan más que las filas",
      "lead": "Un detector de palabra de activación necesita aprender cuándo permanecer en silencio, además de cuándo responder.",
      "points": [
        "Habla normal que no contiene la frase de activación.",
        "Frases que pueden confundirse por su sonido parecido.",
        "Una grabación reproducida en vez de una petición en directo.",
        "Ruido ambiental."
      ],
      "reading": [
        "Un detector de palabra de activación necesita ejemplos de su frase objetivo, pero también habla normal y sonidos parecidos que no deben activarlo. El principio se aplica a otras tareas: incluya éxitos comunes, casos confusos y situaciones realistas donde no procede actuar. Las etiquetas deben describir correctamente la respuesta deseada.",
        "Mantenga juntos los ejemplos relacionados al dividir los datos entre entrenamiento y evaluación. De otro modo, una prueba puede parecer independiente y contener casi copias del entrenamiento. Más ejemplos no siempre añaden información, y los errores repetidos refuerzan comportamientos incorrectos. Explicar de dónde proceden ayuda a entender qué demuestran los resultados."
      ],
      "discussion": [
        "¿Qué sonidos debería aprender a ignorar un detector de activación?",
        "¿Cómo pueden ejemplos casi idénticos hacer que una prueba parezca mejor?"
      ],
      "notes": "Un detector de palabra de activación necesita ejemplos de su frase objetivo, pero también habla normal y sonidos parecidos que no deben activarlo. El principio se aplica a otras tareas: incluya éxitos comunes, casos confusos y situaciones realistas donde no procede actuar. Las etiquetas deben describir correctamente la respuesta deseada.",
      "optional": "Un modelo pequeño entrenado desde cero puede ser adecuado para detectar una señal concreta. Un modelo preentrenado mayor puede fallar si las etiquetas se contradicen o faltan operaciones poco frecuentes. Las transcripciones acústicas, las órdenes pretendidas y los resultados reales de ejecución son tipos distintos de evidencia y no deben tratarse como etiquetas intercambiables.",
      "kind": "list"
    },
    "28": {
      "title": "Trate una supuesta mejora como un experimento",
      "lead": "Un sistema que rechaza todas las peticiones puede evitar acciones erróneas y, a la vez, perder todas las oportunidades útiles.",
      "points": [
        "Cuente las acciones incorrectas.",
        "Cuente también las peticiones válidas que no se atendieron."
      ],
      "reading": [
        "Una comparación útil comienza con una tarea y una referencia: ¿qué hace el método actual? Cambie un factor si quiere conocer su efecto y registre las otras diferencias que no pueda mantener fijas. Decida antes qué resultados cuentan como mejora, sin elegir después la puntuación favorita.",
        "Una puntuación global puede ocultar fallos importantes. Un sistema que rechaza todo evita acciones incorrectas y a la vez omite todas las útiles. Mida ambos errores y los resultados relevantes. Utilice ejemplos de desarrollo para mejorar el método y otros separados e intactos para la comprobación final. Las pruebas examinadas repetidamente dejan de ser evidencia independiente."
      ],
      "discussion": [
        "¿Cómo podría un sistema prudente puntuar bien y no ayudar?",
        "¿Qué dos tipos de error requieren recuentos separados en una tarea conocida?"
      ],
      "notes": "Una comparación útil comienza con una tarea y una referencia: ¿qué hace el método actual? Cambie un factor si quiere conocer su efecto y registre las otras diferencias que no pueda mantener fijas. Decida antes qué resultados cuentan como mejora, sin elegir después la puntuación favorita.",
      "optional": "Una evaluación compara un modelo junto con sus peticiones, herramientas, presupuestos y reglas de puntuación. Las comprobaciones mediante código, los jueces basados en modelos y la revisión humana tienen fortalezas y fallos diferentes. Mantenga visible la rúbrica y distinga los resultados reales de la tarea de la descripción que hace el asistente de su propio éxito.",
      "kind": "comparison"
    },
    "29": {
      "title": "Aprender algo nuevo puede perturbar capacidades anteriores",
      "lead": "Un método de retención debe permitir que el modelo aprenda una tarea nueva sin descartar la anterior. Proteger tanto el comportamiento previo que no se aprenda nada nuevo no resolvería el problema.",
      "points": [],
      "reading": [
        "Un método publicado llamado Elastic Weight Consolidation intenta proteger lo aprendido desalentando cambios en parámetros considerados importantes para ello. Los investigadores probaron secuencias de tareas, incluidas versiones de reconocimiento de dígitos escritos a mano. Buscaban aprender una tarea nueva conservando el rendimiento anterior.",
        "Los resultados respaldan el método en las condiciones probadas, no una solución universal al olvido. Proteger demasiado todo también impediría cambios útiles. Una comparación justa comprueba tareas antiguas y nuevas tras cada etapa. Parte de las mismas condiciones y separa la evaluación final de las decisiones de desarrollo."
      ],
      "discussion": [
        "¿Cómo podría una protección excesiva de las habilidades anteriores impedir un aprendizaje nuevo útil?"
      ],
      "notes": "Un método publicado llamado Elastic Weight Consolidation intenta proteger lo aprendido desalentando cambios en parámetros considerados importantes para ello. Los investigadores probaron secuencias de tareas, incluidas versiones de reconocimiento de dígitos escritos a mano. Buscaban aprender una tarea nueva conservando el rendimiento anterior.",
      "optional": "Una réplica útil compara la misma arquitectura inicial, orden de tareas y presupuesto de entrenamiento y evalúa todas las tareas anteriores después de cada una nueva. Incluya entrenamiento secuencial ordinario y una referencia de regularización simple. Informe tanto del aprendizaje de la nueva tarea como de la retención de las antiguas. La intensidad de penalización cambia ese equilibrio; elegirla en la prueba final debilitaría la evaluación.",
      "kind": "prose"
    },
    "30": {
      "title": "Un conjunto pequeño de adaptación puede ser útil",
      "lead": "LIMA utilizó ejemplos cuidadosamente seleccionados para orientar las respuestas de un modelo ya entrenado. El pequeño conjunto de adaptación no sustituyó el extenso entrenamiento anterior del modelo.",
      "points": [],
      "reading": [
        "El estudio LIMA adaptó un modelo de lenguaje ya entrenado con una colección pequeña de instrucciones y respuestas cuidadosamente seleccionadas. Los ejemplos ayudaron a modificar cómo respondía a las peticiones. Eso difiere de crear su conocimiento general solo con esos ejemplos: el gran entrenamiento anterior formaba parte de la base.",
        "La lección práctica es examinar qué enseñan los ejemplos y qué aporta ya el modelo. Un conjunto claro y relevante puede ser útil sin ser enorme. Sin embargo, el resultado depende del modelo y de las tareas evaluadas. Compruebe por separado peticiones raras, entradas ambiguas y exactitud numérica; una respuesta preferida por personas no es necesariamente un cálculo correcto."
      ],
      "discussion": [
        "¿De qué disponía ya el modelo antes de añadir los ejemplos seleccionados?"
      ],
      "notes": "El estudio LIMA adaptó un modelo de lenguaje ya entrenado con una colección pequeña de instrucciones y respuestas cuidadosamente seleccionadas. Los ejemplos ayudaron a modificar cómo respondía a las peticiones. Eso difiere de crear su conocimiento general solo con esos ejemplos: el gran entrenamiento anterior formaba parte de la base.",
      "optional": "En una adaptación de ingeniería, prepare una tabla de cobertura antes de seleccionar ejemplos: peticiones comunes, entradas ambiguas, operaciones raras y abstenciones válidas. Conserve pruebas independientes para cada categoría. Compare datos seleccionados y de referencia con igual exposición al investigar la calidad, porque cambiar el tamaño del conjunto también cambia las actualizaciones en una receta de épocas fijas. Un juicio favorable de preferencia aporta evidencia útil, pero no sustituye comprobar la corrección numérica o el funcionamiento operativo.",
      "kind": "prose"
    },
    "31": {
      "title": "Pregunte qué se comparó realmente",
      "lead": "«Igual de bueno» es una afirmación incompleta sin una comparación identificada y una prueba. Una buena puntuación conversacional no demuestra fiabilidad en el cálculo científico.",
      "points": [],
      "reading": [
        "Un estudio que muestra un buen método compacto de adaptación necesita una comparación clara. ¿Se comparó con el modelo sin modificar, con otro adaptador o con entrenar todos los parámetros? Son preguntas distintas. Un resultado puede ser útil sin responder todas las preguntas posibles.",
        "La investigación QLoRA ilustra la importancia de la referencia. Examina adaptar modelos con menos memoria y también analiza límites de evaluación. Una puntuación conversacional favorable no demuestra cálculo científico fiable. Registre modelo, entrenamiento y comprobación, y pregunte si esas condiciones se parecen al uso previsto. Ahorro de memoria y calidad deben evaluarse por separado."
      ],
      "discussion": [
        "¿Qué información falta en «este método es igual de bueno»?"
      ],
      "notes": "Un estudio que muestra un buen método compacto de adaptación necesita una comparación clara. ¿Se comparó con el modelo sin modificar, con otro adaptador o con entrenar todos los parámetros? Son preguntas distintas. Un resultado puede ser útil sin responder todas las preguntas posibles.",
      "optional": "Una comparación de ingeniería debe registrar el punto de control base, las capas elegidas, el rango del adaptador, la precisión, la exposición de entrenamiento y el procedimiento de inferencia. Compare memoria y calidad de tarea de forma independiente y conserve pruebas de comportamientos antes útiles. Indique si el experimento mide cuantización, capacidad del adaptador o varios factores modificados a la vez. En cálculos, las comprobaciones numéricas independientes y los resultados ejecutables aportan evidencia más sólida que una preferencia de estilo.",
      "kind": "prose"
    },
    "32": {
      "title": "Varios métodos intentan reducir el olvido",
      "lead": "Varios métodos intentan reducir el olvido, con costes distintos.",
      "points": [
        "La repetición vuelve a presentar ejemplos anteriores representativos.",
        "Las restricciones desincentivan cambios que alteren el comportamiento anterior.",
        "Los adaptadores separados mantienen aparte algunos ajustes específicos de cada tarea.",
        "El entrenamiento con un modelo profesor puede ayudar a conservar comportamientos seleccionados."
      ],
      "reading": [
        "Entrenar con trabajo nuevo puede reducir el rendimiento anterior. Una respuesta es repetir ejemplos antiguos representativos durante el aprendizaje. Otra es limitar cambios en parámetros importantes. Los adaptadores separados mantienen ajustes por tareas distintos. Estos métodos abordan cambios del comportamiento entrenado, no que una conversación pierda un mensaje anterior.",
        "La investigación también explora ampliar redes expertas y consolidación inspirada en el sueño. Los nombres designan procedimientos de aprendizaje concretos; dejar un ordenador inactivo no le enseña. Ningún método garantiza conservar cada capacidad. Repetir requiere ejemplos adecuados y añadir capacidad necesita almacenamiento y gestión. Compare el modelo adaptado con el inicial en tareas anteriores importantes."
      ],
      "discussion": [
        "¿Qué tareas antiguas deberían seguir evaluándose después de una adaptación?",
        "¿Qué ocurriría si los ejemplos repetidos contienen errores anteriores?"
      ],
      "notes": "Entrenar con trabajo nuevo puede reducir el rendimiento anterior. Una respuesta es repetir ejemplos antiguos representativos durante el aprendizaje. Otra es limitar cambios en parámetros importantes. Los adaptadores separados mantienen ajustes por tareas distintos. Estos métodos abordan cambios del comportamiento entrenado, no que una conversación pierda un mensaje anterior.",
      "optional": "Ningún método garantiza aprendizaje permanente en todas las tareas. La repetición puede exigir almacenar datos; la repetición generada puede reproducir errores; congelar limita la adaptación; ampliar expertos aumenta el almacenamiento y la complejidad de enrutamiento. Retirar un adaptador puede restaurar un comportamiento de la base, pero el sistema adaptado puede sufrir regresiones mientras el adaptador está activo.",
      "kind": "list"
    },
    "33": {
      "title": "Un modelo puede activar solo algunas partes",
      "lead": "Para el token ilustrado, el enrutador selecciona dos expertos y combina sus salidas. Los demás expertos siguen disponibles para otras selecciones y también necesitan almacenamiento.",
      "points": [],
      "reading": [
        "Un modelo de mezcla de expertos contiene varias subredes aprendidas y un enrutador que decide cuáles utilizar para una entrada. Puede ofrecer mucha capacidad total sin ejecutar cada componente para cada fragmento de texto. Las partes seleccionadas son expertos activos, mientras que todas las almacenadas contribuyen al tamaño total.",
        "Un experto no es necesariamente un especialista claramente identificado, como un físico o traductor. Su papel surge del entrenamiento. Los componentes no usados siguen necesitando almacenamiento y trasladar trabajo entre ellos añade costes. Añadir expertos para aprender continuamente es otro método deliberado; el enrutamiento habitual no evita automáticamente el olvido."
      ],
      "discussion": [
        "¿Por qué los expertos inactivos para este token siguen necesitando almacenamiento?"
      ],
      "notes": "Un modelo de mezcla de expertos contiene varias subredes aprendidas y un enrutador que decide cuáles utilizar para una entrada. Puede ofrecer mucha capacidad total sin ejecutar cada componente para cada fragmento de texto. Las partes seleccionadas son expertos activos, mientras que todas las almacenadas contribuyen al tamaño total.",
      "optional": "El trabajo original de MoE con compuertas dispersas utilizó expertos de propagación hacia delante dentro de un modelo secuencial. Los diseños modernos varían en tamaño, número, enrutamiento y ubicación de expertos. Añadir expertos para aprendizaje continuo es otra decisión algorítmica, no una propiedad automática de todas las MoE.",
      "kind": "prose"
    },
    "34": {
      "title": "Hay varias formas de reducir recursos",
      "lead": "Reducir un recurso no reduce automáticamente todos los demás.",
      "points": [
        "Menos bits pueden reducir el almacenamiento.",
        "Eliminar componentes seleccionados puede reducir el tamaño de un modelo.",
        "Un alumno más pequeño puede aprender comportamientos seleccionados de un profesor mayor.",
        "Una mejor ejecución puede reducir el movimiento innecesario de datos en memoria."
      ],
      "reading": [
        "La cuantización almacena valores con menos bits. La poda retira pesos o estructuras. La destilación entrena un modelo menor usando información de otro. Pueden reducir recursos, pero también cambiar las salidas. La pregunta útil es qué calidad se conserva con menos recursos.",
        "Otros métodos mejoran el movimiento de datos en memoria o cambian la arquitectura. El dropout dirigido prepara una red para tolerar poda posterior. Crear muchos ceros no garantiza que el ordenador omita los cálculos correspondientes. Mida la aplicación real: memoria, coste de ejecución y calidad pueden mejorar en proporciones distintas o competir entre sí."
      ],
      "discussion": [
        "¿Qué recurso limita realmente la aplicación?",
        "¿Por qué un archivo de modelo menor podría no acelerar la tarea?"
      ],
      "notes": "La cuantización almacena valores con menos bits. La poda retira pesos o estructuras. La destilación entrena un modelo menor usando información de otro. Pueden reducir recursos, pero también cambiar las salidas. La pregunta útil es qué calidad se conserva con menos recursos.",
      "optional": "Comprimir un modelo es distinto de comprimir un archivo con un códec sin pérdidas. La cuantización y la poda pueden cambiar las salidas. La destilación transfiere comportamientos seleccionados, sin copiar exactamente todo el conocimiento. Los modelos de espacio de estados e híbridos tienen otras relaciones de escala de secuencias; no sustituyen universalmente la atención.",
      "kind": "list"
    },
    "35": {
      "title": "El entrenamiento sigue la información recibida",
      "lead": "La señal de evaluación suministrada durante el entrenamiento influye en lo que aprende a hacer el modelo.",
      "points": [
        "Los ejemplos o las preferencias pueden enseñar respuestas deseadas.",
        "Una recompensa favorece resultados que puntúan bien, aunque no represente toda la tarea real."
      ],
      "reading": [
        "Algunos entrenamientos predicen información oculta de una entrada, como el siguiente fragmento de texto. Otros usan ejemplos de respuestas deseadas, comparaciones entre respuestas o recompensas. Estas señales guían lo aprendido, pero pueden no capturar todo lo que necesita la aplicación.",
        "La generación antagónica aporta otro ejemplo: una red produce muestras mientras otra aprende a distinguirlas de los ejemplos de entrenamiento. Es la pareja generador-discriminador de las GAN. Difiere de predecir lenguaje normalmente y de probar un sistema con entradas difíciles. En todos los casos, mejorar la puntuación de entrenamiento exige comprobar la tarea real y sus fallos relevantes."
      ],
      "discussion": [
        "¿Qué comportamiento útil podría no recoger una recompensa?",
        "¿Por qué comprobar una mejora de puntuación con ejemplos reales?"
      ],
      "notes": "Explique el objetivo mediante la diferencia entre una puntuación y el resultado deseado. La lectura ofrece la predicción y el entrenamiento de GAN como ejemplos adicionales; evite condensar todos los métodos de entrenamiento en una única secuencia de etapas.",
      "optional": "RLHF combina varias etapas y no es la única forma de aprender preferencias; Direct Preference Optimization ofrece otra formulación. Mejorar recompensas o preferencias debe comprobarse frente a la tarea real y las capacidades conservadas. Una señal puede favorecer un atajo si la evaluación no captura el objetivo previsto.",
      "kind": "comparison"
    },
    "36": {
      "title": "La investigación cambia modelos y sistemas",
      "lead": "El progreso puede proceder de un modelo mejor o de mejores formas de utilizarlo. Un resultado de evaluación debe contrastarse con la tarea y las condiciones que realmente importan.",
      "points": [
        "Un sistema con herramientas y el mismo modelo respondiendo por sí solo son sistemas evaluados distintos."
      ],
      "reading": [
        "La investigación explora dedicar más cómputo a respuestas difíciles, usar herramientas en tareas largas y combinar texto con imágenes o audio. Otros trabajos mejoran eficiencia, datos y evaluación. Afectan tanto al propio modelo como al software que organiza información y acciones a su alrededor.",
        "Una evaluación definida no garantiza cada aplicación. Sus resultados dependen de peticiones, herramientas, presupuesto de tiempo y reglas de puntuación, además del modelo. Busque tareas parecidas al uso previsto y examine qué se mide. Las demostraciones publicadas y las propuestas deben distinguirse de una capacidad fiable en el flujo real."
      ],
      "discussion": [
        "¿Qué tarea de evaluación se parece al trabajo que realmente necesita ayuda?"
      ],
      "notes": "La investigación explora dedicar más cómputo a respuestas difíciles, usar herramientas en tareas largas y combinar texto con imágenes o audio. Otros trabajos mejoran eficiencia, datos y evaluación. Afectan tanto al propio modelo como al software que organiza información y acciones a su alrededor.",
      "optional": "MMMU-Pro dificulta deliberadamente responder evaluaciones multimodales mediante atajos de texto. ScienceAgentBench estudia tareas de análisis científico con resultados ejecutables. Son diseños útiles de medición, no garantías de fiabilidad en un laboratorio. No compare puntuaciones de versiones, presupuestos o accesos a herramientas diferentes como si solo hubieran cambiado los pesos del modelo.",
      "kind": "prose"
    },
    "37": {
      "title": "Las tendencias describen mediciones, no promesas",
      "lead": "Una tendencia es una medición bajo condiciones concretas. Se convierte en un pronóstico cuando se añaden supuestos sobre lo que continuará.",
      "points": [
        "Pregunte qué haría fallar el pronóstico."
      ],
      "reading": [
        "Modelos mayores y más datos pueden exigir mucho más cálculo. La investigación también estudia mejores algoritmos, datos y formas de ejecución. Una tendencia medida se aplica a las tareas y condiciones del estudio; no es una fórmula universal entre potencia del ordenador y razonamiento.",
        "Un pronóstico útil nombra la medida, el periodo y sus supuestos. También identifica observaciones que cambiarían la conclusión. En un proyecto práctico, compare opciones en la tarea necesaria. Un procedimiento mejor, un modelo más específico o una comprobación más fuerte pueden importar más que aumentar el tamaño."
      ],
      "discussion": [
        "¿Qué observación cambiaría la confianza en un pronóstico sobre el progreso de la IA?"
      ],
      "notes": "Modelos mayores y más datos pueden exigir mucho más cálculo. La investigación también estudia mejores algoritmos, datos y formas de ejecución. Una tendencia medida se aplica a las tareas y condiciones del estudio; no es una fórmula universal entre potencia del ordenador y razonamiento.",
      "optional": "Un pronóstico debe especificar la métrica, el periodo, los supuestos y las condiciones que lo invalidarían. En un proyecto práctico, reevalúe los modelos y herramientas disponibles cuando cambien los requisitos, en vez de suponer que comprar más cómputo o esperar un modelo mayor son las únicas alternativas.",
      "kind": "prose"
    },
    "38": {
      "title": "Construya un flujo que pueda repetirse",
      "lead": "Elija una tarea útil con un resultado que pueda comprobarse. Conserve el procedimiento que funcione lo bastante bien para que otra persona pueda repetirlo.",
      "points": [],
      "reading": [
        "Un primer experimento práctico es resumir un documento cuyas afirmaciones clave puedan contrastarse con la fuente, o realizar un pequeño cálculo de respuesta conocida. Indique para qué se utilizará el resultado y proporcione la información que cambia la respuesta. El objetivo es descubrir si el asistente mejora este trabajo concreto.",
        "Examine la salida real y corrija defectos concretos. Incluya el tiempo de revisión al comparar con el método anterior y conserve suficientes detalles para que otra persona repita el procedimiento. Más adelante pueden probarse más autonomía o entrenamiento si una limitación medida lo justifica."
      ],
      "discussion": [
        "¿Qué primera tarea podría repetir y comprobar otra persona?"
      ],
      "notes": "Cierre invitando a elegir una primera tarea concreta, como un resumen contrastado con la fuente o un cálculo de respuesta conocida. Pregunte qué evidencia demostraría el éxito, en vez de repetir una consigna de tres partes.",
      "optional": "Como primer ejercicio científico, elija un cálculo publicado, un conjunto sintético con respuesta conocida o un script pequeño con comportamiento observable. Compare una referencia sin asistencia con el flujo asistido por IA, incluido el tiempo de verificación. El objetivo es un resultado útil y reproducible. Mayor autonomía, razonamiento más largo o entrenamiento adicional deben responder a una necesidad demostrada, sin presuponer mejoras.",
      "kind": "prose"
    }
  },
  "engineer": {
    "1": {
      "title": "Diseñe el sistema que se evalúa",
      "lead": "La IA generó el borrador de los textos, diagramas y código de esta guía. La revisión de fuentes y las comprobaciones ejecutables siguen formando parte de la evaluación del resultado.",
      "points": [],
      "reading": [
        "Esta guía se redactó con ayuda de IA y sigue en proceso de revisión editorial. Sus enlaces a fuentes identifican la evidencia de las afirmaciones técnicas; no certifican cada frase ni demuestran que un método se transfiera a otra aplicación. El ejemplo científico utiliza datos explícitamente sintéticos y código numérico en lugar de una llamada a un modelo en directo.",
        "Para quien desarrolla sistemas de IA, el objeto evaluado es el sistema completo. Cambiar el punto de control, la composición del contexto o la implementación de una herramienta puede modificar su comportamiento aunque la petición visible para el usuario siga siendo la misma. La pregunta útil es si el sistema produce un resultado aceptable bajo las condiciones de funcionamiento previstas. Una afirmación generada de que la tarea está completa es otra afirmación que debe verificarse."
      ],
      "discussion": [
        "¿Qué evidencia distinguiría un modelo mejor de un flujo de trabajo mejor a su alrededor?"
      ],
      "notes": "Declare la autoría con ayuda de IA antes de afirmar ninguna capacidad. La revisión editorial y lingüística humana sigue pendiente. Trate la propia presentación como un ejemplo de trabajo generado que necesita revisión de fuentes y comprobaciones ejecutables. El público técnico debe evaluar el flujo completo en lugar de deducir su calidad del nombre del modelo.",
      "optional": "El material permite lectura independiente, presentación y debate. Los recorridos cortos seleccionan unas pocas ideas prácticas; los largos añaden mecanismos y experimentos publicados. Los pasajes de lectura aportan explicaciones sin necesitar un ponente, y las preguntas de debate conectan cada tema con decisiones de laboratorio o ingeniería. La IA ayudó a preparar esta revisión; la revisión editorial sigue pendiente.",
      "kind": "prose"
    },
    "2": {
      "title": "La historia arquitectónica explica los componentes actuales",
      "lead": "La cronología recorre mecanismos reutilizables. Los bloques de propagación hacia delante siguen dentro de los Transformers y las reglas explícitas siguen rodeando a los modelos aprendidos.",
      "points": [],
      "reading": [
        "Siga los componentes en vez de presentar la historia como sustituciones sucesivas. Los perceptrones aprenden fronteras de decisión; las redes multicapa componen correspondencias no lineales. Los modelos neuronales de lenguaje aprenden representaciones distribuidas, y los Transformers reorganizan secuencias mediante atención y bloques de propagación hacia delante. La coordinación de herramientas conecta después las salidas aprendidas con el cálculo convencional. Esta descomposición ayuda a localizar qué componente afecta realmente un cambio de implementación.",
        "Esta historia no es una progresión única desde las reglas hasta la inteligencia. Las redes convolucionales capturan estructura espacial; las recurrentes y LSTM modelan secuencias; la atención es anterior al Transformer. Las capas de propagación hacia delante siguen siendo centrales en los Transformers. El artículo de retropropagación de 1986 popularizó y demostró el método, sin originar cada una de sus partes. Los modelos de lenguaje también son anteriores a las redes neuronales y a las interfaces conversacionales. Estas diferencias explican que un sistema moderno combine métodos de varias épocas."
      ],
      "discussion": [
        "¿Qué componente de un asistente actual puede vincularse con una idea anterior de esta cronología?",
        "¿Por qué sustituir una arquitectura de secuencias no eliminaría la necesidad de un entorno de ejecución?"
      ],
      "notes": "Siga los componentes en vez de presentar la historia como sustituciones sucesivas. Los perceptrones aprenden fronteras de decisión; las redes multicapa componen correspondencias no lineales. Los modelos neuronales de lenguaje aprenden representaciones distribuidas, y los Transformers reorganizan secuencias mediante atención y bloques de propagación hacia delante. La coordinación de herramientas conecta después las salidas aprendidas con el cálculo convencional. Esta descomposición ayuda a localizar qué componente afecta realmente un cambio de implementación.",
      "optional": "Esta historia no es una progresión única desde las reglas hasta la inteligencia. Las redes convolucionales capturan estructura espacial; las recurrentes y LSTM modelan secuencias; la atención es anterior al Transformer. Las capas de propagación hacia delante siguen siendo centrales en los Transformers. El artículo de retropropagación de 1986 popularizó y demostró el método, sin originar cada una de sus partes. Los modelos de lenguaje también son anteriores a las redes neuronales y a las interfaces conversacionales. Estas diferencias explican que un sistema moderno combine métodos de varias épocas.",
      "kind": "prose"
    },
    "3": {
      "title": "Reglas de respuesta explícitas y parámetros optimizados",
      "lead": "Las transformaciones de respuesta de ELIZA estaban escritas en su script; la correspondencia entre entrada y respuesta de un modelo neuronal de lenguaje está determinada por parámetros optimizados.",
      "points": [
        "El script DOCTOR de ELIZA reconocía patrones de texto y aplicaba reglas de descomposición y recomposición.",
        "El entrenamiento de un modelo neuronal de lenguaje ajusta los pesos a partir de datos y un objetivo; el condicionamiento ordinario mediante una petición utiliza los pesos actuales."
      ],
      "reading": [
        "El guion DOCTOR de ELIZA reconocía patrones y aplicaba reglas escritas de descomposición y reconstrucción. Un modelo neuronal de lenguaje representa una correspondencia parametrizada cuyos pesos se optimizan con datos y un objetivo de entrenamiento. Su implementación ejecuta operaciones programadas, pero los parámetros aprendidos determinan la correspondencia de respuesta.",
        "La arquitectura, los datos y el objetivo siguen siendo decisiones de ingeniería. La inferencia normal se condiciona por la petición usando los pesos actuales; el entrenamiento los actualiza. El sistema puede rodear al modelo aprendido con reglas deterministas, herramientas y validación."
      ],
      "notes": "Distinga transformaciones de respuesta escritas a mano de la optimización de una correspondencia parametrizada. Ambos ejecutan operaciones programadas; la diferencia es cómo se especifica la correspondencia. Condicionar el contexto y actualizar pesos son mecanismos distintos.",
      "optional": "Las personas eligen la arquitectura, los datos y el objetivo, aunque la correspondencia entre entrada y respuesta se aprenda. Una petición normal cambia el contexto actual; el entrenamiento cambia los pesos. Un sistema puede combinar un modelo entrenado con reglas, herramientas y comprobaciones explícitas.",
      "discussion": [
        "¿Qué restricción de respuesta implementaría como regla determinista aunque dispusiera de un modelo aprendido?"
      ],
      "kind": "comparison"
    },
    "4": {
      "title": "Los límites del tokenizador forman parte de la interfaz",
      "lead": "Un tokenizador forma parte del contrato de entrada de un modelo. La igualdad de identificadores de tokens entre distintos tokenizadores no implica igualdad de texto o significado.",
      "points": [
        "Conserve el texto exacto en los traspasos entre modelos; vuelva a codificarlo con el tokenizador receptor.",
        "Cuente la petición completa tal como se entrega, incluidas las plantillas y los esquemas de herramientas, al estimar el tamaño de la entrada."
      ],
      "reading": [
        "Los identificadores de la figura pertenecen a dos vocabularios distintos. Las dos primeras filas codifican la secuencia ASCII exacta strawberry sin espacios ni plantilla de chat. Usa los límites de la figura para reconstruir la palabra a partir de cada secuencia.",
        "La aplicación también puede insertar una plantilla de chat o serializar definiciones de herramientas. Esos añadidos afectan a la entrada real del modelo. En un flujo con varios modelos, transfiera el texto original o una representación documentada en lugar de suponer que los identificadores de tokens son portables. El número de tokens ayuda a contabilizar contexto y procesamiento; no es una medida calibrada de la dificultad del problema."
      ],
      "discussion": [
        "¿Qué debe registrarse para reproducir el número de tokens de una petición de un agente?",
        "¿Cómo detectaría la pérdida de información introducida por un traspaso entre modelos?"
      ],
      "notes": "Los identificadores y la división de tokens pertenecen a un tokenizador concreto, no a un formato universal de intercambio. Las cadenas técnicas, la puntuación y los identificadores poco comunes pueden cambiar la relación entre longitud visible y tokens. Conserve el texto exacto al pasar tareas entre modelos y mida con el tokenizador de la ruta real de inferencia. Los tokens miden recursos, no directamente dificultad.",
      "optional": "Sin espacio inicial, cl100k_base divide strawberry en str, aw y berry. o200k_base la divide en st, raw y berry. Ambos producen tres tokens en este ejemplo, aunque cambian los límites y los identificadores. En o200k_base, al añadir un espacio al principio, el espacio y la palabra entera forman un solo token. Siguen siendo tres erres.",
      "kind": "list"
    },
    "5": {
      "title": "Comprobar un recuento con código ejecutado",
      "lead": "El registro de la herramienta muestra la entrada exacta, la operación y el valor devuelto. Las posiciones marcadas permiten comprobar ese resultado de forma independiente.",
      "points": [],
      "reading": [
        "La figura 2 de Krakowski (2025) muestra una conversación de GPT-4o del 3 de noviembre de 2024. El recuento directo de r minúsculas en strawberry fue 2. En la misma conversación, el usuario repitió la solicitud añadiendo «Use Python». El panel de análisis muestra text = \"strawberry\", la llamada text.count(\"r\") y el entero devuelto, 3. La respuesta posterior del asistente coincide con ese valor. El resultado correcto se ve en st[r]awbe[r][r]y: posiciones 3, 8 y 9, contando desde 1.",
        "El registro establece la cadena y la operación usadas para la respuesta con herramienta. No muestra el cálculo detrás de la primera respuesta ni aísla la tokenización como su causa. Un diagrama de tokens ilustra una representación. Atribuir una causa requiere otro experimento. Este par observado no estima tasas de error para otras solicitudes o versiones del modelo. El contador opcional del navegador ejecuta un cálculo local independiente, sin reproducir la sesión histórica de Python."
      ],
      "discussion": [
        "¿Qué evidencia distingue el cálculo ejecutado de la respuesta generada y qué afirmación causal no queda aislada por este caso?"
      ],
      "notes": "Examine juntos la cadena, la operación y el valor devuelto: text = \"strawberry\", text.count(\"r\") y resultado 3. Compruebe las tres posiciones, contando desde 1. Krakowski (2025), figura 2, fecha la conversación de GPT-4o el 3 de noviembre de 2024. El registro visible respalda el resultado de la herramienta, pero no muestra un cálculo interno que explique la respuesta inicial. El cálculo del navegador es independiente de aquella sesión histórica.",
      "optional": "El contador opcional opera sobre la entrada editable del navegador y cuenta r minúsculas. Para la cadena ASCII «strawberry», el resultado es 3 y las posiciones son 3, 8 y 9 contando desde 1. Esa ejecución es independiente de la sesión histórica de Python. Cualquier ejemplo de tokenización se refiere al tokenizador nombrado y a su literal exacto, no a una segmentación universal ni a una prueba causal del error de GPT-4o.",
      "kind": "prose"
    },
    "6": {
      "title": "Redacte peticiones como especificaciones comprobables",
      "lead": "Una petición útil hace comprensible al modelo la prueba de aceptación. Conserve las restricciones que cambian la corrección y elimine las instrucciones que repiten el mismo requisito.",
      "points": [],
      "reading": [
        "Una petición es un contrato de interfaz para un componente probabilístico. Aporte tarea, entradas autorizadas, estructura de salida y restricciones que afecten a la corrección. Use ejemplos para aclarar formatos o fronteras de decisión. Elimine instrucciones redundantes conservando casos límite. Evalúe cambios con casos representativos, en vez de juzgar las instrucciones por su brevedad o una respuesta convincente.",
        "Una plantilla reutilizable tiene seis campos: objetivo, contexto, restricciones, público, resultado deseado y criterios de aceptación. Complete solo los que importen. Un ejemplo puede aclarar un formato ambiguo mejor que varios párrafos de adjetivos. Si una restricción cambia la respuesta, merece conservarse incluso en una petición concisa."
      ],
      "discussion": [
        "¿Qué detalle ausente de la petición de ajuste del decaimiento podría cambiar la respuesta numérica?",
        "¿Qué fallos representativos utilizaría para comparar dos revisiones de una petición?"
      ],
      "notes": "Una petición es un contrato de interfaz para un componente probabilístico. Aporte tarea, entradas autorizadas, estructura de salida y restricciones que afecten a la corrección. Use ejemplos para aclarar formatos o fronteras de decisión. Elimine instrucciones redundantes conservando casos límite. Evalúe cambios con casos representativos, en vez de juzgar las instrucciones por su brevedad o una respuesta convincente.",
      "optional": "Una plantilla reutilizable tiene seis campos: objetivo, contexto, restricciones, público, resultado deseado y criterios de aceptación. Complete solo los que importen. Un ejemplo puede aclarar un formato ambiguo mejor que varios párrafos de adjetivos. Si una restricción cambia la respuesta, merece conservarse incluso en una petición concisa.",
      "kind": "prose"
    },
    "7": {
      "title": "Distinga coordinación e inferencia numérica",
      "lead": "El modelo de lenguaje propone un análisis; el código numérico minimiza un objetivo explícito. Examine ese cálculo antes de interpretar los residuos.",
      "points": [],
      "reading": [
        "La demostración ajusta f(t; θ) minimizando χ² = Σᵢ[(yᵢ − f(tᵢ; θ))/σᵢ]² para las mismas observaciones sintéticas bajo ambos modelos candidatos. La σ suministrada se mantiene fija. El navegador ejecuta una búsqueda numérica, mientras que el papel del modelo de lenguaje en el ejemplo es proponer código o interpretar los resultados devueltos. El código fuente generado por sí solo no demuestra que el cálculo se haya ejecutado.",
        "Un patrón en los residuos puede revelar un término ausente, errores correlacionados u otra discrepancia entre el modelo y las observaciones. No identifica un mecanismo físico único. Aquí se incluyó deliberadamente un fondo constante en el proceso generador. AIC = χ² + 2k, omitiendo una constante gaussiana común, compara estas candidatas bajo los supuestos de ruido indicados. Los errores aproximados de covarianza describen la incertidumbre local de los parámetros dentro de un modelo elegido; omiten la incertidumbre de selección del modelo y los efectos sistemáticos no modelados."
      ],
      "discussion": [
        "¿Qué comprobaría antes de interpretar un AIC menor como evidencia de un componente físico añadido?"
      ],
      "notes": "El modelo de lenguaje selecciona o genera un análisis; el código numérico ejecuta ajustes y cálculos de residuos. Examine el objetivo real, las unidades y los supuestos de incertidumbre. En el ejemplo sintético, los modelos comparten datos y supuestos de ruido. Un criterio de información compara ajustes candidatos bajo sus supuestos; una covarianza local no establece identificabilidad global ni un modelo físico correcto.",
      "optional": "Los datos de decaimiento son sintéticos e ilustran decisiones de análisis, en lugar de mediciones de un sistema físico. Un optimizador numérico minimiza una función objetivo; no demuestra un mecanismo físico. Generar código no prueba que se haya ejecutado, y la interpretación escrita debe comprobarse frente a los resultados numéricos reales y la estructura de los residuos.",
      "kind": "prose"
    },
    "8": {
      "title": "Convierta correcciones en condiciones de regresión",
      "lead": "Una corrección se convierte en evidencia útil de ingeniería cuando puede transformarse en un caso de regresión reproducible.",
      "points": [
        "Conserve la entrada que falla y el producto que demuestra la discrepancia.",
        "Describa el comportamiento esperado y la evidencia que lo respalda.",
        "Acote la reparación para conservar el comportamiento ya validado.",
        "Repita la comprobación de aceptación pertinente sobre el producto modificado."
      ],
      "reading": [
        "Transforme una queja en una discrepancia observable: conversión de unidades, esquema inválido, residuos estructurados o restricción omitida. Aporte evidencia y limite la modificación. Conserve resultados validados para que una reescritura amplia no introduzca cambios ajenos. Evalúe lo reparado con los criterios originales y una prueba dirigida al fallo descubierto, en lugar de aceptar solo el diagnóstico del modelo.",
        "Cuando el modelo cuestione su interpretación, evalúe la evidencia en vez de forzar que esté de acuerdo. A la inversa, una explicación fluida de su error anterior no demuestra que la reparación sea correcta. Compruebe el documento o cálculo modificado."
      ],
      "discussion": [
        "¿Cómo distinguiría un cálculo reparado de una explicación más convincente del error original?",
        "¿Cuándo debería un nuevo fallo cambiar el conjunto de evaluación en vez de solo la petición?"
      ],
      "notes": "Transforme una queja en una discrepancia observable: conversión de unidades, esquema inválido, residuos estructurados o restricción omitida. Aporte evidencia y limite la modificación. Conserve resultados validados para que una reescritura amplia no introduzca cambios ajenos. Evalúe lo reparado con los criterios originales y una prueba dirigida al fallo descubierto, en lugar de aceptar solo el diagnóstico del modelo.",
      "optional": "Cuando el modelo cuestione su interpretación, evalúe la evidencia en vez de forzar que esté de acuerdo. A la inversa, una explicación fluida de su error anterior no demuestra que la reparación sea correcta. Compruebe el documento o cálculo modificado.",
      "kind": "steps"
    },
    "9": {
      "title": "Elija deliberadamente las restricciones de procedimiento",
      "lead": "Exija un procedimiento cuando reproducirlo forme parte de la tarea. En los demás casos, permita que se proponga un método y evalúe el resultado con los mismos criterios de aceptación.",
      "points": [
        "Trabajo con método obligatorio: fije el protocolo de calibración o estadístico cuyo resultado se reproduce.",
        "Trabajo definido por el resultado: permita implementaciones alternativas que cumplan el contrato establecido."
      ],
      "reading": [
        "Distinga restricciones obligatorias y plan sugerido. Reproducir un método publicado exige explicitar método y supuestos; una síntesis abierta puede beneficiarse de permitir al modelo elegir pasos intermedios. Compare estas estrategias con los mismos criterios de aceptación y presupuesto. Pida una justificación concisa y evidencia examinable, sin tratar un razonamiento extenso como validación.",
        "Las recomendaciones del proveedor cambian con los modelos. Compare una petición centrada en el objetivo con un procedimiento prescrito en tareas representativas antes de convertir cualquiera de los estilos en regla universal. Una explicación ayuda a revisar, pero su longitud no mide directamente la fiabilidad."
      ],
      "discussion": [
        "¿Qué partes de su tarea son requisitos científicos y cuáles son solo una implementación sugerida?"
      ],
      "notes": "Distinga restricciones obligatorias y plan sugerido. Reproducir un método publicado exige explicitar método y supuestos; una síntesis abierta puede beneficiarse de permitir al modelo elegir pasos intermedios. Compare estas estrategias con los mismos criterios de aceptación y presupuesto. Pida una justificación concisa y evidencia examinable, sin tratar un razonamiento extenso como validación.",
      "optional": "Las recomendaciones del proveedor cambian con los modelos. Compare una petición centrada en el objetivo con un procedimiento prescrito en tareas representativas antes de convertir cualquiera de los estilos en regla universal. Una explicación ayuda a revisar, pero su longitud no mide directamente la fiabilidad.",
      "kind": "comparison"
    },
    "10": {
      "title": "Evalúe las cascadas en el punto de traspaso",
      "lead": "Una cascada de modelos añade una transformación que puede perder restricciones. Evalúe el traspaso y el resultado final por separado.",
      "points": [
        "Llamada directa: el especialista recibe la petición de referencia y el material fuente.",
        "Cascada: un modelo preparador construye un encargo, por lo que las omisiones y los supuestos inventados se convierten en modos de fallo adicionales."
      ],
      "reading": [
        "Un modelo preparador transforma la petición original en instrucciones para un especialista. Evalúe esa transformación explícitamente: restricciones conservadas, acceso a fuentes, incertidumbre y supuestos inventados. Compare la cascada con una llamada directa mediante la misma puntuación final. Incluya contexto duplicado, latencia, comprobación y reintentos. El límite óptimo depende de la tarea; una primera etapa barata no basta para demostrar menor coste total.",
        "El especialista puede ser un modelo de frontera, un modelo pequeño ajustado o software convencional. El traspaso debe distinguir hechos, supuestos y acciones propuestas, conservando acceso al material de origen cuando importen los detalles. Mida el coste total, la demora, el esfuerzo de revisión y la tasa de fallos, incluida la llamada de preparación. Una etapa adicional de modelo es una decisión de diseño que debe probarse, no una mejora automática de calidad."
      ],
      "discussion": [
        "¿Qué información debe sobrevivir literalmente al traspaso de un modelo preparador?",
        "¿Qué evidencia sobre la tarea final podría justificar el coste de la etapa adicional?"
      ],
      "notes": "Un modelo preparador transforma la petición original en instrucciones para un especialista. Evalúe esa transformación explícitamente: restricciones conservadas, acceso a fuentes, incertidumbre y supuestos inventados. Compare la cascada con una llamada directa mediante la misma puntuación final. Incluya contexto duplicado, latencia, comprobación y reintentos. El límite óptimo depende de la tarea; una primera etapa barata no basta para demostrar menor coste total.",
      "optional": "El especialista puede ser un modelo de frontera, un modelo pequeño ajustado o software convencional. El traspaso debe distinguir hechos, supuestos y acciones propuestas, conservando acceso al material de origen cuando importen los detalles. Mida el coste total, la demora, el esfuerzo de revisión y la tasa de fallos, incluida la llamada de preparación. Una etapa adicional de modelo es una decisión de diseño que debe probarse, no una mejora automática de calidad.",
      "kind": "comparison"
    },
    "11": {
      "title": "Distinga efectos del tono e información correctiva",
      "lead": "El tono cambia la entrada, pero un experimento de reparación es más fácil de interpretar cuando la información correctiva es explícita y estable.",
      "points": [
        "«Los tiempos de entrada están en milisegundos. Conviértelos de forma coherente, repite el ajuste sobre las mismas observaciones e identifica qué magnitudes informadas cambian»."
      ],
      "reading": [
        "El tono cambia la distribución de entrada, pero los estudios de cortesía no establecen una regla universal de exactitud. Ante un fallo, especifique contraejemplo y corrección en vez de confundir la reparación con énfasis emocional. Pregunte por incertidumbres que afectan a decisiones y compruebe si el modelo solo acepta la explicación propuesta. La adaptación conversacional no demuestra actualizar permanentemente los pesos.",
        "Un formato útil de corrección es: observación, evidencia, cambio solicitado y elementos que deben conservarse. Si el asistente ha entendido mal el objetivo varias veces, vuelva a indicar el encargo actual y retire instrucciones obsoletas. No suponga que el aparente aprendizaje de una conversación persiste en otra sesión o versión del modelo."
      ],
      "discussion": [
        "¿Cómo separaría un efecto del tono de un efecto de aportar el dato que faltaba?"
      ],
      "notes": "Los estudios sobre cortesía informan de efectos dentro de los idiomas y tareas probados; no establecen una regla universal de exactitud para el enfado o la gratitud. La presión emocional también puede favorecer el acuerdo con un diagnóstico equivocado. La corrección del ejemplo comunica un error verificable de unidades. La retroalimentación conversacional ordinaria no demuestra que se hayan actualizado los pesos del modelo servido.",
      "optional": "Un formato útil de corrección es: observación, evidencia, cambio solicitado y elementos que deben conservarse. Si el asistente ha entendido mal el objetivo varias veces, vuelva a indicar el encargo actual y retire instrucciones obsoletas. No suponga que el aparente aprendizaje de una conversación persiste en otra sesión o versión del modelo.",
      "kind": "prose"
    },
    "12": {
      "title": "Construir contexto es una cadena de información",
      "lead": "La composición del contexto puede introducir errores antes de que el modelo razone sobre la tarea. Conserve la trazabilidad desde las fuentes de referencia hasta la entrada realmente entregada.",
      "points": [
        "La recuperación puede omitir la excepción que cambia una conclusión.",
        "La condensación puede convertir una interpretación provisional en un hecho afirmado.",
        "La salida de una herramienta puede estar obsoleta aunque su formato sea válido.",
        "Las notas persistentes pueden perdurar más que los supuestos bajo los que se escribieron."
      ],
      "reading": [
        "Trate el ensamblaje de contexto como transformar registros autorizados en la entrada de trabajo del modelo. Registre qué requisitos y fuentes se incluyeron realmente. Los resúmenes pueden convertir afirmaciones provisionales en hechos, y la recuperación puede omitir excepciones decisivas. Conserve procedencia y examine los límites de recuperación o compresión antes de atribuir fallos a falta de razonamiento o tamaño del modelo.",
        "Una aplicación puede resumir o recuperar el historial en vez de enviar todos los mensajes anteriores en cada llamada. El contexto, las notas persistentes y los pesos entrenados tienen duraciones distintas. Si un requisito es crítico, inclúyalo en la tarea actual o en un documento autorizado que el agente pueda consultar."
      ],
      "discussion": [
        "¿Qué límite del contexto examinaría primero cuando una fuente correcta produce una respuesta equivocada?",
        "¿Qué procedencia debe conservar un resumen para que un agente posterior pueda cuestionarlo?"
      ],
      "notes": "Trate el ensamblaje de contexto como transformar registros autorizados en la entrada de trabajo del modelo. Registre qué requisitos y fuentes se incluyeron realmente. Los resúmenes pueden convertir afirmaciones provisionales en hechos, y la recuperación puede omitir excepciones decisivas. Conserve procedencia y examine los límites de recuperación o compresión antes de atribuir fallos a falta de razonamiento o tamaño del modelo.",
      "optional": "Una aplicación puede resumir o recuperar el historial en vez de enviar todos los mensajes anteriores en cada llamada. El contexto, las notas persistentes y los pesos entrenados tienen duraciones distintas. Si un requisito es crítico, inclúyalo en la tarea actual o en un documento autorizado que el agente pueda consultar.",
      "kind": "list"
    },
    "13": {
      "title": "Elija la intervención según el mecanismo de fallo",
      "lead": "Elija una intervención que responda al fallo observado. Actualizar los pesos es solo una forma de especializar un sistema.",
      "points": [
        "Los cambios de petición especifican una tarea o aclaran un contrato de salida.",
        "Las habilidades reúnen un procedimiento repetible y los recursos que lo apoyan.",
        "La recuperación aporta hechos externos que deben mantenerse actualizados.",
        "El ajuste fino cambia el comportamiento aprendido y exige una nueva evaluación."
      ],
      "reading": [
        "Clasifique el fallo antes de elegir adaptación. Hechos actuales ausentes sugieren recuperación; un procedimiento inconsistente, instrucciones o una habilidad; un comportamiento aprendido persistente puede justificar ajuste. Compare cada intervención con una referencia e incluya mantenimiento. Combinar métodos es válido, pero el éxito conjunto no aísla la contribución de cada componente sin comparaciones adicionales.",
        "Una habilidad no garantiza conocimiento experto ni permiso de ejecución. Cargar instrucciones no actualiza los pesos neuronales. Un documento recuperado es evidencia que debe evaluarse, y un adaptador entrenado puede seguir necesitando documentos actuales y herramientas fiables."
      ],
      "discussion": [
        "¿Qué evidencia justificaría el ajuste fino en lugar de cambiar la recuperación o la interfaz de herramientas?"
      ],
      "notes": "Clasifique el fallo antes de elegir adaptación. Hechos actuales ausentes sugieren recuperación; un procedimiento inconsistente, instrucciones o una habilidad; un comportamiento aprendido persistente puede justificar ajuste. Compare cada intervención con una referencia e incluya mantenimiento. Combinar métodos es válido, pero el éxito conjunto no aísla la contribución de cada componente sin comparaciones adicionales.",
      "optional": "Una habilidad no garantiza conocimiento experto ni permiso de ejecución. Cargar instrucciones no actualiza los pesos neuronales. Un documento recuperado es evidencia que debe evaluarse, y un adaptador entrenado puede seguir necesitando documentos actuales y herramientas fiables.",
      "kind": "comparison"
    },
    "14": {
      "title": "Los permisos pertenecen a la capa de ejecución",
      "lead": "La aplicación y el sistema operativo determinan el acceso efectivo de un agente. Una petición que describe un límite no hace cumplir ese límite.",
      "points": [
        "Un agente de línea de comandos puede estar restringido a un directorio, mientras un asistente de navegador puede tener conectores que modifican registros externos."
      ],
      "reading": [
        "Examine las herramientas reales, el alcance del sistema de archivos y el entorno de ejecución. Un asistente de navegador puede tener conectores potentes; un agente de terminal puede estar limitado a un directorio. Defina recursos y verifique cambios de estado. Entornos desechables e interfaces explícitas delimitan el desarrollo, pero enviar un comando sigue siendo distinto de lograr la tarea.",
        "Entre los límites útiles están los directorios seleccionados, el acceso de solo lectura a datos, un entorno desechable e interfaces explícitas de control. Los permisos proceden de la aplicación y del sistema operativo. Una instrucción en lenguaje natural no constituye por sí sola un control de acceso."
      ],
      "discussion": [
        "¿Cómo verificaría la diferencia entre el acceso que un agente afirma tener y el que realmente tiene?",
        "¿Qué comprobación del estado final debería acompañar a una respuesta de éxito de una herramienta?"
      ],
      "notes": "Examine las herramientas reales, el alcance del sistema de archivos y el entorno de ejecución. Un asistente de navegador puede tener conectores potentes; un agente de terminal puede estar limitado a un directorio. Defina recursos y verifique cambios de estado. Entornos desechables e interfaces explícitas delimitan el desarrollo, pero enviar un comando sigue siendo distinto de lograr la tarea.",
      "optional": "Entre los límites útiles están los directorios seleccionados, el acceso de solo lectura a datos, un entorno desechable e interfaces explícitas de control. Los permisos proceden de la aplicación y del sistema operativo. Una instrucción en lenguaje natural no constituye por sí sola un control de acceso.",
      "kind": "prose"
    },
    "15": {
      "title": "Distinga arquitectura, aprendizaje y coordinación",
      "lead": "Un agente puede coordinar componentes construidos con distintos métodos. La arquitectura, el procedimiento generativo y la coordinación describen aspectos diferentes del sistema.",
      "points": [
        "Un Transformer es una arquitectura que puede servir como componente de un modelo de lenguaje o como eliminador de ruido en difusión.",
        "La difusión aprende un proceso inverso de eliminación de ruido; por tanto, puede utilizar un Transformer en vez de constituir una alternativa a él."
      ],
      "reading": [
        "Transformer designa una arquitectura; autorregresión y difusión describen procedimientos de modelado o generación diferentes. DiT demuestra un Transformer que elimina ruido, por lo que difusión y Transformer no son una dicotomía arquitectónica. Por encima, una capa de coordinación elige herramientas e interpreta su estado. Un optimizador, una API y un generador de imágenes pueden compartir flujo sin compartir aprendizaje.",
        "ReAct es un ejemplo influyente de alternar razonamiento del modelo con acciones externas, no una especificación implementada por todos los agentes. Una herramienta puede ejecutar código convencional, llamar a otro modelo o acceder a una aplicación. La difusión sirve aquí como comparación arquitectónica breve; el tema principal es especificar tareas y revisar los sistemas que coordinan herramientas."
      ],
      "discussion": [
        "Cuando un agente llama a un optimizador numérico, ¿qué componente es responsable del resultado numérico?",
        "¿Qué muestra un Transformer de difusión sobre el uso de nombres de arquitecturas como categorías completas de sistemas?"
      ],
      "notes": "Transformer designa una arquitectura; autorregresión y difusión describen procedimientos de modelado o generación diferentes. DiT demuestra un Transformer que elimina ruido, por lo que difusión y Transformer no son una dicotomía arquitectónica. Por encima, una capa de coordinación elige herramientas e interpreta su estado. Un optimizador, una API y un generador de imágenes pueden compartir flujo sin compartir aprendizaje.",
      "optional": "ReAct es un ejemplo influyente de alternar razonamiento del modelo con acciones externas, no una especificación implementada por todos los agentes. Una herramienta puede ejecutar código convencional, llamar a otro modelo o acceder a una aplicación. La difusión sirve aquí como comparación arquitectónica breve; el tema principal es especificar tareas y revisar los sistemas que coordinan herramientas.",
      "kind": "comparison"
    },
    "16": {
      "title": "Cierre el ciclo sobre el estado, no los códigos de retorno",
      "lead": "Un ciclo con herramientas necesita comprobar el estado después de actuar. El estado de salida por sí solo no establece que se haya alcanzado el estado previsto por la tarea.",
      "points": [
        "Observe el estado relevante y la revisión de la fuente.",
        "Elija una acción permitida con argumentos explícitos.",
        "Ejecútela mediante la interfaz de herramientas.",
        "Compruebe el producto o estado resultante frente al contrato de la tarea."
      ],
      "reading": [
        "Un ciclo de agente lee estado, selecciona una acción, invoca una herramienta y evalúa el resultado. Instrumente esos puntos para asignar fallos a contexto ausente, acción inválida, ejecución o evaluación. Salir del proceso correctamente no basta si el resultado incumple la tarea. Prefiera un flujo fijo si se conocen las transiciones y la flexibilidad añade poco valor.",
        "Evalúe tanto el resultado final como el camino seguido para producirlo. Las pruebas también pueden ser incorrectas o estar mal especificadas. Conserve un registro suficiente para distinguir un malentendido del modelo, contexto faltante, un fallo de herramienta y una evaluación defectuosa."
      ],
      "discussion": [
        "¿Qué debe hacer el ciclo cuando la ejecución termina correctamente pero falla la comprobación del resultado?"
      ],
      "notes": "Un ciclo de agente lee estado, selecciona una acción, invoca una herramienta y evalúa el resultado. Instrumente esos puntos para asignar fallos a contexto ausente, acción inválida, ejecución o evaluación. Salir del proceso correctamente no basta si el resultado incumple la tarea. Prefiera un flujo fijo si se conocen las transiciones y la flexibilidad añade poco valor.",
      "optional": "Evalúe tanto el resultado final como el camino seguido para producirlo. Las pruebas también pueden ser incorrectas o estar mal especificadas. Conserve un registro suficiente para distinguir un malentendido del modelo, contexto faltante, un fallo de herramienta y una evaluación defectuosa.",
      "kind": "steps"
    },
    "17": {
      "title": "Distinga errores de adquisición y del modelo",
      "lead": "El rendimiento de visión incluye la ruta de adquisición. Un modelo no puede diagnosticar todos los errores de cámara o preprocesamiento solo a partir de la imagen resultante.",
      "points": [
        "Establezca la calidad de captura con un patrón conocido bajo condiciones registradas de iluminación y enfoque.",
        "Verifique que el preprocesamiento conserva la información espacial necesaria para la tarea.",
        "Evalúe el modelo con entradas capturadas representativas.",
        "Verifique cualquier acción física mediante su propia vía de realimentación."
      ],
      "reading": [
        "Captura, transmisión, preprocesamiento, inferencia y actuación son etapas separadas. Use patrones conocidos para establecer calidad de adquisición antes de evaluar interpretación. Registre exposición, enfoque, iluminación y configuración relevante. USB amplía interfaces, pero comparte límites de alimentación y transporte. Mantenga efectos físicos tras rutas de control explícitas y comprobaciones posteriores; una salida de visión no es recibo de ejecución.",
        "La ampliación sigue limitada por la compatibilidad de controladores, la alimentación eléctrica y el ancho de banda compartido. Un concentrador crea puntos de conexión, no capacidad independiente ilimitada. Una demostración reproducible registra los ajustes de captura, la iluminación, la versión del software y el resultado esperado. Las acciones físicas requieren su propio ciclo de control y verificación; interpretar correctamente una imagen no demuestra una actuación correcta."
      ],
      "discussion": [
        "¿Qué experimento distinguiría un fallo de percepción de un cambio de exposición o escala de imagen?",
        "¿Cómo podría añadir un dispositivo USB afectar a un sistema de adquisición que funcionaba correctamente?"
      ],
      "notes": "Captura, transmisión, preprocesamiento, inferencia y actuación son etapas separadas. Use patrones conocidos para establecer calidad de adquisición antes de evaluar interpretación. Registre exposición, enfoque, iluminación y configuración relevante. USB amplía interfaces, pero comparte límites de alimentación y transporte. Mantenga efectos físicos tras rutas de control explícitas y comprobaciones posteriores; una salida de visión no es recibo de ejecución.",
      "optional": "La ampliación sigue limitada por la compatibilidad de controladores, la alimentación eléctrica y el ancho de banda compartido. Un concentrador crea puntos de conexión, no capacidad independiente ilimitada. Una demostración reproducible registra los ajustes de captura, la iluminación, la versión del software y el resultado esperado. Las acciones físicas requieren su propio ciclo de control y verificación; interpretar correctamente una imagen no demuestra una actuación correcta.",
      "kind": "steps"
    },
    "18": {
      "title": "Distribuya cómputo según flujos de datos y memoria",
      "lead": "Sitúe el cálculo según la memoria de trabajo requerida por el modelo y el flujo de datos permitido. Un enlace de red más rápido no crea una máquina de memoria compartida transparente.",
      "points": [
        "La inferencia cerca del sensor reduce la necesidad de trasladar observaciones sin procesar.",
        "Un acelerador dedicado requiere un modelo y un entorno de ejecución compatibles.",
        "Una estación de trabajo presenta compromisos de memoria y mantenimiento distintos de los de un servicio gestionado.",
        "La inferencia alojada cambia dónde se procesan las entradas y dónde reside el control operativo."
      ],
      "reading": [
        "Divida el despliegue según modelos, cercanía de sensores, límites de datos y responsabilidad operativa. Compruebe compatibilidad y memoria máxima antes del hardware. Un modelo local reduce envíos externos y aun puede filtrar datos por registros o servicios. La ejecución distribuida necesita soporte explícito y contabilidad de comunicación; la especificación de un enlace no predice rendimiento ni crea memoria unificada.",
        "La documentación de AI HAT+ 2 especifica 8 GB de memoria dedicada del acelerador. NVIDIA documenta un enlace de red de 200 Gb/s para conectar DGX Sparks; no es una medida de velocidad del modelo ni un conjunto automático de memoria compartida. La privacidad local también depende de registros, conservación, llamadas remotas y configuración. El despliegue debe evaluarse como un flujo completo de datos."
      ],
      "discussion": [
        "¿Qué evidencia sobre memoria y flujo de datos reuniría antes de elegir un nivel de despliegue?"
      ],
      "notes": "Los ejemplos de AI HAT+ 2 y Spark se refieren a funciones de despliegue, compatibilidad y memoria. El enlace documentado de Spark de 200 Gb/s es una especificación de red, no una tasa medida del modelo ni una afirmación de memoria compartida automática. La presentación no debe incluir ninguna cifra de velocidad de cálculo de Spark. El procesamiento local puede seguir enviando datos mediante registros o servicios conectados, por lo que debe seguirse toda la ruta de los datos.",
      "optional": "La documentación de AI HAT+ 2 especifica 8 GB de memoria dedicada del acelerador. NVIDIA documenta un enlace de red de 200 Gb/s para conectar DGX Sparks; no es una medida de velocidad del modelo ni un conjunto automático de memoria compartida. La privacidad local también depende de registros, conservación, llamadas remotas y configuración. El despliegue debe evaluarse como un flujo completo de datos.",
      "kind": "comparison"
    },
    "19": {
      "title": "El presupuesto de inferencia forma parte de la configuración",
      "lead": "El esfuerzo de inferencia es un presupuesto dentro de un protocolo. La generación de candidatas y la búsqueda cambian ese protocolo, aunque los pesos del modelo sigan fijos.",
      "points": [
        "La deliberación secuencial amplía el trabajo a lo largo de una trayectoria de respuesta.",
        "Los protocolos con candidatas dedican trabajo adicional a generar alternativas y elegir entre ellas; un verificador equivocado puede anular el beneficio."
      ],
      "reading": [
        "Distinga el esfuerzo expuesto por el modelo de un protocolo que genera candidatos, invoca herramientas o busca soluciones parciales. Tienen modos de fallo distintos. Compare protocolos completos bajo presupuestos definidos e informe de la prueba de aceptación. Más cómputo puede ayudar en problemas difíciles sin servir a un detector limitado, y un verificador también puede elegir un candidato incorrecto.",
        "Informe del protocolo de inferencia que produjo un resultado de evaluación. Un modelo con herramientas, un presupuesto largo y muchos intentos es un sistema evaluado distinto del mismo modelo que responde una vez. Los tokens y el tiempo transcurrido son medidas contables útiles, pero por sí solos no explican la diferencia de calidad."
      ],
      "discussion": [
        "¿Qué debe mantenerse fijo antes de comparar dos niveles de esfuerzo de razonamiento?",
        "¿Cómo evaluaría el selector por separado del generador de candidatas?"
      ],
      "notes": "Distinga el esfuerzo expuesto por el modelo de un protocolo que genera candidatos, invoca herramientas o busca soluciones parciales. Tienen modos de fallo distintos. Compare protocolos completos bajo presupuestos definidos e informe de la prueba de aceptación. Más cómputo puede ayudar en problemas difíciles sin servir a un detector limitado, y un verificador también puede elegir un candidato incorrecto.",
      "optional": "Informe del protocolo de inferencia que produjo un resultado de evaluación. Un modelo con herramientas, un presupuesto largo y muchos intentos es un sistema evaluado distinto del mismo modelo que responde una vez. Los tokens y el tiempo transcurrido son medidas contables útiles, pero por sí solos no explican la diferencia de calidad.",
      "kind": "comparison"
    },
    "20": {
      "title": "Optimice el coste por resultado aceptado",
      "lead": "Optimice el coste por tarea aceptada. Un menor precio por token puede quedar contrarrestado por más reintentos o una mayor carga de revisión humana.",
      "points": [],
      "reading": [
        "Mida preparación, tokens de entrada y salida, herramientas, reintentos y revisión humana a nivel del flujo. Envíe subproblemas difíciles a otro modelo solo si conserva la evidencia. Paralelizar comprobaciones reduce tiempo, pero duplica contexto y añade coordinación. Compare diseños en los mismos casos y criterios de aceptación, en vez de extrapolar tarifas por token.",
        "Una cascada genérica de modelos puede preparar el encargo de forma económica y enviar un paso difícil concreto a un modelo más capaz. Su valor debe incluir el coste de comprobar el traspaso. Los nombres, las escalas de esfuerzo, las tarifas de créditos y las políticas de caché varían según proveedor y versión; utilice registros de uso reales al comparar alternativas. Un ciclo redundante de herramientas puede dominar el coste de un intercambio conversacional corto."
      ],
      "discussion": [
        "¿Qué costes del flujo faltan en una comparación basada solo en tokens por respuesta?"
      ],
      "notes": "Mida preparación, tokens de entrada y salida, herramientas, reintentos y revisión humana a nivel del flujo. Envíe subproblemas difíciles a otro modelo solo si conserva la evidencia. Paralelizar comprobaciones reduce tiempo, pero duplica contexto y añade coordinación. Compare diseños en los mismos casos y criterios de aceptación, en vez de extrapolar tarifas por token.",
      "optional": "Una cascada genérica de modelos puede preparar el encargo de forma económica y enviar un paso difícil concreto a un modelo más capaz. Su valor debe incluir el coste de comprobar el traspaso. Los nombres, las escalas de esfuerzo, las tarifas de créditos y las políticas de caché varían según proveedor y versión; utilice registros de uso reales al comparar alternativas. Un ciclo redundante de herramientas puede dominar el coste de un intercambio conversacional corto.",
      "kind": "prose"
    },
    "21": {
      "title": "Presupueste pesos, caché y atención por separado",
      "lead": "Un contexto más largo y un mayor número de parámetros exigen distintos recursos. Contabilice cada término antes de calificar de cuadrático todo el sistema.",
      "points": [
        "Los pesos brutos ocupan P × b_w bytes, donde b_w son los bytes almacenados por parámetro.",
        "Una caché KV convencional ocupa aproximadamente 2BLn h_kv d_h b_kv bytes para una configuración fija del decodificador.",
        "La atención densa de la entrada contiene un término aritmético O(BLn²d).",
        "Con una caché KV, la atención de un token nuevo contiene un término O(BLnd); permanece el trabajo de proyecciones y de las subredes de propagación hacia delante."
      ],
      "reading": [
        "Sean B el tamaño del lote, L el número de capas, n la longitud del contexto, h_kv el número de cabezas de claves y valores y d_h la dimensión de cada cabeza. Almacenar claves y valores con b_kv bytes por elemento da la estimación convencional de caché 2BLn h_kv d_h b_kv. La atención de consultas agrupadas modifica h_kv. Las cachés cuantizadas y las arquitecturas no convencionales requieren su propio cálculo. El almacenamiento de pesos depende por separado del número de parámetros y de la precisión de su representación.",
        "Para una anchura oculta fija d, la atención densa exacta sobre una entrada completa incluye trabajo entre pares proporcional a n²d por capa y elemento del lote. La decodificación con caché reutiliza las claves y valores anteriores, por lo que el trabajo de atención de un token nuevo crece de forma aproximadamente lineal con el contexto existente. FlashAttention mejora el uso de memoria de la atención exacta y evita almacenar toda la matriz de atención; no elimina la aritmética cuadrática de atención de la entrada. Estas expresiones omiten otras operaciones del modelo y no predicen la latencia total."
      ],
      "discussion": [
        "¿Qué término pasa a dominar cuando aumenta el contexto y mantiene fijos los pesos y el lote?",
        "¿Qué cambia en este cálculo cuando un modelo utiliza atención de consultas agrupadas?"
      ],
      "notes": "El almacenamiento de pesos escala con parámetros y precisión. Para arquitectura y lote fijos, la caché de claves y valores crece aproximadamente de forma lineal con el contexto. La atención densa de entrada compara pares; proyecciones y bloques de propagación añaden otros términos. FlashAttention cambia tráfico de memoria y evita materializar toda la matriz, sin eliminar la aritmética cuadrática de la atención exacta.",
      "optional": "Con anchura de capa d y contexto n fijos, la atención contiene un término O(n²d), mientras que las proyecciones y las capas de propagación hacia delante también consumen cómputo. La generación con caché añade un token cada vez, por lo que su coste por token difiere del procesamiento de una entrada completa. La arquitectura, la atención con consultas agrupadas, los lotes y la precisión cambian constantes y necesidades de memoria.",
      "kind": "list"
    },
    "22": {
      "title": "El objetivo de optimización no es el contrato de aplicación",
      "lead": "Un objetivo de entrenamiento proporciona la señal de optimización. Reducir ese objetivo no demuestra por sí solo el cumplimiento del contrato de una aplicación.",
      "points": [
        "Ejecute el cálculo hacia delante con los parámetros actuales.",
        "Evalúe la pérdida respecto al objetivo elegido.",
        "Retropropague las derivadas a través del grafo de cálculo.",
        "Aplique una actualización del optimizador; el SGD básico ilustra θ ← θ − η∇θℒ."
      ],
      "reading": [
        "La pasada hacia delante produce predicciones, la pérdida las evalúa frente a un objetivo y la retropropagación aporta gradientes al optimizador. Especifique qué parámetros reciben cambios y qué recompensa el objetivo. Diagnostique si mejora estructura deseada, memorización o atajos. La inferencia habitual aplica lo aprendido sin actualizar parámetros, aunque la aplicación conserve contexto conversacional.",
        "Los gradientes indican sensibilidad local, no una explicación legible del conocimiento almacenado. Un modelo puede reducir la pérdida de entrenamiento y a la vez sobreajustarse o aprender atajos. Se necesitan datos separados para evaluar si el comportamiento se transfiere a los casos relevantes."
      ],
      "discussion": [
        "¿Qué atajo podría reducir la pérdida de entrenamiento sin mejorar el comportamiento deseado?",
        "¿Qué parámetros y estado del optimizador deben restaurarse para reproducir la siguiente actualización tras una pausa?"
      ],
      "notes": "La pasada hacia delante produce predicciones, la pérdida las evalúa frente a un objetivo y la retropropagación aporta gradientes al optimizador. Especifique qué parámetros reciben cambios y qué recompensa el objetivo. Diagnostique si mejora estructura deseada, memorización o atajos. La inferencia habitual aplica lo aprendido sin actualizar parámetros, aunque la aplicación conserve contexto conversacional.",
      "optional": "Los gradientes indican sensibilidad local, no una explicación legible del conocimiento almacenado. Un modelo puede reducir la pérdida de entrenamiento y a la vez sobreajustarse o aprender atajos. Se necesitan datos separados para evaluar si el comportamiento se transfiere a los casos relevantes.",
      "kind": "steps"
    },
    "23": {
      "title": "Compare inicio y alcance entrenable de cada método",
      "lead": "El alcance del entrenamiento y su objetivo son decisiones distintas. «Ajuste fino completo» especifica qué parámetros pueden cambiar, no si el modelo partió de pesos aleatorios.",
      "points": [
        "Desde cero: inicialice un modelo nuevo y aprenda de los datos las representaciones necesarias.",
        "Preentrenamiento continuado: continúe un objetivo amplio de predicción desde un punto de control preentrenado.",
        "Ajuste fino completo: actualice los parámetros de la base para la tarea de adaptación.",
        "LoRA: entrene una actualización factorizada y mantenga congelados los pesos de la base.",
        "QLoRA: entrene adaptadores a través de una base congelada almacenada con baja precisión."
      ],
      "reading": [
        "Registre punto de control inicial, objetivo, exposición y alcance de parámetros. Entrenar desde cero a escala fundacional carece de representaciones preentrenadas y necesita otro presupuesto. El ajuste completo modifica la base; LoRA modifica añadidos factorizados; QLoRA también cuantiza la base congelada. Un modelo diminuto específico puede entrenarse desde cero si el comportamiento es limitado y los datos lo permiten.",
        "El preentrenamiento continuado suele prolongar un objetivo general de predicción con datos adicionales de un dominio; el ajuste supervisado utiliza demostraciones de tareas. «Ajuste completo» describe qué parámetros cambian, no si el modelo comenzó desde cero. Entrenar adaptadores sigue requiriendo cómputo hacia delante y retropropagación a través de las capas relevantes."
      ],
      "discussion": [
        "¿Cómo describiría un experimento con suficiente precisión para distinguir su inicialización, objetivo y conjunto de parámetros entrenables?"
      ],
      "notes": "Registre punto de control inicial, objetivo, exposición y alcance de parámetros. Entrenar desde cero a escala fundacional carece de representaciones preentrenadas y necesita otro presupuesto. El ajuste completo modifica la base; LoRA modifica añadidos factorizados; QLoRA también cuantiza la base congelada. Un modelo diminuto específico puede entrenarse desde cero si el comportamiento es limitado y los datos lo permiten.",
      "optional": "El preentrenamiento continuado suele prolongar un objetivo general de predicción con datos adicionales de un dominio; el ajuste supervisado utiliza demostraciones de tareas. «Ajuste completo» describe qué parámetros cambian, no si el modelo comenzó desde cero. Entrenar adaptadores sigue requiriendo cómputo hacia delante y retropropagación a través de las capas relevantes.",
      "kind": "comparison"
    },
    "24": {
      "title": "Estime cómputo y memoria máxima con modelos separados",
      "lead": "C ≈ 6ND estima el trabajo de entrenamiento denso; el pico de memoria necesita un modelo separado de los tensores activos. Ninguna estimación determina el tiempo de ejecución en un dispositivo concreto.",
      "points": [],
      "reading": [
        "En la relación aproximada de entrenamiento denso C ≈ 6ND, N es el número de parámetros y D el número de tokens presentados, incluidas las repeticiones. Un modelo de 7B expuesto a 1T tokens da unos 4.2 × 10²² FLOPs; exponer el mismo modelo a 10M tokens da unos 4.2 × 10¹⁷ FLOPs bajo la misma aproximación. Esto ilustra la diferencia de trabajo entre un gran preentrenamiento y un corpus de adaptación mucho menor. No predice la calidad alcanzada ni establece un tiempo de dispositivo.",
        "Los pesos brutos de 7B ocupan unos 14 GB decimales a 16 bits o 3.5 GB a 4 bits, antes de los metadatos de cuantización. La asignación de entrenamiento también depende de qué gradientes y estados del optimizador se materializan. Las activaciones y los búferes temporales dependen de la longitud de secuencia y de la configuración del lote. La recomputación de activaciones o el particionado pueden reducir un término de memoria a costa de añadir cálculo repetido o comunicación. En LoRA, sustituir N por el número de parámetros entrenables de los adaptadores omitiría el cálculo que atraviesa la base congelada."
      ],
      "discussion": [
        "¿Por qué un modelo puede caber para inferencia y fallar durante una actualización de entrenamiento?",
        "¿Qué mediciones hacen falta para convertir una estimación de FLOPs en un intervalo creíble de tiempo de ejecución?"
      ],
      "notes": "En entrenamiento denso, N parámetros y D tokens presentados dan C ≈ 6ND como estimación aproximada. Un modelo 7B con 1T tokens da unos 4.2 × 10²² FLOPs. Sus pesos brutos requieren unos 14 GB decimales a 16 bits o 3.5 GB a 4 bits. La memoria máxima añade activaciones, gradientes, estado del optimizador y búferes temporales.",
      "optional": "Como comparación, 7 mil millones de parámetros expuestos a 10 millones de tokens de ajuste dan unos 4.2 × 10¹⁷ FLOPs con la misma aproximación densa, antes de costes omitidos. El cómputo de LoRA no puede estimarse sustituyendo N por sus parámetros entrenables de adaptador. La disposición del optimizador con precisión mixta, el guardado de activaciones y la distribución del estado modifican el presupuesto de memoria. Una estimación de FLOPs no determina la duración en una máquina concreta.",
      "kind": "prose"
    },
    "25": {
      "title": "LoRA reduce estado entrenable mediante bajo rango",
      "lead": "Para W ∈ ℝ^(d_out×d_in), LoRA aprende ΔW = (α/r)BA con r(d_in + d_out) parámetros entrenables en lugar de d_in d_out.",
      "points": [],
      "reading": [
        "Los factores de rango r tienen dimensiones B ∈ ℝ^(d_out×r) y A ∈ ℝ^(r×d_in). Su producto aporta una actualización restringida de la matriz congelada W. La escala α/r es una convención habitual de LoRA. Si r es mucho menor que ambas dimensiones de la matriz, los factores requieren muchos menos parámetros entrenables que una actualización de la matriz completa, lo que reduce el almacenamiento de gradientes y del optimizador para los pesos adaptados.",
        "La base congelada sigue participando en el cálculo hacia delante. Aprender adaptadores en capas anteriores también exige propagar gradientes a través de las operaciones posteriores pertinentes, por lo que la fracción de parámetros entrenables no estima una reducción proporcional de FLOPs. La ubicación de los módulos elegidos cambia tanto la capacidad de adaptación como la memoria. Las identidades del adaptador y la base deben corresponder al desplegar; fusionar la actualización con los pesos depende de la implementación y la precisión."
      ],
      "discussion": [
        "¿Cómo variaría el rango sin confundir la comparación con la ubicación de los módulos elegidos?",
        "¿Qué términos de memoria permanecen cuando todas las matrices de la base están congeladas?"
      ],
      "notes": "Para una matriz adaptada, parametrice ΔW = BA con un rango elegido y congele la base. Se eliminan gradientes y estados de optimizador de toda la base, pero quedan activaciones y propagación de gradientes por capas relevantes. Elegir módulos y rango limita el cambio aprendido. Evalúelos según tarea y retención sin interpretar menos parámetros como una reducción proporcional de FLOPs.",
      "optional": "La actualización W′ = W + BA a veces puede integrarse en los pesos para su ejecución, según la implementación y la precisión. Un adaptador depende de su modelo base y configuración. Aumentar el rango no es beneficioso automáticamente, y conservar la base congelada no garantiza que el comportamiento global evite el olvido.",
      "kind": "prose"
    },
    "26": {
      "title": "QLoRA separa precisión almacenada y actualizaciones",
      "lead": "QLoRA distingue el almacenamiento de pocos bits de la base de la precisión del cálculo y de los adaptadores entrenables.",
      "points": [
        "NF4 proporciona la representación de pesos de cuatro bits del método original.",
        "La doble cuantización reduce la sobrecarga de almacenamiento de las constantes de cuantización.",
        "Los optimizadores paginados abordan la presión transitoria de memoria; no eliminan el coste de las activaciones."
      ],
      "reading": [
        "QLoRA propaga gradientes por una base cuantizada congelada hacia adaptadores de bajo rango y mayor precisión. El método publicado combina NF4, doble cuantización y optimizadores paginados. Descuantización, metadatos y activaciones siguen costando recursos. La demostración con un modelo grande respalda esa receta, sin establecer capacidad para cualquier secuencia, lote o conjunto de módulos.",
        "El almacenamiento bruto a cuatro bits es solo una parte mínima de la memoria. La ubicación de adaptadores, la longitud de secuencia, el tamaño de lote, el guardado de activaciones y la implementación de cuantización pueden dominar el ajuste práctico a la memoria disponible. QLoRA puede ahorrar memoria sin mejorar el tiempo real de ejecución. Es una forma de adaptar pesos preentrenados, no un atajo para recrear su preentrenamiento original."
      ],
      "discussion": [
        "¿Qué asignación podría dominar el pico de memoria después de cuantizar la base?",
        "¿Qué partes de la configuración original de QLoRA están realmente presentes en la implementación evaluada?"
      ],
      "notes": "QLoRA propaga gradientes por una base cuantizada congelada hacia adaptadores de bajo rango y mayor precisión. El método publicado combina NF4, doble cuantización y optimizadores paginados. Descuantización, metadatos y activaciones siguen costando recursos. La demostración con un modelo grande respalda esa receta, sin establecer capacidad para cualquier secuencia, lote o conjunto de módulos.",
      "optional": "El almacenamiento bruto a cuatro bits es solo una parte mínima de la memoria. La ubicación de adaptadores, la longitud de secuencia, el tamaño de lote, el guardado de activaciones y la implementación de cuantización pueden dominar el ajuste práctico a la memoria disponible. QLoRA puede ahorrar memoria sin mejorar el tiempo real de ejecución. Es una forma de adaptar pesos preentrenados, no un atajo para recrear su preentrenamiento original.",
      "kind": "list"
    },
    "27": {
      "title": "La calidad incluye cobertura e independencia de particiones",
      "lead": "La calidad de un conjunto de datos depende de la superficie de decisión deseada y de la evidencia que respalda cada etiqueta. El número de filas por sí solo no mide ninguna de las dos cosas.",
      "points": [
        "Resuelva los objetivos contradictorios antes de ampliar el conjunto de datos.",
        "Cubra operaciones válidas poco frecuentes, además de negativos y ambigüedades.",
        "Mantenga juntas las sesiones relacionadas, las paráfrasis y las copias aumentadas al dividir los datos.",
        "Conserve la distinción entre palabras observadas, acciones previstas y resultados de ejecución."
      ],
      "reading": [
        "Defina la frontera de decisiones que deben enseñar los ejemplos, incluidos negativos, ambigüedad y operaciones válidas raras. Mantenga juntas sesiones, paráfrasis y copias aumentadas relacionadas para evitar filtración. En señales, distinga evidencia acústica, intención y ejecución real. Registre procedencia y cobertura; las filas generadas no equivalen a información independiente ni representatividad de uso demostrada.",
        "Un modelo pequeño entrenado desde cero puede ser adecuado para detectar una señal concreta. Un modelo preentrenado mayor puede fallar si las etiquetas se contradicen o faltan operaciones poco frecuentes. Las transcripciones acústicas, las órdenes pretendidas y los resultados reales de ejecución son tipos distintos de evidencia y no deben tratarse como etiquetas intercambiables."
      ],
      "discussion": [
        "¿Qué etiqueta podría ser correcta para el significado previsto pero incorrecta como transcripción acústica?",
        "¿Qué hace que un ejemplo sintético amplíe la cobertura en vez de añadir otro casi duplicado?"
      ],
      "notes": "Defina la frontera de decisiones que deben enseñar los ejemplos, incluidos negativos, ambigüedad y operaciones válidas raras. Mantenga juntas sesiones, paráfrasis y copias aumentadas relacionadas para evitar filtración. En señales, distinga evidencia acústica, intención y ejecución real. Registre procedencia y cobertura; las filas generadas no equivalen a información independiente ni representatividad de uso demostrada.",
      "optional": "Un modelo pequeño entrenado desde cero puede ser adecuado para detectar una señal concreta. Un modelo preentrenado mayor puede fallar si las etiquetas se contradicen o faltan operaciones poco frecuentes. Las transcripciones acústicas, las órdenes pretendidas y los resultados reales de ejecución son tipos distintos de evidencia y no deben tratarse como etiquetas intercambiables.",
      "kind": "list"
    },
    "28": {
      "title": "Diseñe comparaciones que respalden la afirmación",
      "lead": "El diseño experimental debe aislar la intervención nombrada en la afirmación. El mismo número de épocas no implica la misma exposición si los conjuntos de datos tienen tamaños distintos.",
      "points": [
        "Indique la afirmación y la referencia antes de seleccionar la candidata.",
        "Fije la partición de evaluación y examine el evaluador con casos conocidos.",
        "Registre los factores modificados, incluidos el número de actualizaciones y la exposición a tokens.",
        "Ejecute la comparación bajo un protocolo de inferencia declarado.",
        "Examine el éxito útil y los subconjuntos de fallo antes de aceptar una mejora agregada."
      ],
      "reading": [
        "Establezca intervención, referencia y criterios antes de examinar resultados. Igualar épocas puede dar actualizaciones desiguales si cambian los datos; igualar ejemplos aún puede dar tokens distintos. Registre éxito útil, omisiones, acciones incorrectas y retención en vez de un agregado único. El desarrollo permite iterar, mientras un conjunto final intacto estima transferencia tras esas elecciones.",
        "Una evaluación compara un modelo junto con sus peticiones, herramientas, presupuestos y reglas de puntuación. Las comprobaciones mediante código, los jueces basados en modelos y la revisión humana tienen fortalezas y fallos diferentes. Mantenga visible la rúbrica y distinga los resultados reales de la tarea de la descripción que hace el asistente de su propio éxito."
      ],
      "discussion": [
        "¿Qué afirmación causal sigue siendo válida si la candidata cambia tanto los datos de entrenamiento como el número de actualizaciones del optimizador?"
      ],
      "notes": "Establezca intervención, referencia y criterios antes de examinar resultados. Igualar épocas puede dar actualizaciones desiguales si cambian los datos; igualar ejemplos aún puede dar tokens distintos. Registre éxito útil, omisiones, acciones incorrectas y retención en vez de un agregado único. El desarrollo permite iterar, mientras un conjunto final intacto estima transferencia tras esas elecciones.",
      "optional": "Una evaluación compara un modelo junto con sus peticiones, herramientas, presupuestos y reglas de puntuación. Las comprobaciones mediante código, los jueces basados en modelos y la revisión humana tienen fortalezas y fallos diferentes. Mantenga visible la rúbrica y distinga los resultados reales de la tarea de la descripción que hace el asistente de su propio éxito.",
      "kind": "steps"
    },
    "29": {
      "title": "EWC prueba el equilibrio entre estabilidad y adaptación",
      "lead": "EWC penaliza alejarse de parámetros que se estiman importantes para tareas anteriores. La intensidad de la penalización controla un compromiso entre estabilidad y adaptación.",
      "points": [],
      "reading": [
        "Una presentación habitual de la Consolidación Elástica de Pesos añade (λ/2)Σᵢ Fᵢ(θᵢ − θᵢ*)² a la pérdida de la nueva tarea. θ* es la solución anterior y los términos diagonales de Fisher Fᵢ aproximan la importancia de los parámetros bajo los supuestos del método. La aproximación es un mecanismo de retención; no constituye una representación completa de todo lo aprendido en una tarea anterior.",
        "El artículo citado evalúa el aprendizaje secuencial en escenarios concretos, incluido MNIST permutado. Aumentar λ puede conservar el comportamiento anterior y a la vez obstaculizar la adaptación. Una comparación útil mide, por tanto, el rendimiento de cada tarea anterior después de cada tarea nueva y también el aprendizaje de la nueva tarea. Fije la secuencia y compare el entrenamiento secuencial ordinario con el mismo presupuesto de recursos. Elegir λ sobre un conjunto final examinado repetidamente comprometería esa evaluación."
      ],
      "discussion": [
        "¿Qué resultado mostraría una retención conseguida al suprimir el aprendizaje nuevo útil en vez de un aprendizaje continuo satisfactorio?"
      ],
      "notes": "Elastic Weight Consolidation penaliza mover parámetros considerados importantes para tareas anteriores. Sus experimentos secuenciales de MNIST permutado comparan retención y aprendizaje al cambiar de tarea. Interprete las curvas juntas: conservar lo anterior impidiendo adaptación útil no es éxito de aprendizaje continuo. La secuencia, la estimación de importancia y la penalización delimitan el experimento.",
      "optional": "Una réplica útil compara la misma arquitectura inicial, orden de tareas y presupuesto de entrenamiento y evalúa todas las tareas anteriores después de cada una nueva. Incluya entrenamiento secuencial ordinario y una referencia de regularización simple. Informe tanto del aprendizaje de la nueva tarea como de la retención de las antiguas. La intensidad de penalización cambia ese equilibrio; elegirla en la prueba final debilitaría la evaluación.",
      "kind": "prose"
    },
    "30": {
      "title": "El ajuste con datos seleccionados depende de la base",
      "lead": "El ajuste con instrucciones seleccionadas depende de las representaciones ya aprendidas por el modelo base. Su presupuesto de datos no puede interpretarse como un requisito de preentrenamiento.",
      "points": [
        "La configuración descrita en LIMA utiliza un modelo preentrenado de 65B y 1,000 ejemplos seleccionados de instrucción y respuesta; el resultado se limita a su configuración de adaptación y evaluación."
      ],
      "reading": [
        "LIMA parte de una base preentrenada de 65B y utiliza 1,000 ejemplos seleccionados de instrucciones y respuestas. El resultado describe cómo expresa capacidades esa base bajo adaptación supervisada. No aísla la calidad de ejemplos de todas las otras decisiones ni establece un umbral universal de tamaño. Reproduzca selección y evaluación antes de trasladar la conclusión a otro dominio.",
        "En una adaptación de ingeniería, prepare una tabla de cobertura antes de seleccionar ejemplos: peticiones comunes, entradas ambiguas, operaciones raras y abstenciones válidas. Conserve pruebas independientes para cada categoría. Compare datos seleccionados y de referencia con igual exposición al investigar la calidad, porque cambiar el tamaño del conjunto también cambia las actualizaciones en una receta de épocas fijas. Un juicio favorable de preferencia aporta evidencia útil, pero no sustituye comprobar la corrección numérica o el funcionamiento operativo."
      ],
      "discussion": [
        "¿Cómo compararía estrategias de selección de datos sin que las diferencias en el número de actualizaciones expliquen el resultado?",
        "¿Qué comprobación operativa no resolvería una puntuación favorable de preferencia entre respuestas?"
      ],
      "notes": "LIMA parte de una base preentrenada de 65B y utiliza 1,000 ejemplos seleccionados de instrucciones y respuestas. El resultado describe cómo expresa capacidades esa base bajo adaptación supervisada. No aísla la calidad de ejemplos de todas las otras decisiones ni establece un umbral universal de tamaño. Reproduzca selección y evaluación antes de trasladar la conclusión a otro dominio.",
      "optional": "En una adaptación de ingeniería, prepare una tabla de cobertura antes de seleccionar ejemplos: peticiones comunes, entradas ambiguas, operaciones raras y abstenciones válidas. Conserve pruebas independientes para cada categoría. Compare datos seleccionados y de referencia con igual exposición al investigar la calidad, porque cambiar el tamaño del conjunto también cambia las actualizaciones en una receta de épocas fijas. Un juicio favorable de preferencia aporta evidencia útil, pero no sustituye comprobar la corrección numérica o el funcionamiento operativo.",
      "kind": "prose"
    },
    "31": {
      "title": "Identifique exactamente la referencia de QLoRA",
      "lead": "Una comparación de QLoRA de cuatro bits con LoRA de mayor precisión se refiere a la precisión de la base en la configuración con adaptadores. No es automáticamente una comparación con el ajuste fino completo de la base.",
      "points": [
        "Para aislar la cuantización, iguale el punto de control de la base y la configuración del adaptador, teniendo en cuenta la igualdad de exposición al entrenamiento.",
        "Para comparar métodos de adaptación, informe de las diferencias más amplias en el conjunto de parámetros entrenables y la distribución de memoria."
      ],
      "reading": [
        "Los experimentos QLoRA incluyen LoRA cuantizado frente a LoRA de mayor precisión; no todos comparan ajuste completo. Un estudio aísla precisión de almacenamiento solo si iguala adecuadamente base, adaptador, exposición y evaluación. Interprete memoria y calidad independientemente. La puntuación de chatbots exige además probar exactitud científica y comportamiento conservado de la aplicación.",
        "Una comparación de ingeniería debe registrar el punto de control base, las capas elegidas, el rango del adaptador, la precisión, la exposición de entrenamiento y el procedimiento de inferencia. Compare memoria y calidad de tarea de forma independiente y conserve pruebas de comportamientos antes útiles. Indique si el experimento mide cuantización, capacidad del adaptador o varios factores modificados a la vez. En cálculos, las comprobaciones numéricas independientes y los resultados ejecutables aportan evidencia más sólida que una preferencia de estilo."
      ],
      "discussion": [
        "¿Qué variable aísla la comparación que está a punto de citar?"
      ],
      "notes": "Los experimentos QLoRA incluyen LoRA cuantizado frente a LoRA de mayor precisión; no todos comparan ajuste completo. Un estudio aísla precisión de almacenamiento solo si iguala adecuadamente base, adaptador, exposición y evaluación. Interprete memoria y calidad independientemente. La puntuación de chatbots exige además probar exactitud científica y comportamiento conservado de la aplicación.",
      "optional": "Una comparación de ingeniería debe registrar el punto de control base, las capas elegidas, el rango del adaptador, la precisión, la exposición de entrenamiento y el procedimiento de inferencia. Compare memoria y calidad de tarea de forma independiente y conserve pruebas de comportamientos antes útiles. Indique si el experimento mide cuantización, capacidad del adaptador o varios factores modificados a la vez. En cálculos, las comprobaciones numéricas independientes y los resultados ejecutables aportan evidencia más sólida que una preferencia de estilo.",
      "kind": "comparison"
    },
    "32": {
      "title": "El aprendizaje continuo requiere retención explícita",
      "lead": "El aprendizaje continuo requiere un mecanismo definido para proteger el comportamiento anterior. Los mecanismos imponen distintas restricciones sobre los datos y la capacidad.",
      "points": [
        "La repetición vuelve a aportar ejemplos anteriores y cambia la distribución de exposición al entrenamiento.",
        "La regularización penaliza cambios especificados en parámetros o salidas.",
        "Los adaptadores pueden mantener separado el estado de cada tarea, aunque el sistema adaptado activo aún puede sufrir regresiones.",
        "La ampliación de expertos añade capacidad, pero deja por gestionar el enrutamiento y los componentes compartidos."
      ],
      "reading": [
        "Elija mecanismos según el fallo y la evidencia disponible de tareas anteriores. La repetición cambia exposición; la regularización limita cambios de parámetros o salidas; los adaptadores separan parte del estado por tarea. Ampliar expertos añade capacidad, pero deja enrutamiento y componentes compartidos por gestionar. Consolidar inspirándose en sueño especifica operaciones reales y debe evaluarse como receta, no suponerse por inactividad.",
        "Ningún método garantiza aprendizaje permanente en todas las tareas. La repetición puede exigir almacenar datos; la repetición generada puede reproducir errores; congelar limita la adaptación; ampliar expertos aumenta el almacenamiento y la complejidad de enrutamiento. Retirar un adaptador puede restaurar un comportamiento de la base, pero el sistema adaptado puede sufrir regresiones mientras el adaptador está activo."
      ],
      "discussion": [
        "¿Qué evidencia de tareas anteriores requiere el método de retención que elegiría?",
        "¿Qué calcula o actualiza realmente una etapa de sueño propuesta?"
      ],
      "notes": "Elija mecanismos según el fallo y la evidencia disponible de tareas anteriores. La repetición cambia exposición; la regularización limita cambios de parámetros o salidas; los adaptadores separan parte del estado por tarea. Ampliar expertos añade capacidad, pero deja enrutamiento y componentes compartidos por gestionar. Consolidar inspirándose en sueño especifica operaciones reales y debe evaluarse como receta, no suponerse por inactividad.",
      "optional": "Ningún método garantiza aprendizaje permanente en todas las tareas. La repetición puede exigir almacenar datos; la repetición generada puede reproducir errores; congelar limita la adaptación; ampliar expertos aumenta el almacenamiento y la complejidad de enrutamiento. Retirar un adaptador puede restaurar un comportamiento de la base, pero el sistema adaptado puede sufrir regresiones mientras el adaptador está activo.",
      "kind": "comparison"
    },
    "33": {
      "title": "MoE distingue capacidad total y cómputo activo",
      "lead": "Un enrutador disperso selecciona salidas de expertos y pondera su contribución: y = Σᵢ gᵢ(x)Eᵢ(x). El diagrama muestra un token en una capa MoE ilustrativa.",
      "points": [],
      "reading": [
        "En la capa ilustrada, donde cada token elige expertos, el enrutador calcula una compuerta dispersa g(x). Los expertos seleccionados reciben la representación del token x y sus salidas se combinan con los pesos de la compuerta. Cuando gᵢ(x) = 0, no es necesario evaluar la salida de ese experto para este token. La disposición de dos entre ocho es ilustrativa; otros diseños MoE utilizan diferentes números de expertos y reglas de enrutamiento. Los expertos son subredes aprendidas, no agentes que reciben peticiones por separado.",
        "El almacenamiento depende de la capacidad total de expertos aunque solo se ejecute un subconjunto para un token. El trabajo total también incluye las capas compartidas y la sobrecarga de enrutamiento. El desequilibrio de carga o el movimiento entre dispositivos puede limitar la utilización. Por tanto, el número de parámetros de los expertos activos no determina por sí solo el tiempo de ejecución. Durante la adaptación, indique qué expertos, enrutadores o bloques compartidos pueden cambiar. Añadir expertos no constituye por sí solo un método completo para evitar el olvido."
      ],
      "discussion": [
        "¿Por qué activar menos parámetros de expertos puede dejar un despliegue limitado por memoria o comunicación?"
      ],
      "notes": "Un enrutador disperso activa un subconjunto de expertos por token o ejemplo. Los parámetros totales siguen impulsando almacenamiento, mientras los activos omiten costes compartidos y de implementación. Examine enrutamiento, equilibrio de carga y ubicación de expertos al interpretar eficiencia. En adaptación, especifique si cambian enrutadores, bloques compartidos y expertos; añadir expertos no constituye por sí solo aprendizaje continuo completo.",
      "optional": "El trabajo original de MoE con compuertas dispersas utilizó expertos de propagación hacia delante dentro de un modelo secuencial. Los diseños modernos varían en tamaño, número, enrutamiento y ubicación de expertos. Añadir expertos para aprendizaje continuo es otra decisión algorítmica, no una propiedad automática de todas las MoE.",
      "kind": "prose"
    },
    "34": {
      "title": "Optimice la frontera entre recursos y calidad",
      "lead": "La optimización útil depende del cuello de botella medido. Un punto de control menor puede dejar intacta la latencia cuando dominan el movimiento de datos u otras asignaciones.",
      "points": [
        "Los cambios de representación, como la cuantización o la poda, necesitan comprobaciones de calidad y soporte de ejecución adecuado.",
        "Los cambios de ejecución, como FlashAttention, pueden mejorar el uso de memoria y conservar la operación matemática de atención."
      ],
      "reading": [
        "Identifique si limitan almacenamiento, activaciones, aritmética o movimiento de datos. Cuantización, poda y destilación cambian representación o comportamiento; dropout dirigido prepara parámetros para poda. Tener valores dispersos no garantiza ejecución dispersa sin kernels adecuados. FlashAttention reduce tráfico de memoria de atención exacta, mientras arquitecturas de espacio de estados e híbridas cambian el procesamiento secuencial.",
        "Comprimir un modelo es distinto de comprimir un archivo con un códec sin pérdidas. La cuantización y la poda pueden cambiar las salidas. La destilación transfiere comportamientos seleccionados, sin copiar exactamente todo el conocimiento. Los modelos de espacio de estados e híbridos tienen otras relaciones de escala de secuencias; no sustituyen universalmente la atención."
      ],
      "discussion": [
        "¿Qué perfil distinguiría un cuello de botella de ancho de banda de pesos de la presión de memoria de activaciones?",
        "¿Cuándo no produciría la poda una mejora de velocidad?"
      ],
      "notes": "Identifique si limitan almacenamiento, activaciones, aritmética o movimiento de datos. Cuantización, poda y destilación cambian representación o comportamiento; dropout dirigido prepara parámetros para poda. Tener valores dispersos no garantiza ejecución dispersa sin kernels adecuados. FlashAttention reduce tráfico de memoria de atención exacta, mientras arquitecturas de espacio de estados e híbridas cambian el procesamiento secuencial.",
      "optional": "Comprimir un modelo es distinto de comprimir un archivo con un códec sin pérdidas. La cuantización y la poda pueden cambiar las salidas. La destilación transfiere comportamientos seleccionados, sin copiar exactamente todo el conocimiento. Los modelos de espacio de estados e híbridos tienen otras relaciones de escala de secuencias; no sustituyen universalmente la atención.",
      "kind": "comparison"
    },
    "35": {
      "title": "Audite el vínculo entre objetivo y comportamiento",
      "lead": "Un objetivo define la señal disponible para aprender. Examine qué atajos permite esa señal antes de interpretar una mayor puntuación como una mejora del comportamiento en la tarea.",
      "points": [
        "La predicción autosupervisada deriva los objetivos de los datos de entrada.",
        "La adaptación supervisada aprende de demostraciones suministradas.",
        "Los métodos de preferencias o recompensa optimizan una señal de juicio cuya validez sigue necesitando comprobación.",
        "El entrenamiento de GAN acopla un generador con un discriminador aprendido; el entrenamiento de robustez frente a entradas adversariales es otro procedimiento."
      ],
      "reading": [
        "Especifique cómo se construye el objetivo y su señal: predicción autosupervisada, demostraciones, preferencias o recompensas. Las GAN acoplan generador y discriminador; difieren de predecir tokens y de entrenar robustez ante entradas adversarias. Examine qué atajos permite cada receta y evalúe independientemente el comportamiento deseado, incluidas capacidades que deben mantenerse.",
        "RLHF combina varias etapas y no es la única forma de aprender preferencias; Direct Preference Optimization ofrece otra formulación. Mejorar recompensas o preferencias debe comprobarse frente a la tarea real y las capacidades conservadas. Una señal puede favorecer un atajo si la evaluación no captura el objetivo previsto."
      ],
      "discussion": [
        "¿Qué atajo no deseado podría mejorar el objetivo que utiliza?",
        "¿Cómo pondría a prueba el comportamiento deseado independientemente de esa señal de entrenamiento?"
      ],
      "notes": "Especifique cómo se construye el objetivo y su señal: predicción autosupervisada, demostraciones, preferencias o recompensas. Las GAN acoplan generador y discriminador; difieren de predecir tokens y de entrenar robustez ante entradas adversarias. Examine qué atajos permite cada receta y evalúe independientemente el comportamiento deseado, incluidas capacidades que deben mantenerse.",
      "optional": "RLHF combina varias etapas y no es la única forma de aprender preferencias; Direct Preference Optimization ofrece otra formulación. Mejorar recompensas o preferencias debe comprobarse frente a la tarea real y las capacidades conservadas. Una señal puede favorecer un atajo si la evaluación no captura el objetivo previsto.",
      "kind": "list"
    },
    "36": {
      "title": "Compare sistemas de investigación en condiciones equivalentes",
      "lead": "Una mejora en una prueba puede proceder de mejores pesos o de un cambio del protocolo de inferencia. Compare los sistemas evaluados antes de afirmar una mejora del modelo.",
      "points": [],
      "reading": [
        "Buscar durante inferencia, usar herramientas y procesar varias modalidades modifica el protocolo además del modelo. Registre intentos, herramientas, contexto y puntuación antes de comparar. Evitar atajos o exigir resultados ejecutables aborda debilidades concretas, no toda preocupación de fiabilidad. Use los trabajos como evidencia fechada y pruebe transferencia al flujo real.",
        "MMMU-Pro dificulta deliberadamente responder evaluaciones multimodales mediante atajos de texto. ScienceAgentBench estudia tareas de análisis científico con resultados ejecutables. Son diseños útiles de medición, no garantías de fiabilidad en un laboratorio. No compare puntuaciones de versiones, presupuestos o accesos a herramientas diferentes como si solo hubieran cambiado los pesos del modelo."
      ],
      "discussion": [
        "¿Qué tendría que coincidir para que dos puntuaciones publicadas respaldaran una afirmación sobre los modelos subyacentes?",
        "¿Qué fallo aborda la evaluación de productos ejecutables y qué fallo podría persistir?"
      ],
      "notes": "Buscar durante inferencia, usar herramientas y procesar varias modalidades modifica el protocolo además del modelo. Registre intentos, herramientas, contexto y puntuación antes de comparar. Evitar atajos o exigir resultados ejecutables aborda debilidades concretas, no toda preocupación de fiabilidad. Use los trabajos como evidencia fechada y pruebe transferencia al flujo real.",
      "optional": "MMMU-Pro dificulta deliberadamente responder evaluaciones multimodales mediante atajos de texto. ScienceAgentBench estudia tareas de análisis científico con resultados ejecutables. Son diseños útiles de medición, no garantías de fiabilidad en un laboratorio. No compare puntuaciones de versiones, presupuestos o accesos a herramientas diferentes como si solo hubieran cambiado los pesos del modelo.",
      "kind": "prose"
    },
    "37": {
      "title": "Las relaciones de escala necesitan ámbito y métrica",
      "lead": "Duplicar tanto N como D cuadruplica C ≈ 6ND. No establece una ley cuadrática de la capacidad de razonamiento.",
      "points": [
        "Una relación de escala del trabajo describe recursos bajo supuestos de modelado explícitos.",
        "Una tendencia empírica de eficiencia describe una prueba y un periodo de comparación; extrapolar necesita un argumento adicional."
      ],
      "reading": [
        "Duplicar N y D multiplica por cuatro C ≈ 6ND en la estimación densa sencilla. Describe trabajo, no garantiza un cambio de capacidad. Las medidas históricas de eficiencia algorítmica también dependen de la evaluación y periodo elegidos. Distinga tendencias de hardware, coste de entrenamiento, coste de ejecución y calidad antes de extrapolar.",
        "Un pronóstico debe especificar la métrica, el periodo, los supuestos y las condiciones que lo invalidarían. En un proyecto práctico, reevalúe los modelos y herramientas disponibles cuando cambien los requisitos, en vez de suponer que comprar más cómputo o esperar un modelo mayor son las únicas alternativas."
      ],
      "discussion": [
        "¿Qué observación refutaría la extrapolación que hace a partir de una tendencia histórica de escala?"
      ],
      "notes": "Duplicar N y D multiplica por cuatro C ≈ 6ND en la estimación densa sencilla. Describe trabajo, no garantiza un cambio de capacidad. Las medidas históricas de eficiencia algorítmica también dependen de la evaluación y periodo elegidos. Distinga tendencias de hardware, coste de entrenamiento, coste de ejecución y calidad antes de extrapolar.",
      "optional": "Un pronóstico debe especificar la métrica, el periodo, los supuestos y las condiciones que lo invalidarían. En un proyecto práctico, reevalúe los modelos y herramientas disponibles cuando cambien los requisitos, en vez de suponer que comprar más cómputo o esperar un modelo mayor son las únicas alternativas.",
      "kind": "comparison"
    },
    "38": {
      "title": "Entregue un flujo reproducible y su evaluación",
      "lead": "Haga reproducible una mejora antes de ampliar la autonomía. El registro de evaluación debe explicar por qué se aceptó el nuevo flujo de trabajo.",
      "points": [
        "Fije una tarea con entradas fuente examinables.",
        "Mida una referencia más sencilla.",
        "Cambie una parte especificada del flujo.",
        "Aplique la prueba de aceptación y conserve los casos de fallo.",
        "Registre la decisión resultante y las condiciones bajo las que debería revisarse."
      ],
      "reading": [
        "Agrupe instrucciones, entradas autorizadas, configuración de herramientas y pruebas de aceptación para que otro ingeniero reproduzca el resultado. Compare el flujo completo con una referencia sencilla, incluida revisión humana y trabajo repetido. Conserve fallos como evidencia de desarrollo y una evaluación final independiente. Use límites observados para justificar recuperación, más inferencia, adaptadores u otra arquitectura.",
        "Como primer ejercicio científico, elija un cálculo publicado, un conjunto sintético con respuesta conocida o un script pequeño con comportamiento observable. Compare una referencia sin asistencia con el flujo asistido por IA, incluido el tiempo de verificación. El objetivo es un resultado útil y reproducible. Mayor autonomía, razonamiento más largo o entrenamiento adicional deben responder a una necesidad demostrada, sin presuponer mejoras."
      ],
      "discussion": [
        "¿Qué única intervención probaría a continuación y qué resultado le llevaría a rechazarla?"
      ],
      "notes": "Agrupe instrucciones, entradas autorizadas, configuración de herramientas y pruebas de aceptación para que otro ingeniero reproduzca el resultado. Compare el flujo completo con una referencia sencilla, incluida revisión humana y trabajo repetido. Conserve fallos como evidencia de desarrollo y una evaluación final independiente. Use límites observados para justificar recuperación, más inferencia, adaptadores u otra arquitectura.",
      "optional": "Como primer ejercicio científico, elija un cálculo publicado, un conjunto sintético con respuesta conocida o un script pequeño con comportamiento observable. Compare una referencia sin asistencia con el flujo asistido por IA, incluido el tiempo de verificación. El objetivo es un resultado útil y reproducible. Mayor autonomía, razonamiento más largo o entrenamiento adicional deben responder a una necesidad demostrada, sin presuponer mejoras.",
      "kind": "steps"
    }
  }
};

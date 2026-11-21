window.PRESENTATION_ES = {
  "slides": {
    "1": {
      "section": "Para empezar",
      "title": "Uso de IA en ciencia e ingeniería",
      "eyebrow": "Una guía práctica para encargar tareas, comprobar resultados y adaptar IA",
      "lead": "Aborde el trabajo con ayuda de IA como un experimento con un resultado observable. Esta guía se preparó con ayuda de IA y está pendiente de revisión editorial.",
      "points": [],
      "notes": "Presente la diferencia entre un mensaje de finalización plausible y un producto que pueda examinarse. Un cálculo de resultado conocido sirve como prueba inicial. Las secciones posteriores explican los mecanismos y las decisiones sobre recursos que sustentan este flujo de trabajo.",
      "optional": "El material permite lectura independiente, presentación y debate. Los recorridos cortos seleccionan unas pocas ideas prácticas; los largos añaden mecanismos y experimentos publicados. Los pasajes de lectura aportan explicaciones sin necesitar un ponente, y las preguntas de debate conectan cada tema con decisiones de laboratorio o ingeniería. La IA ayudó a preparar esta revisión; la revisión editorial sigue pendiente.",
      "evidence": "Práctica",
      "reading": [
        "La IA puede apoyar el trabajo científico y de ingeniería explicando conceptos, preparando código, organizando evidencia y coordinando herramientas. Su utilidad depende de la especificación de la tarea y de que pueda comprobarse el resultado. Una respuesta fluida es una salida del sistema; un cálculo verificado, un documento ejecutable o un estado medido de un dispositivo aportan evidencias distintas. Esta guía desarrolla un flujo práctico desde las instrucciones iniciales hasta la selección del modelo, las herramientas y la evaluación. También explica los mecanismos necesarios para decidir con criterio sobre contexto, entrenamiento, memoria y despliegue.",
        "El material permite lectura independiente, presentación y debate. Los recorridos cortos seleccionan unas pocas ideas prácticas; los largos añaden mecanismos y experimentos publicados. Los pasajes de lectura aportan explicaciones sin necesitar un ponente, y las preguntas de debate conectan cada tema con decisiones de laboratorio o ingeniería. La IA ayudó a preparar esta revisión; la revisión editorial sigue pendiente."
      ],
      "discussion": [
        "¿Qué producto u observación demostraría el éxito independientemente del mensaje de finalización del modelo?"
      ],
      "kind": "prose"
    },
    "2": {
      "section": "Para empezar",
      "title": "Una breve historia de ideas útiles",
      "eyebrow": "1958 → 1966 → 1986 → 2003 → 2017 → hoy",
      "lead": "Observe los cambios en cómo los sistemas representan la información y aprenden de los ejemplos. Estos hitos se superponen en vez de sustituirse unos a otros.",
      "points": [],
      "notes": "Un perceptrón aprende una frontera de decisión a partir de ejemplos. ELIZA, publicado en 1966, generaba respuestas conversacionales mediante reglas escritas a mano, en vez de modelos neuronales de lenguaje modernos. Las redes multicapa aprendieron representaciones más ricas, y la retropropagación se hizo ampliamente influyente tras importantes demostraciones en la década de 1980. Más tarde, los modelos neuronales de lenguaje aprendieron representaciones distribuidas de palabras y probabilidades sobre secuencias. El artículo de 2017 Attention Is All You Need presentó la arquitectura Transformer, que permite entrenar modelos secuenciales en paralelo. Los asistentes modernos combinan estos modelos preentrenados con adaptación, información externa y herramientas ejecutables.",
      "optional": "Esta historia no es una progresión única desde las reglas hasta la inteligencia. Las redes convolucionales capturan estructura espacial; las recurrentes y LSTM modelan secuencias; la atención es anterior al Transformer. Las capas de propagación hacia delante siguen siendo centrales en los Transformers. El artículo de retropropagación de 1986 popularizó y demostró el método, sin originar cada una de sus partes. Los modelos de lenguaje también son anteriores a las redes neuronales y a las interfaces conversacionales. Estas diferencias explican que un sistema moderno combine métodos de varias épocas.",
      "evidence": "Establecido",
      "reading": [
        "Un perceptrón aprende una frontera de decisión a partir de ejemplos. ELIZA, publicado en 1966, generaba respuestas conversacionales mediante reglas escritas a mano, en vez de modelos neuronales de lenguaje modernos. Las redes multicapa aprendieron representaciones más ricas, y la retropropagación se hizo ampliamente influyente tras importantes demostraciones en la década de 1980. Más tarde, los modelos neuronales de lenguaje aprendieron representaciones distribuidas de palabras y probabilidades sobre secuencias. El artículo de 2017 Attention Is All You Need presentó la arquitectura Transformer, que permite entrenar modelos secuenciales en paralelo. Los asistentes modernos combinan estos modelos preentrenados con adaptación, información externa y herramientas ejecutables.",
        "Esta historia no es una progresión única desde las reglas hasta la inteligencia. Las redes convolucionales capturan estructura espacial; las recurrentes y LSTM modelan secuencias; la atención es anterior al Transformer. Las capas de propagación hacia delante siguen siendo centrales en los Transformers. El artículo de retropropagación de 1986 popularizó y demostró el método, sin originar cada una de sus partes. Los modelos de lenguaje también son anteriores a las redes neuronales y a las interfaces conversacionales. Estas diferencias explican que un sistema moderno combine métodos de varias épocas."
      ],
      "discussion": [
        "¿Qué distinción histórica ayuda a explicar los componentes de un asistente actual?"
      ],
      "kind": "prose"
    },
    "3": {
      "section": "Para empezar",
      "eyebrow": "DOS FORMAS DE CONSTRUIR IA",
      "title": "Reglas escritas y pesos aprendidos",
      "lead": "La diferencia está en cómo se construye la correspondencia entre entrada y respuesta; un sistema desplegado puede contener ambos mecanismos.",
      "points": [
        "ELIZA: reglas explícitas para reconocer patrones en la entrada y reescribir respuestas.",
        "Modelo neuronal: pesos numéricos ajustados mediante optimización respecto a un objetivo de entrenamiento."
      ],
      "evidence": "Establecido",
      "notes": "El guion DOCTOR de ELIZA reconocía patrones en el texto y aplicaba reglas de reescritura escritas por personas. Un modelo neuronal de lenguaje se entrena con datos: la optimización ajusta pesos numéricos para mejorar un objetivo de entrenamiento. Después utiliza esos pesos para generar respuestas a entradas nuevas. Ambos enfoques forman parte de la historia de la IA.",
      "optional": "Las personas eligen la arquitectura, los datos y el objetivo, aunque la correspondencia entre entrada y respuesta se aprenda. Una petición normal cambia el contexto actual; el entrenamiento cambia los pesos. Un sistema puede combinar un modelo entrenado con reglas, herramientas y comprobaciones explícitas.",
      "reading": [
        "El guion DOCTOR de ELIZA reconocía patrones en el texto y aplicaba reglas de reescritura escritas por personas. Un modelo neuronal de lenguaje se entrena con datos: la optimización ajusta pesos numéricos para mejorar un objetivo de entrenamiento. Después utiliza esos pesos para generar respuestas a entradas nuevas.",
        "Las personas siguen eligiendo la arquitectura, los datos y el objetivo. Una petición normal cambia el contexto actual del modelo; el entrenamiento cambia sus pesos. Un sistema puede combinar modelos aprendidos con reglas y comprobaciones explícitas."
      ],
      "discussion": [
        "¿Qué partes de un flujo de laboratorio se beneficiarían de reglas explícitas?",
        "¿Qué comportamiento sería más práctico aprender a partir de datos?"
      ],
      "comparison": [
        [
          "Reglas · ELIZA",
          "Las personas escriben reglas para reconocer entradas y construir respuestas."
        ],
        [
          "Modelo neuronal entrenado",
          "El entrenamiento ajusta pesos numéricos mediante datos."
        ]
      ],
      "kind": "comparison"
    },
    "4": {
      "section": "Cómo recibe la tarea el modelo",
      "title": "El texto científico se convierte en tokens",
      "eyebrow": "Texto exacto; tokenizador identificado",
      "lead": "El mismo término científico, spectroscopy, ocupa tres tokens en cl100k_base y dos en o200k_base. Los límites dependen de la codificación.",
      "points": [],
      "notes": "Lea el texto ASCII exacto spectroscopy, en minúsculas y sin espacios alrededor. Cada recuadro es un token. cl100k_base produce spect / ro / scopy; o200k_base produce spect / roscopy. Ambas secuencias recuperan el mismo texto, aunque cambian su longitud y sus identificadores. Revele el ejemplo del espacio: un espacio ASCII inicial hace que todo el texto forme un solo token en o200k_base. Son codificaciones verificadas, no divisiones inventadas. Un token no es una unidad universal de palabra ni una medida de dificultad científica. Utilice el tokenizador real al presupuestar contexto o transferir texto entre modelos.",
      "optional": "Estos ejemplos utilizan las definiciones de vocabulario de OpenAI tiktoken fijadas a una revisión, sin plantilla de chat ni tokens especiales. En o200k_base, la entrada exacta \" spectroscopy\" es el único token 119655. El espacio forma parte de la entrada; su marca visible en el diagrama sirve para explicarlo.",
      "evidence": "Establecido",
      "reading": [
        "Un tokenizador convierte el texto en fragmentos numerados llamados tokens. Para el texto exacto spectroscopy, término inglés para espectroscopia, en minúsculas y sin espacios alrededor, cl100k_base produce spect / ro / scopy: tres tokens. o200k_base produce spect / roscopy: dos. Al unir cualquiera de las secuencias se recupera el mismo término científico. Los límites y los identificadores pertenecen a la codificación elegida, por lo que contar palabras no proporciona un número universal de tokens.",
        "Añadir un espacio ASCII normal cambia la entrada exacta a \" spectroscopy\". En o200k_base, el espacio y la palabra entera forman entonces un solo token. Esto ilustra por qué importan la entrada literal y el nombre del tokenizador al estimar contexto o coste. Una petición real también puede contener una plantilla de chat y definiciones de herramientas. El número de tokens mide la entrada codificada, no cuánto razonamiento requiere la tarea científica."
      ],
      "discussion": [
        "¿Por qué una estimación de tokens debe identificar tanto la entrada exacta como su tokenizador?"
      ],
      "kind": "prose"
    },
    "6": {
      "section": "Peticiones y correcciones",
      "title": "Conciso no significa incompleto",
      "eyebrow": "Redacte unas instrucciones útiles",
      "lead": "Una petición puede funcionar como una especificación compacta. Compare lo que estas peticiones dejan a la suposición del modelo.",
      "points": [
        "Petición insuficiente: «Analiza estos datos de decaimiento».",
        "Petición especificada: «Compara ajustes exponenciales con y sin fondo. Conserva las unidades e incertidumbres suministradas; muestra los residuos y explica qué supuestos afectan a la conclusión»."
      ],
      "notes": "Compare «Analiza esto» con unas instrucciones útiles: «Ajusta estas mediciones sintéticas de decaimiento. Explica el resultado a un estudiante de física. Conserva las unidades y las incertidumbres indicadas. Compara una exponencial con una exponencial más un fondo. Devuelve una gráfica, las incertidumbres de los parámetros, los residuos y una interpretación breve. Comprueba las unidades y el comportamiento límite». La segunda petición es más larga, pero cada parte cumple una función. Ser conciso significa eliminar lo que no ayuda a la tarea, no omitir requisitos. También puede pedir al asistente que identifique información faltante antes de realizar un trabajo costoso. En una exploración, indique qué supuestos puede adoptar y pídale que los señale. Es una especificación que puede revisar, no una frase mágica.",
      "optional": "Una plantilla reutilizable tiene seis campos: objetivo, contexto, restricciones, público, resultado deseado y criterios de aceptación. Complete solo los que importen. Un ejemplo puede aclarar un formato ambiguo mejor que varios párrafos de adjetivos. Si una restricción cambia la respuesta, merece conservarse incluso en una petición concisa.",
      "evidence": "Práctica",
      "reading": [
        "Compare «Analiza esto» con unas instrucciones útiles: «Ajusta estas mediciones sintéticas de decaimiento. Explica el resultado a un estudiante de física. Conserva las unidades y las incertidumbres indicadas. Compara una exponencial con una exponencial más un fondo. Devuelve una gráfica, las incertidumbres de los parámetros, los residuos y una interpretación breve. Comprueba las unidades y el comportamiento límite». La segunda petición es más larga, pero cada parte cumple una función. Ser conciso significa eliminar lo que no ayuda a la tarea, no omitir requisitos. También puede pedir al asistente que identifique información faltante antes de realizar un trabajo costoso. En una exploración, indique qué supuestos puede adoptar y pídale que los señale. Es una especificación que puede revisar, no una frase mágica.",
        "Una plantilla reutilizable tiene seis campos: objetivo, contexto, restricciones, público, resultado deseado y criterios de aceptación. Complete solo los que importen. Un ejemplo puede aclarar un formato ambiguo mejor que varios párrafos de adjetivos. Si una restricción cambia la respuesta, merece conservarse incluso en una petición concisa."
      ],
      "discussion": [
        "¿Qué información falta en la petición «analiza estas mediciones»?",
        "¿Qué criterios de aceptación permitirían revisar un ajuste generado de forma independiente?"
      ],
      "kind": "comparison"
    },
    "7": {
      "section": "Peticiones y correcciones",
      "title": "Dos significados de inferencia",
      "eyebrow": "El ejemplo del ajuste de una curva",
      "lead": "El ejemplo de ajuste de curvas utiliza dos significados distintos de inferencia.",
      "points": [
        "La inferencia del modelo aplica una red entrenada a una entrada, como una petición de generar o interpretar código.",
        "La inferencia estadística estima parámetros o incertidumbres a partir de datos bajo un modelo elegido. El algoritmo numérico ejecuta el ajuste."
      ],
      "notes": "La palabra inferencia tiene dos significados relevantes. La inferencia del modelo consiste en aplicar un modelo entrenado a una entrada. La inferencia estadística incluye estimar parámetros desconocidos a partir de datos y evaluar la incertidumbre. En un ajuste de curvas asistido por IA, el modelo de lenguaje interpreta la petición, propone un análisis y escribe o llama a código. Una biblioteca numérica ejecuta el optimizador y calcula los residuos. Después, el modelo interpreta la evidencia recibida. En la demostración de esta diapositiva, todos los cálculos se ejecutan directamente en el navegador; no hay una llamada de IA en vivo. Examine el ajuste con y sin un término de fondo. Una curva plausible puede ocultar un patrón sistemático en sus residuos. La cuestión científica sigue siendo si el modelo elegido, sus supuestos y el tratamiento de la incertidumbre corresponden al experimento.",
      "optional": "Los datos de decaimiento son sintéticos e ilustran decisiones de análisis, en lugar de mediciones de un sistema físico. Un optimizador numérico minimiza una función objetivo; no demuestra un mecanismo físico. Generar código no prueba que se haya ejecutado, y la interpretación escrita debe comprobarse frente a los resultados numéricos reales y la estructura de los residuos.",
      "evidence": "Establecido",
      "reading": [
        "La palabra inferencia tiene dos significados relevantes. La inferencia del modelo consiste en aplicar un modelo entrenado a una entrada. La inferencia estadística incluye estimar parámetros desconocidos a partir de datos y evaluar la incertidumbre. En un ajuste de curvas asistido por IA, el modelo de lenguaje interpreta la petición, propone un análisis y escribe o llama a código. Una biblioteca numérica ejecuta el optimizador y calcula los residuos. Después, el modelo interpreta la evidencia recibida. En la demostración de esta diapositiva, todos los cálculos se ejecutan directamente en el navegador; no hay una llamada de IA en vivo. Examine el ajuste con y sin un término de fondo. Una curva plausible puede ocultar un patrón sistemático en sus residuos. La cuestión científica sigue siendo si el modelo elegido, sus supuestos y el tratamiento de la incertidumbre corresponden al experimento.",
        "Los datos de decaimiento son sintéticos e ilustran decisiones de análisis, en lugar de mediciones de un sistema físico. Un optimizador numérico minimiza una función objetivo; no demuestra un mecanismo físico. Generar código no prueba que se haya ejecutado, y la interpretación escrita debe comprobarse frente a los resultados numéricos reales y la estructura de los residuos."
      ],
      "discussion": [
        "¿Qué puede revelar el gráfico de residuos que no muestre la curva ajustada por sí sola?"
      ],
      "kind": "comparison"
    },
    "8": {
      "section": "Peticiones y correcciones",
      "title": "Mejore el resultado con correcciones concretas",
      "eyebrow": "Una corrección debe indicar qué cambia",
      "lead": "«Los residuos a tiempos largos muestran estructura. Compara un término de fondo con los mismos datos e incertidumbres; conserva las unidades existentes e indica si los datos respaldan el parámetro adicional».",
      "points": [
        "Examine el cálculo revisado. Un diagnóstico convincente del error anterior no valida la reparación."
      ],
      "notes": "Una corrección útil identifica la diferencia entre el resultado y el objetivo. «Esto está mal» comunica insatisfacción, pero obliga al modelo a adivinar la reparación. «Interpretaste milisegundos como segundos; corrige la conversión y repite el ajuste» le da una acción concreta. Para un problema más sutil, muestre evidencia y pida alternativas: «Los residuos a tiempos largos presentan estructura. Compara los dos modelos bajo los mismos supuestos y explica si se justifica el parámetro adicional». Indique explícitamente qué trabajo útil debe conservarse cuando una reescritura completa sería perjudicial. Mantenga una lista breve de criterios de aceptación y revísela después de cada cambio. Las correcciones mejoran la interacción actual; no suponga que han modificado permanentemente los pesos del modelo.",
      "optional": "Cuando el modelo cuestione su interpretación, evalúe la evidencia en vez de forzar que esté de acuerdo. A la inversa, una explicación fluida de su error anterior no demuestra que la reparación sea correcta. Compruebe el documento o cálculo modificado.",
      "evidence": "Práctica",
      "reading": [
        "Una corrección útil identifica la diferencia entre el resultado y el objetivo. «Esto está mal» comunica insatisfacción, pero obliga al modelo a adivinar la reparación. «Interpretaste milisegundos como segundos; corrige la conversión y repite el ajuste» le da una acción concreta. Para un problema más sutil, muestre evidencia y pida alternativas: «Los residuos a tiempos largos presentan estructura. Compara los dos modelos bajo los mismos supuestos y explica si se justifica el parámetro adicional». Indique explícitamente qué trabajo útil debe conservarse cuando una reescritura completa sería perjudicial. Mantenga una lista breve de criterios de aceptación y revísela después de cada cambio. Las correcciones mejoran la interacción actual; no suponga que han modificado permanentemente los pesos del modelo.",
        "Cuando el modelo cuestione su interpretación, evalúe la evidencia en vez de forzar que esté de acuerdo. A la inversa, una explicación fluida de su error anterior no demuestra que la reparación sea correcta. Compruebe el documento o cálculo modificado."
      ],
      "discussion": [
        "¿Qué comprobación mostraría que el ajuste revisado reparó el problema en vez de limitarse a cambiar la explicación?"
      ],
      "kind": "prose"
    },
    "9": {
      "section": "Peticiones y correcciones",
      "title": "Especifique el destino",
      "eyebrow": "Permita que un modelo capaz elija pasos útiles",
      "lead": "Distinga los requisitos científicos de las decisiones de implementación que puede tomar el asistente.",
      "points": [
        "Tarea definida por el resultado: establezca el objetivo y los criterios de aceptación, y examine después el método propuesto.",
        "Tarea con método obligatorio: especifique el procedimiento de calibración o reproducción y los supuestos que deben permanecer fijos."
      ],
      "notes": "Los modelos de razonamiento pueden elegir una secuencia de pasos mejor que la impuesta por una petición innecesariamente rígida. En una tarea abierta, describa el destino, las restricciones y el contenido que debe tener un resultado satisfactorio. Deje al modelo decidir cómo llegar. Si debe reproducir un método publicado, seguir un procedimiento de calibración o cumplir una interfaz concreta, esos pasos son requisitos reales y deben ser explícitos. Lo útil es una respuesta respaldada por evidencia, código, cálculos o fuentes que puedan examinarse. Una explicación verbal larga puede seguir conteniendo errores. Trate el nivel de razonamiento como una elección de recursos que debe evaluar en su tarea, no como una promesa de corrección.",
      "optional": "Las recomendaciones del proveedor cambian con los modelos. Compare una petición centrada en el objetivo con un procedimiento prescrito en tareas representativas antes de convertir cualquiera de los estilos en regla universal. Una explicación ayuda a revisar, pero su longitud no mide directamente la fiabilidad.",
      "evidence": "Práctica",
      "reading": [
        "Los modelos de razonamiento pueden elegir una secuencia de pasos mejor que la impuesta por una petición innecesariamente rígida. En una tarea abierta, describa el destino, las restricciones y el contenido que debe tener un resultado satisfactorio. Deje al modelo decidir cómo llegar. Si debe reproducir un método publicado, seguir un procedimiento de calibración o cumplir una interfaz concreta, esos pasos son requisitos reales y deben ser explícitos. Lo útil es una respuesta respaldada por evidencia, código, cálculos o fuentes que puedan examinarse. Una explicación verbal larga puede seguir conteniendo errores. Trate el nivel de razonamiento como una elección de recursos que debe evaluar en su tarea, no como una promesa de corrección.",
        "Las recomendaciones del proveedor cambian con los modelos. Compare una petición centrada en el objetivo con un procedimiento prescrito en tareas representativas antes de convertir cualquiera de los estilos en regla universal. Una explicación ayuda a revisar, pero su longitud no mide directamente la fiabilidad."
      ],
      "discussion": [
        "¿Cuándo debe prescribirse un procedimiento de calibración en vez de dejar que lo elija el asistente?",
        "¿Qué evidencia examinable justificaría aceptar un análisis abierto?"
      ],
      "kind": "comparison"
    },
    "10": {
      "section": "Peticiones y correcciones",
      "title": "Un asistente puede preparar el encargo de un especialista",
      "eyebrow": "Como redactar un correo para un experto",
      "lead": "Compare una cascada de modelos con una llamada directa sobre la misma tarea. Incluya el coste de comprobar qué información sobrevive al traspaso.",
      "points": [
        "Posible beneficio: la primera etapa resuelve ambigüedades y organiza la evidencia relevante.",
        "Posible coste: añade latencia, duplica contexto o descarta una restricción decisiva."
      ],
      "notes": "Una cascada de modelos puede dividir una tarea entre preparación y análisis difícil. Un modelo de menor coste organiza los requisitos, elimina repeticiones e identifica información faltante. Después, un modelo más capaz recibe esas instrucciones junto con la evidencia necesaria para el paso difícil. La analogía es preparar un correo claro para un especialista: resumir solo ayuda si conserva los hechos, las restricciones y las preguntas abiertas. Omitir una unidad o descartar una excepción puede perjudicar todo el traspaso. Si la petición es corta y clara, una llamada directa puede ser más simple y barata. Compare el flujo completo con esa referencia utilizando los mismos criterios de éxito.",
      "optional": "El especialista puede ser un modelo de frontera, un modelo pequeño ajustado o software convencional. El traspaso debe distinguir hechos, supuestos y acciones propuestas, conservando acceso al material de origen cuando importen los detalles. Mida el coste total, la demora, el esfuerzo de revisión y la tasa de fallos, incluida la llamada de preparación. Una etapa adicional de modelo es una decisión de diseño que debe probarse, no una mejora automática de calidad.",
      "evidence": "Práctica",
      "reading": [
        "Una cascada de modelos puede dividir una tarea entre preparación y análisis difícil. Un modelo de menor coste organiza los requisitos, elimina repeticiones e identifica información faltante. Después, un modelo más capaz recibe esas instrucciones junto con la evidencia necesaria para el paso difícil. La analogía es preparar un correo claro para un especialista: resumir solo ayuda si conserva los hechos, las restricciones y las preguntas abiertas. Omitir una unidad o descartar una excepción puede perjudicar todo el traspaso. Si la petición es corta y clara, una llamada directa puede ser más simple y barata. Compare el flujo completo con esa referencia utilizando los mismos criterios de éxito.",
        "El especialista puede ser un modelo de frontera, un modelo pequeño ajustado o software convencional. El traspaso debe distinguir hechos, supuestos y acciones propuestas, conservando acceso al material de origen cuando importen los detalles. Mida el coste total, la demora, el esfuerzo de revisión y la tasa de fallos, incluida la llamada de preparación. Una etapa adicional de modelo es una decisión de diseño que debe probarse, no una mejora automática de calidad."
      ],
      "discussion": [
        "¿Qué referencia permitiría establecer que la etapa adicional de modelo mejora el flujo completo?"
      ],
      "kind": "comparison"
    },
    "11": {
      "section": "Peticiones y correcciones",
      "title": "Las correcciones concretas ayudan más que la presión emocional",
      "eyebrow": "El tono aporta contexto; no es un mando de precisión",
      "lead": "El tono forma parte de la entrada, pero los estudios sobre cortesía no proporcionan un ajuste universal de exactitud. Aporte el contraejemplo y evalúe el resultado corregido.",
      "points": [
        "Estar de acuerdo con una corrección no demuestra que sea correcta."
      ],
      "notes": "Es natural dar las gracias a un asistente útil o frustrarse ante errores repetidos. El tono forma parte del texto que recibe el modelo y puede afectar a su respuesta. Los estudios de cortesía encontraron diferencias según la tarea y el idioma, en lugar de una receta universal para obtener mejores respuestas. No hay una regla fiable según la cual la efusividad o el enfado hagan más preciso al modelo. Una corrección concreta aporta más información útil: identifique el supuesto erróneo, muestre un contraejemplo e indique el cambio deseado. Distinga también la incertidumbre relevante de las advertencias rituales. «¿Qué dato de entrada cambiaría más esta estimación?» suele ayudar más que pedir al modelo que parezca seguro. Estar de acuerdo con usted no equivale a tener razón.",
      "optional": "Un formato útil de corrección es: observación, evidencia, cambio solicitado y elementos que deben conservarse. Si el asistente ha entendido mal el objetivo varias veces, vuelva a indicar el encargo actual y retire instrucciones obsoletas. No suponga que el aparente aprendizaje de una conversación persiste en otra sesión o versión del modelo.",
      "evidence": "Práctica",
      "reading": [
        "Es natural dar las gracias a un asistente útil o frustrarse ante errores repetidos. El tono forma parte del texto que recibe el modelo y puede afectar a su respuesta. Los estudios de cortesía encontraron diferencias según la tarea y el idioma, en lugar de una receta universal para obtener mejores respuestas. No hay una regla fiable según la cual la efusividad o el enfado hagan más preciso al modelo. Una corrección concreta aporta más información útil: identifique el supuesto erróneo, muestre un contraejemplo e indique el cambio deseado. Distinga también la incertidumbre relevante de las advertencias rituales. «¿Qué dato de entrada cambiaría más esta estimación?» suele ayudar más que pedir al modelo que parezca seguro. Estar de acuerdo con usted no equivale a tener razón.",
        "Un formato útil de corrección es: observación, evidencia, cambio solicitado y elementos que deben conservarse. Si el asistente ha entendido mal el objetivo varias veces, vuelva a indicar el encargo actual y retire instrucciones obsoletas. No suponga que el aparente aprendizaje de una conversación persiste en otra sesión o versión del modelo."
      ],
      "discussion": [
        "¿Cómo se distinguiría el acuerdo con una corrección de la evidencia de que es válida?"
      ],
      "kind": "prose"
    },
    "12": {
      "section": "Peticiones y correcciones",
      "title": "Gestione el contexto de trabajo",
      "eyebrow": "La información relevante tiene un presupuesto",
      "lead": "Seleccione el contexto de trabajo según las necesidades de la tarea, en vez de cargar todos los registros disponibles.",
      "points": [
        "Distinga los requisitos actuales de las decisiones sustituidas.",
        "Recupere pasajes relevantes de las fuentes cuando hagan falta.",
        "Conserve las unidades y las excepciones al resumir.",
        "Mantenga los enlaces a las fuentes para poder comprobar una afirmación condensada."
      ],
      "notes": "El contexto de trabajo de un modelo puede incluir instrucciones, mensajes, descripciones de herramientas, archivos recuperados y resultados anteriores. Más contexto puede ayudar cuando contiene evidencia necesaria, pero acumular material obsoleto o repetido puede dificultar la tarea. Mantenga unas instrucciones actuales claras, distinga las decisiones antiguas de las vigentes y conserve enlaces a las fuentes autorizadas. La recuperación permite incorporar pasajes relevantes cuando hacen falta, sin cargar todos los documentos. Los resúmenes son útiles, pero pueden perder restricciones o convertir afirmaciones provisionales en hechos. En un proyecto largo, registre las decisiones en un documento que pueda examinarse y compruebe que el modelo recibió las partes relevantes. Una ventana de contexto mayor aporta capacidad, no una garantía de recuerdo perfecto.",
      "optional": "Una aplicación puede resumir o recuperar el historial en vez de enviar todos los mensajes anteriores en cada llamada. El contexto, las notas persistentes y los pesos entrenados tienen duraciones distintas. Si un requisito es crítico, inclúyalo en la tarea actual o en un documento autorizado que el agente pueda consultar.",
      "evidence": "Práctica",
      "reading": [
        "El contexto de trabajo de un modelo puede incluir instrucciones, mensajes, descripciones de herramientas, archivos recuperados y resultados anteriores. Más contexto puede ayudar cuando contiene evidencia necesaria, pero acumular material obsoleto o repetido puede dificultar la tarea. Mantenga unas instrucciones actuales claras, distinga las decisiones antiguas de las vigentes y conserve enlaces a las fuentes autorizadas. La recuperación permite incorporar pasajes relevantes cuando hacen falta, sin cargar todos los documentos. Los resúmenes son útiles, pero pueden perder restricciones o convertir afirmaciones provisionales en hechos. En un proyecto largo, registre las decisiones en un documento que pueda examinarse y compruebe que el modelo recibió las partes relevantes. Una ventana de contexto mayor aporta capacidad, no una garantía de recuerdo perfecto.",
        "Una aplicación puede resumir o recuperar el historial en vez de enviar todos los mensajes anteriores en cada llamada. El contexto, las notas persistentes y los pesos entrenados tienen duraciones distintas. Si un requisito es crítico, inclúyalo en la tarea actual o en un documento autorizado que el agente pueda consultar."
      ],
      "discussion": [
        "¿Qué restricción esencial para la tarea debería verificarse después de condensar el contexto?"
      ],
      "kind": "list"
    },
    "13": {
      "section": "Herramientas y sistemas locales",
      "title": "Cuatro formas de especializar un asistente",
      "eyebrow": "Las instrucciones, la información y los pesos son recursos diferentes",
      "lead": "Estos mecanismos actúan sobre distintas partes del sistema y pueden evaluarse por separado.",
      "points": [
        "Las peticiones cambian las instrucciones y los ejemplos inmediatos.",
        "Una habilidad reúne un procedimiento repetible y los recursos que lo apoyan.",
        "La recuperación introduce información relevante durante la tarea.",
        "El ajuste fino actualiza parámetros aprendidos o adaptadores."
      ],
      "notes": "Un modelo general puede realizar trabajo más especializado si se le proporcionan el procedimiento y la información adecuados. Una petición especifica la tarea inmediata. Una habilidad agrupa un procedimiento repetible, referencias y, en ocasiones, scripts ejecutables. La recuperación aporta información relevante de documentos o bases de datos. El ajuste fino modifica el propio modelo mediante entrenamiento. Estas opciones resuelven problemas distintos. Si falta una especificación actual del equipo, recupere esa especificación. Si el modelo sigue repetidamente un procedimiento de informes equivocado, una habilidad puede ser suficiente. Si necesita aprender un comportamiento estable a partir de muchos ejemplos, puede merecer la pena probar un ajuste. Cada elección debe evaluarse frente a una referencia en la tarea real, incluido su coste de mantenimiento.",
      "optional": "Una habilidad no garantiza conocimiento experto ni permiso de ejecución. Cargar instrucciones no actualiza los pesos neuronales. Un documento recuperado es evidencia que debe evaluarse, y un adaptador entrenado puede seguir necesitando documentos actuales y herramientas fiables.",
      "evidence": "Establecido",
      "reading": [
        "Un modelo general puede realizar trabajo más especializado si se le proporcionan el procedimiento y la información adecuados. Una petición especifica la tarea inmediata. Una habilidad agrupa un procedimiento repetible, referencias y, en ocasiones, scripts ejecutables. La recuperación aporta información relevante de documentos o bases de datos. El ajuste fino modifica el propio modelo mediante entrenamiento. Estas opciones resuelven problemas distintos. Si falta una especificación actual del equipo, recupere esa especificación. Si el modelo sigue repetidamente un procedimiento de informes equivocado, una habilidad puede ser suficiente. Si necesita aprender un comportamiento estable a partir de muchos ejemplos, puede merecer la pena probar un ajuste. Cada elección debe evaluarse frente a una referencia en la tarea real, incluido su coste de mantenimiento.",
        "Una habilidad no garantiza conocimiento experto ni permiso de ejecución. Cargar instrucciones no actualiza los pesos neuronales. Un documento recuperado es evidencia que debe evaluarse, y un adaptador entrenado puede seguir necesitando documentos actuales y herramientas fiables."
      ],
      "discussion": [
        "¿Un fallo repetido requiere mejores instrucciones, evidencia recuperada o entrenamiento?",
        "¿Qué prueba mostraría que una habilidad reutilizable mejora la elaboración de informes?"
      ],
      "kind": "list"
    },
    "14": {
      "section": "Herramientas y sistemas locales",
      "title": "La interfaz determina el alcance",
      "eyebrow": "El mismo modelo puede tener entornos de trabajo distintos",
      "lead": "El nombre de la interfaz no establece sus capacidades ni sus permisos.",
      "points": [
        "Un chat web puede disponer de búsqueda, ejecución de código y aplicaciones conectadas.",
        "Un agente de línea de comandos puede estar restringido a un único espacio de trabajo pese a su interfaz de terminal."
      ],
      "notes": "Explique que la aplicación y el sistema operativo hacen cumplir los límites de acceso. Una máquina virtual o dedicada proporciona un entorno de ejecución; por sí sola no define la autoridad para una tarea ni demuestra que el resultado sea correcto.",
      "optional": "Entre los límites útiles están los directorios seleccionados, el acceso de solo lectura a datos, un entorno desechable e interfaces explícitas de control. Los permisos proceden de la aplicación y del sistema operativo. Una instrucción en lenguaje natural no constituye por sí sola un control de acceso.",
      "evidence": "Práctica",
      "reading": [
        "No deduzca la capacidad por el aspecto de la interfaz. Un chat web puede ejecutar código y utilizar conectores, mientras que un asistente de terminal puede estar limitado a una carpeta. El modelo propone acciones mediante las herramientas expuestas por la aplicación. Un espacio de trabajo da acceso a archivos de origen y comprobaciones ejecutables; una máquina virtual puede aislar un entorno de desarrollo; un equipo dedicado puede aportar sensores e interfaces de dispositivos. Más acceso cambia tanto las tareas útiles como las posibles consecuencias. Especifique qué recursos son relevantes y cómo se verificará el éxito. Examine qué cambió realmente, en lugar de tratar un mensaje de finalización seguro de sí mismo como un comprobante de ejecución.",
        "Entre los límites útiles están los directorios seleccionados, el acceso de solo lectura a datos, un entorno desechable e interfaces explícitas de control. Los permisos proceden de la aplicación y del sistema operativo. Una instrucción en lenguaje natural no constituye por sí sola un control de acceso."
      ],
      "discussion": [
        "¿Qué permiso o capacidad de herramienta importa más que usar un navegador o un terminal?"
      ],
      "kind": "comparison"
    },
    "15": {
      "section": "Herramientas y sistemas locales",
      "title": "Tarea, modelo y herramienta",
      "eyebrow": "La IA es un campo amplio; la arquitectura es otra dimensión",
      "lead": "Distinga la arquitectura, el método generativo y la coordinación de tareas. DiT utiliza un Transformer para eliminar ruido en la difusión; un agente puede llamar a ese modelo o a código numérico convencional como herramienta.",
      "points": [],
      "notes": "Estos términos describen distintas capas de un sistema. La IA es el campo amplio. El aprendizaje automático es una familia de métodos que aprenden de los datos. Un Transformer es una arquitectura. La difusión es una familia de métodos generativos que suele entrenarse para estimar ruido u otra magnitud relacionada a partir de ejemplos ruidosos. Durante la generación, eliminar ruido repetidamente produce una muestra. El artículo DiT demuestra que un modelo de difusión puede usar un Transformer como red de eliminación de ruido, por lo que no son categorías excluyentes. Por encima de esos modelos, una aplicación de agente puede coordinar código, búsqueda, API o generadores de imágenes. La generación de imágenes es un ejemplo breve; el tema central es encargar tareas y revisar el sistema que utiliza esas herramientas.",
      "optional": "ReAct es un ejemplo influyente de alternar razonamiento del modelo con acciones externas, no una especificación implementada por todos los agentes. Una herramienta puede ejecutar código convencional, llamar a otro modelo o acceder a una aplicación. La difusión sirve aquí como comparación arquitectónica breve; el tema principal es especificar tareas y revisar los sistemas que coordinan herramientas.",
      "evidence": "Establecido",
      "reading": [
        "Estos términos describen distintas capas de un sistema. La IA es el campo amplio. El aprendizaje automático es una familia de métodos que aprenden de los datos. Un Transformer es una arquitectura. La difusión es una familia de métodos generativos que suele entrenarse para estimar ruido u otra magnitud relacionada a partir de ejemplos ruidosos. Durante la generación, eliminar ruido repetidamente produce una muestra. El artículo DiT demuestra que un modelo de difusión puede usar un Transformer como red de eliminación de ruido, por lo que no son categorías excluyentes. Por encima de esos modelos, una aplicación de agente puede coordinar código, búsqueda, API o generadores de imágenes. La generación de imágenes es un ejemplo breve; el tema central es encargar tareas y revisar el sistema que utiliza esas herramientas.",
        "ReAct es un ejemplo influyente de alternar razonamiento del modelo con acciones externas, no una especificación implementada por todos los agentes. Una herramienta puede ejecutar código convencional, llamar a otro modelo o acceder a una aplicación. La difusión sirve aquí como comparación arquitectónica breve; el tema principal es especificar tareas y revisar los sistemas que coordinan herramientas."
      ],
      "discussion": [
        "¿Por qué «difusión frente a Transformer» no es una comparación clara de arquitecturas?"
      ],
      "kind": "prose"
    },
    "16": {
      "section": "Herramientas y sistemas locales",
      "title": "Un agente necesita comprobar los resultados",
      "eyebrow": "Observar → decidir → actuar → examinar",
      "lead": "Cierre el ciclo comprobando la poscondición de la tarea. Una herramienta que termina sin errores no basta si el producto resultante sigue incumpliendo el requisito.",
      "points": [
        "Un flujo fijo puede ser más fácil de evaluar cuando ya se conocen los pasos necesarios."
      ],
      "notes": "Un agente es más que un modelo que genera un plan plausible. La aplicación le permite leer el estado, elegir una acción, invocar una herramienta y examinar el resultado. Supongamos que se le pide reparar un script. Necesita el código real, una modificación limitada, un resultado de ejecución y una comprobación de que ahora se cumple el requisito original. Que una herramienta devuelva éxito puede significar solamente que se envió un comando. El documento o el estado del dispositivo deseados podrían seguir siendo incorrectos. Por ello, el ciclo necesita una condición observable de éxito. En trabajo repetitivo, un flujo fijo sencillo puede ser más fácil de entender y evaluar que una autonomía abierta. Añada flexibilidad donde la tarea realmente la requiera.",
      "optional": "Evalúe tanto el resultado final como el camino seguido para producirlo. Las pruebas también pueden ser incorrectas o estar mal especificadas. Conserve un registro suficiente para distinguir un malentendido del modelo, contexto faltante, un fallo de herramienta y una evaluación defectuosa.",
      "evidence": "Práctica",
      "reading": [
        "Un agente es más que un modelo que genera un plan plausible. La aplicación le permite leer el estado, elegir una acción, invocar una herramienta y examinar el resultado. Supongamos que se le pide reparar un script. Necesita el código real, una modificación limitada, un resultado de ejecución y una comprobación de que ahora se cumple el requisito original. Que una herramienta devuelva éxito puede significar solamente que se envió un comando. El documento o el estado del dispositivo deseados podrían seguir siendo incorrectos. Por ello, el ciclo necesita una condición observable de éxito. En trabajo repetitivo, un flujo fijo sencillo puede ser más fácil de entender y evaluar que una autonomía abierta. Añada flexibilidad donde la tarea realmente la requiera.",
        "Evalúe tanto el resultado final como el camino seguido para producirlo. Las pruebas también pueden ser incorrectas o estar mal especificadas. Conserve un registro suficiente para distinguir un malentendido del modelo, contexto faltante, un fallo de herramienta y una evaluación defectuosa."
      ],
      "discussion": [
        "¿Qué poscondición cerraría el ciclo de una reparación automática de un script?"
      ],
      "kind": "prose"
    },
    "17": {
      "section": "Herramientas y sistemas locales",
      "title": "Una Raspberry Pi es un banco de trabajo accesible",
      "eyebrow": "Cámara + USB + software",
      "lead": "Distinga los fallos de adquisición de los errores de interpretación antes de comparar el comportamiento del modelo.",
      "points": [
        "Registre condiciones de captura como exposición, enfoque e iluminación.",
        "Compruebe el transporte y el preprocesamiento con un patrón conocido.",
        "Tenga en cuenta la compatibilidad de los controladores, la alimentación y el ancho de banda USB compartido.",
        "Verifique las acciones físicas independientemente de la interpretación de la imagen."
      ],
      "notes": "Una Raspberry Pi con cámara ofrece un entorno accesible para adquisición de datos y desarrollo asistidos por IA. La cámara proporciona imágenes, mientras que el ordenador aporta software de captura, almacenamiento e interfaces con otros dispositivos. Los periféricos USB pueden añadir micrófonos, cámaras, adaptadores serie o interfaces de medición compatibles. Un asistente puede ayudar a escribir un script de captura, examinar imágenes o diagnosticar errores de software mediante herramientas disponibles. Estas actividades siguen siendo distintas: obtener una observación fiable, interpretarla y elegir cualquier acción posterior. Un patrón de prueba conocido permite separar errores de enfoque, exposición, calibración o transmisión de los errores del modelo de visión.",
      "optional": "La ampliación sigue limitada por la compatibilidad de controladores, la alimentación eléctrica y el ancho de banda compartido. Un concentrador crea puntos de conexión, no capacidad independiente ilimitada. Una demostración reproducible registra los ajustes de captura, la iluminación, la versión del software y el resultado esperado. Las acciones físicas requieren su propio ciclo de control y verificación; interpretar correctamente una imagen no demuestra una actuación correcta.",
      "evidence": "Práctica",
      "reading": [
        "Una Raspberry Pi con cámara ofrece un entorno accesible para adquisición de datos y desarrollo asistidos por IA. La cámara proporciona imágenes, mientras que el ordenador aporta software de captura, almacenamiento e interfaces con otros dispositivos. Los periféricos USB pueden añadir micrófonos, cámaras, adaptadores serie o interfaces de medición compatibles. Un asistente puede ayudar a escribir un script de captura, examinar imágenes o diagnosticar errores de software mediante herramientas disponibles. Estas actividades siguen siendo distintas: obtener una observación fiable, interpretarla y elegir cualquier acción posterior. Un patrón de prueba conocido permite separar errores de enfoque, exposición, calibración o transmisión de los errores del modelo de visión.",
        "La ampliación sigue limitada por la compatibilidad de controladores, la alimentación eléctrica y el ancho de banda compartido. Un concentrador crea puntos de conexión, no capacidad independiente ilimitada. Una demostración reproducible registra los ajustes de captura, la iluminación, la versión del software y el resultado esperado. Las acciones físicas requieren su propio ciclo de control y verificación; interpretar correctamente una imagen no demuestra una actuación correcta."
      ],
      "discussion": [
        "¿Qué fallo de adquisición podría confundirse con un fallo del modelo?"
      ],
      "kind": "list"
    },
    "18": {
      "section": "Herramientas y sistemas locales",
      "title": "Distintos lugares para distintos trabajos",
      "eyebrow": "La IA local y alojada puede coexistir",
      "lead": "Distribuya el flujo según los requisitos del modelo y los límites de los datos. El procesamiento junto al sensor y una estación local pueden coexistir con la inferencia alojada.",
      "points": [
        "La privacidad local también depende de los registros y servicios conectados.",
        "El enlace de 200 Gb/s de Spark es una especificación de red, no una medida de velocidad del modelo ni una memoria compartida automática."
      ],
      "notes": "No es necesario elegir un único lugar para toda la IA. Un modelo pequeño y cercano puede resolver una tarea limitada de visión o activación por voz. Una Pi con AI HAT+ 2 puede ejecutar modelos locales compatibles junto a los sensores. Una estación local mayor puede atender otros requisitos de memoria y flujos privados. Los modelos de frontera alojados aportan capacidad amplia sin operar usted mismo su hardware. El enlace público de Spark de 200 gigabits por segundo es una especificación de red. No especifica la velocidad del modelo, y conectar equipos no convierte automáticamente sus memorias en un conjunto local único. Importan el software distribuido y el coste de comunicación. Asigne cada tarea al entorno adecuado y decida qué entradas salen del entorno local.",
      "optional": "La documentación de AI HAT+ 2 especifica 8 GB de memoria dedicada del acelerador. NVIDIA documenta un enlace de red de 200 Gb/s para conectar DGX Sparks; no es una medida de velocidad del modelo ni un conjunto automático de memoria compartida. La privacidad local también depende de registros, conservación, llamadas remotas y configuración. El despliegue debe evaluarse como un flujo completo de datos.",
      "evidence": "Establecido",
      "reading": [
        "No es necesario elegir un único lugar para toda la IA. Un modelo pequeño y cercano puede resolver una tarea limitada de visión o activación por voz. Una Pi con AI HAT+ 2 puede ejecutar modelos locales compatibles junto a los sensores. Una estación local mayor puede atender otros requisitos de memoria y flujos privados. Los modelos de frontera alojados aportan capacidad amplia sin operar usted mismo su hardware. El enlace público de Spark de 200 gigabits por segundo es una especificación de red. No especifica la velocidad del modelo, y conectar equipos no convierte automáticamente sus memorias en un conjunto local único. Importan el software distribuido y el coste de comunicación. Asigne cada tarea al entorno adecuado y decida qué entradas salen del entorno local.",
        "La documentación de AI HAT+ 2 especifica 8 GB de memoria dedicada del acelerador. NVIDIA documenta un enlace de red de 200 Gb/s para conectar DGX Sparks; no es una medida de velocidad del modelo ni un conjunto automático de memoria compartida. La privacidad local también depende de registros, conservación, llamadas remotas y configuración. El despliegue debe evaluarse como un flujo completo de datos."
      ],
      "discussion": [
        "¿Por dónde puede salir información de un flujo que, por lo demás, es local?"
      ],
      "kind": "prose"
    },
    "19": {
      "section": "Herramientas y sistemas locales",
      "title": "Dedique razonamiento donde ayude",
      "eyebrow": "El esfuerzo es otra elección de recursos",
      "lead": "«Más razonamiento» puede describir distintos procedimientos de inferencia. Especifique qué se está comparando realmente.",
      "points": [
        "Una deliberación más larga dentro de una llamada.",
        "Varias respuestas candidatas.",
        "Un verificador que selecciona o comprueba las candidatas.",
        "Una búsqueda entre posibles pasos de solución."
      ],
      "notes": "El razonamiento no es un único mando compartido por todos los sistemas. Algunas interfaces ofrecen un ajuste de esfuerzo. La investigación también explora generar varios candidatos, seleccionarlos mediante un verificador o buscar entre soluciones parciales. Estos métodos utilizan el cómputo de forma distinta y presentan fallos distintos. Un detector de activación por voz debe tomar una decisión limitada y oportuna; revisar un diseño de ingeniería puede justificar un presupuesto de razonamiento mucho mayor. Un modelo local puede ser preferible en una tarea privada aunque un servicio alojado sea más capaz en general. Un programa convencional puede ser la mejor opción para un cálculo preciso. Compare flujos completos con sus propios ejemplos en vez de equiparar un ajuste alto con una conclusión fiable.",
      "optional": "Informe del protocolo de inferencia que produjo un resultado de evaluación. Un modelo con herramientas, un presupuesto largo y muchos intentos es un sistema evaluado distinto del mismo modelo que responde una vez. Los tokens y el tiempo transcurrido son medidas contables útiles, pero por sí solos no explican la diferencia de calidad.",
      "evidence": "Línea de investigación",
      "reading": [
        "El razonamiento no es un único mando compartido por todos los sistemas. Algunas interfaces ofrecen un ajuste de esfuerzo. La investigación también explora generar varios candidatos, seleccionarlos mediante un verificador o buscar entre soluciones parciales. Estos métodos utilizan el cómputo de forma distinta y presentan fallos distintos. Un detector de activación por voz debe tomar una decisión limitada y oportuna; revisar un diseño de ingeniería puede justificar un presupuesto de razonamiento mucho mayor. Un modelo local puede ser preferible en una tarea privada aunque un servicio alojado sea más capaz en general. Un programa convencional puede ser la mejor opción para un cálculo preciso. Compare flujos completos con sus propios ejemplos en vez de equiparar un ajuste alto con una conclusión fiable.",
        "Informe del protocolo de inferencia que produjo un resultado de evaluación. Un modelo con herramientas, un presupuesto largo y muchos intentos es un sistema evaluado distinto del mismo modelo que responde una vez. Los tokens y el tiempo transcurrido son medidas contables útiles, pero por sí solos no explican la diferencia de calidad."
      ],
      "discussion": [
        "¿Qué tarea justifica más muestreo o verificación durante la inferencia?",
        "¿Cómo se mediría el beneficio de un mayor esfuerzo de razonamiento sin depender de la longitud de la respuesta?"
      ],
      "kind": "list"
    },
    "20": {
      "section": "Herramientas y sistemas locales",
      "title": "Presupueste para obtener un resultado útil",
      "eyebrow": "Tokens, tiempo transcurrido y trabajo repetido",
      "lead": "Optimice el flujo completo según el recurso que realmente escasea.",
      "points": [
        "Con un límite de tokens: conserve el contexto relevante y derive los subproblemas difíciles bien delimitados sin volver a copiarlo todo.",
        "Con un límite de tiempo: considere antes un modelo capaz y ejecute en paralelo comprobaciones independientes cuando se justifique su coste de coordinación."
      ],
      "notes": "Las peticiones, el contexto conservado, los archivos, los resultados de herramientas y las respuestas utilizan tokens; el razonamiento interno y los ajustes de velocidad también pueden afectar a la contabilidad del proveedor. Un modelo menor puede consumir más tokens y costar menos por token, o uno más capaz puede evitar varios intentos fallidos. Mantenga unas instrucciones concisas, evidencia relevante y habilidades reutilizables; pida la salida que realmente utilizará. Si escasea el tiempo, invierta en síntesis difícil, comprobaciones independientes y trabajo paralelo que realmente pueda dividirse. Dé a cada agente un encargo limitado y pida evidencia compacta. Los agentes paralelos también duplican contexto y requieren coordinación. Mida el resultado terminado y el esfuerzo total, en vez de deducir el coste de la longitud de la primera petición.",
      "optional": "Una cascada genérica de modelos puede preparar el encargo de forma económica y enviar un paso difícil concreto a un modelo más capaz. Su valor debe incluir el coste de comprobar el traspaso. Los nombres, las escalas de esfuerzo, las tarifas de créditos y las políticas de caché varían según proveedor y versión; utilice registros de uso reales al comparar alternativas. Un ciclo redundante de herramientas puede dominar el coste de un intercambio conversacional corto.",
      "evidence": "Práctica",
      "reading": [
        "Las peticiones, el contexto conservado, los archivos, los resultados de herramientas y las respuestas utilizan tokens; el razonamiento interno y los ajustes de velocidad también pueden afectar a la contabilidad del proveedor. Un modelo menor puede consumir más tokens y costar menos por token, o uno más capaz puede evitar varios intentos fallidos. Mantenga unas instrucciones concisas, evidencia relevante y habilidades reutilizables; pida la salida que realmente utilizará. Si escasea el tiempo, invierta en síntesis difícil, comprobaciones independientes y trabajo paralelo que realmente pueda dividirse. Dé a cada agente un encargo limitado y pida evidencia compacta. Los agentes paralelos también duplican contexto y requieren coordinación. Mida el resultado terminado y el esfuerzo total, en vez de deducir el coste de la longitud de la primera petición.",
        "Una cascada genérica de modelos puede preparar el encargo de forma económica y enviar un paso difícil concreto a un modelo más capaz. Su valor debe incluir el coste de comprobar el traspaso. Los nombres, las escalas de esfuerzo, las tarifas de créditos y las políticas de caché varían según proveedor y versión; utilice registros de uso reales al comparar alternativas. Un ciclo redundante de herramientas puede dominar el coste de un intercambio conversacional corto."
      ],
      "discussion": [
        "¿Qué coste domina esta tarea al incluir la revisión y los reintentos?"
      ],
      "kind": "comparison"
    },
    "21": {
      "section": "Mecanismos y recursos",
      "title": "Tres magnitudes distintas que crecen",
      "eyebrow": "Parámetros, contexto y atención",
      "lead": "Distintos elementos crecen de distinta manera. Mantenga fijos la arquitectura del modelo y el lote al comparar los efectos de la longitud del contexto.",
      "points": [
        "El almacenamiento de pesos es aproximadamente el número de parámetros × los bytes por parámetro.",
        "La caché KV crece de forma aproximadamente lineal con la longitud del contexto.",
        "La atención densa al procesar la entrada incluye trabajo cuadrático entre pares de tokens; FlashAttention mejora el uso de memoria sin eliminar ese término aritmético."
      ],
      "notes": "Una petición más larga no añade pesos aprendidos. El almacenamiento de parámetros depende principalmente de cuántos tiene el modelo y con qué precisión se representan. Durante la generación, los Transformers suelen conservar una caché de claves y valores de tokens anteriores; con arquitectura y tamaño de lote fijos, esa caché crece aproximadamente de forma lineal con el contexto. La atención densa durante el procesamiento de la entrada compara pares de tokens, creando un coste aritmético cuadrático en la longitud de la secuencia. Son magnitudes distintas. FlashAttention reduce el movimiento de datos y evita materializar toda la matriz de atención, mejorando el uso de memoria sin eliminar la aritmética cuadrática por pares de la atención densa exacta. Aumentar la anchura del modelo también puede hacer crecer cuadráticamente matrices individuales respecto a esa anchura; es otra relación diferente.",
      "optional": "Con anchura de capa d y contexto n fijos, la atención contiene un término O(n²d), mientras que las proyecciones y las capas de propagación hacia delante también consumen cómputo. La generación con caché añade un token cada vez, por lo que su coste por token difiere del procesamiento de una entrada completa. La arquitectura, la atención con consultas agrupadas, los lotes y la precisión cambian constantes y necesidades de memoria.",
      "evidence": "Establecido",
      "reading": [
        "Una petición más larga no añade pesos aprendidos. El almacenamiento de parámetros depende principalmente de cuántos tiene el modelo y con qué precisión se representan. Durante la generación, los Transformers suelen conservar una caché de claves y valores de tokens anteriores; con arquitectura y tamaño de lote fijos, esa caché crece aproximadamente de forma lineal con el contexto. La atención densa durante el procesamiento de la entrada compara pares de tokens, creando un coste aritmético cuadrático en la longitud de la secuencia. Son magnitudes distintas. FlashAttention reduce el movimiento de datos y evita materializar toda la matriz de atención, mejorando el uso de memoria sin eliminar la aritmética cuadrática por pares de la atención densa exacta. Aumentar la anchura del modelo también puede hacer crecer cuadráticamente matrices individuales respecto a esa anchura; es otra relación diferente.",
        "Con anchura de capa d y contexto n fijos, la atención contiene un término O(n²d), mientras que las proyecciones y las capas de propagación hacia delante también consumen cómputo. La generación con caché añade un token cada vez, por lo que su coste por token difiere del procesamiento de una entrada completa. La arquitectura, la atención con consultas agrupadas, los lotes y la precisión cambian constantes y necesidades de memoria."
      ],
      "discussion": [
        "¿Qué cambia al duplicar la longitud del contexto conservando fijos los parámetros del modelo?",
        "¿Qué componente de memoria tiene más probabilidad de limitar un análisis local con contexto largo?"
      ],
      "kind": "list"
    },
    "22": {
      "section": "Mecanismos y recursos",
      "title": "Cómo aprende una red",
      "eyebrow": "Predicción → pérdida → gradientes → actualización",
      "lead": "La retropropagación calcula gradientes de la pérdida elegida y un optimizador actualiza los parámetros entrenables. El objetivo define qué se recompensa; la evaluación con datos reservados comprueba si ese aprendizaje se transfiere.",
      "points": [],
      "notes": "Una red pequeña de propagación hacia delante basta para explicar el ciclo central de entrenamiento. Recibe una entrada, aplica transformaciones ponderadas y no linealidades y produce una salida. Una función de pérdida compara esa salida con un objetivo. La retropropagación calcula cómo afectan a la pérdida los cambios de parámetros, y un optimizador realiza una actualización. Se repite con muchos ejemplos. El proceso optimiza el objetivo suministrado; no certifica por sí mismo que ese objetivo capture el comportamiento deseado. Los modelos neuronales de lenguaje suelen comenzar prediciendo tokens a partir del contexto. Entrenamientos posteriores pueden modificar el seguimiento de instrucciones u otros comportamientos. Durante la inferencia habitual, los pesos aprendidos se aplican a una entrada nueva, en lugar de actualizarse mediante este ciclo.",
      "optional": "Los gradientes indican sensibilidad local, no una explicación legible del conocimiento almacenado. Un modelo puede reducir la pérdida de entrenamiento y a la vez sobreajustarse o aprender atajos. Se necesitan datos separados para evaluar si el comportamiento se transfiere a los casos relevantes.",
      "evidence": "Establecido",
      "reading": [
        "Una red pequeña de propagación hacia delante basta para explicar el ciclo central de entrenamiento. Recibe una entrada, aplica transformaciones ponderadas y no linealidades y produce una salida. Una función de pérdida compara esa salida con un objetivo. La retropropagación calcula cómo afectan a la pérdida los cambios de parámetros, y un optimizador realiza una actualización. Se repite con muchos ejemplos. El proceso optimiza el objetivo suministrado; no certifica por sí mismo que ese objetivo capture el comportamiento deseado. Los modelos neuronales de lenguaje suelen comenzar prediciendo tokens a partir del contexto. Entrenamientos posteriores pueden modificar el seguimiento de instrucciones u otros comportamientos. Durante la inferencia habitual, los pesos aprendidos se aplican a una entrada nueva, en lugar de actualizarse mediante este ciclo.",
        "Los gradientes indican sensibilidad local, no una explicación legible del conocimiento almacenado. Un modelo puede reducir la pérdida de entrenamiento y a la vez sobreajustarse o aprender atajos. Se necesitan datos separados para evaluar si el comportamiento se transfiere a los casos relevantes."
      ],
      "discussion": [
        "¿Qué caso reservado distinguiría un atajo aprendido de una generalización útil?"
      ],
      "kind": "prose"
    },
    "23": {
      "section": "Mecanismos y recursos",
      "title": "Crear un modelo y adaptar uno existente",
      "eyebrow": "Puntos de partida y presupuestos diferentes",
      "lead": "Distinga el punto de control inicial del conjunto de parámetros que se entrenan.",
      "points": [
        "El entrenamiento desde cero comienza sin representaciones preentrenadas.",
        "El ajuste fino completo actualiza todos o la mayoría de los parámetros de un modelo preentrenado.",
        "LoRA entrena actualizaciones compactas y mantiene congelada la base.",
        "QLoRA añade una base congelada cuantizada a la configuración con adaptadores."
      ],
      "notes": "Entrenar desde cero comienza sin las representaciones preentrenadas que hacen útil a un modelo fundacional. A escala fundacional exige enormes cantidades de datos y cómputo, normalmente fuera del alcance de equipos personales modestos. Eso no hace impráctico todo entrenamiento desde cero: un clasificador pequeño o un detector de palabras de activación puede ser un proyecto local razonable. El ajuste fino completo parte de un modelo existente y actualiza sus parámetros con una carga menor y dirigida. LoRA entrena un pequeño conjunto de actualizaciones añadidas y conserva congelada la base. QLoRA combina estos adaptadores con una base cuantizada. Conviene comparar la capacidad necesaria, los datos disponibles y el estado completo del entrenamiento. Ejecutar pesos preentrenados es una tarea mucho menor que recrear su entrenamiento original.",
      "optional": "El preentrenamiento continuado suele prolongar un objetivo general de predicción con datos adicionales de un dominio; el ajuste supervisado utiliza demostraciones de tareas. «Ajuste completo» describe qué parámetros cambian, no si el modelo comenzó desde cero. Entrenar adaptadores sigue requiriendo cómputo hacia delante y retropropagación a través de las capas relevantes.",
      "evidence": "Establecido",
      "reading": [
        "Entrenar desde cero comienza sin las representaciones preentrenadas que hacen útil a un modelo fundacional. A escala fundacional exige enormes cantidades de datos y cómputo, normalmente fuera del alcance de equipos personales modestos. Eso no hace impráctico todo entrenamiento desde cero: un clasificador pequeño o un detector de palabras de activación puede ser un proyecto local razonable. El ajuste fino completo parte de un modelo existente y actualiza sus parámetros con una carga menor y dirigida. LoRA entrena un pequeño conjunto de actualizaciones añadidas y conserva congelada la base. QLoRA combina estos adaptadores con una base cuantizada. Conviene comparar la capacidad necesaria, los datos disponibles y el estado completo del entrenamiento. Ejecutar pesos preentrenados es una tarea mucho menor que recrear su entrenamiento original.",
        "El preentrenamiento continuado suele prolongar un objetivo general de predicción con datos adicionales de un dominio; el ajuste supervisado utiliza demostraciones de tareas. «Ajuste completo» describe qué parámetros cambian, no si el modelo comenzó desde cero. Entrenar adaptadores sigue requiriendo cómputo hacia delante y retropropagación a través de las capas relevantes."
      ],
      "discussion": [
        "¿Cuándo es preferible entrenar un detector pequeño desde cero a adaptar un modelo general?",
        "¿Qué representación existente hace atractiva la adaptación de un modelo preentrenado?"
      ],
      "kind": "list"
    },
    "24": {
      "section": "Mecanismos y recursos",
      "title": "En qué se consume el presupuesto de entrenamiento",
      "eyebrow": "Estimaciones transparentes, no promesas de hardware",
      "lead": "Las estimaciones de cálculo y las de memoria responden a preguntas distintas.",
      "points": [
        "Trabajo de entrenamiento denso: C ≈ 6ND, con N parámetros y D tokens presentados; 7B × 1T da aproximadamente 4.2 × 10²² FLOPs.",
        "Almacenamiento solo de pesos: 7B parámetros ocupan unos 14 GB decimales a 16 bits o 3.5 GB a 4 bits. El estado de entrenamiento y las asignaciones durante la ejecución son adicionales."
      ],
      "notes": "La estimación C igual a aproximadamente seis veces los parámetros por los tokens de entrenamiento presentados es una primera aproximación útil para entrenar Transformers densos. Para siete mil millones de parámetros y un billón de tokens, da aproximadamente 4.2 por diez elevado a veintidós operaciones de coma flotante. Es una estimación de trabajo, no una predicción de duración. Contextos más largos y detalles de implementación pueden modificar la contabilidad. La memoria tiene un presupuesto separado. Siete mil millones de pesos brutos ocupan unos catorce gigabytes decimales a dieciséis bits, o tres y medio a cuatro bits. Ninguna cifra es el requisito completo del dispositivo. El entrenamiento necesita activaciones, gradientes y estado del optimizador; la inferencia necesita búferes de trabajo y normalmente una caché. Por ello, un modelo preentrenado puede caber para inferencia aunque no quepa para entrenamiento completo.",
      "optional": "Como comparación, 7 mil millones de parámetros expuestos a 10 millones de tokens de ajuste dan unos 4.2 × 10¹⁷ FLOPs con la misma aproximación densa, antes de costes omitidos. El cómputo de LoRA no puede estimarse sustituyendo N por sus parámetros entrenables de adaptador. La disposición del optimizador con precisión mixta, el guardado de activaciones y la distribución del estado modifican el presupuesto de memoria. Una estimación de FLOPs no determina la duración en una máquina concreta.",
      "evidence": "Establecido",
      "reading": [
        "La estimación C igual a aproximadamente seis veces los parámetros por los tokens de entrenamiento presentados es una primera aproximación útil para entrenar Transformers densos. Para siete mil millones de parámetros y un billón de tokens, da aproximadamente 4.2 por diez elevado a veintidós operaciones de coma flotante. Es una estimación de trabajo, no una predicción de duración. Contextos más largos y detalles de implementación pueden modificar la contabilidad. La memoria tiene un presupuesto separado. Siete mil millones de pesos brutos ocupan unos catorce gigabytes decimales a dieciséis bits, o tres y medio a cuatro bits. Ninguna cifra es el requisito completo del dispositivo. El entrenamiento necesita activaciones, gradientes y estado del optimizador; la inferencia necesita búferes de trabajo y normalmente una caché. Por ello, un modelo preentrenado puede caber para inferencia aunque no quepa para entrenamiento completo.",
        "Como comparación, 7 mil millones de parámetros expuestos a 10 millones de tokens de ajuste dan unos 4.2 × 10¹⁷ FLOPs con la misma aproximación densa, antes de costes omitidos. El cómputo de LoRA no puede estimarse sustituyendo N por sus parámetros entrenables de adaptador. La disposición del optimizador con precisión mixta, el guardado de activaciones y la distribución del estado modifican el presupuesto de memoria. Una estimación de FLOPs no determina la duración en una máquina concreta."
      ],
      "discussion": [
        "¿Qué asignación omitida podría hacer engañosa una estimación de memoria basada solo en los pesos?"
      ],
      "kind": "comparison"
    },
    "25": {
      "section": "Mecanismos y recursos",
      "title": "LoRA entrena un cambio compacto",
      "eyebrow": "Adaptación de bajo rango",
      "lead": "Factorice la actualización como ΔW = BA y congele W. Esto reduce el estado entrenable, mientras la base sigue participando en el cálculo hacia delante y en la propagación de gradientes a los adaptadores.",
      "points": [
        "Evalúe el rango y las capas elegidas sobre la tarea; un adaptador activo puede modificar comportamientos anteriormente útiles."
      ],
      "notes": "LoRA significa adaptación de bajo rango. En lugar de modificar cada entrada de una matriz de pesos grande, el método congela esa matriz y aprende una actualización representada por otras dos menores. Su producto BA constituye la actualización. Esto reduce mucho el número de parámetros entrenables y el estado del optimizador asociado. También produce un adaptador compacto que puede almacenarse separado de la base. El resto del modelo sigue participando en el cálculo: deben producirse activaciones y propagarse gradientes hacia el adaptador. Por tanto, reducir un noventa y nueve por ciento los parámetros entrenables no reduce un noventa y nueve por ciento el tiempo de entrenamiento. El rango y las capas adaptadas son decisiones que deben evaluarse en la tarea.",
      "optional": "La actualización W′ = W + BA a veces puede integrarse en los pesos para su ejecución, según la implementación y la precisión. Un adaptador depende de su modelo base y configuración. Aumentar el rango no es beneficioso automáticamente, y conservar la base congelada no garantiza que el comportamiento global evite el olvido.",
      "evidence": "Establecido",
      "reading": [
        "LoRA significa adaptación de bajo rango. En lugar de modificar cada entrada de una matriz de pesos grande, el método congela esa matriz y aprende una actualización representada por otras dos menores. Su producto BA constituye la actualización. Esto reduce mucho el número de parámetros entrenables y el estado del optimizador asociado. También produce un adaptador compacto que puede almacenarse separado de la base. El resto del modelo sigue participando en el cálculo: deben producirse activaciones y propagarse gradientes hacia el adaptador. Por tanto, reducir un noventa y nueve por ciento los parámetros entrenables no reduce un noventa y nueve por ciento el tiempo de entrenamiento. El rango y las capas adaptadas son decisiones que deben evaluarse en la tarea.",
        "La actualización W′ = W + BA a veces puede integrarse en los pesos para su ejecución, según la implementación y la precisión. Un adaptador depende de su modelo base y configuración. Aumentar el rango no es beneficioso automáticamente, y conservar la base congelada no garantiza que el comportamiento global evite el olvido."
      ],
      "discussion": [
        "¿Qué experimento distinguiría un rango insuficiente del adaptador de una cobertura deficiente de los datos de entrenamiento?"
      ],
      "kind": "prose"
    },
    "26": {
      "section": "Mecanismos y recursos",
      "title": "QLoRA reduce el almacenamiento de la base",
      "eyebrow": "Base cuantizada + adaptadores entrenables",
      "lead": "QLoRA combina una base cuantizada congelada con adaptadores entrenables de rango bajo. Los metadatos y las asignaciones temporales siguen formando parte del presupuesto de memoria.",
      "points": [
        "El resultado publicado de 65B en 48GB se aplica a su configuración; la longitud del contexto y la configuración del lote siguen importando."
      ],
      "notes": "QLoRA combina dos ideas. LoRA limita los parámetros entrenables, y la cuantización reduce el almacenamiento de la gran base congelada. El método original utilizó NormalFloat de cuatro bits, doble cuantización y optimizadores paginados para adaptar modelos grandes con mucha menos memoria. El cálculo sigue utilizando una precisión mayor adecuada, y el sistema necesita activaciones, metadatos y estado de los adaptadores. El resultado publicado de ajustar un modelo de sesenta y cinco mil millones de parámetros en una GPU de cuarenta y ocho gigabytes es un experimento con condiciones concretas. No significa que cualquier modelo de ese tamaño, longitud de contexto o lote quepa. Compare con una referencia adecuada sin cuantizar o de mayor precisión cuando importe la calidad, y mida la receta completa.",
      "optional": "El almacenamiento bruto a cuatro bits es solo una parte mínima de la memoria. La ubicación de adaptadores, la longitud de secuencia, el tamaño de lote, el guardado de activaciones y la implementación de cuantización pueden dominar el ajuste práctico a la memoria disponible. QLoRA puede ahorrar memoria sin mejorar el tiempo real de ejecución. Es una forma de adaptar pesos preentrenados, no un atajo para recrear su preentrenamiento original.",
      "evidence": "Establecido",
      "reading": [
        "QLoRA combina dos ideas. LoRA limita los parámetros entrenables, y la cuantización reduce el almacenamiento de la gran base congelada. El método original utilizó NormalFloat de cuatro bits, doble cuantización y optimizadores paginados para adaptar modelos grandes con mucha menos memoria. El cálculo sigue utilizando una precisión mayor adecuada, y el sistema necesita activaciones, metadatos y estado de los adaptadores. El resultado publicado de ajustar un modelo de sesenta y cinco mil millones de parámetros en una GPU de cuarenta y ocho gigabytes es un experimento con condiciones concretas. No significa que cualquier modelo de ese tamaño, longitud de contexto o lote quepa. Compare con una referencia adecuada sin cuantizar o de mayor precisión cuando importe la calidad, y mida la receta completa.",
        "El almacenamiento bruto a cuatro bits es solo una parte mínima de la memoria. La ubicación de adaptadores, la longitud de secuencia, el tamaño de lote, el guardado de activaciones y la implementación de cuantización pueden dominar el ajuste práctico a la memoria disponible. QLoRA puede ahorrar memoria sin mejorar el tiempo real de ejecución. Es una forma de adaptar pesos preentrenados, no un atajo para recrear su preentrenamiento original."
      ],
      "discussion": [
        "¿Qué cambios de configuración podrían invalidar el ejemplo publicado de ajuste en memoria para una tarea nueva?"
      ],
      "kind": "prose"
    },
    "27": {
      "section": "Mecanismos y recursos",
      "title": "La calidad de los datos define la tarea útil",
      "eyebrow": "Más filas no garantizan más información",
      "lead": "La calidad de los datos incluye la cobertura y la independencia de la evaluación, además de la corrección de las etiquetas.",
      "points": [
        "Revise las etiquetas ambiguas y las operaciones válidas poco frecuentes.",
        "Incluya negativos realistas y una proporción de clases pertinente.",
        "Mantenga las sesiones relacionadas o las familias de casi duplicados dentro de una misma partición.",
        "Trate los casos de prueba elaborados como evidencia de desarrollo y no como observaciones independientes del uso."
      ],
      "notes": "Es fácil generar una tabla enorme de ejemplos que enseñe repetidamente el mismo patrón limitado. Un conjunto útil necesita etiquetas correctas y cobertura de situaciones relevantes. En un detector de palabra de activación, los ejemplos positivos son insuficientes; también hacen falta conversaciones normales, sonidos similares, reproducción de audio y ruido que no deben activarlo. Mantenga los ejemplos estrechamente relacionados o una sesión de grabación dentro de una única partición, para que la evaluación no sea prácticamente una repetición del entrenamiento. El principio también se aplica al ajuste de un modelo de lenguaje para comandos estructurados. Los ejemplos redactados son casos controlados útiles, pero no observaciones independientes del uso real. La calidad incluye procedencia, relevancia y una prueba creíble de generalización.",
      "optional": "Un modelo pequeño entrenado desde cero puede ser adecuado para detectar una señal concreta. Un modelo preentrenado mayor puede fallar si las etiquetas se contradicen o faltan operaciones poco frecuentes. Las transcripciones acústicas, las órdenes pretendidas y los resultados reales de ejecución son tipos distintos de evidencia y no deben tratarse como etiquetas intercambiables.",
      "evidence": "Práctica",
      "reading": [
        "Es fácil generar una tabla enorme de ejemplos que enseñe repetidamente el mismo patrón limitado. Un conjunto útil necesita etiquetas correctas y cobertura de situaciones relevantes. En un detector de palabra de activación, los ejemplos positivos son insuficientes; también hacen falta conversaciones normales, sonidos similares, reproducción de audio y ruido que no deben activarlo. Mantenga los ejemplos estrechamente relacionados o una sesión de grabación dentro de una única partición, para que la evaluación no sea prácticamente una repetición del entrenamiento. El principio también se aplica al ajuste de un modelo de lenguaje para comandos estructurados. Los ejemplos redactados son casos controlados útiles, pero no observaciones independientes del uso real. La calidad incluye procedencia, relevancia y una prueba creíble de generalización.",
        "Un modelo pequeño entrenado desde cero puede ser adecuado para detectar una señal concreta. Un modelo preentrenado mayor puede fallar si las etiquetas se contradicen o faltan operaciones poco frecuentes. Las transcripciones acústicas, las órdenes pretendidas y los resultados reales de ejecución son tipos distintos de evidencia y no deben tratarse como etiquetas intercambiables."
      ],
      "discussion": [
        "¿Qué ejemplos negativos realistas faltan en un conjunto de palabras de activación propuesto?",
        "¿Cómo deberían dividirse las grabaciones para evitar filtraciones de ejemplos casi idénticos?"
      ],
      "kind": "list"
    },
    "28": {
      "section": "Experimentos y evaluación",
      "title": "Evalúe como en un experimento",
      "eyebrow": "Defina el éxito antes de ver el resultado",
      "lead": "Diseñe la comparación antes de seleccionar el resultado.",
      "points": [
        "Defina la referencia y la afirmación que debe poner a prueba la intervención.",
        "Mantenga fijos los factores relevantes y registre las diferencias inevitables.",
        "Mida el éxito útil junto con los fallos importantes y la retención.",
        "Utilice datos de desarrollo para iterar; conserve intacta la evaluación final y replique los hallazgos prometedores."
      ],
      "notes": "Los hábitos experimentales de física e ingeniería se trasladan bien a este ámbito. Plantee la pregunta, especifique la intervención y decida qué resultado contará como mejora. Una puntuación global mayor puede ocultar una regresión en una operación rara pero importante. Un modelo que rechaza todo puede no producir ninguna acción peligrosa y ser inútil para su tarea. Informe tanto de acciones no deseadas como de acciones válidas omitidas, además de las comprobaciones relevantes de formato, contexto y retención. Utilice los casos de desarrollo para diagnosticar y revisar. Un conjunto de evaluación intacto responde a otra pregunta: si el método elegido generaliza más allá de esas decisiones adaptativas. Una semilla en un conjunto pequeño examinado repetidamente aporta evidencia exploratoria, aunque la comparación esté bien controlada.",
      "optional": "Una evaluación compara un modelo junto con sus peticiones, herramientas, presupuestos y reglas de puntuación. Las comprobaciones mediante código, los jueces basados en modelos y la revisión humana tienen fortalezas y fallos diferentes. Mantenga visible la rúbrica y distinga los resultados reales de la tarea de la descripción que hace el asistente de su propio éxito.",
      "evidence": "Práctica",
      "reading": [
        "Los hábitos experimentales de física e ingeniería se trasladan bien a este ámbito. Plantee la pregunta, especifique la intervención y decida qué resultado contará como mejora. Una puntuación global mayor puede ocultar una regresión en una operación rara pero importante. Un modelo que rechaza todo puede no producir ninguna acción peligrosa y ser inútil para su tarea. Informe tanto de acciones no deseadas como de acciones válidas omitidas, además de las comprobaciones relevantes de formato, contexto y retención. Utilice los casos de desarrollo para diagnosticar y revisar. Un conjunto de evaluación intacto responde a otra pregunta: si el método elegido generaliza más allá de esas decisiones adaptativas. Una semilla en un conjunto pequeño examinado repetidamente aporta evidencia exploratoria, aunque la comparación esté bien controlada.",
        "Una evaluación compara un modelo junto con sus peticiones, herramientas, presupuestos y reglas de puntuación. Las comprobaciones mediante código, los jueces basados en modelos y la revisión humana tienen fortalezas y fallos diferentes. Mantenga visible la rúbrica y distinga los resultados reales de la tarea de la descripción que hace el asistente de su propio éxito."
      ],
      "discussion": [
        "¿Qué fallos podría ocultar una puntuación global de exactitud?",
        "¿Qué debe permanecer sin utilizar mientras los datos de desarrollo guían la iteración?"
      ],
      "kind": "steps"
    },
    "29": {
      "section": "Experimentos y evaluación",
      "title": "Ejemplo publicado: conservar tareas anteriores",
      "eyebrow": "Elastic Weight Consolidation · Kirkpatrick y colaboradores, 2016–2017",
      "lead": "La Consolidación Elástica de Pesos desincentiva los cambios en parámetros que se estiman importantes para tareas anteriores. Los resultados publicados de MNIST permutado secuencial evalúan el aprendizaje nuevo junto con la retención.",
      "points": [
        "El resultado aporta evidencia sobre la secuencia de tareas y la configuración probadas, no una garantía general contra el olvido."
      ],
      "notes": "Elastic Weight Consolidation, o EWC, añade una penalización que desalienta modificar parámetros estimados como importantes para tareas previas. El estudio publicado probó aprendizaje secuencial con tareas de clasificación derivadas de MNIST y también examinó videojuegos Atari. La comparación de MNIST permutado muestra la contrapartida central: un modelo debe aprender una nueva correspondencia de entrada conservando el rendimiento en las anteriores. Las curvas publicadas muestran que EWC puede reducir el olvido en ese entorno experimental. El resultado corresponde a un método y una secuencia de tareas definidos; no demuestra que cualquier modelo pueda adquirir habilidades nuevas ilimitadas sin interferencias.",
      "optional": "Una réplica útil compara la misma arquitectura inicial, orden de tareas y presupuesto de entrenamiento y evalúa todas las tareas anteriores después de cada una nueva. Incluya entrenamiento secuencial ordinario y una referencia de regularización simple. Informe tanto del aprendizaje de la nueva tarea como de la retención de las antiguas. La intensidad de penalización cambia ese equilibrio; elegirla en la prueba final debilitaría la evaluación.",
      "evidence": "Experimento histórico",
      "reading": [
        "Elastic Weight Consolidation, o EWC, añade una penalización que desalienta modificar parámetros estimados como importantes para tareas previas. El estudio publicado probó aprendizaje secuencial con tareas de clasificación derivadas de MNIST y también examinó videojuegos Atari. La comparación de MNIST permutado muestra la contrapartida central: un modelo debe aprender una nueva correspondencia de entrada conservando el rendimiento en las anteriores. Las curvas publicadas muestran que EWC puede reducir el olvido en ese entorno experimental. El resultado corresponde a un método y una secuencia de tareas definidos; no demuestra que cualquier modelo pueda adquirir habilidades nuevas ilimitadas sin interferencias.",
        "Una réplica útil compara la misma arquitectura inicial, orden de tareas y presupuesto de entrenamiento y evalúa todas las tareas anteriores después de cada una nueva. Incluya entrenamiento secuencial ordinario y una referencia de regularización simple. Informe tanto del aprendizaje de la nueva tarea como de la retención de las antiguas. La intensidad de penalización cambia ese equilibrio; elegirla en la prueba final debilitaría la evaluación."
      ],
      "discussion": [
        "¿Qué deberían mostrar las curvas de las tareas anteriores y nuevas antes de aceptar una mejora de retención?"
      ],
      "kind": "prose"
    },
    "30": {
      "section": "Experimentos y evaluación",
      "title": "Ejemplo publicado: datos de instrucciones seleccionados",
      "eyebrow": "LIMA · Zhou y colaboradores, 2023",
      "lead": "LIMA adaptó un modelo preentrenado de 65B con 1,000 ejemplos seleccionados de petición y respuesta. Su resultado se refiere a un comportamiento construido sobre esa base preentrenada, no a conocimiento amplio aprendido con solo 1,000 ejemplos.",
      "points": [
        "Evalúe la cobertura y la corrección numérica más allá de los juicios de preferencia entre respuestas."
      ],
      "notes": "LIMA estudió la adaptación supervisada de un modelo de lenguaje preentrenado de sesenta y cinco mil millones de parámetros mediante 1,000 ejemplos de peticiones y respuestas cuidadosamente seleccionados. Sus experimentos publicados informaron de un buen seguimiento de instrucciones bajo su procedimiento de evaluación, sin una etapa de aprendizaje por refuerzo. El ejemplo distingue adquirir representaciones amplias durante el preentrenamiento de modificar cómo se utilizan mediante adaptación. No demuestra que pueda aprenderse conocimiento arbitrario con muy pocos datos ni que mil ejemplos basten para cualquier aplicación. El modelo inicial, la selección de ejemplos, el estilo de respuesta y las tareas evaluadas contribuyen al resultado.",
      "optional": "En una adaptación de ingeniería, prepare una tabla de cobertura antes de seleccionar ejemplos: peticiones comunes, entradas ambiguas, operaciones raras y abstenciones válidas. Conserve pruebas independientes para cada categoría. Compare datos seleccionados y de referencia con igual exposición al investigar la calidad, porque cambiar el tamaño del conjunto también cambia las actualizaciones en una receta de épocas fijas. Un juicio favorable de preferencia aporta evidencia útil, pero no sustituye comprobar la corrección numérica o el funcionamiento operativo.",
      "evidence": "Experimento histórico",
      "reading": [
        "LIMA estudió la adaptación supervisada de un modelo de lenguaje preentrenado de sesenta y cinco mil millones de parámetros mediante 1,000 ejemplos de peticiones y respuestas cuidadosamente seleccionados. Sus experimentos publicados informaron de un buen seguimiento de instrucciones bajo su procedimiento de evaluación, sin una etapa de aprendizaje por refuerzo. El ejemplo distingue adquirir representaciones amplias durante el preentrenamiento de modificar cómo se utilizan mediante adaptación. No demuestra que pueda aprenderse conocimiento arbitrario con muy pocos datos ni que mil ejemplos basten para cualquier aplicación. El modelo inicial, la selección de ejemplos, el estilo de respuesta y las tareas evaluadas contribuyen al resultado.",
        "En una adaptación de ingeniería, prepare una tabla de cobertura antes de seleccionar ejemplos: peticiones comunes, entradas ambiguas, operaciones raras y abstenciones válidas. Conserve pruebas independientes para cada categoría. Compare datos seleccionados y de referencia con igual exposición al investigar la calidad, porque cambiar el tamaño del conjunto también cambia las actualizaciones en una receta de épocas fijas. Un juicio favorable de preferencia aporta evidencia útil, pero no sustituye comprobar la corrección numérica o el funcionamiento operativo."
      ],
      "discussion": [
        "¿Qué evaluación distinguiría un buen estilo de respuesta de un comportamiento científico correcto?"
      ],
      "kind": "prose"
    },
    "31": {
      "section": "Experimentos y evaluación",
      "title": "Ejemplo publicado: qué demuestra una comparación de QLoRA",
      "eyebrow": "Alcance de adaptación y evaluación · Dettmers y colaboradores, 2023",
      "lead": "La cuantización y las restricciones de los adaptadores son intervenciones distintas. Identifique la referencia antes de interpretar un resultado de QLoRA.",
      "points": [
        "QLoRA de 4 bits frente a LoRA de 16 bits compara configuraciones con adaptadores y distinta precisión de la base.",
        "El ajuste con adaptadores frente al ajuste fino completo también cambia qué parámetros pueden aprender."
      ],
      "notes": "El artículo QLoRA compara métodos de adaptación en varias familias de modelos, tamaños y conjuntos de instrucciones. Sus experimentos con grandes modelos incluyen comparaciones de LoRA cuantizado con LoRA de mayor precisión; no deben describirse todos como comparaciones con ajuste fino completo. La distinción importa porque congelar y cuantizar la base son intervenciones separadas. Un resultado satisfactorio demuestra que una receta concreta de menor memoria conserva el comportamiento medido frente a su referencia declarada. No demuestra un rendimiento equivalente en toda tarea científica, longitud de contexto o distribución de datos. El artículo también examina las limitaciones de evaluar chatbots, reforzando la necesidad de comprobar qué mide una puntuación.",
      "optional": "Una comparación de ingeniería debe registrar el punto de control base, las capas elegidas, el rango del adaptador, la precisión, la exposición de entrenamiento y el procedimiento de inferencia. Compare memoria y calidad de tarea de forma independiente y conserve pruebas de comportamientos antes útiles. Indique si el experimento mide cuantización, capacidad del adaptador o varios factores modificados a la vez. En cálculos, las comprobaciones numéricas independientes y los resultados ejecutables aportan evidencia más sólida que una preferencia de estilo.",
      "evidence": "Experimento histórico",
      "reading": [
        "El artículo QLoRA compara métodos de adaptación en varias familias de modelos, tamaños y conjuntos de instrucciones. Sus experimentos con grandes modelos incluyen comparaciones de LoRA cuantizado con LoRA de mayor precisión; no deben describirse todos como comparaciones con ajuste fino completo. La distinción importa porque congelar y cuantizar la base son intervenciones separadas. Un resultado satisfactorio demuestra que una receta concreta de menor memoria conserva el comportamiento medido frente a su referencia declarada. No demuestra un rendimiento equivalente en toda tarea científica, longitud de contexto o distribución de datos. El artículo también examina las limitaciones de evaluar chatbots, reforzando la necesidad de comprobar qué mide una puntuación.",
        "Una comparación de ingeniería debe registrar el punto de control base, las capas elegidas, el rango del adaptador, la precisión, la exposición de entrenamiento y el procedimiento de inferencia. Compare memoria y calidad de tarea de forma independiente y conserve pruebas de comportamientos antes útiles. Indique si el experimento mide cuantización, capacidad del adaptador o varios factores modificados a la vez. En cálculos, las comprobaciones numéricas independientes y los resultados ejecutables aportan evidencia más sólida que una preferencia de estilo."
      ],
      "discussion": [
        "¿Qué factores que cambian distinguen la comparación de precisión de la comparación con ajuste fino completo?"
      ],
      "kind": "comparison"
    },
    "32": {
      "section": "Experimentos y evaluación",
      "title": "Aprender comportamientos nuevos sin perder capacidades",
      "eyebrow": "El olvido catastrófico es una regresión medida",
      "lead": "Elija el método de retención según el fallo medido y la evidencia disponible de tareas anteriores.",
      "points": [
        "La repetición cambia la mezcla de ejemplos antiguos y nuevos de entrenamiento.",
        "La regularización restringe parámetros o salidas importantes.",
        "Los adaptadores separados o módulos congelados aíslan algunos cambios.",
        "La destilación transfiere comportamientos seleccionados de un profesor.",
        "La ampliación de expertos y la consolidación inspirada en el sueño requieren configuraciones explícitas y pruebas de retención."
      ],
      "notes": "El olvido catastrófico describe perder rendimiento aprendido después de un entrenamiento nuevo. Es distinto de que un chat pierda acceso a un mensaje anterior. Hay varias formas de abordarlo: repetir ejemplos anteriores representativos, limitar cambios en parámetros o salidas importantes, separar adaptadores por tareas o utilizar un profesor para conservar comportamientos. Los sistemas de mezcla de expertos pueden añadir o aislar capacidad, pero siguen importando el enrutamiento y los componentes compartidos. Lifelong-MoE es un método concreto que combina expertos añadidos y regularización. Los métodos inspirados en el sueño también definen operaciones reales de aprendizaje; el tiempo inactivo por sí solo no consolida. En la práctica, se necesita evaluar la retención frente al modelo inicial en las capacidades relevantes antes de aceptar un candidato.",
      "optional": "Ningún método garantiza aprendizaje permanente en todas las tareas. La repetición puede exigir almacenar datos; la repetición generada puede reproducir errores; congelar limita la adaptación; ampliar expertos aumenta el almacenamiento y la complejidad de enrutamiento. Retirar un adaptador puede restaurar un comportamiento de la base, pero el sistema adaptado puede sufrir regresiones mientras el adaptador está activo.",
      "evidence": "Línea de investigación",
      "reading": [
        "El olvido catastrófico describe perder rendimiento aprendido después de un entrenamiento nuevo. Es distinto de que un chat pierda acceso a un mensaje anterior. Hay varias formas de abordarlo: repetir ejemplos anteriores representativos, limitar cambios en parámetros o salidas importantes, separar adaptadores por tareas o utilizar un profesor para conservar comportamientos. Los sistemas de mezcla de expertos pueden añadir o aislar capacidad, pero siguen importando el enrutamiento y los componentes compartidos. Lifelong-MoE es un método concreto que combina expertos añadidos y regularización. Los métodos inspirados en el sueño también definen operaciones reales de aprendizaje; el tiempo inactivo por sí solo no consolida. En la práctica, se necesita evaluar la retención frente al modelo inicial en las capacidades relevantes antes de aceptar un candidato.",
        "Ningún método garantiza aprendizaje permanente en todas las tareas. La repetición puede exigir almacenar datos; la repetición generada puede reproducir errores; congelar limita la adaptación; ampliar expertos aumenta el almacenamiento y la complejidad de enrutamiento. Retirar un adaptador puede restaurar un comportamiento de la base, pero el sistema adaptado puede sufrir regresiones mientras el adaptador está activo."
      ],
      "discussion": [
        "¿Qué tareas antes útiles necesitan pruebas explícitas de retención después de adaptar?",
        "¿Qué costes de datos y memoria tienen la repetición, la regularización o los adaptadores separados?"
      ],
      "kind": "list"
    },
    "33": {
      "section": "Mecanismos y recursos",
      "title": "La mezcla de expertos distribuye el cómputo",
      "eyebrow": "La capacidad total y el trabajo activo difieren",
      "lead": "El enrutador de una MoE dispersa selecciona subredes expertas y combina sus salidas. El diagrama muestra una capa ilustrativa; el almacenamiento total de parámetros difiere del cálculo activado para un token.",
      "points": [
        "El número de parámetros activos omite algunos costes de las capas compartidas, el enrutamiento y la comunicación."
      ],
      "notes": "Un modelo disperso de mezcla de expertos contiene varias subredes expertas y un enrutador aprendido. Para cada token o ejemplo, activa un subconjunto. Esto puede aumentar la capacidad total sin ejecutar cada experto para cada token. Los pesos no utilizados no desaparecen del problema de almacenamiento, y el número de parámetros activos no incluye todos los costes de implementación. Los expertos tampoco son necesariamente especialistas interpretables por humanos con una asignatura cada uno. Su comportamiento surge del entrenamiento y el enrutamiento. Al adaptar una MoE, el procedimiento debe especificar qué expertos, capas compartidas y parámetros de enrutamiento pueden cambiar. Más capacidad puede ayudar a una tarea, pero añade decisiones que requieren evaluación controlada.",
      "optional": "El trabajo original de MoE con compuertas dispersas utilizó expertos de propagación hacia delante dentro de un modelo secuencial. Los diseños modernos varían en tamaño, número, enrutamiento y ubicación de expertos. Añadir expertos para aprendizaje continuo es otra decisión algorítmica, no una propiedad automática de todas las MoE.",
      "evidence": "Establecido",
      "reading": [
        "Un modelo disperso de mezcla de expertos contiene varias subredes expertas y un enrutador aprendido. Para cada token o ejemplo, activa un subconjunto. Esto puede aumentar la capacidad total sin ejecutar cada experto para cada token. Los pesos no utilizados no desaparecen del problema de almacenamiento, y el número de parámetros activos no incluye todos los costes de implementación. Los expertos tampoco son necesariamente especialistas interpretables por humanos con una asignatura cada uno. Su comportamiento surge del entrenamiento y el enrutamiento. Al adaptar una MoE, el procedimiento debe especificar qué expertos, capas compartidas y parámetros de enrutamiento pueden cambiar. Más capacidad puede ayudar a una tarea, pero añade decisiones que requieren evaluación controlada.",
        "El trabajo original de MoE con compuertas dispersas utilizó expertos de propagación hacia delante dentro de un modelo secuencial. Los diseños modernos varían en tamaño, número, enrutamiento y ubicación de expertos. Añadir expertos para aprendizaje continuo es otra decisión algorítmica, no una propiedad automática de todas las MoE."
      ],
      "discussion": [
        "¿Qué costes quedan fuera del número de parámetros de los expertos activos?"
      ],
      "kind": "prose"
    },
    "34": {
      "section": "Mecanismos y recursos",
      "title": "Hay varias vías para mejorar la eficiencia",
      "eyebrow": "Comprimir el modelo; mejorar el cálculo",
      "lead": "Elija una técnica según el recurso que modifica y mida después la calidad conservada.",
      "points": [
        "La cuantización reduce la precisión de la representación.",
        "La poda elimina pesos o estructuras seleccionados.",
        "La destilación entrena un alumno con información del profesor.",
        "El dropout dirigido prepara la red para tolerar una poda posterior.",
        "FlashAttention reduce el movimiento de datos y el almacenamiento temporal de la atención exacta."
      ],
      "notes": "La eficiencia no es una sola cifra. La cuantización reduce los bits que representan pesos u otros tensores. La poda elimina pesos o estructuras seleccionadas. La destilación entrena un estudiante con información de un profesor. El dropout dirigido hace deliberadamente robusta una red frente a los componentes que se podarán después. Son formas de compresión de modelos, y su efecto sobre la velocidad depende del hardware y el software. Los ceros no estructurados pueden ahorrar poco trabajo si la implementación sigue haciendo operaciones densas. FlashAttention aborda el movimiento de datos y el almacenamiento temporal. Otras investigaciones modifican la propia arquitectura, incluida la atención dispersa y los modelos de espacio de estados. Cada método necesita compararse con una calidad aceptable, en lugar de considerar suficiente un archivo menor.",
      "optional": "Comprimir un modelo es distinto de comprimir un archivo con un códec sin pérdidas. La cuantización y la poda pueden cambiar las salidas. La destilación transfiere comportamientos seleccionados, sin copiar exactamente todo el conocimiento. Los modelos de espacio de estados e híbridos tienen otras relaciones de escala de secuencias; no sustituyen universalmente la atención.",
      "evidence": "Establecido",
      "reading": [
        "La eficiencia no es una sola cifra. La cuantización reduce los bits que representan pesos u otros tensores. La poda elimina pesos o estructuras seleccionadas. La destilación entrena un estudiante con información de un profesor. El dropout dirigido hace deliberadamente robusta una red frente a los componentes que se podarán después. Son formas de compresión de modelos, y su efecto sobre la velocidad depende del hardware y el software. Los ceros no estructurados pueden ahorrar poco trabajo si la implementación sigue haciendo operaciones densas. FlashAttention aborda el movimiento de datos y el almacenamiento temporal. Otras investigaciones modifican la propia arquitectura, incluida la atención dispersa y los modelos de espacio de estados. Cada método necesita compararse con una calidad aceptable, en lugar de considerar suficiente un archivo menor.",
        "Comprimir un modelo es distinto de comprimir un archivo con un códec sin pérdidas. La cuantización y la poda pueden cambiar las salidas. La destilación transfiere comportamientos seleccionados, sin copiar exactamente todo el conocimiento. Los modelos de espacio de estados e híbridos tienen otras relaciones de escala de secuencias; no sustituyen universalmente la atención."
      ],
      "discussion": [
        "¿Qué recurso está limitado: almacenamiento, aritmética, tráfico de memoria o latencia?",
        "¿Cómo se evaluaría la compresión a un nivel fijo de calidad aceptable?"
      ],
      "kind": "list"
    },
    "35": {
      "section": "Mecanismos y recursos",
      "title": "El objetivo determina qué se aprende",
      "eyebrow": "Los métodos de entrenamiento responden a preguntas distintas",
      "lead": "Distintos objetivos aportan distintas señales de aprendizaje; una mejor puntuación de entrenamiento sigue necesitando evaluación sobre la tarea.",
      "points": [
        "El aprendizaje autosupervisado predice información ocultada de la entrada.",
        "El ajuste supervisado utiliza ejemplos etiquetados o demostraciones.",
        "Los métodos de preferencias aprenden de comparaciones entre respuestas.",
        "Los métodos de refuerzo optimizan una señal de recompensa.",
        "Las GAN acoplan un generador con un discriminador; esto difiere de la predicción ordinaria del siguiente token."
      ],
      "notes": "Los métodos difieren en la retroalimentación que aportan. La autosupervisión crea objetivos a partir de los propios datos, como predecir un token desde el contexto. El ajuste supervisado utiliza ejemplos etiquetados o demostraciones del comportamiento deseado. Los métodos de preferencias comparan respuestas; los de refuerzo optimizan una recompensa. Estas señales pueden ser útiles sin representar perfectamente lo que una persona quiere. Las redes generativas antagónicas aportan otra idea: un generador intenta producir muestras que un discriminador no pueda distinguir de la distribución de entrenamiento. Es una configuración específica de entrenamiento antagónico. No equivale a entrenar un modelo de lenguaje para predecir texto ni a entrenar un clasificador contra entradas perturbadas de forma adversaria.",
      "optional": "RLHF combina varias etapas y no es la única forma de aprender preferencias; Direct Preference Optimization ofrece otra formulación. Mejorar recompensas o preferencias debe comprobarse frente a la tarea real y las capacidades conservadas. Una señal puede favorecer un atajo si la evaluación no captura el objetivo previsto.",
      "evidence": "Establecido",
      "reading": [
        "Los métodos difieren en la retroalimentación que aportan. La autosupervisión crea objetivos a partir de los propios datos, como predecir un token desde el contexto. El ajuste supervisado utiliza ejemplos etiquetados o demostraciones del comportamiento deseado. Los métodos de preferencias comparan respuestas; los de refuerzo optimizan una recompensa. Estas señales pueden ser útiles sin representar perfectamente lo que una persona quiere. Las redes generativas antagónicas aportan otra idea: un generador intenta producir muestras que un discriminador no pueda distinguir de la distribución de entrenamiento. Es una configuración específica de entrenamiento antagónico. No equivale a entrenar un modelo de lenguaje para predecir texto ni a entrenar un clasificador contra entradas perturbadas de forma adversaria.",
        "RLHF combina varias etapas y no es la única forma de aprender preferencias; Direct Preference Optimization ofrece otra formulación. Mejorar recompensas o preferencias debe comprobarse frente a la tarea real y las capacidades conservadas. Una señal puede favorecer un atajo si la evaluación no captura el objetivo previsto."
      ],
      "discussion": [
        "¿Qué discrepancia podría aparecer entre una recompensa y el objetivo real de ingeniería?",
        "¿En qué difiere el entrenamiento GAN de predecir tokens o probar robustez?"
      ],
      "kind": "list"
    },
    "36": {
      "section": "Investigación actual y próximos pasos",
      "title": "En qué trabaja ahora la investigación",
      "eyebrow": "Una instantánea fechada, no una clasificación",
      "lead": "Los trabajos citados representan una instantánea fechada de la investigación. Compare protocolos completos en vez de tratar cada puntuación como una propiedad exclusiva de los pesos.",
      "points": [
        "El trabajo durante la inferencia explora la deliberación, la generación de candidatas y la verificación.",
        "Los sistemas de agentes coordinan herramientas en tareas más largas.",
        "Los métodos multimodales combinan información de distintos tipos de entrada o salida.",
        "La investigación sobre eficiencia y evaluación estudia el uso de recursos, los atajos y la transferencia."
      ],
      "notes": "Varias líneas actuales son relevantes para utilizar bien la IA. El trabajo durante la inferencia pregunta cómo gastar cómputo adicional en un problema difícil. La investigación de agentes estudia sistemas que llaman herramientas y se adaptan a resultados intermedios. Los sistemas multimodales combinan información de distintos tipos de entrada y salida, incluidos métodos que revisan resultados visuales de forma iterativa. Mientras tanto, investigar datos y evaluación permite preguntar si una mejora refleja la habilidad deseada o un atajo de la prueba. Los trabajos de 2026 citados aquí son una instantánea fechada, con las prepublicaciones identificadas. Busque mejoras en tareas similares a la suya con herramientas y presupuestos comparables. Después pruebe el sistema completo en su entorno.",
      "optional": "MMMU-Pro dificulta deliberadamente responder evaluaciones multimodales mediante atajos de texto. ScienceAgentBench estudia tareas de análisis científico con resultados ejecutables. Son diseños útiles de medición, no garantías de fiabilidad en un laboratorio. No compare puntuaciones de versiones, presupuestos o accesos a herramientas diferentes como si solo hubieran cambiado los pesos del modelo.",
      "evidence": "Línea de investigación",
      "reading": [
        "Varias líneas actuales son relevantes para utilizar bien la IA. El trabajo durante la inferencia pregunta cómo gastar cómputo adicional en un problema difícil. La investigación de agentes estudia sistemas que llaman herramientas y se adaptan a resultados intermedios. Los sistemas multimodales combinan información de distintos tipos de entrada y salida, incluidos métodos que revisan resultados visuales de forma iterativa. Mientras tanto, investigar datos y evaluación permite preguntar si una mejora refleja la habilidad deseada o un atajo de la prueba. Los trabajos de 2026 citados aquí son una instantánea fechada, con las prepublicaciones identificadas. Busque mejoras en tareas similares a la suya con herramientas y presupuestos comparables. Después pruebe el sistema completo en su entorno.",
        "MMMU-Pro dificulta deliberadamente responder evaluaciones multimodales mediante atajos de texto. ScienceAgentBench estudia tareas de análisis científico con resultados ejecutables. Son diseños útiles de medición, no garantías de fiabilidad en un laboratorio. No compare puntuaciones de versiones, presupuestos o accesos a herramientas diferentes como si solo hubieran cambiado los pesos del modelo."
      ],
      "discussion": [
        "¿Qué diferencia de herramientas o presupuesto de inferencia impediría una comparación justa de puntuaciones?"
      ],
      "kind": "list"
    },
    "37": {
      "section": "Investigación actual y próximos pasos",
      "title": "Las tendencias no son leyes del razonamiento",
      "eyebrow": "Las relaciones medidas tienen un ámbito",
      "lead": "Duplicar tanto el tamaño del modelo como los tokens presentados cuadruplica la estimación simple de entrenamiento denso. Es un cálculo de recursos, no una ley de la capacidad de razonamiento.",
      "points": [
        "Las tendencias de eficiencia algorítmica también dependen de la prueba y del periodo de comparación."
      ],
      "notes": "Es tentador resumir el campo en una regla como «duplicar el tamaño duplica la inteligencia» o «razonar exige la ley de Moore al cuadrado». Ninguna es una afirmación general sólida. Los estudios de escala miden relaciones bajo objetivos y condiciones de entrenamiento concretos. Por ejemplo, duplicar los parámetros y la exposición a tokens multiplica aproximadamente por cuatro una estimación sencilla del cómputo de entrenamiento denso. Es contabilidad, no una ley de razonamiento. La investigación histórica también encontró grandes mejoras de eficiencia algorítmica en evaluaciones seleccionadas, a veces mayores que la tendencia de hardware utilizada para comparar. Esas medidas no fijan la tasa futura. Mejores datos, verificación, arquitectura y especialización pueden cambiar lo que es posible localmente; comprobarlo es una cuestión empírica.",
      "optional": "Un pronóstico debe especificar la métrica, el periodo, los supuestos y las condiciones que lo invalidarían. En un proyecto práctico, reevalúe los modelos y herramientas disponibles cuando cambien los requisitos, en vez de suponer que comprar más cómputo o esperar un modelo mayor son las únicas alternativas.",
      "evidence": "Línea de investigación",
      "reading": [
        "Es tentador resumir el campo en una regla como «duplicar el tamaño duplica la inteligencia» o «razonar exige la ley de Moore al cuadrado». Ninguna es una afirmación general sólida. Los estudios de escala miden relaciones bajo objetivos y condiciones de entrenamiento concretos. Por ejemplo, duplicar los parámetros y la exposición a tokens multiplica aproximadamente por cuatro una estimación sencilla del cómputo de entrenamiento denso. Es contabilidad, no una ley de razonamiento. La investigación histórica también encontró grandes mejoras de eficiencia algorítmica en evaluaciones seleccionadas, a veces mayores que la tendencia de hardware utilizada para comparar. Esas medidas no fijan la tasa futura. Mejores datos, verificación, arquitectura y especialización pueden cambiar lo que es posible localmente; comprobarlo es una cuestión empírica.",
        "Un pronóstico debe especificar la métrica, el periodo, los supuestos y las condiciones que lo invalidarían. En un proyecto práctico, reevalúe los modelos y herramientas disponibles cuando cambien los requisitos, en vez de suponer que comprar más cómputo o esperar un modelo mayor son las únicas alternativas."
      ],
      "discussion": [
        "¿Qué magnitud medida se está extrapolando y bajo qué supuestos?"
      ],
      "kind": "prose"
    },
    "38": {
      "section": "Investigación actual y próximos pasos",
      "title": "Un flujo repetible para usar IA de forma útil",
      "eyebrow": "Describir → equipar → comprobar → mejorar",
      "lead": "Llévese un flujo reproducible y evidencia de dónde resulta útil. Añadir autonomía o entrenamiento debe responder a una limitación medida.",
      "points": [],
      "notes": "Cierre con un plan de evaluación concreto. Utilice como primera tarea un cálculo de respuesta conocida o un script examinable, identifique la referencia e incluya el esfuerzo de verificación en la comparación.",
      "optional": "Como primer ejercicio científico, elija un cálculo publicado, un conjunto sintético con respuesta conocida o un script pequeño con comportamiento observable. Compare una referencia sin asistencia con el flujo asistido por IA, incluido el tiempo de verificación. El objetivo es un resultado útil y reproducible. Mayor autonomía, razonamiento más largo o entrenamiento adicional deben responder a una necesidad demostrada, sin presuponer mejoras.",
      "evidence": "Práctica",
      "reading": [
        "Elija una tarea acotada cuya salida pueda examinarse de forma independiente, como un cálculo publicado, un conjunto de datos sintéticos de respuesta conocida o un script pequeño con comportamiento observable. Especifique las entradas relevantes y los criterios de aceptación antes de examinar la respuesta generada. Así, la primera comparación se centra en una tarea definida y no en una impresión general de la capacidad del modelo.",
        "Evalúe el flujo completo frente a una referencia más sencilla, incluido el esfuerzo de comprobar y reparar resultados. Conserve el procedimiento y la evidencia de fallos para que otra persona de ingeniería pueda reproducir la comparación. Un fallo medido puede entonces motivar una intervención concreta, como recuperación o adaptación, cuyo beneficio pueda ponerse a prueba a su vez."
      ],
      "discussion": [
        "¿Qué evidencia justificaría añadir entrenamiento o más autonomía al flujo inicial?"
      ],
      "kind": "prose"
    }
  }
};

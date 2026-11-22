/* Traducción asistida por IA; revisión lingüística humana pendiente. */
window.STARTER_ES = {
  "start-chat": {
    "section": "Pruebe una tarea pequeña",
    "title": "Pruebe su primer chat en el navegador",
    "lead": "Este tutorial se elaboró con ayuda de IA y sigue cinco mediciones ilustrativas de enfriamiento, desde una petición de chat hasta archivos y cálculos que puede comprobar por su cuenta.",
    "points": [],
    "kind": "prose",
    "reading": [
      "Abra un chat en el navegador y pegue la petición de ejemplo, o adjunte cooling.csv si la interfaz admite archivos. Son mediciones inventadas para un ejercicio, no resultados de un experimento físico. Las dos primeras lecturas bajan de 80 °C a 65 °C en 60 segundos. Su tasa media de cambio con signo es (65 − 80) / 60 = −0.25 °C/s, equivalente a −15 °C/min. El signo negativo indica que la temperatura disminuyó. Este pequeño cálculo ofrece una respuesta que comprobar antes de confiar en una explicación más larga.",
      "Una respuesta del chat puede contener texto, código o un resultado realmente calculado. Distinga cuál de ellos se ha producido. Si el asistente muestra una herramienta de cálculo, examine su entrada y su salida. Si solo escribe una fórmula, puede verificar la aritmética por su cuenta. Una interfaz de navegador puede disponer de herramientas de archivos o de ejecución de código, pero su aspecto no demuestra esas capacidades. El ejercicio también puede hacerse sin una suscripción a IA: lea la tabla, calcule la diferencia y compárela con la solución explicada."
    ],
    "discussion": [
      "¿Qué evidencia visible mostraría que el asistente utilizó los números suministrados en vez de describir el enfriamiento en general?"
    ],
    "notes": "Presente el conjunto de datos ilustrativo e identifique el primer intervalo. Explique la tasa con signo antes de comentar la respuesta de la IA. El ejercicio sirve de referencia con una respuesta que puede comprobarse de forma independiente; no es una evaluación comparativa de ningún modelo. Este tutorial se redactó con ayuda de IA.",
    "optional": "Una opción para empezar es la interfaz de análisis de datos de ChatGPT, enlazada en Fuentes. La disponibilidad de cargas CSV y análisis depende del modelo, el plan y la configuración. Las cinco lecturas no establecen una ley física de enfriamiento, una incertidumbre de medición ni una temperatura segura. Las lecciones posteriores distinguen describir estos valores de ajustar un modelo o actuar sobre un sistema real.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Pegue esto en un chat o resuélvalo directamente",
      "text": "Estas son mediciones ilustrativas de enfriamiento. Calcula el cambio medio de temperatura por segundo durante el primer intervalo. Muestra las dos lecturas, el tiempo transcurrido y el cálculo con signo. Conserva las unidades.\n\ntime_s,temperature_C\n0,80\n60,65\n120,54\n180,46\n240,40",
      "check": "El primer intervalo dura 60 s. El cambio es −15 °C. La tasa con signo es −0.25 °C/s, o −15 °C/min."
    }
  },
  "start-workspace": {
    "section": "Elija cómo trabajar",
    "title": "Abra un entorno de trabajo y examine sus archivos",
    "lead": "Un asistente de un entorno de trabajo puede ayudar a producir un análisis reutilizable si tiene acceso a una carpeta elegida y a una herramienta de ejecución.",
    "points": [
      "Un plan propone nombres de archivos. Una tarea terminada entrega los archivos y los resultados de ejecutarlos."
    ],
    "kind": "prose",
    "reading": [
      "Descargue cooling.csv en una carpeta de trabajo nueva y ábrala en una aplicación con asistente. Pídale que cree un script de análisis, un gráfico de temperatura frente al tiempo y un informe breve. Darle esta carpeta aporta contexto y un lugar para las salidas. No concede automáticamente acceso a todos los archivos, a un ejecutor de comandos ni a la red. Compruebe las herramientas y el alcance reales de la aplicación. Si no puede ejecutar código, pídale que lo indique y que le proporcione el script para ejecutarlo usted.",
      "Examine los archivos resultantes en vez de depender del mensaje de finalización. El gráfico debe tener cinco puntos, con segundos en el eje horizontal y grados Celsius en el vertical. El informe debe mostrar la tasa del primer intervalo e identificar los datos como ilustrativos. Volver a ejecutar el script debe recrear las salidas a partir de cooling.csv. Una imagen de una curva plausible no basta si sus puntos no corresponden a esas filas. Es la misma pregunta científica del ejercicio del chat, ahora con archivos que pueden conservarse, comprobarse y reutilizarse."
    ],
    "discussion": [
      "Si el asistente dice «terminado» pero solo proporciona nombres de archivos, ¿qué examinaría a continuación?"
    ],
    "notes": "Compare una respuesta en una conversación con archivos realmente producidos mediante una herramienta. En una sesión práctica, deje tiempo para abrir el CSV, el gráfico y el informe. Si el asistente elegido no puede ejecutar código, mantenga visible esa limitación y utilice la comprobación independiente de Python de la siguiente lección.",
    "optional": "El tutorial de desarrollo con agentes de VS Code, enlazado en Fuentes, ofrece una opción para comenzar con un entorno de trabajo en un editor. Siga sus instrucciones de configuración actuales y examine las herramientas habilitadas para la sesión. Conserve los datos originales. Los scripts, gráficos e informes generados son archivos derivados. Si una herramienta propone cambios fuera de la carpeta de trabajo, contraste ese alcance con lo que realmente requiere la tarea.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Una petición concreta para el entorno de trabajo",
      "text": "Utiliza cooling.csv en esta carpeta. Crea analyze_cooling.py, cooling_plot.svg y summary.md. Representa las cinco filas con sus unidades y calcula la tasa con signo del primer intervalo. Conserva cooling.csv. Ejecuta el script si hay una herramienta disponible, informa de su salida real e identifica los archivos creados. Si no puedes ejecutarlo, indica que el script no se ha ejecutado.",
      "check": "Abra los archivos reales. Compruebe que se representan cinco puntos, con extremos en (0 s, 80 °C) y (240 s, 40 °C), y que la tasa del primer intervalo es −0.25 °C/s."
    }
  },
  "start-cli": {
    "section": "Elija cómo trabajar",
    "title": "Ejecute la misma comprobación desde un terminal",
    "lead": "La línea de comandos hace explícitos la entrada, el programa y la salida. Este cálculo utiliza Python convencional, por lo que no necesita un modelo ni un servicio de pago.",
    "points": [
      "Guarde el código como check_cooling.py junto a cooling.csv.",
      "Con Python 3 instalado, abra un terminal en esa carpeta y ejecute python check_cooling.py."
    ],
    "kind": "steps",
    "reading": [
      "Un terminal es una interfaz de texto para lanzar comandos. Un asistente de IA de línea de comandos puede proponerlos o ejecutarlos si está configurado para ello, pero el terminal en sí no es un modelo de IA. Aquí puede ejecutar la comprobación directamente. El programa utiliza el módulo csv de la biblioteca estándar de Python, lee las dos primeras filas y divide la diferencia de temperatura por la diferencia de tiempo. No hace falta ningún paquete adicional de Python. Algunos sistemas utilizan python3 o py en lugar de python para iniciar Python 3.",
      "El valor impreso aporta evidencia de la ejecución de este programa sobre el archivo que abrió. Compruebe que la carpeta de trabajo del terminal contiene el cooling.csv previsto. Si no se encuentra el archivo, localícelo en vez de pedir otra explicación científica. Si más adelante encarga a un asistente de línea de comandos automatizar este paso, conserve juntos el comando, su carpeta de trabajo y su salida real. El acceso al intérprete de comandos puede estar restringido o alojado de forma remota, por lo que «CLI» no establece dónde se realizó el cálculo ni qué máquina podía modificar."
    ],
    "discussion": [
      "¿Qué distinguiría un problema de ubicación del archivo de un error en el cálculo de la tasa?"
    ],
    "notes": "Este es el ejercicio central que no necesita suscripción. Explique que Python debe estar instalado y que ambos archivos deben estar en la misma carpeta de trabajo. Una ejecución correcta imprime la línea esperada. Un listado de código por sí solo no demuestra que se haya ejecutado.",
    "optional": "La guía de inicio oficial de Claude Code, enlazada en Fuentes, es una opción para acceder a una sesión de IA en el terminal y requiere acceso mediante una cuenta compatible. El ejercicio independiente de Python no la necesita. Este script, deliberadamente breve, presupone los nombres de columna mostrados, al menos dos filas numéricas y un primer intervalo de tiempo distinto de cero. Un programa reutilizable debería detectar columnas ausentes, valores mal formados y marcas de tiempo repetidas antes de calcular.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Guarde como check_cooling.py y ejecute python check_cooling.py",
      "text": "import csv\n\nwith open(\"cooling.csv\", newline=\"\", encoding=\"utf-8\") as source:\n    rows = list(csv.DictReader(source))\na, b = rows[:2]\ndelta_t = float(b[\"time_s\"]) - float(a[\"time_s\"])\ndelta_T = float(b[\"temperature_C\"]) - float(a[\"temperature_C\"])\nprint(f\"First interval: {delta_T / delta_t:.2f} C/s\")",
      "check": "Salida esperada en el terminal: First interval: -0.25 C/s. El cálculo es local y no llama a un modelo de IA."
    },
    "agentExample": {
      "label": "Dentro de una sesión de IA de línea de comandos ya abierta en la carpeta de trabajo",
      "text": "Lee cooling.csv de esta carpeta. Calcula con Python la tasa de temperatura con signo entre sus dos primeras filas. Muestra el comando que ejecutes realmente y su salida. No modifiques el CSV. Si no puedes ejecutar comandos en esta sesión, dame el código e indica que no se ha ejecutado.",
      "check": "Compare la salida ejecutada con la referencia independiente: −0.25 °C/s. Sugerir un comando sin el resultado de su ejecución no equivale a haberlo ejecutado."
    }
  },
  "start-alternatives": {
    "section": "Elija cómo trabajar",
    "title": "Elija una interfaz para el siguiente paso",
    "lead": "La misma tarea de enfriamiento puede realizarse en un chat, un entorno de trabajo, un terminal, un cuaderno o una aplicación. La interfaz y las herramientas conectadas son decisiones distintas.",
    "points": [],
    "kind": "prose",
    "reading": [
      "Pruebe el selector con las mismas mediciones. Un chat resulta cómodo para formular y revisar una pregunta. Un entorno de trabajo organiza la entrada y los archivos generados. Un terminal permite repetir un comando. Un cuaderno reúne texto explicativo, celdas de código ejecutable y resultados, algo útil al desarrollar un análisis. Su código se ejecuta mediante un kernel, un proceso de ejecución separado. Reiniciar ese kernel y ejecutar las celdas en orden ayuda a descubrir resultados que dependían de pasos anteriores olvidados.",
      "Una API es una forma definida para que un programa utilice otro servicio o componente. Una aplicación podría enviar esta tarea, recibir una petición de herramienta, realizar su propio cálculo y devolver el resultado. Un sistema integrado en un dispositivo podría recoger lecturas de temperatura y utilizar un modelo local especializado sin ventana de chat. Ninguna de estas interfaces decide por sí sola si los datos permanecen locales o si pueden modificarse archivos. Elija la forma que facilite examinar el siguiente resultado útil. El cálculo del selector se ejecuta en esta página y no llama a ningún modelo."
    ],
    "discussion": [
      "¿Qué interfaz elegiría para una sola pregunta y cuál para repetir este análisis a diario?"
    ],
    "notes": "Utilice el selector como ejercicio de exploración. Cambie de interfaz manteniendo fijos los datos y la aritmética. Distinga la interfaz visible, el papel del modelo y las herramientas de ejecución disponibles. El cuaderno, la API y los sistemas integrados son alternativas, no niveles de inteligencia.",
    "optional": "En un flujo con API, decida qué componente valida la entrada, ejecuta una herramienta y guarda el resultado. Una petición de herramienta generada por un modelo no se ejecuta sola. En los cuadernos, guarde las entradas y vuelva a ejecutar desde un kernel limpio antes de tratar la salida mostrada como reproducible.",
    "evidence": "Ejercicio ilustrativo"
  },
  "start-brief": {
    "section": "Mejore la petición",
    "title": "Especifique qué debe contener un análisis terminado",
    "lead": "Una petición útil indica al asistente qué debería poder examinarse cuando termine el trabajo.",
    "points": [
      "«Analiza los datos de enfriamiento» deja abiertos el propósito y la salida.",
      "«Crea un gráfico rotulado y explica la tasa del primer intervalo a una persona recién incorporada al laboratorio» concreta el resultado deseado."
    ],
    "kind": "list",
    "reading": [
      "La petición breve «analiza estos datos» podría producir un resumen, un gráfico, una curva ajustada o un ensayo sobre transferencia de calor. Añadir elogios no resuelve esa ambigüedad. Especifique el resultado que necesita y quién lo utilizará. Para la tarea de enfriamiento, pida un gráfico de los valores suministrados, el cálculo desarrollado de una tasa y una explicación para alguien que se incorpora al experimento. Conserve los segundos y los grados Celsius. Indique que los números son ilustrativos y que no se han proporcionado incertidumbres de medición.",
      "Deje abiertas las decisiones de implementación que no afecten al requisito científico. El asistente puede proponer una biblioteca de gráficos o el formato de un informe. Especifique un método cuando reproducirlo sea la tarea. Una petición concisa incluye la información que afecta a la corrección y omite repeticiones. Compare dos versiones de la petición con los mismos datos. Examine si sus salidas contienen los archivos o resultados prometidos y los supuestos explícitos, en vez de juzgar qué respuesta parece más pulida."
    ],
    "discussion": [
      "¿Qué podría eliminarse del encargo de ejemplo sin cambiar el resultado deseado?",
      "¿Qué detalle ausente cambiaría lo que se considera una respuesta correcta?"
    ],
    "notes": "Invite a reformular «analiza estos datos» para un destinatario real. Compare la salida resultante con el encargo. El objetivo es un acuerdo claro sobre la tarea, no una frase secreta para formular peticiones ni afirmar que más palabras mejoran todas las respuestas.",
    "optional": "Si reproduce un análisis establecido, proporcione su modelo y su regla de ponderación. Si explora los datos, deje que el asistente proponga métodos y explique sus supuestos antes de convertir uno en el método obligatorio.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Un encargo para quien acaba de incorporarse al laboratorio",
      "text": "Utiliza las cinco filas de cooling.csv. Produce un gráfico rotulado en segundos y grados Celsius, además de una explicación breve para alguien recién incorporado al laboratorio. Muestra la tasa con signo del primer intervalo sustituyendo los valores numéricos. Conserva los datos de entrada. Estos valores son ilustrativos y no incluyen incertidumbres de medición. No presentes una ley física ajustada como un resultado establecido.",
      "check": "El gráfico, el cálculo desarrollado y la explicación deben referirse a las mismas cinco lecturas. Una descripción general del enfriamiento no completa esta petición."
    }
  },
  "start-check": {
    "section": "Mejore la petición",
    "title": "Compruebe el detalle y el conjunto",
    "lead": "Compruebe un cálculo exacto y examine después si toda la salida cuenta la misma historia que los datos.",
    "points": [],
    "kind": "prose",
    "reading": [
      "Compruebe primero la aritmética allí donde conoce la respuesta. El cambio inicial de temperatura es −15 °C en 60 s, por lo que la tasa con signo es −0.25 °C/s. Amplíe después la mirada. El gráfico completo debe contener cinco mediciones, comenzar en 80 °C y terminar en 40 °C después de 240 s. Las temperaturas bajan en cada paso, pero las caídas se hacen menores. Un gráfico con ejes intercambiados, puntos ausentes o una línea suave sin explicar puede resultar convincente mientras responde a otra pregunta.",
      "La tasa del primer intervalo no es la media de todo el registro. Durante los cuatro minutos completos, el cambio es −40 °C, lo que da −40/240 ≈ −0.167 °C/s, o −10 °C/min. Ninguno de estos valores es una derivada instantánea. Estas diferencias ayudan a evaluar una respuesta que utiliza la expresión imprecisa «tasa de enfriamiento». Ajustar un modelo físico introduciría decisiones adicionales, como la forma del modelo y el tratamiento de los errores de medición. La tabla por sí sola no establece esos supuestos."
    ],
    "discussion": [
      "Si un informe solo dice «la tasa de enfriamiento es −10 °C/min», ¿qué aclaración permitiría comprobar la afirmación?"
    ],
    "notes": "Utilice las dos tasas de distintos intervalos para mostrar por qué un número plausible no basta. Cada una es correcta para el intervalo indicado. Al revisar el gráfico, señale los extremos reales y examine las unidades antes de comentar un modelo.",
    "optional": "Un residuo es un valor observado menos la predicción de un modelo para la misma entrada. Los residuos ayudan a examinar un ajuste propuesto, pero una curva visualmente suave no demuestra que el modelo físico sea correcto. El ejemplo de ajuste de la guía principal desarrolla esta idea.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Dos tasas correctas responden a preguntas distintas",
      "text": "Primer intervalo, 0–60 s:\n(65 − 80) / (60 − 0) = −0.25 °C/s = −15 °C/min\n\nRegistro completo, 0–240 s:\n(40 − 80) / (240 − 0) ≈ −0.167 °C/s = −10 °C/min",
      "check": "Relacione cada tasa informada con su tiempo inicial, su tiempo final y sus unidades. No sustituya la tasa de todo el registro por la del primer intervalo solicitado."
    }
  },
  "start-correct": {
    "section": "Mejore la petición",
    "title": "Corrija el supuesto y compruebe la reparación",
    "lead": "Suponga que un borrador informa de −15 °C/s. La corrección útil identifica la conversión de tiempo que falta y pide recalcular las salidas afectadas.",
    "points": [],
    "kind": "prose",
    "reading": [
      "El borrador incorrecto del ejemplo es un caso didáctico inventado, no un fallo registrado de una IA. Divide el cambio de temperatura por un minuto y etiqueta el resultado por segundo. Una corrección concreta indica que el primer intervalo dura 60 segundos, conserva las mismas dos lecturas y pide la tasa con signo en ambas unidades. Es más útil que «está mal, inténtalo otra vez», porque identifica el supuesto que cambió la respuesta.",
      "Examine el cálculo revisado y el informe generado. Una reparación puede cambiar la explicación y dejar un valor obsoleto en la anotación de un gráfico o en un archivo guardado. La tasa corregida es −0.25 °C/s, equivalente a −15 °C/min. Si un script produjo el informe, vuelva a ejecutarlo y examine también esa salida. Reconocer un error no equivale a actualizar los archivos. Una vez verificada la reparación, incorpore la regla de unidades al encargo actual para que se conserve en el siguiente traspaso."
    ],
    "discussion": [
      "¿Qué salidas podrían conservar el valor anterior después de que el asistente dé una respuesta correcta?"
    ],
    "notes": "Mantenga claramente identificado el error inventado. El ejercicio ilustra la corrección concreta y la comprobación de los archivos resultantes, no la frecuencia de fallos de un modelo. Vincula un error de unidades con una prueba pequeña y repetible.",
    "optional": "Una prueba de regresión reutilizable puede comprobar que el resultado del primer intervalo del CSV original sea numéricamente próximo a −0.25 °C/s. Esto pone a prueba un cálculo concreto, no la fiabilidad general del asistente.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Intercambio de corrección ilustrativo",
      "text": "Borrador inventado: «La tasa del primer intervalo es −15 °C/s».\n\nCorrección: «El intervalo de 0 a 60 está medido en segundos. Conserva las lecturas de 80 °C y 65 °C. Divide su diferencia por 60 s, muestra la tasa por segundo y por minuto, y actualiza los valores afectados del informe».",
      "check": "El resultado reparado es −0.25 °C/s = −15 °C/min. Compruebe el informe guardado además de la respuesta."
    }
  },
  "start-media": {
    "section": "Elija la evidencia",
    "title": "Elija una herramienta para texto, imágenes, voz o vídeo",
    "lead": "Cuando las mediciones llegan como imagen, voz o vídeo, verifique los valores extraídos antes de pedir la conclusión numérica.",
    "points": [
      "Leer una imagen o un vídeo existente es distinto de generar uno nuevo.",
      "Transcribir voz, responder mediante voz y producir audio hablado son flujos de trabajo distintos."
    ],
    "kind": "list",
    "reading": [
      "Suponga que las mismas lecturas de enfriamiento están escritas en papel. Una fotografía añade un paso de reconocimiento antes del cálculo. Pida una transcripción a las dos columnas CSV y compare después cada valor y unidad con la imagen original. El reconocimiento óptico de caracteres, u OCR, extrae el texto visible. Interpretar un gráfico o una escena experimental va más allá de esa transcripción. Las etiquetas pequeñas y las marcas ambiguas pueden importar. Utilice la tabla numérica verificada para calcular en vez de estimar valores exactos por el aspecto de un gráfico.",
      "También puede leer en voz alta el ejemplo público y comparar una transcripción de voz a texto con las palabras previstas, especialmente «sesenta», «dieciséis» y las unidades. Para vídeo, identifique los momentos relevantes y examine los fotogramas utilizados como evidencia. No dé por hecho que se examinó cada fotograma. Los medios y formatos de salida admitidos dependen del modelo y de las herramientas. Generar una ilustración o un vídeo de enfriamiento es una salida creativa, no una medición de este experimento. Acceder a la cámara o al micrófono requiere otro permiso, distinto de la capacidad del modelo para interpretar los medios suministrados."
    ],
    "discussion": [
      "¿Qué parte del flujo comprobaría primero si una tabla fotografiada produjera una tasa incorrecta?"
    ],
    "notes": "Si practica con medios de entrada, utilice los números públicos del ejercicio en lugar de grabaciones privadas. Basta con una copia impresa o manuscrita de la tabla. Quienes no dispongan de una interfaz que admita estos medios pueden examinar una transcripción deliberadamente ambigua y explicar qué valor debe contrastarse con la fuente.",
    "optional": "Los sistemas de voz a voz pueden conectar directamente la entrada de audio con la salida hablada, mientras otros flujos transcriben primero y sintetizan la voz después. Ninguna de las dos disposiciones garantiza una transcripción numérica exacta. Mantenga la tabla verificada como entrada del análisis.",
    "evidence": "Ejercicio ilustrativo",
    "mediaRoutes": [
      {
        "input": "Texto o CSV",
        "output": "Una tabla y una explicación",
        "use": "Con los valores pegados de cooling.csv, muestra las dos primeras lecturas y calcula su tasa de temperatura con signo. Explica el signo negativo en una frase.",
        "check": "Se esperan (0 s, 80 °C), (60 s, 65 °C) y −0.25 °C/s. Una respuesta de texto puede contrastarse directamente con estos valores."
      },
      {
        "input": "Una fotografía de la tabla",
        "output": "CSV verificado",
        "use": "Transcribe esta fotografía suministrada en las columnas time_s y temperature_C. Conserva los números y las unidades visibles. Marca las entradas ilegibles en vez de adivinarlas y muestra la tabla antes de calcular.",
        "check": "Para una fotografía de la tabla del ejercicio, compare las cinco filas con el original: (0,80), (60,65), (120,54), (180,46), (240,40). Esto es leer una imagen, no generarla."
      },
      {
        "input": "Mediciones habladas",
        "output": "Una transcripción que verificar",
        "use": "Transcribe esta grabación sin añadir mediciones. Conserva los números y las unidades pronunciados. Marca cualquier palabra dudosa. Comprobaré la transcripción antes de convertirla en tabla.",
        "check": "Para practicar, grabe «A los sesenta segundos, la temperatura es de sesenta y cinco grados Celsius». Verifique 60, 65 y las unidades frente al audio. Este tutorial no proporciona ninguna grabación."
      },
      {
        "input": "Texto verificado",
        "output": "Audio hablado",
        "use": "Lee esta frase en voz alta: «Durante los primeros sesenta segundos, la temperatura descendió quince grados Celsius. La tasa media con signo fue menos cero coma veinticinco grados Celsius por segundo».",
        "check": "Escuche el signo negativo, el valor decimal y la unidad por segundo. La salida hablada es otra representación del texto comprobado, no una medición nueva."
      },
      {
        "input": "Un vídeo existente de un experimento",
        "output": "Observaciones con marcas de tiempo",
        "use": "En este vídeo suministrado, identifica los fotogramas en los que se lee la pantalla del termómetro. Indica la marca de tiempo y la lectura visible de cada uno. Distingue las observaciones de las conjeturas e indica qué partes no pudiste examinar.",
        "check": "Abra los fotogramas citados y compare las lecturas con la pantalla visible. No sustituya fotogramas no vistos por los valores del CSV ni dé por hecho que se analizó cada fotograma. El tutorial no proporciona ningún vídeo experimental."
      },
      {
        "input": "Texto o una imagen de referencia",
        "output": "Un vídeo nuevo generado",
        "use": "Con una herramienta de generación de vídeo, crea una animación ilustrativa breve de una taza que se enfría. Rotúlala «Ilustración, no datos registrados». Mantén separado el gráfico científico de la animación.",
        "check": "La salida es un archivo multimedia recién creado con la etiqueta de ilustración. No constituye evidencia sobre las temperaturas medidas ni sobre un experimento observado. Utilice un modelo y una herramienta que realmente permitan generar vídeo."
      }
    ]
  },
  "start-local": {
    "section": "Elija la evidencia",
    "title": "Elija dónde se realiza el trabajo",
    "lead": "La tabla del ejercicio puede compartirse libremente. Los registros experimentales reales pueden exigir otras decisiones sobre modelos, herramientas y almacenamiento.",
    "points": [],
    "kind": "prose",
    "reading": [
      "La comprobación independiente de Python se ejecuta en el ordenador donde se inicia y no contacta con un servicio de IA. Una aplicación de trabajo puede, en cambio, enviar una petición a un modelo alojado mientras ejecuta un comando localmente. Un navegador puede ser la interfaz de un cuaderno remoto o de un servicio local. Siga el flujo de datos en lugar de tratar el icono de una aplicación como prueba de que todo es local. Identifique qué sale del dispositivo, dónde se ejecuta el cálculo y dónde se guardan sus salidas.",
      "En un futuro registrador de temperatura, un dispositivo pequeño podría recoger lecturas y realizar comprobaciones sencillas cerca del sensor. Una estación de trabajo local podría ejecutar un modelo de visión compatible o analizar los datos conservados. Un modelo alojado podría ayudar con una explicación amplia cuando el material enviado pueda compartirse. Son funciones que comparar, no una clasificación que elija siempre una máquina. Empiece con la disposición más sencilla que produzca el resultado necesario y ponga a prueba sus capacidades, su tiempo de respuesta y su tratamiento de los datos sobre la tarea real."
    ],
    "discussion": [
      "¿Qué partes del flujo de enfriamiento necesitan realmente un modelo y cuáles pueden seguir siendo código local convencional?"
    ],
    "notes": "Mantenga concreta la distinción: la adquisición mediante sensores, el cálculo determinista y la explicación con ayuda de un modelo pueden ejecutarse en lugares distintos. No deduzca privacidad de «escritorio», acceso ilimitado de «terminal» ni rendimiento del modelo de una especificación de red.",
    "optional": "Un modelo local puede formar parte de una aplicación que realiza llamadas remotas o guarda registros. A la inversa, una página de navegador puede ejecutar un cálculo determinista localmente. Compruebe la configuración y la ruta reales de los datos.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Siga una disposición propuesta",
      "text": "Sensor → cooling.csv local\nPython local → tasa y gráfico\nTexto seleccionado del informe → asistente alojado para explicarlo\nExplicación devuelta → revisión humana junto a la tabla original",
      "check": "En este ejemplo, solo el texto seleccionado del informe está previsto para la etapa alojada. Verifique que la aplicación elegida envía realmente ese contenido acotado, en vez de suponer que el diagrama lo impone."
    }
  },
  "start-context": {
    "section": "Haga reutilizable el trabajo",
    "title": "Conserve el encargo actual junto a los datos",
    "lead": "Un traspaso útil conserva la fuente, la última corrección y la pregunta pendiente sin reproducir toda la conversación.",
    "points": [],
    "kind": "prose",
    "reading": [
      "Tras varias revisiones, la conversación puede contener una tasa incorrecta, una tasa corregida y una propuesta nunca aceptada. Cree un encargo actual breve que identifique la entrada, las unidades y el resultado verificado. Marque el error anterior como sustituido. Mantenga disponible el CSV original para que el siguiente asistente o colega pueda recalcular en vez de heredar una afirmación resumida. Un resumen de conversación aporta contexto útil, pero no sustituye la evidencia.",
      "Para trabajo repetido, el procedimiento puede convertirse en un archivo de instrucciones reutilizable o una habilidad: lea este esquema, calcule este intervalo, cree estos archivos y compruebe este resultado. Eso cambia las instrucciones suministradas al asistente, no los pesos entrenados del modelo. Si más adelante la tarea depende de un manual largo de un instrumento, recupere la sección relevante con su fuente. Un sistema de búsqueda puede utilizar embeddings, representaciones numéricas que ayudan a relacionar textos, pero el pasaje recuperado sigue necesitando una comprobación del instrumento y la versión correctos."
    ],
    "discussion": [
      "¿Qué frase del encargo es un resultado verificado y qué afirmación sigue siendo un supuesto?"
    ],
    "notes": "Pida redactar un traspaso que otra persona pueda utilizar sin leer el chat. Distinga los datos fuente, las decisiones actuales y las preguntas sin resolver. Presente las habilidades y la recuperación como formas prácticas de aportar contexto, sin convertir el ejercicio en entrenamiento de modelos.",
    "optional": "Como segunda aplicación, pregunte: «En el manual suministrado de Model X, revisión B, ¿qué página especifica la frecuencia máxima de muestreo? Cita la línea pertinente e indica su página, sección y condiciones de funcionamiento». Sustituya el instrumento y la revisión por los reales. Una búsqueda por significado puede recuperar un pasaje parecido de otro modelo o una revisión anterior. Compruebe la línea citada frente a la página original y la identidad del documento antes de utilizar la especificación. Si un resumen anterior contradice esa fuente, registre la corrección en lugar de tratar silenciosamente el resumen como autoridad.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Un encargo de traspaso actualizado",
      "text": "Entrada: cooling.csv, cinco filas ilustrativas.\nUnidades: time_s son segundos; temperature_C son grados Celsius.\nVerificado: el primer intervalo de 0–60 s da −0.25 °C/s = −15 °C/min.\nSustituido: la etiqueta del borrador −15 °C/s era incorrecta.\nNo establecido: la incertidumbre de medición o una ley física de enfriamiento.\nSiguiente paso: volver a ejecutar el script con cualquier entrada revisada y comprobar los archivos resultantes.",
      "check": "Una persona que lo lea por primera vez debería poder encontrar el archivo original, reproducir la tasa indicada e identificar lo que no se ha establecido."
    }
  },
  "start-repeat": {
    "section": "Haga reutilizable el trabajo",
    "title": "Cambie una entrada y descubra qué cambia",
    "lead": "Un pequeño cambio controlado comprueba mejor la finalización que preguntar al asistente si confía en su respuesta.",
    "points": [
      "Haga una copia de práctica de los datos y del script.",
      "Cambie solo la temperatura de los 60 segundos de 65 a 66 y repita el mismo cálculo."
    ],
    "kind": "steps",
    "reading": [
      "Copie cooling.csv y check_cooling.py en otra carpeta de práctica. En ese CSV copiado, cambie solo la temperatura a los 60 segundos de 65 a 66. Ejecute allí el mismo script. La tasa del primer intervalo debe cambiar a (66 − 80)/60 = −14/60 °C/s, aproximadamente −0.2333 °C/s. El script del ejemplo imprime dos decimales, por lo que su salida es −0.23 C/s. La media de todo el registro sigue siendo −10 °C/min porque las lecturas inicial y final no cambiaron.",
      "Examine ahora cualquier informe o gráfico generado a partir de los datos revisados. El segundo punto debe moverse y un informe no debe conservar el resultado original del primer intervalo. Si no cambia nada, investigue si el programa abrió el archivo anterior o reutilizó una salida antigua. Este ejercicio comprueba una dependencia acotada y comprensible. No demuestra que todos los análisis posteriores vayan a ser correctos. Ya dispone de un patrón reutilizable: pedir un resultado útil, examinar el cálculo y ponerlo a prueba con un cambio cuyo efecto pueda predecir."
    ],
    "discussion": [
      "¿Qué permaneció igual y por qué?",
      "¿Qué cambio adicional de entrada revelaría otro tipo de error?"
    ],
    "notes": "Reserve tiempo real de práctica en los recorridos largos. Verifique la carpeta de trabajo y la salida real. El descubrimiento importante es que cambia el resultado del primer intervalo, mientras que la media de todo el registro no cambia. Puede hacerse la misma comparación en papel si no hay un terminal disponible.",
    "optional": "Para otra prueba, iguale las dos primeras marcas de tiempo en otra copia de práctica. Un análisis robusto debería indicar que el intervalo es cero en lugar de presentar una tasa finita. El script deliberadamente breve del tutorial generará un error de división por cero, lo que identifica un paso de validación ausente que puede mejorarse.",
    "evidence": "Ejercicio ilustrativo",
    "example": {
      "label": "Prediga antes de volver a ejecutar",
      "text": "Cambio de práctica: (60 s, 65 °C) → (60 s, 66 °C)\n\nNueva tasa del primer intervalo:\n(66 − 80) / 60 = −14/60 °C/s ≈ −0.2333 °C/s\n\nSalida esperada del script:\nFirst interval: -0.23 C/s",
      "check": "Deben cambiar el segundo punto del gráfico y la tasa del primer intervalo. Los extremos y la tasa de todo el registro deben permanecer iguales."
    }
  }
};

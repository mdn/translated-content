---
title: Guía de estilo de redacción
short-title: Guía de estilo
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: a886ef3867e01df856ed9b49b3b6856232cc8c75
---

Esta guía de estilo de redacción describe cómo debe escribirse, organizarse, deletrearse y formatearse el contenido en MDN Web Docs.

Estas pautas aseguran la coherencia del lenguaje y el estilo en todo el sitio web. Dicho esto, nos interesa más el contenido que su formato, así que no te sientas obligado a aprender la guía de estilo de redacción completa antes de colaborar. Sin embargo, no te sorprendas si otro colaborador edita tu trabajo más tarde para que se ajuste a esta guía. Los revisores también pueden remitirte a esta guía de estilo cuando envíes una solicitud de incorporación de cambios de contenido.

> [!NOTE]
> Los aspectos lingüísticos de esta guía se aplican principalmente a la documentación en inglés. Otros idiomas pueden tener (y se les invita a crear) sus propias guías de estilo. Estas deben publicarse como subpáginas de la página del respectivo equipo de localización. Sin embargo, esta guía aún debe consultarse para formatear y organizar el contenido.

Después de enumerar las pautas generales de redacción, esta guía describe el estilo de redacción recomendado para MDN Web Docs y luego cómo formatear diferentes componentes en una página, como listas y títulos.

## Pautas generales de redacción

El objetivo es escribir páginas que incluyan toda la información que los lectores puedan necesitar para comprender el tema en cuestión.

Las siguientes subsecciones proporcionan las recomendaciones para lograr esto:

- [Considera tu público objetivo](#considera_tu_publico_objetivo)
- [Considera las tres C de la redacción](#considera_las_tres_c_de_la_redaccion)
- [Incluye ejemplos relevantes](#incluye_ejemplos_relevantes)
- [Proporciona una introducción descriptiva](#proporciona_una_introduccion_descriptiva)
- [Usa un lenguaje inclusivo](#usa_un_lenguaje_inclusivo)
- [Escribe pensando en SEO](#escribe_pensando_en_seo)

### Considera tu público objetivo

Ten en cuenta el público objetivo del contenido que estás escribiendo. Por ejemplo, una página sobre técnicas avanzadas de red probablemente no necesita entrar en tantos detalles sobre conceptos básicos de redes como la página típica sobre redes. Ten en cuenta que estas son pautas. Algunos de estos consejos pueden no aplicarse en todos los casos.

### Considera las tres C de la redacción

Las tres C de una buena redacción son escribir con claridad, concisión y coherencia.

- **Claro**: Asegúrate de que tu redacción sea clara y sencilla. En general, usa la voz activa y pronombres inequívocos. Escribe oraciones cortas, manteniendo una idea por oración. Define los nuevos términos, teniendo en cuenta el público objetivo, antes de usarlos.
- **Conciso**: Al escribir cualquier documento, es importante saber cuánto decir. Si proporcionas detalles excesivos, la página se vuelve tediosa de leer y rara vez se utilizará.
- **Coherente**: Asegúrate de usar el mismo vocabulario de manera coherente en toda la página y entre varias páginas.

### Incluye ejemplos relevantes

En general, agrega ejemplos o escenarios de la vida real para explicar mejor el contenido que estás escribiendo. Esto ayuda a los lectores a comprender la información conceptual y procedimental de una manera más tangible y práctica.

Debes usar ejemplos para aclarar para qué se usa cada parámetro y para aclarar cualquier caso límite que pueda existir.
También puedes usar ejemplos para demostrar soluciones para tareas comunes y soluciones para problemas que puedan surgir.

### Proporciona una introducción descriptiva

Asegúrate de que el(os) párrafo(s) de apertura antes del primer encabezado resuman adecuadamente la información que cubrirá la página y quizás lo que los lectores podrán lograr después de pasar por el contenido. De esta manera, un lector puede determinar rápidamente si la página es relevante para sus preocupaciones y resultados de aprendizaje deseados.

En una guía o tutorial, el(los) párrafo(s) introductorio(s) debe(n) informar al lector sobre los temas que se cubrirán, así como sobre los conocimientos previos que se espera que el lector tenga, si los hubiera. El párrafo de apertura debe mencionar las tecnologías y/o APIs que se están documentando o discutiendo, con enlaces a la información relacionada, y debe ofrecer pistas sobre situaciones en las que el contenido del artículo podría ser útil.

- **Ejemplo de introducción corta**: Este ejemplo de una introducción es demasiado corto. Omite demasiada información, como qué significa exactamente "trazar" texto, dónde se dibuja el texto, etc.

  > **`CanvasRenderingContext2D.strokeText()`** dibuja una cadena.

- **Ejemplo de introducción larga**: Este ejemplo tiene una introducción actualizada, pero ahora es demasiado larga.
  Se incluyen demasiados detalles y el texto profundiza demasiado en la descripción de otros métodos y propiedades.
  En su lugar, la introducción debe centrarse en el método `strokeText()` y debe hacer referencia a las guías apropiadas donde se describen los otros detalles.

  > Cuando se llama, el método de la API Canvas 2D **`CanvasRenderingContext2D.strokeText()`** traza los caracteres de la cadena especificada comenzando en las coordenadas especificadas, usando el color de pluma actual.
  > En la terminología de los gráficos por computadora, "trazar" texto significa dibujar los contornos de los glifos en la cadena sin rellenar el contenido de cada carácter con color.
  >
  > El texto se dibuja usando la fuente actual del contexto como se especifica en la propiedad {{domxref("CanvasRenderingContext2D.font", "font")}} del contexto.
  >
  > La colocación del texto relativa a las coordenadas especificadas se determina por las propiedades `textAlign`, `textBaseline` y `direction` del contexto.
  > `textAlign` controla la colocación de la cadena relativa a la coordenada X especificada; si el valor es `"center"`, entonces la cadena se dibuja comenzando en `x - (stringWidth / 2)`, colocando la coordenada X especificada en el medio de la cadena.
  > Si el valor es `"left"`, la cadena se dibuja comenzando en el valor especificado de `x`.
  > Y si `textAlign` es `"right"`, el texto se dibuja de tal manera que termina en la coordenada X especificada.
  >
  > (...)
  >
  > Opcionalmente, puedes proporcionar un cuarto parámetro que te permite especificar un ancho máximo para la cadena, en píxeles.
  > Si proporcionas este parámetro, el texto se comprime horizontalmente o escala (o se ajusta de otra manera) para caber dentro de un espacio de ese ancho al dibujarse.
  >
  > Puedes llamar al método **`fillText()`** para dibujar los caracteres de una cadena rellenos de color en lugar de solo dibujar los contornos de los caracteres.

- **Ejemplo de una introducción apropiada**: La siguiente sección proporciona una visión general mucho mejor para el método `strokeText()`.

  > El método **`strokeText()`** de {{domxref("CanvasRenderingContext2D")}}, parte de la [API Canvas 2D](/es/docs/Web/API/Canvas_API), traza (dibuja los contornos de) los caracteres de una cadena especificada, anclada en la posición indicada por las coordenadas X e Y dadas.
  > El texto se dibuja usando la {{domxref("CanvasRenderingContext2D.font", "fuente")}} actual del contexto, y se justifica y alinea de acuerdo con las propiedades {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}} y {{domxref("CanvasRenderingContext2D.direction", "direction")}}.
  >
  > Para obtener más detalles y ejemplos, consulta la sección [Texto](/es/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#texto) en la página Dibujo de gráficos, así como nuestro artículo principal sobre el tema, [Dibujo de texto](/es/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Usa un lenguaje inclusivo

MDN tiene un público amplio y diverso.
Animamos encarecidamente a mantener el texto lo más inclusivo posible.
Algunos términos, aunque no pretenden ser ofensivos, pueden alejar a los lectores de ciertos antecedentes, tales como:

- Evita usar los términos **master** y **slave** y en su lugar usa **main** y **replica**.
- Reemplaza **whitelist** y **blacklist** con **allowlist** y **denylist**.
- **Sanity** debe reemplazarse con **coherence**.
- En lugar de **dummy**, usa **placeholder**.
- No deberías necesitar usar los términos **crazy** y **insane** en la documentación; sin embargo, si surge el caso, considera usar **fantastic** en su lugar.

Evita los modismos figurados con representaciones de violencia o crueldad, que desencadenan a ciertos públicos y establecen el tono incorrecto para la documentación. Por ejemplo:

- En lugar de "matar dos pájaros de un tiro", usa "resolver dos problemas a la vez".
- En lugar de "azotar un caballo muerto", usa "insistir en el punto" o "dar vueltas en círculos".
- En lugar de "hay más de una forma de despellejar un gato", usa "hay más de una forma de hacer esto".

Es mejor usar un lenguaje neutral en cuanto al género en cualquier redacción donde el género sea irrelevante para el tema.
Por ejemplo, si estás hablando de las acciones de un hombre específico, usar "él"/"su" está bien; pero si el sujeto es una persona de cualquier género, "él"/"su" no es apropiado.

Veamos los siguientes ejemplos:

- **Incorrecto**: "Un cuadro de diálogo de confirmación pregunta al usuario si él quiere permitir que la página web haga uso de su cámara web."
- **Incorrecto**: "Un cuadro de diálogo de confirmación pregunta al usuario si ella quiere permitir que la página web haga uso de su cámara web."

Ambas versiones son específicas de género. Para corregir esto, usa pronombres neutrales en cuanto al género de la siguiente manera:

- **Correcto**: "Un cuadro de diálogo de confirmación pregunta al usuario si quieren permitir que la página web haga uso de su cámara web."

> [!NOTE]
> MDN Web Docs permite el uso del plural de tercera persona, comúnmente conocido como "'ellos' singular". Los pronombres neutrales en cuanto al género incluyen "ellos", "los", "su" y "suyo".

Otra opción es hacer que los usuarios sean plurales, así:

- **Correcto**: "Un cuadro de diálogo de confirmación pregunta a los usuarios si quieren permitir que la página web haga uso de sus cámaras web."

La mejor solución, por supuesto, es reescribir y eliminar los pronombres:

- **Correcto**: "Aparece un cuadro de diálogo de confirmación que solicita el permiso del usuario para acceder a la cámara web."
- **Correcto**: "Aparece un cuadro de diálogo de confirmación que pide al usuario permiso para usar la cámara web."

Este último ejemplo de cómo lidiar con el problema es posiblemente mejor.
No solo es gramaticalmente más correcto, sino que elimina parte de la complejidad asociada con lidiar con los géneros en diferentes idiomas que pueden tener reglas de género muy diferentes.
Esta solución puede facilitar la traducción tanto para los lectores como para los traductores.

### Usa un lenguaje accesible

Evita usar palabras espaciales y direccionales, como "arriba", "abajo", "izquierda", "derecha" o "aquí". Estos términos asumen un diseño visual específico, que puede no aplicarse a todos los usuarios. También pueden ser poco claros o engañosos, especialmente para los usuarios que dependen de lectores de pantalla o aquellos que leen contenido traducido, donde el lenguaje direccional puede ser ambiguo o difícil de traducir con precisión. En diseños responsivos, donde la posición del contenido puede cambiar según el tamaño de la pantalla, estas referencias direccionales pueden volverse inexactas. Este tipo de lenguaje puede obstaculizar la accesibilidad y dificultar que todos los usuarios naveguen o comprendan el contenido.

En su lugar, usa frases descriptivas que identifiquen claramente la sección, concepto o elemento al que se hace referencia. Haz referencia a las secciones por sus títulos o encabezados, y haz referencia a ejemplos o fragmentos de código por lo que demuestran o contienen.

Por ejemplo:

- **Correcto**: "Consulta la sección [Accesibilidad](/es/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accesibilidad) más adelante en esta página."
- **Incorrecto**: "Consulta la sección de Accesibilidad a continuación."

- **Correcto**: "En el siguiente ejemplo de código, animamos un círculo usando transiciones de CSS."
- **Incorrecto**: "En el ejemplo de código a continuación, animamos un círculo usando transiciones de CSS."

- **Correcto**: "Este concepto se explica en la sección anterior titulada Crear una consulta de medios."
- **Incorrecto**: "Este concepto se explica en la sección de arriba."

Además, evita usar texto de enlace vago como "Haz clic aquí" o "Lee este artículo". El texto de enlace descriptivo proporciona un mejor contexto para todos los lectores y mejora la experiencia para los usuarios de tecnologías de asistencia.

<!-- markdownlint-disable descriptive-link-text -->

- **Correcto**: "Aprende más sobre [cómo ordenar elementos flex](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Incorrecto**: "Haz clic [aquí](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) para aprender más."
- **Incorrecto**: "Lee [este artículo](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) para aprender más."

<!-- markdownlint-enable descriptive-link-text -->

Al seguir estas pautas, ayudas a que la documentación de MDN sea accesible, clara y utilizable para todos, independientemente de cómo accedan a la página.

### Escribe pensando en SEO

Si bien el objetivo principal de cualquier redacción en MDN Web Docs siempre debe ser explicar e informar sobre tecnología web abierta para que los desarrolladores puedan aprender rápidamente a hacer lo que quieren o encontrar los pequeños detalles que necesitan saber para perfeccionar su código, es importante que puedan _encontrar_ el material que escribimos. Podemos lograr esto manteniendo la Optimización de Motores de Búsqueda ({{Glossary("SEO")}}) en mente al escribir.

Esta sección cubre las prácticas estándar, las recomendaciones y los requisitos para el contenido para ayudar a garantizar que los motores de búsqueda puedan categorizar e indexar fácilmente nuestro material para asegurar que los lectores puedan encontrar fácilmente lo que necesitan. Las pautas de SEO incluyen asegurar que cada página en la que trabajan los escritores y editores esté razonablemente bien diseñada, escrita y marcada para dar a los motores de búsqueda el contexto y las pistas que necesitan para indexar correctamente los artículos.

La siguiente lista de verificación es buena para tener en cuenta al escribir y revisar contenido para ayudar a garantizar que la página y sus vecinas se indexarán correctamente por los motores de búsqueda:

- **Asegúrate de que las páginas no sean demasiado similares**: Si el contenido en diferentes páginas es similar textualmente, los motores de búsqueda asumirán que las páginas tratan sobre lo mismo incluso si no lo están.
  Por ejemplo, si una interfaz tiene las propiedades `width` y `height`, es fácil que el texto sea sorprendentemente similar en las dos páginas que documentan estas dos propiedades, con solo unas pocas palabras intercambiadas y usando el mismo ejemplo. Esto hace difícil que los motores de búsqueda sepan cuál es cuál, y terminan compartiendo el rango de página, lo que resulta que ambas sean más difíciles de encontrar de lo que deberían ser.

  Es importante, entonces, asegurar que cada página tenga su propio contenido. Las siguientes sugerencias pueden ayudarte a lograr esto:
  - **Explica más conceptos únicos**: Considera casos de uso donde podría haber más diferencias de lo que uno pensaría. Por ejemplo, en el caso de documentar las propiedades `width` y `height`, quizás podrías escribir sobre las formas en que el espacio horizontal y el espacio vertical se usan de manera diferente, y proporcionar una discusión sobre los conceptos apropiados. Quizás podrías mencionar el uso de `width` en términos de hacer espacio para una barra lateral, mientras usas `height` para manejar el desplazamiento vertical o los pies de página. Incluir información sobre problemas de accesibilidad también es una idea útil e importante.
  - **Usa ejemplos diferentes**: Los ejemplos en estas situaciones son a menudo incluso más similares que el texto del cuerpo porque los ejemplos pueden usar ambos (o todos) de los métodos o propiedades similares desde el principio, por lo que no requieren cambios reales cuando se reutilizan. Así que descarta el ejemplo y escribe uno nuevo, o al menos proporciona múltiples ejemplos, con al menos algunos de ellos diferentes.
  - **Agrega descripciones para los ejemplos**: Se debe incluir tanto una descripción general de lo que hace el ejemplo como una cobertura de cómo funciona, en un nivel apropiado de detalle dada la complejidad del tema y el público objetivo.
  - La forma más fácil de evitar ser demasiado similar es, por supuesto, escribir cada artículo desde cero si el tiempo lo permite.

- **Asegúrate de que las páginas no sean demasiado cortas**: Si el contenido en una página es demasiado poco (llamado "páginas delgadas" en la jerga de SEO), los motores de búsqueda no catalogarán dichas páginas con precisión (o en absoluto). Las páginas de contenido excesivamente cortas son difíciles de encontrar. Como principio rector, asegúrate de que las páginas en MDN Web Docs no sean más cortas de alrededor de 300 palabras más o menos. No inflames artificialmente una página, pero trata esta pauta como una longitud objetivo mínima cuando sea posible.

  Estas pautas básicas pueden ayudarte a crear páginas que tengan suficiente contenido para ser correctamente buscables sin recurrir a saturarlas con texto innecesario:
  - **Evita los esbozos**: Obviamente, si el artículo es un esbozo o falta contenido, agrégalo. Tratamos de evitar páginas de "esbozo" absolutas en MDN Web Docs, aunque existen, pero hay muchas páginas a las que les faltan grandes porciones de su contenido.
  - **Revisa la estructura de la página**: Revisa la página para asegurar que esté estructurada apropiadamente para su [tipo de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types). Asegúrate de que todas las secciones estén presentes y tengan contenido apropiado.
  - **Asegura la completitud**: Revisa las secciones para asegurar que no falte información. Asegúrate de que todos los parámetros estén listados y explicados. Asegúrate de que cualquier excepción esté cubierta; este es un lugar particularmente común donde falta contenido.
  - **Asegúrate de que todos los conceptos estén completamente desarrollados**: Es fácil dar una explicación rápida de algo, pero asegúrate de que se cubran todos los matices. ¿Hay casos especiales? ¿Hay restricciones conocidas que el lector podría necesitar saber?
  - **Agrega ejemplos**: Debe haber ejemplos que cubran todos los parámetros o al menos los parámetros (o propiedades, o atributos) que es probable que los usuarios del rango de principiante a intermedio usen, así como cualquiera avanzada que requiera explicación adicional. Cada ejemplo debe ir precedido de una descripción general de lo que hará el ejemplo, qué conocimiento adicional podría ser necesario para entenderlo, etc. Después del ejemplo (o intercalado entre partes del ejemplo) debe haber texto que explique cómo funciona el código. No escatimes en los detalles ni en el manejo de errores en los ejemplos. Ten en cuenta que los usuarios _copiarán y pegarán_ tu ejemplo para usarlo en sus propios proyectos, y tu código _terminará_ siendo usado en sitios de producción. Consulta nuestras [pautas de ejemplo de código](/es/docs/MDN/Writing_guidelines/Code_style_guide) para más información útil.
  - **Explica casos de uso**: Si hay casos de uso particularmente comunes para la característica que se está describiendo, ¡habla de ellos! En lugar de asumir que un usuario descubrirá que el método que se está documentando se puede usar para resolver un problema común de desarrollo, agrega realmente una sección sobre ese caso de uso con un ejemplo y texto que explique cómo funciona el ejemplo.
  - **Agrega información de imágenes**: Incluye texto `alt` apropiado en todas las imágenes y diagramas. Este texto, así como los títulos en las tablas y otras figuras, cuenta porque los robots no pueden rastrear imágenes, por lo que el texto `alt` le dice a los rastreadores de motores de búsqueda qué contenido contiene el medio incrustado.
    > [!NOTE]
    > No se recomienda incluir demasiadas palabras clave o palabras clave no relacionadas con la característica en un intento de manipular los rankings de los motores de búsqueda; este tipo de comportamiento es fácil de detectar y tiende a ser penalizado.
    > Del mismo modo, **no** agregues material repetitivo e inútil o blobs de palabras clave dentro de la página real, en un intento de mejorar el tamaño y el ranking de búsqueda de la página. Esto hace más daño que bien, tanto para la legibilidad del contenido como para nuestros resultados de búsqueda.

- **Enfócate en el contenido del tema**: Es mucho mejor escribir contenido en torno al tema de la página que una palabra clave específica. Es muy probable que haya muchas palabras clave que podrías incluir para un tema dado; de hecho, muchos expertos en SEO compilan una lista de 5-100 palabras clave diferentes (variando entre palabras clave cortas, medianas y de cola larga) para incluir dentro de su artículo, dependiendo de la longitud. Hacerlo diversificará tu redacción, lo que llevará a menos repetición.

## Estilo de redacción

Además de escribir oraciones gramaticalmente correctas en inglés, te recomendamos que sigas estas pautas para mantener el contenido coherente en MDN Web Docs.

- [Abreviaturas y acrónimos](#abreviaturas_y_acronimos)
- [Uso de mayúsculas](#uso_de_mayusculas)
- [Contracciones](#contracciones)
- [Números y numerales](#numeros_y_numerales)
- [Pluralización](#pluralizacion)
- [Apóstrofos y comillas](#apostrofos_y_comillas)
- [Comas](#comas)
- [Guiones](#guiones)
- [Ortografía](#ortografia)
- [Terminología](#terminologia)
- [Voz](#voz)

### Abreviaturas y acrónimos

Una abreviatura es una versión acortada de una palabra más larga, mientras que un acrónimo es una nueva palabra creada usando la primera letra de cada palabra de una frase. Esta sección describe las pautas para abreviaturas y acrónimos.

- **Expansiones**: En la primera mención de un término en una página, expande los acrónimos que es probable que los usuarios desconozcan. En caso de duda, expande el término. Aún mejor, vincúlalo al artículo o la entrada del [glosario](/es/docs/Glossary) que describe la tecnología.
  - **Correcto**: "XUL (XML User Interface Language) es el lenguaje basado en XML de Mozilla..."
  - **Incorrecto**: "XUL es el lenguaje basado en XML de Mozilla..."

- **Uso de mayúsculas y puntos**: Usa mayúsculas completas y elimina los puntos en todas las abreviaturas y acrónimos, incluyendo organizaciones como "US" y "UN".
  - **Correcto**: XUL
  - **Incorrecto**: X.U.L.; Xul

- **Abreviaturas latinas**: Puedes usar abreviaturas latinas comunes (etc., i.e., e.g.) en expresiones entre paréntesis y notas. Usa puntos en estas abreviaturas, seguidos de una coma u otra puntuación apropiada.

  <!-- markdownlint-disable search-replace -->
  - **Correcto**: Los navegadores web (p.ej., Firefox) pueden ser usados ...
  - **Incorrecto**: Los navegadores web p.ej. Firefox pueden ser usados ...
  - **Incorrecto**: Los navegadores web, p.ej. Firefox, pueden ser usados ...
  - **Incorrecto**: Los navegadores web, (ej: Firefox) pueden ser usados ...

  <!-- markdownlint-enable search-replace -->

  En el texto regular (es decir, texto fuera de notas o paréntesis), usa el equivalente en inglés de la abreviatura.
  - **Correcto**: ... navegadores web, y así sucesivamente.
  - **Incorrecto**: ... navegadores web, etc.

  - **Correcto**: Los navegadores web como Firefox pueden ser usados ...
  - **Incorrecto**: Los navegadores web p.ej., Firefox pueden ser usados ...

  La siguiente tabla resume los significados y equivalentes en inglés de las abreviaturas latinas:

  <!-- markdownlint-disable search-replace -->

  | Abreviatura | Latino           | Español                      |
  | ----------- | ---------------- | ---------------------------- |
  | cf.         | _confer_         | compara                      |
  | e.g.        | _exempli gratia_ | por ejemplo                  |
  | et al.      | _et alii_        | y otros                      |
  | etc.        | _et cetera_      | y así sucesivamente, y demás |
  | i.e.        | _id est_         | es decir, en otras palabras  |
  | N.B.        | _nota bene_      | nota bien                    |
  | P.S.        | _post scriptum_  | posdata                      |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Considera siempre si es verdaderamente beneficioso usar una abreviatura latina. Algunas de estas se usan tan raramente que muchos lectores las confundirán o no entenderán sus significados.
  >
  > Además, asegúrate de que _tú_ las uses correctamente si decides hacerlo. Por ejemplo, ten cuidado de no confundir "e.g." con "i.e.", lo cual es un error común.

- **Plurales de abreviaturas y acrónimos**: Para los plurales de abreviaturas y acrónimos, agrega _s_. No uses un apóstrofo. Nunca. Por favor.
  - **Correcto**: CD-ROMs
  - **Incorrecto**: CD-ROM's

- **"Versus", "vs." y "v."**: Si usas la contracción, "vs." se prefiere sobre "v." y se puede usar en encabezados. En el resto del texto, usa la forma escrita "versus".
  - **Correcto**: esto vs. aquello
  - **Incorrecto**: esto v. aquello
  - **Correcto**: esto versus aquello

### Uso de mayúsculas

Usa las reglas estándar de mayúsculas en inglés en el texto del cuerpo, y usa mayúsculas en "World Wide Web". Es aceptable usar minúsculas para "web" (usado solo o como modificador) e "internet".

> [!NOTE]
> Esta pauta es un cambio de una versión anterior de esta guía, por lo que puedes encontrar muchas instancias de "Web" e "Internet" en MDN.
> Siéntete libre de cambiarlas mientras haces otros cambios, pero editar un artículo solo para cambiar las mayúsculas no es necesario.

Las teclas del teclado deben usar mayúsculas estilo oración, no mayúsculas completas.
Por ejemplo, "<kbd>Enter</kbd>" no "<kbd>ENTER</kbd>".
La única excepción es que puedes usar "<kbd>ESC</kbd>" para abreviar la tecla "<kbd>Escape</kbd>".

Ciertas palabras siempre deben usar mayúsculas, como las marcas comerciales que incluyen letras mayúsculas o palabras que derivan del nombre de una persona (a menos que la palabra se esté usando dentro del código y la sintaxis del código requiera minúsculas).
Algunos ejemplos incluyen:

- Boolean (llamado así por el matemático y lógico inglés [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (una marca comercial de Oracle Corporation, siempre debe escribirse como marca comercial)
- Python, TypeScript, Django y otros nombres de lenguajes de programación y frameworks

Algunos nombres de herramientas y proyectos tienen sus propias reglas de mayúsculas de marca. Estos pueden requerir nombres que están todos en minúsculas ("npm" o "webpack"), todos en mayúsculas ("UNIX", "GNOME", "VIM"), o en mayúsculas y minúsculas ("TypeScript", "macOS" o "jQuery").

Las mayúsculas de marca del sitio web oficial o la documentación siempre deben usarse, incluso al principio de una oración. Si no te sientes cómodo con una oración que comienza con una letra minúscula, recomendamos reformular para evitar el problema. Por ejemplo, podrías decir "Puedes usar el gestor de paquetes npm para..." en lugar de "npm te permite...".

### Contracciones

Nuestro estilo de redacción tiende a ser informal, así que debes sentirte libre de usar contracciones (p.ej., "don't", "can't", "shouldn't"), si prefieres.

### Números y numerales

- **Comas**: En el texto en ejecución, usa comas solo en números de cinco dígitos y más grandes.
  - **Correcto**: 4000; 54,000
  - **Incorrecto**: 4,000; 54000

- **Fechas**: Para las fechas (sin incluir fechas en muestras de código), usa el formato "1 de enero de 1900".
  - **Correcto**: 24 de febrero de 1906
  - **Incorrecto**: 24 de febrero de 1906; 24 de febrero de 1906; 24/02/1906

  Alternativamente, puedes usar el formato AAAA/MM/DD.
  - **Correcto**: 1906/02/24
  - **Incorrecto**: 02/24/1906; 24/02/1906; 02/24/06

- **Décadas**: Usa el formato "1990s". No uses un apóstrofe.
  - **Correcto**: 1920s
  - **Incorrecto**: 1920's

- **Plurales de numerales**: Agrega "s". No uses un apóstrofe.
  - **Correcto**: 486s
  - **Incorrecto**: 486's

### Pluralización

Usa plurales estilo inglés, no las formas influenciadas por el latín o el griego.

- **Correcto**: syllabuses, octopuses
- **Incorrecto**: syllabi, octopi

### Apóstrofos y comillas

No uses comillas y apóstrofos "curvos". En MDN Web Docs, solo usamos comillas y apóstrofos rectos. Esto se debe a que necesitamos elegir uno u otro para mantener la coherencia. Si las comillas curvas o los apóstrofos llegan a los fragmentos de código, incluso los en línea, los lectores pueden copiarlos y pegarlos, esperando que funcionen (lo cual no harán).

- **Correcto**: Please don't use "curly quotes."
- **Incorrecto**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Comas

La siguiente lista describe algunas de las situaciones comunes donde necesitamos estar conscientes de las reglas de uso de la coma:

- **Después de cláusulas introductorias**: Una cláusula introductoria es una cláusula dependiente, generalmente encontrada al principio de una oración. Usa una coma después de una cláusula introductoria para separarla de la siguiente cláusula independiente.
  - Ejemplo 1:
    - **Correcto**: "In this example, you will learn how to use a comma."
    - **Incorrecto**: "In this example you will learn how to use a comma."
  - Ejemplo 2:
    - **Correcto**: "If you are looking for guidelines, refer to our writing style guide."
    - **Incorrecto**: "If you are looking for guidelines refer to our writing style guide."
  - Ejemplo 3:
    - **Correcto**: "On mobile platforms, you tend to get a numeric keypad for entering data."
    - **Incorrecto**: "On mobile platforms you tend to get a numeric keypad for entering data."

- **Antes de conjunciones**: La coma en serie (también conocida como "coma Oxford") es la coma que aparece antes de la conjunción en una serie de tres o más elementos. En MDN Web Docs, usamos la coma en serie. Las comas también separan cada elemento de la lista.
  - **Correcto**: "I will travel on trains, planes, and automobiles."
  - **Incorrecto**: "I will travel on trains, planes and automobiles."

  No uses coma antes de "and" y "or" en una lista que contiene dos elementos.
  - **Correcto**: "My dog is cute and smart."
  - **Incorrecto**: "My dog is cute, and smart."

  Usa coma antes de las conjunciones "and", "but" y "or" si unen dos cláusulas independientes. Sin embargo, si la oración se está volviendo muy larga o compleja con la conjunción, considera reescribirla como dos oraciones.
  - Ejemplo 1:
    - **Correcto**: "You can perform this step, but you need to pay attention to the file setting."
    - **Incorrecto**: "You can perform this step but you need to pay attention to the file setting."
  - Ejemplo 2:
    - **Correcto**: "My father is strict but loving."
    - **Incorrecto**: "My father is strict, but loving."

- **Antes de "that" y "which"**: Una cláusula restrictiva es esencial para el significado de la oración y no necesita comas para separarse del resto de la oración. Una cláusula restrictiva generalmente se introduce por "that" y **no debe** ir precedida de una coma.
  - **Correcto**: "We have put together a course that includes all the essential information you need to work towards your goal."
  - **Incorrecto**: "We have put together a course, that includes all the essential information you need to work towards your goal."

  Una cláusula no restrictiva proporciona información adicional y no es esencial para el significado de la oración. Una cláusula no restrictiva generalmente se introduce por "which" y debe ir precedida de una coma.
  - **Correcto**: "You write a policy, which is an allowed list of origins for each feature."
  - **Incorrecto**: "You write a policy which is an allowed list of origins for each feature."

- **Antes de "such as"**: Si "such as" es parte de una cláusula no restrictiva y el resto de la oración es una cláusula independiente, usa coma antes de "such as".
  - **Correcto**: "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **Incorrecto**: "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  El siguiente ejemplo muestra cuándo no usar una coma con "such as". En este caso, la cláusula que contiene "such as" es esencial para el significado de la oración.
  - **Correcto**: "Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets."
  - **Incorrecto**: "Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets."

### Guiones

Las palabras compuestas solo deben llevar guión cuando la última letra del prefijo es una vocal y es la misma que la primera letra de la raíz.

- **Correcto**: re-elect, co-op, email
- **Incorrecto**: reelect, coop, e&#45;mail

### Ortografía

Usa la ortografía del inglés americano.

En general, usa la primera entrada en [Dictionary.com](https://www.dictionary.com/), a menos que esa entrada esté listada como una variante ortográfica o como usada principalmente en una forma no americana del inglés.
Por ejemplo, si [buscas "behaviour"](https://www.dictionary.com/browse/behaviour) (con una _u_ adicional agregada a la forma estándar americana), encontrarás la frase "Chiefly British" seguida de un enlace a la forma estándar americana, ["behavior"](https://www.dictionary.com/browse/behavior).
No uses la ortografía variante.

<!-- cSpell:ignore localise behaviour colour -->

- **Correcto**: localize, behavior, color
- **Incorrecto**: localise, behaviour, colour

Tenemos [cSpell](https://cspell.org/) instalado para detectar errores ortográficos. Se ejecuta cada semana y genera [un informe de errores ortográficos](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) en el repositorio. También puedes ejecutarlo localmente usando el siguiente comando:

```bash
npm run lint:typos
```

En el repositorio, mantenemos varias listas de palabras, ubicadas en [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries), que contienen palabras sancionadas que no están en los diccionarios predeterminados. Puedes agregar más palabras a estas listas si son válidas pero reportadas por el corrector ortográfico. Lee [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json) para entender qué contiene cada diccionario y los detalles de nuestra configuración de verificación ortográfica.

### Terminología

Estas son nuestras recomendaciones para usar ciertos términos técnicos:

- **Elementos HTML**: Usa el término "elemento" para referirte a los elementos HTML y XML, en lugar de "etiqueta". Además, el elemento debe estar envuelto en corchetes angulares "<>" y debe estar estilizado usando comillas inversas (`` ` ``). Por ejemplo, usar \<input\> dentro de comillas inversas lo estilizará como `<input>` como se espera.
  - **Correcto**: el elemento `<span>`
  - **Incorrecto**: la etiqueta span

  En MDN, opcionalmente puedes especificar el elemento HTML en el [`HTMLElement` macro](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages), que lo estilizará, agregará los corchetes angulares "<>", así como agregará un enlace a su página de referencia.
  - **Usando comillas inversas**: `<span>`
  - **Usando la macro**: {{HTMLElement("span")}} (fuente en markdown: `\{{HTMLElement("span")}}`)

- **Parámetros vs. argumentos**: El término preferido en MDN Web Docs es **parámetros**. Por favor, evita el término "argumentos" para mantener la coherencia siempre que sea posible.

- **Acciones de la interfaz de usuario**: En secuencias de tareas, describe las acciones de la interfaz de usuario usando el modo imperativo. Identifica el elemento de la interfaz de usuario por su etiqueta y tipo.
  - **Correcto**: "Click the Edit button."
  - **Incorrecto**: "Click Edit."

### Voz

Aunque se prefiere la voz activa, la voz pasiva también es aceptable, dado el carácter informal de nuestro contenido.
Intenta ser coherente, sin embargo.

## Componentes de la página

Esta sección enumera las pautas a seguir para diferentes partes de cada página, como encabezados, notas, enlaces y ejemplos.

- [Ejemplos de código](#ejemplos_de_codigo)
- [Referencias cruzadas (vinculación)](#referencias_cruzadas_vinculacion)
- [Enlaces externos](#enlaces_externos)
- [URL acortadas (enlaces cortos)](#url_acortadas_enlaces_cortos)
- [Niveles de encabezado](#niveles_de_encabezado)
- [Imágenes y otros medios](#imagenes_y_otros_medios)
- [Listas](#listas)
- [Sección Véase también](#seccion_vease_tambien)
- [Subpáginas](#subpaginas)
- [Slugs](#slugs)
- [Títulos](#titulos)

### Ejemplos de código

Una página en MDN Web Docs puede contener más de un ejemplo de código. La siguiente lista presenta algunas prácticas recomendadas al escribir un ejemplo de código para MDN Web Docs:

- Cada pieza de código de ejemplo debe incluir:
  - **Encabezado**: Un encabezado corto `###` (`<h3>`) para describir el escenario que se demuestra a través del ejemplo de código. Por ejemplo, "Using offset printing" y "Reverting to style in previous layer".
  - **Descripción**: Una descripción corta que precede al código de ejemplo que indica las especificidades del ejemplo al que deseas llamar la atención del lector. Por ejemplo, "In the following example, two cascade layers are defined in the CSS, `base` and `special`."
  - **Explicación del resultado**: Una explicación después del código de ejemplo que describe el resultado y cómo funciona el código.
- En general, el ejemplo de código no solo debe demostrar la sintaxis de la característica y cómo se usa, sino también resaltar el propósito y las situaciones en las que un desarrollador web podría querer o necesitar usar la característica.
- Si estás trabajando con una pieza grande de código de ejemplo, puede tener sentido dividirla en partes lógicas más pequeñas para que puedan describirse individualmente.
- Al agregar [ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples), es útil estar consciente de que todos los bloques de código del ejemplo que tienen el mismo tipo (HTML, CSS y JavaScript) se concatenan antes de ejecutar el ejemplo. Esto te permite dividir el código en múltiples segmentos, cada uno opcionalmente con sus propias descripciones, encabezados, etc. Esto hace que documentar el código sea increíblemente potente y flexible.

Para aprender cómo estilizar o formatear ejemplos de código para MDN Web Docs, consulta nuestras [Pautas para estilizar ejemplos de código](/es/docs/MDN/Writing_guidelines/Code_style_guide).

### Referencias cruzadas (vinculación)

Al hacer referencia a otra página o sección de una página en MDN por su título, sigue el uso de mayúsculas estilo oración en el texto del enlace (coincide con el título de la página o sección). Usa el uso de mayúsculas estilo oración en el texto del enlace incluso si es diferente del título de la página o sección vinculada (podría ser que el uso de mayúsculas en el título de la página o sección sea incorrecto). No uses comillas alrededor del texto del enlace. Para referirte a una página en MDN por su título, usa el siguiente estilo:

- **Correcto**: "Refer to the [Ordering flex items](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) guide."
- **Incorrecto**: "Refer to the "[Ordering flex items](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" guide."

Sigue un estilo coherente al vincular a secciones dentro de una página:

- **Correcto**: "For more information, refer to the [Allocation in JavaScript](/es/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) section in the _Memory management_ guide."

Si la sección a la que te estás vinculando está en la misma página, puedes sugerir la ubicación de la sección usando frases descriptivas.

- **Correcto**: "This concept is described in more detail in the [Accessibility](/es/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accesibilidad) section of this document."
- **Incorrecto**: "This concept is described in more detail in the [Accessibility](/es/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accesibilidad) section below."

En MDN, otra forma de vincular a una página de referencia es usando una macro. Estas macros se describen en la página [Macros de uso común](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages). Por ejemplo, para vincular a la página de referencia de un elemento HTML, usa la macro `HTMLElement`, y para vincular a la página de referencia de una propiedad de CSS, usa la macro `CSSxRef`.

Seguimos pautas similares de referencia cruzada en las secciones [Véase también](#seccion_vease_tambien) al final de las páginas de referencia, páginas del glosario y guías.

### Enlaces externos

Los enlaces externos están permitidos en MDN Web Docs en situaciones específicas. Usa las pautas descritas en esta sección para decidir si es o no aceptable incluir un enlace externo en MDN Web Docs. Las solicitudes de incorporación de cambios que agreguen enlaces externos serán rechazadas si no siguen estas pautas.

Si estás considerando agregar un enlace externo al contenido [Aprender desarrollo web](/es/docs/Learn_web_development) de MDN, por favor también lee [Pautas de redacción de contenido de aprendizaje > Enlaces y recursos asociados](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

En general, si estás considerando agregar un enlace externo, necesitas asegurar que haya un riesgo mínimo de lo siguiente:

- Enlaces rotos o desactualizados
- Apariencia de respaldo, especialmente para productos o servicios comerciales
- Intento de usar MDN Web Docs para distribuir spam
- Enlaces cortos que ofuscan el destino del enlace

> [!NOTE]
> Antes de agregar un enlace externo, considera hacer referencias cruzadas dentro de MDN Web Docs. Los enlaces internos son más fáciles de mantener y hacen que la totalidad de MDN Web Docs sea más valiosa para los lectores.

- **Buenos enlaces externos**: Los buenos enlaces externos llevan a los lectores a recursos que son relevantes, duraderos y ampliamente confiables. Debes preferir agregar enlaces a contenido externo que sea:
  - Único o indispensable (p.ej., un IETF RFC)
  - Necesario para la atribución, cita o reconocimiento (p.ej., como parte de una atribución de Creative Commons)
  - Más probable que se mantenga para el tema que incorporar dicho contenido en MDN Web Docs mismo (p.ej., las notas de lanzamiento de un proveedor)
  - Código abierto o impulsado por la comunidad, como MDN Web Docs mismo

- **Malos enlaces externos**: Los malos enlaces externos carecen de relevancia, capacidad de mantenimiento, accesibilidad, o de otra manera ponen barreras a los lectores. Evita agregar enlaces a contenido externo que sea:
  - Genérico o no específico (p.ej., la página de inicio de un proveedor, en lugar de la documentación relacionada)
  - Efímero o no mantenido (p.ej., un anuncio de una sola vez)
  - Autovinculación o autopromoción (p.ej., el propio trabajo del autor fuera de MDN Web Docs)
  - De pago (p.ej., un curso costoso fuera del alcance de aficionados, estudiantes o lectores que viven en países de bajos ingresos)
  - Inaccesible (p.ej., un video sin subtítulos)

- **Enlaces que son autopromocionales o spam**: Si bien una publicación de blog personal, una charla de conferencia o un repositorio de GitHub tienen valor, vincular a tus propios recursos puede crear la apariencia de un conflicto de intereses. Piénsalo dos veces antes de vincular a recursos con los que tienes una relación comercial o personal.

  > [!NOTE]
  > Si tienes una relación comercial o personal con el destino de un enlace, debes divulgar esa relación en tu solicitud de incorporación de cambios. No hacerlo puede poner en peligro tu participación continua con MDN Web Docs.

  A veces dichos enlaces son relevantes y apropiados. Por ejemplo, si eres el editor de una especificación y estás contribuyendo a la documentación relacionada con esa especificación, entonces vincular a esa especificación se espera y es aceptable. Pero debes divulgar la relación entre tú y el enlace.

### URL acortadas (enlaces cortos)

Un acortador de URL (como TinyURL o Bitly) puede ser excelente para acortar enlaces largos en URL pequeñas y más fáciles de recordar (también conocidas como "enlaces cortos"). Sin embargo, también ofuscan el destino de la URL. Además, con ciertos acortadores, el destino puede cambiarse después de su creación, una característica que podría usarse para fines maliciosos.

No uses enlaces creados a través de acortadores de URL de terceros (generables por el usuario). Por ejemplo, si `https://myshort.link/foobar` es una URL corta generada por un usuario aleatorio y redirige a `https://example.com/somelongURL/details/show?page_id=foobar`, usa la URL más larga de `example.com`.

<!-- markdownlint-disable search-replace -->

Por otro lado, se fomentan los acortadores de primera parte que son mantenidos por las organizaciones que también mantienen las URL de destino. `https://bugzil.la` es propiedad y está operado por Mozilla y es un acortador de URL que redirige a `https://bugzilla.mozilla.org/`, que también es un dominio propiedad de Mozilla. En este caso, usa la URL más corta. Por ejemplo, usa `https://bugzil.la/1682349` en lugar de `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Niveles de encabezado

Cuando un nuevo párrafo comienza una nueva sección, se debe agregar un encabezado.
Usa estos niveles de encabezado markdown en orden descendente sin saltar niveles: `##`, luego `###`, y luego `####`; estos se traducen a las [etiquetas de encabezado HTML](/es/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` y `<h4>`, respectivamente.

`##` es el nivel más alto permitido porque `#` está reservado para el título de la página.
Recomendamos no agregar más de tres niveles de encabezados. Si sientes la necesidad de agregar el cuarto nivel de encabezado, considera dividir el artículo en varios artículos más pequeños con una página de aterrizaje. Alternativamente, considera presentar la información como puntos con viñetas para evitar usar un encabezado de nivel cuatro.

Ten en cuenta los siguientes "hacer" y "no hacer" mientras creas encabezados para subsecciones:

- **No crees subsecciones individuales.** No subdividas un tema en un solo subtema.
  O son dos subencabezados o más, o ninguno en absoluto.
- **No uses estilos en línea, clases o macros dentro de los encabezados.** Sin embargo, puedes usar comillas inversas para indicar términos de código (p.ej., "Using `FooBar` interface").
- **No crees "cabezas que chocan".** Estos son encabezados seguidos inmediatamente por un subencabezado, sin texto de contenido entre ellos.
  Esto no se ve bien y deja a los lectores sin ningún texto explicativo al comienzo de la sección externa.

### Imágenes y otros medios

Si incluyes imágenes u otros medios en una página, sigue estas pautas:

- Asegúrate de que la licencia del medio te permita usarlos. Intenta usar medios que tengan una licencia muy permisiva como [CC0](https://creativecommons.org/public-domain/cc0/) o al menos una que sea compatible con nuestra licencia de contenido general — [Licencia Creative Commons Atribución-CompartirIgual](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Para las imágenes, pásalas por <https://tinypng.com> o <https://imageoptim.com> para reducir el peso de la página.
- Para `SVG`, pasa el código por [SVGOMG](https://jakearchibald.github.io/svgomg/), y asegúrate de que el archivo `SVG` tenga una línea vacía al final del archivo.
- Cada imagen debe [incluir texto `alt` descriptivo](/es/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listas

Las listas deben formatearse y estructurarse de manera coherente en todas las páginas.
Los elementos individuales de la lista deben escribirse con puntuación adecuada, independientemente del formato de la lista.
Sin embargo, dependiendo del tipo de lista que estés creando, querrás ajustar tu redacción como se describe en las secciones que siguen. En ambos casos, incluye una oración introductoria que describa la información en la lista.

- **Listas con viñetas**: Las listas con viñetas deben usarse para agrupar piezas relacionadas de información concisa. Cada elemento de la lista debe seguir una estructura de oración similar. Las oraciones y frases (es decir, fragmentos de oración que carecen de un verbo o un sujeto o ambos) en las listas con viñetas deben incluir puntuación estándar; las oraciones terminan con puntos, las frases no.

  Si hay múltiples oraciones en un elemento de lista, debe aparecer un punto al final de cada oración, incluida la oración final del elemento, tal como se esperaría en un párrafo. Este es un ejemplo de una lista con viñetas correctamente estructurada:

  > En este ejemplo, debemos incluir:
  >
  > - Una condición, con una breve explicación.
  > - Una condición similar, con una breve explicación.
  > - Otra condición más, con alguna explicación adicional.

  Observa cómo la misma estructura de oración se repite de viñeta en viñeta. En este ejemplo, cada punto de viñeta establece una condición seguida de una coma y una breve explicación, y cada elemento de la lista termina con un punto.

  Si los elementos de la lista incluyen oraciones incompletas, no se requiere un punto al final. Por ejemplo:

  > Las siguientes propiedades relacionadas con el color serán útiles en este escenario:
  >
  > - propiedadA: Establece el color de fondo
  > - propiedadB: Agrega sombra al texto

  Si uno o más elementos de la lista son oraciones completas, usa un punto después de cada elemento de la lista, incluso si un elemento de la lista contiene tres o menos palabras. Sin embargo, en la medida de lo posible, sigue la misma estructura para todos los elementos de una lista; asegúrate de que todos los elementos de la lista sean oraciones completas o frases.

- **Listas numeradas**: Las listas numeradas se usan principalmente para enumerar pasos en un conjunto de instrucciones. Dado que las instrucciones pueden ser complejas, la claridad es una prioridad, especialmente si el texto en cada elemento de la lista es extenso. Al igual que con las listas con viñetas, sigue el uso estándar de puntuación. Este es un ejemplo de una lista numerada correctamente estructurada:

  > Para estructurar correctamente una lista numerada, debes:
  >
  > 1. Abrir con un encabezado o párrafo breve para introducir las instrucciones. Es importante proporcionar al usuario el contexto antes de comenzar las instrucciones.
  > 2. Comenzar a crear tus instrucciones, y mantener cada paso en su propio elemento numerado.
  >    Tus instrucciones pueden ser bastante extensas, por lo que es importante escribir con claridad y usar la puntuación correcta.
  > 3. Después de terminar tus instrucciones, sigue la lista numerada con un breve resumen de cierre o explicación sobre el resultado esperado al completar.

  Lo siguiente es un ejemplo de cómo escribir una explicación de cierre para la lista anterior:

  > Hemos creado una lista numerada corta que proporciona pasos instructivos para producir una lista numerada con el formato correcto.

  Observa cómo los elementos en las listas numeradas se leen como párrafos cortos. Dado que las listas numeradas se usan rutinariamente para fines instruccionales o para guiar a alguien a través de un procedimiento ordenado, asegúrate de mantener cada elemento enfocado: un elemento numerado por paso.

### Sección Véase también

La mayoría de las guías, páginas de referencia e incluso páginas del glosario en MDN Web Docs contienen una sección _Véase también_ al final del artículo. Esta sección contiene [referencias cruzadas](#referencias_cruzadas_vinculacion) a temas relacionados dentro de MDN y, a veces, enlaces a artículos externos relacionados. Por ejemplo, esta es la [sección Véase también](/es/docs/Web/CSS/Reference/At-rules/@layer#see_also) para la página `@layer`.

En general, presenta los enlaces en una sección Véase también en formato de [lista con viñetas](#listas) con cada elemento de la lista como una frase. Sin embargo, en la sección [Aprender desarrollo web](/es/docs/Learn_web_development) de MDN, la sección Véase también sigue el formato de [lista de definiciones](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists).

Para mantener la coherencia en MDN Web Docs, ten en cuenta las siguientes pautas al agregar o actualizar una sección Véase también.

#### Texto del enlace

- El texto del enlace debe ser el mismo que el título de la página o la sección a la que se está vinculando. Por ejemplo, el texto del enlace a esta página [ARIA](/es/docs/Web/Accessibility/ARIA/Reference/Attributes) con el título de página "ARIA states and properties" será:
  - **Correcto**: [ARIA states and properties](/es/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Usa el uso de mayúsculas estilo oración en el texto del enlace incluso si es diferente del título de la página o sección vinculada. Podría ser que el uso de mayúsculas en el título de la página o sección sea incorrecto. Por ejemplo, el texto del enlace a la página [Quirks Mode](/es/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) en mayúsculas de oración correctas será:
  - **Correcto**: [Quirks mode](/es/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Para los enlaces externos también, usa mayúsculas de oración incluso si el uso de mayúsculas en la página del artículo de destino es diferente. Esto es para asegurar la coherencia en MDN Web Docs. Las excepciones incluyen nombres de libros.
- En MDN, opcionalmente puedes usar una macro para vincular a una página, como se explica en la sección [Vincular a páginas de referencia](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) en la página _Macros de uso común_. El uso de la macro agregará formato de código a la palabra clave en el texto del enlace, como se muestra en el siguiente ejemplo.
- No se necesita ningún artículo ("Un", "Una", "El", "La") al comienzo del elemento de la lista de enlaces. No se requiere puntuación al final del elemento de la lista porque invariablemente será un término o una frase.
  - **Correcto**: {{cssxref("revert-layer")}}
  - **Incorrecto**: The {{cssxref("revert-layer")}} keyword.
  - **Correcto**: [HTML DOM API](/es/docs/Web/API/HTML_DOM_API)
  - **Incorrecto**: The [HTML DOM API](/es/docs/Web/API/HTML_DOM_API)
- Como se muestra en los ejemplos anteriores, agrega formato de código usando comillas inversas (`` ` ``) a las palabras clave y literales en el texto del enlace, aunque el formato no se use en los títulos de página y sección. Por ejemplo, para el título de página "Array() constructor", el texto del enlace será [`Array()` constructor](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Texto descriptivo

- Mantén el texto descriptivo que rodea el enlace al mínimo. En caso de una descripción, agrégala después del texto del enlace y dos puntos. Redacta la descripción como una frase sin puntuación final. Mantén todo el texto vinculado al principio para ayudar a escanear la lista de enlaces.
  - **Correcto**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: Selectores CSS para estilizar casillas de verificación
- No uses la conjunción "y" antes del último elemento de la serie.
  - **Correcto**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Otras propiedades relacionadas con el color
- Para los enlaces externos, trata de especificar el sitio web de origen y el año de publicación o última actualización (entre paréntesis) siempre que sea factible y apropiado. Proporcionar esta información por adelantado da a los lectores una idea clara del destino que alcanzarán al hacer clic en el enlace. La fecha de publicación o última actualización guía a los lectores para evaluar la relevancia del artículo vinculado y también ayuda a los mantenedores de MDN a revisar los enlaces a artículos que no se han actualizado en mucho tiempo. Si proporcionas un enlace a un artículo en Wikipedia, por ejemplo, puedes ignorar la fecha de publicación/actualización. El siguiente elemento de la lista es un ejemplo de agregar un enlace al artículo externo [Top-level await](https://v8.dev/features/top-level-await) en la sección Véase también, junto con la información de origen y año:
  - **Correcto**: [Top-level await](https://v8.dev/features/top-level-await) en v8.dev (2019)
- Para los enlaces externos a libros, también puedes proporcionar los nombres de los autores. Se enumeran algunos ejemplos en la sección [Lectura adicional](#idioma_gramatica_y_ortografia). Abstente de agregar nombres de autores para publicaciones de blog o repositorios de GitHub a los que puedas vincular.

#### Orden de los enlaces

- Lista los enlaces a las páginas de MDN en el orden de páginas de referencia primero, seguidos de enlaces a las guías y páginas de tutoriales relacionados. Este orden sugerido es principalmente para ayudar en la capacidad de escaneo de los elementos de la lista.
- Si la lista es una mezcla de enlaces internos y externos, primero lista los enlaces internos y luego los externos.
- Dentro de cada grupo de enlaces internos y externos, sigue el orden alfabético o de simple a avanzado, lo que tenga más sentido para el contexto.

### Subpáginas

Cuando necesites agregar algunos artículos sobre un tema o área temática, generalmente lo harás creando una página de aterrizaje, luego agregando subpáginas para cada uno de los artículos individuales.
La página de aterrizaje debe abrirse con un párrafo o dos que describan el tema o la tecnología, luego proporcionar una lista de las subpáginas con descripciones de cada página.
Puedes automatizar la inserción de páginas en la lista usando algunas macros que hemos creado.

Por ejemplo, considera la guía [JavaScript](/es/docs/Web/JavaScript), que está estructurada de la siguiente manera:

- [JavaScript/Guide](/es/docs/Web/JavaScript/Guide) – Página principal de la tabla de contenidos
- [JavaScript/Guide/JavaScript Overview](/es/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/es/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Intenta evitar poner tu artículo en la parte superior de la jerarquía, lo que ralentiza el sitio y hace que la búsqueda y la navegación por el sitio sean menos efectivas.

### Slugs

El título de la página, que se muestra en la parte superior de la página, puede ser diferente del "slug" de la página, que es la porción de la URL de la página que sigue a `<locale>/docs/`. Ten en cuenta las siguientes pautas al definir un slug:

- Los slugs deben mantenerse cortos. Al crear un nuevo nivel de jerarquía, el componente del nuevo nivel en el slug debe ser solo una o dos palabras.
- Los slugs deben usar un guión bajo para un componente de varias palabras, como `Basic_HTML_syntax` en `/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Sigue el uso de mayúsculas estilo oración en los slugs también para cada componente, como `Basic_HTML_syntax` en el ejemplo anterior.

### Títulos

Los títulos de página se usan en los resultados de búsqueda y también se usan para estructurar la jerarquía de la página en la lista de migas de pan en la parte superior de la página. Un título de página puede ser diferente del "slug" de la página, como se explica en la sección [Slugs](#slugs).

Ten en cuenta las siguientes pautas al escribir títulos:

- **Estilo de mayúsculas**: En MDN Web Docs, los títulos de página y los encabezados de sección deben usar mayúsculas estilo oración (solo poner en mayúscula la primera palabra y los sustantivos propios) en lugar de mayúsculas estilo titular:
  - **Correcto**: "A new method for creating JavaScript rollovers"
  - **Incorrecto**: "A New Method for Creating JavaScript Rollovers"

  Tenemos muchas páginas antiguas que se escribieron antes de que se estableciera esta regla de estilo. Siéntete libre de actualizarlas según sea necesario si lo deseas. Gradualmente estamos llegando a ellas.

- **Pautas generales**: Decidir qué quieres documentar y cómo estructurarás ese contenido es uno de los primeros pasos en la redacción. Escribir una tabla de contenidos puede ayudarte a decidir cómo quieres ordenar la información. Cubre conceptos simples primero y luego pasa a conceptos más complicados y avanzados. Cubre información conceptual primero y luego pasa a temas orientados a la acción.

  Ten en cuenta las siguientes pautas al escribir títulos para una página y secciones o subsecciones:
  - **Ve de mayor a menor**: Como se indica en la sección [Niveles de encabezado](#niveles_de_encabezado), ve de `##` más alto a `####` más bajo, sin saltar niveles. Usa encabezados de nivel más alto para títulos introductorios más amplios, y usa títulos más específicos a medida que avanzas a encabezados de nivel más bajo.
  - **Agrupa lógicamente**: Asegúrate de que todas las subsecciones relacionadas se agrupen lógicamente bajo un encabezado de nivel más alto. Nombrar los títulos de varias secciones puede ayudarte en este ejercicio.
  - **Mantén los títulos cortos**: Los títulos más cortos son más fáciles de escanear en el texto y en la tabla de contenidos.
  - **Mantén los títulos específicos**: Usa el título para transmitir la información específica que se cubrirá en la sección. Por ejemplo, para una sección que introduce elementos HTML, usa el título "HTML elements" en lugar de "Introduction" o "Overview".
  - **Mantén los títulos enfocados**: Usa el título para transmitir un objetivo: una sola idea o concepto que se cubrirá en esa sección. Para ese propósito, en la medida de lo posible, intenta no usar la conjunción "y" en un título.
  - **Usa construcción paralela**: Usa un lenguaje similar para los títulos en el mismo nivel de encabezado. Por ejemplo, si un título de nivel de encabezado `###` usa gerundios, es decir, palabras que terminan en "-ing", como "Installing", entonces intenta escribir todos los títulos en ese nivel de encabezado usando gerundios. Si un título comienza con un verbo imperativo, como "Use", "Configure", entonces escribe todos los títulos en ese nivel de encabezado comenzando con un verbo imperativo.
  - **Evita el término común en el encabezado de nivel inferior**: No repitas el texto en el título de un encabezado de nivel superior en los títulos de nivel inferior. Por ejemplo, en una sección titulada "Commas", nombra el título de una subsección "After introductory clauses" en lugar de "Commas after introductory clauses".
  - **No comiences con artículo**: Evita comenzar títulos con artículos "a", "an" o "the".
  - **Agrega información introductoria**: Después de un título, agrega algo de texto introductorio para explicar lo que se cubrirá en la sección.

## Véase también

- [Pautas para escribir ejemplos de código](/es/docs/MDN/Writing_guidelines/Code_style_guide)
- [Pautas para escribir ejemplos de código HTML](/es/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Pautas para escribir ejemplos de código CSS](/es/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Pautas para escribir ejemplos de código JavaScript](/es/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Pautas para escribir ejemplos de código de línea de comandos](/es/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Lectura adicional

### Otras guías de estilo

Si tienes preguntas sobre el uso y el estilo no cubiertos en esta guía, recomendamos consultar la [Guía de estilo de redacción de Microsoft](https://learn.microsoft.com/en-us/style-guide/welcome/) o el [Manual de estilo de Chicago](https://www.chicagomanualofstyle.org/).

### Idioma, gramática y ortografía

Si estás interesado en mejorar tus habilidades de redacción y edición, puedes encontrar los siguientes recursos útiles.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) en brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) en english.stackexchange.com: Sitio de preguntas y respuestas sobre el uso del idioma inglés
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) en google.com/books (publicado 2002): Consejos basados en evidencia, académicos pero fáciles de usar; muy buenos para hablantes no nativos, especialmente para el uso de preposiciones
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) por William Zinsser en harpercollins.com (publicado 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) por Joseph Williams y Gregory Colomb en google.com/books (publicado 2019)

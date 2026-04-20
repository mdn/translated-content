---
title: Guía de estilo de escritura
short-title: Estilo de escritura
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: a886ef3867e01df856ed9b49b3b6856232cc8c75
---

Esta guía de estilo de escritura describe cómo debe escribirse, organizarse, deletrear y formatearse el contenido en MDN Web Docs.

Estas directrices son para garantizar la coherencia del idioma y el estilo en todo el sitio web. Dicho esto, estamos más interesados en el contenido que en su formato, así que no se sienta obligado a aprender toda la guía de estilo de escritura antes de colaborar. Sin embargo, no se moleste ni se sorprenda si otro colaborador edita su trabajo más tarde para que se ajuste a esta guía. Las revisoras también pueden remitirla a esta guía de estilo cuando envíe una solicitud de extracción de contenido.

> [!NOTE]
> Los aspectos lingüísticos de esta guía se aplican principalmente a la documentación en inglés. Otros idiomas pueden tener (y se les invita a crear) sus propias guías de estilo. Estas deben publicarse como subpáginas de la página del equipo de localización correspondiente. Sin embargo, esta guía todavía debe consultarse para formatear y organizar el contenido.

Después de enumerar las directrices generales de escritura, esta guía describe el estilo de escritura recomendado para MDN Web Docs y luego cómo formatear diferentes componentes en una página, como listas y títulos.

## Directrices generales de escritura

El objetivo es escribir páginas que incluyan toda la información que las lectoras puedan necesitar para comprender el tema en cuestión.

Las siguientes subsecciones proporcionan las recomendaciones para lograr esto:

- [Considere su audiencia objetivo](#considere_su_audiencia_objetivo)
- [Considere las tres C de la escritura](#considere_las_tres_c_de_la_escritura)
- [Incluya ejemplos relevantes](#incluya_ejemplos_relevantes)
- [Proporcione una introducción descriptiva](#proporcione_una_introducción_descriptiva)
- [Use lenguaje inclusivo](#use_lenguaje_inclusivo)
- [Escriba con SEO en mente](#escriba_con_seo_en_mente)

### Considere su audiencia objetivo

Tenga en cuenta la audiencia objetivo del contenido que está escribiendo. Por ejemplo, una página sobre técnicas avanzadas de red probablemente no necesita entrar en tanto detalle sobre los conceptos básicos de redes como la página típica sobre redes. Tenga en cuenta que estas son directrices. Algunos de estos consejos pueden no aplicarse en todos los casos.

### Considere las tres C de la escritura

Las tres C de una buena escritura son escribir con claridad, concisión y coherencia.

- **Claro**: Asegúrese de que su escritura sea clara y sencilla. En general, use voz activa y pronombres inequívocos. Escriba oraciones cortas, ceñirse a una idea por oración. Defina nuevos términos, teniendo en cuenta la audiencia objetivo, antes de usarlos.
- **Conciso**: Al escribir cualquier documento, es importante saber cuánto decir. Si proporciona detalles excesivos, la página se vuelve tediosa de leer y rara vez se usará.
- **Coherente**: Asegúrese de usar la misma terminología de manera coherente en toda la página y en varias páginas.

### Incluya ejemplos relevantes

En general, agregue ejemplos o escenarios de la vida real para explicar mejor el contenido que está escribiendo. Esto ayuda a las lectoras a comprender la información conceptual y procedimental de una manera más tangible y práctica.

Debe usar ejemplos para aclarar para qué se usa cada parámetro y para aclarar cualquier caso límite que pueda existir.
También puede usar ejemplos para demostrar soluciones para tareas comunes y soluciones para problemas que puedan surgir.

### Proporcione una introducción descriptiva

Asegúrese de que el párrafo(s) inicial antes del primer encabezado resuma adecuadamente la información que cubrirá la página y quizás lo que las lectoras podrán lograr después de pasar por el contenido. De esta manera, una lectora puede determinar rápidamente si la página es relevante para sus inquietudes y resultados de aprendizaje deseados.

En una guía o tutorial, el párrafo(s) introductorio debe informar a la lectora sobre los temas que se cubrirán, así como el conocimiento previo que se espera que tenga la lectora, si lo hay. El párrafo de apertura debe mencionar las tecnologías y/o API que se están documentando o discutiendo, con enlaces a la información relacionada, y debe ofrecer pistas sobre situaciones en las que el contenido del artículo podría ser útil.

- **Ejemplo de introducción corta**: Este ejemplo de una introducción es demasiado corto. Deja fuera demasiada información, como qué significa exactamente "trazar" (stroke) texto, dónde se dibuja el texto, etc.

  > **`CanvasRenderingContext2D.strokeText()`** dibuja una cadena.

- **Ejemplo de introducción larga**: Este ejemplo tiene una introducción actualizada, pero ahora es demasiado larga.
  Se incluye demasiado detalle y el texto entra en demasiada profundidad al describir otros métodos y propiedades.
  En su lugar, la introducción debe centrarse en el método `strokeText()` y debe referirse a las guías apropiadas donde se describen los otros detalles.

  > Cuando se llama, el método de la API de Canvas 2D **`CanvasRenderingContext2D.strokeText()`** traza los caracteres de la cadena especificada comenzando en las coordenadas especificadas, usando el color del bolígrafo actual.
  > En la terminología de los gráficos por computadora, "trazar" (stroke) texto significa dibujar los contornos de los glifos en la cadena sin rellenar el contenido de cada carácter con color.
  >
  > El texto se dibuja usando la fuente actual del contexto como se especifica en la propiedad {{domxref("CanvasRenderingContext2D.font", "font")}} del contexto.
  >
  > La colocación del texto en relación con las coordenadas especificadas está determinada por las propiedades `textAlign`, `textBaseline` y `direction` del contexto.
  > `textAlign` controla la colocación de la cadena en relación con la coordenada X especificada; si el valor es `"center"`, entonces la cadena se dibuja comenzando en `x - (stringWidth / 2)`, colocando la coordenada X especificada en el medio de la cadena.
  > Si el valor es `"left"`, la cadena se dibuja comenzando en el valor especificado de `x`.
  > Y si `textAlign` es `"right"`, el texto se dibuja de modo que termine en la coordenada X especificada.
  >
  > (…)
  >
  > Opcionalmente, puede proporcionar un cuarto parámetro que le permite especificar un ancho máximo para la cadena, en píxeles.
  > Si proporciona este parámetro, el texto se comprime horizontalmente o se escala (o se ajusta de otra manera) para ajustarse a un espacio de ese ancho cuando se dibuja.
  >
  > Puede llamar al método **`fillText()`** para dibujar los caracteres de una cadena como rellenos con color en lugar de solo dibujar los contornos de los caracteres.

- **Ejemplo de una introducción apropiada**: La siguiente sección proporciona una visión general mucho mejor para el método `strokeText()`.

  > El método {{domxref("CanvasRenderingContext2D")}} **`strokeText()`**, parte de la [API de Canvas 2D](/es/docs/Web/API/Canvas_API), traza (dibuja los contornos de) los caracteres de una cadena especificada, anclada en la posición indicada por las coordenadas X e Y dadas.
  > El texto se dibuja usando la {{domxref("CanvasRenderingContext2D.font", "fuente")}} actual del contexto, y se justifica y alinea según las propiedades {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}} y {{domxref("CanvasRenderingContext2D.direction", "direction")}}.
  >
  > Para obtener más detalles y ejemplos, consulte la sección [Texto](/es/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) en la página Dibujo de gráficos, así como nuestro artículo principal sobre el tema, [Dibujar texto](/es/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Use lenguaje inclusivo

MDN tiene una audiencia amplia y diversa.
Recomendamos encarecidamente mantener el texto lo más inclusivo posible.
Algunos términos, aunque no pretenden ser ofensivos, pueden alienar a lectoras de ciertos antecedentes, tales como:

- Evite usar los términos **master** y **slave** y en su lugar use **main** y **replica**.
- Reemplace **whitelist** y **blacklist** con **allowlist** y **denylist**.
- **Sanity** debe reemplazarse con **coherence**.
- En lugar de **dummy**, use **placeholder**.
- No debería necesitar usar los términos **crazy** e **insane** en la documentación; sin embargo, si surge el caso, considere usar **fantastic** en su lugar.

Evite modismos figurados con representaciones de violencia o crueldad, que desencadenan a ciertas audiencias y establecen el tono incorrecto para la documentación. Por ejemplo:

- En lugar de "matar dos pájaros de un tiro", use "resolver dos problemas a la vez".
- En lugar de "azotar un caballo muerto", use "insistir en el punto" o "dar vueltas en círculos".
- En lugar de "hay más de una forma de despellejar un gato", use "hay más de una forma de hacer esto".

Es mejor usar un lenguaje neutral en términos de género en cualquier escritura donde el género sea irrelevante para el tema.
Por ejemplo, si está hablando de las acciones de un hombre específico, usar "él"/"su" está bien; pero si el sujeto es una persona de cualquier género, "él"/"su" no es apropiado.

Veamos los siguientes ejemplos:

- **Incorrecto**: "Un cuadro de diálogo de confirmación pregunta al usuario si él quiere permitir que la página web haga uso de su webcam."
- **Incorrecto**: "Un cuadro de diálogo de confirmación pregunta al usuario si ella quiere permitir que la página web haga uso de su webcam."

Ambas versiones son específicas de género. Para corregir esto, use pronombres neutrales en términos de género así:

- **Correcto**: "Un cuadro de diálogo de confirmación pregunta al usuario si ellos quieren permitir que la página web haga uso de su webcam."

> [!NOTE]
> MDN Web Docs permite el uso del plural de tercera persona, comúnmente conocido como "'ellos' singular". Los pronombres neutrales en términos de género incluyen "they", "them", "their" y "theirs" (en inglés).

Otra opción es hacer que los usuarios sean plurales, así:

- **Correcto**: "Un cuadro de diálogo de confirmación pregunta a los usuarios si ellos quieren permitir que la página web haga uso de sus webcams."

La mejor solución, por supuesto, es reescribir y eliminar los pronombres:

- **Correcto**: "Aparece un cuadro de diálogo de confirmación que solicita el permiso del usuario para acceder a la webcam."
- **Correcto**: "Aparece un cuadro de diálogo de confirmación que pregunta al usuario por permiso para usar la webcam."

Este último ejemplo para lidiar con el problema es posiblemente mejor.
No solo es gramaticalmente más correcto, sino que elimina parte de la complejidad asociada con lidiar con géneros en diferentes idiomas que pueden tener reglas de género muy diferentes.
Esta solución puede facilitar la traducción tanto para las lectoras como para las traductoras.

### Use lenguaje accesible

Evite usar palabras espaciales y direccionales, como "arriba", "abajo", "izquierda", "derecha" o "aquí". Estos términos asumen un diseño visual específico, que puede no aplicarse a todas las usuarias. También pueden ser confusos o engañosos, especialmente para las usuarias que dependen de lectores de pantalla o aquellas que leen contenido traducido, donde el lenguaje direccional puede ser ambiguo o difícil de traducir con precisión. En diseños responsivos, donde la posición del contenido puede cambiar según el tamaño de la pantalla, estas referencias direccionales pueden volverse inexactas. Este tipo de lenguaje puede dificultar la accesibilidad y hacer que sea más difícil para todas las usuarias navegar o comprender el contenido.

En su lugar, use frases descriptivas que identifiquen claramente la sección, concepto o elemento al que se hace referencia. Refiérase a las secciones por sus títulos o encabezados, y refiérase a los ejemplos o fragmentos de código por lo que demuestran o contienen.

Por ejemplo:

- **Correcto**: "Consulte la sección [Accesibilidad](/es/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) más adelante en esta página."
- **Incorrecto**: "Consulte la sección de Accesibilidad a continuación."

- **Correcto**: "En el siguiente ejemplo de código, animamos un círculo usando transiciones de CSS."
- **Incorrecto**: "En el ejemplo de código a continuación, animamos un círculo usando transiciones de CSS."

- **Correcto**: "Este concepto se explica en la sección anterior titulada Crear una consulta de medios."
- **Incorrecto**: "Este concepto se explica en la sección de arriba."

Además, evite usar texto de enlace vago como "Haga clic aquí" o "Lea este artículo". El texto de enlace descriptivo proporciona un mejor contexto para todas las lectoras y mejora la experiencia para las usuarias de tecnologías de asistencia.

- **Correcto**: "Obtenga más información sobre [cómo ordenar elementos flex](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Incorrecto**: "Haga clic [aquí](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) para obtener más información."
- **Incorrecto**: "Lea [este artículo](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) para obtener más información."

Al seguir estas directrices, ayuda a que la documentación de MDN sea accesible, clara y utilizable para todos, independientemente de cómo accedan a la página.

### Escriba con SEO en mente

Si bien el objetivo principal de cualquier escritura en MDN Web Docs siempre debe ser explicar e informar sobre la tecnología web abierta para que las desarrolladoras puedan aprender rápidamente a hacer lo que quieren o encontrar los pequeños detalles que necesitan saber para perfeccionar su código, es importante que puedan _encontrar_ el material que escribimos. Podemos lograr esto teniendo en mente la optimización de motores de búsqueda ({{Glossary("SEO")}}) mientras escribimos.

Esta sección cubre las prácticas estándar, recomendaciones y requisitos para el contenido para ayudar a garantizar que los motores de búsqueda puedan categorizar e indexar fácilmente nuestro material para garantizar que las lectoras puedan encontrar fácilmente lo que necesitan. Las directrices de SEO incluyen garantizar que cada página en la que trabajan las autoras y editoras esté razonablemente bien diseñada, escrita y marcada para dar a los motores de búsqueda el contexto y las pistas que necesitan para indexar correctamente los artículos.

La siguiente lista de verificación es buena para tener en mente mientras escribe y revisa el contenido para ayudar a garantizar que la página y sus vecinas se indexarán correctamente por los motores de búsqueda:

- **Asegúrese de que las páginas no sean demasiado similares**: Si el contenido en diferentes páginas es similar textualmente, los motores de búsqueda asumirán que las páginas tratan sobre lo mismo incluso si no lo están.
  Por ejemplo, si una interfaz tiene las propiedades `width` y `height`, es fácil que el texto sea sorprendentemente similar en las dos páginas que documentan estas dos propiedades, con solo algunas palabras intercambiadas y usando el mismo ejemplo. Esto hace que sea difícil para los motores de búsqueda saber cuál es cuál, y terminan compartiendo el rango de página, lo que resulta que ambas sean más difíciles de encontrar de lo que deberían ser.

  Es importante, entonces, asegurarse de que cada página tenga su propio contenido. Las siguientes sugerencias pueden ayudarlo a lograrlo:
  - **Explique más conceptos únicos**: Considere casos de uso donde podría haber más diferencias de lo que uno pensaría. Por ejemplo, en el caso de documentar las propiedades `width` y `height`, quizás podría escribir sobre las formas en que el espacio horizontal y el espacio vertical se usan de manera diferente, y proporcionar una discusión sobre los conceptos apropiados. Quizás pueda mencionar el uso de `width` en términos de hacer espacio para una barra lateral, mientras que usa `height` para manejar el desplazamiento vertical o los pies de página. Incluir información sobre problemas de accesibilidad también es una idea útil e importante.
  - **Use diferentes ejemplos**: Los ejemplos en estas situaciones a menudo son incluso más similares que el texto del cuerpo porque los ejemplos pueden usar ambos (o todos) los métodos o propiedades similares desde el principio, lo que por lo tanto no requiere cambios reales cuando se reutilizan. Así que descarte el ejemplo y escriba uno nuevo, o al menos proporcione múltiples ejemplos, con al menos algunos de ellos diferentes.
  - **Agregue descripciones para los ejemplos**: Tanto una descripción general de lo que hace el ejemplo como una cobertura de cómo funciona, en un nivel apropiado de detalle dada la complejidad del tema y la audiencia objetivo, deben incluirse.

  La forma más fácil de evitar ser excesivamente similar es, por supuesto, escribir cada artículo desde cero si el tiempo lo permite.

- **Asegúrese de que las páginas no sean demasiado cortas**: Si el contenido en una página es demasiado poco (llamadas "páginas delgadas" en la jerga de SEO), los motores de búsqueda no catalogarán tales páginas con precisión (o en absoluto). Las páginas de contenido excesivamente cortas son difíciles de encontrar. Como principio rector, asegúrese de que las páginas en MDN Web Docs no sean más cortas de unas 300 palabras aproximadamente. No infle artificialmente una página, pero trate esta directriz como una longitud objetivo mínima cuando sea posible.

  Estas directrices básicas pueden ayudarlo a crear páginas que tengan suficiente contenido para ser correctamente buscables sin recurrir a saturarlas con texto innecesario:
  - **Evite borradores**: Obviamente, si el artículo es un borrador o falta contenido, agréguelo. Intentamos evitar páginas de "borrador" directas en MDN Web Docs, aunque existen, pero hay muchas páginas a las que les falta grandes porciones de su contenido.
  - **Revise la estructura de la página**: Revise la página para asegurarse de que esté estructurada correctamente para su [tipo de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types). Compruebe para asegurarse de que todas las secciones estén presentes y tengan contenido apropiado.
  - **Asegúrese de la exhaustividad**: Revise las secciones para asegurarse de que no falte información. Asegúrese de que todos los parámetros estén listados y explicados. Asegúrese de que se cubran todas las excepciones; este es un lugar particularmente común donde falta contenido.
  - **Asegúrese de que todos los conceptos estén completamente desarrollados**: Es fácil dar una explicación rápida de algo, pero asegúrese de que se cubran todos los matices. ¿Hay casos especiales? ¿Hay restricciones conocidas que la lectora pueda necesitar saber?
  - **Agregue ejemplos**: Debe haber ejemplos que cubran todos los parámetros o al menos los parámetros (o propiedades, o atributos) que las usuarias del rango principiante-intermedio probablemente usarán, así como cualquier avanzado que requiera una explicación extra. Cada ejemplo debe ir precedido de una descripción general de lo que hará el ejemplo, qué conocimiento adicional podría ser necesario para entenderlo, etc. Después del ejemplo (o entremedio de las piezas del ejemplo) debe haber texto que explique cómo funciona el código. No escatime en los detalles ni en el manejo de errores en los ejemplos. Tenga en cuenta que las usuarias _copiarán y pegarán_ su ejemplo para usarlo en sus propios proyectos, ¡y su código \_terminará usándose en sitios de producción! Consulte nuestras [directrices de ejemplos de código](/es/docs/MDN/Writing_guidelines/Code_style_guide) para obtener más información útil.
  - **Explique casos de uso**: Si hay casos de uso particularmente comunes para la característica que se está describiendo, ¡hable de ellos! En lugar de asumir que una usuaria descubrirá que el método que se está documentando se puede usar para resolver un problema de desarrollo común, realmente agregue una sección sobre ese caso de uso con un ejemplo y texto que explique cómo funciona el ejemplo.
  - **Agregue información de imágenes**: Incluya texto [`alt`](/es/docs/Web/HTML/Reference/Elements/img#alt) apropiado en todas las imágenes y diagramas. Este texto, así como los subtítulos en las tablas y otras figuras, cuenta porque los arañas no pueden rastrear imágenes, por lo que el texto `alt` dice a los rastreadores de motores de búsqueda qué contenido contiene el medio incrustado.
    > [!NOTE]
    > No se recomienda incluir demasiadas palabras clave o palabras clave no relacionadas con la característica en un intento de manipular los rankings de los motores de búsqueda; este tipo de comportamiento es fácil de detectar y tiende a ser penalizado.
    > Asimismo, **no** agregue material repetitivo, inútil o blobs de palabras clave dentro de la página real, en un intento de mejorar el tamaño de la página y el ranking de búsqueda. Esto hace más daño que bien, tanto para la legibilidad del contenido como para nuestros resultados de búsqueda.

- **Céntrese en el contenido del tema**: Es mucho mejor escribir contenido sobre el tema de la página que una palabra clave específica. Es muy probable que haya muchas palabras clave que podría incluir para un tema dado; de hecho, muchos SEOs compilan una lista de 5-100 palabras clave diferentes (variando entre palabras clave cortas, medianas y de cola larga) para incluir en su artículo, dependiendo de la longitud. Hacerlo diversificará su redacción, lo que llevará a menos repetición.

## Estilo de escritura

Además de escribir oraciones gramaticalmente correctas en inglés, le recomendamos que siga estas directrices para mantener el contenido coherente en MDN Web Docs.

- [Abreviaturas y acrónimos](#abreviaturas_y_acrónimos)
- [Uso de mayúsculas](#uso_de_mayúsculas)
- [Contracciones](#contracciones)
- [Números y cifras](#números_y_cifras)
- [Pluralización](#pluralización)
- [Apóstrofos y comillas](#apóstrofos_y_comillas)
- [Comas](#comas)
- [Guiones](#guiones)
- [Ortografía](#ortografía)
- [Terminología](#terminología)
- [Voz](#voz)

### Abreviaturas y acrónimos

Una abreviatura es una versión abreviada de una palabra más larga, mientras que un acrónimo es una nueva palabra creada usando la primera letra de cada palabra de una frase. Esta sección describe las directrices para abreviaturas y acrónimos.

- **Expansiones**: En la primera mención de un término en una página, expanda los acrónimos que es probable que las usuarias desconozcan. En caso de duda, expanda el término. Aún mejor, enlícelo al artículo o la entrada del [glosario](/es/docs/Glossary) que describe la tecnología.
  - **Correcto**: "XUL (XML User Interface Language) es el lenguaje basado en XML de Mozilla..."
  - **Incorrecto**: "XUL es el lenguaje basado en XML de Mozilla..."

- **Uso de mayúsculas y puntos**: Use mayúsculas completas y elimine los puntos en todas las abreviaturas y acrónimos, incluidas organizaciones como "US" y "UN".
  - **Correcto**: XUL
  - **Incorrecto**: X.U.L.; Xul

- **Abreviaturas latinas**: Puede usar abreviaturas latinas comunes (etc., es decir, p. ej.) en expresiones entre paréntesis y notas. Use puntos en estas abreviaturas, seguidos de una coma u otro signo de puntuación apropiado.
  - **Correcto**: Los navegadores web (p. ej., Firefox) pueden usarse ...
  - **Incorrecto**: Los navegadores web p. ej. Firefox pueden usarse ...
  - **Incorrecto**: Los navegadores web, p. ej. Firefox, pueden usarse ...
  - **Incorrecto**: Los navegadores web, (ej: Firefox) pueden usarse ...

  En texto regular (es decir, texto fuera de notas o paréntesis), use el equivalente en español de la abreviatura.
  - **Correcto**: ... navegadores web, y así sucesivamente.
  - **Incorrecto**: ... navegadores web, etc.

  - **Correcto**: Los navegadores web como Firefox pueden usarse ...
  - **Incorrecto**: Los navegadores web p. ej., Firefox pueden usarse ...

  La siguiente tabla resume los significados y equivalentes en español de las abreviaturas latinas:

  | Abreviatura | Latín            | Español                     |
  | ----------- | ---------------- | --------------------------- |
  | cf.         | _confer_         | compare                     |
  | e.g.        | _exempli gratia_ | por ejemplo                 |
  | et al.      | _et alii_        | y otros                     |
  | etc.        | _et cetera_      | y así sucesivamente         |
  | i.e.        | _id est_         | es decir, en otras palabras |
  | N.B.        | _nota bene_      | nota bien                   |
  | P.S.        | _post scriptum_  | posdata                     |

  > [!NOTE]
  > Considere siempre si es realmente beneficioso usar una abreviatura latina. Algunas de estas se usan tan raramente que muchas lectoras las confundirán o dejarán de entender sus significados.
  >
  > Además, asegúrese de _usted_ las use correctamente si decide hacerlo. Por ejemplo, tenga cuidado de no confundir "e.g." con "i.e.", que es un error común.

- **Plurales de abreviaturas y acrónimos**: Para los plurales de abreviaturas y acrónimos, agregue _s_. No use un apóstrofo. Nunca. Por favor.
  - **Correcto**: CD-ROMs
  - **Incorrecto**: CD-ROM's

- **"Versus", "vs." y "v."**: Si usa la contracción, se prefiere "vs." sobre "v." y puede usarse en encabezados. En otra parte del texto, use la forma completa "versus".
  - **Correcto**: esto vs. aquello
  - **Incorrecto**: esto v. aquello
  - **Correcto**: esto versus aquello

### Uso de mayúsculas

Use las reglas estándar de uso de mayúsculas en inglés en el texto del cuerpo, y use mayúsculas en "World Wide Web". Es aceptable usar minúsculas para "web" (usado solo o como modificador) e "internet".

> [!NOTE]
> Esta directriz es un cambio de una versión anterior de esta guía, por lo que puede encontrar muchas instancias de "Web" e "Internet" en MDN.
> Siéntase libre de cambiarlas mientras realiza otros cambios, pero no es necesario editar un artículo solo para cambiar el uso de mayúsculas.

Las teclas del teclado deben usar el estilo de oración, no todo en mayúsculas.
Por ejemplo, "<kbd>Enter</kbd>" no "<kbd>ENTER</kbd>".
La única excepción es que puede usar "<kbd>ESC</kbd>" para abreviar la tecla "<kbd>Escape</kbd>".

Ciertas palabras siempre deben usar mayúsculas, como marcas comerciales que incluyen letras mayúsculas o palabras que derivan del nombre de una persona (a menos que la palabra se esté usando dentro del código y la sintaxis del código requiera minúsculas).
Algunos ejemplos incluyen:

- Boolean (llamado así por el matemático y lógico inglés [George Boole](https://es.wikipedia.org/wiki/George_Boole))
- JavaScript (una marca comercial de Oracle Corporation, siempre debe escribirse como marca registrada)
- Python, TypeScript, Django y otros nombres de lenguajes de programación y marcos de trabajo

Algunos nombres de herramientas y proyectos tienen sus propias reglas de mayúsculas de marca. Estos pueden requerir nombres que están todos en minúsculas ("npm" o "webpack"), todos en mayúsculas ("UNIX", "GNOME", "VIM") o en mayúsculas y minúsculas ("TypeScript", "macOS" o "jQuery").

Siempre se debe usar el uso de mayúsculas de marca del sitio web o documentación oficial, incluso al comienzo de una oración. si le incomoda comenzar una oración con una letra minúscula, recomendamos reformular para evitar el problema. Por ejemplo, podría decir "Puede usar el administrador de paquetes npm para..." en lugar de "npm le permite...".

### Contracciones

Nuestro estilo de escritura tiende a ser informal, así que siéntase libre de usar contracciones (por ejemplo, "don't", "can't", "shouldn't"), si prefiere.

### Números y cifras

- **Comas**: En texto continuo, use comas solo en números de cinco dígitos o más.
  - **Correcto**: 4000; 54,000
  - **Incorrecto**: 4,000; 54000

- **Fechas**: Para las fechas (sin incluir fechas en muestras de código), use el formato "1 de enero de 1900".
  - **Correcto**: 24 de febrero de 1906
  - **Incorrecto**: 24 de febrero de 1906; 24/02/1906

  Alternativamente, puede usar el formato AAAA/MM/DD.
  - **Correcto**: 1906/02/24
  - **Incorrecto**: 02/24/1906; 24/02/1906; 02/24/06

- **Décadas**: Use el formato "1990s". No use un apóstrofe.
  - **Correcto**: 1920s
  - **Incorrecto**: 1920's

- **Plurales de cifras**: Agregue "s". No use un apóstrofe.
  - **Correcto**: 486s
  - **Incorrecto**: 486's

### Pluralización

Use plurales al estilo inglés, no las formas influidas por el latín o el griego.

- **Correcto**: syllabuses, octopuses
- **Incorrecto**: syllabi, octopi

### Apóstrofos y comillas

No use comillas "curvas". En MDN Web Docs, solo usamos comillas y apóstrofes rectos. Esto se debe a que necesitamos elegir uno u otro para la coherencia. Si las comillas o apóstrofes curvos se filtraran en fragmentos de código, incluso en línea, las lectoras pueden copiarlos y pegarlos, esperando que funcionen (lo cual no harán).

- **Correcto**: Please don't use "curly quotes."
- **Incorrecto**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Comas

La siguiente lista describe algunas de las situaciones comunes en las que debemos tener en cuenta las reglas de uso de comas:

- **Después de cláusulas introductorias**: Una cláusula introductoria es una cláusula dependiente, generalmente encontrada al comienzo de una oración. Use una coma después de una cláusula introductoria para separarla de la siguiente cláusula independiente.
  - Ejemplo 1:
    - **Correcto**: "In this example, you will learn how to use a comma."
    - **Incorrecto**: "In this example you will learn how to use a comma."
  - Ejemplo 2:
    - **Correcto**: "If you are looking for guidelines, refer to our writing style guide."
    - **Incorrecto**: "If you are looking for guidelines refer to our writing style guide."
  - Ejemplo 3:
    - **Correcto**: "On mobile platforms, you tend to get a numeric keypad for entering data."
    - **Incorrecto**: "On mobile platforms you tend to get a numeric keypad for entering data."

- **Antes de conjunciones**: La coma serial (también conocida como "coma de Oxford") es la coma que aparece antes de la conjunción en una serie de tres o más elementos. En MDN Web Docs, usamos la coma serial. Las comas también separan cada elemento de la lista.
  - **Correcto**: "I will travel on trains, planes, and automobiles."
  - **Incorrecto**: "I will travel on trains, planes and automobiles."

  No use coma antes de "and" y "or" en una lista que contiene dos elementos.
  - **Correcto**: "My dog is cute and smart."
  - **Incorrecto**: "My dog is cute, and smart."

  Use coma antes de las conjunciones "and", "but" y "or" si unen dos cláusulas independientes. Sin embargo, si la oración se está volviendo muy larga o compleja con la conjunción, considere reescribirla como dos oraciones.
  - Ejemplo 1:
    - **Correcto**: "You can perform this step, but you need to pay attention to the file setting."
    - **Incorrecto**: "You can perform this step but you need to pay attention to the file setting."
  - Ejemplo 2:
    - **Correcto**: "My father is strict but loving."
    - **Incorrecto**: "My father is strict, but loving."

- **Antes de "that" y "which"**: Una cláusula restrictiva es esencial para el significado de la oración y no necesita comas para separarse del resto de la oración. Una cláusula restrictiva generalmente se introduce con "that" y **no debe** ir precedida de una coma.
  - **Correcto**: "We have put together a course that includes all the essential information you need to work towards your goal."
  - **Incorrecto**: "We have put together a course, that includes all the essential information you need to work towards your goal."

  Una cláusula no restrictiva proporciona información adicional y no es esencial para el significado de la oración. Una cláusula no restrictiva generalmente se introduce con "which" y debe ir precedida de una coma.
  - **Correcto**: "You write a policy, which is an allowed list of origins for each feature."
  - **Incorrecto**: "You write a policy which is an allowed list of origins for each feature."

- **Antes de "such as"**: Si "such as" es parte de una cláusula no restrictiva y la oración restante es una cláusula independiente, use coma antes de "such as".
  - **Correcto**: "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **Incorrecto**: "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  El siguiente ejemplo muestra cuándo no usar una coma con "such as". En este caso, la cláusula que contiene "such as" es esencial para el significado de la oración.
  - **Correcto**: "Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets."
  - **Incorrecto**: "Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets."

### Guiones

Las palabras compuestas deben guionarse solo cuando la última letra del prefijo es una vocal y es la misma que la primera letra de la raíz.

- **Correcto**: re-elect, co-op, email
- **Incorrecto**: reelect, coop, e&#45;mail

### Ortografía

Use la ortografía del inglés americano.

En general, use la primera entrada en [Dictionary.com](https://www.dictionary.com/), a menos que esa entrada esté listada como una variante ortográfica o usada principalmente en una forma de inglés no americana.
Por ejemplo, si [busca "behaviour"](https://www.dictionary.com/browse/behaviour) (con una _u_ adicional agregada a la forma estándar americana), encontrará la frase "Chiefly British" seguida de un enlace a la forma estándar americana, ["behavior"](https://www.dictionary.com/browse/behavior).
No use la variante ortográfica.

- **Correcto**: localize, behavior, color
- **Incorrecto**: localise, behaviour, colour

Tenemos [cSpell](https://cspell.org/) instalado para detectar errores ortográficos. Se ejecuta cada semana y genera [un informe de errores ortográficos](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) en el repositorio. También puede ejecutarlo localmente usando el siguiente comando:

```bash
npm run lint:typos
```

En el repositorio, mantenemos varias listas de palabras, ubicadas en [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries), que contienen palabras sancionadas que no están en los diccionarios predeterminados. Puede agregar más palabras a estas listas si son válidas pero son reportadas por el corrector ortográfico. Lea [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json) para entender qué contiene cada diccionario y los detalles de nuestra configuración de verificación ortográfica.

### Terminología

Estas son nuestras recomendaciones para usar ciertos términos técnicos:

- **Elementos HTML**: Use el término "element" para referirse a los elementos HTML y XML, en lugar de "tag". Además, el elemento debe estar envuelto en corchetes angulares "<>" y debe diseñarse usando acentos graves (`` ` ``). Por ejemplo, usar \<input\> dentro de acentos graves lo diseñará como `<input>` como se espera.
  - **Correcto**: el elemento `<span>`
  - **Incorrecto**: la etiqueta span

  En MDN, opcionalmente puede especificar el elemento HTML en el [`HTMLElement` macro](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages), que diseñará el elemento, agregará los corchetes angulares "<>", así como también agregará un enlace a su página de referencia.
  - **Usar acentos graves**: `<span>`
  - **Usar la macro**: {{HTMLElement("span")}} (fuente en markdown: `\{{HTMLElement("span")}}`)

- **Parámetros vs. argumentos**: El término preferido en MDN Web Docs es **parámetros**. Por favor, evite el término "argumentos" para la coherencia siempre que sea posible.

- **Acciones de la interfaz de usuario**: En secuencias de tareas, describa las acciones de la interfaz de usuario usando el modo imperativo. Identifique el elemento de la interfaz de usuario por su etiqueta y tipo.
  - **Correcto**: "Click the Edit button."
  - **Incorrecto**: "Click Edit."

### Voz

Aunque se prefiere la voz activa, la voz pasiva también es aceptable, dado el carácter informal de nuestro contenido.
Sin embargo, intente ser coherente.

## Componentes de página

Esta sección enumera las directrices a seguir para diferentes partes de cada página, como encabezados, notas, enlaces y ejemplos.

- [Ejemplos de código](#ejemplos_de_código)
- [Referencias cruzadas (enlaces)](#referencias_cruzadas_enlaces)
- [Enlaces externos](#enlaces_externos)
- [URL acortadas (enlaces cortos)](#url_acortadas_enlaces_cortos)
- [Niveles de encabezado](#niveles_de_encabezado)
- [Imágenes y otros medios](#imágenes_y_otros_medios)
- [Listas](#listas)
- [Sección "Véase también"](#sección_véase_también)
- [Subpáginas](#subpáginas)
- [Slugs](#slugs)
- [Títulos](#títulos)

### Ejemplos de código

Una página en MDN Web Docs puede contener más de un ejemplo de código. La siguiente lista presenta algunas prácticas recomendadas al escribir un ejemplo de código para MDN Web Docs:

- Cada pieza de código de ejemplo debe incluir:
  - **Encabezado**: Un encabezado corto `###` (`<h3>`) para describir el escenario que se está demostrando a través del ejemplo de código. Por ejemplo, "Usar impresión de compensación" y "Revertir al estilo en la capa anterior".
  - **Descripción**: Una breve descripción anterior al código de ejemplo que indique las especificidades del ejemplo al que desea llamar la atención de la lectora. Por ejemplo, "En el siguiente ejemplo, se definen dos capas de cascada en el CSS, `base` y `special`."
  - **Explicación del resultado**: Una explicación después del código de ejemplo que describa el resultado y cómo funciona el código.
- En general, el ejemplo de código no solo debe demostrar la sintaxis de la característica y cómo se usa, sino también resaltar el propósito y las situaciones en las que una desarrolladora web podría querer o necesitar usar la característica.
- Si está trabajando con una pieza grande de código de ejemplo, puede tener sentido dividirla en partes lógicas más pequeñas para que puedan describirse individualmente.
- Al agregar [muestras en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples), es útil tener en cuenta que todos los bloques de código de la muestra que tienen el mismo tipo (HTML, CSS y JavaScript) se concatenan antes de ejecutar el ejemplo. Esto le permite dividir el código en múltiples segmentos, cada uno opcionalmente con sus propias descripciones, encabezados, etc. Esto hace que documentar el código sea increíblemente poderoso y flexible.

Para aprender cómo diseñar o formatear ejemplos de código para MDN Web Docs, consulte nuestras [Directrices para diseñar ejemplos de código](/es/docs/MDN/Writing_guidelines/Code_style_guide).

### Referencias cruzadas (enlaces)

Al hacer referencia a otra página o a la sección de una página en MDN por su título, siga el estilo de oración en el texto del enlace (coincida con el título de la página o sección). Use el estilo de oración en el texto del enlace incluso si es diferente del título de la página o sección vinculada (podría ser que el caso usado en el título de la página o sección sea incorrecto). No use comillas alrededor del texto del enlace. Para referirse a una página en MDN por su título, use el siguiente estilo:

- **Correcto**: "Consulte la guía [Ordering flex items](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Incorrecto**: "Consulte la guía "[Ordering flex items](/es/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)"."

Siga un estilo coherente al vincularse a secciones dentro de una página:

- **Correcto**: "Para obtener más información, consulte la sección [Asignación en JavaScript](/es/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) en la guía _Gestión de memoria_."

Si la sección a la que se vincula está en la misma página, puede insinuar la ubicación de la sección usando frases descriptivas.

- **Correcto**: "Este concepto se describe con más detalle en la sección [Accesibilidad](/es/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) de este documento."
- **Incorrecto**: "Este concepto se describe con más detalle en la sección [Accesibilidad](/es/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) a continuación."

En MDN, otra forma de vincular a una página de referencia es usando una macro. Estas macros se describen en la página [Macros comúnmente usadas](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages). Por ejemplo, para vincular a la página de referencia de un elemento HTML, use la macro `HTMLElement`, y para vincular a la página de referencia de una propiedad CSS, use la macro `CSSxRef`.

Seguimos directrices similares de referencia cruzada en las secciones [Véase también](#véase_también) al final de las páginas de referencia, páginas de glosario y guías.

### Enlaces externos

Se permiten enlaces externos en MDN Web Docs en situaciones específicas. Use las directrices descritas en esta sección para decidir si es o no aceptable incluir un enlace externo en MDN Web Docs. Las solicitudes de extracción que agreguen enlaces externos se rechazarán si no siguen estas directrices.

Si está considerando agregar un enlace externo al contenido [Aprender desarrollo web](/es/docs/Learn_web_development) de MDN, lea también [Directrices de escritura para aprender desarrollo web > Enlaces de socios e integraciones](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

En general, si está considerando agregar un enlace externo, debe asegurarse de que haya un riesgo mínimo de lo siguiente:

- Enlaces rotos o desactualizados
- Apariencia de respaldo, especialmente para productos o servicios comerciales
- Intento de usar MDN Web Docs para distribuir spam
- Enlaces cortos que ofuscan el destino del enlace

> [!NOTE]
> Antes de agregar un enlace externo, considere hacer referencias cruzadas dentro de MDN Web Docs. Los enlaces internos son más fáciles de mantener y hacen que la totalidad de MDN Web Docs sea más valiosa para las lectoras.

- **Buenos enlaces externos**: Los buenos enlaces externos llevan a las lectoras a recursos que son relevantes, duraderos y ampliamente confiables. Debe preferir agregar enlaces a contenido externo que sea:
  - Único o indispensable (por ejemplo, un RFC de IETF)
  - Necesario para la atribución, citación o reconocimiento (por ejemplo, como parte de una atribución de Creative Commons)
  - Más probable que se mantenga para el tema que incorporar dicho contenido en MDN Web Docs mismo (por ejemplo, las notas de lanzamiento de un proveedor)
  - De código abierto o impulsado por la comunidad, como MDN Web Docs mismo

- **Enlaces externos deficientes**: Los enlaces externos deficientes carecen de relevancia, mantenibilidad, accesibilidad oponen barreras a las lectoras. Evite agregar enlaces a contenido externo que sea:
  - Genérico o no específico (por ejemplo, la página de inicio de un proveedor, en lugar de la documentación relacionada)
  - Efímero o no mantenido (por ejemplo, un anuncio único)
  - De autoenlace o autopromocional (por ejemplo, el propio trabajo del autor fuera de MDN Web Docs)
  - Con pago (por ejemplo, un curso costoso fuera del alcance de aficionadas, estudiantes o lectoras que viven en países de bajos ingresos)
  - Inaccesible (por ejemplo, un video sin subtítulos)

- **Enlaces que son autopromocionales o spam**: Si bien una publicación de blog personal, una charla en una conferencia o un repositorio de GitHub tiene valor, vincular a sus propios recursos puede crear la apariencia de un conflicto de intereses. Piénselo dos veces antes de vincular a recursos con los que tiene una relación comercial o personal.

  > [!NOTE]
  > Si tiene una relación comercial o personal con el destino de un enlace, debe revelar esa relación en su solicitud de extracción. La falta de esto puede poner en peligro su participación continua con MDN Web Docs.

  A veces, dichos enlaces son relevantes y apropiados. Por ejemplo, si es el editor de una especificación y está contribuyendo a la documentación relacionada con esa especificación, entonces vincular a esa especificación se espera y es aceptable. Pero debe revelar la relación entre usted y el enlace.

### URL acortadas (enlaces cortos)

Un acortador de URL (como TinyURL o Bitly) puede ser excelente para acortar enlaces largos en URL más pequeñas y fáciles de recordar (también conocidas como "enlaces cortos"). Sin embargo, también ofuscan el destino de la URL. Además, con ciertos acortadores, el destino puede cambiarse después de su creación, una característica que podría usarse para fines maliciosos.

No use enlaces creados a través de acortadores de URL de terceros (generados por usuarios). Por ejemplo, si `https://myshort.link/foobar` es una URL corta generada por un usuario aleatorio y redirige a `https://example.com/somelongURL/details/show?page_id=foobar`, use la URL más larga de `example.com`.

Por otro lado, se fomentan los acortadores de primera parte que son mantenidos por las organizaciones que también mantienen las URL de destino. `https://bugzil.la` es propiedad y está operado por Mozilla y es un acortador de URL que redirige a `https://bugzilla.mozilla.org/`, que también es un dominio propiedad de Mozilla. En este caso, use la URL más corta. Por ejemplo, use `https://bugzil.la/1682349` en lugar de `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Niveles de encabezado

Cuando un nuevo párrafo comienza una nueva sección, se debe agregar un encabezado.
Use estos niveles de encabezado markdown en orden decreciente sin saltar niveles: `##`, luego `###`, y luego `####`; estos se traducen a las [etiquetas de encabezado HTML](/es/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` y `<h4>`, respectivamente.

`##` es el nivel más alto permitido porque `#` está reservado para el título de la página.
Recomendamos no agregar más de tres niveles de encabezados. Si siente la necesidad de agregar el cuarto nivel de encabezado, considere dividir el artículo en varios artículos más pequeños con una página de aterrizaje. Alternativamente, considere presentar la información como puntos con viñetas para evitar usar un encabezado de cuarto nivel.

Tenga en cuenta las siguientes reglas mientras crea encabezados para subsecciones:

- **No cree subsecciones únicas.** No subdivida un tema en un solo subtema.
  Son dos subencabezados o más o ninguno.
- **No use estilos en línea, clases o macros dentro de los encabezados.** Sin embargo, puede usar acentos graves para indicar términos de código (por ejemplo, "Usar la interfaz `FooBar`").
- **No cree "cabezas que chocan".** Estos son encabezados seguidos inmediatamente por un subencabezado, sin texto de contenido entre ellos.
  No se ve bien y deja a las lectoras sin ningún texto explicativo al comienzo de la sección exterior.

### Imágenes y otros medios

Si incluye imágenes u otros medios en una página, siga estas directrices:

- Asegúrese de que la licencia del medio le permita usarlos. Intente usar medios que tengan una licencia muy permisiva como [CC0](https://creativecommons.org/public-domain/cc0/) o al menos una que sea compatible con nuestra licencia de contenido general: [Licencia de Atribución-CompartirIgual de Creative Commons](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Para imágenes, páselas por <https://tinypng.com> o <https://imageoptim.com> para reducir el peso de la página.
- Para `SVG`, pase el código por [SVGOMG](https://jakearchibald.github.io/svgomg/), y asegúrese de que el archivo `SVG` tenga una línea vacía al final del archivo.
- Cada imagen debe [incluir texto `alt` descriptivo](/es/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listas

Las listas deben formatearse y estructurarse de manera coherente en todas las páginas.
Cada elemento de la lista debe escribirse con puntuación adecuada, independientemente del formato de la lista.
Sin embargo, dependiendo del tipo de lista que esté creando, querrá ajustar su escritura como se describe en las secciones siguientes. En ambos casos, incluya una oración introductoria que describa la información en la lista.

- **Listas con viñetas**: Las listas con viñetas deben usarse para agrupar piezas relacionadas de información concisa. Cada elemento de la lista debe seguir una estructura de oración similar. Las oraciones y frases (es decir, fragmentos de oración que carecen de un verbo o un sujeto o ambos) en listas con viñetas deben incluir puntuación estándar; las oraciones terminan con puntos, las frases no.

  Si hay múltiples oraciones en un elemento de la lista, debe aparecer un punto al final de cada oración, incluida la oración final del elemento, tal como se esperaría en un párrafo. Este es un ejemplo de una lista con viñetas estructurada correctamente:

  > En este ejemplo, debemos incluir:
  >
  > - Una condición, con una breve explicación.
  > - Una condición similar, con una breve explicación.
  > - Otra condición más, con alguna explicación adicional.

  Observe cómo se repite la misma estructura de oración de viñeta en viñeta. En este ejemplo, cada punto de viñeta establece una condición seguida de una coma y una breve explicación, y cada elemento de la lista termina con un punto.

  Si los elementos de la lista incluyen oraciones incompletas, no se requiere un punto al final. Por ejemplo:

  > Las siguientes propiedades relacionadas con el color serán útiles en este escenario:
  >
  > - propertyA: Establece el color de fondo
  > - propertyB: Agrega sombra al texto

  Si uno o más elementos de la lista son oraciones completas, use un punto después de cada elemento de la lista, incluso si un elemento de la lista contiene tres o menos palabras. Sin embargo, en la medida de lo posible, siga la misma estructura para todos los elementos de una lista; asegúrese de que todos los elementos de la lista sean oraciones completas o frases.

- **Listas numeradas**: Las listas numeradas se usan principalmente para enumerar pasos en un conjunto de instrucciones. Debido a que las instrucciones pueden ser complejas, la claridad es una prioridad, especialmente si el texto en cada elemento de la lista es largo. Al igual que con las listas con viñetas, siga el uso estándar de puntuación. Este es un ejemplo de una lista numerada estructurada correctamente:

  > Para estructurar correctamente una lista numerada, debe:
  >
  > 1. Abrir con un encabezado o párrafo breve para introducir las instrucciones. Es importante proporcionar a la usuaria el contexto antes de comenzar las instrucciones.
  > 2. Comenzar a crear sus instrucciones, manteniendo cada paso en su propio elemento numerado.
  >    Sus instrucciones pueden ser bastante extensas, por lo que es importante escribir con claridad y usar la puntuación correcta.
  > 3. Después de terminar las instrucciones, siga la lista numerada con un breve resumen de cierre o explicación sobre el resultado esperado al completar.

  Lo siguiente es un ejemplo de escribir una explicación de cierre para la lista anterior:

  > Hemos creado una lista numerada corta que proporciona pasos instructivos para producir una lista numerada con el formato correcto.

  Observe cómo los elementos en las listas numeradas se leen como párrafos cortos. Debido a que las listas numeradas se usan rutinariamente para fines de instrucción o para guiar a alguien a través de un procedimiento ordenado, asegúrese de mantener cada elemento enfocado: un elemento numerado por paso.

### Sección "Véase también"

La mayoría de las guías, páginas de referencia e incluso páginas de glosario en MDN Web Docs contienen una sección _Véase también_ al final del artículo. Esta sección contiene [referencias cruzadas](#referencias_cruzadas_enlaces) a temas relacionados dentro de MDN y a veces enlaces a artículos externos relacionados. Por ejemplo, esta es la [sección Véase también](/es/docs/Web/CSS/Reference/At-rules/@layer#see_also) para la página `@layer`.

En general, presente los enlaces en una sección Véase también en un formato de [lista con viñetas](#listas) con cada elemento de la lista como una frase. En la sección [Aprender desarrollo web](/es/docs/Learn_web_development) en MDN, sin embargo, la sección Véase también sigue el formato de [lista de definiciones](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists).

Para mantener la coherencia en MDN Web Docs, tenga en cuenta las siguientes directrices al agregar o actualizar una sección Véase también.

#### Texto del enlace

- El texto del enlace debe ser el mismo que el título de la página o la sección a la que se vincula. Por ejemplo, el texto del enlace a esta página [ARIA](/es/docs/Web/Accessibility/ARIA/Reference/Attributes) con el título de página "ARIA states and properties" será:
  - **Correcto**: [ARIA states and properties](/es/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Use el estilo de oración en el texto del enlace incluso si es diferente del título de la página o sección vinculada. Podría ser que el caso usado en el título de la página o sección sea incorrecto. Por ejemplo, el texto del enlace a la página [Quirks Mode](/es/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) en mayúsculas y minúsculas de oración correctas será:
  - **Correcto**: [Quirks mode](/es/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Para enlaces externos también, use el estilo de oración incluso si las mayúsculas y minúsculas en la página del artículo de destino son diferentes. Esto es para garantizar la coherencia en MDN Web Docs. Las excepciones incluyen los nombres de los libros.
- En MDN, opcionalmente puede usar una macro para vincular a una página, como se explica en la sección [Vincular a páginas de referencia](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) en la página _Macros comúnmente usadas_. El uso de macro agregará formato de código a la palabra clave en el texto del enlace, como se muestra en el siguiente ejemplo.
- No se necesita ningún artículo ("A", "An", "The") al comienzo del elemento de la lista de enlaces. No se requiere puntuación al final del elemento de la lista porque invariablemente será un término o una frase.
  - **Correcto**: {{cssxref("revert-layer")}}
  - **Incorrecto**: La palabra clave {{cssxref("revert-layer")}}.
  - **Correcto**: [HTML DOM API](/es/docs/Web/API/HTML_DOM_API)
  - **Incorrecto**: La [HTML DOM API](/es/docs/Web/API/HTML_DOM_API)
- Como se muestra en los ejemplos anteriores, agregue formato de código usando acentos graves (`` ` ``) a las palabras clave y literales en el texto del enlace, aunque el formato no se use en los títulos de página y sección. Por ejemplo, para el título de página "Array() constructor", el texto del enlace será [`Array()` constructor](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Texto descriptivo

- Mantenga el texto descriptivo alrededor del enlace al mínimo. En caso de una descripción, agréguela después del texto del enlace y dos puntos. Redacte la descripción como una frase sin puntuación final. Mantenga todo el texto vinculado al principio para ayudar a escanear la lista de enlaces.
  - **Correcto**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: Selectores de CSS para diseñar casillas de verificación
  - No use la conjunción "y" antes del último elemento de la serie.
  - **Correcto**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Otras propiedades relacionadas con el color
- Para enlaces externos, intente especificar el sitio web fuente y el año de publicación o última actualización (entre paréntesis) siempre que sea factible y apropiado. Proporcionar esta información por adelantado da a las lectoras una idea clara del destino que alcanzarán al hacer clic en el enlace. La fecha de publicación o última actualización guía a las lectoras para evaluar la relevancia del artículo vinculado y también ayuda a las mantenedoras de MDN a revisar los enlaces a artículos que no se han actualizado durante mucho tiempo. Si proporciona un enlace a un artículo en Wikipedia, por ejemplo, puede ignorar la fecha de publicación/actualización. El siguiente elemento de lista es un ejemplo de agregar un enlace al artículo externo [Top-level await](https://v8.dev/features/top-level-await) en la sección Véase también, junto con la información de fuente y año:
  - **Correcto**: [Top-level await](https://v8.dev/features/top-level-await) en v8.dev (2019)
- Para enlaces externos a libros, también puede proporcionar nombres de autoras. Se enumeran algunos ejemplos en la sección [Lectura adicional](#language_grammar_and_spelling). Absténgase de agregar nombres de autoras para publicaciones de blog o repositorios de GitHub que podría vincular.

#### Orden de los enlaces

- Liste los enlaces a las páginas de MDN en el orden de páginas de referencia primero, seguidos de enlaces a las guías relacionadas y páginas de tutoriales. Este orden sugerido es principalmente para ayudar en la explorabilidad de los elementos de la lista.
- Si la lista es una mezcla de enlaces internos y externos, liste los enlaces internos primero y luego los externos.
- Dentro de cada grupo de enlaces internos y externos, siga el orden alfabético o de simple a avanzado, lo que tenga más sentido para el contexto.

### Subpáginas

Cuando necesite agregar algunos artículos sobre un tema o área temática, típicamente lo hará creando una página de aterrizaje y luego agregando subpáginas para cada uno de los artículos individuales.
La página de aterrizaje debe abrirse con uno o dos párrafos que describan el tema o la tecnología, y luego proporcionar una lista de las subpáginas con descripciones de cada página.
Puede automatizar la inserción de páginas en la lista usando algunas macros que hemos creado.

Por ejemplo, considere la guía [JavaScript](/es/docs/Web/JavaScript), que está estructurada de la siguiente manera:

- [JavaScript/Guide](/es/docs/Web/JavaScript/Guide) – Página principal de tabla de contenidos
- [JavaScript/Guide/JavaScript Overview](/es/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/es/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Intente evitar poner su artículo en la parte superior de la jerarquía, lo que ralentiza el sitio y hace que la búsqueda y la navegación del sitio sean menos efectivas.

### Slugs

El título de la página, que se muestra en la parte superior de la página, puede ser diferente del "slug" de la página, que es la parte de la URL de la página que sigue a `<locale>/docs/`. Tenga en cuenta las siguientes directrices al definir un slug:

- Los slugs deben mantenerse cortos. Al crear un nuevo nivel de jerarquía, el componente del nuevo nivel en el slug debe ser solo una o dos palabras.
- Los slugs deben usar un guion bajo para un componente de varias palabras, como `Basic_HTML_syntax` en `/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Siga el estilo de oración en los slugs también para cada componente, como `Basic_HTML_syntax` en el ejemplo anterior.

### Títulos

Los títulos de página se usan en los resultados de búsqueda y también se usan para estructurar la jerarquía de páginas en la lista de migas de pan en la parte superior de la página. Un título de página puede ser diferente del "slug" de la página, como se explica en la sección [Slugs](#slugs).

Tenga en cuenta las siguientes directrices al escribir títulos:

- **Estilo de uso de mayúsculas**: En MDN Web Docs, los títulos de página y los encabezados de sección deben usar el estilo de oración (solo use mayúsculas en la primera palabra y los nombres propios) en lugar del estilo de titular:
  - **Correcto**: "A new method for creating JavaScript rollovers"
  - **Incorrecto**: "A New Method for Creating JavaScript Rollovers"

  Tenemos muchas páginas antiguas que se escribieron antes de que se estableciera esta regla de estilo. Siéntase libre de actualizarlas según sea necesario si lo desea. Gradualmente estamos llegando a ellas.

- **Directrices generales**: Decidir qué quiere documentar y cómo estructurará ese contenido es uno de los primeros pasos para escribir. Escribir una tabla de contenidos puede ayudarlo a decidir cómo quiere ordenar la información. Cubra conceptos simples primero y luego pase a conceptos más complicados y avanzados. Cubra información conceptual primero y luego pase a temas orientados a la acción.

  Tenga en cuenta las siguientes directrices al escribir títulos para una página y secciones o subsecciones:
  - **Vaya de mayor a menor**: Como se indica en la sección [Niveles de encabezado](#niveles_de_encabezado), vaya de `##` mayor a `####` menor, sin saltar niveles. Use encabezados de nivel superior para títulos introductorios más amplios, y use títulos más específicos a medida que progresa hacia encabezados de nivel inferior.
  - **Agrupe lógicamente**: Asegúrese de que todas las subsecciones relacionadas estén agrupadas lógicamente bajo un encabezado de nivel superior. Nombrar los títulos de varias secciones puede ayudarlo en este ejercicio.
  - **Mantenga los títulos cortos**: Los títulos más cortos son más fáciles de escanear en texto y en la tabla de contenidos.
  - **Mantenga los títulos específicos**: Use el título para transmitir la información específica que se cubrirá en la sección. Por ejemplo, para una sección que presenta elementos HTML, use el título "Elementos HTML" en lugar de "Introducción" o "Visión general".
  - **Mantenga los títulos enfocados**: Use el título para transmitir un objetivo: una sola idea o concepto que se cubrirá en esa sección. Para ese propósito, en la medida de lo posible, intente no usar la conjunción "y" en un título.
  - **Use construcción paralela**: Use un lenguaje similar para los títulos en el mismo nivel de encabezado. Por ejemplo, si un título de nivel `###` usa gerundios, es decir, palabras que terminan en "-ing", como "Installing", entonces intente escribir todos los títulos en ese nivel de encabezado usando gerundios. Si un título comienza con un verbo imperativo, como "Use", "Configure", entonces escriba todos los títulos en ese nivel de encabezado comenzando con un verbo imperativo.
  - **Evite término común en encabezado de nivel inferior**: No repita el texto en el título de un encabezado de nivel superior en títulos de nivel inferior. Por ejemplo, en una sección titulada "Comas", asigne el título de una subsección "After introductory clauses" en lugar de "Commas after introductory clauses".
  - **No comience con artículo**: Evite comenzar los títulos con artículos "a", "an" o "the".
  - **Agregue información introductoria**: Después de un título, agregue algo de texto introductorio para explicar qué se cubrirá en la sección.

## Véase también

- [Directrices para escribir ejemplos de código](/es/docs/MDN/Writing_guidelines/Code_style_guide)
- [Directrices para escribir ejemplos de código HTML](/es/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Directrices para escribir ejemplos de código CSS](/es/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Directrices para escribir ejemplos de código JavaScript](/es/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Directrices para escribir ejemplos de código de shell](/es/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Lectura adicional

### Otras guías de estilo

Si tiene preguntas sobre el uso y el estilo no cubiertos en esta guía, le recomendamos consultar la [Guía de estilo de escritura de Microsoft](https://learn.microsoft.com/en-us/style-guide/welcome/) o el [Manual de estilo de Chicago](https://www.chicagomanualofstyle.org/).

### Idioma, gramática y ortografía

Si está interesada en mejorar sus habilidades de escritura y edición, puede encontrar los siguientes recursos útiles.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) en brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) en english.stackexchange.com: sitio de preguntas y respuestas sobre el uso del idioma inglés
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) en google.com/books (publicado 2002): consejos basados en evidencia, académicos pero fáciles de usar; muy buenos para hablantes no nativas, especialmente para el uso de preposiciones
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) de William Zinsser en harpercollins.com (publicado 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) de Joseph Williams y Gregory Colomb en google.com/books (publicado 2019)

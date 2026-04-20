---
title: Cómo escribir una referencia de API
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Esta guía le lleva a través de todo lo que necesita saber para escribir una referencia de API en MDN.

## Preparación

Antes de comenzar a documentar una API, hay algunas cosas que debe preparar y planificar con anticipación antes de comenzar a escribir.

### Conocimientos previos

Se supone que antes de leer esta guía tiene un conocimiento razonable de:

- Tecnologías web como HTML, CSS y JavaScript. JavaScript es lo más importante.
- Lectura de especificaciones de tecnología web. Las verá mucho a medida que documente las API.

Todo lo demás se puede aprender en el camino.

### Recursos previos

Antes de comenzar a documentar una API, debe tener disponible:

1. La última especificación:
   Ya sea una recomendación del W3C o un borrador temprano del editor, debe referirse al último borrador disponible de la especificación que cubre (o especificaciones que cubren) esa API.
   Para encontrarla, generalmente puede hacer una búsqueda en la web. La última versión a menudo estará vinculada desde todas las versiones de la especificación, listada bajo "latest draft" o similar.
2. Los últimos navegadores web modernos:
   Estos deberían ser compilaciones experimentales/alfa como [Firefox Nightly](https://www.mozilla.org/es/firefox/channel/desktop/)/[Chrome Canary](https://www.google.com/intl/es/chrome/canary/) que tengan más probabilidades de admitir las características que está documentando.
   Esto es especialmente pertinente si está documentando una API naciente/experimental.
3. Demostraciones/publicaciones de blog/otra información: encuentre tanta información como pueda.
4. Contactos de ingeniería útiles:
   Es realmente útil encontrar un contacto de ingeniería amigable para hacer preguntas sobre la especificación, alguien que esté involucrado en la estandarización de la API o su implementación en un navegador.
   Buenos lugares para encontrarlos son:
   - La lista de direcciones interna de su empresa, si trabaja para una empresa relevante.
   - Una lista de correo pública que esté involucrada en la discusión de esa API, como [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) de Mozilla o una lista del W3C como [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - La especificación misma. Por ejemplo, la [especificación de la API de Web Audio](https://webaudio.github.io/web-audio-api/) enumera los autores y sus datos de contacto en la parte superior.

### Tómese un tiempo para jugar con la API

Volverá a crear demostraciones muchas veces durante el curso de documentar una API, pero es útil comenzar dedicando tiempo a familiarizarse con cómo funciona la API: aprenda cuáles son las interfaces/propiedades/métodos principales, cuáles son los casos de uso primarios y cómo escribir funcionalidad simple con ella.

Cuando una API ha cambiado, debe tener cuidado de que las demostraciones existentes a las que se refiere o de las que aprende no estén desactualizadas. Verifique las construcciones principales que se usan en la demostración para ver si coinciden con la última especificación. También pueden no funcionar en los navegadores actualizados, pero esta no es una prueba muy confiable, ya que a menudo las características antiguas siguen siendo compatibles por compatibilidad con versiones anteriores.

> [!NOTE]
> Si la especificación se ha actualizado recientemente de modo que, digamos, un método ahora se define de manera diferente, pero el método anterior aún funciona en los navegadores, a menudo tendrá que documentar ambos en el mismo lugar, para que los métodos antiguos y nuevos estén cubiertos.
> Si necesita ayuda, consulte las demostraciones que haya encontrado o pregunte a un contacto de ingeniería.

### Crear la lista de documentos que necesita escribir o actualizar

Una referencia de API generalmente contendrá las siguientes páginas.
Puede encontrar más detalles sobre qué contiene cada página, ejemplos y plantillas, en nuestro artículo [Tipos de páginas](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Antes de comenzar, debe escribir una lista de todas las páginas que debe crear.

1. Página de descripción general
2. Páginas de interfaz
3. Páginas de constructor
4. Páginas de métodos
5. Páginas de propiedades
6. Páginas de eventos
7. Páginas de conceptos/guía
8. Ejemplos

> [!NOTE]
> Nos referiremos a la [API de Web Audio](/es/docs/Web/API/Web_Audio_API) para ejemplos en este artículo.

#### Páginas de descripción general

Una sola página de descripción general de la API se usa para describir el rol de la API, sus interfaces de nivel superior, características relacionadas contenidas en otras interfaces y otros detalles de alto nivel.
Su nombre y slug deben ser el nombre de la API más "API" al final. Se coloca en el nivel superior de la referencia de la API, como elemento secundario de <https://developer.mozilla.org/es/docs/Web/API>.

Ejemplo:

- Título: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: <https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API>

#### Páginas de interfaz

Cada interfaz también tendrá su propia página, que describe el propósito de la interfaz, enumera los miembros (constructores, métodos, propiedades, etc. que contiene) y muestra con qué navegadores es compatible.
El nombre y el slug de una página deben ser el nombre de la interfaz, exactamente como está escrito en la especificación.
Cada página se coloca en el nivel superior de la referencia de la API, como elemento secundario de <https://developer.mozilla.org/es/docs/Web/API>.

Ejemplos:

- Título: _AudioContext_
- Slug: _AudioContext_
- URL: <https://developer.mozilla.org/es/docs/Web/API/AudioContext>

<!---->

- Título: _AudioNode_
- Slug: _AudioNode_
- URL: <https://developer.mozilla.org/es/docs/Web/API/AudioNode>

> [!NOTE]
> Documentamos cada miembro que aparece en la interfaz. Debe tener en cuenta las siguientes reglas:

- Documentamos los métodos definidos en el prototipo de un objeto que implementa esta interfaz (métodos de instancia), y los métodos definidos en la clase misma (métodos estáticos).
  En las raras ocasiones en que ambos existen en la misma interfaz, debe enumerarlos en secciones separadas en la página (Métodos estáticos/Métodos de instancia).
  Por lo general, solo existen métodos de instancia, en cuyo caso puede ponerlos bajo el título "Métodos".
- No documentamos las propiedades y métodos heredados de la interfaz: se enumeran en la interfaz principal correspondiente. Sin embargo, sugerimos su existencia.
- Sí documentamos las propiedades y métodos definidos en mixins. Consulte la [guía de contribución para mixins](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) para obtener más detalles.
- Los métodos especiales como el stringifier (`toString()`) y el jsonifier (`toJSON()`) también se enumeran si existen.
- Los constructores con nombre (como `Image()` para {{domxref("HTMLImageElement")}}) también se enumeran, si es relevante.

#### Páginas de constructor

Cada interfaz tiene cero o un constructor, documentado en una subpágina de la página de la interfaz. Describe el propósito del constructor y muestra cómo es su sintaxis, ejemplos de uso, información de compatibilidad con navegadores, etc. Su slug es el nombre del constructor, que es exactamente el mismo que el nombre de la interfaz, y el título es el nombre de la interfaz, punto, nombre del constructor y luego paréntesis al final.

Ejemplo:

- Título: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: <https://developer.mozilla.org/es/docs/Web/API/AudioContext/AudioContext>

#### Páginas de propiedades

Cada interfaz tiene cero o más propiedades, documentadas en subpáginas de la página de la interfaz. Cada página describe el propósito de la propiedad y muestra cómo es su sintaxis, ejemplos de uso, información de compatibilidad con navegadores, etc. Su slug es el nombre de la propiedad, y el título es el nombre de la interfaz, punto y luego el nombre de la propiedad.

Ejemplos:

- Título: _AudioContext.state_
- Slug: _state_
- URL: <https://developer.mozilla.org/es/docs/Web/API/AudioContext/state>

<!---->

#### Páginas de métodos

Cada interfaz tiene cero o más métodos, documentados en subpáginas de la página de la interfaz. Cada página describe el propósito del método y muestra cómo es su sintaxis, ejemplos de uso, información de compatibilidad con navegadores, etc. Su slug es el nombre del método, y el título es el nombre de la interfaz, punto, nombre del método y luego paréntesis.

Ejemplos:

- Título: _AudioContext.close()_
- Slug: _close_
- URL: <https://developer.mozilla.org/es/docs/Web/API/AudioContext/close>

<!---->

- Título: _AudioContext.createGain()_
- Slug: _createGain_
- URL: <https://developer.mozilla.org/es/docs/Web/API/AudioContext/createGain>

#### Páginas de eventos

Documente los eventos como subpáginas de sus interfaces objetivo y use el slug _nombredeevento_\_event con el título establecido en `Interface: evento eventName`.

No cree páginas para propiedades de manejadores de eventos `on`. Mencione ambas formas de acceder al evento en la página `eventName_event`.

Ejemplo:

- Título: XRSession: evento end
- Slug: end_event
- URL: <https://developer.mozilla.org/es/docs/Web/API/XRSession/end_event>

#### Páginas de conceptos/guías

La mayoría de las referencias de API tienen al menos una guía y a veces también una página de conceptos para acompañarla. Como mínimo, una referencia de API debe contener una guía llamada "Usar la _nombre-de-api_", que proporcionará una guía básica sobre cómo usar la API. Las API más complejas pueden requerir múltiples guías de uso para explicar cómo usar diferentes aspectos de la API.

Si es necesario, también puede incluir un artículo de conceptos llamado "conceptos de _nombre-de-api_", que proporcionará una explicación de la teoría detrás de cualquier concepto relacionado con la API que los desarrolladores deben entender para usarla eficazmente.

Estos artículos deben crearse como subpáginas de la página de descripción general de la API. Por ejemplo, Web Audio tiene cuatro guías y un artículo de conceptos:

- <https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API>
- <https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API>
- <https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics>
- <https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API>

#### Ejemplos

Debe crear algunos ejemplos que demuestren al menos los casos de uso más comunes de la API. Puede colocarlos en cualquier lugar apropiado, aunque el lugar recomendado es el [repositorio de MDN en GitHub](https://github.com/mdn/).

#### Enumerarlos todos

Crear una lista de todas estas subpáginas es una buena manera de realizar un seguimiento de ellas. Por ejemplo:

- Web_Audio_API
- AudioContext
  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - …
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - …

- AudioNode
  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - …
  - AudioNode.connect(Param)
  - …

- AudioParam
- Events (update list)
  - start
  - end
  - …

Cada interfaz de la lista tiene una página separada creada para ella como subpágina de <https://developer.mozilla.org/es/docs/Web/API>; por ejemplo, el documento para {{domxref("AudioContext")}} se ubicaría en <https://developer.mozilla.org/es/docs/Web/API/AudioContext>. Cada [página de interfaz](#páginas_de_interfaz) explica qué hace esa interfaz y proporciona una lista de los métodos y propiedades que componen la interfaz. Luego, cada método y propiedad se documenta en su propia página, que se crea como subpágina de la interfaz de la que es miembro. Por ejemplo, {{domxref("BaseAudioContext/currentTime")}} se documenta en <https://developer.mozilla.org/es/docs/Web/API/AudioContext/currentTime>.

## Crear las páginas

Ahora cree las páginas que necesita, según las estructuras a continuación. Nuestro [README de contenido de MDN](https://github.com/mdn/content#adding-a-new-document) contiene instrucciones sobre cómo crear un nuevo documento, y nuestra guía [Tipos de páginas](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types) contiene más ejemplos y plantillas de páginas que pueden ser útiles.

### Estructura de una página de descripción general

Las páginas de aterrizaje de la API diferirán mucho en longitud, dependiendo del tamaño de la API, pero todas tendrán básicamente las mismas características. Consulte <https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API> para ver un ejemplo de una página de aterrizaje grande.

Las características de una página de aterrizaje se describen a continuación:

1. **Descripción**: el primer párrafo de la página de aterrizaje debe proporcionar una descripción breve y concisa del propósito general de la API.
2. **Sección de conceptos y uso**: la siguiente sección debe titularse "conceptos y uso de [nombre de la API]" y proporcionar una descripción general de toda la funcionalidad principal que proporciona la API, qué problemas resuelve y cómo funciona, todo a un alto nivel. Esta sección debe ser bastante corta y no entrar en código o detalles de implementación específicos.
3. **Lista de interfaces**: esta sección debe titularse "interfaces de [nombre de la API]" y proporcionar enlaces a la página de referencia de cada interfaz que compone la API, junto con una breve descripción de lo que hace cada una. Consulte la sección "Referenciar otras características de la API con la macro \\{{domxref}}" para una forma más rápida de crear nuevas páginas.
4. **Ejemplos**: esta sección debe mostrar un caso de uso o dos para la API.
5. **Tabla de especificaciones**: en este punto debe incluir una tabla de especificaciones; consulte la sección "Crear una tabla de referencia de especificaciones" para obtener más detalles.
6. **Compatibilidad con navegadores**: ahora debe incluir una tabla de compatibilidad con navegadores. Consulte [Tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener detalles.
7. **Véase también**: la sección "Véase también" es un buen lugar para incluir enlaces adicionales que puedan ser útiles al aprender sobre esta tecnología, incluyendo tutoriales de MDN (y externos), ejemplos, bibliotecas, etc.

### Estructura de una página de interfaz

Ahora debería estar listo para comenzar a escribir sus páginas de interfaz. Cada página de referencia de interfaz debe observar la siguiente estructura:

1. **\\{{APIRef}}**: Incluya la macro \\{{APIRef}} en la primera línea de cada página de interfaz, incluyendo el nombre de la API como argumento, por ejemplo \\{{APIRef("Web Audio API")}}. Esta macro sirve para construir un menú de referencia en el lado izquierdo de la página de interfaz, incluyendo propiedades y métodos, y otros enlaces rápidos según lo definido en la macro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (pida a alguien que agregue su API a una entrada GroupData existente, o que cree una nueva, si aún no está allí). El menú se verá algo como la captura de pantalla a continuación.
   ![Esta captura de pantalla muestra un menú de navegación vertical para la interfaz OscillatorNode, con múltiples sublistas para métodos y propiedades, generado por la macro APIRef](apiref-links.png)
2. **Estado de la característica**: un [banner que indica el estado de la característica](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (como obsoleto, no estándar o experimental) se agrega automáticamente, si es necesario. Para eso debe [actualizar el estado en el repositorio browser-compat-data](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
3. **Descripción**: el primer párrafo de la página de la interfaz debe proporcionar una descripción breve y concisa del propósito general de la interfaz. También puede incluir un par de párrafos más si se requiere alguna descripción adicional. Si la interfaz es en realidad un diccionario, debe usar ese término en lugar de "interfaz".
4. **Diagrama de herencia**: use la macro [`\{{InheritanceDiagram}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/inheritance_diagram.rs) para incrustar un diagrama de herencia SVG para la interfaz.
5. **Lista de propiedades, Lista de métodos**: estas secciones deben titularse "Propiedades" y "Métodos", y proporcionar enlaces (usando la macro \\{{domxref}}) a una página de referencia para cada propiedad/método de esa interfaz, junto con una descripción de lo que hace cada uno. Estas deben marcarse usando [listas de descripción/definición](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists). Cada descripción debe ser breve y concisa: una oración si es posible. Consulte la sección "Referenciar otras características de la API con la macro \\{{domxref}}" para una forma más rápida de crear enlaces a otras páginas.

   Al principio de ambas secciones, antes del inicio de la lista de propiedades/métodos, indique la herencia usando la oración apropiada, en cursiva:
   - _Esta interfaz no implementa ninguna propiedad específica, pero hereda propiedades de \\{{domxref("XYZ")}} y \\{{domxref("XYZ2")}}._
   - _Esta interfaz también hereda propiedades de \\{{domxref("XYZ")}} y \\{{domxref("XYZ2")}}._
   - _Esta interfaz no implementa ningún método específico, pero hereda métodos de \\{{domxref("XYZ")}} y \\{{domxref("XYZ2")}}._
   - _Esta interfaz también hereda métodos de \\{{domxref("XYZ")}} y \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Las propiedades que son de solo lectura deben tener la macro \\{{ReadOnlyInline}}, que crea una pequeña insignia "Read only", incluida en la misma línea que sus enlaces \\{{domxref}} (después del uso de las macros \\{{experimental_inline}}, \\{{non-standard_Inline}} y \\{{deprecated_inline}}, si algunas de estas son necesarias.

6. **Ejemplos**: incluya un listado de código para mostrar el uso típico de una característica importante de la API. En lugar de listar TODO el código, debe listar un subconjunto interesante. Para un listado de código completo, puede referenciar un repositorio de [GitHub](https://github.com/) que contenga el ejemplo completo, y también podría vincular a un ejemplo en vivo creado usando la función [GitHub gh-pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site) (siempre que, por supuesto, use solo código del lado del cliente). Si el ejemplo es visual, también puede usar la función [Live Sample](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) de MDN para hacerlo en vivo y jugable en la página.
7. **Tabla de especificaciones**: en este punto debe incluir una tabla de especificaciones; consulte la sección "Crear una tabla de referencia de especificaciones" para obtener más detalles.
8. **Compatibilidad con navegadores**: ahora debe incluir una tabla de compatibilidad con navegadores. Consulte [Tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener detalles.
9. **Polyfill**: si es apropiado, incluya esta sección, proporcionando código para un polyfill que permita usar la API incluso en navegadores que no la implementan. Si no existe ningún polyfill o no se necesita, omita esta sección por completo.
10. **Véase también**: la sección "Véase también" es un buen lugar para incluir enlaces adicionales que puedan ser útiles al aprender sobre esta tecnología, incluyendo tutoriales de MDN (y externos), ejemplos, bibliotecas, etc. Tenemos una política liberal para vincular a fuentes externas, pero preste atención:
    - No incluya páginas con la misma información que otra página en MDN; vincule a esa página en su lugar.
    - No incluya nombres de autores: somos un sitio de documentación neutral para escritores. Vincule al documento; el nombre del autor se mostrará allí.
    - Preste especial atención a las publicaciones de blog: tienden a quedar desactualizadas (sintaxis antigua, información de compatibilidad incorrecta). Vincúlelas solo si tienen un valor agregado claro que no se puede encontrar en un documento mantenido.
    - No use verbos de acción como "Vea … para más información" o "Haga clic en…", no sabe si su lector puede ver o hacer clic en el enlace (como en una versión en papel del documento).

#### Ejemplos de páginas de interfaz

Los siguientes son ejemplos excelentes de páginas de interfaz:

- {{domxref("Request")}} de la [Fetch API](/es/docs/Web/API/Fetch_API).
- {{domxref("SpeechSynthesis")}} de la [Web Speech API](/es/docs/Web/API/Web_Speech_API).

### Estructura de una página de propiedades

Cree sus páginas de propiedades como subpáginas de la interfaz en la que están implementadas. Copie la estructura de otra página de propiedades para que sirva como base para su nueva página.

Edite el nombre de la página de propiedades para seguir la convención `Interfaz.nombre_de_propiedad`.

Las páginas de propiedades deben tener las siguientes secciones:

1. **Título**: el título de la página debe ser **NombreInterfaz.nombrePropiedad**. El nombre de la interfaz debe comenzar con una letra mayúscula. Aunque una interfaz se implementa en JavaScript en el prototipo de objetos, no incluimos `.prototype.` en el título, como lo hacemos en la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**: Incluya la macro \\{{APIRef}} en la primera línea de cada página de propiedades, incluyendo el nombre de la API como argumento, por ejemplo \\{{APIRef("Web Audio API")}}. Esta macro sirve para construir un menú de referencia en el lado izquierdo de la página de interfaz, incluyendo propiedades y métodos, y otros enlaces rápidos según lo definido en la macro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (pida a alguien que agregue su API a una entrada GroupData existente, o que cree una nueva, si aún no está allí). El menú se verá algo como la captura de pantalla a continuación.
   ![Esta captura de pantalla muestra un menú de navegación vertical para la interfaz OscillatorNode, con múltiples sublistas para métodos y propiedades, generado por la macro APIRef](apiref-links.png)
3. **Estado de la característica**: un [banner que indica el estado de la característica](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (como obsoleto, no estándar o experimental) se agrega automáticamente, si es necesario. Para eso debe [actualizar el estado en el repositorio browser-compat-data](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Descripción**: el primer párrafo de la página de propiedades debe proporcionar una descripción breve y concisa del propósito general de la propiedad. También puede incluir un par de párrafos más si se requiere alguna descripción adicional. Información adicional obvia para incluir es su valor predeterminado/inicial y si es de solo lectura o no. La estructura de la primera oración debe ser:
   - Para propiedades de solo lectura
     - : La propiedad de solo lectura **`NombreInterfaz.propiedad`** devuelve un {{domxref("tipo")}} que…
   - Para otras propiedades
     - : La propiedad **`NombreInterfaz.propiedad`** es un {{domxref("tipo")}} que…

   > [!NOTE]
   > `NombreInterfaz.propiedad` debe estar en `<code>` y adicionalmente en negrita (`<strong>`) la primera vez que se use.

5. **Valor**: la sección Valor contendrá una descripción del valor de la propiedad. Esto debe contener el tipo de datos de la propiedad y lo que representa. Para ver un ejemplo, consulte {{domxref("SpeechRecognition.grammars")}}

6. **Ejemplos**: incluya un listado de código para mostrar el uso típico de la propiedad en cuestión. Debe comenzar con un ejemplo simple que muestre cómo se crea un objeto del tipo y cómo acceder a la propiedad. Se pueden agregar ejemplos más complejos después de dicho ejemplo. En estos ejemplos adicionales, en lugar de listar TODO el código, debe listar un subconjunto interesante. Para un listado de código completo, puede referenciar un repositorio de [GitHub](https://github.com/) que contenga el ejemplo completo, y también podría vincular a un ejemplo en vivo creado usando la [función GitHub gh-pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site) (siempre que, por supuesto, use solo código del lado del cliente). Si el ejemplo es visual, también puede usar la función [Live Sample](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) de MDN para hacerlo en vivo y jugable en la página.
7. **Tabla de especificaciones**: en este punto debe incluir una tabla de especificaciones; consulte la sección "Crear una tabla de referencia de especificaciones" para obtener más detalles.
8. **Compatibilidad con navegadores**: ahora debe incluir una tabla de compatibilidad con navegadores. Consulte [Tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener detalles.
9. **Véase también**: la sección "Véase también" es un buen lugar para incluir enlaces adicionales que puedan ser útiles al usar esta tecnología: como métodos y propiedades afectados por un cambio de esta propiedad o eventos lanzados en relación con ella. Se pueden agregar más enlaces útiles al aprender sobre esta tecnología, incluyendo tutoriales de MDN (y externos), ejemplos, bibliotecas,…, aunque puede ser útil considerar agregarlos en la página de referencia de la interfaz en su lugar.

#### Ejemplos de páginas de propiedades

Los siguientes son ejemplos excelentes de páginas de propiedades:

- {{domxref("Request.method")}} de la [Fetch API](/es/docs/Web/API/Fetch_API).
- {{domxref("SpeechSynthesis.speaking")}} de la [Web Speech API](/es/docs/Web/API/Web_Speech_API).

### Estructura de una página de métodos

Cree sus páginas de métodos como subpáginas de la interfaz en la que están implementadas. Copie la estructura de otra página de métodos para que sirva como base para su nueva página.

Las páginas de métodos necesitan las siguientes secciones:

1. **Título**: el título de la página debe ser **NombreInterfaz.método()** (con los dos paréntesis finales), pero el slug (el final de la URL de la página) no debe incluir los paréntesis. Además, el nombre de la interfaz debe comenzar con una letra mayúscula. Aunque una interfaz se implementa en JavaScript en el prototipo de objetos, no ponemos `.prototype.` en el título, como lo hacemos en la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**: Incluya la macro \\{{APIRef}} en la primera línea de cada página de métodos, incluyendo el nombre de la API como argumento, por ejemplo \\{{APIRef("Web Audio API")}}. Esta macro sirve para construir un menú de referencia en el lado izquierdo de la página de interfaz, incluyendo propiedades y métodos, y otros enlaces rápidos según lo definido en la macro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (pida a alguien que agregue su API a una entrada GroupData existente, o que cree una nueva, si aún no está allí). El menú se verá algo como la captura de pantalla a continuación.
   ![Esta captura de pantalla muestra un menú de navegación vertical para la interfaz OscillatorNode, con múltiples sublistas para métodos y propiedades, generado por la macro APIRef](apiref-links.png)
3. **Estado de la característica**: un [banner que indica el estado de la característica](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (como obsoleto, no estándar o experimental) se agrega automáticamente, si es necesario. Para eso debe [actualizar el estado en el repositorio browser-compat-data](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Descripción**: el primer párrafo de la página del método debe proporcionar una descripción breve y concisa del propósito general del método. También puede incluir un par de párrafos más si se requiere alguna descripción adicional. Información adicional obvia para incluir son sus valores de parámetros predeterminados, cualquier teoría en la que se base el método y qué hacen los valores de los parámetros.
   - El inicio de la primera oración debe seguir la siguiente estructura:
     - : La interfaz del método **`NombreInterfaz.método()`** …

   > [!NOTE]
   > `NombreInterfaz.método()` debe estar en `<code>` y también en negrita (`<strong>`) la primera vez que se use.

5. **Sintaxis**: la sección de sintaxis debe incluir un ejemplo de 2 a 3 líneas, generalmente solo la construcción de la interfaz y luego la llamada al método de la interfaz.
   - La sintaxis debe ser de la forma:
     - : método(param1, param2, …)

   La sección de sintaxis debe incluir tres subsecciones (consulte {{domxref("SubtleCrypto.sign()")}} para ver un ejemplo):
   - "Parámetros": esto debe contener una lista de definiciones (o lista desordenada) que nombre y describa los diferentes parámetros que toma el método. Debe incluir la macro {{optional_inline}} junto al nombre del parámetro, en el caso de parámetros opcionales. Si no hay parámetros, esta sección debe omitirse.
   - "Valor de retorno": esto debe decir qué valor de retorno tiene el método, ya sea un valor simple como un doble o booleano, o un valor más complejo como otro objeto de interfaz, en cuyo caso puede usar la macro \\{{domxref}} para vincular a la página de la API de MDN que cubre esa interfaz (si existe). Un método puede no devolver nada, en cuyo caso el valor de retorno debe escribirse como "\\{{jsxref('undefined')}}" (que se verá así en la página renderizada: {{jsxref("undefined")}}).
   - "Excepciones": esto debe enumerar las diferentes excepciones que pueden plantearse al invocar el método y qué circunstancias las causan. Si no hay excepciones, esta sección debe omitirse.

6. **Ejemplos**: incluya un listado de código para mostrar el uso típico del método en cuestión. En lugar de listar TODO el código, debe listar un subconjunto interesante. Para un listado de código completo, debe referenciar un repositorio de [GitHub](https://github.com/) que contenga el ejemplo completo, y también podría vincular a un ejemplo en vivo creado usando la [función GitHub gh-pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site) (siempre que, por supuesto, use solo código del lado del cliente). Si el ejemplo es visual, también puede usar la función [Live Sample](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) de MDN para hacerlo en vivo y jugable en la página.
7. **Tabla de especificaciones**: en este punto debe incluir una tabla de especificaciones; consulte la sección "Crear una tabla de referencia de especificaciones" para obtener más detalles.
8. **Compatibilidad con navegadores**: ahora debe incluir una tabla de compatibilidad con navegadores. Consulte [Tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener detalles.

#### Ejemplos de páginas de métodos

Los siguientes son ejemplos excelentes de páginas de métodos:

- {{domxref("Document.getAnimations")}} de la [Web Animations API](/es/docs/Web/API/Web_Animations_API).
- {{domxref("Window/fetch", "fetch()")}} de la [Fetch API](/es/docs/Web/API/Fetch_API).

## Barras laterales

Una vez que haya creado sus páginas de referencia de API, querrá insertar las barras laterales correctas en ellas para asociar las páginas. Nuestra guía [Barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) explica cómo hacerlo.

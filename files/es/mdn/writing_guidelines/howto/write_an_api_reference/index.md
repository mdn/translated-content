---
title: Cómo escribir una referencia de API
short-title: Escribir una referencia de API
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Esta guía te explica todo lo que necesitas saber para escribir una referencia de API en MDN.

## Preparación

Antes de empezar a documentar una API, hay varias cosas que debes preparar y planificar antes de ponerte a escribir.

### Conocimientos previos

Asumimos que, antes de leer esta guía, tienes un conocimiento razonable de:

- Tecnologías web como HTML, CSS y JavaScript. JavaScript es la más importante.
- Lectura de especificaciones de tecnologías web. Las consultarás con frecuencia mientras documentas API.

El resto se puede aprender sobre la marcha.

### Recursos previos

Antes de empezar a documentar una API, debes tener disponibles:

1. La especificación más reciente:
   Ya sea una Recomendación W3C o un borrador inicial del editor, debes consultar el borrador más reciente disponible de la especificación (o las especificaciones) que cubre esa API.
   Para encontrarla, generalmente puedes hacer una búsqueda web. La versión más reciente suele estar enlazada desde todas las versiones de la especificación, listada como "borrador más reciente" (_latest draft_) o algo similar.
2. Los navegadores web modernos más recientes:
   Estos deberían ser compilaciones experimentales o alfa, como [Firefox Nightly](https://www.firefox.com/en-US/channel/desktop/) o [Chrome Canary](https://www.google.com/intl/en/chrome/canary/), que tienen más probabilidades de admitir las características que estás documentando.
   Esto es especialmente importante si estás documentando una API nueva o experimental.
3. Demos, publicaciones de blog y otra información: Encuentra toda la información que puedas.
4. Contactos útiles de ingeniería:
   Encuentra un contacto de ingeniería útil con quien consultar dudas sobre la especificación; alguien involucrado en la estandarización de la API o en su implementación en un navegador.
   Buenos lugares para encontrarlos son:
   - La libreta de direcciones interna de tu empresa, si trabajas para una compañía relevante.
   - Una lista de correo pública relacionada con la discusión de esa API, como [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) de Mozilla o una lista de W3C como [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/).
   - La propia especificación. Por ejemplo, la [especificación de la Web Audio API](https://webaudio.github.io/web-audio-api/) lista a sus autores y sus datos de contacto al principio.

### Dedica tiempo a explorar la API

Crearás demos muchas veces durante el proceso de documentación de una API, pero conviene empezar dedicando tiempo a familiarizarte con su funcionamiento: aprende cuáles son las principales interfaces, propiedades y métodos, cuáles son los casos de uso más habituales y cómo escribir funcionalidades sencillas con ella.

Cuando una API ha cambiado, ten cuidado de que los demos existentes que consultes o uses como referencia no estén desactualizados. Verifica las estructuras principales que se utilizan en la demo para comprobar si coinciden con la especificación más reciente. Es posible que tampoco funcionen en navegadores actualizados, aunque esto no es una prueba muy fiable, ya que los navegadores siguen admitiendo las características antiguas por compatibilidad con versiones anteriores.

> [!NOTE]
> Si la especificación se ha actualizado recientemente de manera que, por ejemplo, un método ahora se define de forma diferente, pero el método antiguo sigue funcionando en los navegadores, normalmente tendrás que documentar ambos en el mismo lugar, para cubrir tanto el método antiguo como el nuevo.
> Si necesitas ayuda, consulta los demos que hayas encontrado o contacta con alguien del equipo de ingeniería.

### Crea la lista de documentos que necesitas escribir o actualizar

Por lo general, una referencia de API contiene las siguientes páginas.
Puedes encontrar más detalles sobre el contenido de cada página, ejemplos y plantillas en nuestro artículo [Tipos de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types).
Antes de empezar, escribe una lista de todas las páginas que debes crear.

1. Página de descripción general
2. Páginas de interfaz
3. Páginas de constructor
4. Páginas de método
5. Páginas de propiedad
6. Páginas de evento
7. Páginas de concepto/guía
8. Ejemplos

> [!NOTE]
> En este artículo usaremos la [Web Audio API](/es/docs/Web/API/Web_Audio_API) como ejemplo.

#### Páginas de descripción general

Una única página de descripción general describe la función de la API, sus interfaces de nivel superior, las características relacionadas contenidas en otras interfaces y otros detalles de alto nivel.
Su nombre y slug deben ser el nombre de la API seguido de "API". Coloca las páginas en el nivel superior de la referencia de API, como hija de [https://developer.mozilla.org/es/docs/Web/API](/es/docs/Web/API).

Ejemplo:

- Título: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API](/es/docs/Web/API/Web_Audio_API)

#### Páginas de interfaz

Cada interfaz tiene su propia página, que describe el propósito de la interfaz, lista todos sus miembros (constructores, métodos, propiedades, etc.) y muestra con qué navegadores es compatible.
El nombre y el slug de la página deben coincidir exactamente con el nombre de la interfaz tal como aparece en la especificación.
Cada página se coloca en el nivel superior de la referencia de API, como hija de [https://developer.mozilla.org/es/docs/Web/API](/es/docs/Web/API).

Ejemplos:

- Título: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/es/docs/Web/API/AudioContext](/es/docs/Web/API/AudioContext)

<!---->

- Título: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/es/docs/Web/API/AudioNode](/es/docs/Web/API/AudioNode)

> [!NOTE]
> Documentamos todos los miembros que aparecen en la interfaz. Ten en cuenta las siguientes reglas:

- Documentamos los métodos definidos en el prototipo de un objeto que implementa esta interfaz (métodos de instancia) y los métodos definidos en la propia clase (métodos estáticos).
  En los casos excepcionales en que ambos existen en la misma interfaz, debes enumerarlos en secciones separadas en la página (Métodos estáticos/Métodos de instancia).
  Por lo general, solo existen métodos de instancia, en cuyo caso puedes agruparlos bajo el título "Métodos".
- No documentamos las propiedades y métodos heredados de la interfaz: se enumeran en la interfaz principal correspondiente. Aunque sí hacemos mención de su existencia.
- Sí documentamos las propiedades y métodos definidos en los mixins. Consulta la [guía de contribución para mixins](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins) para más detalles.
- También se enumeran los métodos especiales como el convertidor a cadena (`toString()`) y el convertidor a JSON (`toJSON()`), si existen.
- Los constructores con nombre (como `Image()` para {{domxref("HTMLImageElement")}}) también se enumeran, si son relevantes.

#### Páginas de constructor

Cada interfaz tiene cero o un constructor, documentado en una subpágina de la página de la interfaz. Describe el propósito del constructor y muestra cuál es su sintaxis, ejemplos de uso, información de compatibilidad con navegadores, etc. Su slug es el nombre del constructor, que es exactamente el mismo que el nombre de la interfaz, y el título es nombre de la interfaz, punto, nombre del constructor, y luego paréntesis al final.

Ejemplo:

- Título: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/es/docs/Web/API/AudioContext/AudioContext](/es/docs/Web/API/AudioContext/AudioContext)

#### Páginas de propiedad

Cada interfaz tiene cero o más propiedades, documentadas en subpáginas de la página de la interfaz. Cada página describe el propósito de la propiedad y muestra cuál es su sintaxis, ejemplos de uso, información de compatibilidad con navegadores, etc. Su slug es el nombre de la propiedad, y el título es nombre de la interfaz, punto, y luego el nombre de la propiedad.

Ejemplo:

- Título: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/es/docs/Web/API/AudioContext/state](/es/docs/Web/API/BaseAudioContext/state)

<!---->

#### Páginas de método

Cada interfaz tiene cero o más métodos, documentados en subpáginas de la página de la interfaz. Cada página describe el propósito del método y muestra cuál es su sintaxis, ejemplos de uso, información de compatibilidad con navegadores, etc. Su slug es el nombre del método, y el título es nombre de la interfaz, punto, nombre del método, y luego paréntesis.

Ejemplos:

- Título: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/es/docs/Web/API/AudioContext/close](/es/docs/Web/API/AudioContext/close)

<!---->

- Título: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/es/docs/Web/API/AudioContext/createGain](/es/docs/Web/API/BaseAudioContext/createGain)

#### Páginas de evento

Documenta los eventos como subpáginas de sus interfaces de destino y usa el slug _eventname_\_event (donde _eventname_ es el nombre del evento) con el título `Interface: eventName event`.

No crees páginas para las propiedades del manejador de eventos `on`. Menciona ambas formas de acceder al evento en la página `eventName_event`.

Ejemplo:

- Título: XRSession: end event
- Slug: end_event
- URL: [https://developer.mozilla.org/es/docs/Web/XRSession/end_event](/es/docs/Web/API/XRSession/end_event)

#### Páginas de concepto/guía

La mayoría de las referencias de API tienen al menos una guía y, a veces, también una página de conceptos. Como mínimo, una referencia de API debe incluir una guía llamada "Uso de _nombre-de-la-api_", que proporcione una guía básica sobre cómo usar la API. Las API más complejas pueden requerir varias guías de uso para explicar los distintos aspectos de la API.

Si es necesario, también puedes incluir un artículo de conceptos llamado "Conceptos de _nombre-de-la-api_", que explique la teoría detrás de cualquier concepto relacionado con la API que los desarrolladores deban entender para usarla eficazmente.

Todos estos artículos deben crearse como subpáginas de la página de descripción general de la API. Por ejemplo, la Web Audio tiene cuatro guías y un artículo de conceptos:

- [https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/es/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/es/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/es/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### Ejemplos

Debes crear algunos ejemplos que demuestren al menos los casos de uso más comunes de la API. Puedes colocarlos donde consideres adecuado, aunque el lugar recomendado es el [repositorio de GitHub de MDN](https://github.com/mdn/).

#### Listarlas todas

Crear una lista con todas estas subpáginas es una buena forma de llevar un seguimiento. Por ejemplo:

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
- Events (actualizar lista)
  - start
  - end
  - …

Cada interfaz en la lista tiene una página separada creada para ella como una subpágina de `https://developer.mozilla.org/es/docs/Web/API`; por ejemplo, el documento para {{domxref("AudioContext")}} se ubicaría en `https://developer.mozilla.org/es/docs/Web/API/AudioContext`. Cada [página de interfaz](#interface_pages) explica qué hace esa interfaz y proporciona una lista de los métodos y propiedades que la componen. Luego, cada método y propiedad se documenta en su propia página, que se crea como una subpágina de la interfaz a la que pertenece. Por ejemplo, {{domxref("BaseAudioContext/currentTime")}} está documentada en `https://developer.mozilla.org/es/docs/Web/API/AudioContext/currentTime`.

## Crea las páginas

Ahora crea las páginas que necesitas, siguiendo las estructuras que se indican a continuación. Nuestro [README de contenido de MDN](https://github.com/mdn/content#adding-a-new-document) contiene instrucciones para crear un nuevo documento, y nuestra guía de [Tipos de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types) contiene más ejemplos y plantillas de página que pueden ser útiles.

### Estructura de una página de descripción general

Las páginas de inicio de API variarán mucho en longitud según el tamaño de la API, pero todas tendrán básicamente las mismas características. Consulta [https://developer.mozilla.org/es/docs/Web/API/Web_Audio_API](/es/docs/Web/API/Web_Audio_API) para ver un ejemplo de una página de inicio extensa.

A continuación se describen las características de una página de inicio:

1. **Descripción**: el primer párrafo de la página de inicio debe ofrecer una descripción breve y concisa del propósito general de la API.
2. **Sección de conceptos y uso**: la siguiente sección debe titularse "Conceptos y uso de \[nombre de la API]" y proporcionar una descripción general de todas las funcionalidades principales que ofrece la API, qué problemas resuelve y cómo funciona, todo a un nivel general. Esta sección debe ser bastante breve y no entrar en detalles de código ni de implementación específicos.
3. **Lista de interfaces**: esta sección debe titularse "Interfaces de \[nombre de la API]" y proporcionar enlaces a la página de referencia de cada interfaz que compone la API, junto con una breve descripción de lo que hace cada una. Consulta la sección "Referenciar a otras características de API con la macro \\{{domxref}}" para crear nuevas páginas de forma más rápida.
4. **Ejemplos**: esta sección debe mostrar uno o dos casos de uso de la API.
5. **Tabla de especificaciones**: en este punto debes incluir una tabla de especificaciones; consulta la sección "Crear una tabla de referencia de especificaciones" para más detalles.
6. **Compatibilidad con navegadores**: ahora necesitas incluir una tabla de compatibilidad con navegadores. Consulta [Tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para más detalles.
7. **Véase también**: la sección "Véase también" es un buen lugar para incluir enlaces adicionales que pueden ser útiles al aprender sobre esta tecnología, como tutoriales de MDN (y externos), ejemplos, bibliotecas, etc.

### Estructura de una página de interfaz

Ahora ya estás listo para empezar a escribir las páginas de tus interfaces. Cada página de referencia de interfaz debe tener la siguiente estructura:

1. **\\{{APIRef}}**: incluye la macro \\{{APIRef}} en la primera línea de cada página de interfaz, con el nombre de la API como argumento, por ejemplo \\{{APIRef("Web Audio API")}}. Esta macro construye un menú de referencia en el lado izquierdo de la página de interfaz, que incluye propiedades y métodos, y otros enlaces de referencia definidos en la macro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (pide a alguien que agregue tu API a una entrada existente de GroupData, o que cree una nueva, si todavía no aparece). El menú tendrá un aspecto similar al de la captura de pantalla siguiente.
   ![Esta captura de pantalla muestra un menú de navegación vertical para la interfaz OscillatorNode, con varias sublistas para métodos y propiedades, generado por la macro APIRef](apiref-links.png)
2. **Estado de la característica**: si es necesario, se añade automáticamente un [banner que indica el estado de la característica](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (como obsoleta, no estándar o experimental). Para ello, debes [actualizar el estado en el repositorio browser-compat-data](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
3. **Descripción**: el primer párrafo de la página de interfaz debe proporcionar una descripción breve y concisa del propósito general de la interfaz. También es posible que desees incluir un par de párrafos más si se requiere alguna descripción adicional. Si la interfaz es en realidad un diccionario, usa ese término en lugar de "interfaz".
4. **Diagrama de herencia**: usa la macro [`\{{InheritanceDiagram}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/inheritance_diagram.rs) para incrustar un diagrama SVG de herencia de la interfaz.
5. **Lista de propiedades, lista de métodos**: estas secciones deben titularse "Propiedades" y "Métodos", y proporcionar enlaces (usando la macro \\{{domxref}}) a la página de referencia de cada propiedad o método de esa interfaz, junto con una descripción de lo que hace cada uno. Deben marcarse usando [listas de descripción/definición](/es/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists). Cada descripción debe ser breve y concisa: una oración si es posible. Consulta la sección "Referencia a otras características de API con la macro \\{{domxref}}" para crear enlaces a otras páginas de forma más rápida.

   Al principio de ambas secciones, antes del inicio de la lista de propiedades o métodos, indica la herencia con la oración adecuada, en cursiva:
   - _Esta interfaz no implementa ninguna propiedad específica, pero hereda propiedades de \\{{domxref("XYZ")}} y \\{{domxref("XYZ2")}}._
   - _Esta interfaz también hereda propiedades de \\{{domxref("XYZ")}} y \\{{domxref("XYZ2")}}._
   - _Esta interfaz no implementa ningún método específico, pero hereda métodos de \\{{domxref("XYZ")}} y \\{{domxref("XYZ2")}}._
   - _Esta interfaz también hereda métodos de \\{{domxref("XYZ")}} y \\{{domxref("XYZ2")}}._

   > [!NOTE]
   > Las propiedades de solo lectura deben incluir la macro \\{{ReadOnlyInline}}, la cual genera una pequeña y práctica etiqueta de "Solo lectura", en la misma línea que sus enlaces \\{{domxref}} (después del uso de las macros \\{{experimental_inline}}, \\{{non-standard_Inline}} y \\{{deprecated_inline}}, si alguna de ellas es necesaria).

6. **Ejemplos**: incluye un fragmento de código que muestre el uso típico de una característica principal de la API. En lugar de mostrar todo el código, selecciona un fragmento interesante. Para un fragmento de código completo, debes hacer referencia a un repositorio de [GitHub](https://github.com/) que contenga el ejemplo completo, y también puedes enlazar a un ejemplo en vivo creado con la funcionalidad [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) (siempre que use solo código del lado del cliente). Si el ejemplo es visual, también puedes usar la funcionalidad [Live Sample](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) de MDN para hacerlo interactivo en la página.
7. **Tabla de especificaciones**: en este punto debes incluir una tabla de especificaciones; consulta la sección "Crear una tabla de referencia de especificaciones" para más detalles.
8. **Compatibilidad con navegadores**: ahora debes incluir una tabla de compatibilidad con navegadores. Consulta [Tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para más detalles.
9. **Polyfill**: si procede, incluye esta sección con el código de un polyfill que permita usar la API incluso en navegadores que no la implementan. Si no existe ningún polyfill o no es necesario, omite esta sección por completo.
10. **Véase también**: la sección "Véase también" es un buen lugar para incluir más enlaces que puedan ser útiles al aprender sobre esta tecnología, como tutoriales de MDN (y externos), ejemplos, bibliotecas, etc. Tenemos una política flexible para enlazar fuentes externas, pero presta atención:
    - No incluyas páginas con la misma información que otra página en MDN; en su lugar, enlaza a esa página.
    - No pongas nombres de autores: somos un sitio de documentación neutral. Enlaza al documento; el nombre del autor se mostrará allí.
    - Presta especial atención a las publicaciones de blog: tienden a quedar desactualizadas (sintaxis antigua, información de compatibilidad incorrecta). Enlaza a ellas solo si aportan un valor claro que no se pueda encontrar en un documento mantenido activamente.
    - No uses verbos de acción como "Consulta … para más información" o "Haz clic en…": no sabes si tu lector puede ver o hacer clic en el enlace (como en una versión impresa del documento).

#### Ejemplos de páginas de interfaz

Los siguientes son buenos ejemplos de páginas de interfaz:

- {{domxref("Request")}} de la [Fetch API](/es/docs/Web/API/Fetch_API).
- {{domxref("SpeechSynthesis")}} de la [Web Speech API](/es/docs/Web/API/Web_Speech_API).

### Estructura de una página de propiedad

Crea tus páginas de propiedad como subpáginas de la interfaz en la que están implementadas. Copia la estructura de otra página de propiedad como base para la nueva.

Edita el nombre de la página de propiedad para que siga la convención `Interface.property_name`.

Las páginas de propiedad deben tener las siguientes secciones:

1. **Título**: el título de la página debe ser **InterfaceName.propertyName**. El nombre de la interfaz debe empezar con mayúscula. Aunque una interfaz se implementa en JavaScript sobre el prototipo de los objetos, no incluimos `.prototype.` en el título, a diferencia de la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**: incluye la macro \\{{APIRef}} en la primera línea de cada página de propiedad, con el nombre de la API como argumento, por ejemplo \\{{APIRef("Web Audio API")}}. Esta macro construye un menú de referencia en el lado izquierdo de la página de la interfaz, con propiedades, métodos y otros enlaces de referencia tal como se definen en la macro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (pide a alguien que añada tu API a una entrada existente de GroupData, o que cree una nueva, si todavía no aparece). El menú tendrá un aspecto similar al de la captura de pantalla siguiente.
   ![Esta captura de pantalla muestra un menú de navegación vertical para la interfaz OscillatorNode, con varias sublistas de métodos y propiedades, generado por la macro APIRef](apiref-links.png)
3. **Estado de la característica**: si es necesario, se añade automáticamente un [banner que indica el estado de la característica](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (como obsoleta, no estándar o experimental). Para ello, debes [actualizar el estado en el repositorio browser-compat-data](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Descripción**: el primer párrafo de la página de propiedad debe ofrecer una descripción breve y concisa del propósito general de la propiedad. También es posible que desees incluir un par de párrafos más si se requiere alguna descripción adicional. La información adicional obvia que se debe incluir es su valor predeterminado o inicial, y si es de solo lectura o no. La estructura de la primera oración debe ser:
   - Para propiedades de solo lectura
     - : La propiedad de solo lectura **`InterfaceName.property`** devuelve un \\{{domxref("type")}} que…
   - Para otras propiedades
     - : La propiedad **`InterfaceName.property`** es un \\{{domxref("type")}} que…

   > [!NOTE]
   > `InterfaceName.property` debe estar en `<code>` y, además, en negrita (`<strong>`) la primera vez que se use.

5. **Valor**: la sección Valor contendrá una descripción del valor de la propiedad. Debe incluir el tipo de dato de la propiedad y lo que representa. Como ejemplo, consulta {{domxref("SpeechRecognition.grammars")}}.

6. **Ejemplos**: incluye un fragmento de código que muestre el uso típico de la propiedad en cuestión. Comienza con un ejemplo sencillo que muestre cómo se crea un objeto de ese tipo y cómo se accede a la propiedad. Puedes añadir ejemplos más complejos a continuación. En esos ejemplos adicionales, en lugar de mostrar todo el código, selecciona un fragmento interesante. Para ver el código completo, puedes consultar un repositorio de [GitHub](https://github.com/) que contenga el ejemplo completo, y también puedes enlazar a un ejemplo en vivo creado con la [funcionalidad gh-pages de GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) (siempre que use solo código del lado del cliente). Si el ejemplo es visual, también puedes usar la funcionalidad [Live Sample](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) de MDN para hacerlo interactivo en la página.
7. **Tabla de especificaciones**: en este punto debes incluir una tabla de especificaciones; consulta la sección "Crear una tabla de referencia de especificaciones" para más detalles.
8. **Compatibilidad con navegadores**: ahora debes incluir una tabla de compatibilidad con navegadores. Consulta [Tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para más detalles.
9. **Véase también**: la sección "Véase también" es un buen lugar para incluir más enlaces que puedan ser útiles al usar esta tecnología: como métodos y propiedades afectados por un cambio en esta propiedad, o eventos relacionados con ella. También puedes añadir más enlaces útiles para aprender sobre esta tecnología, como tutoriales de MDN (y externos), ejemplos, bibliotecas, etc., aunque puede ser más conveniente añadirlos en la página de referencia de la interfaz.

#### Ejemplos de páginas de propiedad

Los siguientes son buenos ejemplos de páginas de propiedad:

- {{domxref("Request.method")}} de la [Fetch API](/es/docs/Web/API/Fetch_API).
- {{domxref("SpeechSynthesis.speaking")}} de la [Web Speech API](/es/docs/Web/API/Web_Speech_API).

### Estructura de una página de método

Crea la página de cada método como subpágina de la interfaz en la que está implementado. Copia la estructura de otra página de método como base para la nueva.

Las páginas de método necesitan las siguientes secciones:

1. **Título**: el título de la página debe ser **InterfaceName.method()** (con los dos paréntesis al final), pero el slug (el final de la URL de la página) no debe incluir los paréntesis. Además, el nombre de la interfaz también debe empezar con mayúscula. Aunque una interfaz se implementa en JavaScript sobre el prototipo de los objetos, no ponemos `.prototype.` en el título, como hacemos en la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference).
2. **\\{{APIRef}}**: incluye la macro \\{{APIRef}} en la primera línea de cada página de método, con el nombre de la API como argumento, por ejemplo \\{{APIRef("Web Audio API")}}. Esta macro construye un menú de referencia en el lado izquierdo de la página de la interfaz, con propiedades, métodos y otros enlaces de referencia tal como se definen en la macro [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) (pide a alguien que añada tu API a una entrada existente de GroupData, o que cree una nueva, si todavía no aparece). El menú tendrá un aspecto similar al de la captura de pantalla siguiente.
   ![Esta captura de pantalla muestra un menú de navegación vertical para la interfaz OscillatorNode, con varias sublistas de métodos y propiedades, generado por la macro APIRef](apiref-links.png)
3. **Estado de la característica**: si es necesario, se añade automáticamente un [banner que indica el estado de la característica](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_page_banners) (como obsoleta, no estándar o experimental). Para ello, debes [actualizar el estado en el repositorio browser-compat-data](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

4. **Descripción**: el primer párrafo de la página de método debe ofrecer una descripción breve y concisa del propósito general del método. También es posible que desees incluir un par de párrafos más si se requiere alguna descripción adicional. La información adicional obvia que se debe incluir son los valores predeterminados de los parámetros, cualquier teoría en la que se base el método y lo que hacen los valores de los parámetros.
   - El comienzo de la primera oración debe seguir la siguiente estructura:
     - : El método **`InterfaceName.method()`** de la interfaz…

   > [!NOTE]
   > `InterfaceName.method()` debe estar en `<code>` y, además, en negrita (`<strong>`) la primera vez que se use.

5. **Sintaxis**: la sección de sintaxis debe incluir un ejemplo de 2 a 3 líneas, generalmente solo la construcción de la interfaz y luego la llamada al método de la interfaz.
   - La sintaxis debe tener la siguiente forma:
     - : método(param1, param2, …)

   La sección de sintaxis debe incluir tres subsecciones (consulta {{domxref("SubtleCrypto.sign()")}} como ejemplo):
   - "Parámetros": debe contener una lista de definición (o una lista no ordenada) que nombre y describa los distintos parámetros que acepta el método. Incluye la macro {{optional_inline}} junto al nombre del parámetro en el caso de parámetros opcionales. Si no hay parámetros, omite esta subsección.
   - "Valor de retorno": debe indicar el valor de retorno del método, ya sea un valor simple como un double o un booleano, o un valor más complejo como otro objeto de interfaz, en cuyo caso puedes usar la macro \\{{domxref}} para enlazar a la página de MDN que cubre esa interfaz (si existe). Un método puede no devolver nada, en cuyo caso el valor de retorno debe escribirse como "\\{{jsxref('undefined')}}" (que en la página renderizada tendrá este aspecto: {{jsxref("undefined")}}).
   - "Excepciones": debe listar las distintas excepciones que pueden producirse al invocar el método y las circunstancias que las provocan. Si no hay excepciones, omite esta subsección.

6. **Ejemplos**: incluye un fragmento de código que muestre el uso típico del método en cuestión. En lugar de mostrar todo el código, selecciona un fragmento interesante. Para un fragmento de código completo, debes hacer referencia a un repositorio de [GitHub](https://github.com/) que contenga el ejemplo completo, y también puedes enlazar a un ejemplo en vivo creado con la funcionalidad [GitHub gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) (siempre que use solo código del lado del cliente). Si el ejemplo es visual, también puedes usar la característica [Live Sample](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) de MDN para hacerlo interactivo en la página.
7. **Tabla de especificaciones**: en este punto debes incluir una tabla de especificaciones; consulta la sección "Crear una tabla de referencia de especificaciones" para más detalles.
8. **Compatibilidad con navegadores**: ahora debes incluir una tabla de compatibilidad con navegadores. Consulta [Tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para más detalles.

#### Ejemplos de páginas de métodos

Los siguientes son buenos ejemplos de páginas de método:

- {{domxref("Document.getAnimations")}} de la [Web Animations API](/es/docs/Web/API/Web_Animations_API).
- {{domxref("Window/fetch", "fetch()")}} de la [Fetch API](/es/docs/Web/API/Fetch_API).

## Barras laterales

Una vez que hayas creado tus páginas de referencia de API, querrás insertar las barras laterales correctas en ellas para asociar las páginas entre sí. Nuestra guía de [Barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) explica cómo hacerlo.

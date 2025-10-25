---
title: La API DOM HTML
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{DefaultAPISidebar("HTML DOM")}}

La **API DOM HTML** está compuesta por las interfaces que definen la funcionalidad de cada uno de los {{Glossary("element", "elementos")}} en {{Glossary("HTML")}}, así como cualquier tipo e interfaz de apoyo en las que se basa.

Las áreas funcionales incluidas en la API DOM HTML son las siguientes:

- Acceso y control de elementos HTML a través del {{Glossary("DOM")}}.
- Acceso y manipulación de los datos de un formulario.
- Interactuar con el contenido de imágenes 2D y el contexto de un {{HTMLElement("canvas")}} HTML, por ejemplo, para dibujar sobre él.
- Gestión de los medios conectados a los elementos HTML multimedia ({{HTMLElement("audio")}} y {{HTMLElement("video")}}).
- Arrastrar y soltar contenido en páginas web.
- Acceso al historial de navegación del navegador.
- Interfaces de apoyo y conexión para otras API como [Web Components](/es/docs/Web/API/Web_components), {{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}}, {{DOMxRef("Web_Workers_API", "Web Workers", "", "1")}}, {{DOMxRef("WebSockets_API", "WebSocket", "", "1")}}, y {{DOMxRef("Server-sent_events", "Server-sent events", "", "1")}}.

## Conceptos y uso de DOM HTML

En este articulo, nos centraremos en las partes del DOM HTML que implican la interacción con elementos HTML. El análisis de otras áreas, como {{DOMxRef("HTML_Drag_and_Drop_API", "Drag and Drop", "", "1")}}, {{DOMxRef("WebSockets_API", "WebSockets", "", "1")}}, {{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}}, etc., se puede encontrar en la documentación de esas API.

### Estructura de un elemento HTML

El Modelo de Objetos del Documento o Modelo en Objetos para la Representación de Documentos ({{Glossary("DOM")}}) es una arquitectura que describe la estructura de una {{domxref("document")}}; Cada documento está representado por una instancia de la interfaz {{domxref("Document")}}. A su vez, un documento consiste en un árbol jerárquico de **nodos**, en el que un nodo es un registro fundamental que representa un único objeto dentro del documento (como un elemento o un nodo de texto).

Los nodos pueden ser estrictamente organizativos, proporcionando un medio para agrupar otros nodos o para proporcionar un punto en el que se pueda construir una jerarquía. Otros nodos, pueden representar componentes visibles de un documento. Cada nodo se basa en la interfaz {{domxref("Node")}} , que proporciona propiedades para obtener información sobre el nodo, así como métodos para crear, eliminar y organizar nodos dentro del DOM.

Los nodos no tienen ningún concepto de incluir el contenido que realmente se muestra en el documento. Son recipientes vacíos. La noción fundamental de un nodo que puede representar contenido visual se introduce mediante la interfaz {{domxref("Element")}}. Una instancia de objeto `Element` representa un único elemento en un documento creado utilizando HTML o un vocabulario {{glossary("XML")}} como {{glossary("SVG")}}.

Por ejemplo, consideremos un documento con dos elementos, uno de los cuales tiene dos elementos más anidados en su interior:
![Structure of a document with elements inside a document in a window](dom-structure.svg)

Si bien la interfaz del {{domxref("Document")}} se define como parte de la especificación {{DOMxRef("Document_Object_Model", "DOM", "", "1")}}, la especificación HTML la mejora significativamente para añadir información específica sobre el uso de DOM en el contexto de un navegador web, Así como para utilizarlo para representar documentos HTML específicamente.

Entre las cosas añadidas al `Document` por el estándar HTML se encuentran:

- Compatibilidad con el acceso a diversa información proporcionada por los encabezados {{Glossary("HTTP")}} al cargar la página, como la {{DOMxRef("Document/location", "location", "", "1")}} desde la que se cargo el documento, {{DOMxRef("Document/cookie", "cookies", "", "1")}}, {{DOMxRef("Document/lastModified", "modification date", "", "1")}}, {{DOMxRef("Document/referrer", "referring site", "", "1")}}, etc.
- Acceso a las listas de elementos del bloque {{HTMLElement("head")}} y del {{DOMxRef("Document/body", "body", "", "1")}}, así como a las listas de {{DOMxRef("Document/images", "images", "", "1")}}, {{DOMxRef("Document/links", "links", "", "1")}}, {{DOMxRef("Document/scripts", "scripts", "", "1")}}, etc., contenidos en el documento.
- Soporte para interactuar con el usuario mediante el examen de {{DOMxRef("Document/hasFocus", "focus", "", "1")}} y la ejecución de comandos sobre [editable content](/es/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- Manejadores de eventos para eventos del documento definidos por el estándar HTML que permiten acceder a eventos del {{DOMxRef("MouseEvent", "mouse", "", "1")}} y del {{DOMxRef("KeyboardEvent", "keyboard", "", "1")}}, {{DOMxRef("HTML_Drag_and_Drop_API", "drag and drop", "", "1")}}, {{DOMxRef("HTMLMediaElement", "media control", "", "1")}}, y mucho más.
- Manejadores de eventos para eventos que pueden enviarse tanto a elementos como a documentos; Actualmente, estos solo incluyen acciones de {{DOMxRef("Element/copy_event", "copy")}}, {{DOMxRef("Element/cut_event", "cut")}} y {{DOMxRef("Element/paste_event", "paste")}}.

### Interfaces de elementos HTML

La interfaz`Element` se ha adaptado aun más para representar elementos HTML especificamente mediante la introducción de la interfaz {{domxref("HTMLElement")}}, de la que heredan todas las clases de elementos HTML más específicas. Esto amplía la clase `Element` para añadir características generales específicas de HTML a los nodos de un elemento. Las propiedades añadidas por `HTMLElement` incluyen, por ejemplo {{domxref("HTMLElement.hidden", "hidden")}} y {{domxref("HTMLElement.innerText", "innerText")}}.

Un documento {{Glossary("HTML")}} es un árbol DOM en el que cada uno de los nodos es un elemento HTML, representado por la interfaz {{domxref("HTMLElement")}}. La clase `HTMLElement` , a su vez, implementa `Node`, por lo que cada elemento es también un nodo (pero no al revés). De esta manera, las características estructurales implementadas por la interfaz {{domxref("Node")}}, también están disponibles para los elementos HTML, lo que permite anidarlos entre sí, crearlos y eliminarlos, moverlos, etc.

Sin embargo, la interfaz `HTMLElement` es genérica y solo proporciona la funcionalidad común a todos los elementos HTML, como el ID del elemento, sus coordenadas, el HTML que lo compone, información sobre la posición de desplazamiento, etc.

Para ampliar la funcionalidad de la interfaz principal `HTMLElement` y proporcionar las características que necesita un elemento específico, la clase `HTMLElement` se divide en subconjuntos para añadir las propiedades y métodos necesarios. Por ejemplo, el elemento {{HTMLElement("canvas")}} está representado por un objeto de tipo {{domxref("HTMLCanvasElement")}}. `HTMLCanvasElement` aumenta el tipo `HTMLElement` añadiendo propiedades como {{domxref("HTMLCanvasElement.height", "height")}} y métodos como {{domxref("HTMLCanvasElement.getContext", "getContext()")}} para proporcionar características especificas del elemento canvas.

La herencia general para las clases de elementos HTML tiene el siguiente aspecto:

![Hierarchy of interfaces for HTML elements](html-dom-hierarchy.svg)

Como tal, un elemento hereda las propiedades y métodos de todos sus antecesores. Por ejemplo, consideremos un elemento {{HTMLElement("a")}}, que se representa en el DOM mediante un objeto de tipo {{domxref("HTMLAnchorElement")}}. El elemento por lo tanto, incluye las propiedades y métodos específicos del ancla descritos en la documentación de esa clase, pero también los definidos por {{domxref("HTMLElement")}} y {{domxref("Element")}}, así como los de {{domxref("Node")}} y, por último, {{domxref("EventTarget")}}.

Cada nivel define un aspecto clave de la utilidad del elemento. Desde `Node`, el elemento hereda conceptos relacionados con la capacidad del elemento para ser contenido por otro elemento y para contener otros elementos a su vez. Es especialmente importante lo que se gana al heredar de `EventTarget`: la capacidad de recibir y manejar eventos como clics del ratón, eventos de reproducción y pausa, etc.

Hay elementos que comparten características comunes y, por lo tanto, tienen un tipo intermedio adicional. Por ejemplo, los elementos {{HTMLElement("audio")}} y {{HTMLElement("video")}} presentan medios audiovisuales. Los tipos correspondientes, {{domxref("HTMLAudioElement")}} y {{domxref("HTMLVideoElement")}}, se basan ambos en el tipo común {{domxref("HTMLMediaElement")}}, que a su vez se basa en {{domxref("HTMLElement")}} y así sucesivamente. `HTMLMediaElement` define los métodos y propiedades comunes a los elementos de audio y vídeo.

Estas interfaces de elementos constituyen la mayor parte de la API DOM HTML y son el tema central de este articulo. El artículo [DOM](/es/docs/Web/API/Document_Object_Model) ofrece una introducción general al DOM y sus conceptos.

## Público objetivo de DOM HTML

Las características expuestas por el DOM HTML se encuentran entre las API mas utilizadas en el conjunto de herramientas de un desarrollador web. Todas las aplicaciones web, excepto las más simples, utilizan algunas características del DOM HTML.

## Interfaces API DOM HTML

La mayoría de las interfaces que componen la API DOM HTML se corresponden casi uno a uno con elementos HTML individuales o con un pequeño grupo de elementos con funcionalidades similares. Además, la API DOM HTML incluye algunas interfaces y tipos para dar soporte a las interfaces de elementos HTML.

### Interfaces de elementos HTML

Estas interfaces representan elementos HTML específicos (o conjunto de elementos relacionados que tienen las mismas propiedades y métodos asociados).

- {{DOMxRef("HTMLAnchorElement")}}
- {{DOMxRef("HTMLAreaElement")}}
- {{DOMxRef("HTMLAudioElement")}}
- {{DOMxRef("HTMLBaseElement")}}
- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLBRElement")}}
- {{DOMxRef("HTMLButtonElement")}}
- {{DOMxRef("HTMLCanvasElement")}}
- {{DOMxRef("HTMLDataElement")}}
- {{DOMxRef("HTMLDataListElement")}}
- {{DOMxRef("HTMLDetailsElement")}}
- {{DOMxRef("HTMLDialogElement")}}
- {{DOMxRef("HTMLDirectoryElement")}}
- {{DOMxRef("HTMLDivElement")}}
- {{DOMxRef("HTMLDListElement")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("HTMLEmbedElement")}}
- {{DOMxRef("HTMLFieldSetElement")}}
- {{DOMxRef("HTMLFormElement")}}
- {{DOMxRef("HTMLHRElement")}}
- {{DOMxRef("HTMLHeadElement")}}
- {{DOMxRef("HTMLHeadingElement")}}
- {{DOMxRef("HTMLHtmlElement")}}
- {{DOMxRef("HTMLIFrameElement")}}
- {{DOMxRef("HTMLImageElement")}}
- {{DOMxRef("HTMLInputElement")}}
- {{DOMxRef("HTMLLabelElement")}}
- {{DOMxRef("HTMLLegendElement")}}
- {{DOMxRef("HTMLLIElement")}}
- {{DOMxRef("HTMLLinkElement")}}
- {{DOMxRef("HTMLMapElement")}}
- {{DOMxRef("HTMLMediaElement")}}
- {{DOMxRef("HTMLMenuElement")}}
- {{DOMxRef("HTMLMetaElement")}}
- {{DOMxRef("HTMLMeterElement")}}
- {{DOMxRef("HTMLModElement")}}
- {{DOMxRef("HTMLObjectElement")}}
- {{DOMxRef("HTMLOListElement")}}
- {{DOMxRef("HTMLOptGroupElement")}}
- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLOutputElement")}}
- {{DOMxRef("HTMLParagraphElement")}}
- {{DOMxRef("HTMLPictureElement")}}
- {{DOMxRef("HTMLPreElement")}}
- {{DOMxRef("HTMLProgressElement")}}
- {{DOMxRef("HTMLQuoteElement")}}
- {{DOMxRef("HTMLScriptElement")}}
- {{DOMxRef("HTMLSelectElement")}}
- {{DOMxRef("HTMLSlotElement")}}
- {{DOMxRef("HTMLSourceElement")}}
- {{DOMxRef("HTMLSpanElement")}}
- {{DOMxRef("HTMLStyleElement")}}
- {{DOMxRef("HTMLTableCaptionElement")}}
- {{DOMxRef("HTMLTableCellElement")}}
- {{DOMxRef("HTMLTableColElement")}}
- {{DOMxRef("HTMLTableElement")}}
- {{DOMxRef("HTMLTableRowElement")}}
- {{DOMxRef("HTMLTableSectionElement")}}
- {{DOMxRef("HTMLTemplateElement")}}
- {{DOMxRef("HTMLTextAreaElement")}}
- {{DOMxRef("HTMLTimeElement")}}
- {{DOMxRef("HTMLTitleElement")}}
- {{DOMxRef("HTMLTrackElement")}}
- {{DOMxRef("HTMLUListElement")}}
- {{DOMxRef("HTMLUnknownElement")}}
- {{DOMxRef("HTMLVideoElement")}}

#### Interfaces de elementos en desuso

- {{DOMxRef("HTMLMarqueeElement")}} {{deprecated_inline}}

#### Interfaces de elementos HTML obsoletas

- {{DOMxRef("HTMLFontElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameSetElement")}} {{deprecated_inline}}

### Interfaces de integración de aplicaciones web y navegadores

Estas interfaces ofrecen acceso a la ventana del navegador y al documento que contiene el HTML, así como al estado del navegador, los complementos disponibles (si los hay) y diversas opciones de configuración.

- {{DOMxRef("BarProp")}}
- {{DOMxRef("Navigator")}}
- {{DOMxRef("Window")}}

#### Interfaces de integración de aplicaciones web y navegadores en desuso

- {{DOMxRef("External")}} {{deprecated_inline}}

#### Interfaces de integración de aplicaciones web y navegadores obsoletas

- {{DOMxRef("Plugin")}} {{deprecated_inline}}
- {{DOMxRef("PluginArray")}} {{deprecated_inline}}

### Interfaces de soporte de formularios

Estas interfaces proporcionan la estructura y la funcionalidad necesarias para los elementos utilizados para crear y manejar formularios, incluidos los elementos {{HTMLElement("form")}} y {{HTMLElement("input")}}.

- {{DOMxRef("FormDataEvent")}}
- {{DOMxRef("HTMLFormControlsCollection")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("RadioNodeList")}}
- {{DOMxRef("ValidityState")}}

### Interfaces de canvas e imagen

Estas interfaces representan objetos utilizados por la API Canvas, así como por los elementos {{HTMLElement("img")}} y {{HTMLElement("picture")}}.

- {{DOMxRef("CanvasGradient")}}
- {{DOMxRef("CanvasPattern")}}
- {{DOMxRef("CanvasRenderingContext2D")}}
- {{DOMxRef("ImageBitmap")}}
- {{DOMxRef("ImageBitmapRenderingContext")}}
- {{DOMxRef("ImageData")}}
- {{DOMxRef("OffscreenCanvas")}}
- {{DOMxRef("OffscreenCanvasRenderingContext2D")}}
- {{DOMxRef("Path2D")}}
- {{DOMxRef("TextMetrics")}}

### Interfaces multimedia

Las interfaces multimedia proporcionan acceso HTML al contenido de los elementos multimedia: {{HTMLElement("audio")}} y {{HTMLElement("video")}}.

- {{DOMxRef("AudioTrack")}}
- {{DOMxRef("AudioTrackList")}}
- {{DOMxRef("MediaError")}}
- {{DOMxRef("TextTrack")}}
- {{DOMxRef("TextTrackCue")}}
- {{DOMxRef("TextTrackCueList")}}
- {{DOMxRef("TextTrackList")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TrackEvent")}}
- {{DOMxRef("VideoTrack")}}
- {{DOMxRef("VideoTrackList")}}

### Interfaces Drag and drop (arrastrar y soltar)

Estas interfaces son utilizadas por la API [HTML Drag and Drop API](/es/docs/Web/API/HTML_Drag_and_Drop_API) para representar elementos individuales que pueden ser (o han sido) arrastrados, grupos de elementos que pueden ser (o han sido) arrastrados, y para manejar el proceso de arrastrar y soltar.

- {{DOMxRef("DataTransfer")}}
- {{DOMxRef("DataTransferItem")}}
- {{DOMxRef("DataTransferItemList")}}
- {{DOMxRef("DragEvent")}}

### Interfaces del historial de página

Las interfaces de la API de historial te permiten acceder a información sobre el historial del navegador, así como avanzar y retroceder en la pestaña actual del navegador a través de ese historial.

- {{DOMxRef("BeforeUnloadEvent")}}
- {{DOMxRef("HashChangeEvent")}}
- {{DOMxRef("History")}}
- {{DOMxRef("Location")}}
- {{DOMxRef("PageRevealEvent")}}
- {{DOMxRef("PageSwapEvent")}}
- {{DOMxRef("PageTransitionEvent")}}
- {{DOMxRef("PopStateEvent")}}

### Interfaces de Componentes Web

Estas interfaces son utilizadas por la [Web Components API](/es/docs/Web/API/Web_components) Para crear y gestionar los [custom elements](/es/docs/Web/API/Web_components/Using_custom_elements) disponibles.

- {{DOMxRef("CustomElementRegistry")}}

### Interfaces diversas y de apoyo

Estos tipos de objetos auxiliares se utilizan de diversas formas en la API DOM HTML. Además, {{domxref("PromiseRejectionEvent")}} representa el evento que se envía cuando se rechaza una {{Glossary("JavaScript")}} {{jsxref("Promise")}}.

- {{DOMxRef("DOMStringList")}}
- {{DOMxRef("DOMStringMap")}}
- {{DOMxRef("ErrorEvent")}}
- {{DOMxRef("HTMLAllCollection")}}
- {{DOMxRef("MimeType")}}
- {{DOMxRef("MimeTypeArray")}}
- {{DOMxRef("PromiseRejectionEvent")}}

### Interfaces pertenecientes a otras API

Varias interfaces están definidas técnicamente en la especificación HTML, aunque en realidad forman parte de otras API.

#### Interfaces de almacenamiento Web (Web storage)

La API {{DOMxRef("Web_Storage_API", "Web Storage API", "", "1")}} permite a los sitios web almacenar datos de forma temporal o permanente en el dispositivo del usuario para su posterior reutilización.

- {{DOMxRef("Storage")}}
- {{DOMxRef("StorageEvent")}}

#### Interfaces de Web Workers

Estas interfaces son utilizadas por la API {{DOMxRef("Web_Workers_API", "Web Workers API", "", "1")}} tanto para establecer la capacidad de los "workers" para interactuar con una aplicación y su contenido, como para admitir la mensajería entre ventanas o aplicaciones.

- {{DOMxRef("BroadcastChannel")}}
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
- {{DOMxRef("MessageChannel")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MessagePort")}}
- {{DOMxRef("SharedWorker")}}
- {{DOMxRef("SharedWorkerGlobalScope")}}
- {{DOMxRef("Worker")}}
- {{DOMxRef("WorkerGlobalScope")}}
- {{DOMxRef("WorkerLocation")}}
- {{DOMxRef("WorkerNavigator")}}

#### Interfaces WebSocket

Estas interfaces, definidas por la especificación HTML, son utilizadas por la API {{DOMxRef("WebSockets_API", "WebSockets API", "", "1")}}.

- {{DOMxRef("CloseEvent")}}
- {{DOMxRef("WebSocket")}}

#### Interfaces de eventos enviados por el servidor

La interfaz {{domxref("EventSource")}} representa la fuente que envió o esta enviando {{DOMxRef("Server-sent_events", "server-sent events", "", "1")}}.

- {{DOMxRef("EventSource")}}

## Ejemplos

En este ejemplo, se supervisa el evento {{domxref("Element/input_event", "input")}} de un elemento {{HTMLElement("input")}} con el fin de actualizar el estado del botón "submit" de un formulario en función de si un campo determinado tiene o no un valor en ese momento.

### JavaScript

```js
const nameField = document.getElementById("userName");
const sendButton = document.getElementById("sendButton");

sendButton.disabled = true;
// [nota: Esto está desabilitado, ya que hace que este articulo se cargue siempre con este ejemplo destacado y desplazado a la vista]
// nameField.focus();

nameField.addEventListener("input", (event) => {
  const elem = event.target;
  const valid = elem.value.length !== 0;

  if (valid && sendButton.disabled) {
    sendButton.disabled = false;
  } else if (!valid && !sendButton.disabled) {
    sendButton.disabled = true;
  }
});
```

Este código utiliza el método {{domxref("Document.getElementById", "getElementById()")}} de la interfaz {{domxref("Document")}} para obtener el objeto DOM que representa los elementos {{HTMLElement("input")}} que tienen ID `userName` y `sendButton`. Con ellos, podemos acceder a las propiedades y métodos que proporcionan información sobre estos elementos y permiten controlarlos.

El objeto {{domxref("HTMLInputElement")}} Para la propiedad {{domxref("HTMLInputElement.disabled", "disabled")}} del botón "Enviar" se establece en `true` (verdadero), lo que inhabilita el botón "Enviar" para que no se pueda hacer clic en el. Además, el campo de entrada del nombre de usuario se convierte en el foco activo, al llamar al método {{domxref("HTMLElement/focus", "focus()")}} que hereda de {{domxref("HTMLElement")}}.

A continuación, se llama a {{domxref("EventTarget.addEventListener", "addEventListener()")}} para añadir un manejador para el evento `input` al campo de entrada del nombre de usuario. Este código comprueba la longitud del valor actual del campo de entrada; si es cero, el botón "Enviar" se desactiva, si aún no lo está. De lo contrario, el código se asegura de que el botón esté activado.

Con esto, el botón "Enviar" siempre estará habilitado cuando el campo de entrada del nombre de usuario tenga un valor, e inhabilitado cuando esté vacío.

### HTML

El código HTML del formulario tiene el siguiente aspecto:

```html
<p>Please provide the information below. Items marked with "*" are required.</p>
<form action="" method="get">
  <p>
    <label for="userName" required>Your name:</label>
    <input type="text" id="userName" /> (*)
  </p>
  <p>
    <label for="userEmail">Email:</label>
    <input type="email" id="userEmail" />
  </p>
  <input type="submit" value="Enviar" id="sendButton" />
</form>
```

### Resultado

{{EmbedLiveSample("Examples", 640, 300)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

### Referencias

- [HTML elements reference](/es/docs/Web/HTML/Reference/Elements)
- [HTML attribute reference](/es/docs/Web/HTML/Reference/Attributes)
- {{DOMxRef("Document_Object_Model", "Document Object Model (DOM)", "", "1")}} reference

### Guías

- [DOM scripting introduction](/es/docs/Learn_web_development/Core/Scripting/DOM_scripting)

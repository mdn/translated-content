---
title: Document
slug: Web/API/Document
browser-compat: api.Document
translation_of: Web/API/Document
original_slug: Web/API/Document
---
{{APIRef("DOM")}}

La interfaz **`Document`** representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el [árbol DOM (Document Object Model)](/es/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core).

El árbol DOM incluye elementos como {{HTMLElement("body")}} y {{HTMLElement("table")}}, entre [muchos otros](/es/docs/Web/HTML/Element). Proporciona funcionalidad globalmente al documento, como obtener la URL de la página y crear nuevos elementos en el documento.

{{InheritanceDiagram}}

La interfaz `Document` describe las propiedades y métodos comunes para cualquier tipo de documento. Según el tipo de documento (p. ej., [HTML](/es/docs/Web/HTML), [XML](/es/docs/Web/XML), [SVG](/es/docs/Web/SVG), etc.), hay disponible una API más grande: los documentos HTML, servidos con el tipo de contenido `"text/html"`, también implementan la interfaz {{DOMxRef("HTMLDocument")}} , mientras que los documentos XML y SVG implementan la interfaz {{DOMxRef("XMLDocument")}}.

## Constructor

- {{DOMxRef("Document.Document", "Document()")}}
  - : Crea un nuevo objeto `Document`.

## Propiedades

_Esta interfaz también hereda de las interfaces {{DOMxRef("Node")}} y {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Document.activeElement")}} {{ReadOnlyInline}}
  - : Devuelve el {{DOMxRef('Element')}} actualmente activo.
- {{DOMxRef("Document.body")}}
  - : Devuelve el nodo {{HTMLElement("body")}} o {{htmlelement("frameset")}} del documento actual.
- {{DOMxRef("Document.characterSet")}}{{ReadOnlyInline}}
  - : Devuelve el conjunto de caracteres que utiliza el documento.
- {{domxref("Document.childElementCount")}} {{readonlyInline}}
  - : Devuelve el número de elementos hijos del documento actual.
- {{domxref("Document.children")}} {{readonlyInline}}
  - : Devuelve los elementos hijos del documento actual.
- {{DOMxRef("Document.compatMode")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Indica si el documento se representa en modo [_quirks_](/es/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) o _strict_.
- {{DOMxRef("Document.contentType")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Devuelve el tipo de contenido del encabezado MIME del documento actual.
- {{DOMxRef("Document.currentScript")}}{{ReadOnlyInline}}
  - : Devuelve el elemento {{HTMLElement("script")}} cuyo script se está procesando actualmente y [no es un módulo de JavaScript](https://github.com/whatwg/html/issues/997).
- {{DOMxRef("Document.doctype")}}{{ReadOnlyInline}}
  - : Devuelve la Definición de Tipo de Documento (DTD) del documento actual.
- {{DOMxRef("Document.documentElement")}}{{ReadOnlyInline}}
  - : Devuelve el {{DOMxRef("Element")}} que es un hijo directo del documento. Para documentos HTML, normalmente es el objeto {{DOMxRef("HTMLHtmlElement")}} que representa el elemento {{HTMLElement("html")}} del documento.
- {{DOMxRef("Document.documentURI")}}{{ReadOnlyInline}}
  - : Devuelve la ubicación del documento como una cadena.
- {{DOMxRef("Document.embeds")}}{{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("HTMLCollection")}} de los elementos {{HTMLElement('embed')}} incrustados en el documento.
- {{domxref("Document.firstElementChild")}} {{readonlyInline}}
  - : Devuelve el primer elemento hijo del documento actual.
- {{DOMxRef("Document.fonts")}}
  - : Devuelve la interfaz {{DOMxRef("FontFaceSet")}} del documento actual.
- {{DOMxRef("Document.forms")}}{{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("HTMLCollection")}} de los elementos {{HTMLElement("form")}} del documento.
- {{DOMxRef("Document.fullscreenElement")}} {{ReadOnlyInline}}
  - : El elemento que está actualmente en modo de pantalla completa para este documento.
- {{DOMxRef("Document.head")}}{{ReadOnlyInline}}
  - : Devuelve el elemento {{HTMLElement("head")}} del documento actual.
- {{DOMxRef("Document.hidden")}}{{ReadOnlyInline}}
  - : Devuelve un valor booleano que indica si la página se considera oculta o no.
- {{DOMxRef("Document.images")}}{{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("HTMLCollection")}} de las imágenes del documento.
- {{DOMxRef("Document.implementation")}}{{ReadOnlyInline}}
  - : Devuelve la implementación DOM asociada con el documento actual.
- {{domxref("Document.lastElementChild")}} {{readonlyInline}}
  - : Devuelve el último elemento hijo del documento actual.
- {{DOMxRef("Document.links")}}{{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("HTMLCollection")}} de los hipervínculos del documento.
- {{DOMxRef("Document.mozSyntheticDocument")}} {{Non-standard_Inline}}
  - : Devuelve `true` solo si este documento es sintético, como una imagen independiente, video, archivo de audio o similar.
- {{DOMxRef("Document.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : Devuelve el {{DOMxRef('Element')}} que se presenta actualmente en modo [_picture-in-picture_](/es/docs/Web/API/Picture-in-Picture_API) en este documento.
- {{DOMxRef("Document.pictureInPictureEnabled")}} {{ReadOnlyInline}}
  - : Devuelve `true` si la función _picture-in-picture_ está habilitada.
- {{DOMxRef("Document.plugins")}}{{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("HTMLCollection")}} de los complementos disponibles.
- {{DOMxRef("Document.pointerLockElement")}} {{ReadOnlyInline}}
  - : Devuelve el conjunto de elementos como destino para los eventos del mouse mientras el puntero está bloqueado. `null` si el bloqueo está pendiente, el puntero está desbloqueado o si el objetivo está en otro documento.
- {{DOMxRef("Document.featurePolicy")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Devuelve la interfaz {{DOMxRef("FeaturePolicy")}} que proporciona una API simple para analizar las políticas de funciones aplicadas a un documento específico.
- {{DOMxRef("Document.scripts")}}{{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("HTMLCollection")}} de los elementos {{HTMLElement("script")}} del documento.
- {{DOMxRef("Document.scrollingElement")}}{{ReadOnlyInline}}
  - : Devuelve una referencia al {{DOMxRef("Element")}} que desplaza el documento.
- {{DOMxRef("Document.styleSheets")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{DOMxRef('StyleSheetList')}} de {{DOMxRef('CSSStyleSheet')}} para hojas de estilo explícitamente vinculadas o incrustadas en un documento.
- {{DOMxRef("Document.timeline")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Devuelve la línea de tiempo como una instancia especial de {{domxref("DocumentTimeline")}} que se crea automáticamente al cargar la página.
- {{DOMxRef("Document.visibilityState")}}{{ReadOnlyInline}}
  - : Devuelve un `string` que indica el estado de visibilidad del documento. Los valores posibles son `visible`, `hidden`, `prerender` y `unloaded`.

### Extensiones para HTMLDocument

_La interfaz `Document` para documentos HTML hereda de la interfaz {{DOMxRef("HTMLDocument")}} o, desde HTML5, se amplía para dichos documentos._

- {{DOMxRef("Document.cookie")}}
  - : Devuelve una lista separada por punto y coma de las cookies para ese documento o establece una sola cookie.
- {{DOMxRef("Document.defaultView")}}{{ReadOnlyInline}}
  - : Devuelve una referencia al objeto de la ventana.
- {{DOMxRef("Document.designMode")}}
  - : Establece u obtiene la capacidad de editar todo el documento.
- {{DOMxRef("Document.dir")}}
  - : Establece u obtiene la direccionalidad (rtl/ltr) del documento.
- {{DOMxRef("Document.domain")}} {{Deprecated_Inline}}
  - : Establece u obtiene el dominio del documento actual.
- {{DOMxRef("Document.lastModified")}}{{ReadOnlyInline}}
  - : Devuelve la fecha en la que se modificó por última vez el documento.
- {{DOMxRef("Document.location")}}{{ReadOnlyInline}}
  - : Devuelve la URI del documento actual.
- {{DOMxRef("Document.readyState")}}{{ReadOnlyInline}}
  - : Devuelve el estado de carga del documento.
- {{DOMxRef("Document.referrer")}}{{ReadOnlyInline}}
  - : Devuelve el URI de la página que se vinculó a esta página.
- {{DOMxRef("Document.title")}}
  - : Establece u obtiene el título del documento actual.
- {{DOMxRef("Document.URL")}}{{ReadOnlyInline}}
  - : Devuelve la ubicación del documento como una cadena.

### Manejadores de eventos

_La interfaz `Document` se amplía con manejadores de eventos adicionales definidos en [GlobalEventHandlers](/es/docs/Web/API/GlobalEventHandlers#event_handlers)._

- {{DOMxRef("Document.onafterscriptexecute")}} {{Non-standard_Inline}}
  - : Representa el código del manejador de eventos para el evento {{domxref("Document/afterscriptexecute_event", "afterscriptexecute")}}.
- {{DOMxRef("Document.onbeforescriptexecute")}} {{Non-standard_Inline}}
  - : Representa el código del manejador de eventos para el evento {{domxref("Document/beforescriptexecute_event", "beforescriptexecute")}}.
- {{DOMxRef("Document.onreadystatechange")}}
  - : Representa el código del manejador de eventos para el evento {{domxref("Document/readystatechange_event", "readystatechange")}}.
- {{DOMxRef("GlobalEventHandlers.onselectionchange")}} {{Experimental_Inline}}
  - : Es un [manejador de eventos](/es/docs/Web/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento {{domxref("Document/selectionchange_event", "selectionchange")}}.
- {{DOMxRef("Document.onvisibilitychange")}}
  - : Es un [manejador de eventos](/es/docs/Web/Events/Event_handlers) que representa el código que se llamará cuando se genere el evento {{domxref("Document/visibilitychange_event", "visibilitychange")}}.

### Propiedades obsoletas

- {{DOMxRef("Document.alinkColor")}} {{Deprecated_Inline}}
  - : Devuelve o establece el color de los enlaces activos en el cuerpo del documento.
- {{DOMxRef("Document.all")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Proporciona acceso a todos los elementos del documento; devuelve un {{DOMxRef('HTMLAllCollection')}} arraigado en el nodo del documento. Esta es una propiedad heredada, no estándar y no debe usarse.
- {{DOMxRef("Document.anchors")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Devuelve una lista de todos los anclajes en el documento.
- {{DOMxRef("Document.applets")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Devuelve una lista ordenada de los subprogramas dentro de un documento.
- {{DOMxRef("Document.bgColor")}} {{Deprecated_Inline}}
  - : Establece u obtiene el color de fondo del documento actual.
- {{DOMxRef("Document.characterSet","Document.charset")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Alias de {{DOMxRef("Document.characterSet")}}. Utilice esta propiedad en su lugar.
- {{DOMxRef("Document.fgColor")}} {{Deprecated_Inline}}
  - : Establece u obtiene el color de primer plano o el color del texto del documento actual.
- {{DOMxRef("Document.fullscreen")}} {{deprecated_inline}}
  - : Devuelve `true` cuando el documento está en [modo pantalla completa](/es/docs/Web/API/Fullscreen_API).
- {{DOMxRef("Document.height")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Establece u obtiene la altura del documento actual.
- {{DOMxRef("Document.characterSet", "Document.inputEncoding")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Alias de {{DOMxRef("Document.characterSet")}}. Utilice esta propiedad en su lugar.
- {{DOMxRef("Document.lastStyleSheetSet")}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Devuelve el nombre del conjunto de hojas de estilo que se habilitó por última vez. Tiene el valor `null` hasta que se cambia la hoja de estilo estableciendo el valor de {{DOMxRef("Document.selectedStyleSheetSet","selectedStyleSheetSet")}}.
- {{DOMxRef("Document.linkColor")}} {{Deprecated_Inline}}
  - : Establece u obtiene el color de los hipervínculos en el documento.
- {{DOMxRef("Document.preferredStyleSheetSet")}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Devuelve el conjunto de hojas de estilo preferido según lo especificado por el autor de la página.
- {{DOMxRef("Document.rootElement")}} {{Deprecated_Inline}}
  - : Como {{DOMxRef("Document.documentElement")}}, pero solo para elementos {{SVGElement("svg")}} raíz. Utilice esta propiedad en su lugar.
- {{DOMxRef("Document.selectedStyleSheetSet")}} {{deprecated_inline}}
  - : Devuelve qué conjunto de hojas de estilo está actualmente en uso.
- {{DOMxRef("Document.styleSheetSets")}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Devuelve una lista de los conjuntos de hojas de estilo disponibles en el documento.
- {{DOMxRef("Document.vlinkColor")}} {{Deprecated_Inline}}
  - : Establece u obtiene el color de los hipervínculos visitados.
- {{DOMxRef("Document.width")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Devuelve el ancho del documento actual.
- {{DOMxRef("Document.xmlEncoding")}} {{Deprecated_Inline}}
  - : Devuelve la codificación determinada por la declaración XML.
- {{DOMxRef("Document.xmlStandalone")}} {{deprecated_inline}}
  - : Devuelve `true` si la declaración XML especifica que el documento sea independiente (_p. ej.,_ Una parte externa de la DTD afecta el contenido del documento), de lo contrario, `false`.
- {{DOMxRef("Document.xmlVersion")}} {{deprecated_inline}}
  - : Devuelve el número de versión como se especifica en la declaración XML o `"1.0"` si la declaración está ausente.

## Métodos

_Esta interfaz también hereda de las interfaces {{DOMxRef("Node")}} y {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Document.adoptNode()")}}
  - : Adopta un nodo de un documento externo.
- {{DOMxRef("Document.append()")}}
  - : Inserta un conjunto de objetos {{domxref("Node")}} u objetos {{domxref("DOMString")}} después del último elemento hijo del documento.
- {{DOMxRef("Document.captureEvents()")}} {{Deprecated_Inline}}
  - : Consulte {{DOMxRef("Window.captureEvents")}}.
- {{DOMxRef("Document.caretPositionFromPoint()")}}
  - : Devuelve un objeto {{DOMxRef('CaretPosition')}} que contiene el nodo DOM que contiene el signo de intercalación y el desplazamiento del carácter del signo de intercalación dentro de ese nodo.
- {{DOMxRef("Document.caretRangeFromPoint()")}} {{Non-standard_Inline}}
  - : Obtiene un objeto {{DOMxRef("Range")}} para el fragmento de documento bajo las coordenadas especificadas.
- {{DOMxRef("Document.createAttribute()")}}
  - : Crea un nuevo objeto {{DOMxRef("Attr")}} y lo devuelve.
- {{DOMxRef("Document.createAttributeNS()")}}
  - : Crea un nuevo nodo de atributo en un espacio de nombres determinado y lo devuelve.
- {{DOMxRef("Document.createCDATASection()")}}
  - : Crea un nuevo nodo CDATA y lo devuelve.
- {{DOMxRef("Document.createComment()")}}
  - : Crea un nuevo nodo de comentario y lo devuelve.
- {{DOMxRef("Document.createDocumentFragment()")}}
  - : Crea un nuevo fragmento de documento.
- {{DOMxRef("Document.createElement()")}}
  - : Crea un nuevo elemento con el nombre de etiqueta dado.
- {{DOMxRef("Document.createElementNS()")}}
  - : Crea un nuevo elemento con el nombre de etiqueta y el URI de espacio de nombres dados.
- {{DOMxRef("Document.createEntityReference()")}} {{deprecated_inline}}
  - : Crea un nuevo objeto de referencia de entidad y lo devuelve.
- {{DOMxRef("Document.createEvent()")}}
  - : Crea un objeto de evento.
- {{DOMxRef("Document.createNodeIterator()")}}
  - : Crea un objeto {{DOMxRef("NodeIterator")}}.
- {{DOMxRef("Document.createProcessingInstruction()")}}
  - : Crea un nuevo objeto {{DOMxRef("ProcessingInstruction")}}.
- {{DOMxRef("Document.createRange()")}}
  - : Crea un objeto {{DOMxRef("Range")}}.
- {{DOMxRef("Document.createTextNode()")}}
  - : Crea un nodo de texto.
- {{DOMxRef("Document.createTouch()")}} {{Deprecated_Inline}}
  - : Crea un objeto {{DOMxRef("Touch")}}.
- {{DOMxRef("Document.createTouchList()")}} {{Deprecated_Inline}}
  - : Crea un objeto {{DOMxRef("TouchList")}}.
- {{DOMxRef("Document.createTreeWalker()")}}
  - : Crea un objeto {{DOMxRef("TreeWalker")}}.
- {{DOMxRef("Document.elementFromPoint()")}}
  - : Devuelve el elemento superior en las coordenadas especificadas.
- {{DOMxRef("Document.elementsFromPoint()")}}
  - : Devuelve una matriz de todos los elementos en las coordenadas especificadas.
- {{DOMxRef("Document.enableStyleSheetsForSet()")}} {{deprecated_inline}}
  - : Habilita las hojas de estilo para el conjunto de hojas de estilo especificado.
- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : Retira el video de la ventana flotante de _picture-in-picture_ y vuelve a su contenedor original.
- {{DOMxRef("Document.exitPointerLock()")}} {{Experimental_Inline}}
  - : Libera el bloqueo del puntero.
- {{DOMxRef("Document.getAnimations()")}}
  - : Devuelve una matriz de todos los objetos {{DOMxRef("Animation")}} actualmente en uso, cuyos elementos de destino son descendientes de `document`.
- {{domxref("Document.getBoxQuads()")}} {{experimental_inline}}
  - : Devuelve una lista de objetos {{domxref("DOMQuad")}} que representan los fragmentos CSS del nodo.
- {{DOMxRef("Document.getElementById", "Document.getElementById()")}}
  - : Devuelve una referencia de objeto al elemento identificado.
- {{DOMxRef("Document.getElementsByClassName()")}}
  - : Devuelve una lista de elementos con el nombre de clase dado.
- {{DOMxRef("Document.getElementsByTagName()")}}
  - : Devuelve una lista de elementos con el nombre de etiqueta dado.
- {{DOMxRef("Document.getElementsByTagNameNS()")}}
  - : Devuelve una lista de elementos con el nombre de etiqueta y el espacio de nombres dados.
- {{DOMxRef("Document.getSelection()")}}
  - : Devuelve un objeto {{DOMxRef('Selection')}} que representa el rango de texto seleccionado por el usuario o la posición actual del signo de intercalación.
- {{DOMxRef("Document.hasStorageAccess()")}} {{Experimental_Inline}}
  - : Devuelve un {{jsxref("Promise")}} que se resuelve con un valor booleano que indica si el documento tiene acceso a su almacenamiento propio.
- {{DOMxRef("Document.importNode()")}}
  - : Devuelve un clon de un nodo de un documento externo.
- {{DOMxRef("Document.normalizeDocument()")}} {{deprecated_inline}}
  - : Reemplaza entidades, normaliza nodos de texto, etc.
- {{DOMxRef("Document.prepend()")}}
  - : Inserta un conjunto de objetos {{domxref("Node")}} u objetos {{domxref("DOMString")}} antes del primer elemento hijo del documento.
- {{DOMxRef("Document.querySelector()")}}
  - : Devuelve el primer nodo [_Element_](/es/docs/Web/API/Element) dentro del documento, en el orden del documento, que coincide con los selectores especificados.
- {{DOMxRef("Document.querySelectorAll()")}}
  - : Devuelve una lista de todos los nodos [_Element_](/es/docs/Web/API/Element) dentro del documento que coinciden con los selectores especificados.
- {{DOMxRef("Document.releaseCapture()")}} {{Non-standard_Inline}}
  - : Libera la captura actual del mouse si está en un elemento de este documento.
- {{DOMxRef("Document.releaseEvents()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Consulte {{DOMxRef("Window.releaseEvents()")}}.
- {{DOMxRef("Document.replaceChildren()")}}
  - : Reemplaza los elementos hijos existentes de un documento con un nuevo conjunto específico de elementos hijos.
- {{DOMxRef("Document.requestStorageAccess()")}}
  - : Devuelve un {{jsxref("Promise")}} que resuelve si se otorgó el acceso al almacenamiento propio y lo rechaza si se denegó el acceso.
- {{DOMxRef("Document.mozSetImageElement()")}} {{Non-standard_Inline}}
  - : Le permite cambiar el elemento que se utiliza como imagen de fondo para un ID de elemento específico.

La interfaz `Document` se amplía con la interfaz {{DOMxRef("XPathEvaluator")}}:

- {{DOMxRef("Document.createExpression()")}}
  - : Compila una [`XPathExpression`](/es/docs/Web/API/XPathExpression) que luego se puede usar para (repetidas) evaluaciones.
- {{DOMxRef("Document.createNSResolver()")}}
  - : Crea un objeto {{DOMxRef("XPathNSResolver")}}.
- {{DOMxRef("Document.evaluate()")}}
  - : Evalúa una expresión XPath.

### Extensión para documentos HTML

La interfaz `Document` para documentos HTML se hereda de la interfaz {{DOMxRef("HTMLDocument")}} o, desde HTML5, se amplía para dichos documentos:

- {{DOMxRef("Document.clear()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : En la mayoría de los navegadores modernos, incluidas las versiones recientes de Firefox e Internet Explorer, este método no hace nada.
- {{DOMxRef("Document.close()")}}
  - : Cierra el flujo de escritura en el documento.
- {{DOMxRef("Document.execCommand()")}} {{deprecated_inline}}
  - : En un documento editable, ejecuta un comando de formato.
- {{DOMxRef("Document.getElementsByName()")}}
  - : Devuelve una lista de elementos con el nombre dado.
- {{DOMxRef("Document.hasFocus()")}}
  - : Devuelve `true` si el foco se encuentra actualmente en cualquier lugar dentro del documento especificado.
- {{DOMxRef("Document.open()")}}
  - : Abre un flujo de escritura para el documento.
- {{DOMxRef("Document.queryCommandEnabled()")}} {{deprecated_inline}}
  - : Devuelve `true` si el comando de formato se puede ejecutar en el rango actual.
- {{DOMxRef("Document.queryCommandIndeterm()")}} {{deprecated_inline}}
  - : Devuelve `true` si el comando de formato está en un estado indeterminado en el rango actual.
- {{DOMxRef("Document.queryCommandState()")}} {{deprecated_inline}}
  - : Devuelve `true` si el comando de formato se ha ejecutado en el rango actual.
- {{DOMxRef("Document.queryCommandSupported()")}} {{deprecated_inline}}
  - : Devuelve `true` si el comando de formato es compatible con el rango actual.
- {{DOMxRef("Document.queryCommandValue()")}} {{deprecated_inline}}
  - : Devuelve el valor actual del rango actual para un comando de formato.
- {{DOMxRef("Document.write()")}}
  - : Escribe texto en un documento.
- {{DOMxRef("Document.writeln()")}}
  - : Escribe una línea de texto en un documento.

## Eventos

Puede detectar estos eventos usando `addEventListener()` o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- {{DOMxRef("Document/scroll_event", "scroll")}}
  - : Se activa cuando se ha desplazado la vista del documento o un elemento. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}}.
- {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}}
  - : Se activa cuando el contenido de una pestaña se vuelve visible o se oculta. También disponible a través de la propiedad {{DOMxRef("Document.onvisibilitychange", "onvisibilitychange")}}.
- {{DOMxRef("Document/wheel_event","wheel")}}
  - : Se activa cuando el usuario gira un botón de rueda en un dispositivo señalador (generalmente un mouse). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers.onwheel", "onwheel")}}.

### Eventos de animación

- {{DOMxRef("Document/animationcancel_event", "animationcancel")}}
  - : Se activa cuando una animación aborta inesperadamente. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}}.
- {{DOMxRef("Document/animationend_event", "animationend")}}
  - : Se activa cuando una animación se ha completado normalmente. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onanimationend", "onanimationend")}}.
- {{DOMxRef("Document/animationiteration_event", "animationiteration")}}
  - : Se activa cuando se completa una iteración de animación. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onanimationiteration", "onanimationiteration")}}.
- {{DOMxRef("Document/animationstart_event", "animationstart")}}
  - : Se activa cuando comienza una animación. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onanimationstart", "onanimationstart")}}.

### Eventos del portapapeles

- {{DOMxRef("Document/copy_event", "copy")}}
  - : Se activa cuando el usuario inicia una acción de copiar a través de la interfaz de usuario del navegador.
- {{DOMxRef("Document/cut_event", "cut")}}
  - : Se activa cuando el usuario inicia una acción de cortar a través de la interfaz de usuario del navegador.
- {{DOMxRef("Document/paste_event", "paste")}}
  - : Se activa cuando el usuario inicia una acción de pegar a través de la interfaz de usuario del navegador.

### Eventos de arrastrar y soltar

- {{DOMxRef("Document/drag_event", "drag")}}
  - : Se activa cada pocos cientos de milisegundos cuando el usuario arrastra un elemento o una selección de texto. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ondrag", "ondrag")}}.
- {{DOMxRef("Document/dragend_event", "dragend")}}
  - : Se activa cuando finaliza una operación de arrastre (soltando un botón del mouse o presionando la tecla Escape). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ondragend", "ondragend")}}.
- {{DOMxRef("Document/dragenter_event", "dragenter")}}
  - : Se activa cuando un elemento arrastrado o una selección de texto ingresa en un destino de colocación válido. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ondragenter", "ondragenter")}}.
- {{DOMxRef("Document/dragleave_event", "dragleave")}}
  - : Se activa cuando un elemento arrastrado o una selección de texto deja un destino de colocación válido. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ondragleave", "ondragleave")}}.
- {{DOMxRef("Document/dragover_event", "dragover")}}
  - : Se activa cuando se arrastra un elemento o una selección de texto sobre un destino de colocación válido (cada pocos cientos de milisegundos). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ondragover", "ondragover")}}.
- {{DOMxRef("Document/dragstart_event", "dragstart")}}
  - : Se activa cuando el usuario comienza a arrastrar un elemento o una selección de texto. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ondragstart", "ondragstart")}}.
- {{DOMxRef("Document/drop_event", "drop")}}
  - : Se activa cuando un elemento o una selección de texto se coloca en un destino de colocación válido. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ondrop", "ondrop")}}.

### Eventos de pantalla completa

- {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}}
  - : Se activa cuando `Document` pasa al modo de [pantalla completa](/es/docs/Web/API/Fullscreen_API/Guide) o sale del mismo.
- {{DOMxRef("Document/fullscreenerror_event", "fullscreenerror")}}
  - : Se activa si se produce un error al intentar activar o desactivar el modo de [pantalla completa](/es/docs/Web/API/Fullscreen_API/Guide).

### Eventos de teclado

- {{DOMxRef("Document/keydown_event", "keydown")}}
  - : Se activa cuando se presiona una tecla. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onkeydown", "onkeydown")}}.
- {{DOMxRef("Document/keypress_event", "keypress")}}
  - : Se activa cuando se presiona una tecla que produce un valor de carácter. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onkeypress", "onkeypress")}}.
- {{DOMxRef("Document/keyup_event", "keyup")}}
  - : Se activa cuando se suelta una tecla. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onkeyup", "onkeyup")}}.

### Eventos de carga y descarga

- {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Se activa cuando el documento se ha cargado y analizado por completo, sin esperar a que las hojas de estilo, las imágenes y los submarcos terminen de cargarse.
- {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - : Se activa cuando el atributo {{DOMxRef("Document/readyState", "readyState")}} de un documento ha cambiado. También disponible a través de la propiedad `onreadystatechange`.

### Eventos de puntero

- {{DOMxRef("Document/gotpointercapture_event", "gotpointercapture")}}
  - : Se activa cuando un elemento captura un puntero usando [`setPointerCapture()`](/es/docs/Web/API/Element/setPointerCapture). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}}.
- {{DOMxRef("Document/lostpointercapture_event", "lostpointercapture")}}
  - : Se activa cuando se suelta un [puntero capturado](/es/docs/Web/API/Pointer_events#pointer_capture). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onlostpointercapture", "onlostpointercapture")}}.
- {{DOMxRef("Document/pointercancel_event", "pointercancel")}}
  - : Se activa cuando se cancela un evento de puntero. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointercancel", "onpointercancel")}}.
- {{DOMxRef("Document/pointerdown_event", "pointerdown")}}
  - : Se activa cuando un puntero se vuelve activo. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointerdown", "onpointerdown")}}.
- {{DOMxRef("Document/pointerenter_event", "pointerenter")}}
  - : Se activa cuando se mueve un puntero a los límites de la _prueba de acierto_ de un elemento o uno de sus hijos. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointerenter", "onpointerenter")}}.
- {{DOMxRef("Document/pointerleave_event", "pointerleave")}}
  - : Se activa cuando un puntero se mueve fuera de los límites de la _prueba de acierto_ de un elemento. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointerleave", "onpointerleave")}}.
- {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}}
  - : Se activa cuando el puntero está bloqueado o desbloqueado. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointerlockchange", "onpointerlockchange")}}.
- {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}
  - : Se activa cuando falla el bloqueo del puntero. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointerlockerror", "onpointerlockerror")}}.
- {{DOMxRef("Document/pointermove_event", "pointermove")}}
  - : Se activa cuando un puntero cambia de coordenadas. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointermove", "onpointermove")}}.
- {{DOMxRef("Document/pointerout_event", "pointerout")}}
  - : Se activa cuando un puntero se mueve fuera de los límites de la _prueba de acierto_ de un elemento (entre otras razones). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointerout", "onpointerout")}}.
- {{DOMxRef("Document/pointerover_event", "pointerover")}}
  - : Se activa cuando se mueve un puntero a los límites de la _prueba de acierto_ de un elemento. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointerover", "onpointerover")}}.
- {{DOMxRef("Document/pointerup_event", "pointerup")}}
  - : Se activa cuando un puntero ya no está activo. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onpointerup", "onpointerup")}}.

### Eventos de selección

- {{DOMxRef("Document/selectionchange_event", "selectionchange")}}
  - : Se activa cuando se cambia la selección de texto actual en un documento. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onselectionchange", "onselectionchange")}}.
- {{DOMxRef("Document/selectstart_event", "selectstart")}}
  - : Se activa cuando el usuario comienza una nueva selección. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/onselectstart", "onselectstart")}}.

### Eventos táctiles

- {{DOMxRef("Document/touchcancel_event", "touchcancel")}}
  - : Se activa cuando uno o más puntos de contacto se han interrumpido de una manera específica de la implementación (por ejemplo, se crean demasiados puntos de contacto). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ontouchcancel", "ontouchcancel")}}.
- {{DOMxRef("Document/touchend_event", "touchend")}}
  - : Se activa cuando uno o más puntos de contacto se eliminan de la superficie táctil. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ontouchend", "ontouchend")}}
- {{DOMxRef("Document/touchmove_event", "touchmove")}}
  - : Se activa cuando uno o más puntos de contacto se mueven a lo largo de la superficie táctil. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ontouchmove", "ontouchmove")}}
- {{DOMxRef("Document/touchstart_event", "touchstart")}}
  - : Se activa cuando se colocan uno o más puntos de contacto en la superficie táctil. También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ontouchstart", "ontouchstart")}}

### Eventos de transición

- {{DOMxRef("Document/transitioncancel_event", "transitioncancel")}}
  - : Se activa cuando se cancela una [transición de CSS](/es/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ontransitioncancel", "ontransitioncancel")}}.
- {{DOMxRef("Document/transitionend_event", "transitionend")}}
  - : Se activa cuando se completa una [transición de CSS](/es/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ontransitionend", "ontransitionend")}}.
- {{DOMxRef("Document/transitionrun_event", "transitionrun")}}
  - : Se activa cuando se crea por primera vez una [transición de CSS](/es/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}}.
- {{DOMxRef("Document/transitionstart_event", "transitionstart")}}
  - : Se activa cuando realmente ha comenzado una [transición de CSS](/es/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions). También disponible a través de la propiedad {{DOMxRef("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}}.

## Extensiones no estándar {{Non-standard_Inline}}

{{non-standard_header}}

### Notas de firefox

Firefox define algunos métodos no estándar:

- {{DOMxRef("Document.execCommandShowHelp()")}} {{deprecated_inline}}
  - : Este método nunca hizo nada y siempre arrojaba una excepción, por lo que se eliminó en Gecko 14.0 {{geckoRelease("14.0")}}.
- {{DOMxRef("Document.getBoxObjectFor()")}} {{deprecated_inline}}
  - : Utilice el método {{DOMxRef("Element.getBoundingClientRect()")}} en su lugar.
- {{DOMxRef("Document.loadOverlay()")}} {{deprecated_inline}}
  - : Carga una [superposición XUL](/es/docs/XUL_Overlays) dinámicamente. Esto solo funciona en documentos XUL.
- {{DOMxRef("Document.queryCommandText()")}} {{deprecated_inline}}
  - : Este método nunca hizo nada más que generar una excepción y se eliminó en Gecko 14 {{GeckoRelease("14")}}.

### Notas de Internet Explorer

Microsoft define algunos métodos no estándar:

- {{DOMxRef("Document.fileSize")}}\* {{Non-standard_Inline}} {{deprecated_inline}}
  - : Devuelve el tamaño en bytes del documento. A partir de Internet Explorer 11, esa propiedad ya no se admite. Consulte [MSDN](https://msdn.microsoft.com/library/ms533752%28v=VS.85%29.aspx).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Modo Quirks (sitio web)](https://www.quirksmode.org/)
- [Modo Quirks (wikipedia)](https://es.wikipedia.org/wiki/Quirks_Mode)

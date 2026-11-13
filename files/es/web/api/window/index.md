---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 6daf06123a4c7d8b8e2a038e339a05666b22695f
---

{{APIRef("HTML DOM")}}

La interfaz **`Window`** representa una ventana que contiene un documento {{glossary("DOM")}}; la propiedad `document` apunta al [documento DOM](/es/docs/Web/API/Document) cargado en esa ventana.

Se puede obtener la ventana correspondiente a un documento específico mediante la propiedad {{domxref("document.defaultView")}}.

El código JavaScript tiene acceso a una variable global llamada `window`, que representa la ventana en la que se está ejecutando el script.

La interfaz `Window` alberga una gran variedad de funciones, namespaces, objetos y constructores que no están necesariamente asociados de forma directa con el concepto de ventana de una interfaz de usuario. Sin embargo, la interfaz `Window` resulta un lugar adecuado para incluir estos elementos que deben estar disponibles de forma global. Muchos de ellos están documentados en la [Referencia de JavaScript](/es/docs/Web/JavaScript/Reference) y en la [Referencia del DOM](/es/docs/Web/API/Document_Object_Model).

En un navegador con pestañas, cada pestaña está representada por su propio objeto `Window`; la variable global `window` que ve el código JavaScript que se ejecuta dentro de una pestaña determinada representa siempre la pestaña en la que se está ejecutando ese código. Dicho esto, incluso en un navegador con pestañas, algunas propiedades y métodos siguen aplicándose a la ventana general que contiene la pestaña, como {{Domxref("Window.resizeTo", "resizeTo()")}} y {{Domxref("Window.innerHeight", "innerHeight")}}. En general, todo lo que no pueda pertenecer razonablemente a una pestaña pertenece en su lugar a la ventana.

{{InheritanceDiagram}}

## Propiedades de instancia

_Esta interfaz hereda propiedades de la interfaz {{domxref("EventTarget")}}._

Ten en cuenta que las propiedades que son objetos (por ejemplo, para sobrescribir el prototipo de elementos integrados) se muestran en una sección independiente más abajo.

- {{domxref("Window.caches")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Devuelve el objeto {{domxref("CacheStorage")}} asociado al contexto actual. Este objeto permite funcionalidades como almacenar recursos para su uso sin conexión y generar respuestas personalizadas a las solicitudes.
- {{domxref("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : Un alias de {{domxref("Window.navigator")}}.
- {{domxref("Window.closed")}} {{ReadOnlyInline}}
  - : Esta propiedad indica si la ventana actual está cerrada o no.
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Devuelve una referencia al objeto {{domxref("CookieStore")}} para el contexto del documento actual.
- {{domxref("Window.crashReport")}} {{ReadOnlyInline}} {{SecureContext_Inline}} {{experimental_inline}}
  - : Devuelve un objeto {{domxref("CrashReportContext")}} que permite registrar datos arbitrarios para el contexto de navegación de nivel superior actual, los cuales se agregan a un {{domxref("CrashReport")}} y se envían a un endpoint de informes cuando se produce un fallo del navegador.
- {{domxref("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve un booleano que indica si el documento actual se cargó dentro de un {{htmlelement("iframe")}} sin credenciales. Consulta [IFrame credentialless](/es/docs/Web/HTTP/Guides/IFrame_credentialless) para más información.
- {{domxref("Window.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : Devuelve un valor booleano que indica si el sitio web se encuentra en un estado de aislamiento de origen cruzado.
- {{domxref("Window.crypto")}} {{ReadOnlyInline}}
  - : Devuelve el objeto {{domxref("Crypto")}} asociado al objeto global.
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : Devuelve una referencia al objeto {{domxref("CustomElementRegistry")}}, que puede usarse para registrar nuevos [elementos personalizados](/es/docs/Web/API/Web_components/Using_custom_elements) y obtener información sobre elementos personalizados registrados previamente.
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : Devuelve la relación entre los píxeles físicos y los píxeles independientes del dispositivo en la pantalla actual.
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Devuelve una referencia al documento que contiene la ventana.
- {{domxref("Window.documentPictureInPicture")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Devuelve una referencia a la ventana [Picture-in-Picture del documento](/es/docs/Web/API/Document_Picture-in-Picture_API) para el contexto del documento actual.
- {{domxref("Window.fence")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Devuelve una instancia del objeto {{domxref("Fence")}} para el contexto del documento actual. Solo está disponible para documentos incrustados dentro de un {{htmlelement("fencedframe")}}.
- {{domxref("Window.frameElement")}} {{ReadOnlyInline}}
  - : Devuelve el elemento en el que está incrustada la ventana, o null si la ventana no está incrustada.
- {{domxref("Window.frames")}} {{ReadOnlyInline}}
  - : Devuelve un array con los subframes de la ventana actual.
- {{domxref("Window.fullScreen")}} {{Non-standard_Inline}}
  - : Esta propiedad indica si la ventana se muestra a pantalla completa o no.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Devuelve una referencia al objeto history.
- {{domxref("Window.indexedDB")}} {{ReadOnlyInline}}
  - : Proporciona un mecanismo para que las aplicaciones accedan de forma asíncrona a las capacidades de las bases de datos indexadas; devuelve un objeto {{domxref("IDBFactory")}}.
- {{domxref("Window.innerHeight")}} {{ReadOnlyInline}}
  - : Obtiene la altura del área de contenido de la ventana del navegador, que incluye la barra de desplazamiento horizontal si se muestra.
- {{domxref("Window.innerWidth")}} {{ReadOnlyInline}}
  - : Obtiene el ancho del área de contenido de la ventana del navegador, que incluye la barra de desplazamiento vertical si se muestra.
- {{domxref("Window.isSecureContext")}} {{ReadOnlyInline}}
  - : Devuelve un booleano que indica si el contexto actual es seguro (`true`) o no (`false`).
- {{domxref("Window.launchQueue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Cuando una [aplicación web progresiva](/es/docs/Web/Progressive_web_apps) (PWA) se inicia con un valor de `client_mode` de [`launch_handler`](/es/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) igual a `focus-existing`, `navigate-new` o `navigate-existing`, `launchQueue` proporciona acceso a la clase {{domxref("LaunchQueue")}}, que permite implementar un manejo personalizado de la navegación de inicio para la PWA.
- {{domxref("Window.length")}} {{ReadOnlyInline}}
  - : Devuelve el número de frames de la ventana. Consulta también {{domxref("window.frames")}}.
- {{domxref("Window.localStorage")}} {{ReadOnlyInline}}
  - : Devuelve una referencia al objeto de almacenamiento local usado para guardar datos a los que solo puede acceder el origen que los creó.
- {{domxref("Window.location")}}
  - : Obtiene o establece la ubicación, o URL actual, del objeto window.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Devuelve el objeto locationbar.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Devuelve el objeto menubar.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Devuelve la coordenada horizontal (X) de la esquina superior izquierda del viewport de la ventana, en coordenadas de pantalla. Este valor se expresa en píxeles CSS. Consulta `mozScreenPixelsPerCSSPixel` en `nsIDOMWindowUtils` para obtener un factor de conversión a píxeles de pantalla si lo necesitas.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Devuelve la coordenada vertical (Y) de la esquina superior izquierda del viewport de la ventana, en coordenadas de pantalla. Este valor se expresa en píxeles CSS. Consulta `mozScreenPixelsPerCSSPixel` para obtener un factor de conversión a píxeles de pantalla si lo necesitas.
- {{domxref("Window.name")}}
  - : Obtiene o establece el nombre de la ventana.
- {{domxref("Window.navigation")}} {{ReadOnlyInline}}
  - : Devuelve el objeto {{domxref("Navigation")}} asociado a la `window` actual. Es el punto de entrada de la [Navigation API](/es/docs/Web/API/Navigation_API).
- {{domxref("Window.navigator")}} {{ReadOnlyInline}}
  - : Devuelve una referencia al objeto navigator.
- {{domxref("Window.opener")}}
  - : Devuelve una referencia a la ventana que abrió la ventana actual.
- {{domxref("Window.origin")}} {{ReadOnlyInline}}
  - : Devuelve el origen del objeto global, serializado como una cadena de texto.
- {{domxref("Window.originAgentCluster")}} {{ReadOnlyInline}}
  - : Devuelve `true` si esta ventana pertenece a un clúster de agentes con clave de origen.
- {{domxref("Window.outerHeight")}} {{ReadOnlyInline}}
  - : Obtiene la altura exterior de la ventana del navegador.
- {{domxref("Window.outerWidth")}} {{ReadOnlyInline}}
  - : Obtiene el ancho exterior de la ventana del navegador.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{ReadOnlyInline}}
  - : Un alias de {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{ReadOnlyInline}}
  - : Un alias de {{domxref("window.scrollY")}}.
- {{domxref("Window.parent")}} {{ReadOnlyInline}}
  - : Devuelve una referencia al padre de la ventana o subframe actual.
- {{domxref("Window.performance")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("Performance")}}, que incluye los atributos {{domxref("Performance.timing", "timing")}} y {{domxref("Performance.navigation", "navigation")}}, cada uno de los cuales es un objeto que proporciona datos [relacionados con el rendimiento](/es/docs/Web/API/Performance_API/Navigation_timing). Consulta también [Uso de Navigation Timing](/es/docs/Web/API/Performance_API/Navigation_timing) para más información y ejemplos.
- {{domxref("Window.personalbar")}} {{ReadOnlyInline}}
  - : Devuelve el objeto personalbar.
- {{domxref("Window.scheduler")}} {{ReadOnlyInline}}
  - : Devuelve el objeto {{domxref("Scheduler")}} asociado al contexto actual. Este es el punto de entrada para usar la [Prioritized Task Scheduling API](/es/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("Window.screen")}} {{ReadOnlyInline}}
  - : Devuelve una referencia al objeto screen asociado a la ventana.
- {{domxref("Window.screenX")}} y {{domxref("Window.screenLeft")}} {{ReadOnlyInline}}
  - : Ambas propiedades devuelven la distancia horizontal desde el borde izquierdo de la ventana del navegador del usuario hasta el lado izquierdo de la pantalla.
- {{domxref("Window.screenY")}} y {{domxref("Window.screenTop")}} {{ReadOnlyInline}}
  - : Ambas propiedades devuelven la distancia vertical desde el borde superior de la ventana del navegador del usuario hasta la parte superior de la pantalla.
- {{domxref("Window.scrollbars")}} {{ReadOnlyInline}}
  - : Devuelve el objeto scrollbars.
- {{domxref("Window.scrollMaxX")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : El desplazamiento máximo horizontal posible de la ventana, es decir, el ancho del documento menos el ancho del viewport.
- {{domxref("Window.scrollMaxY")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : El desplazamiento máximo vertical posible de la ventana (es decir, la altura del documento menos la altura del viewport).
- {{domxref("Window.scrollX")}} {{ReadOnlyInline}}
  - : Devuelve el número de píxeles que el documento ya se ha desplazado horizontalmente.
- {{domxref("Window.scrollY")}} {{ReadOnlyInline}}
  - : Devuelve el número de píxeles que el documento ya se ha desplazado verticalmente.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Devuelve una referencia al propio objeto window.
- {{domxref("Window.sessionStorage")}}
  - : Devuelve una referencia al objeto de almacenamiento de sesión usado para guardar datos a los que solo puede acceder el origen que los creó.
- {{domxref("Window.sharedStorage")}} {{ReadOnlyInline}} {{SecureContext_Inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Devuelve el objeto {{domxref("WindowSharedStorage")}} para el origen actual. Es el punto de entrada principal para escribir datos en el almacenamiento compartido usando la [Shared Storage API](/es/docs/Web/API/Shared_Storage_API).
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("SpeechSynthesis")}}, que es el punto de entrada para usar la funcionalidad de síntesis de voz de la [Web Speech API](/es/docs/Web/API/Web_Speech_API).
- {{domxref("Window.statusbar")}} {{ReadOnlyInline}}
  - : Devuelve el objeto statusbar.
- {{domxref("Window.toolbar")}} {{ReadOnlyInline}}
  - : Devuelve el objeto toolbar.
- {{domxref("Window.top")}} {{ReadOnlyInline}}
  - : Devuelve una referencia a la ventana más alta de la jerarquía de ventanas. Esta propiedad es de solo lectura.
- {{domxref("Window.trustedTypes")}} {{ReadOnlyInline}}
  - : Devuelve el objeto {{domxref("TrustedTypePolicyFactory")}} asociado al objeto global, que proporciona el punto de entrada para usar la {{domxref("Trusted Types API", "", "", "nocode")}}.
- {{domxref("Window.viewport")}} {{Experimental_inline}} {{ReadOnlyInline}}
  - : Devuelve una instancia del objeto {{domxref("Viewport")}}, que proporciona información sobre el estado actual del viewport del dispositivo.
- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("VisualViewport")}} que representa el viewport visual de una ventana determinada.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Devuelve una referencia a la ventana actual.
- `window[0]`, `window[1]`, etc.
  - : Devuelve una referencia al objeto `window` en los frames. Consulta {{domxref("Window.frames")}} para más información.
- Propiedades con nombre
  - : Algunos elementos del documento también se exponen como propiedades de window:
    - Para cada elemento {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}} y {{HTMLElement("object")}}, se expone su `name` (si no está vacío).
      Por ejemplo, si el documento contiene `<form name="my_form">`, entonces `window["my_form"]` (y su equivalente `window.my_form`) devuelve una referencia a ese elemento.
    - Para cada elemento HTML, se expone su `id` (si no está vacío).

    Si una propiedad corresponde a un único elemento, ese elemento se devuelve directamente. Si la propiedad corresponde a varios elementos, se devuelve un {{domxref("HTMLCollection")}} que contiene todos ellos. Si alguno de los elementos es un `<iframe>` o `<object>` navegable, en su lugar se devuelve el {{domxref("HTMLIFrameElement/contentWindow", "contentWindow")}} del primer iframe de ese tipo.

### Propiedades obsoletas

- {{domxref("Window.event")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Devuelve el **evento actual**, es decir, el evento que se está gestionando en el contexto del código JavaScript, o `undefined` si no se está gestionando ningún evento en ese momento. Siempre que sea posible, debe usarse en su lugar el objeto {{domxref("Event")}} que se pasa directamente a los manejadores de eventos.
- {{domxref("Window.external")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Devuelve un objeto con funciones para añadir proveedores de búsqueda externos al navegador.
- {{domxref("Window.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Devuelve la orientación en grados (en incrementos de 90 grados) del viewport con respecto a la orientación natural del dispositivo.
- {{domxref("Window.status")}} {{Deprecated_Inline}}
  - : Obtiene o establece el texto de la barra de estado situada en la parte inferior del navegador.

## Métodos de instancia

_Esta interfaz hereda métodos de la interfaz {{domxref("EventTarget")}}._

- {{domxref("Window.atob()")}}
  - : Decodifica una cadena de datos codificada en base64.
- {{domxref("Window.alert()")}}
  - : Muestra un cuadro de diálogo de alerta.
- {{domxref("Window.blur()")}} {{deprecated_inline}}
  - : Quita el foco de la ventana.
- {{domxref("Window.btoa()")}}
  - : Crea una cadena ASCII codificada en base64 a partir de una cadena de datos binarios.
- {{domxref("Window.cancelAnimationFrame()")}}
  - : Permite cancelar un callback previamente programado con {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}}
  - : Permite cancelar un callback previamente programado con {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.clearInterval()")}}
  - : Cancela la ejecución repetida establecida usando {{domxref("Window.setInterval()")}}.
- {{domxref("Window.clearTimeout()")}}
  - : Cancela la ejecución diferida establecida usando {{domxref("Window.setTimeout()")}}.
- {{domxref("Window.close()")}}
  - : Cierra la ventana actual.
- {{domxref("Window.confirm()")}}
  - : Muestra un cuadro de diálogo con un mensaje al que el usuario debe responder.
- {{domxref("Window.createImageBitmap()")}}
  - : Acepta distintas fuentes de imagen y devuelve una {{jsxref("Promise")}} que se resuelve con un {{domxref("ImageBitmap")}}. Opcionalmente, la fuente se recorta al rectángulo de píxeles con origen en _(sx, sy)_ con ancho sw y alto sh.
- {{domxref("Window.dump()")}} {{Non-standard_Inline}}
  - : Escribe un mensaje en la consola.
- {{domxref("Window.fetch()")}}
  - : Inicia el proceso de obtención de un recurso desde la red.
- {{domxref("Window.fetchLater()")}} {{experimental_inline}}
  - : Crea una solicitud fetch diferida, que se envía en cuanto se navega fuera de la página (esta se destruye o entra en la [bfcache](/es/docs/Glossary/bfcache)), o transcurrido el tiempo de espera indicado en `activateAfter`, lo que ocurra primero.
- {{domxref("Window.find()")}} {{Non-standard_Inline}}
  - : Busca una cadena de texto específica en una ventana.
- {{domxref("Window.focus()")}}
  - : Establece el foco en la ventana actual.
- {{domxref("Window.getComputedStyle()")}}
  - : Obtiene el estilo calculado del elemento especificado. El estilo calculado indica los valores resultantes de todas las propiedades CSS del elemento.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : Obtiene el estilo calculado predeterminado del elemento especificado, ignorando las hojas de estilo del autor.
- {{domxref("Window.getScreenDetails()")}} {{experimental_inline}} {{securecontext_inline}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve con una instancia del objeto {{domxref("ScreenDetails")}}, la cual representa los detalles de todas las pantallas disponibles en el dispositivo del usuario.
- {{domxref("Window.getSelection()")}}
  - : Devuelve el objeto de selección que representa los elementos seleccionados.
- {{domxref("Window.matchMedia()")}}
  - : Devuelve un objeto {{domxref("MediaQueryList")}} que representa la cadena de consulta de medios especificada.
- {{domxref("Window.moveBy()")}}
  - : Mueve la ventana actual una cantidad especificada.
- {{domxref("Window.moveTo()")}}
  - : Mueve la ventana a las coordenadas especificadas.
- {{domxref("Window.open()")}}
  - : Abre una nueva ventana.
- {{domxref("Window.postMessage()")}}
  - : Proporciona un medio seguro para que una ventana envíe una cadena de datos a otra ventana, que no necesita estar en el mismo dominio que la primera.
- {{domxref("Window.print()")}}
  - : Abre el cuadro de diálogo de impresión para imprimir el documento actual.
- {{domxref("Window.prompt()")}}
  - : Devuelve el texto introducido por el usuario en un cuadro de diálogo de solicitud.
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Devuelve una {{jsxref("Promise")}} que se resuelve con un array de objetos {{domxref("FontData")}} que representan las fuentes disponibles localmente.
- {{domxref("Window.queueMicrotask()")}}
  - : Encola una microtarea para que se ejecute en un momento seguro antes de que el control regrese al bucle de eventos del navegador.
- {{domxref("Window.reportError()")}}
  - : Informa de un error en un script, emulando una excepción no controlada.
- {{domxref("Window.requestAnimationFrame()")}}
  - : Indica al navegador que hay una animación en curso y le solicita que programe un repintado de la ventana para el siguiente fotograma de animación.
- {{domxref("Window.requestIdleCallback()")}}
  - : Permite programar tareas durante los periodos de inactividad del navegador.
- {{domxref("Window.requestResize()")}} {{experimental_inline}}
  - : Actualiza la información de tamaño que un documento incrustado comparte con su elemento padre, pero solo si el documento incrustado ha optado por compartir esa información.
- {{domxref("Window.resizeBy()")}}
  - : Cambia el tamaño de la ventana actual en una cantidad determinada.
- {{domxref("Window.resizeTo()")}}
  - : Cambia dinámicamente el tamaño de la ventana.
- {{domxref("Window.scroll()")}}
  - : Desplaza la ventana a un lugar específico del documento.
- {{domxref("Window.scrollBy()")}}
  - : Desplaza el documento dentro de la ventana la cantidad indicada.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : Desplaza el documento el número de líneas indicado.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : Desplaza el documento actual el número de páginas especificado.
- {{domxref("Window.scrollTo()")}}
  - : Desplaza la vista a unas coordenadas específicas del documento.
- {{domxref("Window.setInterval()")}}
  - : Programa una función para que se ejecute cada vez que transcurre un número determinado de milisegundos.
- {{domxref("Window.setTimeout()")}}
  - : Programa una función para que se ejecute pasado un tiempo determinado.
- {{domxref("Window.showDirectoryPicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Muestra un selector de directorios que permite al usuario elegir uno.
- {{domxref("Window.showOpenFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Muestra un selector de archivos que permite al usuario elegir uno o varios archivos.
- {{domxref("Window.showSaveFilePicker()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Muestra un selector de archivos que permite al usuario guardar un archivo.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : Ajusta el tamaño de la ventana según su contenido.
- {{domxref("Window.stop()")}}
  - : Este método detiene la carga de la ventana.
- {{domxref("Window.structuredClone()")}}
  - : Crea una [copia profunda](/es/docs/Glossary/Deep_copy) de un valor dado mediante el [algoritmo de clonación estructurada](/es/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Métodos obsoletos

- {{domxref("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : Registra la ventana para capturar todos los eventos del tipo especificado.
- {{domxref("Window.clearImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Cancela la ejecución repetida establecida con `setImmediate()`.
- {{domxref("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : Libera a la ventana de capturar eventos de un tipo específico.
- {{domxref("Window.requestFileSystem()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Permite que un sitio web o una aplicación obtenga acceso a un sistema de archivos aislado para su propio uso.
- {{domxref("Window.setImmediate()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Ejecuta una función después de que el navegador haya terminado otras tareas pesadas.
- {{domxref("Window.setResizable()")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : No hace nada (no-op). Se conserva por compatibilidad con versiones anteriores de Netscape 4.x.
- {{domxref("Window.webkitConvertPointFromNodeToPage()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transforma un {{domxref("WebKitPoint")}} del sistema de coordenadas del nodo al sistema de coordenadas de la página.
- {{domxref("Window.webkitConvertPointFromPageToNode()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Transforma un {{domxref("WebKitPoint")}} del sistema de coordenadas de la página al sistema de coordenadas del nodo.

## Eventos

Escucha estos eventos usando [`addEventListener()`](/es/docs/Web/API/EventTarget/addEventListener) o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz. Además de los eventos que se muestran a continuación, muchos otros pueden propagarse desde el {{domxref("Document")}} contenido en el objeto window.

- {{domxref("Window/error_event", "error")}}
  - : Se dispara cuando un recurso no se ha podido cargar o no se puede usar. Por ejemplo, si un script tiene un error de ejecución o si una imagen no se encuentra o no es válida.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : Se dispara en el objeto de ámbito global cuando cambia el idioma preferido del usuario.
- {{domxref("Window/resize_event", "resize")}}
  - : Se dispara cuando se cambia el tamaño de la ventana.
- {{domxref("Window/storage_event", "storage")}}
  - : Se dispara cuando se modifica un área de almacenamiento (`localStorage` o `sessionStorage`) en el contexto de otro documento.

### Eventos de conexión

- {{domxref("Window/offline_event", "offline")}}
  - : Se dispara cuando el navegador pierde el acceso a la red y el valor de `navigator.onLine` cambia a `false`.
- {{domxref("Window/online_event", "online")}}
  - : Se dispara cuando el navegador recupera el acceso a la red y el valor de `navigator.onLine` cambia a `true`.

### Eventos de orientación del dispositivo

- {{domxref("Window.devicemotion_event", "devicemotion")}} {{SecureContext_Inline}}
  - : Se dispara a intervalos regulares e indica la cantidad de fuerza física de aceleración que recibe el dispositivo y su velocidad de rotación, si está disponible.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} {{SecureContext_Inline}}
  - : Se dispara cuando hay nuevos datos disponibles del sensor de orientación magnetométrico sobre la orientación actual del dispositivo en comparación con el sistema de coordenadas terrestre.
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} {{SecureContext_Inline}}
  - : Se dispara cuando hay nuevos datos disponibles del sensor de orientación magnetométrico sobre la orientación absoluta actual del dispositivo en comparación con el sistema de coordenadas terrestre.

### Eventos de foco

- {{domxref("Window/blur_event", "blur")}}
  - : Se dispara cuando la ventana pierde el foco.
- {{domxref("Window/focus_event", "focus")}}
  - : Se dispara cuando la ventana recibe el foco.

### Eventos de gamepad

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Se dispara cuando el navegador detecta que se ha conectado un gamepad o la primera vez que se usa un botón o eje del gamepad.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Se dispara cuando el navegador detecta que se ha desconectado un gamepad.

### Eventos de historial

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : Se dispara cuando cambia el identificador de fragmento de la URL (la parte de la URL que comienza con el símbolo `#` y lo que le sigue).
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : Se envía cuando el navegador oculta el documento actual mientras cambia a mostrar en su lugar otro documento del historial de la sesión. Esto ocurre, por ejemplo, cuando el usuario hace clic en el botón Atrás o en el botón Adelante para avanzar en el historial de la sesión.
- {{domxref("Window.pagereveal_event", "pagereveal")}}
  - : Se dispara cuando un documento se renderiza por primera vez, ya sea al cargar un documento nuevo desde la red o al activar un documento (desde la [caché de atrás/adelante](/es/docs/Glossary/bfcache) (bfcache) o desde una [prerrenderización](/es/docs/Glossary/Prerender)).
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : Se envía cuando el navegador hace visible el documento como resultado de una tarea de navegación, lo que incluye no solo la primera carga de la página, sino también situaciones como que el usuario regrese a la página tras haber navegado a otra dentro de la misma pestaña.
- {{domxref("Window.pageswap_event", "pageswap")}}
  - : Se dispara cuando un documento está a punto de descargarse debido a una navegación.
- {{domxref("Window/popstate_event", "popstate")}}
  - : Se dispara cuando cambia la entrada activa del historial.

### Eventos de carga y descarga

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : Se dispara cuando la ventana, el documento y sus recursos están a punto de descargarse.
- {{domxref("Window/load_event", "load")}}
  - : Se dispara cuando la página completa se ha cargado, incluidos todos los recursos dependientes, como hojas de estilo e imágenes.
- {{domxref("Window/unload_event", "unload")}}
  - : Se dispara cuando el documento o un recurso hijo se está descargando.

### Eventos de manifiesto

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : Se dispara cuando el navegador ha instalado correctamente una página como aplicación.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Se dispara cuando está a punto de solicitarse al usuario que instale una aplicación web.

### Eventos de mensajería

- {{domxref("Window/message_event", "message")}}
  - : Se dispara cuando la ventana recibe un mensaje, por ejemplo, a partir de una llamada a {{domxref("Window/postMessage", "Window.postMessage()")}} desde otro contexto de navegación.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : Se dispara cuando un objeto `Window` recibe un mensaje que no se puede deserializar.

### Eventos de impresión

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : Se dispara después de que el documento asociado haya comenzado a imprimirse o se haya cerrado la vista previa de impresión.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : Se dispara cuando el documento asociado está a punto de imprimirse o de mostrarse en la vista previa de impresión.

### Eventos de rechazo de promesas

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Se envía cada vez que una {{jsxref("Promise")}} de JavaScript es rechazada, independientemente de si hay o no un manejador para capturar el rechazo.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Se envía cuando una {{jsxref("Promise")}} de JavaScript es rechazada pero no hay un manejador para capturar el rechazo.

### Eventos de desplazamiento

- {{domxref("Window/scrollsnapchange_event", "scrollsnapchange")}} {{experimental_inline}}
  - : Se dispara en el contenedor de desplazamiento al final de una operación de desplazamiento cuando se ha seleccionado un nuevo objetivo de ajuste de desplazamiento.
- {{domxref("Window/scrollsnapchanging_event", "scrollsnapchanging")}} {{experimental_inline}}
  - : Se dispara en el contenedor de desplazamiento cuando el navegador determina que un nuevo objetivo de ajuste de desplazamiento está pendiente, es decir, que será seleccionado al finalizar el gesto de desplazamiento actual.

### Eventos obsoletos

- {{domxref("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : Se dispara cuando cambia la orientación del dispositivo.
- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando una pantalla está lista para mostrar contenido.
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando se conecta al equipo un dispositivo de RV compatible.
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando se desconecta del equipo un dispositivo de RV compatible.
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando una pantalla ya no puede mostrar contenido.
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando cambia el estado de presentación de un dispositivo de RV, es decir, cuando pasa de presentar contenido a dejar de hacerlo, o viceversa.

### Eventos de propagación ascendente

No todos los eventos que se propagan por burbujeo pueden llegar al objeto `Window`. Solo los siguientes lo hacen y pueden escucharse en el objeto `Window`:

- `abort`
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/beforeinput_event", "beforeinput")}}
- {{domxref("Element/beforematch_event", "beforematch")}}
- {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}}
- `cancel`
- {{domxref("HTMLMediaElement/canplay_event", "canplay")}}
- {{domxref("HTMLMediaElement/canplaythrough_event", "canplaythrough")}}
- {{domxref("HTMLElement/change_event", "change")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("HTMLDialogElement/close_event", "close")}}
- {{domxref("HTMLCanvasElement/contextlost_event", "contextlost")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("HTMLCanvasElement/contextrestored_event", "contextrestored")}}
- {{domxref("Element/copy_event", "copy")}}
- {{domxref("HTMLTrackElement/cuechange_event", "cuechange")}}
- {{domxref("Element/cut_event", "cut")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("HTMLElement/drag_event", "drag")}}
- {{domxref("HTMLElement/dragend_event", "dragend")}}
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
- {{domxref("HTMLElement/dragover_event", "dragover")}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
- {{domxref("HTMLElement/drop_event", "drop")}}
- {{domxref("HTMLMediaElement/durationchange_event", "durationchange")}}
- {{domxref("HTMLMediaElement/emptied_event", "emptied")}}
- {{domxref("HTMLMediaElement/ended_event", "ended")}}
- {{domxref("HTMLFormElement/formdata_event", "formdata")}}
- {{domxref("Element/input_event", "input")}}
- {{domxref("HTMLElement/invalid_event", "invalid")}}
- {{domxref("Element/keydown_event", "keydown")}}
- {{domxref("Element/keypress_event", "keypress")}}
- {{domxref("Element/keyup_event", "keyup")}}
- {{domxref("HTMLMediaElement/loadeddata_event", "loadeddata")}}
- {{domxref("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}}
- {{domxref("HTMLMediaElement/loadstart_event", "loadstart")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/paste_event", "paste")}}
- {{domxref("HTMLMediaElement/pause_event", "pause")}}
- {{domxref("HTMLMediaElement/play_event", "play")}}
- {{domxref("HTMLMediaElement/playing_event", "playing")}}
- {{domxref("HTMLMediaElement/progress_event", "progress")}}
- {{domxref("HTMLMediaElement/ratechange_event", "ratechange")}}
- {{domxref("HTMLFormElement/reset_event", "reset")}}
- {{domxref("Element/scrollend_event", "scrollend")}}
- {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}}
- {{domxref("HTMLMediaElement/seeked_event", "seeked")}}
- {{domxref("HTMLMediaElement/seeking_event", "seeking")}}
- {{domxref("Element/select_event", "select")}}
- {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}}
- {{domxref("HTMLMediaElement/stalled_event", "stalled")}}
- {{domxref("HTMLFormElement/submit_event", "submit")}}
- {{domxref("HTMLMediaElement/suspend_event", "suspend")}}
- {{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}}
- {{domxref("HTMLElement/toggle_event", "toggle")}}
- {{domxref("HTMLMediaElement/volumechange_event", "volumechange")}}
- {{domxref("HTMLMediaElement/waiting_event", "waiting")}}
- {{domxref("Element/wheel_event", "wheel")}}

## Interfaces

Consulta la [Referencia del DOM](/es/docs/Web/API/Document_Object_Model).

## Escuchar eventos en Window

Los elementos HTML tienen tres formas de escuchar eventos:

- Añadir un detector de eventos al elemento usando el método {{domxref("EventTarget.addEventListener")}}.
- Asignar un manejador de eventos a la propiedad `oneventname` del elemento en JavaScript.
- Añadir un atributo con prefijo `on` al elemento en el HTML.

Para escuchar eventos en objetos `Window`, por lo general, solo puedes usar los dos primeros métodos, porque `Window` no tiene un elemento HTML correspondiente. Sin embargo, existe un grupo específico de eventos cuyos detectores pueden añadirse al elemento {{HTMLElement("body")}} (o al elemento {{HTMLElement("frameset")}}, ya obsoleto) que posee el documento de `Window`, usando el segundo o el tercer método. Estos eventos son:

- `afterprint`
- `beforeprint`
- `beforeunload`
- `blur`
- `error`
- `focus`
- `hashchange`
- `languagechange`
- `load`
- `message`
- `messageerror`
- `offline`
- `online`
- `pagehide`
- `pagereveal`
- `pageshow`
- `pageswap`
- `popstate`
- `rejectionhandled`
- `resize`
- `scroll`
- `storage`
- `unhandledrejection`
- `unload`

Esto significa que lo siguiente es estrictamente equivalente:

```js
window.onresize = (e) => console.log(e.currentTarget);
document.body.onresize = (e) => console.log(e.currentTarget);
```

```html
<body onresize="console.log(event.currentTarget)"></body>
```

En los tres casos, verás el objeto `Window` registrado como `currentTarget`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

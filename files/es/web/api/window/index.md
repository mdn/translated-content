---
title: window
slug: Web/API/Window
---

{{APIRef}}

El objeto `window` representa la ventana que contiene un documento DOM; la propiedad `document` apunta al [DOM document](/es/docs/Web/API/Document) cargado en esa ventana. El objeto window al que pertenece un documento puede ser obtenido usando la propiedad {{Domxref("document.defaultView")}}.

Esta sección proporciona una pequeña referencia a todos los métodos, propiedades y eventos disponibles a través del objeto DOM `window`. El objeto `window` implementa la interfaz `Window` , que a su vez hereda de la interfaz [`AbstractView`](https://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-AbstractView). Algunas funciones como globales adicionales, espacios de nombres, interfaces, y constructores no típicamente asociados con el objeto window pero disponibles en éste, están listados en las [Referencia de JavaScript](/es/docs/Web/JavaScript/Reference) y en el [Referencia DOM de Gecko](/es/docs/Web/API/Document_Object_Model).

En un navegador con pestañas, como Firefox, cada pestaña contine su propio `window` object (y si está escribiendo una extensión, la ventana del navegador es una ventana separada también - para más información vea [Trabajar con ventanas desde el código chrome](/es/docs/Trabajar_con_ventanas_desde_código_chrome#Content_windows)). Esto significa que el objeto `window` no se comparte entre diferentes pestañas de la misma ventana del navegador. Algunos métodos, como {{Domxref("window.resizeTo")}} y {{Domxref("window.resizeBy")}} se aplican sobre toda la ventana del navegador y no sobre una pestaña específica a la que pertenece el objeto `window`. Generalmente, cualquier cosa que razonablemente no pueda pertenecer a una pestaña, pertenece a la ventana.

## Constructores

Ver también [DOM Interfaces](/es/docs/Web/API/Document_Object_Model).

- {{domxref("Window.DOMParser")}}
  - : `DOMParser` puede traducir una fuente XML o HTML almacenada en una cadena en un [Documento](/es/docs/Archive/Mozilla/XUL/Tutorial_de_XUL/Modelo_de_objeto_de_documento) DOM. `DOMParser` se especifica en [DOM Parsing and Serialization.](https://w3c.github.io/DOM-Parsing/)
- {{domxref("Image")}}
  - : Se usa para crear un {{domxref("HTMLImageElement")}}.
- {{domxref("Option")}}
  - : Se usa para crear un {{domxref("HTMLOptionElement")}}

<!---->

- {{domxref("StaticRange")}} {{experimental_inline}} {{readonlyinline}}
  - : Retorna un constructor {{domxref('StaticRange.StaticRange','StaticRange()')}} que crea un objeto {{domxref('StaticRange')}}.

<!---->

- {{domxref("Worker")}}
  - : Se usa para crear un [Web worker.](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Window.XMLSerializer")}}
  - : Convierte un árbol DOM en una fuente XML o HTML.

## Propiedades

_Esta interface hereda propiedades de {{domxref("EventTarget")}} interface e implementa propiedades de {{domxref("WindowTimers")}} y {{domxref("WindowBase64")}}._

Nota que la propiedades que son objetos (por ejemplo para sobreescribir los prototipos de los elementos built-in) son descritos en una sección separada más abajo.

- {{domxref("Window.applicationCache")}} {{readOnlyInline}}
  - : An {{domxref("OfflineResourceList")}} object providing access to the offline resources for the window.
- {{domxref("Window.closed")}} {{Non-standard_inline}}{{readOnlyInline}}
  - : Esta propiedad indica si la actual ventana esta cerrada o abierta.
- [`Window.Components`](/es/docs/Components_object) {{Non-standard_inline}}
  - : El punto de acceso a muchas propiedades [XPCOM](/es/docs/XPCOM). Algunas propiedades, ej. [classes](/es/docs/Components.classes), son disponibles solamente a codigo suficientemente privilegiado. **El codigo Web no deberia usar esta propiedad.**
- {{domxref("console","Window.console")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Retorna una referencia al objeto de la consola proveyendo acceso a la consola debugger del navegador.
- {{domxref("Window.content")}} and Window.content {{Non-standard_inline}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Returns a reference to the content element in the current window. The obsolete variant with underscore is no longer available from Web content.
- {{domxref("Window.controllers")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the XUL controller objects for the current chrome window.
- {{domxref("Window.crypto")}} {{readOnlyInline}}
  - : Returns the browser crypto object.
- {{domxref("Window.defaultStatus")}} {{deprecated_inline}}
  - : Gets/sets the status bar text for the given window.
- {{domxref("Window.devicePixelRatio")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the ratio between physical pixels and device independent pixels in the current display.
- {{domxref("Window.dialogArguments")}} {{ReadOnlyInline}}
  - : Gets the arguments passed to the window (if it's a dialog box) at the time {{domxref("window.showModalDialog()")}} was called. This is an `nsIArray`.
- {{domxref("Window.directories")}} {{deprecated_inline}}
  - : Sinonimo de {{domxref("window.personalbar")}}
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Retorna una referencia al documento que esa ventana contiene.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : Returns the element in which the window is embedded, or null if the window is not embedded.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : Returns an array of the subframes in the current window.
- {{domxref("Window.fullScreen")}}
  - : Esta propiedad indica si la ventana esta desplegada en pantalla completa o no.
- `{{domxref("window.globalStorage")}}` {{Non-standard_inline}} {{deprecated_inline}}
  - : Unsupported since Gecko 13 (Firefox 13). Use {{domxref("Window.localStorage")}} instead.
    Was: Multiple storage objects that are used for storing data across multiple pages.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Retorna una referencia a la historia del objeto.
- {{domxref("Window.innerHeight")}}
  - : Obtiene la altura del area de contenido del navegador incluyendo, si es interpretado, la barra de deslizado.
- {{domxref("window.innerWidth")}}
  - : Obtiene el ancho del area de contenido de la ventana del navegador, si es interpretado, la barra de deslizado vertical.
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : Retorna el numero de marcos en la ventana. Ver tambien {{domxref("window.frames")}}.
- {{domxref("Window.location")}} {{ReadOnlyInline}}
  - : Obtiene/fija la location, o URL actual, del objeto de la ventana.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Retorna el objeto locationbar, cuya visibilidad puede ser fijada en la ventana.
- {{domxref("Window.localStorage")}} {{readOnlyInline}}
  - : Retorna una referencia al objeto almacenamiento local usado para almacenar datos que pueden ser de accedidos por el origen que los creo.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Retorna el objeto barra de menu, cuya visibilidad puede ser fijada en la ventana.
- {{domxref("Window.messageManager")}}
  - : Retorna el objeto [message manager](/es/docs/The_message_manager) para esta ventana.
- {{domxref("Window.mozAnimationStartTime")}} {{ReadOnlyInline}}
  - : The time in milliseconds since epoch at which the current animation cycle began.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}}{{non-standard_inline}}
  - : Returns the horizontal (X) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns the vertical (Y) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozPaintCount")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the number of times the current document has been rendered to the screen in this window. This can be used to compute rendering performance.
- {{domxref("Window.name")}}
  - : Gets/sets the name of the window.
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : Returns a reference to the navigator object.
- {{domxref("Window.opener")}}
  - : Returns a reference to the window that opened this current window.
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : Gets the height of the outside of the browser window.
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : Gets the width of the outside of the browser window.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : An alias for {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}}{{readOnlyInline}}
  - : An alias for {{domxref("window.scrollY")}}
- {{domxref("Window.sessionStorage")}} {{readOnlyInline}}
  - : Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("SpeechSynthesisGetter.speechSynthesis")}} {{readOnlyInline}}
  - : Returns a {{domxref("SpeechSynthesis")}} object, which is the entry point into using [Web Speech API](/es/docs/Web/API/Web_Speech_API) speech synthesis functionality.
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : Returns a reference to the parent of the current window or subframe.
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Provides a hosting area for [performance related](/es/docs/Web/API/Performance_API/Navigation_timing) attributes.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : Returns the personalbar object, whose visibility can be toggled in the window.
- {{domxref("Window.pkcs11")}} {{deprecated_inline(29)}}
  - : Formerly provided access to install and remove PKCS11 modules.
- {{domxref("Window.returnValue")}}
  - : The return value to be returned to the function that called {{domxref("window.showModalDialog()")}} to display the window as a modal dialog.
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : Returns a reference to the screen object associated with the window.
- {{domxref("Window.screenX")}} {{readOnlyInline}}
  - : Returns the horizontal distance of the left border of the user's browser from the left side of the screen.
- {{domxref("Window.screenY")}} {{readOnlyInline}}
  - : Returns the vertical distance of the top border of the user's browser from the top side of the screen.
- {{domxref("Window.scrollbars")}} {{readOnlyInline}}
  - : Returns the scrollbars object, whose visibility can be toggled in the window.
- {{domxref("Window.scrollMaxX")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to horizontally, that is the document width minus the viewport width.
- {{domxref("Window.scrollMaxY")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to vertically (i.e., the document height minus the viewport height).
- {{domxref("Window.scrollX")}} {{readOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled horizontally.
- {{domxref("Window.scrollY")}} {{readOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled vertically.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Returns an object reference to the window object itself.
- {{domxref("Window.sessionStorage")}}
  - : Returns a storage object for storing data within a single page session.
- {{domxref("Window.sidebar")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns a reference to the window object of the sidebar.
- {{domxref("Window.status")}}
  - : Gets/sets the text in the statusbar at the bottom of the browser.
- {{domxref("Window.statusbar")}} {{readOnlyInline}}
  - : Returns the statusbar object, whose visibility can be toggled in the window.
- {{domxref("Window.toolbar")}} {{readOnlyInline}}
  - : Returns the toolbar object, whose visibility can be toggled in the window.
- {{domxref("Window.top")}} {{readOnlyInline}}
  - : Returns a reference to the topmost window in the window hierarchy. This property is read only.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Returns a reference to the current window.
- `window[0]`, `window[1]`, etc.
  - : Returns a reference to the `window` object in the frames. See {{domxref("Window.frames")}} for more details.

## Methods

_Esta interfaz hereda metodos de la interfaz {{domxref("EventTarget")}} e implementa metodos {{domxref("WindowTimers")}} y {{domxref("WindowBase64")}}._

- {{domxref("EventTarget.addEventListener()")}}
  - : Registra un controlador de eventos a un tipo de evento especifico en la ventana.
- {{domxref("Window.alert()")}}
  - : Muestra una pequeña ventana de alerta. El estilo y posición de la ventana puede variar dependiendo de que navegador este usando.
- {{domxref("WindowBase64.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("Window.back()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Regresa en la ventana de historial.
- {{domxref("Window.blur()")}}
  - : Sets focus away from the window.
- {{domxref("WindowBase64.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("Window.captureEvents()")}} {{Deprecated_inline}}
  - : Registers the window to capture all events of the specified type.
- {{domxref("Window.clearImmediate()")}}
  - : Cancels the repeated execution set using `setImmediate`.
- {{domxref("WindowTimers.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("WindowTimers.setInterval()")}}.
- {{domxref("WindowTimers.clearTimeout()")}}
  - : Cancels the repeated execution set using {{domxref("WindowTimers.setTimeout()")}}.
- {{domxref("Window.close()")}}
  - : Cierra la ventana actual.
- {{domxref("Window.confirm()")}}
  - : Muestra una ventana de comfirmación con dos únicas y posibles respuestas. **Confirmar** y **Cancelar**.
- {{domxref("Window.disableExternalCapture()")}} {{deprecated_inline(24)}}
  - : <!-- TODO: add content -->
- {{domxref("Window.dispatchEvent()")}}
  - : Usado para activar un evento.
- {{domxref("Window.dump()")}}
  - : Escribe un mensaje a la consola.
- {{domxref("Window.enableExternalCapture()")}} {{deprecated_inline(24)}}
  - : <!-- TODO: add content -->
- {{domxref("Window.find()")}}
  - : Busca un string dado en una ventana.
- {{domxref("Window.focus()")}}
  - : Fija el enfoque en la ventana actual.
- {{domxref("Window.forward()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Moves the window one document forward in the history.
- {{domxref("Window.getAttention()")}}
  - : Flashes the application icon.
- {{domxref("Window.getAttentionWithCycleCount()")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.getComputedStyle()")}}
  - : Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
- {{domxref("Window.getDefaulComputedStyle()")}}
  - : Gets default computed style for the specified element, ignoring author stylesheets.
- {{domxref("Window.getSelection()")}}
  - : Returns the selection object representing the selected item(s).
- {{domxref("Window.home()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Regresa el navegador a la pagina de inicio.
- {{domxref("Window.matchMedia()")}}
  - : Returns a {{domxref("MediaQueryList")}} object representing the specified media query string.
- {{domxref("Window.maximize()")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.minimize()")}} (top-level XUL windows only)
  - : Minimiza la ventana.
- {{domxref("Window.moveBy()")}}
  - : Mueve la ventana actual por una cantidad especificada.
- {{domxref("Window.moveTo()")}}
  - : Mueve la ventana a una coordenada especificada.
- {{domxref("Window.mozRequestAnimationFrame()")}}
  - : Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame. This will cause a `MozBeforePaint` event to fire before that repaint occurs.
- {{domxref("Window.open()")}}
  - : Abre una nueva ventana.
- {{domxref("Window.openDialog()")}}
  - : Abre una nueva ventana de dialogo.
- {{domxref("Window.postMessage()")}}
  - : Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.
- {{domxref("Window.print()")}}
  - : Opens the Print Dialog to print the current document.
- {{domxref("Window.prompt()")}}
  - : Returns the text entered by the user in a prompt dialog.
- {{domxref("Window.releaseEvents()")}} {{Deprecated_inline}}
  - : Releases the window from trapping events of a specific type.
- {{domxref("element.removeEventListener","Window.removeEventListener()")}}
  - : Removes an event listener from the window.
- {{domxref("Window.resizeBy()")}}
  - : Resizes the current window by a certain amount.
- {{domxref("Window.resizeTo()")}}
  - : Dynamically resizes window.
- {{domxref("Window.restore()")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.routeEvent()")}} {{deprecated_inline(24)}}
  - : <!-- TODO: add content -->
- {{domxref("Window.scroll()")}}
  - : Scrolls the window to a particular place in the document.
- {{domxref("Window.scrollBy()")}}
  - : Scrolls the document in the window by the given amount.
- {{domxref("Window.scrollByLines()")}}
  - : Scrolls the document by the given number of lines.
- {{domxref("Window.scrollByPages()")}}
  - : Scrolls the current document by the specified number of pages.
- {{domxref("Window.scrollTo()")}}
  - : Scrolls to a particular set of coordinates in the document.
- {{domxref("Window.setCursor()")}}
  - : Changes the cursor for the current window
- {{domxref("Window.setImmediate()")}}
  - : Executes a function after the browser has finished other heavy tasks
- {{domxref("WindowTimers.setInterval()")}}
  - : Schedules the execution of a function each X milliseconds.
- {{domxref("Window.setResizable")}}
  - : <!-- TODO: add content -->
- {{domxref("WindowTimers.setTimeout()")}}
  - : Sets a delay for executing a function.
- {{domxref("Window.showModalDialog()")}}
  - : Displays a modal dialog.
- {{domxref("Window.sizeToContent()")}}
  - : Sizes the window according to its content.
- {{domxref("Window.stop()")}}
  - : This method stops window loading.
- {{domxref("Window.updateCommands()")}}
  - : Updates the state of commands of the current chrome window (UI).

## Eventos

Estas son propiedades del objeto ventana que pueden ser fijadas para establecer controladores de eventos para las diversar cosas que pueden pasar en la ventana que podria ser de interes.

_Esta interfaz hereda controladores de eventos de la interfaz {{domxref("EventTarget")}} e implementa controladores de eventos desde {{domxref("WindowTimers")}} y {{domxref("WindowBase64")}}._

> [!NOTE]
> Empezando en Gecko 9.0, se puede usar el sintaxis `if ("onabort" in window)` para determinar si existe una propiedad dada de controlador de eventos o no. Esto es porque interfazes de controlador de eventos han sido actualizadas al respectivo web IDL interfaz. Ver [DOM event handlers](/es/docs/Web/Events/Event_handlers) para mas detalles.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : An event handler property for abort events on the window.
- {{domxref("Window/beforeunload_event","beforeunload")}}
  - : An event handler property for before-unload events on the window.
- {{domxref("GlobalEventHandlers.onblur")}}
  - : An event handler property for blur events on the window.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : An event handler property for change events on the window.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : An event handler property for click events on the window.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : An event handler property for handling the window close event.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : An event handler property for right-click events on the window.
- {{domxref("Window.ondevicelight")}}
  - : An event handler property for any ambient light levels changes
- {{domxref("Window.ondevicemotion")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.ondeviceorientation")}}
  - : An event handler property for any device orientation changes
- {{domxref("Window.ondeviceproximity")}}
  - : An event handler property for device proximity event
- {{domxref("GlobalEventHandlers.onerror")}}
  - : An event handler property for [`error`](/es/docs/Web/API/HTMLElement/error_event) events raised on the window.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : An event handler property for [`focus`](/es/docs/Web/API/Element/focus_event) events on the window.
- {{domxref("Window/hashchange_event","hashchange")}}
  - : An event handler property for hash change events on the window; called when the part of the URL after the hash mark ("#") changes.
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : An event handler property for [`keydown`](/es/docs/Web/API/Element/keydown_event) events on the window.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : An event handler property for [`keypress`](/es/docs/Web/API/Element/keypress_event) events on the window.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : An event handler property for [`keyup`](/es/docs/Web/API/Element/keyup_event) events on the window.
- {{domxref("Window/languagechange_event","languagechange")}}
  - : An event handler property for [`languagechange`](/es/docs/Web/API/Window/languagechange_event) events on the window.
- {{domxref("GlobalEventHandlers.onload")}}
  - : An event handler property for window loading.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : An event handler property for mousedown events on the window.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : An event handler property for mousemove events on the window.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : An event handler property for mouseout events on the window.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : An event handler property for mouseover events on the window.
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : An event handler property for mouseup events on the window.
- {{domxref("Window.onmozbeforepaint")}}
  - : An event handler property for the `MozBeforePaint` event, which is sent before repainting the window if the event has been requested by a call to the {{domxref("Window.mozRequestAnimationFrame()")}} method.
- {{domxref("Window/pageshow_event","pageshow")}}
  - : An event handler property for pageshow events on the window.
- {{domxref("Window/pagehide_event","pagehide")}}
  - : An event handler property for pagehide events on the window.
- {{domxref("Window.onpaint")}}
  - : An event handler property for paint events on the window.
- {{domxref("Window/popstate_event","popstate")}}
  - : An event handler property for popstate events, which are fired when navigating to a session history entry representing a state object.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : An event handler property for reset events on the window.
- {{domxref("GlobalEventHandlers.onresize")}}
  - : An event handler property for window resizing.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : An event handler property for window scrolling.
- {{domxref("GlobalEventHandlers.onselect")}}
  - : An event handler property for window selection.
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : An event handler property for submits on window forms.
- {{domxref("Window.onunload")}}
  - : An event handler property for unload events on the window.
- {{domxref("Window.onuserproximity")}}
  - : An event handler property for user proximity events

## Interfaces

Ver [DOM Reference](/es/docs/Web/API/Document_Object_Model)

## Ver Tambien

- [Trabajar con ventanas en codigo chrome](/es/docs/Working_with_windows_in_chrome_code)

---
title: Window
slug: Web/API/Window
---

{{APIRef}}

O objeto `window` representa uma janela que contém um elemento DOM; a propriedade `document` aponta para o [documento DOM document](/pt-BR/docs/Web/API/Document) carregado naquela janela. Uma janela para um dado documento pode ser obtido usando a propriedade {{Domxref("document.defaultView")}}.

Esta seção provê uma breve referência a todos os métodos, propriedades e eventos disponíveis através do objeto DOM `window`. O objeto `window` implementa a interface `Window`, o qual herda da interface [`AbstractView`](https://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-AbstractView). Algumas funções globais, objeto de namespace, interfaces e construtores, apesar de não tipicamente associados ao objeto em questão, estão disponíveis e estão listados nas referências [JavaScript Reference](/pt-BR/docs/Web/JavaScript/Reference) e [DOM Reference](/pt-BR/docs/Web/API/Document_Object_Model).

Em um navegador com suporte a abas, como o Firefox, cada aba contém seu próprio objeto `window` (e, se você estiver escrevendo uma extensão, a janela do navegador é uma janela distinta também - veja [Working with windows in chrome code](/pt-BR/docs/Working_with_windows_in_chrome_code#Content_windows) para mais informação). Isto é, o objeto `window` não é compartilhado entre as abas na mesma janela. Alguns métodos, nomeadamente {{Domxref("window.resizeTo")}} e {{Domxref("window.resizeBy")}} aplicam-se à janela toda e não à aba em questão ao que o objeto `window` pertence. Geralmente, qualquer coisa que não pode racionalmente pertencer a uma aba, pertence a uma janela..

## Propriedades

_Esta interface herda propriedades da interface {{domxref("EventTarget")}} e implementa propriedades de {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, e {{domxref("WindowEventHandlers")}}._

Perceba que propriedades que são objetos (ex.: sobrecarregar o protótipo de elementos built-in) são listados em uma sessão separada abaixo.

- {{domxref("Window.applicationCache")}} {{readOnlyInline}}
  - : Um objeto {{domxref("OfflineResourceList")}} fornece acesso aos recursos offline para o window.
- {{domxref("Window.closed")}} {{Non-standard_inline}}{{readOnlyInline}}
  - : Esta propriedade indica quando a window atual está fechada ou não.
- [`Window.Components`](/pt-BR/docs/Components_object) {{Non-standard_inline}}
  - : O ponto de entrada para muitas características XPCOM. Algumas propriedades, por exemplo, classes, estão apenas disponíveis para código suficientemente privilegiado. Código de Web não deve usar essa propriedade.
- {{domxref("console","Window.console")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Retorna uma referência para o objeto console fornecendo acesso ao console debugging do navegador.
- {{domxref("Window.content")}} and Window.content {{Non-standard_inline}}{{ReadOnlyInline}}
  - : Retorna uma referência para o elemento de conteúdo na janela atual. A variante obsoleta com sublinhado não está disponível a partir do conteúdo da Web.
- {{domxref("Window.controllers")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Retorna os objetos de controlador XUL para a janela atual do crome.
- {{domxref("Window.crypto")}} {{readOnlyInline}}
  - : Retorna o objeto de criptografia do navegador.
- {{domxref("Window.defaultStatus")}}
  - : Obtém/define o texto da barra de status para determinada janela.
- {{domxref("Window.devicePixelRatio")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the ratio between physical pixels and device independent pixels in the current display.
- {{domxref("Window.dialogArguments")}} {{ReadOnlyInline}}
  - : Gets the arguments passed to the window (if it's a dialog box) at the time {{domxref("window.showModalDialog()")}} was called. This is an `nsIArray`.
- {{domxref("Window.directories")}}
  - : Synonym of {{domxref("window.personalbar")}}
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Retorna a referência à propriedade `document` que a janela contém.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : Returns the element in which the window is embedded, or null if the window is not embedded.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : Returns an array of the subframes in the current window.
- {{domxref("Window.fullScreen")}}
  - : This property indicates whether the window is displayed in full screen or not.
- {{domxref("Window.globalStorage")}}{{Non-standard_inline}}
  - : Unsupported since Gecko 13 (Firefox 13). Use {{domxref("Window.localStorage")}} instead.
    Was: Multiple storage objects that are used for storing data across multiple pages.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Retorna a referência ao objeto `history`.
- {{domxref("Window.innerHeight")}}
  - : Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
- {{domxref("window.innerWidth")}}
  - : Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : Returns the number of frames in the window. See also {{domxref("window.frames")}}.
- {{domxref("Window.location")}} {{ReadOnlyInline}}
  - : Gets/sets the location, or current URL, of the window object.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Returns the locationbar object, whose visibility can be toggled in the window.
- {{domxref("WindowStorage.localStorage")}} {{readOnlyInline}}
  - : Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Returns the menubar object, whose visibility can be toggled in the window.
- {{domxref("Window.messageManager")}}
  - : Returns the [message manager](/pt-BR/docs/The_message_manager) object for this window.
- {{domxref("Window.mozAnimationStartTime")}} {{ReadOnlyInline}}
  - : The time in milliseconds since epoch at which the current animation cycle began.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}}{{non-standard_inline}}
  - : Returns the horizontal (X) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns the vertical (Y) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozPaintCount")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the number of times the current document has been rendered to the screen in this window. This can be used to compute rendering performance.
- {{domxref("Window.name")}}
  - : Pega/attribui o nome ao objeto `window`.
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
- {{domxref("WindowSession.sessionStorage")}} {{readOnlyInline}}
  - : …
- {{domxref("SpeechSynthesisGetter.speechSynthesis")}} {{readOnlyInline}}
  - : …
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : Returns a reference to the parent of the current window or subframe.
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Provides a hosting area for [performance related](/pt-BR/docs/Web/API/Performance_API/Navigation_timing) attributes.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : Returns the personalbar object, whose visibility can be toggled in the window.
- {{domxref("Window.pkcs11")}}
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
  - : A storage object for storing data within a single page session.
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

_This interface inherits methods from the {{domxref("EventTarget")}} interface and implements methods from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

- {{domxref("EventTarget.addEventListener()")}}
  - : Register an event handler to a specific event type on the window.
- {{domxref("Window.alert()")}}
  - : Displays an alert dialog.
- {{domxref("WindowBase64.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("Window.back()")}} {{Non-standard_inline}}
  - : Moves back one in the window history.
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
  - : Closes the current window.
- {{domxref("Window.confirm()")}}
  - : Displays a dialog with a message that the user needs to respond to.
- {{domxref("Window.disableExternalCapture()")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.dispatchEvent()")}}
  - : Used to trigger an event.
- {{domxref("Window.dump()")}}
  - : Writes a message to the console.
- {{domxref("Window.enableExternalCapture()")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.find()")}}
  - : Searches for a given string in a window.
- {{domxref("Window.focus()")}}
  - : Sets focus on the current window.
- {{domxref("Window.forward()")}} {{Non-standard_inline}}
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
- {{domxref("Window.home()")}} {{Non-standard_inline}}
  - : Returns the browser to the home page.
- {{domxref("Window.matchMedia()")}}
  - : Returns a {{domxref("MediaQueryList")}} object representing the specified media query string.
- {{domxref("Window.maximize()")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.minimize()")}} (top-level XUL windows only)
  - : Minimizes the window.
- {{domxref("Window.moveBy()")}}
  - : Moves the current window by a specified amount.
- {{domxref("Window.moveTo()")}}
  - : Moves the window to the specified coordinates.
- {{domxref("Window.mozRequestAnimationFrame()")}}
  - : Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame. This will cause a `MozBeforePaint` event to fire before that repaint occurs.
- {{domxref("Window.open()")}}
  - : Opens a new window.
- {{domxref("Window.openDialog()")}}
  - : Opens a new dialog window.
- {{domxref("Window.postMessage()")}}
  - : Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first, in a secure manner.
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
- {{domxref("Window.routeEvent()")}}
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

## Event handlers

These are properties of the window object that can be set to establish event handlers for the various things that can happen in the window that might be of interest.

_This interface inherits event handlers from the {{domxref("EventTarget")}} interface and implements event handlers from {{domxref("WindowTimers")}}, {{domxref("WindowBase64")}}, and {{domxref("WindowEventHandlers")}}._

> [!NOTE]
> Starting in Gecko 9.0, you can now use the syntax `if ("onabort" in window)` to determine whether or not a given event handler property exists. This is because event handler interfaces have been updated to be proper web IDL interfaces. See [DOM event handlers](/pt-BR/docs/Web/Events/Event_handlers) for details.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : An event handler property for abort events on the window.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
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
  - : An event handler property for [`error`](/pt-BR/docs/Web/API/HTMLElement/error_event) events raised on the window.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : An event handler property for [`focus`](/pt-BR/docs/Web/API/Element/focus_event) events on the window.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : An event handler property for hash change events on the window; called when the part of the URL after the hash mark ("#") changes.
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : An event handler property for [`keydown`](/pt-BR/docs/Web/API/Element/keydown_event) events on the window.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : An event handler property for [`keypress`](/pt-BR/docs/Web/API/Element/keypress_event) events on the window.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : An event handler property for [`keyup`](/pt-BR/docs/Web/API/Element/keyup_event) events on the window.
- {{domxref("WindowEventHandlers.onlanguagechange")}}
  - : An event handler property for [`languagechange`](/pt-BR/docs/Web/API/Window/languagechange_event) events on the window.
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
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : An event handler property for pageshow events on the window.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : An event handler property for pagehide events on the window.
- {{domxref("Window.onpaint")}}
  - : An event handler property for paint events on the window.
- {{domxref("WindowEventHandlers.onpopstate")}}
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

## Constructors

See also the [DOM Interfaces](/pt-BR/docs/Web/API/Document_Object_Model).

- {{domxref("Window.DOMParser")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.GeckoActiveXObject")}}
  - : <!-- TODO: add content -->
- {{domxref("Image")}}
  - : Used for creating an {{domxref("HTMLImageElement")}}.
- {{domxref("Option")}}
  - : Used for creating an {{domxref("HTMLOptionElement")}}
- {{domxref("Window.QueryInterface")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.XMLSerializer")}}
  - : <!-- TODO: add content -->
- {{domxref("Worker")}}
  - : Used for creating a [Web worker](/pt-BR/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Window.XPCNativeWrapper")}}
  - : <!-- TODO: add content -->
- {{domxref("Window.XPCSafeJSObjectWrapper")}}
  - : <!-- TODO: add content -->

## Interfaces

See [DOM Reference](/pt-BR/docs/Web/API/Document_Object_Model)

## See also

- [Working with windows in chrome code](/pt-BR/docs/Working_with_windows_in_chrome_code)

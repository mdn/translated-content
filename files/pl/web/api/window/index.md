---
title: window
slug: Web/API/Window
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/Window
---
{{APIRef}}

The `window` object represents a window containing a DOM document; the `document` property points to the [DOM document](/pl/docs/DOM/document) loaded in that window. A window for a given document can be obtained using the {{Domxref("document.defaultView")}} property.

This section provides a brief reference for all of the methods, properties, and events available through the DOM `window` object. The `window` object implements the `Window` interface, which in turn inherits from the [`AbstractView`](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-AbstractView) interface. Some additional global functions, namespaces, objects, interfaces, and constructors, not typically associated with the window, but available on it, are listed in the [JavaScript Reference](/pl/docs/JavaScript/Reference) and [DOM Reference](/pl/docs/Web/API/Document_Object_Model).

In a tabbed browser, such as Firefox, each tab contains its own `window` object (and if you're writing an extension, the browser window itself is a separate window too - see [Working with windows in chrome code](/pl/docs/Working_with_windows_in_chrome_code#Content_windows) for more information). That is, the `window` object is not shared between tabs in the same window. Some methods, namely {{Domxref("window.resizeTo")}} and {{Domxref("window.resizeBy")}} apply to the whole window and not to the specific tab the `window` object belongs to. Generally, anything that can't reasonably pertain to a tab pertains to the window instead.

{{InheritanceDiagram}}

## Properties

_This interface inherits properties from the {{domxref("EventTarget")}} interface and implements properties from the {{domxref("WindowOrWorkerGlobalScope")}} and {{domxref("WindowEventHandlers")}} mixins._

Note that properties which are objects (e.g.,. for overriding the prototype of built-in elements) are listed in a separate section below.

- {{domxref("Window.closed")}} {{Non-standard_inline}}{{readOnlyInline}}
  - : This property indicates whether the current window is closed or not.
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : Returns a reference to the console object which provides access to the browser's debugging console.
- {{domxref("Window.content")}} and Window\.\_content {{Non-standard_inline}} {{obsolete_inline}}{{ReadOnlyInline}}
  - : Returns a reference to the content element in the current window. Since Firefox 57 (initially Nightly-only), both versions are only available from chrome (privileged) code, and not available to the web anymore.
- {{domxref("Window.controllers")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the XUL controller objects for the current chrome window.
- {{domxref("Window.customElements")}}{{ReadOnlyInline}}
  - : returns a reference to the {{domxref("CustomElementRegistry")}} object, which can be used to register new [custom elements](/pl/docs/Web/Web_Components/Using_custom_elements) and get information about previously registered custom elements.
- {{domxref("Window.crypto")}} {{readOnlyInline}}
  - : Returns the browser crypto object.
- {{domxref("Window.defaultStatus")}} {{Obsolete_inline("gecko23")}}
  - : Gets/sets the status bar text for the given window.
- {{domxref("Window.devicePixelRatio")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the ratio between physical pixels and device independent pixels in the current display.
- {{domxref("Window.dialogArguments")}} {{ReadOnlyInline}}
  - : Gets the arguments passed to the window (if it's a dialog box) at the time {{domxref("window.showModalDialog()")}} was called. This is an `nsIArray`.
- {{domxref("Window.directories")}} {{obsolete_inline}}
  - : Synonym of {{domxref("window.personalbar")}}
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Returns a reference to the document that the window contains.
- {{domxref("Window.DOMMatrix")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMMatrix")}} object, which represents 4x4 matrices, suitable for 2D and 3D operations.
- {{domxref("Window.DOMMatrixReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMMatrixReadOnly")}} object, which represents 4x4 matrices, suitable for 2D and 3D operations.
- {{domxref("Window.DOMPoint")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMPoint")}} object, which represents a 2D or 3D point in a coordinate system.
- {{domxref("Window.DOMPointReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMPointReadOnly")}} object, which represents a 2D or 3D point in a coordinate system.
- {{domxref("Window.DOMQuad")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMQuad")}} object, which provides represents a quadrilaterial object, that is one having four corners and four sides.
- {{domxref("Window.DOMRect")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMRect")}} object, which represents a rectangle.
- {{domxref("Window.DOMRectReadOnly")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to a {{domxref("DOMRectReadOnly")}} object, which represents a rectangle.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : Returns the element in which the window is embedded, or null if the window is not embedded.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : Returns an array of the subframes in the current window.
- {{domxref("Window.fullScreen")}} {{gecko_minversion_inline("1.9")}}
  - : This property indicates whether the window is displayed in full screen or not.
- {{domxref("Window.globalStorage")}} {{gecko_minversion_inline("1.8.1")}} {{Non-standard_inline}} {{Obsolete_inline("gecko13")}}
  - : Unsupported since Gecko 13 (Firefox 13). Use {{domxref("Window.localStorage")}} instead.
    Was: Multiple storage objects that are used for storing data across multiple pages.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Returns a reference to the history object.
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.
- {{domxref("Window.isSecureContext")}} {{readOnlyInline}}
  - : Indicates whether a context is capable of using features that require secure contexts.
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : Returns the number of frames in the window. See also {{domxref("window.frames")}}.
- {{domxref("Window.location")}}
  - : Gets/sets the location, or current URL, of the window object.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Returns the locationbar object, whose visibility can be toggled in the window.
- {{domxref("Window.localStorage")}} {{readOnlyInline}}{{gecko_minversion_inline("1.9.1")}}
  - : Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Returns the menubar object, whose visibility can be toggled in the window.
- {{domxref("Window.messageManager")}} {{gecko_minversion_inline("2.0")}}
  - : Returns the [message manager](/pl/docs/The_message_manager) object for this window.
- {{domxref("Window.mozAnimationStartTime")}} {{ReadOnlyInline}}{{gecko_minversion_inline("2.0")}} {{Deprecated_inline}}
  - : The time in milliseconds since epoch at which the current animation cycle began.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}}{{non-standard_inline}}{{gecko_minversion_inline("1.9.2")}}
  - : Returns the horizontal (X) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}{{gecko_minversion_inline("1.9.2")}}
  - : Returns the vertical (Y) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozPaintCount")}} {{non-standard_inline}}{{ReadOnlyInline}} {{gecko_minversion_inline("2.0")}}
  - : Returns the number of times the current document has been rendered to the screen in this window. This can be used to compute rendering performance.
- {{domxref("Window.name")}}
  - : Gets/sets the name of the window.
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : Returns a reference to the navigator object.
- {{domxref("Window.NetworkInformation")}} {{readOnlyInline}} {{experimental_inline}}
  - : Returns a reference to the {{domxref("NetworkInformation")}} interface, which provides information about the connection a device is using to communicate with the network and provides a means for scripts to be notified if the connection type changes.
- {{domxref("Window.opener")}}
  - : Returns a reference to the window that opened this current window.
- {{domxref("Window.orientation")}}{{non-standard_inline}}{{deprecated_inline}}{{readOnlyInline}}
  - : Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.
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
- {{domxref("Window.StaticRange")}} {{experimental_inline}} {{readonlyinline}}
  - : Returns a {{domxref('StaticRange.StaticRange','StaticRange()')}} constructor which creates a {{domxref('StaticRange')}} object.
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : Returns a reference to the parent of the current window or subframe.
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Returns a {{domxref("Performance")}} object, which includes the {{domxref("Performance.timing", "timing")}} and {{domxref("Performance.navigation", "navigation")}} attributes, each of which is an object providing [performance-related](/pl/docs/Navigation_timing) data. See also [Using Navigation Timing](/pl/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing) for additional information and examples.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : Returns the personalbar object, whose visibility can be toggled in the window.
- {{domxref("Window.pkcs11")}} {{obsolete_inline(29)}}
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
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SpeechSynthesis")}} object, which is the entry point into using [Web Speech API](/pl/docs/Web/API/Web_Speech_API) speech synthesis functionality.
- {{domxref("Window.status")}}
  - : Gets/sets the text in the statusbar at the bottom of the browser.
- {{domxref("Window.statusbar")}} {{readOnlyInline}}
  - : Returns the statusbar object, whose visibility can be toggled in the window.
- {{domxref("Window.toolbar")}} {{readOnlyInline}}
  - : Returns the toolbar object, whose visibility can be toggled in the window.
- {{domxref("Window.top")}} {{readOnlyInline}}
  - : Returns a reference to the topmost window in the window hierarchy. This property is read only.
- {{domxref("Window.visualViewport")}} {{readOnlyInline}}
  - : Returns a {{domxref("VisualViewport")}} object which represents the visual viewport for a given window.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Returns a reference to the current window.
- `window[0]`,` window[1]`, etc.
  - : Returns a reference to the `window` object in the frames. See {{domxref("Window.frames")}} for more details.

### Properties implemented from elsewhere

- {{domxref("WindowOrWorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("WindowOrWorkerGlobalScope.indexedDB")}} {{readonlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} {{readOnlyinline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("WindowOrWorkerGlobalScope.origin")}} {{readOnlyinline}}
  - : Returns the global object's origin, serialized as a string. (This does not yet appear to be implemented in any browser.)

## Methods

_This interface inherits methods from the {{domxref("EventTarget")}} interface and implements methods from {{domxref("WindowOrWorkerGlobalScope")}} and {{domxref("EventTarget")}}._

- {{domxref("Window.alert()")}}
  - : Displays an alert dialog.
- {{domxref("Window.back()")}} {{Non-standard_inline}} {{obsolete_inline}}
  - : Moves back one in the window history.
- {{domxref("Window.blur()")}}
  - : Sets focus away from the window.
- {{domxref("Window.cancelAnimationFrame()")}} {{experimental_inline}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}} {{experimental_inline}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.captureEvents()")}} {{Deprecated_inline}}
  - : Registers the window to capture all events of the specified type.
- {{domxref("Window.clearImmediate()")}}
  - : Cancels the repeated execution set using `setImmediate`.
- {{domxref("Window.close()")}}
  - : Closes the current window.
- {{domxref("Window.confirm()")}}
  - : Displays a dialog with a message that the user needs to respond to.
- {{domxref("Window.disableExternalCapture()")}} {{obsolete_inline(24)}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.dispatchEvent()")}}
  - : Used to trigger an event.
- {{domxref("Window.dump()")}} {{Non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("Window.enableExternalCapture()")}} {{obsolete_inline(24)}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.find()")}}
  - : Searches for a given string in a window.
- {{domxref("Window.focus()")}}
  - : Sets focus on the current window.
- {{domxref("Window.forward()")}} {{Non-standard_inline}} {{obsolete_inline}}
  - : Moves the window one document forward in the history.
- {{domxref("Window.getAttention()")}} {{Non-standard_inline}} {{obsolete_inline}}
  - : Flashes the application icon.
- {{domxref("Window.getAttentionWithCycleCount()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.getComputedStyle()")}}
  - : Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_inline}}
  - : Gets default computed style for the specified element, ignoring author stylesheets.
- {{domxref("Window.getSelection()")}}
  - : Returns the selection object representing the selected item(s).
- {{domxref("Window.home()")}} {{Non-standard_inline}} {{obsolete_inline}}
  - : Returns the browser to the home page.
- {{domxref("Window.matchMedia()")}} {{gecko_minversion_inline("6.0")}}
  - : Returns a {{domxref("MediaQueryList")}} object representing the specified media query string.
- {{domxref("Window.maximize()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.minimize()")}} (top-level XUL windows only)
  - : Minimizes the window.
- {{domxref("Window.moveBy()")}}
  - : Moves the current window by a specified amount.
- {{domxref("Window.moveTo()")}}
  - : Moves the window to the specified coordinates.
- {{domxref("Window.open()")}}
  - : Opens a new window.
- {{domxref("Window.openDialog()")}} {{Non-standard_inline}} {{obsolete_inline}}
  - : Opens a new dialog window.
- {{domxref("Window.postMessage()")}}
  - : Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.
- {{domxref("Window.print()")}}
  - : Opens the Print Dialog to print the current document.
- {{domxref("Window.prompt()")}}
  - : Returns the text entered by the user in a prompt dialog.
- {{domxref("Window.releaseEvents()")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : Releases the window from trapping events of a specific type.
- {{domxref("Window.requestAnimationFrame()")}} {{gecko_minversion_inline("2.0")}}
  - : Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame.
- {{domxref("Window.requestIdleCallback()")}} {{experimental_inline}}
  - : Enables the scheduling of tasks during a browser's idle periods.
- {{domxref("Window.resizeBy()")}}
  - : Resizes the current window by a certain amount.
- {{domxref("Window.resizeTo()")}}
  - : Dynamically resizes window.
- {{domxref("Window.restore()")}} {{Non-standard_inline}} {{obsolete_inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.routeEvent()")}} {{obsolete_inline(24)}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.scroll()")}}
  - : Scrolls the window to a particular place in the document.
- {{domxref("Window.scrollBy()")}}
  - : Scrolls the document in the window by the given amount.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_inline}}
  - : Scrolls the document by the given number of lines.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_inline}}
  - : Scrolls the current document by the specified number of pages.
- {{domxref("Window.scrollTo()")}}
  - : Scrolls to a particular set of coordinates in the document.
- {{domxref("Window.setCursor()")}} {{Non-standard_inline}} (top-level XUL windows only)
  - : Changes the cursor for the current window
- {{domxref("Window.setImmediate()")}}
  - : Executes a function after the browser has finished other heavy tasks
- {{domxref("Window.setResizable()")}} {{Non-standard_inline}}
  - : Toggles a user's ability to resize a window.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_inline}}
  - : Sizes the window according to its content.
- {{domxref("Window.stop()")}}
  - : This method stops window loading.
- {{domxref("Window.updateCommands()")}} {{Non-standard_inline}}
  - : Updates the state of commands of the current chrome window (UI).

### Methods implemented from elsewhere

- {{domxref("EventTarget.addEventListener()")}}
  - : Register an event handler to a specific event type on the window.
- {{domxref("WindowOrWorkerGlobalScope.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("WindowOrWorkerGlobalScope.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}.
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}.
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{domxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("WindowOrWorkerGlobalScope.fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("EventTarget.removeEventListener")}}
  - : Removes an event listener from the window.
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.

### Obsolete methods

- {{domxref("Window.showModalDialog()")}} {{obsolete_inline}}
  - : Displays a modal dialog. **This method was removed completely in Chrome 43, and Firefox 55.**

## Event handlers

These are properties of the window object that can be set to establish event handlers for the various things that can happen in the window that might be of interest.

_This interface inherits event handlers from the {{domxref("EventTarget")}} interface and implements event handlers from {{domxref("WindowEventHandlers")}}._

> **Note:** Starting in {{Gecko("9.0")}}, you can now use the syntax `if ("onabort" in window)` to determine whether or not a given event handler property exists. This is because event handler interfaces have been updated to be proper web IDL interfaces. See [DOM event handlers](/pl/docs/DOM/DOM_event_handlers) for details.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Called when the loading of a resource has been aborted, such as by a user canceling the load while it is still in progress
- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Called when the print dialog box is closed. See {{event("afterprint")}} event.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Called when the print dialog box is opened. See {{event("beforeprint")}} event.
- {{domxref("Window.onbeforeinstallprompt")}}
  - : An event handler property dispatched before a user is prompted to save a web site to a home screen on mobile.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : An event handler property for before-unload events on the window.
- {{domxref("GlobalEventHandlers.onblur")}}
  - : Called after the window loses focus, such as due to a popup.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : An event handler property for change events on the window.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : Called after the ANY mouse button is pressed & released
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : Called when a double click is made with ANY mouse button.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : Called after the window is closed
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : Called when the RIGHT mouse button is pressed
- {{domxref("Window.ondevicelight")}}
  - : An event handler property for any ambient light levels changes
- {{domxref("Window.ondevicemotion")}} {{gecko_minversion_inline("6.0")}}
  - : Called if accelerometer detects a change (For mobile devices)
- {{domxref("Window.ondeviceorientation")}} {{gecko_minversion_inline("6.0")}}
  - : Called when the orientation is changed (For mobile devices)
- {{domxref("Window.ondeviceorientationabsolute")}} {{non-standard_inline}} Chrome only
  - : An event handler property for any device orientation changes.
- {{domxref("Window.ondeviceproximity")}}
  - : An event handler property for device proximity event
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Called when a resource fails to load OR when an error occurs at runtime. See {{event("error")}} event.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Called after the window receives or regains focus. See {{event("focus")}} events.
- {{domxref("WindowEventHandlers.onhashchange")}} {{gecko_minversion_inline("1.9.2")}}
  - : An event handler property for {{event('hashchange')}} events on the window; called when the part of the URL after the hash mark ("#") changes.
- {{domxref("Window.onappinstalled")}}
  - : Called when the page is installed as a webapp. See {{event('appinstalled')}} event.
- {{domxref("Window.ongamepadconnected")}}
  - : Represents an event handler that will run when a gamepad is connected (when the {{event('gamepadconnected')}} event fires).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Represents an event handler that will run when a gamepad is disconnected (when the {{event('gamepaddisconnected')}} event fires).
- {{domxref("Window.oninput")}}
  - : Called when the value of an \<input> element changes
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : Called when you begin pressing ANY key. See {{event("keydown")}} event.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : Called when a key (except Shift, Fn, and CapsLock) is in pressed position. See {{event("keypress")}} event.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : Called when you finish releasing ANY key. See {{event("keyup")}} event.
- {{domxref("WindowEventHandlers.onlanguagechange")}}
  - : An event handler property for {{event("languagechange")}} events on the window.
- {{domxref("GlobalEventHandlers.onload")}}
  - : Called after all resources and the DOM are fully loaded. WILL NOT get called when the page is loaded from cache, such as with back button.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("message")}} event is raised.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : Called when ANY mouse button is pressed.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : Called continously when the mouse is moved inside the window.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : Called when the pointer leaves the window.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : Called when the pointer enters the window
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : Called when ANY mouse button is released
- {{domxref("Window.onmozbeforepaint")}} {{gecko_minversion_inline("2.0")}}
  - : An event handler property for the `MozBeforePaint` event, which is sent before repainting the window if the event has been requested by a call to the {{domxref("Window.mozRequestAnimationFrame()")}} method.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Called when network connection is lost. See {{event("offline")}} event.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Called when network connection is established. See {{event("online")}} event.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Called when the user navigates away from the page, before the onunload event. See {{event("pagehide")}} event.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Called after all resources and the DOM are fully loaded. See {{event("pageshow")}} event.
- {{domxref("Window.onpaint")}}
  - : An event handler property for paint events on the window.
- {{domxref("WindowEventHandlers.onpopstate")}} {{gecko_minversion_inline("2.0")}}
  - : Called when a back button is pressed.
- {{domxref("Window.onrejectionhandled")}} {{experimental_inline}}
  - : An event handler for handled {{jsxref("Promise")}} rejection events.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : Called when a form is reset
- {{domxref("GlobalEventHandlers.onresize")}}
  - : Called continuously as you are resizing the window.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : Called when the scroll bar is moved via ANY means. If the resource fully fits in the window, then this event cannot be invoked
- {{domxref("GlobalEventHandlers.onwheel")}}
  - : Called when the mouse wheel is rotated around any axis
- {{domxref("GlobalEventHandlers.onselect")}}
  - : Called after text in an input field is selected
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("selectionchange")}} event is raised.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Called when there is a change in session storage or local storage. See {{event("storage")}} event
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : Called when a form is submitted
- {{domxref("WindowEventHandlers.onunhandledrejection")}} {{experimental_inline}}
  - : An event handler for unhandled {{jsxref("Promise")}} rejection events.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Called when the user navigates away from the page.
- {{domxref("Window.onuserproximity")}}
  - : An event handler property for user proximity events.
- {{domxref("Window.onvrdisplayconnect")}}
  - : Represents an event handler that will run when a compatible VR device has been connected to the computer (when the {{event("vrdisplayconnected")}} event fires).
- {{domxref("Window.onvrdisplaydisconnect")}}
  - : Represents an event handler that will run when a compatible VR device has been disconnected from the computer (when the {{event("vrdisplaydisconnected")}} event fires).
- {{domxref("Window.onvrdisplayactivate")}}
  - : Represents an event handler that will run when a display is able to be presented to (when the {{event("vrdisplayactivate")}} event fires), for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
- {{domxref("Window.onvrdisplaydeactivate")}}
  - : Represents an event handler that will run when a display can no longer be presented to (when the {{event("vrdisplaydeactivate")}} event fires), for example if an HMD has gone into standby or sleep mode due to a period of inactivity.
- {{domxref("Window.onvrdisplayblur")}}
  - : Represents an event handler that will run when presentation to a display has been paused for some reason by the browser, OS, or VR hardware (when the {{event("vrdisplayblur")}} event fires) — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience.
- {{domxref("Window.onvrdisplayfocus")}}
  - : Represents an event handler that will run when presentation to a display has resumed after being blurred (when the {{event("vrdisplayfocus")}} event fires).
- {{domxref("Window.onvrdisplaypresentchange")}}
  - : represents an event handler that will run when the presenting state of a VR device changes — i.e. goes from presenting to not presenting, or vice versa (when the {{event("vrdisplaypresentchange")}} event fires).

## Constructors

See also the [DOM Interfaces](/pl/docs/DOM/DOM_Reference).

- {{domxref("DOMParser")}}
  - : `DOMParser` can parse XML or HTML source stored in a string into a DOM [Document](/pl/docs/DOM/document "document"). `DOMParser` is specified in [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/).
- {{domxref("Window.GeckoActiveXObject")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Image")}}
  - : Used for creating an {{domxref("HTMLImageElement")}}.
- {{domxref("Option")}}
  - : Used for creating an {{domxref("HTMLOptionElement")}}
- {{domxref("Window.QueryInterface")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XMLSerializer")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Worker")}}
  - : Used for creating a [Web worker](/pl/docs/DOM/Using_web_workers)
- {{domxref("Window.XPCNativeWrapper")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XPCSafeJSObjectWrapper")}}
  - : {{todo("NeedsContents")}}

## Interfaces

See [DOM Reference](/pl/docs/DOM/DOM_Reference)

## See also

- [Working with windows in chrome code](/pl/docs/Working_with_windows_in_chrome_code)

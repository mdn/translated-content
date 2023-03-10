---
title: Window
slug: Web/API/Window
---

{{APIRef}}

`window` 物件代表了一個包含 DOM 文件的視窗，其中的 `document` 屬性指向了視窗中載入的 {{domxref("Document")}} 物件。而使用 `document` 的 {{Domxref("Document.defaultView", "defaultView")}} 屬性，則可取得該 Document 物件所在的視窗 `window` 物件。

本節提供了 DOM `window` 物件的所有方法、屬性以及事件的說明。`window` 物件實作了 `Window` 介面，而 `Window` 介面則繼承自 [`AbstractView`](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-AbstractView) 介面。一些額外、與 `window` 物件沒有直接關係，但卻置於 `window` 物件中的全域函式、命名空間、物件、介面以及建構式，將會在 [JavaScript 參考文件](/zh-TW/docs/JavaScript/Reference)和[文件物件模型（DOM）](/zh-TW/docs/Web/API/Document_Object_Model)中說明。

在支援分頁的瀏覽器中（如 Firefox），每一個分頁標籤都擁有自己的 `window` 物件（如果你正在撰寫瀏覽器附加元件，瀏覽器視窗本身也是一個個別的 window－請參閱 [Working with windows in chrome code](/zh-TW/docs/Working_with_windows_in_chrome_code#Content_windows)），分頁不會於同一個瀏覽器視窗中共享 `window` 物件。但有部分的方法，如 {{Domxref("window.resizeTo()")}} 或 {{Domxref("window.resizeBy()")}} 會套用至整個視窗，而不只是該 `window` 物件所屬的分頁標籤。一般來說，若無法適當的應用於分頁，便會套用至瀏覽器視窗。

{{InheritanceDiagram}}

## 屬性

_This interface inherits properties from the {{domxref("EventTarget")}} interface and implements properties from the `WindowOrWorkerGlobalScope` and {{domxref("WindowEventHandlers")}} mixins._

請注意，指向物件的屬性（例如覆蓋了內建物件原型的元素）會在另外的列表中說明。

- {{domxref("Window.applicationCache")}} {{readOnlyInline}}
  - : 指向 {{domxref("OfflineResourceList")}} 物件，此物件提供了視窗的離線資源。
- {{domxref("Window.closed")}} {{Non-standard_inline}}{{readOnlyInline}}
  - : This property indicates whether the current window is closed or not.
- {{domxref("Window.Components")}} {{Non-standard_inline}}
  - : The entry point to many [XPCOM](/zh-TW/docs/XPCOM) features. Some properties, e.g. [classes](/zh-TW/docs/Components.classes), are only available to sufficiently privileged code. **Web code should not use this property.**
- {{domxref("Window.console")}} {{ReadOnlyInline}}
  - : Returns a reference to the console object which provides access to the browser's debugging console.
- {{domxref("Window.content")}} and Window.content {{Non-standard_inline}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Returns a reference to the content element in the current window. The obsolete variant with underscore is no longer available from Web content.
- {{domxref("Window.controllers")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the XUL controller objects for the current chrome window.
- {{domxref("Window.crypto")}} {{readOnlyInline}}
  - : Returns the browser crypto object.
- {{domxref("Window.defaultStatus")}} {{Deprecated_Inline}}
  - : Gets/sets the status bar text for the given window.
- {{domxref("Window.devicePixelRatio")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Returns the ratio between physical pixels and device independent pixels in the current display.
- {{domxref("Window.dialogArguments")}} {{ReadOnlyInline}}
  - : Gets the arguments passed to the window (if it's a dialog box) at the time {{domxref("window.showModalDialog()")}} was called. This is an `nsIArray`.
- {{domxref("Window.directories")}} {{Deprecated_Inline}}
  - : Synonym of {{domxref("window.personalbar")}}
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : 指向此 `window` 中的 `document` 物件。
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : Returns the element in which the window is embedded, or null if the window is not embedded.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : Returns an array of the subframes in the current window.
- {{domxref("Window.fullScreen")}}
  - : 此屬性表示目前視窗是否為全螢幕顯示。
- {{domxref("Window.globalStorage")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Unsupported since Gecko 13 (Firefox 13). Use {{domxref("Window.localStorage")}} instead.
    Was: Multiple storage objects that are used for storing data across multiple pages.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : 指向 history 物件。
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : 取得視窗內的網頁內容高度，包含水平捲軸。
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : 取得視窗內的網頁內容寬度，包含垂直捲軸。
- {{domxref("Window.isSecureContext")}} {{readOnlyInline}}
  - : Indicates whether a context is capable of using features that require secure contexts.
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : Returns the number of frames in the window. See also {{domxref("window.frames")}}.
- {{domxref("Window.location")}}
  - : Gets/sets the location, or current URL, of the window object.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Returns the locationbar object, whose visibility can be toggled in the window.
- {{domxref("Window.localStorage")}} {{readOnlyInline}}
  - : Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Returns the menubar object, whose visibility can be toggled in the window.
- {{domxref("Window.messageManager")}}
  - : Returns the [message manager](/zh-TW/docs/The_message_manager) object for this window.
- {{domxref("Window.mozAnimationStartTime")}} {{ReadOnlyInline}} {{Deprecated_inline}}
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
- {{domxref("Window.orientation")}}{{non-standard_inline}}{{deprecated_inline}}{{readOnlyInline}}
  - : Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : 取得瀏覽器視窗的高度。
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : 取得瀏覽器視窗的寬度。
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : An alias for {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}}{{readOnlyInline}}
  - : An alias for {{domxref("window.scrollY")}}
- {{domxref("Window.sessionStorage")}} {{readOnlyInline}}
  - : Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : Returns a reference to the parent of the current window or subframe.
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Returns a {{domxref("Performance")}} object, which includes the {{domxref("Performance.timing", "timing")}} and {{domxref("Performance.navigation", "navigation")}} attributes, each of which is an object providing [performance-related](/zh-TW/docs/Navigation_timing) data. See also [Using Navigation Timing](/zh-TW/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing) for additional information and examples.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : Returns the personalbar object, whose visibility can be toggled in the window.
- {{domxref("Window.pkcs11")}} {{Deprecated_Inline}}
  - : Formerly provided access to install and remove PKCS11 modules.
- {{domxref("Window.returnValue")}}
  - : The return value to be returned to the function that called {{domxref("window.showModalDialog()")}} to display the window as a modal dialog.
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : 回傳一個與 window 關聯的 screen 物件。
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
  - : Returns a {{domxref("SpeechSynthesis")}} object, which is the entry point into using [Web Speech API](/zh-TW/docs/Web/API/Web_Speech_API) speech synthesis functionality.
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

### Properties implemented from elsewhere

- {{domxref("caches")}} {{readOnlyinline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("indexedDB")}} {{readonlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("isSecureContext")}} {{readOnlyinline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("origin")}} {{readOnlyinline}}
  - : Returns the global object's origin, serialized as a string. (This does not yet appear to be implemented in any browser.)

## 方法

_This interface inherits methods from the {{domxref("EventTarget")}} interface and implements methods from `WindowOrWorkerGlobalScope` and {{domxref("EventTarget")}}._

- {{domxref("Window.alert()")}}
  - : Displays an alert dialog.
- {{domxref("Window.back()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
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
- {{domxref("Window.disableExternalCapture()")}} {{Deprecated_Inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.dispatchEvent()")}}
  - : Used to trigger an event.
- {{domxref("Window.dump()")}} {{Non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("Window.enableExternalCapture()")}} {{Deprecated_Inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.find()")}}
  - : Searches for a given string in a window.
- {{domxref("Window.focus()")}}
  - : Sets focus on the current window.
- {{domxref("Window.forward()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Moves the window one document forward in the history.
- {{domxref("Window.getAttention()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Flashes the application icon.
- {{domxref("Window.getAttentionWithCycleCount()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.getComputedStyle()")}}
  - : Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_inline}}
  - : Gets default computed style for the specified element, ignoring author stylesheets.
- {{domxref("Window.getSelection()")}}
  - : Returns the selection object representing the selected item(s).
- {{domxref("Window.home()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Returns the browser to the home page.
- {{domxref("Window.matchMedia()")}}
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
- {{domxref("Window.openDialog()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Opens a new dialog window.
- {{domxref("Window.postMessage()")}}
  - : Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.
- {{domxref("Window.print()")}}
  - : Opens the Print Dialog to print the current document.
- {{domxref("Window.prompt()")}}
  - : Returns the text entered by the user in a prompt dialog.
- {{domxref("Window.releaseEvents()")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : Releases the window from trapping events of a specific type.
- {{domxref("Window.requestAnimationFrame()")}}
  - : Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame.
- {{domxref("Window.requestIdleCallback()")}} {{experimental_inline}}
  - : Enables the scheduling of tasks during a browser's idle periods.
- {{domxref("Window.resizeBy()")}}
  - : Resizes the current window by a certain amount.
- {{domxref("Window.resizeTo()")}}
  - : Dynamically resizes window.
- {{domxref("Window.restore()")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.routeEvent()")}} {{Deprecated_Inline}}
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
- {{domxref("atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval()")}}.
- {{domxref("clearTimeout()")}}
  - : Cancels the delayed execution set using {{domxref("setTimeout()")}}.
- {{domxref("createImageBitmap()")}}
  - : Accepts a variety of different image sources, and returns a {{domxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}. Optionally the source is cropped to the rectangle of pixels originating at _(sx, sy)_ with width sw, and height sh.
- {{domxref("fetch()")}}
  - : Starts the process of fetching a resource from the network.
- {{domxref("EventTarget.removeEventListener")}}
  - : Removes an event listener from the window.
- {{domxref("setInterval()")}}
  - : Schedules a function to execute every time a given number of milliseconds elapses.
- {{domxref("setTimeout()")}}
  - : Schedules a function to execute in a given amount of time.

### Obsolete methods

- {{domxref("Window.showModalDialog()")}} {{Deprecated_Inline}}
  - : Displays a modal dialog. **This method was removed completely in Chrome 43, and Firefox 55.**

## 事件處理器

These are properties of the window object that can be set to establish event handlers for the various things that can happen in the window that might be of interest.

_This interface inherits event handlers from the {{domxref("EventTarget")}} interface and implements event handlers from {{domxref("WindowEventHandlers")}}._

> **備註：** Starting in Gecko 9.0, you can now use the syntax `if ("onabort" in window)` to determine whether or not a given event handler property exists. This is because event handler interfaces have been updated to be proper web IDL interfaces. See [DOM event handlers](/zh-TW/docs/DOM/DOM_event_handlers) for details.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Called when the loading of a resource has been aborted, such as by a user canceling the load while it is still in progress
- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Called when the print dialog box is closed. See [`afterprint`](/zh-TW/docs/Web/API/Window/afterprint_event) event.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Called when the print dialog box is opened. See [`beforeprint`](/zh-TW/docs/Web/API/Window/beforeprint_event) event.
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
- {{domxref("Window.ondevicemotion")}}
  - : Called if accelerometer detects a change (For mobile devices)
- {{domxref("Window.ondeviceorientation")}}
  - : Called when the orientation is changed (For mobile devices)
- {{domxref("Window.ondeviceorientationabsolute")}} {{non-standard_inline}} Chrome only
  - : An event handler property for any device orientation changes.
- {{domxref("Window.ondeviceproximity")}}
  - : An event handler property for device proximity event
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Called when a resource fails to load OR when an error occurs at runtime. See [`error`](/zh-TW/docs/Web/API/Element/error_event) event.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Called after the window receives or regains focus. See [`focus`](/zh-TW/docs/Web/API/Element/focus_event) events.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : An event handler property for [`hashchange`](/zh-TW/docs/Web/API/Window/hashchange_event) events on the window; called when the part of the URL after the hash mark ("#") changes.
- {{domxref("Window.onappinstalled")}}
  - : Called when the page is installed as a webapp. See `appinstalled` event.
- {{domxref("Window.ongamepadconnected")}}
  - : Represents an event handler that will run when a gamepad is connected (when the [`gamepadconnected`](/zh-TW/docs/Web/API/Window/gamepadconnected_event) event fires).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Represents an event handler that will run when a gamepad is disconnected (when the [`gamepaddisconnected`](/zh-TW/docs/Web/API/Window/gamepaddisconnected_event) event fires).
- {{domxref("Window.oninput")}}
  - : Called when the value of an \<input> element changes
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : Called when you begin pressing ANY key. See [`keydown`](/zh-TW/docs/Web/API/Element/keydown_event) event.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : Called when a key (except Shift, Fn, and CapsLock) is in pressed position. See [`keypress`](/zh-TW/docs/Web/API/Element/keypress_event) event.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : Called when you finish releasing ANY key. See [`keyup`](/zh-TW/docs/Web/API/Element/keyup_event) event.
- {{domxref("WindowEventHandlers.onlanguagechange")}}
  - : An event handler property for [`languagechange`](/zh-TW/docs/Web/API/Window/languagechange_event) events on the window.
- {{domxref("GlobalEventHandlers.onload")}}
  - : Called after all resources and the DOM are fully loaded. WILL NOT get called when the page is loaded from cache, such as with back button.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Is an event handler representing the code to be called when the `message` event is raised.
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
- {{domxref("Window.onmozbeforepaint")}}
  - : An event handler property for the `MozBeforePaint` event, which is sent before repainting the window if the event has been requested by a call to the {{domxref("Window.mozRequestAnimationFrame()")}} method.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Called when network connection is lost. See [`offline`](/zh-TW/docs/Web/API/Window/offline_event) event.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Called when network connection is established. See [`online`](/zh-TW/docs/Web/API/Window/online_event) event.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Called when the user navigates away from the page, before the onunload event. See [`pagehide`](/zh-TW/docs/Web/API/Window/pagehide_event) event.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Called after all resources and the DOM are fully loaded. See [`pageshow`](/zh-TW/docs/Web/API/Window/pageshow_event) event.
- {{domxref("Window.onpaint")}}
  - : An event handler property for paint events on the window.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Called when a back putton is pressed.
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
  - : Is an event handler representing the code to be called when the `selectionchange` event is raised.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Called when there is a change in session storage or local storage. See [`storage`](/zh-TW/docs/Web/API/Window/storage_event) event
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : Called when a form is submitted
- {{domxref("WindowEventHandlers.onunhandledrejection")}} {{experimental_inline}}
  - : An event handler for unhandled {{jsxref("Promise")}} rejection events.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Called when the user navigates away from the page.
- {{domxref("Window.onuserproximity")}}
  - : An event handler property for user proximity events.
- {{domxref("Window.onvrdisplayconnect")}}
  - : Represents an event handler that will run when a compatible VR device has been connected to the computer (when the `vrdisplayconnected` event fires).
- {{domxref("Window.onvrdisplaydisconnect")}}
  - : Represents an event handler that will run when a compatible VR device has been disconnected from the computer (when the `vrdisplaydisconnected` event fires).
- {{domxref("Window.onvrdisplayactivate")}}
  - : Represents an event handler that will run when a display is able to be presented to (when the `vrdisplayactivate` event fires), for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
- {{domxref("Window.onvrdisplaydeactivate")}}
  - : Represents an event handler that will run when a display can no longer be presented to (when the `vrdisplaydeactivate` event fires), for example if an HMD has gone into standby or sleep mode due to a period of inactivity.
- {{domxref("Window.onvrdisplayblur")}}
  - : Represents an event handler that will run when presentation to a display has been paused for some reason by the browser, OS, or VR hardware (when the `vrdisplayblur` event fires) — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience.
- {{domxref("Window.onvrdisplayfocus")}}
  - : Represents an event handler that will run when presentation to a display has resumed after being blurred (when the `vrdisplayfocus` event fires).
- {{domxref("Window.onvrdisplaypresentchange")}}
  - : represents an event handler that will run when the presenting state of a VR device changes — i.e. goes from presenting to not presenting, or vice versa (when the `vrdisplaypresentchange` event fires).

## 建構式

See also the [DOM Interfaces](/zh-TW/docs/DOM/DOM_Reference).

- {{domxref("DOMParser")}}
  - : `DOMParser` can parse XML or HTML source stored in a string into a DOM [Document](/zh-TW/docs/DOM/document). `DOMParser` is specified in [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/).
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
  - : Used for creating a [Web worker](/zh-TW/docs/DOM/Using_web_workers)
- {{domxref("Window.XPCNativeWrapper")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XPCSafeJSObjectWrapper")}}
  - : {{todo("NeedsContents")}}

## 相關介面

請參閱 {{domxref("Document_Object_Model", "DOM Reference")}}

## 參見

- [Working with windows in chrome code](/zh-TW/docs/Working_with_windows_in_chrome_code)

---
title: Window
slug: Web/API/Window
---
{{APIRef("DOM")}}

**`Window`** 인터페이스는 {{glossary("DOM")}} 문서를 담은 창을 나타냅니다. `document` 속성이 창에 불러온 [DOM 문서](/ko/docs/Web/API/Document)를 가리킵니다. 반대로, 주어진 문서의 창은 {{domxref("document.defaultView")}}를 사용해 접근할 수 있습니다.

JavaScript 코드에 노출된 전역 변수 `window`는 현재 스크립트가 작동 중인 창을 나타냅니다.

`Window` 인터페이스는 다양한 함수, 이름공간, 객체, 생성자가 머무는 장소입니다. 그 중엔 사용자 인터페이스로서의 창 개념과는 직접 관련되지 않은 것도 존재하며, 대신 전역적으로 접근할 수 있어야 하는 항목에 적합합니다. 많은 수의 항목이 [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference)와 [DOM 참고서](/ko/docs/Web/API/Document_Object_Model)에 문서화되어 있습니다.

탭 기능이 있는 브라우저에서는 각각의 탭을 각각의 `Window` 객체로 나타냅니다. 주어진 탭에서 동작 중인 JavaScript 코드의 전역 `window` 객체는 항상 자신의 탭을 나타냅니다. 그렇지만 {{domxref("Window.resizeTo", "resizeTo()")}}와 {{domxref("Window.innerHeight", "innerHeight")}}처럼, 일부 속성과 메서드는 탭이 아닌 창 전체에 적용됩니다. 보통 탭과 합리적으로는 연관 지을 수 없는 경우 창에 속합니다.

{{InheritanceDiagram}}

## 생성자

[DOM 인터페이스](/ko/docs/Web/API/Document_Object_Model#DOM_인터페이스)도 참고하세요.

- {{domxref("DOMParser")}}
  - : `DOMParser`는 문자열에 저장한 XML 또는 HTML 소스 코드를 DOM {{domxref("Document")}}로 구문 분석할 수 있습니다. `DOMParser`는 [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/) 명세의 일부입니다.
- {{domxref("Image")}}
  - : {{domxref("HTMLImageElement")}}를 생성할 때 사용합니다.
- {{domxref("Option")}}
  - : {{domxref("HTMLOptionElement")}}를 생성할 때 사용합니다.
- {{domxref("Window.StaticRange")}} {{experimental_inline}} {{readonlyinline}}
  - : {{domxref('StaticRange')}} 객체를 생성하는 {{domxref('StaticRange.StaticRange','StaticRange()')}} 생성자를 반환합니다.
- {{domxref("Worker")}}
  - : [Web Worker](/ko/docs/Web/API/Web_Workers_API/Using_web_workers) 생성에 사용합니다.
- {{domxref("Window.XMLSerializer")}}
  - : DOM 트리를 XML 또는 HTML 소스로 변환합니다.

## 속성

{{domxref("EventTarget")}}의 속성을 상속하고, {{domxref("WindowOrWorkerGlobalScope")}}와 {{domxref("WindowEventHandlers")}} 믹스인의 속성을 구현합니다.

- {{domxref("Window.closed")}} {{readOnlyInline}}
  - : 현재 창이 닫혔는지 나타냅니다.
- {{domxref("Window.console")}} {{readOnlyInline}}
  - : 브라우저 디버깅 콘솔에 접근할 수 있는 콘솔 객체를 반환합니다.
- {{domxref("Window.controllers")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : 현재 크롬 창의 XUL 컨트롤러 객체를 반환합니다.
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : 새로운 사용자 지정 요소를 등록하거나, 이전에 등록한 요소에 대한 정보를 얻을 수 있는 {{domxref("CustomElementRegistry")}} 객체를 반환합니다.
- {{domxref("Window.crypto")}} {{readOnlyInline}}
  - : 브라우저 암호화 객체를 반환합니다.
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : 현재 화면에서의 물리적 픽셀과 CSS 픽셀의 비율을 반환합니다.
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : 창이 포함하는 문서로의 참조를 반환합니다.
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
- {{domxref("Window.event")}} {{ReadOnlyInline}}
  - : Returns the **current event**, which is the event currently being handled by the JavaScript code's context, or `undefined` if no event is currently being handled. The {{domxref("Event")}} object passed directly to event handlers should be used instead whenever possible.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : 이 창을 삽입했을 때 사용한 요소를 반환합니다. 창이 문서 내에 삽입된 것이 아니면 {{jsxref("null")}}을 반환합니다.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : 현재 창의 하위 프레임을 배열로 반환합니다.
- {{domxref("Window.fullScreen")}}
  - : 현재 창을 전체 화면으로 보여주고 있는지 나타냅니다.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Returns a reference to the history object.
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.
- {{domxref("Window.isSecureContext")}} {{experimental_inline}} {{readOnlyInline}}
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
  - : Returns the [message manager](/ko/docs/The_message_manager) object for this window.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns the horizontal (X) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` in `nsIDOMWindowUtils` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Returns the vertical (Y) coordinate of the top-left corner of the window's viewport, in screen coordinates. This value is reported in CSS pixels. See `mozScreenPixelsPerCSSPixel` for a conversion factor to adapt to screen pixels if needed.
- {{domxref("Window.name")}}
  - : Gets/sets the name of the window.
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : Returns a reference to the navigator object.
- {{domxref("Window.opener")}}
  - : 현재 창을 열었던 다른 창의 참조를 반환합니다.
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : 브라우저 창 외곽 높이를 반환합니다.
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : 브라우저 창 외곽 너비를 반환합니다.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : An alias for {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{readOnlyInline}}
  - : An alias for {{domxref("window.scrollY")}}
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : Returns a reference to the parent of the current window or subframe.
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Returns a {{domxref("Performance")}} object, which includes the {{domxref("Performance.timing", "timing")}} and {{domxref("Performance.navigation", "navigation")}} attributes, each of which is an object providing [performance-related](/ko/docs/Navigation_timing) data. See also [Using Navigation Timing](/ko/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing) for additional information and examples.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : Returns the personalbar object, whose visibility can be toggled in the window.
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : Returns a reference to the screen object associated with the window.
- {{domxref("Window.screenX")}} and {{domxref("Window.screenLeft")}} {{readOnlyInline}}
  - : Both properties return the horizontal distance from the left border of the user's browser viewport to the left side of the screen.
- {{domxref("Window.screenY")}} and {{domxref("Window.screenTop")}} {{readOnlyInline}}
  - : Both properties return the vertical distance from the top border of the user's browser viewport to the top side of the screen.
- {{domxref("Window.scrollbars")}} {{readOnlyInline}}
  - : Returns the scrollbars object, whose visibility can be toggled in the window.
- {{domxref("Window.scrollMaxX")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to horizontally, that is the document width minus the viewport width.
- {{domxref("Window.scrollMaxY")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : The maximum offset that the window can be scrolled to vertically (i.e., the document height minus the viewport height).
- {{domxref("Window.scrollX")}} {{readOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled horizontally.
- {{domxref("Window.scrollY")}} {{readOnlyInline}}
  - : Returns the number of pixels that the document has already been scrolled vertically.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Returns an object reference to the window object itself.
- {{domxref("Window.sessionStorage")}}
  - : Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
- {{domxref("Window.sidebar")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Returns a reference to the window object of the sidebar.
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SpeechSynthesis")}} object, which is the entry point into using [Web Speech API](/ko/docs/Web/API/Web_Speech_API) speech synthesis functionality.
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
- `window[0]`, `window[1]`, etc.
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

<div class="hidden"><h3 id="Deprecated_properties">Deprecated properties</h3><dl><dt>{{domxref("Window.content")}} and <code>Window._content</code> {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}</dt><dd>Returns a reference to the content element in the current window. Since Firefox 57 (initially Nightly-only), both versions are only available from chrome (privileged) code, and not available to the web anymore.</dd><dt>{{domxref("Window.defaultStatus")}} {{deprecated_inline}}</dt><dd>Gets/sets the status bar text for the given window.</dd><dt>{{domxref("Window.directories")}} {{deprecated_inline}}</dt><dd>Synonym of {{domxref("window.personalbar")}}</dd><dt>{{domxref("Window.globalStorage")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Multiple storage objects that were used for storing data across multiple pages.</dd><dt>{{domxref("Window.mozAnimationStartTime")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>The time in milliseconds since epoch at which the current animation cycle began. Use {{domxref("Animation.startTime")}} instead.</dd><dt>{{domxref("Window.mozPaintCount")}} {{non-standard_inline}} {{deprecated_inline}}</dt><dd>Returns the number of times the current document has been rendered to the screen in this window. This can be used to compute rendering performance.</dd><dt>{{domxref("Window.orientation")}} {{readOnlyInline}} {{deprecated_inline}}</dt><dd>Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.</dd><dt>{{domxref("Window.pkcs11")}} {{deprecated_inline}}</dt><dd>Formerly provided access to install and remove PKCS11 modules.</dd><dt>{{domxref("Window.returnValue")}} {{deprecated_inline}}</dt><dd>The return value to be returned to the function that called {{domxref("window.showModalDialog()")}} to display the window as a modal dialog.</dd></dl></div>

## 메서드

{{domxref("EventTarget")}}의 메서드를 상속하고, {{domxref("WindowOrWorkerGlobalScope")}}와 {{domxref("WindowEventHandlers")}} 믹스인의 메서드를 구현합니다.

- {{domxref("Window.alert()")}}
  - : 경고 대화 상자를 표시합니다.
- {{domxref("Window.blur()")}}
  - : Sets focus away from the window.
- {{domxref("Window.cancelAnimationFrame()")}} {{experimental_inline}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestAnimationFrame")}}.
- {{domxref("Window.cancelIdleCallback()")}} {{experimental_inline}}
  - : Enables you to cancel a callback previously scheduled with {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.clearImmediate()")}}
  - : Cancels the repeated execution set using `setImmediate`.
- {{domxref("Window.close()")}}
  - : Closes the current window.
- {{domxref("Window.confirm()")}}
  - : Displays a dialog with a message that the user needs to respond to.
- {{domxref("Window.dispatchEvent()")}}
  - : Used to trigger an event.
- {{domxref("Window.dump()")}} {{Non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("Window.find()")}}
  - : Searches for a given string in a window.
- {{domxref("Window.focus()")}}
  - : Sets focus on the current window.
- {{domxref("Window.getComputedStyle()")}}
  - : Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_inline}}
  - : Gets default computed style for the specified element, ignoring author stylesheets.
- {{domxref("Window.getSelection()")}}
  - : Returns the selection object representing the selected item(s).
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
- {{domxref("Window.postMessage()")}}
  - : Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.
- {{domxref("Window.print()")}}
  - : Opens the Print Dialog to print the current document.
- {{domxref("Window.prompt()")}}
  - : Returns the text entered by the user in a prompt dialog.
- {{domxref("Window.requestAnimationFrame()")}}
  - : Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame.
- {{domxref("Window.requestIdleCallback()")}} {{experimental_inline}}
  - : Enables the scheduling of tasks during a browser's idle periods.
- {{domxref("Window.resizeBy()")}}
  - : Resizes the current window by a certain amount.
- {{domxref("Window.resizeTo()")}}
  - : Dynamically resizes window.
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

<div class="hidden"><h3 id="deprecated_methods">deprecated methods</h3><dl><dt>{{domxref("Window.back()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Moves back one in the window history. This method is deprecated; you should instead use {{domxref("History.back", "window.history.back()")}}.</dd><dt>{{domxref("Window.captureEvents()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Registers the window to capture all events of the specified type.</dd><dt>{{domxref("Window.forward()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Moves the window one document forward in the history. This method is deprecated; you should instead use {{domxref("History.forward", "window.history.forward()")}}.</dd><dt>{{domxref("Window.getAttention()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Flashes the application icon.</dd><dt>{{domxref("Window.home()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Returns the browser to the home page.</dd><dt>{{domxref("Window.openDialog()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Opens a new dialog window.</dd><dt>{{domxref("Window.releaseEvents()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Releases the window from trapping events of a specific type.</dd><dt>{{domxref("Window.showModalDialog()")}} {{Non-standard_inline}} {{deprecated_inline}}</dt><dd>Displays a modal dialog.</dd></dl></div>

## 이벤트 처리기

These are properties of the window object that can be set to establish event handlers for the various things that can happen in the window that might be of interest.

_This interface inherits event handlers from the {{domxref("EventTarget")}} interface and implements event handlers from {{domxref("WindowEventHandlers")}}._

- {{domxref("Window.onappinstalled")}}
  - : Called when the page is installed as a webapp. See {{event('appinstalled')}} event.
- {{domxref("Window.onbeforeinstallprompt")}}
  - : An event handler property dispatched before a user is prompted to save a web site to a home screen on mobile.
- {{domxref("Window.ondevicelight")}}
  - : An event handler property for any ambient light levels changes
- {{domxref("Window.ondevicemotion")}}
  - : Called if accelerometer detects a change (For mobile devices)
- {{domxref("Window.ondeviceorientation")}}
  - : Called when the orientation is changed (For mobile devices)
- {{domxref("Window.ondeviceorientationabsolute")}} {{non-standard_inline}}
  - : An event handler property for any device orientation changes.
- {{domxref("Window.ondeviceproximity")}}
  - : An event handler property for device proximity event
- {{domxref("Window.ongamepadconnected")}}
  - : Represents an event handler that will run when a gamepad is connected (when the {{event('gamepadconnected')}} event fires).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Represents an event handler that will run when a gamepad is disconnected (when the {{event('gamepaddisconnected')}} event fires).
- {{domxref("Window.onmozbeforepaint")}}
  - : An event handler property for the `MozBeforePaint` event, which is sent before repainting the window if the event has been requested by a call to the {{domxref("Window.mozRequestAnimationFrame()")}} method.
- {{domxref("Window.onpaint")}}
  - : An event handler property for paint events on the window.
- {{domxref("Window.onrejectionhandled")}} {{experimental_inline}}
  - : An event handler for handled {{jsxref("Promise")}} rejection events.
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

### Event handlers implemented from elsewhere

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Called when the loading of a resource has been aborted, such as by a user canceling the load while it is still in progress
- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Called when the print dialog box is closed. See {{event("afterprint")}} event.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Called when the print dialog box is opened. See {{event("beforeprint")}} event.
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
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Called when a resource fails to load OR when an error occurs at runtime. See {{event("error")}} event.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Called after the window receives or regains focus. See {{event("focus")}} events.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : An event handler property for {{event('hashchange')}} events on the window; called when the part of the URL after the hash mark ("#") changes.
- {{domxref("GlobalEventHandlers.oninput")}}
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
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Called when network connection is lost. See {{event("offline")}} event.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Called when network connection is established. See {{event("online")}} event.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Called when the user navigates away from the page, before the onunload event. See {{event("pagehide")}} event.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Called after all resources and the DOM are fully loaded. See {{event("pageshow")}} event.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Called when a back button is pressed.
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

## 이벤트

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("Window/error_event", "error")}}
  - : Fired when when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
    Also available via the {{domxref("GlobalEventHandlers/onerror", "onerror")}} property.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : Fired at the global scope object when the user's preferred language changes.
    Also available via the [`onlanguagechange`](/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange) property.
- {{domxref("Window/orientationchange_event", "orientationchange")}}
  - : Fired when the orientation of the device has changed.
    Also available via the [`onorientationchange`](/en-US/docs/Web/API/Window/onorientationchange) property.
- {{domxref("Window/devicemotion_event", "devicemotion")}}
  - : Fired at a regular interval, indicating the amount of physical force of acceleration the device is receiving and the rate of rotation, if available.
- {{domxref("Window/deviceorientation_event", "deviceorientation")}}
  - : Fired when fresh data is available from the magnetometer orientation sensor about the current orientation of the device as compared to the Earth coordinate frame.
- {{domxref("Document/defaultView/resize_event", "resize")}}
  - : Fired when the window has been resized.
    Also available via the [`onresize`](/en-US/docs/Web/API/GlobalEventHandlers/onresize) property.
- {{domxref("Document/defaultView/storage_event", "storage")}}
  - : Fired when a storage area (`localStorage` or `sessionStorage`) has been modified in the context of another document.
    Also available via the [`onstorage`](/en-US/docs/Web/API/WindowEventHandlers/onstorage) property.

### Animation events

- {{domxref("Window/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
    Also available via the [`onanimationcancel`](/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel) property.
- {{domxref("Window/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
    Also available via the [`onanimationend`](/en-US/docs/Web/API/GlobalEventHandlers/onanimationend) property.
- {{domxref("Window/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
    Also available via the [`onanimationiteration`](/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration) property.
- {{domxref("Window/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.
    Also available via the [`onanimationstart`](/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart) property.

### Clipboard events

- {{domxref("Window/clipboardchange_event", "clipboardchange")}}
  - : Fired when the system clipboard content changes.
- {{domxref("Window/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the [`oncopy`](/ko/docs/Web/API/HTMLElement/oncopy) property.
- {{domxref("Window/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the [`oncut`](/ko/docs/Web/API/HTMLElement/oncut) property.
- {{domxref("Window/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the [`onpaste`](/ko/docs/Web/API/HTMLElement/onpaste) property.

### Connection events

- {{domxref("Window/offline_event", "offline")}}
  - : Fired when the browser has lost access to the network and the value of `navigator.onLine` has switched to `false`.
    Also available via the {{domxref("WindowEventHandlers.onoffline", "onoffline")}} property.
- {{domxref("Window/online_event", "online ")}}
  - : Fired when the browser has gained access to the network and the value of `navigator.onLine` has switched to `true`.
    Also available via the {{domxref("WindowEventHandlers.ononline", "ononline")}} property.

### Focus events

- {{domxref("Window/blur_event", "blur")}}
  - : Fired when an element has lost focus.
    Also available via the [`onblur`](/ko/docs/Web/API/GlobalEventHandlers/onblur) property.
- {{domxref("Window/focus_event", "focus")}}
  - : Fired when an element has gained focus.
    Also available via the [`onfocus`](/ko/docs/Web/API/GlobalEventHandlers/onfocus) property

### Gamepad events

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
    Also available via the [`ongamepadconnected`](/en-US/docs/Web/API/Window/ongamepadconnected) property.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Fired when the browser detects that a gamepad has been disconnected.
    Also available via the [`ongamepaddisconnected`](/en-US/docs/Web/API/Window/ongamepaddisconnected) property

### History events

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
    Also available via the [`onhashchange`](/en-US/docs/Web/API/WindowEventHandlers/onhashchange) property.
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : Sent when the browser hides the current document while in the process of switching to displaying in its place a different document from the session's history. This happens, for example, when the user clicks the Back button or when they click the Forward button to move ahead in session history.
    Also available through the [`onpagehide`](/en-US/docs/Mozilla/Tech/XUL/Attribute/onpagehide) event handler property.
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : Sent when the browser makes the document visible due to navigation tasks, including not only when the page is first loaded, but also situations such as the user navigating back to the page after having navigated to another within the same tab.
    Also available using the [`onpageshow`](/en-US/docs/Mozilla/Tech/XUL/Attribute/onpageshow) event handler property.
- {{domxref("Window/popstate_event", "popstate")}}
  - : Fired when the active history entry changes.
    Also available using the [`onpopstate`](/en-US/docs/Web/API/WindowEventHandlers/onpopstate) event handler property.

### Load & unload events

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : Fired when the window, the document and its resources are about to be unloaded.
    Also available via the {{domxref("WindowEventHandlers/onbeforeunload", "onbeforeunload")}} property.
- {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
- {{domxref("Window/load_event", "load")}}
  - : Fired when the whole page has loaded, including all dependent resources such as stylesheets images.
    Also available via the {{domxref("GlobalEventHandlers/onload", "onload")}} property.
- {{domxref("Window/unload_event", "unload")}}
  - : Fired when the document or a child resource is being unloaded.
    Also available via the {{domxref("WindowEventHandlers/onunload", "onunload")}} property.

### Manifest events

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : Fired when the browser has successfully installed a page as an application.
    Also available via the {{domxref("Window/onappinstalled", "onappinstalled")}} property.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Fired when a user is about to be prompted to install a web application.
    Also available via the {{domxref("Window/onbeforeinstallprompt", "onbeforeinstallprompt")}} property.

### Messaging events

- {{domxref("Window/message_event", "message")}}
  - : Fired when the window receives a message, for example from a call to {{domxref("Window/postMessage", "Window.postMessage()")}} from another browsing context.
    Also available via the {{domxref("WindowEventHandlers/onmessage", "onmessage")}} property.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : Fired when a `Window` object receives a message that can't be deserialized.
    Also available via the {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}} property.

### Print events

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : Fired after the associated document has started printing or the print preview has been closed.
    Also available via the {{domxref("WindowEventHandlers/onafterprint", "onafterprint")}} property.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : Fired when the associated document is about to be printed or previewed for printing.
    Also available via the {{domxref("WindowEventHandlers/onbeforeprint", "onbeforeprint")}} property.

### Promise rejection events

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Sent every time a JavaScript {{jsxref("Promise")}} is rejected, regardless of whether or not there is a handler in place to catch the rejection.
    Also available through the [`onrejectionhandled`](/en-US/docs/Web/API/WindowEventHandlers/onrejectionhandled) event handler property.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Sent when a JavaScript {{jsxref("Promise")}} is rejected but there is no handler in place to catch the rejection.
    Also available using the [`onunhandledrejection`](/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection) event handler property.

### Transition events

- {{domxref("Window/transitioncancel_event", "transitioncancel")}}
  - : Fired when a [CSS transition](/ko/docs/CSS/Using_CSS_transitions) is canceled.
    Also available via the [`ontransitioncancel`](/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel) property.
- {{domxref("Window/transitionend_event", "transitionend")}}
  - : Fired when a [CSS transition](/ko/docs/CSS/Using_CSS_transitions) has completed.
    Also available via the [`ontransitionend`](/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend) property.
- {{domxref("Window/transitionrun_event", "transitionrun")}}
  - : Fired when a [CSS transition](/ko/docs/CSS/Using_CSS_transitions) is first created.
    Also available via the [`ontransitionrun`](/en-US/docs/Web/API/GlobalEventHandlers/ontransitionrun) property.
- {{domxref("Window/transitionstart_event", "transitionstart")}}
  - : Fired when a [CSS transition](/ko/docs/CSS/Using_CSS_transitions) has actually started.
    Also available via the [`ontransitionstart`](/en-US/docs/Web/API/GlobalEventHandlers/ontransitionstart) property.

### WebVR events

- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}}
  - : Fired when a VR display becomes available to be presented to, for example if an HMD has been moved to bring it out of standby, or woken up by being put on.
    Also available via the {{domxref("Window/onvrdisplayactivate", "onvrdisplayactivate")}} property.
- {{domxref("Window/vrdisplayblur_event", "vrdisplayblur")}}
  - : Fired when presentation to a VR display has been paused for some reason by the browser, OS, or VR hardware.
    Also available via the {{domxref("Window/onvrdisplayblur", "onvrdisplayblur")}} property.
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}}
  - : Fired when a compatible VR display is connected to the computer.
    Also available via the {{domxref("Window/onvrdisplayconnect", "onvrdisplayconnect")}} property.
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}}
  - : Fired when a VR display can no longer be presented to, for example if an HMD has gone into standby or sleep mode due to a period of inactivity.
    Also available via the {{domxref("Window/onvrdisplaydeactivate", "onvrdisplaydeactivate")}} property.
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}}
  - : Fired when a compatible VR display is disconnected from the computer.
    Also available via the {{domxref("Window/onvrdisplaydisconnect", "onvrdisplaydisconnect")}} property.
- {{domxref("Window/vrdisplayfocus_event", "vrdisplayfocus")}}
  - : Fired when presentation to a VR display has resumed after being blurred.
    Also available via the {{domxref("Window/onvrdisplayfocus", "onvrdisplayfocus")}} property.
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}}
  - : Fired when the presenting state of a VR display changes — i.e. goes from presenting to not presenting, or vice versa.
    Also available via the {{domxref("Window/onvrdisplaypresentchange", "onvrdisplaypresentchange")}} property.
- {{domxref("Window/vrdisplaypointerrestricted_event", "vrdisplaypointerrestricted")}}
  - : Fired when the VR display's pointer input is restricted to consumption via a [pointerlocked element](/ko/docs/Web/API/Pointer_Lock_API).
    Also available via the {{domxref("Window/onvrdisplaypointerrestricted", "onvrdisplaypointerrestricted")}} property.
- {{domxref("Window/vrdisplaypointerunrestricted_event", "vrdisplaypointerunrestricted")}}
  - : Fired when the VR display's pointer input is no longer restricted to consumption via a [pointerlocked element](/ko/docs/Web/API/Pointer_Lock_API).
    Also available via the {{domxref("Window/onvrdisplaypointerunrestricted", "onvrdisplaypointerunrestricted")}} property.

## 인터페이스

[DOM 인터페이스](/ko/docs/Web/API/Document_Object_Model#DOM_인터페이스)를 참고하세요.

## 브라우저 호환성

{{Compat}}

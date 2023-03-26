---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: c13686d73ba440263243a79a3241d96a23440324
---

{{APIRef("DOM")}}

**`Window`** 인터페이스는 {{glossary("DOM")}} 문서를 담은 창을 나타냅니다. `document` 속성이 창에 불러온 [DOM 문서](/ko/docs/Web/API/Document)를 가리킵니다.

주어진 문서의 창은 {{domxref("document.defaultView")}}를 사용해 접근할 수 있습니다.

현재 스크립트가 작동 중인 창을 나타내는 전역 변수 `window`를 JavaScript 코드에서 접근할 수 있습니다.

`Window` 인터페이스는 다양한 함수, 이름공간, 객체, 생성자가 머무는 장소입니다. 그 중엔 사용자 인터페이스로서의 창 개념과는 직접 관련되지 않은 것도 존재하며, 대신 전역적으로 접근할 수 있어야 하는 항목에 적합합니다. 많은 수의 항목이 [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference)와 [DOM 참고서](/ko/docs/Web/API/Document_Object_Model)에 문서화되어 있습니다.

탭 기능이 있는 브라우저에서는 각각의 탭을 각각의 `Window` 객체로 나타냅니다. 주어진 탭에서 동작 중인 JavaScript 코드의 전역 `window` 객체는 항상 자신의 탭을 나타냅니다. 그렇지만 {{domxref("Window.resizeTo", "resizeTo()")}}와 {{domxref("Window.innerHeight", "innerHeight")}}처럼, 일부 속성과 메서드는 탭이 아니라 창에 적용됩니다. 보통 탭과 합리적으로는 연관 지을 수 없는 경우 창에 속합니다.

{{InheritanceDiagram}}

## 생성자

[DOM 인터페이스](/ko/docs/Web/API/Document_Object_Model)도 참고하세요.

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

## 인스턴스 속성

{{domxref("EventTarget")}} 인터페이스의 속성을 상속합니다.

- {{domxref("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : {{domxref("Window.navigator")}}의 별칭입니다.
- {{domxref("Window.closed")}} {{readOnlyInline}}
  - : 현재 창이 닫혔는지 나타냅니다.
- {{domxref("Window.console")}} {{readOnlyInline}}
  - : 브라우저 디버깅 콘솔에 접근할 수 있는 콘솔 객체를 반환합니다.
- {{domxref("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : 현재 문서가 자격 증명 없는 {{htmlelement("iframe")}} 내에서 불러와졌는지 나타내는 불리언입니다. [IFrame credentialless](/ko/docs/Web/Security/IFrame_credentialless)에서 자세한 정보를 확인하세요.
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : 새로운 [사용자 정의 요소](/ko/docs/Web/Web_Components/Using_custom_elements)를 등록하거나, 이전에 등록한 요소에 대한 정보를 얻을 수 있는 {{domxref("CustomElementRegistry")}} 객체를 반환합니다.
- {{domxref("crypto_property", "Window.crypto")}} {{readOnlyInline}}
  - : 브라우저 암호화 객체를 반환합니다.
- {{domxref("Window.devicePixelRatio")}} {{ReadOnlyInline}}
  - : 현재 화면에서의 물리적 픽셀과 CSS 픽셀의 비율을 반환합니다.
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : 창이 포함하는 문서로의 참조를 반환합니다.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : 이 창을 삽입했을 때 사용한 요소를 반환합니다. 창이 문서 내에 삽입된 것이 아니면 {{jsxref("null")}}을 반환합니다.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : 현재 창의 하위 프레임을 배열로 반환합니다.
- {{domxref("Window.fullScreen")}} {{Non-standard_Inline}}
  - : 현재 창을 전체 화면으로 보여주고 있는지 나타냅니다.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : {{domxref("History")}} 객체 참조를 반환합니다.
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : 브라우저 창의 콘텐츠 영역 높이를 반환합니다. 수평 스크롤바가 존재하면 그 높이도 포함합니다.
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : 브라우저 창의 콘텐츠 영역 너비를 반환합니다. 수직 스크롤바가 존재하면 그 높이도 포함합니다.
- {{domxref("Window.isSecureContext")}} {{experimental_inline}} {{readOnlyInline}}
  - : 현재 컨텍스트에서 보안 컨텍스트를 요구하는 기능을 사용할 수 있는지 나타냅니다.
- {{domxref("Window.launchQueue")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : [PWA](/ko/docs/Web/Progressive_web_apps)에서, [`launch_handler`](/ko/docs/Web/Manifest/launch_handler) `client_mode`의 값이 `focus-existing`, `navigate-new`, `navigate-existing` 중 하나라면, `launchQueue`는 {{domxref("LaunchQueue")}} 클래스로의 접근을 제공합니다. `LaunchQueue`를 활용하면 PWA의 실행 탐색 처리를 직접 구현할 수 있습니다.
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : 창 내의 프레임 수를 반환합니다. {{domxref("window.frames")}}도 확인하세요.
- {{domxref("Window.location")}}
  - : 창의 위치, 즉 현재 URL을 가져오거나 설정합니다.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : `locationbar` 객체를 반환합니다.
- {{domxref("Window.localStorage")}} {{readOnlyInline}}
  - : 현재 출처에서만 접근하여 데이터를 저장할 수 있는 로컬 저장소 객체를 반환합니다.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : `menubar` 객체를 반환합니다.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : 창의 뷰포트 왼쪽 위 꼭짓점 X축 좌표를 화면 좌표계 기준으로 반환합니다. 이 값은 CSS 픽셀 단위입니다. 화면 픽셀로 변환이 필요하면 `nsIDOMWindowUtils`의 `mozScreenPixelsPerCSSPixel`에서 변환비를 가져올 수 있습니다.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : 창의 뷰포트 왼쪽 위 꼭짓점 Y축 좌표를 화면 좌표계 기준으로 반환합니다. 이 값은 CSS 픽셀 단위입니다. 화면 픽셀로 변환이 필요하면 `nsIDOMWindowUtils`의 `mozScreenPixelsPerCSSPixel`에서 변환비를 가져올 수 있습니다.
- {{domxref("Window.name")}}
  - : 창의 이름을 가져오거나 설정합니다.
- {{domxref("Window.navigation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : `window`의 {{domxref("Navigation")}} 객체를 반환합니다. [Navigation API](/ko/docs/Web/API/Navigation_API)의 진입점입니다.
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : {{domxref("Navigator")}} 객체의 참조를 반환합니다.
- {{domxref("Window.opener")}}
  - : 현재 창을 연 창의 참조를 반환합니다.
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : 브라우저 창 외곽 높이를 반환합니다.
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : 브라우저 창 외곽 너비를 반환합니다.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : {{domxref("window.scrollX")}}의 별칭입니다.
- {{domxref("Window.scrollY","Window.pageYOffset")}} {{readOnlyInline}}
  - : {{domxref("window.scrollY")}}의 별칭입니다.
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : 현재 창 또는 하위 프레임의 부모 참조를 반환합니다.
- {{domxref("performance_property", "Window.performance")}} {{ReadOnlyInline}}
  - : {{domxref("Performance")}} 객체를 반환합니다. 이 객체의 {{domxref("Performance.timing", "timing")}}, {{domxref("Performance.navigation", "navigation")}} 특성 등은 각각 [성능 관련 데이터](/ko/docs/Web/API/Navigation_timing_API)를 제공하는 객체입니다. [탐색 타이밍 사용하기](/ko/docs/Web/API/Navigation_timing_API/Using_Navigation_Timing)에서 추가 정보와 예제를 확인하세요.
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : `personalbar` 객체를 반환합니다.
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : 이 창에 연관된 화면 객체를 반환합니다.
- {{domxref("Window.screenX")}}, {{domxref("Window.screenLeft")}} {{readOnlyInline}}
  - : 두 속성 모두 사용자의 브라우저 뷰포트의 왼쪽 테두리와 화면 왼쪽 모서리의 거리를 반환합니다.
- {{domxref("Window.screenY")}}, {{domxref("Window.screenTop")}} {{readOnlyInline}}
  - : 두 속성 모두 사용자의 브라우저 뷰포트의 위쪽 테두리와 화면 위쪽 모서리의 거리를 반환합니다.
- {{domxref("Window.scrollbars")}} {{readOnlyInline}}
  - : `scrollbars` 객체를 반환합니다.
- {{domxref("Window.scrollMaxX")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 창을 수펑으로 스크롤할 수 있는 최대 거리, 즉 문서 너비에서 뷰포트 너비를 뺀 값입니다.
- {{domxref("Window.scrollMaxY")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : 창을 수직으로 스크롤할 수 있는 최대 거리, 즉 문서 높이에서 뷰포트 높이를 뺀 값입니다.
- {{domxref("Window.scrollX")}} {{readOnlyInline}}
  - : 문서가 수평으로 스크롤된 픽셀 수를 반환합니다.
- {{domxref("Window.scrollY")}} {{readOnlyInline}}
  - : 문서가 수직으로 스크롤된 픽셀 수를 반환합니다.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : 창 객체 스스로를 가리키는 참조를 반환합니다.
- {{domxref("Window.sessionStorage")}}
  - : 현재 출처에서만 접근하여 데이터를 저장할 수 있는 세션 저장소 객체를 반환합니다.
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : 음성 합성을 위한 {{domxref("SpeechSynthesis")}} 객체를 반환합니다. [Web Speech API](/ko/docs/Web/API/Web_Speech_API)의 진입점입니다.
- {{domxref("Window.statusbar")}} {{readOnlyInline}}
  - : `statusbar` 객체를 반환합니다.
- {{domxref("Window.toolbar")}} {{readOnlyInline}}
  - : `toolbar` 객체를 반환합니다.
- {{domxref("Window.top")}} {{readOnlyInline}}
  - : 창 계층 구조에서 최상위인 창을 반환합니다.
- {{domxref("Window.visualViewport")}} {{readOnlyInline}}
  - : 창의 시각적 뷰포트를 나타내는 {{domxref("VisualViewport")}} 객체를 반환합니다.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : 현재 창으로의 참조를 반환합니다.
- `window[0]`, `window[1]`, ...
  - : 프레임의 `window` 객체 참조를 반환합니다. 자세한 내용은 {{domxref("Window.frames")}}에서 확인하세요.

### Properties implemented from elsewhere

- {{domxref("caches")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("indexedDB")}} {{ReadOnlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("origin")}} {{ReadOnlyInline}}
  - : Returns the global object's origin, serialized as a string.
- {{domxref("Window.scheduler")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Scheduler")}} object associated with the current context.
    This is the entry point for using the [Prioritized Task Scheduling API](/ko/docs/Web/API/Prioritized_Task_Scheduling_API).

## 인스턴스 메서드

{{domxref("EventTarget")}}의 메서드를 상속합니다.

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

## 이벤트

Listen to these events using [`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("Window/error_event", "error")}}
  - : Fired when a resource failed to load, or can't be used. For example, if a script has an execution error or an image can't be found or is invalid.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : Fired at the global scope object when the user's preferred language changes.
- {{domxref("Window.devicemotion_event", "devicemotion")}}
  - : Fired at a regular interval, indicating the amount of physical force of acceleration the device is receiving and the rate of rotation, if available.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
  - : Fired when fresh data is available from the magnetometer orientation sensor about the current orientation of the device as compared to the Earth coordinate frame.
- {{domxref("Window/resize_event", "resize")}}
  - : Fired when the window has been resized.
- {{domxref("Window/storage_event", "storage")}}
  - : Fired when a storage area (`localStorage` or `sessionStorage`) has been modified in the context of another document.

### Animation events

- {{domxref("Window/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
- {{domxref("Window/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
- {{domxref("Window/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
- {{domxref("Window/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.

### Clipboard events

- {{domxref("Window/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncopy", "oncopy")}} property.
- {{domxref("Window/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncut", "oncut")}} property.
- {{domxref("Window/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/onpaste", "onpaste")}} property.

### Connection events

- {{domxref("Window/offline_event", "offline")}}
  - : Fired when the browser has lost access to the network and the value of `navigator.onLine` has switched to `false`.
- {{domxref("Window/online_event", "online")}}
  - : Fired when the browser has gained access to the network and the value of `navigator.onLine` has switched to `true`.

### Focus events

- {{domxref("Window/blur_event", "blur")}}
  - : Fired when an element has lost focus.
- {{domxref("Window/focus_event", "focus")}}
  - : Fired when an element has gained focus.

### Gamepad events

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : Fired when the browser detects that a gamepad has been connected or the first time a button/axis of the gamepad is used.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : Fired when the browser detects that a gamepad has been disconnected.

### History events

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : Fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the `#` symbol).
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : Sent when the browser hides the current document while in the process of switching to displaying in its place a different document from the session's history. This happens, for example, when the user clicks the Back button or when they click the Forward button to move ahead in session history.
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : Sent when the browser makes the document visible due to navigation tasks, including not only when the page is first loaded, but also situations such as the user navigating back to the page after having navigated to another within the same tab.
- {{domxref("Window/popstate_event", "popstate")}}
  - : Fired when the active history entry changes.

### Load & unload events

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : Fired when the window, the document and its resources are about to be unloaded.
- {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
- {{domxref("Window/load_event", "load")}}
  - : Fired when the whole page has loaded, including all dependent resources such as stylesheets images.
- {{domxref("Window/unload_event", "unload")}}
  - : Fired when the document or a child resource is being unloaded.

### Manifest events

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : Fired when the browser has successfully installed a page as an application.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : Fired when a user is about to be prompted to install a web application.

### Messaging events

- {{domxref("Window/message_event", "message")}}
  - : Fired when the window receives a message, for example from a call to {{domxref("Window/postMessage", "Window.postMessage()")}} from another browsing context.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : Fired when a `Window` object receives a message that can't be deserialized.

### Print events

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : Fired after the associated document has started printing or the print preview has been closed.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : Fired when the associated document is about to be printed or previewed for printing.

### Promise rejection events

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : Sent every time a JavaScript {{jsxref("Promise")}} is rejected, regardless of whether or not there is a handler in place to catch the rejection.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : Sent when a JavaScript {{jsxref("Promise")}} is rejected but there is no handler in place to catch the rejection.

### Transition events

- {{domxref("Window/transitioncancel_event", "transitioncancel")}}
  - : Fired when a [CSS transition](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is canceled.
- {{domxref("Window/transitionend_event", "transitionend")}}
  - : Fired when a [CSS transition](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has completed.
- {{domxref("Window/transitionrun_event", "transitionrun")}}
  - : Fired when a [CSS transition](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) is first created.
- {{domxref("Window/transitionstart_event", "transitionstart")}}
  - : Fired when a [CSS transition](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) has actually started.

## 인터페이스

[DOM 인터페이스](/ko/docs/Web/API/Document_Object_Model)를 참고하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

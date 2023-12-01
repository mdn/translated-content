---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("DOM")}}

**`Window`** 인터페이스는 {{glossary("DOM")}} 문서를 담은 창을 나타냅니다. `document` 속성이 창에 불러온 [DOM 문서](/ko/docs/Web/API/Document)를 가리킵니다.

주어진 문서의 창은 {{domxref("document.defaultView")}}를 사용해 접근할 수 있습니다.

현재 스크립트가 작동 중인 창을 나타내는 전역 변수 `window`를 JavaScript 코드에서 접근할 수 있습니다.

`Window` 인터페이스는 다양한 함수, 이름공간, 객체, 생성자가 머무는 장소입니다. 그 중엔 사용자 인터페이스로서의 창 개념과는 직접 관련되지 않은 것도 존재하며, 대신 전역적으로 접근할 수 있어야 하는 항목에 적합합니다. 많은 수의 항목이 [JavaScript 참고서](/ko/docs/Web/JavaScript/Reference)와 [DOM 참고서](/ko/docs/Web/API/Document_Object_Model)에 문서화되어 있습니다.

탭 기능이 있는 브라우저에서는 각각의 탭을 각각의 `Window` 객체로 나타냅니다. 주어진 탭에서 동작 중인 JavaScript 코드의 전역 `window` 객체는 항상 자신의 탭을 나타냅니다. 그렇지만 {{domxref("Window.resizeTo", "resizeTo()")}}와 {{domxref("Window.innerHeight", "innerHeight")}}처럼, 일부 속성과 메서드는 탭이 아니라 창에 적용됩니다. 보통 탭과 합리적으로는 연관 지을 수 없는 경우 창에 속합니다.

{{InheritanceDiagram}}

## 인스턴스 속성

{{domxref("EventTarget")}} 인터페이스의 속성을 상속합니다.

- {{domxref("caches", "Window.caches")}} {{ReadOnlyInline}}
  - : 현재 컨텍스트와 연관된 {{domxref("CacheStorage")}} 객체를 반환합니다. `CacheStorage`는 오프라인에서의 사용을 위한 자산 저장과, 요청에 대한 사용자 정의 응답을 생성할 때 사용할 수 있습니다.
- {{domxref("Window.navigator", "Window.clientInformation")}} {{ReadOnlyInline}}
  - : {{domxref("Window.navigator")}}의 별칭입니다.
- {{domxref("Window.closed")}} {{readOnlyInline}}
  - : 현재 창이 닫혔는지 나타냅니다.
- {{domxref("Window.console")}} {{readOnlyInline}}
  - : 브라우저 디버깅 콘솔에 접근할 수 있는 콘솔 객체를 반환합니다.
- {{domxref("Window.credentialless")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : 현재 문서가 자격 증명 없는 {{htmlelement("iframe")}} 내에서 불러와졌는지 나타내는 불리언입니다. [IFrame credentialless](/ko/docs/Web/Security/IFrame_credentialless)에서 자세한 정보를 확인하세요.
- {{domxref("crypto_property", "Window.crypto")}} {{readOnlyInline}}
  - : 브라우저 암호화 객체를 반환합니다.
- {{domxref("Window.customElements")}} {{ReadOnlyInline}}
  - : 새로운 [사용자 정의 요소](/ko/docs/Web/Web_Components/Using_custom_elements)를 등록하거나 이전에 등록한 요소에 대한 정보를 얻을 수 있는, {{domxref("CustomElementRegistry")}} 객체의 참조를 반환합니다.
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
- {{domxref("indexedDB", "Window.indexedDB")}} {{ReadOnlyInline}}
  - : 인덱싱된 데이터베이스로의 비동기적 접근 기능을 제공하는 {{domxref("IDBFactory")}} 객체를 반환합니다.
- {{domxref("Window.innerHeight")}} {{readOnlyInline}}
  - : 브라우저 창의 콘텐츠 영역 높이를 반환합니다. 수평 스크롤바가 존재하면 그 높이도 포함합니다.
- {{domxref("Window.innerWidth")}} {{readOnlyInline}}
  - : 브라우저 창의 콘텐츠 영역 너비를 반환합니다. 수직 스크롤바가 존재하면 그 높이도 포함합니다.
- {{domxref("isSecureContext", "Window.isSecureContext")}} {{readOnlyInline}}
  - : 현재 컨텍스트가 안전한지 (`true`) 안전하지 않은지 (`false`) 나타내는 불리언을 반환합니다.
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
- {{domxref("origin", "Window.origin")}} {{ReadOnlyInline}}
  - : 전역 객체의 출처를 문자열로 직렬화해 반환합니다.
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
- {{domxref("Window.scheduler")}} {{ReadOnlyInline}}
  - : 현재 컨텍스트와 연관된 {{domxref("Scheduler")}} 객체를 반환합니다. [Prioritized Task Scheduling API](/ko/docs/Web/API/Prioritized_Task_Scheduling_API)의 진입점입니다.
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

### Deprecated properties

- {{domxref("Window.content")}} and `Window._content` {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Returns a reference to the content element in the current window. Since Firefox 57 (initially Nightly-only), both versions are only available from chrome (privileged) code, and not available to the web anymore.
- {{domxref("Window.defaultStatus")}} {{Deprecated_Inline}}
  - : Gets/sets the status bar text for the given window.
- {{domxref("Window.event")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Returns the **current event**, which is the event currently being handled by the JavaScript code's context, or `undefined` if no event is currently being handled. The {{domxref("Event")}} object passed directly to event handlers should be used instead whenever possible.
- {{domxref("Window.external")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Returns an object with functions for adding external search providers to the browser.
- {{domxref("Window.orientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.
- {{domxref("Window.returnValue")}} {{Deprecated_Inline}}
  - : The return value to be returned to the function that called {{domxref("window.showModalDialog()")}} to display the window as a modal dialog.
- {{domxref("Window.sidebar")}} {{Deprecated_Inline}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Returns a reference to the window object of the sidebar
- {{domxref("Window.status")}} {{Deprecated_Inline}}
  - : Gets/sets the text in the statusbar at the bottom of the browser.

## 인스턴스 메서드

{{domxref("EventTarget")}}의 메서드를 상속합니다.

- {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}}
  - : 창의 특정 이벤트에 대한 처리기를 등록합니다.
- {{domxref("atob", "Window.atob()")}}
  - : Base64로 인코딩된 문자열 데이터를 디코딩합니다.
- {{domxref("Window.alert()")}}
  - : 경고 대화 상자를 표시합니다.
- {{domxref("Window.blur()")}}
  - : 창의 포커스를 해제합니다.
- {{domxref("btoa", "Window.btoa()")}}
  - : 이진 데이터 문자열을 Base64로 인코딩한 ASCII 문자열을 생성합니다.
- {{domxref("Window.cancelAnimationFrame()")}}
  - : {{domxref("Window.requestAnimationFrame")}}으로 예약한 콜백을 취소합니다.
- {{domxref("Window.cancelIdleCallback()")}}
  - : {{domxref("Window.requestIdleCallback")}}으로 예약한 콜백을 취소합니다.
- {{domxref("Window.clearImmediate()")}}
  - : `setImmediate`로 등록한 반복 실행을 해제합니다.
- {{domxref("clearInterval", "Window.clearInterval()")}}
  - : {{domxref("setInterval()")}}로 등록한 반복 실행을 해제합니다.
- {{domxref("clearTimeout()", "Window.clearTimeout()")}}
  - : {{domxref("setTimeout()")}}으로 등록한 지연 실행을 해제합니다.
- {{domxref("Window.close()")}}
  - : 현재 창을 닫습니다.
- {{domxref("Window.confirm()")}}
  - : 사용자가 응답해야 하는 대화 상자를 표시합니다.
- {{domxref("createImageBitmap", "Window.createImageBitmap()")}}
  - : 다양한 종류의 이미지를 받고, {{domxref("ImageBitmap")}}으로 이행하는 {{jsxref("Promise")}}를 반환합니다. 선택 사항으로, 원본 이미지를 _(sx, sy)_ 의 원점에서 너비 sw, 높이 sh만큼 자를 수 있습니다.
- {{domxref("EventTarget.dispatchEvent", "Window.dispatchEvent()")}}
  - : 이벤트를 발동합니다.
- {{domxref("Window.dump()")}} {{Non-standard_Inline}}
  - : 콘솔에 메시지를 기록합니다.
- {{domxref("fetch", "Window.fetch()")}}
  - : 네트워크에서 리소스를 가져오는 절차를 시작합니다.
- {{domxref("Window.find()")}} {{Non-standard_Inline}}
  - : 주어진 문자열을 창 내에서 탐색합니다.
- {{domxref("Window.focus()")}}
  - : 현재 창으로 포커스를 이동합니다.
- {{domxref("Window.getComputedStyle()")}}
  - : 지정한 요소의 계산된 스타일, 즉 해당 요소에 적용된 모든 CSS 속성 계산 값들을 반환합니다.
- {{domxref("Window.getDefaultComputedStyle()")}} {{Non-standard_Inline}}
  - : 지정한 요소의 계산된 기본 스타일을 가져옵니다. 저작자 스타일시트는 무시합니다.
- {{domxref("Window.getSelection()")}}
  - : 선택된 항목(들)을 나타내는 객체를 반환합니다.
- {{domxref("Window.matchMedia()")}}
  - : 지정한 미디어 쿼리 문자열을 나타내는 {{domxref("MediaQueryList")}} 객체를 반환합니다.
- {{domxref("Window.moveBy()")}}
  - : 현재 창을 지정한 거리만큼 이동합니다.
- {{domxref("Window.moveTo()")}}
  - : 현재 창을 지정된 좌표로 이동합니다.
- {{domxref("Window.open()")}}
  - : 새 창을 엽니다.
- {{domxref("Window.postMessage()")}}
  - : 창에서 다른 창으로 문자열 데이터를 전송할 수 있는 안전한 방법을 제공합니다. 두 창의 도메인이 같지 않아도 됩니다.
- {{domxref("Window.print()")}}
  - : 현재 문서를 출력하는 인쇄 대화 상자를 엽니다.
- {{domxref("Window.prompt()")}}
  - : 사용자가 명령 대화상자에 입력하는 텍스트를 반환합니다.
- {{DOMxRef("Window.queryLocalFonts()")}} {{Experimental_Inline}}
  - : {{domxref("FontData")}} 객체의 배열로 이행하는 {{jsxref("Promise")}}를 반환합니다. 기기에서 사용 가능한 로컬 글꼴들을 나타냅니다.
- {{domxref("EventTarget.removeEventListener", "Window.removeEventListener()")}}
  - : 창의 이벤트 수신기를 제거합니다.
- {{domxref("reportError", "Window.reportError()")}}
  - : 처리되지 않은 예외를 흉내낸 오류를 보고합니다.
- {{domxref("Window.requestAnimationFrame()")}}
  - : 브라우저에게 애니메이션이 재생 중임을 알려, 다음 애니메이션 프레임을 위한 리페인트의 예약을 요청합니다.
- {{domxref("Window.requestIdleCallback()")}}
  - : 브라우저 대기 시간에 수행할 작업을 예약합니다.
- {{domxref("Window.resizeBy()")}}
  - : 현재 창을 지정한 크기만큼 조절합니다.
- {{domxref("Window.resizeTo()")}}
  - : 현재 창을 지정한 크기로 조절합니다.
- {{domxref("Window.scroll()")}}
  - : 창을 문서 내의 특정 지점으로 스크롤합니다.
- {{domxref("Window.scrollBy()")}}
  - : 창의 문서를 주어진 거리만큼 스크롤합니다.
- {{domxref("Window.scrollByLines()")}} {{Non-standard_Inline}}
  - : 창의 문서를 주어진 줄 수만큼 스크롤합니다.
- {{domxref("Window.scrollByPages()")}} {{Non-standard_Inline}}
  - : 창의 문서를 주어진 장 수만큼 스크롤합니다.
- {{domxref("Window.scrollTo()")}}
  - : 창을 문서 내의 좌표로 스크롤합니다.
- {{domxref("Window.setImmediate()")}}
  - : 브라우저가 무거운 작업들을 마친 후에 함수를 실행하도록 예약합니다.
- {{domxref("setInterval", "Window.setInterval()")}}
  - : 주어진 밀리초가 지날 때마다 실행할 함수를 예약합니다.
- {{domxref("Window.setResizable()")}} {{Non-standard_Inline}}
  - : 사용자의 창 크기 조절을 허용하거나 막습니다.
- {{domxref("setTimeout", "Window.setTimeout()")}}
  - : 주어진 시간이 지난 후 실행할 함수를 예약합니다.
- {{domxref("Window.sizeToContent()")}} {{Non-standard_Inline}}
  - : 창의 크기를 현재 내용에 맞춰 조절합니다.
- {{domxref("Window.showOpenFilePicker()")}} {{Experimental_Inline}}
  - : 사용자가 파일 또는 파일들을 선택할 수 있는 파일 선택창을 엽니다.
- {{domxref("Window.showSaveFilePicker()")}} {{Experimental_Inline}}
  - : 사용자가 파일 저장 위치를 선택할 수 있는 파일 선택창을 엽니다.
- {{domxref("Window.showDirectoryPicker()")}} {{Experimental_Inline}}
  - : 사용자가 디렉토리를 선택할 수 있는 디렉토리 선택창을 엽니다.
- {{domxref("Window.stop()")}}
  - : 창의 불러오기를 중단합니다.
- {{domxref("Window.updateCommands()")}} {{Non-standard_Inline}}
  - : 현재 창 크롬(UI)의 명령 상태를 업데이트합니다.

### Deprecated methods

- {{domxref("Window.back()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Moves back one in the window history. This method is deprecated; you should instead use {{domxref("History.back", "window.history.back()")}}.
- {{domxref("Window.captureEvents()")}} {{Deprecated_Inline}}
  - : Registers the window to capture all events of the specified type.
- {{domxref("Window.forward()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Moves the window one document forward in the history. This method is deprecated; you should instead use {{domxref("History.forward", "window.history.forward()")}}.
- {{domxref("Window.releaseEvents()")}} {{Deprecated_Inline}}
  - : Releases the window from trapping events of a specific type.
- {{domxref("Window.showModalDialog()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Displays a modal dialog.

## 이벤트

[`addEventListener()`](/ko/docs/Web/API/EventTarget/addEventListener)를 사용하거나, `Window` 인터페이스의 `oneventname` 속성을 사용해 이벤트를 수신하세요.

- {{domxref("Window/error_event", "error")}}
  - : 찾을 수 없거나 유효하지 않은 이미지, 실행 오류가 발생하는 스크립트 등, 리소스를 불러오지 못했거나 사용할 수 없을 때 발생합니다.
- {{domxref("Window/languagechange_event", "languagechange")}}
  - : 사용자의 선호 언어가 바뀌면 발생합니다.
- {{domxref("Window.devicemotion_event", "devicemotion")}}
  - : 일정 주기로 발생하여 장치가 받고 있는 물리적 가속력의 양을 나타냅니다. 가능한 경우 각속도도 포함합니다.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
  - : 자기계 방향 센서가 제공하는, 지구 좌표계 기준 장치 방향 데이터를 새로 사용할 수 있으면 발생합니다.
- {{domxref("Window/resize_event", "resize")}}
  - : 창 크기가 바뀌면 발생합니다.
- {{domxref("Window/storage_event", "storage")}}
  - : 다른 문서에서 저장소(`localStorage` 또는 `sessionStorage`)를 수정하면 발생합니다.

### 애니메이션 이벤트

- {{domxref("Window/animationcancel_event", "animationcancel")}}
  - : 애니메이션이 예상치 못하게 중단되면 발생합니다.
- {{domxref("Window/animationend_event", "animationend")}}
  - : 애니메이션이 정상적으로 끝나면 발생합니다.
- {{domxref("Window/animationiteration_event", "animationiteration")}}
  - : 애니메이션의 1회 반복이 끝나면 발생합니다.
- {{domxref("Window/animationstart_event", "animationstart")}}
  - : 애니메이션이 시작하면 발생합니다.

### 클립보드 이벤트

- {{domxref("Window/copy_event", "copy")}}
  - : 사용자가 브라우저 사용자 인터페이스를 통해 복사 액션을 실행하면 발생합니다. {{domxref("HTMLElement/oncopy", "oncopy")}} 속성으로도 사용할 수 있습니다.
- {{domxref("Window/cut_event", "cut")}}
  - : 사용자가 브라우저 사용자 인터페이스를 통해 잘라내기 액션을 실행하면 발생합니다. {{domxref("HTMLElement/oncut", "oncut")}} 속성으로도 사용할 수 있습니다.
- {{domxref("Window/paste_event", "paste")}}
  - : 사용자가 브라우저 사용자 인터페이스를 통해 붙여넣기 액션을 실행하면 발생합니다. {{domxref("HTMLElement/onpaste", "onpaste")}} 속성으로도 사용할 수 있습니다.

### 네트워크 연결 이벤트

- {{domxref("Window/offline_event", "offline")}}
  - : 브라우저가 네트워크 연결을 상실해 `navigator.onLine`이 `false`로 바뀌면 발생합니다.
- {{domxref("Window/online_event", "online")}}
  - : 브라우저가 네트워크 연결을 획득해 `navigator.onLine`이 `true`로 바뀌면 발생합니다.

### 포커스 이벤트

- {{domxref("Window/blur_event", "blur")}}
  - : 요소가 포커스를 잃으면 발생합니다.
- {{domxref("Window/focus_event", "focus")}}
  - : 요소가 포커스를 얻으면 발생합니다.

### 게임패드 이벤트

- {{domxref("Window/gamepadconnected_event", "gamepadconnected")}}
  - : 브라우저가 게임패드 연결을 감지하거나, 게임패드의 버튼/축 입력을 처음 감지했을 때 발생합니다.
- {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}}
  - : 브라우저가 게임패드 연결 해제를 감지하면 발생합니다.

### 방문 기록 이벤트

- {{domxref("Window/hashchange_event", "hashchange")}}
  - : URL의 프래그먼트 식별자(`#` 기호로 시작하는 부분)가 바뀌면 발생합니다.
- {{domxref("Window/pagehide_event", "pagehide")}}
  - : 뒤로 가기나 앞으로 가기 버튼으로 방문 기록을 탐색할 때 등, 브라우저가 현재 문서를 숨기고 방문 기록 내의 다른 문서를 보여주려고 할 때 발생합니다.
- {{domxref("Window/pageshow_event", "pageshow")}}
  - : 브라우저 탐색으로 이 페이지가 보여질 때 발생합니다. 페이지 첫 방문이나, 다른 페이지에서 뒤로 가기나 앞으로 가기 버튼으로 다시 돌아올 때 발생합니다.
- {{domxref("Window/popstate_event", "popstate")}}
  - : 활성화된 방문 기록 항목이 바뀌면 발생합니다.

### 로드 & 언로드 이벤트

- {{domxref("Window/beforeunload_event", "beforeunload")}}
  - : 창과 문서, 리소스들을 언로드하기 직전에 발생합니다.
- {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : 문서 파싱이 끝나면 발생합니다. 스타일시트, 이미지, 하위 프레임의 로딩이 끝날 때까지 기다리지 않습니다.
- {{domxref("Window/load_event", "load")}}
  - : 스타일시트, 이미지 등 리소스까지 포함해서 페이지 로딩이 모두 끝나면 발생합니다.
- {{domxref("Window/unload_event", "unload")}}
  - : 문서나 하위 리소스가 언로딩 중일 때 발생합니다.

### 매니페스트 이벤트

- {{domxref("Window/appinstalled_event", "appinstalled")}}
  - : 브라우저가 성공적으로 페이지를 애플리케이션으로서 설치했을 때 발생합니다.
- {{domxref("Window/beforeinstallprompt_event", "beforeinstallprompt")}}
  - : 사용자에게 웹 애플리케이션 설치를 권유하기 직전에 발생합니다.

### 메시지 이벤트

- {{domxref("Window/message_event", "message")}}
  - : 다른 탐색 맥락에서의 {{domxref("Window/postMessage", "Window.postMessage()")}} 등으로 이 창이 메시지를 수신했을 때 발생합니다.
- {{domxref("Window/messageerror_event", "messageerror")}}
  - : `Window` 객체가 역직렬화 할 수 없는 메시지를 수신하면 발생합니다.

### 출력 이벤트

- {{domxref("Window/afterprint_event", "afterprint")}}
  - : 연관된 문서의 출력이 시작됐거나, 출력 미리보기 창이 닫히면 발생합니다.
- {{domxref("Window/beforeprint_event", "beforeprint")}}
  - : 연관된 문서의 출력이 시작되기 직전이나, 출력 미리보기 창이 열리기 직전에 발생합니다.

### 프로미스 거부 이벤트

- {{domxref("Window/rejectionhandled_event", "rejectionhandled")}}
  - : JavaScript {{jsxref("Promise")}}가 거부될 때마다 발생합니다. 잡아낸 거부로 인해서도 발생합니다.
- {{domxref("Window/unhandledrejection_event", "unhandledrejection")}}
  - : JavaScript {{jsxref("Promise")}}가 거부됐지만, 거부를 잡아낼 처리기가 없을 때 발생합니다.

### 트랜지션 이벤트

- {{domxref("Window/transitioncancel_event", "transitioncancel")}}
  - : [CSS 트랜지션](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)이 취소되면 발생합니다.
- {{domxref("Window/transitionend_event", "transitionend")}}
  - : [CSS 트랜지션](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)이 끝나면 발생합니다.
- {{domxref("Window/transitionrun_event", "transitionrun")}}
  - : [CSS 트랜지션](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)이 처음으로 생성되면 시작합니다.
- {{domxref("Window/transitionstart_event", "transitionstart")}}
  - : [CSS 트랜지션](/ko/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)이 시작하면 발생합니다.

### Deprecated events

- {{domxref("Window/orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : Fired when the orientation of the device has changed.
- {{domxref("Window/vrdisplayactivate_event", "vrdisplayactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a display is able to be presented to.
- {{domxref("Window/vrdisplayconnect_event", "vrdisplayconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a compatible VR device has been connected to the computer.
- {{domxref("Window/vrdisplaydisconnect_event", "vrdisplaydisconnect")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a compatible VR device has been disconnected from the computer.
- {{domxref("Window/vrdisplaydeactivate_event", "vrdisplaydeactivate")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when a display can no longer be presented to.
- {{domxref("Window/vrdisplaypresentchange_event", "vrdisplaypresentchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired when the presenting state of a VR device changes — i.e. goes from presenting to not presenting, or vice versa.

## 인터페이스

[DOM 인터페이스](/ko/docs/Web/API/Document_Object_Model)를 참고하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

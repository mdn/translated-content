---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{DefaultAPISidebar("HTML DOM")}}

**HTML DOM API**는 {{Glossary("HTML")}}의 각 {{Glossary("element", "elements")}}의 기능을 정의하는 인터페이스와 해당 요소가 의존하는 모든 지원 유형 및 인터페이스로 구성됩니다.

HTML DOM API에 포함된 기능 영역은 다음과 같습니다.

- {{Glossary("DOM")}}을 통한 HTML 요소에 대한 접근 및 제어.
- 양식 데이터에 대한 접근 및 조작.
- 2D 이미지의 콘텐츠 및 HTML {{HTMLElement("canvas")}}의 맥락과 해당 요소 위에 그리는 것과 같은 상호 작용.
- HTML 미디어 요소 ({{HTMLElement("audio")}} 및 {{HTMLElement("video")}})에 연결된 미디어 관리.
- 웹 페이지에서 콘텐츠 드래그 앤 드롭.
- 브라우저 탐색 기록에 대한 접근
- [Web Components](/ko/docs/Web/API/Web_components), {{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}}, {{DOMxRef("Web_Workers_API", "Web Workers", "", "1")}}, {{DOMxRef("WebSockets_API", "WebSocket", "", "1")}} 및 {{DOMxRef("Server-sent_events", "Server-sent events", "", "1")}}와 같은 기타 API에 대한 연결 인터페이스 지원.

## HTML DOM 개념 및 사용법

이 글에서는 HTML 요소와 관련된 HTML DOM 부분에 초점을 맞추겠습니다. {{DOMxRef("HTML_Drag_and_Drop_API", "Drag and Drop", "", "1")}}, {{DOMxRef("WebSockets_API", "WebSockets", "", "1")}}, {{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}}와 같은 다른 영역에 대한 설명은 해당 API의 문서에서 확인할 수 있습니다.

### HTML 문서의 구조

문서 객체 모델({{Glossary("DOM")}})은 {{domxref("document")}}의 구조를 설명하는 아키텍처로, 각 문서는 {{domxref("Document")}} 인터페이스의 인스턴스로 표현됩니다. 문서는 **노드**의 계층적 트리로 구성되며, 문서 내의 단일 객체(예: 요소 또는 텍스트 노드)를 나타내는 기본 레코드입니다.

노드는 다른 노드를 함께 그룹화하거나 계층 구조를 구성할 수 있는 지점을 제공하는 등 엄격하게 조직화될 수 있으며, 다른 노드는 문서의 눈에 보이는 구성 요소를 나타낼 수 있습니다. 각 노드는 노드에 대한 정보를 가져오는 속성과 DOM 내에서 노드를 생성, 삭제 및 구성하는 메서드를 제공하는 {{domxref("Node")}} 인터페이스를 기반으로 합니다.

노드는 문서에 실제로 표시되는 콘텐츠를 포함한다는 개념이 없습니다. 노드는 빈 그릇입니다. 시각적 콘텐츠를 나타낼 수 있는 노드의 기본 개념은 {{domxref("Element")}} 인터페이스에 의해 도입되었습니다.`요소` 객체 인스턴스는 HTML 또는 {{glossary("SVG")}}와 같은 {{glossary("XML")}} 어휘를 사용하여 만든 문서에서 단일 요소를 나타냅니다.

예를 들어 두 개의 요소가 있고, 그 중 하나에 두 개의 요소가 더 중첩되어 있는 문서를 생각해 봅시다.

![Structure of a document with elements inside a document in a window](dom-structure.svg)

{{domxref("Document")}} 인터페이스는 {{DOMxRef("Document_Object_Model", "DOM", "", "1")}} 사양의 일부로 정의되어 있지만, HTML 명세서는 웹 브라우저의 맥락에서 DOM 사용과 관련된 정보를 추가하고, HTML 문서를 구체적으로 표현하는 데 사용할 수 있도록 크게 향상되었습니다.

HTML 표준에 의해 `Document`에 추가된 기능은 다음과 같습니다.

- 문서가 로드된 {{DOMxRef("Document/location", "location", "", "1")}}, {{DOMxRef("Document/cookie", "cookies", "", "1")}}, {{DOMxRef("Document/lastModified", "modification date", "", "1")}}, {{DOMxRef("Document/referrer", "referring site", "", "1")}} 등 페이지를 로드할 때, {{Glossary("HTTP")}} 헤더에서 제공하는 다양한 정보에 접근할 수 있도록 지원합니다.
- 문서의 {{HTMLElement("head")}} 블록 및 {{DOMxRef("Document/body", "body", "", "1")}}에 포함된 {{DOMxRef("Document/images", "images", "", "1")}}, {{DOMxRef("Document/links", "links", "", "1")}}, {{DOMxRef("Document/scripts", "scripts", "", "1")}} 등의 목록에 접근합니다.
- {{DOMxRef("Document/hasFocus", "focus", "", "1")}}를 조사하고 [편집 가능한 콘텐츠](/ko/docs/Web/HTML/Reference/Global_attributes/contenteditable)에 대한 명령을 실행하여 사용자와 상호 작용할 수 있도록 지원합니다.
- {{DOMxRef("MouseEvent", "mouse", "", "1")}} 및 {{DOMxRef("KeyboardEvent", "keyboard", "", "1")}} 이벤트, {{DOMxRef("HTML_Drag_and_Drop_API", "drag and drop", "", "1")}}, {{DOMxRef("HTMLMediaElement", "media control", "", "1")}} 등에 접근할 수 있도록 HTML 표준에 정의된 문서 이벤트용 이벤트 핸들러입니다.
- {{DOMxRef("HTMLElement/copy_event", "copy", "", "1")}}, {{DOMxRef("HTMLElement/cut_event", "cut", "", "1")}} 및 {{DOMxRef("HTMLElement/paste_event", "paste", "", "1")}}와 같은 요소와 문서 모두에 전달할 수 있는 이벤트 핸들러를 제공합니다.

### HTML 요소 인터페이스

`Element` 인터페이스는 보다 구체적인 모든 HTML 요소 클래스가 상속하는 {{domxref("HTMLElement")}} 인터페이스를 도입하여 HTML 요소를 구체적으로 표현하도록 조정되었습니다. 이를 통해 `Element` 클래스가 확장되어 요소 노드에 HTML 관련 일반 기능을 추가할 수 있습니다. `HTMLElement`에 의해 추가된 속성에는 {{domxref("HTMLElement.hidden", "hidden")}} 및 {{domxref("HTMLElement.innerText", "innerText")}} 등이 있습니다.

{{Glossary("HTML")}} 문서는 각 노드가 HTML 요소인 DOM 트리로, {{domxref("HTMLElement")}} 인터페이스로 표시됩니다. `HTMLElement` 클래스는 차례로 `Node`를 구현하므로 모든 요소는 노드이기도 합니다(그 반대는 아닙니다). 이렇게 하면 {{domxref("Node")}} 인터페이스가 구현하는 구조적 기능을 HTML 요소에서도 사용할 수 있으므로, 서로 중첩하고, 생성 및 삭제하고, 이동하는 등의 작업을 수행할 수 있습니다.

`HTMLElement` 인터페이스는 일반적이며, 요소의 ID, 좌표, 요소를 구성하는 HTML, 스크롤 위치에 대한 정보 등 모든 HTML 요소에 공통된 기능만 제공합니다.

특정 요소에 필요한 기능을 제공하는 핵심 `HTMLElement` 인터페이스의 기능을 확장하기 위해, `HTMLElement` 클래스를 필요한 속성과 메서드를 추가하도록 하위 클래스화합니다. 예를 들어 {{HTMLElement("canvas")}} 요소는 {{domxref("HTMLCanvasElement")}} 유형의 객체로 표시됩니다. `HTMLCanvasElement`는 캔버스 관련 기능을 제공하기 위해, {{domxref("HTMLCanvasElement.height", "height")}}와 같은 속성과 {{domxref("HTMLCanvasElement.getContext", "getContext()")}} 같은 메서드를 추가하여 `HTMLElement` 유형을 보강합니다.

HTML 요소 클래스의 전체 상속은 다음과 같습니다.

![Hierarchy of interfaces for HTML elements](html-dom-hierarchy.svg)

이와 같이 모든 요소는 모든 상위 요소의 속성과 메서드를 상속합니다. 예를 들어, DOM에서 {{domxref("HTMLAnchorElement")}} 유형의 객체로 표시되는 {{HTMLElement("a")}} 요소를 생각해 봅시다. 그러면 이 요소에는 해당 클래스의 문서에 설명된 앵커 관련 속성 및 메서드뿐만 아니라 {{domxref("HTMLElement")}} 및 {{domxref("Element")}}, {{domxref("Node")}}, 마지막으로 {{domxref("EventTarget")}}에서 정의한 속성 및 메서드도 포함됩니다.

각 레벨은 요소의 유용성에 대한 핵심적인 측면을 정의합니다. `Node`에서 요소는 요소가 다른 요소에 의해 포함될 수 있고, 요소 자체가 다른 요소를 포함할 수 있는 기능을 둘러싼 개념을 상속받습니다. 특히 중요한 것은 마우스 클릭, 재생 및 일시 정지 이벤트 등과 같은 이벤트를 수신하고 처리하는 기능인 `EventTarget`에서 상속함으로써 얻을 수 있는 기능입니다.

공통점을 공유하여 추가적인 중간 유형을 갖는 요소가 있습니다. 예를 들어 {{HTMLElement("audio")}} 및 {{HTMLElement("video")}} 요소는 모두 시청각 미디어를 나타냅니다. 해당 유형인 {{domxref("HTMLAudioElement")}}와 {{domxref("HTMLVideoElement")}}는 모두 공통 유형인 {{domxref("HTMLMediaElement")}}를 기반으로 하며, 이 유형은 다시 {{domxref("HTMLElement")}} 등을 기반으로 합니다. `HTMLMediaElement`는 오디오 요소와 비디오 요소 간에 공통으로 사용되는 메서드와 속성을 정의합니다.

이러한 요소별 인터페이스는 HTML DOM API의 대부분을 구성하며, 이 글에서 중점적으로 다룹니다. {{DOMxRef("Document_Object_Model", "DOM", "", "1")}}의 실제 구조에 대해 자세히 알아보려면, {{DOMxRef("Document_Object_Model/Introduction", "Introduction to the DOM", "", "1")}} 문서를 참조하세요.

## HTML DOM 대상 그룹

HTML DOM에 의해 노출되는 기능은 웹 개발자 도구상자에서 가장 일반적으로 사용되는 API 중 하나입니다.
가장 단순한 웹 애플리케이션을 제외한 모든 웹 애플리케이션은 HTML DOM의 일부 기능을 사용합니다.

## HTML DOM API 인터페이스

HTML DOM API를 구성하는 대부분의 인터페이스는 개별 HTML 요소 또는 유사한 기능을 가진 소수의 요소 그룹에 거의 일대일로 매핑됩니다. 또한 HTML DOM API에는 HTML 요소 인터페이스를 지원하기 위한 몇 가지 인터페이스와 유형이 포함되어 있습니다.

### HTML 요소 인터페이스

이러한 인터페이스는 특정 HTML 요소(또는 이와 관련된 동일한 속성 및 메서드를 가진 관련 요소 집합)를 나타냅니다.

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

#### 더 이상 사용되지 않는 HTML 요소 인터페이스

- {{DOMxRef("HTMLMarqueeElement")}} {{deprecated_inline}}

#### 폐기된 HTML 요소 인터페이스

- {{DOMxRef("HTMLFontElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameSetElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLIsIndexElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLMenuItemElement")}} {{deprecated_inline}}

### 웹 앱 및 브라우저 통합 인터페이스

이러한 인터페이스는 HTML에 포함된 브라우저 창과 문서는 물론 브라우저의 상태, 사용가능한 플러그인(있는 경우) 및 다양한 구성 옵션에 대한 접근을 제공합니다.

- {{DOMxRef("BarProp")}}
- {{DOMxRef("Navigator")}}
- {{DOMxRef("Window")}}

#### 더 이상 사용되지 않는 웹 앱 및 브라우저 통합 인터페이스

- {{DOMxRef("External")}} {{deprecated_inline}}

#### 폐기된 웹 앱 및 브라우저 통합 인터페이스

- {{DOMxRef("ApplicationCache")}} {{deprecated_inline}}
- {{DOMxRef("Plugin")}} {{deprecated_inline}}
- {{DOMxRef("PluginArray")}} {{deprecated_inline}}

### 양식 지원 인터페이스

이러한 인터페이스는 {{HTMLElement("form")}}과 {{HTMLElement("input")}} 요소를 포함하여, 양식을 만들고 관리하는 데 사용되는 요소에 필요한 구조와 기능을 제공합니다.

- {{DOMxRef("FormDataEvent")}}
- {{DOMxRef("HTMLFormControlsCollection")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("RadioNodeList")}}
- {{DOMxRef("ValidityState")}}

### 캔버스 및 이미지 인터페이스

이러한 인터페이스는 캔버스 API에서 사용하는 객체와 {{HTMLElement("img")}} 요소 및 {{HTMLElement("picture")}} 요소를 나타냅니다.

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

### 미디어 인터페이스

미디어 인터페이스는 {{HTMLElement("audio")}}와 {{HTMLElement("video")}}와 같은 미디어 요소의 콘텐츠에 대한 HTML 접근을 제공합니다.

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

### 드래그 앤드 드롭 인터페이스

이러한 인터페이스는 [HTML Drag and Drop API](/ko/docs/Web/API/HTML_Drag_and_Drop_API)에서 드래그 가능한(또는 끌 수 있는) 개별 항목 및 그룹을 나타내고, 드래그 앤 드롭 프로세스를 처리하는 데 사용됩니다.

- {{DOMxRef("DataTransfer")}}
- {{DOMxRef("DataTransferItem")}}
- {{DOMxRef("DataTransferItemList")}}
- {{DOMxRef("DragEvent")}}

### 페이지 이력 인터페이스

History API 인터페이스를 사용하면 브라우저의 방문 이력에 대한 정보에 접근할 수 있을 뿐만 아니라, 해당 방문 이력을 통해 브라우저의 현재 탭을 앞뒤로 이동할 수 있습니다.

- {{DOMxRef("BeforeUnloadEvent")}}
- {{DOMxRef("HashChangeEvent")}}
- {{DOMxRef("History")}}
- {{DOMxRef("Location")}}
- {{DOMxRef("PageTransitionEvent")}}
- {{DOMxRef("PopStateEvent")}}

### 웹 구성요소 인터페이스

이러한 인터페이스는 [Web Components API](/ko/docs/Web/API/Web_components)에서 사용할 수 있는 [사용자 정의 요소](/ko/docs/Web/API/Web_components/Using_custom_elements)를 생성하고 관리하는 데 사용됩니다.

- {{DOMxRef("CustomElementRegistry")}}

### 기타 및 지원 인터페이스

이러한 지원 객체 유형은 HTML DOM API에서 다양한 방식으로 사용됩니다. 또한 {{domxref("PromiseRejectionEvent")}}는 {{Glossary("JavaScript")}} {{jsxref("Promise")}}가 거부될 때 전달되는 이벤트를 나타냅니다.

- {{DOMxRef("DOMStringList")}}
- {{DOMxRef("DOMStringMap")}}
- {{DOMxRef("ErrorEvent")}}
- {{DOMxRef("HTMLAllCollection")}}
- {{DOMxRef("MimeType")}}
- {{DOMxRef("MimeTypeArray")}}
- {{DOMxRef("PromiseRejectionEvent")}}

### 다른 API에 속하는 인터페이스

몇몇 인터페이스는 기술적으로 HTML 사양에 정의되어 있지만 실제로는 다른 API의 일부이기도 합니다.

#### 웹 스토리지 인터페이스

{{DOMxRef("Web_Storage_API", "Web Storage API", "", "1")}}는 웹사이트가 나중에 재사용할 수 있도록 데이터를 사용자 디바이스에 일시적 또는 영구적으로 저장할 수 있는 기능을 제공합니다.

- {{DOMxRef("Storage")}}
- {{DOMxRef("StorageEvent")}}

#### 웹 워커 인터페이스

이러한 인터페이스는 {{DOMxRef("Web_Workers_API", "Web Workers API", "", "1")}}에서 작업자가 앱 및 해당 콘텐츠와 상호 작용할 수 있는 기능을 설정하는 데 사용될 뿐만 아니라 창 또는 앱 간의 메시징을 지원하는 데에도 사용됩니다.

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

#### 웹소켓 인터페이스

HTML 사양에 정의된 이러한 인터페이스는 {{DOMxRef("WebSockets_API", "WebSockets API", "", "1")}}에서 사용됩니다.

- {{DOMxRef("CloseEvent")}}
- {{DOMxRef("WebSocket")}}

#### 서버 전송 이벤트 인터페이스

{{domxref("EventSource")}} 인터페이스는 {{DOMxRef("Server-sent_events", "server-sent events", "", "1")}}를 전송했거나 전송 중인 소스를 나타냅니다.

- {{DOMxRef("EventSource")}}

## 예제

이 예시에서는 지정된 필드에 현재 값이 있는지에 따라 양식의 "제출" 버튼의 상태를 업데이트하기 위해 {{HTMLElement("input")}} 요소의 {{domxref("HTMLElement/input_event", "input")}} 이벤트를 모니터링합니다.

### JavaScript

```js
const nameField = document.getElementById("userName");
const sendButton = document.getElementById("sendButton");

sendButton.disabled = true;
// [참고: 이 예제는 항상 이 예제에 초점을 맞추고 스크롤한 상태로 로드되므로 비활성화되어 있습니다].
//nameField.focus();

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

이 코드는 {{domxref("Document")}} 인터페이스의 {{domxref("Document.getElementById", "getElementById()")}} 메서드를 사용하여, ID가 `userName` and `sendButton`인 {{HTMLElement("input")}} 요소를 나타내는 DOM 객체를 가져옵니다. 이를 통해 이러한 요소에 대한 정보를 제공하고 제어 권한을 부여하는 속성과 메서드에 접근할 수 있습니다.

"보내기" 버튼의 {{domxref("HTMLInputElement.disabled", "disabled")}} 속성에 대한 {{domxref("HTMLInputElement")}} 객체가 `true`로 설정되어 "보내기" 버튼을 클릭할 수 없도록 비활성화합니다. 또한 사용자 이름 입력 필드는 {{domxref("HTMLElement")}}에서 상속하는 {{domxref("HTMLElement/focus", "focus()")}} 메서드를 호출하여 활성 포커스로 설정됩니다.

그런 다음 {{domxref("EventTarget.addEventListener", "addEventListener()")}}를 호출하여 사용자 이름 입력에 `input` 이벤트에 대한 핸들러를 추가합니다. 이 코드는 입력의 현재 값의 길이를 확인하여 0이면 "보내기" 버튼이 아직 비활성화되어 있지 않은 경우 비활성화합니다. 그렇지 않으면 이 코드는 버튼이 활성화 되도록 합니다.

이렇게 하면 사용자 이름 입력 필드에 값이 있을 때마다 '보내기' 버튼이 항상 활성화되고 비어 있으면 비활성화됩니다.

### HTML

양식(form)에 대한 HTML은 다음과 같습니다.

```html
<p>아래 정보를 제공해주세요. "*" 표시가 되어있는 부분은 필수 정보입니다.</p>
<form action="" method="get">
  <p>
    <label for="userName" required>Your name:</label>
    <input type="text" id="userName" /> (*)
  </p>
  <p>
    <label for="email">Email:</label>
    <input type="email" id="userEmail" />
  </p>
  <input type="submit" value="Send" id="sendButton" />
</form>
```

### 결과

{{EmbedLiveSample("Examples", 640, 300)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

### 참고서

- [HTML 요소 참고서](/ko/docs/Web/HTML/Reference/Elements)
- [HTML 특성 참고서](/ko/docs/Web/HTML/Reference/Attributes)
- {{DOMxRef("Document_Object_Model", "Document Object Model (DOM)", "", "1")}} 참고서

### 안내서

- [Manipulating documents](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents): DOM 조작에 대한 초보자 가이드.

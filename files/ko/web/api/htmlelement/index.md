---
title: HTMLElement
slug: Web/API/HTMLElement
---

{{ APIRef("HTML DOM") }}

**`HTMLElement`** 인터페이스는 모든 종류의 [HTML](/ko/docs/Web/HTML) 요소를 나타냅니다. 일부 요소는 이 인터페이스를 직접 구현하지만 나머지 요소는 `HTMLElement`를 상속한 자식 인터페이스를 구현합니다.

{{InheritanceDiagram}}

## 속성

_부모인 {{domxref("Element")}}의 속성을 상속합니다. {{domxref("GlobalEventHandlers")}}, {{domxref("TouchEventHandlers")}}의 속성을 구현합니다._

- {{domxref("HTMLElement.accessKey")}}
  - : 요소에 할당된 접근 키를 나타내는 {{domxref("DOMString")}}입니다.
- {{domxref("HTMLElement.accessKeyLabel")}} {{readonlyInline}}
  - : 요소에 할당된 접근 키를 포함하는 {{domxref("DOMString")}}을 반환합니다.
- {{domxref("HTMLElement.contentEditable")}}
  - : 요소가 수정 가능하면 `"true"`, 그렇지 않으면 `"false"` 값을 갖는 {{domxref("DOMString")}}입니다.
- {{domxref("HTMLElement.isContentEditable")}} {{readonlyInline}}
  - : 요소의 콘텐츠가 수정 가능한지 여부를 나타내는 {{domxref("Boolean")}}을 반환합니다.
- {{domxref("HTMLElement.contextMenu")}} {{deprecated_inline}}
  - : 요소와 관련된 콘텍스트 메뉴를 나타내는 {{domxref("HTMLMenuElement")}}입니다. {{jsxref("null")}}일 수 있습니다.
- {{domxref("HTMLElement.dataset")}} {{readonlyInline}}
  - : 요소의 [사용자 지정 데이터 속성](/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)(`data-*`)을 스크립트에서 읽고 쓸 수 있는 {{domxref("DOMStringMap")}}을 반환합니다.
- {{domxref("HTMLElement.dir")}}
  - : 요소의 방향성을 표현하는 전역 속성 `dir` 을 나타내는 {{domxref("DOMString")}} 을 반환합니다. 가능한 값은 `"ltr"`, `"rtl"`, `"auto"` 입니다.
- {{domxref("HTMLElement.draggable")}}
  - : 요소가 드래그 가능한지 여부를 나타내는 {{jsxref("Boolean")}} 을 반환합니다.
- {{domxref("HTMLElement.dropzone")}} {{readonlyInline}}
  - : `dropzone` 전역 속성을 나타내고 drop 작업에 대한 동작을 설명하는 {{domxref("DOMSettableTokenList")}} 를 반환합니다.
- {{domxref("HTMLElement.hidden")}}
  - : 요소가 숨김상태인지 여부를 나타내는 {{jsxref("Boolean")}} 을 반환합니다.
- {{domxref("HTMLElement.inert")}}
  - : 유저 에이전트가 사용자 인터렉션 이벤트, 페이지 내 텍스트 검색("페이지에서 찾기"), 텍스트 선택의 목적으로 주어진 노드가 없는 것처럼 동작해야하는지 여부를 나타내는 {{jsxref("Boolean")}} 을 반환합니다.
- {{domxref("HTMLElement.innerText")}}
  - : 노드와 그 자손의 "렌더링된" 텍스트 컨텐츠를 나타냅니다. getter 로써, 이는 사용자가 커서로 요소의 컨텐츠를 하이라이팅한 후 클립보드로 복사하면 얻을 수 있는 텍스트와 유사합니다.
- {{domxref("HTMLElement.itemScope")}} {{experimental_inline}}
  - : 항목 스코프를 나타내는 {{jsxref("Boolean")}} 입니다.
- {{domxref("HTMLElement.itemType")}} {{readonlyInline}}{{experimental_inline}}
  - : {{domxref("DOMSettableTokenList")}}… 를 반환합니다.
- {{domxref("HTMLElement.itemId")}} {{experimental_inline}}
  - : 항목 ID 를 나타내는 {{domxref("DOMString")}} 입니다.
- {{domxref("HTMLElement.itemRef")}} {{readonlyInline}}{{experimental_inline}}
  - : {{domxref("DOMSettableTokenList")}}… 를 반환합니다.
- {{domxref("HTMLElement.itemProp")}} {{readonlyInline}}{{experimental_inline}}
  - : {{domxref("DOMSettableTokenList")}}… 를 반환합니다.
- {{domxref("HTMLElement.itemValue")}} {{experimental_inline}}
  - : 항목 값을 나타내는 {{jsxref("Object")}} 를 반환합니다.
- {{domxref("HTMLElement.lang")}}
  - : 요소의 속성, 텍스트, 컨텐츠의 언어를 나타내는 {{domxref("DOMString")}} 입니다.
- {{domxref("HTMLElement.noModule")}}
  - : 임포트한 스크립트가 모듈 스크립트를 지원하는 유저 에이전트에서 실행될 수 있는지를 나타내는 {{jsxref("Boolean")}} 입니다.
- {{domxref("HTMLElement.nonce")}}
  - : 주어진 페치(fetch)의 진행을 허용할지를 결정하기 위한 컨텐츠 보안 정책(Content Security Policy)에서 한 번 사용된 암호회된 숫자를 반환합니다.
- {{domxref("HTMLElement.offsetHeight")}} {{readonlyInline}}{{experimental_inline}}
  - : 레이아웃에 상대적인 요소의 높이를 갖는 `double` 을 반환합니다.
- {{domxref("HTMLElement.offsetLeft")}}{{readonlyInline}}{{experimental_inline}}
  - : 요소의 left border 부터 `offsetParent` 의 left border 까지의 거리를 `double` 로 반환합니다.
- {{domxref("HTMLElement.offsetParent")}}{{readonlyInline}}{{experimental_inline}}
  - : 모든 오프셋 계산이 현재 연산된 요소인 {{domxref("Element")}} 를 반환합니다.
- {{domxref("HTMLElement.offsetTop")}}{{readonlyInline}}{{experimental_inline}}
  - : 요소의 top border 부터 `offsetParent` 의 top border 까지의 거리를 `double` 로 반환합니다.
- {{domxref("HTMLElement.offsetWidth")}}{{readonlyInline}}{{experimental_inline}}
  - : 레이아웃에 상대적인 요소의 너비를 갖는 `double` 을 반환합니다.
- {{domxref("HTMLElement.properties")}} {{readonlyInline}}{{experimental_inline}}
  - : {{domxref("HTMLPropertiesCollection")}}… 을 반환합니다.
- {{domxref("HTMLElement.spellcheck")}}
  - : [철자 검사](/ko/docs/Web/HTML/Global_attributes/spellcheck)를 제어하는 {{jsxref("Boolean")}} 입니다. 모든 HTML 요소에 존재하지만, 모두에 대해 적용되지는 않습니다.
- {{domxref("HTMLElement.style")}}
  - : 요소의 스타일 속성의 정의를 나타내는 {{domxref("CSSStyleDeclaration")}} 객체입니다.
- {{domxref("HTMLElement.tabIndex")}}
  - : 탭 순서에서 요소의 위치를 나타내는 `long` 입니다.
- {{domxref("HTMLElement.title")}}
  - : 요소에 마우스를 오버할 때 팝업 상자에 표시되는 텍스트를 갖는 {{domxref("DOMString")}} 입니다.
- {{domxref("HTMLElement.translate")}} {{experimental_inline}}
  - : 번역을 나타내는 {{jsxref("Boolean")}} 입니다.

### 이벤트 핸들러

`onXYZ` 형태의 대부분의 이벤트 핸들러 속성은 {{domxref("GlobalEventHandlers")}} 또는 {{domxref("TouchEventHandlers")}} 에 정의되어 있으며 `HTMLElement` 에 의해 구현되었습니다. 다음 `HTMLElement` 에 해당하는 핸들러입니다.

- {{ domxref("HTMLElement.oncopy") }} {{ non-standard_inline() }}
  - : `copy` 이벤트를 위한 이벤트 핸들링 코드를 반환합니다([Firefox bug 280959](https://bugzil.la/280959)).
- {{ domxref("HTMLElement.oncut") }} {{ non-standard_inline() }}
  - : `cut` 이벤트를 위한 이벤트 핸들링 코드를 반환합니다([Firefox bug 280959](https://bugzil.la/280959)).
- {{ domxref("HTMLElement.onpaste") }} {{ non-standard_inline() }}
  - : `paste` 이벤트를 위한 이벤트 핸들링 코드를 반환합니다([Firefox bug 280959](https://bugzil.la/280959)).
- {{domxref("TouchEventHandlers.ontouchstart")}} {{non-standard_inline}}
  - : {{event("touchstart")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.
- {{domxref("TouchEventHandlers.ontouchend")}} {{non-standard_inline}}
  - : {{event("touchend")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.
- {{domxref("TouchEventHandlers.ontouchmove")}} {{non-standard_inline}}
  - : {{event("touchmove")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.
- {{domxref("TouchEventHandlers.ontouchenter")}} {{non-standard_inline}}
  - : {{event("touchenter")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.
- {{domxref("TouchEventHandlers.ontouchleave")}} {{non-standard_inline}}
  - : {{event("touchleave")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.
- {{domxref("TouchEventHandlers.ontouchcancel")}} {{non-standard_inline}}
  - : {{event("touchcancel")}} 이벤트를 위한 이벤트 핸들링 코드를 반환합니다.

## 메서드

_부모인 {{domxref("Element")}}의 메서드를 상속합니다._

- {{domxref("HTMLElement.blur()")}}
  - : 현재 포커스된 요소로부터 키보드 포커스를 제거합니다.
- {{domxref("HTMLElement.click()")}}
  - : 요소로 마우스 클릭 이벤트를 전달합니다.
- {{domxref("HTMLElement.focus()")}}
  - : 요소에 현재 키보드 포커스를 생성합니다.
- {{domxref("HTMLElement.forceSpellCheck()")}} {{experimental_inline}}
  - : 요소에 철자 확인자를 생성합니다.

## 이벤트

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- [`invalid`](/ko/docs/Web/API/HTMLElement/invalid_event)
  - : Fired when an element does not satisfy its constraints during constraint validation.
    Also available via the [`oninvalid`](/ko/docs/Web/API/GlobalEventHandlers/oninvalid) property.

### Animation events

- [`animationcancel`](/ko/docs/Web/API/HTMLElement/animationcancel_event)
  - : Fired when an animation unexpectedly aborts.
    Also available via the [`onanimationcancel`](/ko/docs/Web/API/GlobalEventHandlers/onanimationcancel) property.
- [`animationend`](/ko/docs/Web/API/HTMLElement/animationend_event)
  - : Fired when an animation has completed normally.
    Also available via the [`onanimationend`](/ko/docs/Web/API/GlobalEventHandlers/onanimationend) property.
- [`animationiteration`](/ko/docs/Web/API/HTMLElement/animationiteration_event)
  - : Fired when an animation iteration has completed.
    Also available via the [`onanimationiteration`](/ko/docs/Web/API/GlobalEventHandlers/onanimationiteration) property.
- [`animationstart`](/ko/docs/Web/API/HTMLElement/animationstart_event)
  - : Fired when an animation starts.
    Also available via the [`onanimationstart`](/ko/docs/Web/API/GlobalEventHandlers/onanimationstart) property.

### Input events

- [`beforeinput`](/ko/docs/Web/API/HTMLElement/beforeinput_event)
  - : Fired when the value of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element is about to be modified.
- [`input`](/ko/docs/Web/API/HTMLElement/input_event)
  - : Fired when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.
    Also available via the [`oninput`](/ko/docs/Web/API/GlobalEventHandlers/oninput) property.

### Pointer events

- [`gotpointercapture`](/ko/docs/Web/API/HTMLElement/gotpointercapture_event)
  - : Fired when an element captures a pointer using [`setPointerCapture()`](/ko/docs/Web/API/Element/setPointerCapture).
    Also available via the [`ongotpointercapture`](/ko/docs/Web/API/GlobalEventHandlers/ongotpointercapture) property.
- [`lostpointercapture`](/ko/docs/Web/API/HTMLElement/lostpointercapture_event)
  - : Fired when a [captured pointer](/ko/docs/Web/API/Pointer_events#Pointer_capture) is released.
    Also available via the [`onlostpointercapture`](/ko/docs/Web/API/GlobalEventHandlers/onlostpointercapture) property.
- [`pointercancel`](/ko/docs/Web/API/HTMLElement/pointercancel_event)
  - : Fired when a pointer event is canceled.
    Also available via the [`onpointercancel`](/ko/docs/Web/API/GlobalEventHandlers/onpointercancel) property.
- [`pointerdown`](/ko/docs/Web/API/HTMLElement/pointerdown_event)
  - : Fired when a pointer becomes active.
    Also available via the [`onpointerdown`](/ko/docs/Web/API/GlobalEventHandlers/onpointerdown) property.
- [`pointerenter`](/ko/docs/Web/API/HTMLElement/pointerenter_event)
  - : Fired when a pointer is moved into the hit test boundaries of an element or one of its descendants.
    Also available via the [`onpointerenter`](/ko/docs/Web/API/GlobalEventHandlers/onpointerenter) property.
- [`pointerleave`](/ko/docs/Web/API/HTMLElement/pointerleave_event)
  - : Fired when a pointer is moved out of the hit test boundaries of an element.
    Also available via the [`onpointerleave`](/ko/docs/Web/API/GlobalEventHandlers/onpointerleave) property.
- [`pointermove`](/ko/docs/Web/API/HTMLElement/pointermove_event)
  - : Fired when a pointer changes coordinates.
    Also available via the [`onpointermove`](/ko/docs/Web/API/GlobalEventHandlers/onpointermove) property.
- [`pointerout`](/ko/docs/Web/API/HTMLElement/pointerout_event)
  - : Fired when a pointer is moved out of the _hit test_ boundaries of an element (among other reasons).
    Also available via the [`onpointerout`](/ko/docs/Web/API/GlobalEventHandlers/onpointerout) property.
- [`pointerover`](/ko/docs/Web/API/HTMLElement/pointerover_event)
  - : Fired when a pointer is moved into an element's hit test boundaries.
    Also available via the [`onpointerover`](/ko/docs/Web/API/GlobalEventHandlers/onpointerover) property.
- [`pointerup`](/ko/docs/Web/API/HTMLElement/pointerup_event)
  - : Fired when a pointer is no longer active.
    Also available via the [`onpointerup`](/ko/docs/Web/API/GlobalEventHandlers/onpointerup) property.

### Transition events

- [`transitioncancel`](/ko/docs/Web/API/HTMLElement/transitioncancel_event)
  - : Fired when a [CSS transition](/ko/docs/CSS/Using_CSS_transitions) is canceled.
    Also available via the [`ontransitioncancel`](/ko/docs/Web/API/GlobalEventHandlers/ontransitioncancel) property.
- [`transitionend`](/ko/docs/Web/API/HTMLElement/transitionend_event)
  - : Fired when a [CSS transition](/ko/docs/CSS/Using_CSS_transitions) has completed.
    Also available via the [`ontransitionend`](/ko/docs/Web/API/GlobalEventHandlers/ontransitionend) property.
- [`transitionrun`](/ko/docs/Web/API/HTMLElement/transitionrun_event)
  - : Fired when a [CSS transition](/ko/docs/CSS/Using_CSS_transitions) is first created.
    Also available via the [`ontransitionrun`](/ko/docs/Web/API/GlobalEventHandlers/ontransitionrun) property.
- [`transitionstart`](/ko/docs/Web/API/HTMLElement/transitionstart_event)
  - : Fired when a [CSS transition](/ko/docs/CSS/Using_CSS_transitions) has actually started.
    Also available via the [`ontransitionstart`](/ko/docs/Web/API/GlobalEventHandlers/ontransitionstart) property.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Element")}}

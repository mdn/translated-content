---
title: GlobalEventHandlers
slug: orphaned/Web/API/GlobalEventHandlers
tags:
  - API
  - DOM
  - HTML DOM
  - Mixin
  - Reference
translation_of: Web/API/GlobalEventHandlers
original_slug: Web/API/GlobalEventHandlers
---
{{ApiRef("HTML DOM")}}

**`GlobalEventHandlers`** 믹스인mixin은 {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}} 등 여러 인터페이스가 공유하는 공통 이벤트 처리기를 묘사합니다. 물론, 각각의 인터페이스는 아래에 나열된 항목뿐만 아니라 더 많은 이벤트 처리기를 추가할 수 있습니다.

> **참고:** `GlobalEventHandlers`는 인터페이스가 아닌 믹스인입니다. 따라서 `GlobalEventHandlers` 자료형을 가진 객체를 만들 수는 없습니다.

## 속성

_이 인터페이스는 아래에 나열된 이벤트 처리기를 위한 속성만을 갖습니다._

### 이벤트 처리기

다음 이벤트 처리기들은 {{domxref("GlobalEventHandlers")}} 믹스인이 정의하고, {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}}와 웹 워커의 {{domxref("WorkerGlobalScope")}}가 구현합니다.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : {{event("abort")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}
  - : 실행 중이던 [CSS 애니메이션](/ko/docs/Web/CSS/CSS_Animations)이 취소됐음을 알리는 {{event("animationcancel")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}
  - : 실행 중이던 [CSS 애니메이션](/ko/docs/Web/CSS/CSS_Animations)이 끝났음을 알리는 {{event("animationend")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}
  - : 실행 중인 [CSS 애니메이션](/ko/docs/Web/CSS/CSS_Animations)의 다음 회차 재생이 시작됐음을 알리는 {{event("animationiteration")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}
  - : [CSS 애니메이션](/ko/docs/Web/CSS/CSS_Animations)의 재생이 시작됐음을 알리는 {{event("animationstart")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onauxclick")}} {{Non-standard_inline}}
  - : 마우스 휠 클릭 등 비주요 버튼이 눌렸음을 알리는 {{event("auxclick")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onblur")}}
  - : {{event("blur")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onerror")}}
  - : {{event("error")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{domxref("OnErrorEventHandler")}}.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : {{event("focus")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.oncancel")}}
  - : {{event("cancel")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.oncanplay")}}
  - : {{event("canplay")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.oncanplaythrough")}}
  - : {{event("canplaythrough")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : {{event("change")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : {{event("click")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : {{event("close")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : {{event("contextmenu")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.oncuechange")}}
  - : {{event("cuechange")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : {{event("dblclick")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondrag")}}
  - : {{event("drag")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondragend")}}
  - : {{event("dragend")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondragenter")}}
  - : {{event("dragenter")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondragexit")}}
  - : {{event("dragexit")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondragleave")}}
  - : {{event("dragleave")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondragover")}}
  - : {{event("dragover")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondragstart")}}
  - : {{event("dragstart")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondrop")}}
  - : {{event("drop")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ondurationchange")}}
  - : {{event("durationchange")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onemptied")}}
  - : {{event("emptied")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onended")}}
  - : {{event("ended")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ongotpointercapture")}}
  - : {{event("gotpointercapture")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.oninput")}}
  - : {{event("input")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.oninvalid")}}
  - : {{event("invalid")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : {{event("keydown")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : {{event("keypress")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : {{event("keyup")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onload")}}
  - : {{event("load")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onloadeddata")}}
  - : {{event("loadeddata")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onloadedmetadata")}}
  - : {{event("loadedmetadata")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onloadend")}}
  - : 자원의 불러오기가 멈췄음을 나타내는 {{event("loadend")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onloadstart")}}
  - : 자원을 불러오기 시작함을 나타내는 {{event("loadstart")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onlostpointercapture")}}
  - : {{event("lostpointercapture")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : {{event("mousedown")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onmouseenter")}}
  - : {{event("mouseenter")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onmouseleave")}}
  - : {{event("mouseleave")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : {{event("mousemove")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : {{event("mouseout")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : {{event("mouseover")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : {{event("mouseup")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onmousewheel")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : {{event("mousewheel")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}. `onwheel`을 대신 사용하세요.
- {{ domxref("GlobalEventHandlers.onwheel") }}
  - : {{event("wheel")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpause")}}
  - : {{event("pause")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onplay")}}
  - : {{event("play")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onplaying")}}
  - : {{event("playing")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointerdown")}}
  - : {{event("pointerdown")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointermove")}}
  - : {{event("pointermove")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointerup")}}
  - : {{event("pointerup")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointercancel")}}
  - : {{event("pointercancel")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointerover")}}
  - : {{event("pointerover")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointerout")}}
  - : {{event("pointerout")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointerenter")}}
  - : {{event("pointerenter")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointerleave")}}
  - : {{event("pointerleave")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointerlockchange")}} {{experimental_inline}}
  - : {{event("pointerlockchange")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onpointerlockerror")}} {{experimental_inline}}
  - : {{event("pointerlockerror")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onprogress")}}
  - : {{event("progress")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onratechange")}}
  - : {{event("ratechange")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : {{event("reset")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onresize")}}
  - : {{event("resize")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : {{event("scroll")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onseeked")}}
  - : {{event("seeked")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onseeking")}}
  - : {{event("seeking")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onselect")}}
  - : {{event("select")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onselectstart")}}
  - : 사용자가 웹 페이지의 텍스트 등을 선택하기 시작함을 나타내는 {{event("selectionchange")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : 웹 페이지의 선택 영역(텍스트 등)이 바뀌었음을 나타내는 {{event("selectionchange")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onshow")}}
  - : {{event("show")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onsort")}} {{experimental_inline}}
  - : {{event("sort")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onstalled")}}
  - : {{event("stalled")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : {{event("submit")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onsuspend")}}
  - : {{event("suspend")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ontimeupdate")}}
  - : {{event("timeupdate")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onvolumechange")}}
  - : {{event("volumechange")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ontouchcancel")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : {{event("touchcancel")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ontouchend")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : {{event("touchend")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ontouchmove")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : {{event("touchmove")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ontouchstart")}} {{Non-standard_inline}} {{Experimental_inline}}
  - : {{event("touchstart")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ontransitioncancel")}}
  - : [CSS 트랜지션](/ko/docs/Web/CSS/CSS_Transitions)이 취소됐음을 알리는 {{event("transitioncancel")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.ontransitionend")}}
  - : [CSS 트랜지션](/ko/docs/Web/CSS/CSS_Transitions)이 끝났음을 알리는 {{event("transitionend")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.
- {{domxref("GlobalEventHandlers.onwaiting")}}
  - : {{event("waiting")}} 이벤트가 발생했을 때 호출할 코드를 나타내는 {{event("Event_handlers", "event handler")}}.

## 메소드

이 인터페이스는 메서드를 정의하지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{domxref("Element")}}
- {{event("Event_handlers", "event handler")}}
- {{domxref("Event")}}

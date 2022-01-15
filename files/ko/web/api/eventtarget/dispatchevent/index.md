---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
tags:
  - API
  - DOM
  - DOM 엘리먼트 메소드
  - Gecko
  - 메소드
translation_of: Web/API/EventTarget/dispatchEvent
---
{{APIRef("DOM Events")}}

영향을 받는 {{domxref("EventListener")}} 를 적절한 순서로 호출하는 지정된 {{domxref("EventTarget")}} 에서 {{domxref("Event")}} 를 (동기적으로) 디스패치합니다. 일반 이벤트 처리 규칙(capturing 과 선택적인 bubbling 단계를 포함해)은 `dispatchEvent()` 를 사용하여 수동으로 전달 된 이벤트에도 적용됩니다.

<h2 id="Syntax" name="Syntax">구문</h2>

    cancelled = !target.dispatchEvent(event)

### 파라미터

- `event` 는 디스패치될 {{domxref("Event")}} 객체입니다.
- `target` 은 {{domxref("Event", "", "target")}} 를 초기화하기 위해서 사용되고 어떤 이벤트 리스너를 호출할 것인지 결정합니다.

### 반환 값

- 적어도 하나의 이벤트 핸들러가 그 이벤트를 처리하면서  {{domxref("Event.preventDefault()")}} 를 호출하였다면 `false` 를 반환하고 그렇지 않으면 `true` 를 반환합니다.

`dispatchEvent` 메서드는 그 이벤트의 타입이 메서드의 호출이전에 초기화되지 않았을 경우 `UNSPECIFIED_EVENT_TYPE_ERR` 에러를 발생시킵니다. 또는 이벤트의 타입이 `null` 이거나 공백 스트링을 경우에도 같은 에러를 발생시킵니다. 이벤트 핸들러에 의해 발생한 이벤트는 잡히지 않은 예외(uncaugt exceptions)로 보고가 되며 이벤트 핸들러는 내부 콜스택(nested callstack)에서 실행이 됩니다. 이는 곧 완료가 될 때까지 호출자(caller)를 막는 다는 뜻이고 예외들이 호출자(caller)에게 전파(propagate)되지 않음을 말합니다.

<h2 id="Notes" name="Notes">노트</h2>

DOM에 의해 시작되고 [이벤트 루프](https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop)를 통해 이벤트 핸들러를 비동기 적으로 호출하는 "네이티브" 이벤트와 달리 `dispatchEvent` 는 이벤트 핸들러를 동기적으로 호출합니다. `dispatchEvent` 를 호출 한 후 코드가 계속되기 전에 모든 해당 이벤트 핸들러가 실행되고 리턴됩니다.

implementation's 이벤트 모델의 디스패치 이벤트에 사용되는 create-init-dispatch 프로세스의 마지막 단계입니다. 이벤트는 [Event 생성자](https://developer.mozilla.org/ko/docs/Web/API/Event/Event)를 사용하여 만들 수 있습니다.

[Event 객체 레퍼런스](https://developer.mozilla.org/ko/docs/Web/API/Event "DOM/event")도 한번 확인해 보세요

<h2 id="Example" name="Example">예시</h2>

[이벤트 생성 및 트리거](https://developer.mozilla.org/ko/docs/Web/Guide/Events/Creating_and_triggering_events "/en-US/docs/Web/Guide/DOM/Events/Creating_and_triggering_events") 문서를 확인하세요.

<h2 id="Specification" name="Specification">명세</h2>

| 명세                                                                                                                     | 상태                             | 코멘트                         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------ |
| {{SpecName('DOM WHATWG', '#dom-eventtarget-dispatchevent', 'EventTarget.dispatchEvent()')}} | {{ Spec2('DOM WHATWG') }} | DOM 2 Events 명세의 초기 정의. |

<h2 id="Browser_Compatibility" name="Browser_Compatibility">브라우저 호환성</h2>





{{Compat("api.EventTarget.dispatchEvent")}}

---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
---

{{APIRef("DOM")}}

{{domxref("EventTarget")}} 인터페이스의 **`dispatchEvent()`** 메서드는 `EventTarget` 객체로 {{domxref("Event")}}를 발송해서, 해당 이벤트에 대해 등록된 {{domxref("EventListener")}}들을 (동기적으로) 순서대로 호출합니다. `dispatchEvent()`를 통해 직접 발송한 이벤트에도 캡처링과 버블링 단계를 포함한 일반적인 이벤트 처리 규칙이 적용됩니다.

`dispatchEvent()` 호출은 이벤트 발송 과정의 마지막 단계입니다. 발송에 앞서 우선 {{domxref("Event/Event", "Event()")}} 생성자로 이벤트를 생성 및 초기화해야 합니다.

> **참고:** `dispatchEvent()` 사용 시, {{domxref("Event.target")}} 속성은 현재 `EventTarget`으로 초기화됩니다.

브라우저가 발송하는 "네이티브" 이벤트는 [이벤트 루프](/ko/docs/Web/JavaScript/EventLoop)를 통해 비동기적으로 처리기들을 호출하지만, `dispatchEvent()`로 발송된 이벤트는 처리기를 동기적으로 호출합니다. 즉, 모든 적합한 처리기의 호출과 반환이 끝나야 `dispatchEvent()` 역시 반환합니다.

## 구문

```js
dispatchEvent(event);
```

### 매개변수

- `event`
  - : 발송할 {{domxref("Event")}} 객체입니다. {{domxref("Event.target")}}은 현재 {{domxref("EventTarget")}}으로 설정됩니다.

### 반환 값

`event`가 취소 가능하고, 이벤트 처리기 중 하나에서 {{domxref("Event.preventDefault()")}}를 호출한 경우 `false`, 그 외에는 `true`.

### 예외

- `InvalidStateError` {{domxref("DomException")}}
  - : 이벤트 초기화 시 이벤트 유형을 지정하지 않은 경우 발생합니다.

> **경고:** 이벤트 처리기에서 발생한 예외는 처리하지 않은 예외로 보고됩니다. 이벤트 처리기는 중첩 호출 스택에서 동작하므로, 실행이 끝날 때까지 호출자는 대기하지만, 예외는 호출자로 전파되지 않습니다.

## 예외

[이벤트 생성과 발동](/ko/docs/Web/Events/Creating_and_triggering_events)를 확인하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- The [Event object reference](/ko/docs/Web/API/Event)

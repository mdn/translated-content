---
title: Event.cancelable
slug: Web/API/Event/cancelable
---

{{ ApiRef("DOM") }}

{{domxref("Event")}} 인터페이스의 **`cancelable`** 읽기 전용 속성은 이벤트의 취소가 가능한지를 나타냅니다.

이벤트가 취소 불가능한 경우, 해당 이벤트의 `cancelable` 속성은 `false`이며 수신기에서 이벤트의 발생을 멈출 수 없습니다.

취소 가능한 브라우저 내장 이벤트는 대부분 사용자가 페이지와 상호작용해서 발생하는 이벤트입니다. 예컨대 [`click`](/ko/docs/Web/API/Element/click_event), {{domxref("Document/wheel_event", "wheel")}}, {{domxref("Window/beforeunload_event", "beforeunload")}} 이벤트를 취소하게 되면, 각각 사용자가 어떤 요소를 클릭하는 것, 페이지를 스크롤하는 것, 페이지에서 나가는 것을 막게 됩니다.

사용자 JavaScript 코드에서 생성하는 [합성 이벤트](/ko/docs/Web/API/Event/Event)의 경우, 이벤트를 초기화할 때 취소 가능 여부를 지정할 수 있습니다.

이벤트를 취소하려면 이벤트의 {{domxref("Event.preventDefault()", "preventDefault()")}} 메서드를 호출하세요. 해당 이벤트에 대한 기본 동작을 실행하지 않게 됩니다.

다양한 종류의 이벤트를 처리해야 하는 처리기의 경우 `preventDefault()`를 호출하기 전에 먼저 `cancelable` 속성의 값을 검사해야 할 수 있습니다.

## 값

이벤트를 취소할 수 있으면 `true`.

## 예제

브라우저 제공자들은 {{domxref("Document/wheel_event", "wheel")}} 이벤트를 [최초 수신 시점에만 취소할 수 있도록](https://github.com/WICG/interventions/issues/33) 제안하고 있습니다. 즉, 두 번째 `wheel` 이벤트부터는 취소할 수 없습니다.

```js
function preventScrollWheel(event) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    // 이벤트를 취소할 수 있으므로 취소함
    event.preventDefault();
  } else {
    // 이벤트를 취소할 수 없음
    // preventDefault() 호출이 안전하지 않음
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener("wheel", preventScrollWheel);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

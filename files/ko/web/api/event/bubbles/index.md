---
title: Event.bubbles
slug: Web/API/Event/bubbles
---

{{ ApiRef("DOM") }}

{{domxref("Event")}} 인터페이스의 **`bubbles`** 읽기 전용 속성은 이벤트가 DOM 트리를 타고 위쪽으로 버블링되는지 나타냅니다.

> **참고:** [이벤트 버블링과 캡처](/ko/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)에서 버블링에 대한 자세한 정보를 알아보세요.

## 값

이벤트가 DOM 트리를 타고 버블링하면 `true`인 불리언 값입니다.

## 예제

```js
function handleInput(e) {
  // 이벤트의 버블링 여부를 확인해서...
  if (!e.bubbles) {
    // ... 버블링 하지 않으면 이벤트를 넘겨주기
    passItOn(e);
  }

  // 이미 버블링
  doOutput(e);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Event.stopPropagation", "stopPropagation()")}}으로 캡처링/버블링 단계에서 이벤트의 추가 전파를 막을 수 있습니다.
- {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}으로 같은 DOM 레벨의 다른 이벤트 수신기들이 현재 이벤트에 발동하지 않도록 막을 수 있습니다.
- {{domxref("Event.preventDefault", "preventDefault()")}}는 이벤트의 전파를 막지는 않지만, 이벤트에 대한 브라우저의 기본 동작을 비활성화합니다.

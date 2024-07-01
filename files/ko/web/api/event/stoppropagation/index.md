---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
---

{{APIRef("DOM")}}

{{domxref("Event")}} 인터페이스의 **`stopPropagation()`** 메서드는 현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지합니다. 전파를 방지해도 이벤트의 기본 동작은 실행되므로, `stopPropagation()`이 링크나 버튼의 클릭을 막는 것은 아닙니다. 이런 기본 동작을 방지하려면 {{domxref("Event.preventDefault()", "preventDefault()")}} 메서드를 사용하세요. 또한, `stopPropagation()`은 같은 이벤트 대상에 부착한 다른 수신기까지 막지는 않습니다. 이것까지 막으려면 {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}를 사용하세요.

## 구문

```js
event.stopPropagation();
```

## 예제

[이벤트 전파](/ko/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation)를 확인하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

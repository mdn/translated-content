---
title: Event.stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
tags:
  - Method
  - Reference
browser-compat: api.Event.stopImmediatePropagation
translation_of: Web/API/Event/stopImmediatePropagation
---
{{APIRef("DOM")}}

{{domxref("Event")}} 인터페이스의 **`stopImmediatePropagation()`** 메서드는 같은 이벤트에 대해 나머지 수신기가 발동하지 못하도록 방지합니다.

같은 이벤트 유형에 대한 다수의 수신기를 하나의 요소에 부착한 경우, 각각의 수신기 호출 순서는 부착 순서와 동일합니다. 그 수신기들 중 하나에서 `stopImmediatePropagation()` 메서드를 호출하면 그 이후의 나머지 수신기들은 호출되지 않습니다.

## 구문

```js
event.stopImmediatePropagation();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

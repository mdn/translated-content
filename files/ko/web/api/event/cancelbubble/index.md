---
title: Event.cancelBubble
slug: Web/API/Event/cancelBubble
---

{{Deprecated_Header}}

{{APIRef("DOM")}}

**Event.cancelBubble** 속성은 {{domxref("Event.stopPropagation()")}}의 별칭입니다. 이벤트 핸들러에서 반환되기 전에 값을 true로 설정하면 이벤트가 전파되지 않습니다.

## 예제

```js
elem.onclick = function (event) {
  // Do cool things here
  event.cancelBubble = true;
};
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

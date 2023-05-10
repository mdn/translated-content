---
title: GlobalEventHandlers.onpointerenter
slug: Web/API/Element/pointerenter_event
original_slug: Web/API/GlobalEventHandlers/onpointerenter
---

{{ApiRef("HTML DOM")}}

{{domxref("GlobalEventHandlers")}} mixin의 **`onpointerenter`** property는 {{event("pointerenter")}} 이벤트를 처리하는 {{event("Event_handlers", "event handler")}} 이다.

## Syntax

```js
targetElement.onpointerenter = enterHandler;

var enterHandler = targetElement.onpointerenter;
```

### Value

- `enterHandler`
  - : The `pointerenter` event handler for element `targetElement`.

## Example

아래 예제는 element의 `pointerenter` 이벤트 핸들러를 설정하는 `onpointerenter` 의 2가지 사용법을 보여준다.

```html
<html>
<script>
function enterHandler(ev) {
  // pointerenter event처리
}
function init() {
  let el = document.getElementById('target1');
  el.onpointerenter = enterHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerenter="enterHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [`Document: pointerenter`](/en-US/docs/Web/API/Document/pointerenter_event) event
- [`HTMLElement: pointerenter`](/en-US/docs/Web/API/HTMLElement/pointerenter_event) event

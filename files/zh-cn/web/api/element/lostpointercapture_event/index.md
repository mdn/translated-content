---
title: GlobalEventHandlers.onlostpointercapture
slug: Web/API/Element/lostpointercapture_event
---

{{ApiRef("HTML DOM")}}

The **`onlostpointercapture`** event handler property of the {{domxref("GlobalEventHandlers")}} interface returns the event handler (function) for the `lostpointercapture` event type.

## 语法

```plain
window.onlostpointercapture = functionReference
```

## 示例

```js
<html>
<script>
function overHandler(ev) {
 // Determine the target event's lostpointercapture handler
 var lostCaptureHandler = ev.target.onlostpointercapture;
}
function init() {
 var el=document.getElementById("target");
 el.onlostpointercapture = overHandler;
}
</script>
<body onload="init();">
<div id="target"> Touch me ... </div>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关事件

  - [`gotpointercapture`](/zh-CN/docs/Web/API/Element/gotpointercapture_event)
  - [`pointerover`](/zh-CN/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/zh-CN/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/zh-CN/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/zh-CN/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/zh-CN/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/zh-CN/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/zh-CN/docs/Web/API/Element/pointerleave_event)

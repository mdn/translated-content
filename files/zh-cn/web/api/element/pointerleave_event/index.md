---
title: GlobalEventHandlers.onpointerleave
slug: Web/API/Element/pointerleave_event
---

{{APIRef("HTML DOM")}}

就像在{{domxref("Element")}}或{{domxref("Window")}}中点击类似，在某目标区域内，发生触点（鼠标指针，触摸等）行为时会触发源于 `pointerleave` 事件{{domxref("GlobalEventHandlers","global event handler", "", 1)}}行为。这个事件本身属于 [Pointer Events API](/zh-CN/docs/Web/API/Pointer_events) 的一部分。

## 语法

```plain
var leaveHandler = EventTarget.onpointerleave;

EventTarget.onpointerleave = leaveHandler;
```

### 返回值

- `leaveHandler`
  - : `pointerleave` 事件会执行{{domxref("EventListener")}} 监听器会委托执行用以发送给目标。

## 样例

这个样例展示了两种使用 `onpointerleave` 来设置元素 `pointerleave` 事件处理器的方式。

```js
<html>
<script>
function leaveHandler(ev) {
 // 执行 pointerleave event 事件
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerleave = leaveHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointerleave="leaveHandler(event)"> Touch me ... </div>
</body>
</html>
```

查看 [Using Pointer Events](/zh-CN/docs/Web/API/Pointer_events/Using_Pointer_Events) 以了解更多详情。

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 相关事件
  - [`gotpointercapture`](/zh-CN/docs/Web/API/Element/gotpointercapture_event)
  - [`lostpointercapture`](/zh-CN/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/zh-CN/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/zh-CN/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/zh-CN/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/zh-CN/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/zh-CN/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/zh-CN/docs/Web/API/Element/pointerout_event)

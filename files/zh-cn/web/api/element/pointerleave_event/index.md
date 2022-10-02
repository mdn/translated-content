---
title: GlobalEventHandlers.onpointerleave
slug: Web/API/Element/pointerleave_event
---

{{APIRef("HTML DOM")}}

就像在{{domxref("Element")}}或{{domxref("Window")}}中点击类似，在某目标区域内，发生触点（鼠标指针，触摸等）行为时会触发源于{{event("pointerleave")}}事件{{domxref("GlobalEventHandlers","global event handler", "", 1)}}行为。这个事件本身属于 [Pointer Events API](/zh-CN/docs/Web/API/Pointer_events) 的一部分。

## 语法

```plain
var leaveHandler = EventTarget.onpointerleave;

EventTarget.onpointerleave = leaveHandler;
```

### 返回值

- `leaveHandler`
  - : {{event("pointerleave")}} 事件会执行{{domxref("EventListener")}} 监听器会委托执行用以发送给目标。

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

## 浏览器支持情况

{{Compat}}

## 参考

- [Pointer events](/zh-CN/docs/Web/API/Pointer_events)
- [Using pointer events](/zh-CN/docs/Web/API/Pointer_events/Using_Pointer_Events)
- {{event("pointerleave")}} 以及它实现的 {{domxref("PointerEvent")}} 接口

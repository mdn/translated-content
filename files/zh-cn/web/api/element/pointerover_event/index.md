---
title: Element：pointerover 事件
slug: Web/API/Element/pointerover_event
---

{{APIRef}}

The `pointerover` event is fired when a pointing device is moved into an element's hit test boundaries.

## 语法

```plain
var overHandler = targetElement.onpointerover;
```

### 返回值

- `overHandler`
  - : pointerover 事件处理器返回目标元素的`overHandler.`

## 案例

这里使用两种方式展示了如何去使用 _onpointerover_ 去设置一个元素的 _pointerover_ 事件处理器

```js
<html>
<script>
function overHandler(ev) {
 // Process the pointerover event
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerover = overHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointerover="overHandler(event)"> Touch me ... </div>
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
  - [`lostpointercapture`](/zh-CN/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerenter`](/zh-CN/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/zh-CN/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/zh-CN/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/zh-CN/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/zh-CN/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/zh-CN/docs/Web/API/Element/pointerleave_event)

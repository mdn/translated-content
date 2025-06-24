---
title: GlobalEventHandlers.onpointercancel
slug: Web/API/Element/pointercancel_event
---

{{ApiRef("HTML DOM")}}

A {{domxref("GlobalEventHandlers","global event handler")}} for the `pointercancel` event.

## 语法

```plain
var cancelHandler = targetElement.onpointercancel;
```

### 返回值

- `cancelHandler`
  - : 元素`targetElement` 的 _pointercancel_ 事件处理器。

## 示例

该示例展示使用 _onpointercancel 设置一个元素的_ _pointercancel_ 事件处理器的两个方法。

```js
<html>
<script>
function cancelHandler(ev) {
 // 处理 pointercancel 事件
}
function init() {
 var el=document.getElementById("target1");
 el.onpointercancel = cancelHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointercancel="cancelHandler(event)"> Touch me ... </div>
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
  - [`pointerover`](/zh-CN/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/zh-CN/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/zh-CN/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/zh-CN/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/zh-CN/docs/Web/API/Element/pointerup_event)
  - [`pointerout`](/zh-CN/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/zh-CN/docs/Web/API/Element/pointerleave_event)

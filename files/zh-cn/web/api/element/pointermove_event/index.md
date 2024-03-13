---
title: GlobalEventHandlers.onpointermove
slug: Web/API/Element/pointermove_event
---

{{ApiRef("HTML DOM")}}

一个{{domxref("GlobalEventHandlers","global event handler")}}(全局事件) `pointermove` 事件。

## 语法

```plain
var moveHandler = targetElement.onpointermove;
```

### 返回值

- `moveHandler`
  - : 返回 `targetElement` 元素的 pointermove 事件处理函数。

## 示例

下面展示了两种设置元素 pointermove 事件处理函数的方法。

```js
<html>
<script>
function moveHandler(ev) {
 // 此处添加事件处理语句
}
function init() {
 var el=document.getElementById("target1");
 el.onpointermove = moveHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointermove="moveHandler(event)"> Touch me ... </div>
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
  - [`pointerup`](/zh-CN/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/zh-CN/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/zh-CN/docs/Web/API/Element/pointerleave_event)

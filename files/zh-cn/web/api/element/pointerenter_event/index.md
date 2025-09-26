---
title: GlobalEventHandlers.onpointerenter
slug: Web/API/Element/pointerenter_event
---

{{APIRef}}

HTML DOMpointerenter 事件的 GlobalEventHandlers（全局事件处理函数）

```js
var enterHandler = targetElement.onpointerenter;
```

### 返回值

- `enterHandler`
  - : `targetElement`的 pointerenter 事件处理函数。

## 示例

这个例子展示了使用 onpointerenter 来设置元素 pointerenter 事件处理函数的两种方式*。*

```js
<html>
<script>
function enterHandler(ev) {
 // 处理 pointerenter 事件
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerenter = enterHandler;
}
</script>
<body onload="init();">
<div id="target1"> 点我 ... </div>
<div id="target2" onpointerenter="enterHandler(event)"> 点我 ... </div>
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
  - [`pointerdown`](/zh-CN/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/zh-CN/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/zh-CN/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/zh-CN/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/zh-CN/docs/Web/API/Element/pointerleave_event)

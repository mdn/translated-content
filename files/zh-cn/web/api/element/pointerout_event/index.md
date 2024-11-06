---
title: GlobalEventHandlers.onpointerout
slug: Web/API/Element/pointerout_event
---

{{ApiRef("HTML DOM")}}

一个{{domxref("GlobalEventHandlers","global event handler")}} 用于处理 `pointerout` 事件。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("pointerout", (event) => {});

onpointerout = (event) => {};
```

### 返回值

- `outHandler`
  - : 元素`targetElement`的指针输出事件处理程序。

## 示例

这个例子展示了两种方式来使用 onpointerout 设置元素的 pointerout 事件处理程序。

```js
<html>
<script>
function outHandler(ev) {
 // Process the pointerout event
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerout = outHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointerout="outHandler(event)"> Touch me ... </div>
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
  - [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event)
  - [`pointerleave`](/zh-CN/docs/Web/API/Element/pointerleave_event)

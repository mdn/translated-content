---
title: GlobalEventHandlers.onpointerup
slug: Web/API/Element/pointerup_event
---

{{ApiRef("HTML DOM")}}

`pointerup` 是一个全局的事件处理函数。

## 语法

```plain
var upHandler = targetElement.onpointerup;
```

### 返回值

- `upHandler`
  - : 返回 `targetElement` 元素的`pointerup`事件处理函数。

## 示例

如下是两种设置元素`pointerup`事件处理函数的方法。

```js
<html>
<script>
function upHandler(ev) {
 // 这里添加元素的 pointup 事件处理函数
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerup = upHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointerup="upHandler(event)"> Touch me ... </div>
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
  - [`pointercancel`](/zh-CN/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/zh-CN/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/zh-CN/docs/Web/API/Element/pointerleave_event)

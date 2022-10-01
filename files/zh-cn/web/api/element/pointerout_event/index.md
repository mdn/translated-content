---
title: GlobalEventHandlers.onpointerout
slug: Web/API/Element/pointerout_event
---

{{ApiRef("HTML DOM")}}

一个{{domxref("GlobalEventHandlers","global event handler")}} 用于处理 {{event("pointerout")}} 事件。

## 语法

```
var outHandler = targetElement.onpointerout;
```

### 返回值

- `outHandler`
  - : 元素`targetElement`的指针输出事件处理程序。

## 例子

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

## 相关链接

- {{event("pointerout")}}

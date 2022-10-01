---
title: 全局事件处理器.onpointerover
slug: Web/API/Element/pointerover_event
---

{{ApiRef("HTML DOM")}}

A {{domxref("GlobalEventHandlers","global event handler")}} for the {{event("pointerover")}} event.

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

- {{event("pointerover")}}

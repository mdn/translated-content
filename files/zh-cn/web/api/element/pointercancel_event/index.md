---
title: GlobalEventHandlers.onpointercancel
slug: Web/API/Element/pointercancel_event
---

{{ApiRef("HTML DOM")}}

A {{domxref("GlobalEventHandlers","global event handler")}} for the {{event("pointercancel")}} event.

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

- {{ event("pointercancel") }}

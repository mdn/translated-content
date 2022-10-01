---
title: GlobalEventHandlers.onpointermove
slug: Web/API/Element/pointermove_event
---

{{ApiRef("HTML DOM")}}

一个{{domxref("GlobalEventHandlers","global event handler")}}(全局事件) {{event("pointermove")}} 事件。

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

## 相关链接

- {{event("pointermove")}}

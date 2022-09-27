---
title: GlobalEventHandlers.onpointerup
slug: Web/API/Element/pointerup_event
---

{{ApiRef("HTML DOM")}}

`pointerup`是一个全局的事件处理函数。

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

## 相关链接

- [{{event("pointerup")}}](/zh-CN/docs/Web/Events/pointerup)

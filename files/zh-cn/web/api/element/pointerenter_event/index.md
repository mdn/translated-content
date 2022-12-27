---
title: GlobalEventHandlers.onpointerenter
slug: Web/API/Element/pointerenter_event
---

HTML DOMpointerenter 事件的 GlobalEventHandlers（全局事件处理函数）

```js
var enterHandler = targetElement.onpointerenter;
```

### 返回值

- `enterHandler`
  - : `targetElement`的 pointerenter 事件处理函数。

## 例子

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

## 相关链接

- {{ event("pointerenter") }}

---
title: GlobalEventHandlers.onpointerdown
slug: Web/API/Element/pointerdown_event
---

{{ApiRef("HTML DOM")}}

{{event("pointerdown")}} 事件的 {{domxref("GlobalEventHandlers","全局事件处理程序")}}

## 语法

```plain
var downHandler = targetElement.onpointerdown;
```

### 返回值

- `downHandler`
  - : _pointerdown_ 事件触发对象的事件处理程序。

## 示例

当前示例展示两种方式使用 _onpointerdown_ 去设置元素的 pointerdown 事件处理程序。

```js
<html>
<script>
function downHandler(ev) {
 // Process the pointerdown event
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerdown = downHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointerdown="downHandler(event)"> Touch me ... </div>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器支持

{{Compat}}

## 参阅

- {{ event("pointerdown") }}

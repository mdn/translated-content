---
title: GlobalEventHandlers.ontouchmove
slug: Web/API/Element/touchmove_event
---
{{ApiRef("HTML DOM")}}

A {{domxref("GlobalEventHandlers","global event handler")}} for the {{event("touchmove")}} event.

## 语法

```plain
var moveHandler = someElement.ontouchmove;
```

### Return value

- `moveHandler`
  - : `someElement`元素的 _touchmove 事件处理句柄/函数。_

## 例子

这个例子展示了两种通过 _ontouchmove_ 设置元素的 _touchmove 事件处理句柄/函数的方式。_

```js
<html>
<script>

function moveTouch(ev) {
 // 处理事件
}

function init() {
 var el=document.getElementById("target1");
 el.ontouchmove = moveTouch;
}

<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" ontouchmove="moveTouch(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("touchmove") }}

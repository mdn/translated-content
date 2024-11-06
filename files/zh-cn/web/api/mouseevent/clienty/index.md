---
title: MouseEvent.clientY
slug: Web/API/MouseEvent/clientY
---

{{APIRef("UI Events")}}

**`MouseEvent.clientY`** 是只读属性，它提供事件发生时的应用客户端区域的垂直坐标 (与页面坐标不同)。例如，当你点击客户端区域的左上角时，鼠标事件的 `clientY` 值为 0，这一值与页面是否有垂直滚动无关。

## 语法

```plain
var y = instanceOfMouseEvent.clientY
```

### Return value

被 CSSOM View Module 重新定义为一个 `double` 类型的浮点值。原来这个属性是被定义为一个 `long` 整数。可以在 "浏览器兼容性" 那里查看详细内容。

### Example

```js
<html>
<head>
<title>clientX\clientY example</title>

<script type="text/javascript">
function showCoords(evt){
  alert(
    "clientX value: " + evt.clientX + "\n"
    + "clientY value: " + evt.clientY + "\n"
  );
}
</script>
</head>

<body onmousedown="showCoords(event)">
<p>To display the mouse coordinates click anywhere on the page.</p>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- {{ domxref("MouseEvent") }}
- {{domxref("MouseEvent.clientX","clientX")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}

---
title: MouseEvent.clientX
slug: Web/API/MouseEvent/clientX
---

{{APIRef("DOM Events")}}

**`MouseEvent.clientX`** 是只读属性，它提供事件发生时的应用客户端区域的水平坐标 (与页面坐标不同)。例如，不论页面是否有水平滚动，当你点击客户端区域的左上角时，鼠标事件的 `clientX` 值都将为 0。最初这个属性被定义为长整型（long integer），如今 **CSSOM** 视图模块将其重新定义为双精度浮点数（double float）。你可以查阅浏览器兼容性部分的文档来进一步了解有关信息。

## 语法

```plain

var x = instanceOfMouseEvent.clientX
```

### `返回值`

被 CSSOM View Module 重新定义为一个 `double` 类型的浮点值。原来这个属性是被定义为一个 `long` 整数。可以在 "浏览器兼容性" 那里查看详细内容。

## 示例

```html
<!doctype html>
<html>
  <head>
    <title>clientX/clientY example</title>

    <script>
      function showCoords(evt) {
        alert(
          "clientX value: " +
            evt.clientX +
            "\n" +
            "clientY value: " +
            evt.clientY +
            "\n",
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

## 相关

- {{ domxref("MouseEvent") }}
- {{domxref("event.clientY","clientY")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}

---
title: DocumentOrShadowRoot.elementFromPoint()
slug: Web/API/Document/elementFromPoint
---

{{APIRef("Shadow DOM")}}{{SeeCompatTable}}

{{domxref("DocumentOrShadowRoot")}} 接口的 **`elementFromPoint()`** 方法返回给定坐标点下最上层的 {{domxref('element')}} 元素。

If the element at the specified point belongs to another document (for example, an iframe's subdocument), the subdocument's parent element is returned (the iframe itself). If the element at the given point is anonymous or XBL generated content, such as a textbox's scroll bars, then the first non-anonymous ancestor element (for example, the textbox) is returned.

如果指定的坐标点在文档的可视范围外，或者两个坐标都是负数，那么结果返回 `null`。

If you need to find the specific position inside the element, use {{domxref("Document.caretPositionFromPoint()")}}.

## Syntax

```
var element = document.elementFromPoint(x, y);
```

### Parameters

- x
  - : 坐标点的横坐标。
- y
  - : 坐标点的纵坐标。

### Returns

在给定的坐标点处的顶端 {{domxref("Element")}}（译者注：如果元素层叠的话，返回最上层的元素）。

## 示例

```html
<!doctype html>
<html lang="en">
  <head>
    <title>elementFromPoint example</title>

    <script>
      function changeColor(newColor) {
        elem = document.elementFromPoint(2, 2);
        elem.style.color = newColor;
      }
    </script>
  </head>

  <body>
    <p id="para1">Some text here</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>
```

### Demo

{{ EmbedLiveSample('示例') }}

## Specifications

{{Specifications}}

## Browser Compatibility

{{Compat}}

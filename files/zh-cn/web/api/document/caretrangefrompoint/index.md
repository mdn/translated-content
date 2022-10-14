---
title: Document.caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
---

{{APIRef("DOM")}}{{Non-standard_header}}

{{domxref("Document")}} 的 **`caretRangeFromPoint()`** 方法返回一个 Range 对象（指定坐标的文档片段）。

## 语法

```js
var range = document.caretRangeFromPoint(float x, float y);
```

### 返回

其中一项：

- A {{domxref("Range")}}.
- `Null`, 若 **x** 或 **y** 不存在、在视图外或在没有文本节点的位置。

### 参数

- x
  - : 当前视图的横向位置。
- y
  - : 当前视图的纵向位置。

## 示例

Basic demo: 点击文档，在点击的位置插入一行。

### HTML Content

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
```

### JavaScript Content

```js
function insertBreakAtPoint(e) {

    var range;
    var textNode;
    var offset;

    if (document.caretPositionFromPoint) {
        range = document.caretPositionFromPoint(e.clientX, e.clientY);
        textNode = range.offsetNode;
        offset = range.offset;

    } else if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(e.clientX, e.clientY);
        textNode = range.startContainer;
        offset = range.startOffset;
    }

    // only split TEXT_NODEs
    if (textNode && textNode.nodeType == 3) {
        var replacement = textNode.splitText(offset);
        var br = document.createElement('br');
        textNode.parentNode.insertBefore(br, replacement);
    }
}

var paragraphs = document.getElementsByTagName("p");
for (i=0 ; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", insertBreakAtPoint, false);
}
```

{{ EmbedLiveSample('示例') }}

## 浏览器兼容性

{{Compat}}

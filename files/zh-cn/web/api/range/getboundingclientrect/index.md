---
title: Range.getBoundingClientRect()
slug: Web/API/Range/getBoundingClientRect
---

{{ApiRef("DOM")}}{{SeeCompatTable}}

**`Range.getBoundingClientRect()`** 返回一个 {{ domxref("DOMRect") }} 对象，该对象将范围中的内容包围起来；即该对象是一个将范围内所有元素的边界矩形包围起来的矩形（译者注：关于边界矩形，可以参考 [Minimum Bouding Rectangles](https://en.wikipedia.org/wiki/Minimum_bounding_rectangle)）。

此方法可用于确定文本区域中选中的部分或光标的视窗坐标。关于返回值的详细信息，参见 {{domxref("Element.getBoundingClientRect()")}}。

## 语法

```plain
boundingRect = range.getBoundingClientRect()
```

## 示例

### HTML

```html
<div id="highlight"></div>
<p>
  This example positions a "highlight" rectangle behind the contents of a range.
  The range's content <b>starts here</b> and continues on until it
  <b>ends here</b>. The bounding client rectangle contains everything selected
  in the range.
</p>
```

### CSS

```css
#highlight {
  background: yellow;
  position: absolute;
  z-index: -1;
}

p {
  width: 200px;
}
```

### JavaScript

```js
const range = document.createRange();
range.setStartBefore(document.getElementsByTagName("b").item(0), 0);
range.setEndAfter(document.getElementsByTagName("b").item(1), 0);

const clientRect = range.getBoundingClientRect();
const highlight = document.getElementById("highlight");
highlight.style.left = `${clientRect.x}px`;
highlight.style.top = `${clientRect.y}px`;
highlight.style.width = `${clientRect.width}px`;
highlight.style.height = `${clientRect.height}px`;
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Range.getClientRects()")}} - 对于非矩形的范围（如选择部分换行了）会返回更细致的结果。
- {{domxref("Element.getBoundingClientRect()")}}
- {{domxref("Document.caretPositionFromPoint()")}} - 使用视窗坐标获取节点范围。

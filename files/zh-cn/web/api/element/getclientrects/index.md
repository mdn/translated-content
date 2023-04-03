---
title: Element.getClientRects()
slug: Web/API/Element/getClientRects
---

{{ APIRef("DOM") }}

**`Element.getClientRects()`** 方法返回一个指向客户端中每一个盒子的边界矩形的矩形集合。

## 语法

```js-nolint
getClientRects()
```

### 返回值

返回值是 ClientRect 对象集合，该对象是与该元素相关的 CSS 边框。每个 {{DOMxRef("DOMRect")}} 对象以像素为单位描述了边界矩形，这些值是边界矩形的 top-left 相对于视口的 top-left 的。即使当表格的标题在表格的边框外面，该标题仍会被计算在内。

当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作。

返回的矩形不包括任何可能超出元素范围的子元素的边界。

对于 HTML AREA 元素、自身不做任何渲染的 SVG 元素、display：none 元素和不直接渲染出来的任何元素，都将会返回一个空列表。

具有空边框的 CSS 盒子也会返回矩形，此时 left、top、right 和 bottom 坐标仍旧有意义。

小数级别的像素偏移是有可能的。

## 示例

These examples draw client rects in various colors. Note that the JavaScript function that paints the client rects is connected to the markup via the class `withClientRectsOverlay`.

### HTML

示例 1：HTML 创建了三段带有 `<span>` 的段落 `<p>` 并放入 `<div>` 中。在第二个段落 `<p>` 上绘制了客户矩形。在第三个段落 `<p>` 的 `<span>` 元素上绘制了客户矩形。

```html
<h3>A paragraph with a span inside</h3>
<p>
  Both the span and the paragraph have a border set. The client rects are in
  red. Note that the p has only one border box, while the span has multiple
  border boxes.
</p>

<div>
  <strong>Original</strong>
  <p>
    <span>Paragraph that spans multiple lines</span>
  </p>
</div>

<div>
  <strong>p's rect</strong>
  <p class="withClientRectsOverlay">
    <span>Paragraph that spans multiple lines</span>
  </p>
</div>

<div>
  <strong>span's rect</strong>
  <p>
    <span class="withClientRectsOverlay"
      >Paragraph that spans multiple lines</span
    >
  </p>
</div>
```

示例 2：HTML 创建了 3 个有序列表。在第二个列表的 `<ol>` 上绘制了客户矩形，在第三个列表的 `<li>` 上绘制了客户矩形。

```html
<h3>A list</h3>
<p>
  Note that the border box doesn't include the number, so neither do the client
  rects.
</p>

<div>
  <strong>Original</strong>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>ol's rect</strong>
  <ol class="withClientRectsOverlay">
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>each li's rect</strong>
  <ol>
    <li class="withClientRectsOverlay">Item 1</li>
    <li class="withClientRectsOverlay">Item 2</li>
  </ol>
</div>
```

示例 3：HTML 创建了两个带有标题的表。第二个表上绘制了客户矩形。

```html
<h3>A table with a caption</h3>
<p>
  Although the table's border box doesn't include the caption, the client rects
  do include the caption.
</p>

<div>
  <strong>Original</strong>
  <table>
    <caption>
      caption
    </caption>
    <thead>
      <tr>
        <th>thead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tbody</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <strong>table's rect</strong>
  <table class="withClientRectsOverlay">
    <caption>
      caption
    </caption>
    <thead>
      <tr>
        <th>thead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tbody</td>
      </tr>
    </tbody>
  </table>
</div>
```

### CSS

使用 CSS 给第一举例的每个 div 内部的段落和 span、第二个举例的 ol 和 li 周围、第三个举例 的 table/th/td 元素周围绘制了边框。

```css
strong {
  text-align: center;
}
div {
  display: inline-block;
  width: 150px;
}
div p,
ol,
table {
  border: 1px solid blue;
}
span,
li,
th,
td {
  border: 1px solid green;
}
```

### JavaScript

JavaScript 代码为所有带有 `widthClientRectsOverlay` 样式的元素绘制了 ClientRects。

```js
function addClientRectsOverlay(elt) {
  /* Absolutely position a div over each client rect so that its border width
     is the same as the rectangle's width.
     Note: the overlays will be out of place if the user resizes or zooms. */
  const rects = elt.getClientRects();
  for (const rect of rects) {
    const tableRectDiv = document.createElement("div");
    tableRectDiv.style.position = "absolute";
    tableRectDiv.style.border = "1px solid red";
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft =
      document.documentElement.scrollLeft || document.body.scrollLeft;
    tableRectDiv.style.margin = tableRectDiv.style.padding = "0";
    tableRectDiv.style.top = `${rect.top + scrollTop}px`;
    tableRectDiv.style.left = `${rect.left + scrollLeft}px`;
    // We want rect.width to be the border width, so content width is 2px less.
    tableRectDiv.style.width = `${rect.width - 2}px`;
    tableRectDiv.style.height = `${rect.height - 2}px`;
    document.body.appendChild(tableRectDiv);
  }
}

(() => {
  /* Call function addClientRectsOverlay(elt) for all elements with
     assigned class "withClientRectsOverlay" */
  const elts = document.getElementsByClassName("withClientRectsOverlay");
  for (const elt of elts) {
    addClientRectsOverlay(elt);
  }
})();
```

### 结果

{{ EmbedLiveSample('示例', 680, 650) }}

## 规范

{{Specifications}}

### 备注

`getClientRects()` 在 MS IE DHTML 对象模型中首次引入。

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Element.getBoundingClientRect()")}}

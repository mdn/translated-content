---
title: Element.getClientRects()
slug: Web/API/Element/getClientRects
---

{{ APIRef("DOM") }}

**`Element.getClientRects()`** 方法返回一个指向客户端中每一个盒子的边界矩形的矩形集合。

## 语法

```
var rectCollection = object.getClientRects();
```

### 返回值

返回值是 ClientRect 对象集合，该对象是与该元素相关的 CSS 边框。每个 ClientRect 对象包含一组描述该边框的只读属性——left、top、right 和 bottom，单位为像素，这些属性值是相对于视口的 top-left 的。即使当表格的标题在表格的边框外面，该标题仍会被计算在内。

起初，微软打算让这个方法给文本的每一行都返回一个 TextRectangle，但是，CSSOM 工作草案规定它应该给每个边框返回一个 ClientRect。因此，对于行内元素这两个定义是相同的，但是对于块级元素，Mozilla 只会返回一个矩形。（译者注：对于行内元素，元素内部的每一行都会有一个边框；对于块级元素，如果里面没有其他元素，一整块元素只有一个边框）。

{{ fx_minversion_note(3.5, "FireFox 3.5 给 TextRectangle 对象添加了 width 和 height 属性") }}

当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作。

返回的矩形不包括任何可能超出元素范围的子元素的边界。

对于 HTML AREA 元素、自身不做任何渲染的 SVG 元素、display：none 元素和不直接渲染出来的任何元素，都将会返回一个空列表。

具有空边框的 CSS 盒子也会返回矩形，此时 left、top、right 和 bottom 坐标仍旧有意义。

小数级别的像素偏移是有可能的。

## 示例

These examples draw client rects in various colors. Note that the JavaScript function that paints the client rects is connected to the markup via the class `withClientRectsOverlay`.

### HTML

.举例 1：HTML 创建了三段带有 `<span>` 的段落 `<p>` 并放入 `<div>` 中。在第二个段落 `<p>` 上绘制了客户矩形。在第三个段落 `<p>` 的 `<span>` 元素上绘制了客户矩形。

```html
<h3>A paragraph with a span inside</h3>
<p>Both the span and the paragraph have a border set. The
  client rects are in red. Note that the p has onlyone border
  box, while the span has multiple border boxes.</p>

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
    <span class="withClientRectsOverlay">Paragraph that spans multiple lines</span>
  </p>
</div>
```

Example 2: 举例 2：HTML 创建了 3 个有序列表。在第二个列表的 ol 上绘制了客户矩形，在第三个列表的 li 上绘制了客户矩形。

```html
<h3>A list</h3>
<p>Note that the border box doesn't include the number, so neither do the client rects.</p>

<div>
 <strong>Original</strong>
 <ol>
  <li>Item 1</li>
  <li>Item 2</li>
 </ol>
</diV>

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

举例 3：HTML 创建了两个带有标题的表。第二个表上绘制了客户矩形。

```html
<h3>A table with a caption</h3>
<p>Although the table's border box doesn't include the caption, the client rects do include the caption.</p>

<div>
 <strong>Original</strong>
 <table>
  <caption>caption</caption>
  <thead>
    <tr><th>thead</th></tr>
  </thead>
  <tbody>
    <tr><td>tbody</td></tr>
  </tbody>
 </table>
</div>

<div>
 <strong>table's rect</strong>
 <table class="withClientRectsOverlay">
  <caption>caption</caption>
  <thead>
    <tr><th>thead</th></tr>
  </thead>
  <tbody>
    <tr><td>tbody</td></tr>
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
div p, ol, table {
  border: 1px solid blue;
}
span, li, th, td {
  border: 1px solid green;
}
```

### JavaScript

JavaScript 代码为所有带有“widthClientRectsOverlay”样式的元素绘制了 ClientRects。

```js
function addClientRectsOverlay(elt) {
    // 为了使边框宽度与矩形宽度一致，这里给每个客户矩形上方绝对定位一个 div。
    // 注意：如果用户改变大小或者缩放，绘图将会重绘。

    var rects = elt.getClientRects();
    for (var i = 0; i != rects.length; i++) {
        var rect = rects[i];
        var tableRectDiv = document.createElement('div');
        tableRectDiv.style.position = 'absolute';
        tableRectDiv.style.border = '1px solid red';
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        tableRectDiv.style.margin = tableRectDiv.style.padding = '0';
        tableRectDiv.style.top = (rect.top + scrollTop) + 'px';
        tableRectDiv.style.left = (rect.left + scrollLeft) + 'px';
        // 我们希望 rect.width 作为边框宽度，所以内容宽度减少 2px

        tableRectDiv.style.width = (rect.width - 2) + 'px';
        tableRectDiv.style.height = (rect.height - 2) + 'px';
        document.body.appendChild(tableRectDiv);
    }
}

(function() {
  /* 将所有具有 "widthClientRectsOverlay" 样式的元素依次传入函数 addClientRectsOverlay(elt) */
  var elt = document.getElementsByClassName('withClientRectsOverlay');
  for (var i = 0; i < elt.length; i++) {
    addClientRectsOverlay(elt[i]);
  }
})();
```

### 结果

{{ EmbedLiveSample('Element_getClientRects_sample', 680, 650) }}

## 规范

{{Specifications}}

### 备注

`getClientRects()` 在 MS IE DHTML 对象模型中首次引入。

## 浏览器兼容

{{Compat}}

## 参见

- {{domxref("Element.getBoundingClientRect()")}}

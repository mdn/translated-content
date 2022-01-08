---
title: HTMLTableRowElement.rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
tags:
  - API
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
translation_of: Web/API/HTMLTableRowElement/rowIndex
---
{{APIRef("HTML DOM")}}

只读属性 **`HTMLTableRowElement.rowIndex`** 用于表示元素所在行相对于整个 {{HtmlElement("table")}} 的逻辑位置。

即使 {{HtmlElement("thead")}}、{{HtmlElement("tbody")}} 和 {{HtmlElement("tfoot")}}} 元素在 HTML 中乱序排列，浏览器也会以正确的顺序渲染表格。因此，行号的标记顺序为：从 `<thead>` 到 `<tbody>`，再到 `<tfoot>`。

## 语法

```js
var index = HTMLTableRowElement.rowIndex
```

### 返回值

返回该行的索引，如果该行不属于表的一部分，则返回 `-1`。

## 示例

本示例使用 JavaScript 标记表中的所有行号。

### HTML

```html
<table>
  <thead>
    <tr><th>商品</th>       <th>价格</th></tr>
  </thead>
  <tbody>
    <tr><td>香蕉</td>       <td>$2</td></tr>
    <tr><td>橘子</td>       <td>$8</td></tr>
    <tr><td>西冷牛排</td>   <td>$20</td></tr>
  </tbody>
  <tfoot>
    <tr><td>总计</td>       <td>$30</td></tr>
  </tfoot>
</table>
```

### JavaScript

```js
let rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  let z = document.createElement("td");
  z.textContent = `(row #${row.rowIndex})`;
  row.appendChild(z);
});
```

### 结果

{{EmbedLiveSample("Example")}}

## 浏览器兼容性

{{Compat}}

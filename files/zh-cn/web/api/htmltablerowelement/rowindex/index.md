---
title: HTMLTableRowElement.rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
l10n:
  sourceCommit: e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLTableRowElement")}} 接口的 **`rowIndex`** 只读属性表示元素所在行相对于整个 {{HtmlElement("table")}} 的逻辑位置。

即使 {{HtmlElement("thead")}}、{{HtmlElement("tbody")}} 和 {{HtmlElement("tfoot")}} 元素在 HTML 中乱序排列，浏览器也会以正确的顺序渲染表格。因此，行号的标记顺序为：从 `<thead>` 到 `<tbody>`，再到 `<tfoot>`。

## 值

返回该行的索引，如果该行不属于表的一部分，则返回 `-1`。

## 示例

本示例使用 JavaScript 标记表中的所有行号。

### HTML

```html
<table>
  <thead>
    <tr>
      <th>商品</th>
      <th>价格</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>香蕉</td>
      <td>$2</td>
    </tr>
    <tr>
      <td>橘子</td>
      <td>$8</td>
    </tr>
    <tr>
      <td>西冷牛排</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>总计</td>
      <td>$30</td>
    </tr>
  </tfoot>
</table>
```

### JavaScript

```js
const rows = document.querySelectorAll("tr");

rows.forEach((row) => {
  const z = document.createElement("td");
  z.textContent = `(行 #${row.rowIndex})`;
  row.appendChild(z);
});
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLTableRowElement.sectionRowIndex")}}

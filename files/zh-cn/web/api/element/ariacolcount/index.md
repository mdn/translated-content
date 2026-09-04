---
title: Element：ariaColCount 属性
slug: Web/API/Element/ariaColCount
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaColCount`** 属性反映 [`aria-colcount`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) 属性的值，该属性定义表格、网格或树形网格中的列数。

## 值

字符串。

## 示例

此示例中，ID 为 `semantic-table` 的元素的 `aria-colcount` 属性设为 `"2"`。使用 `ariaColCount` 将其更新为 `"3"`。

```html
<table
  id="semantic-table"
  role="table"
  aria-label="语义元素"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="100"
  aria-colcount="2">
  <caption id="semantic_elements_table_desc">
    用于替代 ARIA 角色的语义元素
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none" aria-rowindex="1">ARIA 角色</th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">语义元素</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" aria-rowindex="11">header</td>
      <td role="cell" aria-rowindex="11">h1</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="16">header</td>
      <td role="cell" aria-rowindex="16">h6</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="18">rowgroup</td>
      <td role="cell" aria-rowindex="18">thead</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="24">term</td>
      <td role="cell" aria-rowindex="24">dt</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("semantic-table");
console.log(el.ariaColCount); // 2
el.ariaColCount = "3";
console.log(el.ariaColCount); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：table 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)

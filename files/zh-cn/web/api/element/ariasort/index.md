---
title: Element：ariaSort 属性
slug: Web/API/Element/ariaSort
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaSort`** 属性反映 [`aria-sort`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) 属性的值，该属性指示表格或网格中的项目是否按升序或降序排列。

## 值

具有下列值之一的字符串：

- `"ascending"`
  - : 项目按此列升序排列。
- `"descending"`
  - : 项目按此列降序排列。
- `"none"`
  - : 此列没有定义的排序。
- `"other"`
  - : 已应用升序或降序以外的排序算法。

## 示例

本示例中，ID 为 `role-heading` 的元素上的 `aria-sort` 属性设为 `"none"`。使用 `ariaSort` 将其更新为 `"ascending"`。

```html
<table
  id="semantic-table"
  role="table"
  aria-label="语义元素"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="100">
  <caption id="semantic_elements_table_desc">
    可替代 ARIA 角色使用的语义元素
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th
        role="columnheader"
        id="role-heading"
        aria-sort="none"
        aria-rowindex="1"
        aria-colindex="1">
        ARIA 角色
      </th>
      <th
        role="columnheader"
        id="element-heading"
        aria-sort="none"
        aria-rowindex="1">
        语义元素
      </th>
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
let el = document.getElementById("role-heading");
console.log(el.ariaSort); // none
el.ariaSort = "ascending";
console.log(el.ariaSort); // ascending
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：table 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)

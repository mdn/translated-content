---
title: Element：ariaColIndexText 属性
slug: Web/API/Element/ariaColIndexText
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaColIndexText`** 属性反映了 [`aria-colindextext`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) 属性的值，该属性定义了 `aria-colindex` 的可读文本替代。

## 值

字符串。

## 示例

在此示例中，`aria-colindextext` 属性设置在 ID 为 `role-heading` 的元素上，值为 "Aria Role column"。使用 `ariaColIndexText` 我们将值更新为字符串 "New column name"。

```html
<table
  id="semantic-table"
  role="table"
  aria-label="语义元素"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="100">
  <caption id="semantic_elements_table_desc">
    用于替代 ARIA 角色的语义元素
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th
        role="columnheader"
        id="role-heading"
        aria-sort="none"
        aria-rowindex="1"
        aria-colindex="1"
        aria-colindextext="Aria Role column">
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
console.log(el.ariaColIndexText); // "Aria Role"
el.ariaColIndexText = "New column name";
console.log(el.ariaColIndexText); // "New column name"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：table 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)

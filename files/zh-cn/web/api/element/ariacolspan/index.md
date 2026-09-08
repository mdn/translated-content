---
title: Element：ariaColSpan 属性
slug: Web/API/Element/ariaColSpan
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaColSpan`** 属性反映 [`aria-colspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) 属性的值，该属性定义表格、网格或树形网格中单元格或网格单元格跨越的列数。

## 值

包含整数的字符串。

## 示例

此示例中，ID 为 `spanning-column` 的元素的 `aria-colspan` 属性设为 `"2"`。使用 `ariaColSpan` 将其更新为 `"3"`。

```html
<table>
  <thead>
    <tr>
      <th>标题 1</th>
      <th>标题 2</th>
      <th>标题 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" aria-colspan="2" id="spanning-column">跨列</td>
      <td>一</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("spanning-column");
console.log(el.ariaColSpan);
el.ariaColSpan = "3";
console.log(el.ariaColSpan);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ARIA：table 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)

---
title: ARIA：columnheader 角色
slug: Web/Accessibility/ARIA/Reference/Roles/columnheader_role
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

ARIA role 属性的 `columnheader` 值将元素标识为行中的一个单元格，该单元格包含某一列的表头信息，类似于带有列作用域的原生 {{HTMLElement('th')}} 元素。

## 描述

具有 `role="columnheader"` 且作为 `role="row"` 元素的后代嵌套的元素，是表格容器（可以是 table 或 grid，也可以是需要展示数据关系的其他图表）中列标题单元格的静态表格结构。要获得支持，columnheader 必须嵌套在具有 [`row` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)的元素中。

### 关联的 WAI-ARIA 角色、状态和属性

所有列标题都应嵌套在 [row](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) 中。而每一行又应嵌套在 [grid](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、[table](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) 或 [treegrid](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) 中，或者嵌套在上述容器之一的 [rowgroup](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) 中。

- [`aria-sort`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
  - : `aria-sort` 属性一次只应用于一个列标题（如果有的话），它通过三个取值来指示某一列的排序情况：`ascending`（升序）、`descending`（降序）或 `none`（未排序）。

### 键盘交互

该角色不支持任何特定的键盘交互。

### 所需的 JavaScript 特性

只有在使用了 `aria-sort` 属性时才需要 JavaScript。

## 示例

```html
<table>
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">
        <button>名字</button>
      </th>
      <th role="columnheader" scope="col">
        <button>姓氏</button>
      </th>
      <th role="columnheader" scope="col" aria-sort="ascending">
        <button>公司名称</button>
      </th>
      <th role="columnheader" scope="col">
        <button>职位</button>
      </th>
    </tr>
  </thead>
  <tbody>
    …
  </tbody>
</table>
```

## 最佳实践

列标题应当包含该列的标题或表头信息。

ARIA 的第一规则是：如果原生 HTML 元素或属性已经具备你所需要的语义和行为，就使用它，而不是重新利用某个元素并添加 ARIA 角色、状态或属性来使其可访问。建议使用原生 HTML `<th>` 元素并将 `scope` 属性设置为 `<th scope="col">`，而不是使用 `<div>` 或其他元素。如果使用语义化 HTML 的 `<th scope="col">`，则 role 属性不是必需的，但仍可以将其包含在内作为后备，以确保在默认语义因某个 CSS display 属性值而被移除时，表格仍能保留其语义。

即使未指定 ARIA role 属性，也可以将 `aria-sort` 属性添加到 `<th scope="col">` 上。

### 优先使用 HTML

columnheader 与 `<th scope="col">` 具有相同的语义。

## 规范

{{Specifications}}

## 参见

- [`table` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`grid` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`treegrid` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`row` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [`<th>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/th)
- [`<table>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/table)
- [`<tr>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/tr)
- [`<td>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/td)

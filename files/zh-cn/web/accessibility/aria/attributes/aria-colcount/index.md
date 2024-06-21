---
title: aria-colcount
slug: Web/Accessibility/ARIA/Attributes/aria-colcount
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`aria-colcount` 属性定义了当所有列都不在 [DOM](/zh-CN/docs/Glossary/DOM) 中时，在 [`table`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/table_role)、[`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/grid_role) 或 [`treegrid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treegrid_role) 中的列总数。

## 描述

一些表格非常庞大，不可能向用户展示所有列。或者，虽然可能，但是拥有如此宽的表格将会给用户带来糟糕的用户体验。使用 `aria-colcount` 属性让辅助技术知道如果所有列都存在的话，表格会有多少列。该值是一个整数，表示组成完整表格的列数。如果你不知道表格将具有的总列数，但知道它们不会全部存在于 DOM 中，则使用值 -1，因此 `aria-colcount="-1"`。该值告诉用户代理，当前存在于 DOM 中的列数可能不是表格中的实际列数。

如果表格中的所有列都存在于 DOM 中，则不需要 `aria-colcount` 属性，因为浏览器会自动计算列的总数。但是，如果在给定时刻只有一部分列存在于 DOM 中，那么这个属性就很有用并且是必需的。

当使用 `aria-colcount` 时，如果你知道列的数量，请确保还使用 [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) 为每列标记，或者如果列是连续的，即它们是原始顺序中没有中断的一组列，则为每行标记。

以下示例显示了一个网格，具有 6 列，其中列 1、2、5 和 6 显示给用户。将表格本身设置为 `aria-colcount="6"`，表示组成表格的列的总数。由于列不是连续的，因此在本例中每个[单元格](/zh-CN/docs/Web/Accessibility/ARIA/Roles/cell_role)的 [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role) 和 [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/gridcell_role) 元素都设置了 `aria-colindex` 属性。

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">名字</div>
      <div role="columnheader" aria-colindex="2">姓氏</div>
      <div role="columnheader" aria-colindex="5">城市</div>
      <div role="columnheader" aria-colindex="6">邮编</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

ARIA 使用的第一条规则是：“如果你可以使用具有你所需语义和行为的本地功能，而不是重新用一个元素并**添加**一个 ARIA 角色、状态或属性来使其无障碍，那么请这样做。”如果我们使用具有语义化的 HTML 元素，如 {{HTMLElement('table')}} 、{{HTMLElement('th')}} 、{{HTMLElement('td')}} 等，那么 `aria-colcount` 属性仍然是必需的，但标记不会那么冗长。当使用语义化的表头元素且并非所有列都在 DOM 中时，仍然需要使用 `aria-colcount`，但只需要在每列的列头 {{HTMLElement('th')}} 中定义一次 `aria-colindex` 属性。

```html
<table aria-colcount="6">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">名字</th>
      <th aria-colindex="2" scope="col">姓氏</th>
      <th aria-colindex="5" scope="col">城市</th>
      <th aria-colindex="6" scope="col">邮编</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Debra</td>
      <td>Burks</td>
      <td>纽约</td>
      <td>14127</td>
    </tr>
    …
  </tbody>
</table>
```

## 值

- `<integer>`
  - : 完整表格中的列数

## 关联角色

适用于以下角色：

- [`table`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/table_role)

继承到以下角色：

- [`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`treegrid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## 规范

{{Specifications}}

## 参见

- [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)

---
title: aria-colindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindex
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`aria-colindex` 属性定义了元素相对于 `table`、`grid` 或 `treegrid` 中总列数的列索引或位置。

## 描述

某些表格非常大，因此最初只显示了部分内容。虽然在加载过程中仅显示一部分列可能会改善用户体验，但你需要让所有用户知道显示了哪部分的内容，并且并未所有表格内容都存在。

ARIA 提供了几个属性来提供关于 `table`、`grid` 和 `treegrid` 结构的信息。`aria-colindex` 属性定义了在这些结构中的子结构中，元素相对于总列数的列索引或位置。

与 [`aria-colcount`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) 属性一起使用，后者告知辅助技术如果所有列都存在，则表格将拥有多少列，`aria-colindex` 用于表示元素相对于该总列数的列索引或位置。

如果所有列都在 DOM 中，则不需要包括 `aria-colindex`，因为用户代理可以计算每个单元格或网格单元的列索引。然而，如果在任何时候将任何列留在 DOM 之外，则使用 `aria-colindex` 来指示每个单元格或网格单元相对于完整表格的列。

`aria-colindex` 的值是大于等于 1 的整数。每个值应大于前一列的 `aria-colindex`，并且小于或等于完整表格中的列数。

如果单元格或网格单元跨越多列，则设置 [`aria-colspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) 为其跨越的列数（如果未使用 {{htmlelement('td')}} 和 {{htmlelement('th')}} HTML 元素），并将 `aria-colindex` 设置为跨越范围的开始值；如果它跨越的列宽仅为一，则它将只跨越其列中的第一个。

如果 DOM 中存在的列集是连续的，并且在该集中没有跨越多行或多列的单元格，则只需在每行的第一列中一次放置 `aria-colindex`。如果列不连续，则在每行的所有子元素或拥有的元素上包含 `aria-colindex` 值。

下面的示例显示了一个网格，其中有 6 列，其中列 1、2、5 和 6 显示给用户。表格本身的总列数设置为 `aria-colcount="6"`。由于列不是连续的，因此每个[单元格](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)（在本例中为 [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) 和 [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) 元素）都设置了 `aria-colindex` 属性。

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
      <div role="gridcell" aria-colindex="1">德布拉</div>
      <div role="gridcell" aria-colindex="2">伯克斯</div>
      <div role="gridcell" aria-colindex="5">纽约</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

ARIA 使用的第一条规则是：“如果你可以使用具有你所需语义和行为的原生特性，而不是重新用一个元素并**添加**一个 ARIA 角色、状态或属性来使其无障碍，那么请这样做。”如果我们使用具有语义化的 HTML 元素，如 {{HTMLElement('table')}}、{{HTMLElement('th')}}、{{HTMLElement('td')}} 等，那么 `aria-colcount` 属性仍然是必需的，但标记不会那么冗长。

当使用语义化的表头元素且并非所有列都在 DOM 中时，仍然需要使用 `aria-colcount`，但只需要在每列的列头 {{HTMLElement('th')}} 中定义一次 `aria-colindex` 属性。

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
      <td>德布拉</td>
      <td>伯克斯</td>
      <td>纽约</td>
      <td>14127</td>
    </tr>
    …
  </tbody>
</table>
```

如果所有列都在 DOM 中，则 `aria-colcount` 和 `aria-colindex` 都不是必需的。

## 值

- `<integer>`
  - : 大于等于 1 且小于等于如果所有列都存在时的总列数。

## 关联接口

- {{domxref("Element.ariaColIndex")}}
  - : [`ariaColIndex`](/zh-CN/docs/Web/API/Element/ariaColIndex) 属性（属于 {{domxref("Element")}} 接口）反映了 `aria-colindex` 属性的值。
- {{domxref("ElementInternals.ariaColIndex")}}
  - : [`ariaColIndex`](/zh-CN/docs/Web/API/ElementInternals/ariaColIndex) 属性（属于 {{domxref("ElementInternals")}} 接口）反映了 `aria-colindex` 属性的值。

## 关联角色

用于角色：

- [`cell`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

继承到角色：

- [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## 规范

{{Specifications}}

## 参见

- [`aria-colindextext`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) 属性
- [`aria-colcount`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) 属性
- [`aria-colspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) 属性
- HTML {{HTMLElement('table')}} 元素
- HTML {{HTMLElement('th')}} 元素
- HTML {{HTMLElement('td')}} 元素

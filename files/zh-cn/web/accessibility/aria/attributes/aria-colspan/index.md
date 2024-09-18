---
title: aria-colspan
slug: Web/Accessibility/ARIA/Attributes/aria-colspan
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

`aria-colspan` 属性定义了在 [`table`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/table_role)、[`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/grid_role) 或 [`treegrid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treegrid_role) 中，单元格或网格单元格跨越的列数。

## 描述

`aria-colspan` 主要用于不包含在原生 HTML {{HTMLElement('table')}} 中的 [`cell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/cell_role) 和 [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/gridcell_role)，该属性值定义了一个单元格在 ARIA [`table`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/table_role)、[`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/grid_role) 或 [`treegrid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treegrid_role) 中跨越的列数。

在 HTML 中，{{HTMLElement('th')}} 和 {{HTMLElement('td')}} 元素具有 [`colspan`](/zh-CN/docs/Web/HTML/Element/td#attributes) 属性。当使用语义化的 {{HTMLElement('table')}} 时，按设计使用原生的 `colspan` 属性即可。此 ARIA 属性用于不包含在原生表格中的单元格和网格单元格，如果用于 {{HTMLElement('table')}} 中的单元格，将被忽略。

> [!NOTE]
> 使用 ARIA 的首要规则是，如果可以使用具有所需语义和行为的原生特性，而不是重新定义元素并**添加** ARIA 角色、状态或属性使其变得无障碍，那么就这样做。尽可能使用 HTML {{HTMLelement('table')}} 元素（包括 {{HTMLelement('td')}} 和 {{HTMLelement('th')}} 以及 `colspan` 属性），而不是带有 ARIA 角色和属性的非语义元素。

`aria-colspan` 的值应为正整数。单元格跨越的默认或假定值为 1。确保所包含的值不会导致单元格或网格单元格与同一行中的下一个单元格重叠，也不会导致单元格跨越超出包含的表格、网格或树网格。

## 示例

以下是一个保龄球锦标赛联赛计分表的部分示例。每场比赛跨越 10 计分格（frame），每个计分格跨越 3 个分数：两球和当前总分。每场比赛的第 10 个（也是最后一个）计分格跨越 4 列，以防有人记全倒。

```html
<div role="grid" aria-rowcount="27" aria-label="Bowling League Scores">
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <!--
            aria-rowspan 和 aria-colspan 在当表头单元格跨越多个行或列时会为辅助技术提供正确的数据单元格的表头信息。
          -->

      <span role="columnheader" aria-rowspan="2">队伍</span>
      <span role="columnheader" aria-colspan="2">玩家</span>
      <span role="columnheader" aria-colspan="31">第 1 局计分格</span>
      <span role="columnheader" aria-colspan="31">第 2 局计分格</span>
      <span role="columnheader" aria-colspan="31">第 3 局计分格</span>
      <span role="columnheader" aria-rowspan="2">合计</span>
    </div>
    <div role="row" aria-rowindex="2">
      <span role="columnheader">姓</span>
      <span role="columnheader">名</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="10">
      <span role="rowheader" aria-rowspan="3">强力短尾矮袋鼠队</span>
      <span role="cell">Henderson</span>
      <span role="cell">Alice</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      <span role="cell">20</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">39</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">48</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">76</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">96</span>
      <span role="cell">8</span>
      <span role="cell">/</span>
      <span role="cell">113</span>
      <span role="cell">7</span>
      <span role="cell">-</span>
      <span role="cell">120</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">146</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">166</span>
      <span role="cell">6</span>
      <span role="cell">/</span>
      <span role="cell">X</span>
      <span role="cell">186</span>
      <span role="cell">7</span>
      <span role="cell">2</span>
      <span role="cell">9</span>
      <span role="cell">6</span>
      <span role="cell">-</span>
      <span role="cell">15</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">35</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      …
    </div>
    <div role="row" aria-rowindex="11">
      <span role="cell">McPherson</span>
      <span role="cell">Leslie</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">9</span>
      <span role="cell">8</span>
      <span role="cell">1</span>
      <span role="cell">18</span>
      …
    </div>
  </div>
</div>
```

如果我们使用 {{HTMLElement('table')}} 和语义化的表格元素，我们的标记将会更简洁，并且默认具有无障碍性。

## 值

- `<integer>`
  - : 一个大于或等于默认值 1 的整数，定义单元格跨越的列数。该值必须小于会导致单元格与同一行中的下一个单元格重叠的数值。

## 相关接口

- {{domxref("Element.ariaColSpan")}}
  - : [`ariaColSpan`](/zh-CN/docs/Web/API/Element/ariaColSpan) 属性，作为每个元素接口的一部分，反映了 `aria-colspan` 属性的值，该属性定义了单元格或网格单元格在表格、网格或树网格中跨越的列数。

## 相关角色

用于角色：

- [`cell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/cell_role)

继承到角色：

- [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role)

## 规范

{{Specifications}}

## 参见

- {{HTMLElement('th')}} 和 {{HTMLElement('td')}} [`colspan`](/zh-CN/docs/Web/HTML/Element/td#attributes) 属性
- [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) 属性
- [`aria-rowspan`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) 属性
- [`cell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/cell_role) 角色
- [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role) 角色
- [`rowheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role) 角色

---
title: ARIA：cell 角色
slug: Web/Accessibility/ARIA/Reference/Roles/cell_role
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

ARIA _role_ 属性的 `cell` 值将一个元素标识为表格型容器中的一个单元格，该单元格不包含列或行表头信息。为了获得支持，单元格必须嵌套在具有 `row` 角色的元素中。

```html
<div role="row">
  <span role="cell">法国</span>
  <span role="cell">6700 万</span>
</div>
```

编写上述单元格的更好、更具语义的方式是使用语义化的 [`<td>`](/zh-CN/docs/Web/HTML/Reference/Elements/td) 元素。

```html
<tr role="row">
  <td role="cell">法国</td>
  <td role="cell">6700 万</td>
</tr>
```

## 描述

带有 `role="cell"` 的元素是行内的一个单元格；该行可以选择性地包含在 [`rowgroup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) 中，并位于 [`table`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) 之中。如果单元格位于 [`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) 或 [`treegrid`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) 中，则应选择 [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)。强烈建议尽可能使用原生 HTML {{HTMLElement('td')}} 元素。

每个带有 `role="cell"` 的元素都必须嵌套在带有 [`role="row"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) 的容器元素中。而该行又可以嵌套在带有 [`role="rowgroup"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) 的元素中，并且应嵌套在 `grid`、`table` 或 `treegrid` 内。如果单元格包含列或行表头信息，请分别使用 `columnheader` 或 `rowheader` 角色。如果单元格不包含表头信息，且嵌套在 `grid` 或 `treegrid` 中，则 `gridcell` 角色可能更合适。

单元格可以包含若干用于阐明其在表格型数据结构中位置的属性，包括 [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)、[`aria-colspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)、[`aria-rowindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) 和 [`aria-rowspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)。

> [!NOTE]
> 强烈建议尽可能使用原生 HTML 表格元素（{{HTMLElement('table')}}），以及表格行元素（{{HTMLElement('tr')}}）和表格单元格元素（{{HTMLElement('td')}}）。

### 关联的 WAI-ARIA 角色、状态和属性

#### 上下文角色

- [role="row"](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
  - : 带有 `role="row"` 的元素是表格型结构中的一行单元格。一行在 [`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)、[`table`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role) 或 `treegrid` 内、且可选地在 [`rowgroup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) 内，包含一个或多个单元格、网格单元格、列标题或行标题。
- [role="rowgroup"](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
  - : `row` 是单元格必需的父元素。`rowgroup` 是行可选的上下文父元素。它在后代行之间建立关系。它在结构上等同于 [HTML `table`](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) 元素中的 [`thead`](/zh-CN/docs/Web/HTML/Reference/Elements/thead)、[`tfoot`](/zh-CN/docs/Web/HTML/Reference/Elements/tfoot) 和 [`tbody`](/zh-CN/docs/Web/HTML/Reference/Elements/tbody) 元素。
- [role="table"](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
  - : 可以找到包含单元格的行的三种可能上下文之一（另外两种是 `grid` 和 `treegrid`）。table 将单元格标识为非交互式表格结构的一部分，该结构包含按行和列排列的数据，类似于原生 HTML [`<table>`](/zh-CN/docs/Web/HTML/Reference/Elements/table) 元素。
- [role="grid"](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
  - : 可以找到包含 `cell` 和 `gridcell` 的行的三种可能上下文之一（另外两种是 `table` 和 `treegrid`）。grid 将单元格标识为可能可交互的表格结构的一部分，该结构包含按行和列排列的数据，类似于原生 HTML [`<table>`](/zh-CN/docs/Web/HTML/Reference/Elements/table) 元素。
- [role="treegrid"](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)
  - : 类似于 grid，但其行可以像树那样展开和折叠。

#### 子类角色

- [role="gridcell"](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
  - : `grid` 或 `treegrid` 中一行内的单元格。
- [role="columnheader"](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
  - : 一种表头单元格，在结构上等同于具有列作用域的 HTML [`<th>`](/zh-CN/docs/Web/HTML/Reference/Elements/th) 元素。与普通单元格不同，`columnheader` 角色会在它与其对应列中的所有单元格之间建立联系。
- [role="rowheader"](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
  - : 一种表头单元格，在结构上等同于具有行作用域的 HTML [`<th>`](/zh-CN/docs/Web/HTML/Reference/Elements/th) 元素。与普通单元格不同，`rowheader` 角色会在它与其对应行中的所有单元格之间建立联系。

#### 状态和属性

- [`aria-colspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
  - : 类似于 HTML [`<th>`](/zh-CN/docs/Web/HTML/Reference/Elements/th) 和 [`<td>` 的 colspan 属性](/zh-CN/docs/Web/HTML/Reference/Elements/td)，它定义单元格跨越的列数。
- [`aria-rowspan`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
  - : 类似于 HTML [`<th>`](/zh-CN/docs/Web/HTML/Reference/Elements/th) 和 [`<td>` 的 rowspan 属性](/zh-CN/docs/Web/HTML/Reference/Elements/td)，它定义单元格跨越的行数。
- [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) 属性
  - : 只有当部分列未包含在 DOM 中时，才需要 `aria-colindex` 属性。该属性的值是一个介于 1 和 `table`、`grid` 或 `treegrid` 中列总数之间的整数。`aria-colindex` 定义元素相对于行内总列数的列索引或位置。如果所有列都在 DOM 中，则不需要该属性。
- [`aria-rowindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) 属性
  - : 只有当部分行未包含在 DOM 中时，才需要 `aria-rowindex` 属性，用于表明当前单元格位于全部行中的哪一行。该属性的值是一个介于 1 和 table、grid 或 treegrid 中行总数之间的整数，表示单元格的位置或索引。例如，当由于并非所有行都在 DOM 中而需要 `aria-rowindex` 时，第一个表头的第一行中的单元格可能会被设置为 `aria-rowindex="1"`，而第 47 行中的单元格会被设置为 `aria-rowindex="47"`。如果可见的行是连续的，并且不存在 `colspan` 或 `rowspan` 大于 1 的单元格，则可以将该属性添加到父行上，而不是添加到所有行的各个单元格上。

### 键盘交互

无。

### 所需的 JavaScript 特性

使用 ARIA 的首要规则是：如果你可以使用已经内置了所需语义和行为的原生特性，就不要改造某个元素并**添加** ARIA 角色、状态或属性来使其无障碍化，而应直接使用原生特性。只要可能，请使用 HTML [`<td>`](/zh-CN/docs/Web/HTML/Reference/Elements/td) 元素来代替 ARIA 的 `cell` 角色。

## 示例

```html
<div
  role="table"
  aria-label="语义元素"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <div id="semantic_elements_table_desc">可用来替代 ARIA 角色的语义元素</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none" aria-rowindex="1"
        >ARIA 角色</span
      >
      <span role="columnheader" aria-sort="none" aria-rowindex="1"
        >语义元素</span
      >
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="cell" aria-rowindex="11">header</span>
      <span role="cell" aria-rowindex="11">h1</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="16">header</span>
      <span role="cell" aria-rowindex="16">h6</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="18">rowgroup</span>
      <span role="cell" aria-rowindex="18">thead</span>
    </div>
    <div role="row">
      <span role="cell" aria-rowindex="24">term</span>
      <span role="cell" aria-rowindex="24">dt</span>
    </div>
  </div>
</div>
```

上面是一个非语义的 ARIA 表格，DOM 中存在 81 行中的 5 行：一行位于表头内，四行位于表体内。由于并非所有行都在 DOM 中，我们在每个单元格上都添加了 `aria-rowindex` 属性。如果没有单元格跨越多行或多列，那么可以将 `aria-rowindex` 放在行上，而不是行的各个单元格上。

## 最佳实践

{{HTMLElement('table')}}、{{HTMLElement('tbody')}}、{{HTMLElement('thead')}}、{{HTMLElement('tr')}}、{{HTMLElement('th')}}、{{HTMLElement('td')}} 等元素仅应用于数据表格结构。当表格的原生语义被移除时（例如通过 CSS），你可以添加 ARIA 角色以确保无障碍性。ARIA table 角色的一个相关用例是：表格的原生语义被 [CSS 的 display 属性覆盖，例如通过 display: grid](/zh-CN/docs/Web/CSS/Reference/Properties/display#accessibility)。在这种情况下，你可以使用 ARIA 表格角色把语义加回来。

```html
<table
  role="table"
  aria-label="语义元素"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="81">
  <caption id="semantic_elements_table_desc">
    可用来替代 ARIA 角色的语义元素
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

上面是编写表格的语义化方式。如果表格（从而其表格行）的原生语义没有被改变（例如通过 [display 属性](/zh-CN/docs/Web/CSS/Reference/Properties/display#accessibility)），则不需要这些 ARIA 角色。

### 附加好处

当应用于 {{HTMLElement('td')}} 时，它会在元素的语义被移除（例如通过 `display: grid;`）的情况下，为该元素恢复单元格语义。

## 规范

{{Specifications}}

## 参见

- [`role="row"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`role="gridcell"`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [HTML `<td>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/td)
- [HTML `<th>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/th)
- [学习：HTML 表格无障碍](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [学习：HTML 表格基础](/zh-CN/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)

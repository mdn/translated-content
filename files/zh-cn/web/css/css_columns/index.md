---
title: CSS 多列布局
slug: Web/CSS/CSS_Columns
---

{{CSSRef("CSS3 Multicol")}}

**CSS 多列布局（CSS Multi-column Layout）**是一种定义了多栏布局的模块，可支持在布局中建立列（column）的数量，以及内容如何在列之间流动（flow）、列之间的间距（gap）大小，以及列的分隔线（column rules）。

## 基本示例

在下列示例中，{{cssxref("column-count")}}属性应用于带有容器类的元素。因为`column-count`的值为`3`，所以内容排成等宽的 3 列。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

## Relationship to Fragmentation

Multiple-column Layout is closely related to [Paged Media](/zh-CN/docs/Web/CSS/CSS_Pages), in that each column box becomes a fragment, much like a printed page becomes a fragment of an overall document. Therefore the properties now defined in the [CSS Fragmentation](/zh-CN/docs/Web/CSS/CSS_Fragmentation) specification are required in order to control how content breaks between columns.

## 参考

### 多列布局属性

- {{cssxref("column-count")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-span")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}}

### 有关的 CSS 碎片化属性

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}

## 指南

- [多列的基本概念](/zh-CN/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
  - : 多列布局的概述
- [设置列的样式](/zh-CN/docs/Web/CSS/CSS_Columns/Styling_Columns)
  - : 如何使用列的分隔线，以及设置列间距。
- [Spanning and Balancing](/zh-CN/docs/Web/CSS/CSS_Columns/Spanning_Columns)
  - : How to make elements span across all columns and controlling the way columns are filled.
- [Handling Overflow in Multicol](/zh-CN/docs/Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol)
  - : What happens when an item overflows the column it is in and what happens when there is too much columned content to fit a container.
- [Content Breaks in Multicol](/zh-CN/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol)
  - : Introduction to the Fragmentation specification and how to control where column content breaks.

## 规范

{{Specifications}}

## 参见

其它 CSS 布局方法包括：

- [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)（CSS flexbox）
- [CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)

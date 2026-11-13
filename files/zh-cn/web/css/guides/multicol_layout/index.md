---
title: CSS 多列布局
slug: Web/CSS/Guides/Multicol_layout
---

**CSS 多列布局**（CSS Multi-column Layout）是一种定义了多栏布局的模块，可支持在布局中建立列（column）的数量，以及内容如何在列之间流动（flow）、列之间的间距（gap）大小，以及列的分隔线（column rules）。

## 基本示例

在下列示例中，{{cssxref("column-count")}} 属性应用于带有 `container` 类的 `<div>` 元素。因为 `column-count` 的值为 `3`，所以内容排成等宽的 3 列。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

## 与分片的关系

多列布局与[分页媒体](/zh-CN/docs/Web/CSS/Guides/Paged_media)密切相关，因为每一个列框都成为一个片段，就像一个打印的页面成为整个文档的片段一样。因此，现在 [CSS 分片](/zh-CN/docs/Web/CSS/Guides/Fragmentation)规范中定义的属性需要控制内容如何在列之间断开。

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
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

## 指南

- [多列的基本概念](/zh-CN/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
  - : 多列布局的概述
- [设置列的样式](/zh-CN/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
  - : 如何使用列的分隔线，以及设置列间距。
- [跨列与平衡](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Spanning_Columns)
  - : 如何使元素跨越所有的列并控制列的填充方式。
- [在多列中控制溢出](/zh-CN/docs/Web/CSS/Guides/Multicol_layout/Handling_overflow)
  - : 当一个项目溢出它所在的列时或有太多的列内容无法容纳一个容器时，会发生什么。
- [多列中断开内容](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol)
  - : 介绍碎片化规范以及如何控制列内容的断开位置。

## 规范

{{Specifications}}

## 参见

其他 CSS 布局方法包括：

- [CSS 弹性盒子布局](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)（CSS flexbox）
- [CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)

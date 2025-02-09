---
title: CSS 布局
slug: Web/CSS/Guides
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{CSSRef}}

你可以使用多种方法来布局网页和应用程序。对于这些不同的方法，MDN 囊括了许多深入的指南，本页面提供了它们的概览。

## 常规流、块级和内联布局

如果你不使用 flex 或者 grid 布局，那么你的内容则会采用常规流布局，或者块级、内联布局。这些指南可以帮助你理解这种布局方式的工作原理。

- [常规流中的块和内联布局](/zh-CN/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
  - : 对常规流的介绍。
- [应用或脱离流式布局](/zh-CN/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
  - : 怎样使一个元素脱离常规流，以及这对于页面的布局有何影响。
- [格式化上下文简介](/zh-CN/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
  - : 介绍怎样创建一个新的格式化上下文。
- [流布局和书写模式](/zh-CN/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
  - : 流式布局怎样在不同的书写模式工作，例如竖排文本。
- [流布局和溢出](/zh-CN/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)
  - : 理解并管理溢出。
- [CSS 盒模型介绍](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : 理解盒模型是 CSS 的基础之一，这篇指南介绍了它的工作原理。
- [掌握外边距折叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : 找出为何有时你的边距会比预期的短，因为常规流中的边距会折叠。
- [理解 CSS 的 z-index 属性](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : 绝对定位、弹性盒与网格布局都会使得堆叠（元素在 z 轴上的相对位置）可由 `z-index` 属性进行操作。这篇文章介绍了怎样掌握它。

## 多列布局

多列布局（通常被称为 multicol），会从常规流中取出内容，并把他们拆分成列。通过下面的指南了解怎样使用这种布局方式。

- [多列布局的基础概念](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : 对多列布局基本功能的概览。
- [多列布局的样式](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : 可对列设置的样式属性非常有限，这篇指南解释了你可以做些什么。
- [跨越与平衡多列布局](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : 在多列间跨越元素，并且平衡列中的内容。
- [处理多列布局中的溢出](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : 如果列中的内容比剩余空间多将会如何？
- [多列布局中的内容分割](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : 处理当内容被分为多列时的分割。

## 弹性盒

CSS 弹性盒布局（通常被称为 flexbox），是一种为用户界面设计和单一维度上元素排布而优化的布局模型。在弹性盒布局模型中，一个弹性容器的子元素可以被沿任意方向排布，并且“弹性”调整它们的大小，要么扩展来填充未使用的空间，要么收缩以避免溢出父元素。

- [弹性盒布局基础](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : 弹性盒特性的概览。
- [弹性盒与其他布局方法的联系](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : 弹性盒与其他布局方法、其他 CSS 规范的联系。
- [弹性盒容器中的盒对齐方式](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : 弹性盒中的盒对齐属性如何工作。
- [弹性元素的排序方式](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : 解释了更改元素顺序和方向的不同方法，并涵盖了这样做的潜在问题。
- [控制弹性元素在主轴上的比例](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : 解释了 `flex-grow`、`flex-shrink` 和 `flex-basis` 属性。
- [掌握弹性元素的包装](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : 怎样创建包含多行元素的弹性容器并控制元素在这些行上的展示方式。
- [弹性盒的典型用例](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : 典型弹性盒布局用例的常见设计模式。

## 网格布局

网格布局为 CSS 引入了一个二维网格系统。网格可以被用来布局重要的页面区域或小型的用户界面元素。

- [网格布局的基本概念](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - : 网格布局特性的概览。
- [网格布局和其他布局方法的联系](/zh-CN/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
  - : 网格布局和例如对齐、大小、弹性盒等其他方法的联系。
- [基于网格线的定位](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - : 怎样按照编号线放置元素。
- [网格模板区域](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
  - : 怎样使用 grid-template 语法放置元素。
- [使用命名线布局](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - : 怎样命名网格线，并使用线名来放置元素，而不是用编号。
- [CSS 网格布局中的自动定位](/zh-CN/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
  - : 怎样掌握自动定位算法，并理解浏览器是怎样放置元素的。
- [CSS 网格布局中的盒模型对齐](/zh-CN/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
  - : 怎样在网格中沿两条轴对齐元素并分配空间。
- [CSS 网格、逻辑值和书写模式](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
  - : 怎样在网格布局中使用相对于流的属性和值而不是物理值。
- [CSS 网格布局和无障碍](/zh-CN/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
  - : 当使用网格布局时的一些无障碍考虑。
- [利用 CSS 网格布局实现常用布局](/zh-CN/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
  - : 使用网格来搭建一些常见布局。
- [子网格](/zh-CN/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : 解释怎样使用子网格值，属于网格布局第二版的一部分。
- [砌体布局](/zh-CN/docs/Web/CSS/CSS_grid_layout/Masonry_layout) {{experimental_inline}}
  - : 对于网格布局第三版中砌体布局特性的解释。

## 对齐

- [块布局中的盒对齐方式](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
  - : 对于块和内联布局中对齐属性的规范，虽然目前还没有浏览器支持。
- [弹性盒布局中的盒对齐方式](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
  - : 对齐属性首次出现于弹性盒布局，这篇指南解释了它如何工作。
- [网格布局中的盒对齐方式](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : 怎样在网格布局中对齐元素。
- [多列布局中的盒对齐方式](/zh-CN/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
  - : 多列布局中的对齐如何工作。

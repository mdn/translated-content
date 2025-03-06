---
title: CSS 弹性盒子布局
slug: Web/CSS/CSS_flexible_box_layout
---

{{CSSRef}}

**CSS 弹性盒子布局**是 CSS 的模块之一，定义了一种针对用户界面设计而优化的 CSS 盒子模型。在弹性布局模型中，弹性容器的子元素可以在任何方向上排布，也可以“弹性伸缩”其尺寸，既可以增加尺寸以填满未使用的空间，也可以收缩尺寸以避免父元素溢出。子元素的水平对齐和垂直对齐都能很方便的进行操控。通过嵌套这些框（水平框在垂直框内，或垂直框在水平框内）可以在两个维度上构建布局。

## 基本例子

在以下示例中，已将容器设置为 `display: flex` ，这意味着三个子项成为弹性项。`justify-content` 的值已设置为 `space-between` ，以便在主轴上均匀地分隔项目。在每个项目之间放置等量的空间，左侧和右侧项目与 Flex 容器的边缘齐平。你还能看到项目在十字轴上拉伸，因为 `align-items` 的默认值为 `stretch`。这些项目伸展到 Flex 容器的高度，使它们看起来都像最高的项目一样高。

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 500)}}

## 参考

### CSS 属性

- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("order")}}

### 对齐属性

属性 `align-content`、`align-self`、`align-items` 和 `justify-content` 最初出现在 Flexbox 规范中，但现在在 Box Alignment 中定义，Flexbox 规范引用了 Box Alignment 规范以获取最新定义。Box Alignment 中还定义了其他对齐属性。

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("justify-content")}}
- {{cssxref("place-content")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### 术语表

- [弹性盒子（Flexbox）](/zh-CN/docs/Glossary/Flexbox)
- [伸缩容器（Flex Container）](/zh-CN/docs/Glossary/Flex_Container)
- [弹性项目（Flex Item）](/zh-CN/docs/Glossary/Flex_Item)
- [主轴（Main Axis）](/zh-CN/docs/Glossary/Main_Axis)
- [交叉轴（Cross Axis）](/zh-CN/docs/Glossary/Cross_Axis)
- [伸缩性（Flex）](/zh-CN/docs/Glossary/Flex)

## 指南

- [弹性盒子基本概念](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : 概述 flexbox 的功能
- [使用 CSS 弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : 循序渐进的讲解如何用此特性来建立布局。
- [Flexbox 与其他布局方法的关系](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
  - : Flexbox 如何与其他布局方法和其他 CSS 规范相关
- [对齐 Flex 容器中的项目](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Box Alignment 属性如何与 flexbox 一起使用。
- [弹性项顺序](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
  - : 解释改变项目顺序和方向的不同方法，并解决这样做的潜在问题。
- [控制柔性项沿主轴的比率](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : 本文介绍了 flex-grow，flex-shrink 和 flex-basis 属性。
- [精通包装弹性项](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
  - : 如何使用多行创建 Flex 容器并控制这些行中项目的显示。
- [Flexbox 的典型用例](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : 常见的设计模式是典型的 flexbox 用例。
- [用弹性盒子进行 Web 应用布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : 讲解在 Web 应用的特定环境下如何应用弹性盒子。

## 规范

{{Specifications}}

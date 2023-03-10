---
title: 伸缩容器
slug: Glossary/Flex_Container
---

定义一个{{glossary("flexbox")}}（伸缩盒布局），需要在一个父级元素上使用`display`属性的值：`flex`或`inline-flex`。这个父级元素将成为**flex container**（伸缩容器），而它的所有子元素将变成{{glossary("flex item")}}（伸缩项）。

使用`flex`值能将元素渲染成为一个块级容器，而使用`inline-flex`值则是渲染成一个行内伸缩容器。这些值会将元素格式化，产生**flex formatting context**（伸缩格式化上下文），这类似于块的格式化上下文，而浮动不会干扰容器，且容器的 margins（所有边距）不会随着这些项目被折叠。

## 了解更多

### 属性参考

- {{cssxref("align-content")}} 行侧轴对齐方式
- {{cssxref("align-items")}} 项目自身侧轴对齐方式
- {{cssxref("flex")}} 伸缩性
- {{cssxref("flex-direction")}} 伸缩流
- {{cssxref("flex-flow")}} 伸缩流与换行
- {{cssxref("flex-wrap")}} 伸缩 - 换行
- {{cssxref("justify-content")}} 主轴对齐

### 延伸阅读

- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Basic Concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)（伸缩盒子的基本概念）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Aligning items in a flex container](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)（伸缩容器里的项目对齐方式）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Mastering wrapping of flex items](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)（掌握伸缩项如何进行换行）_

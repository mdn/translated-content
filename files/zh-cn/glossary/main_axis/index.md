---
title: 主轴
slug: Glossary/Main_Axis
---

主轴是由弹性容器 {{glossary("flexbox")}} 中弹性方向 {{cssxref("flex-direction")}} 属性所定义的的。弹性方向 `flex-direction` 有四个取值，分别是：

- `row`
- `row-reverse`
- `column`
- `column-reverse`

假如选择 `row` 或者 `row-reverse`，那么主轴会沿行向延伸。

![此图中 flex-direction 为 row，由此构成主轴](basics1.png)

选择 `column` 或者 `column-reverse`，那么主轴会沿块向从页面上侧延伸到下侧。

![Three flex items taking up the full width of the container, displayed one below the other in code order. Flex-direction is set to column. The main axis is vertical i.e. from top to bottom](basics2.png)

在主轴上，你可以用 `flex` 属性来增加可用空间，从而控制弹性元素的尺寸，你还可以用 `justify-content` 属性来控制元素周围的空间、间距。

## 参见

### 属性参考

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### 拓展阅读

- CSS 弹性盒指南：*[弹性盒的基本概念](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)*
- CSS 弹性盒指南：*[在弹性容器中对齐项目](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)*
- CSS 弹性盒指南：*[控制弹性项目在主轴上的占比](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)*

---
title: 主轴
slug: Glossary/Main_Axis
---

主轴是由弹性容器 {{glossary("flexbox")}} 中弹性方向 {{cssxref("flex-direction")}} 属性所定义的的。弹性方向 `flex-direction` 有 4 个可能的值，分别是：

- `row`
- `row-reverse`
- `column`
- `column-reverse`

选择行 `row` 或者 `row-reverse` 反向行，那么主轴方向就会沿着行的走向。

![In this image the flex-direction is row which forms the main axis](basics1.png)

选择列 `column` 或者反向列 `column-reverse` ，那么主轴就会从上至下沿着块的走向。

![](basics2.png)

在主轴上，你可以用 `flex` 属性来增加可用空间，从而控制弹性元素的尺寸，你还可以用 `justify-content` 属性来控制元素周围的空间、间距。

## 学习更多

### 属性参考

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### 拓展阅读

- CSS 弹性容器指南：_[Basic Concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS 弹性容器指南：_[Aligning items in a flex container](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS 弹性容器指南：_[Controlling Ratios of flex items along the main axis](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_

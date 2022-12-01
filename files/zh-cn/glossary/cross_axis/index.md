---
title: 交叉轴
slug: Glossary/Cross_Axis
original_slug: Glossary/交叉轴
---

弹性容器 {{glossary("flexbox")}} 的交叉轴和主轴 {{glossary("main axis")}} 垂直，因此如果弹性方向是 {{cssxref("flex-direction")}} 行 `row` 或者反向行 `row-reverse` ，那么交叉轴就是从上至下地垂直走向的。

![The cross axis runs down the column](basics3.png)

如果你的主轴是列 `column` 或者反向列 `column-reverse` ，那么交叉轴就是水平走向的。

![The cross axis runs along the row.](basics4.png)

要在交叉轴上对齐，是通过弹性容器的 `align-items` 属性来控制的，或者通过弹性元素的 `align-self` 属性来单独决定的对齐方式。在多行弹性容器中，交叉轴上有多余控件的话，你还可以用 `align-content` 来控制行的间距。

## 学习更多

### 属性参考

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex")}}

### 拓展阅读

- CSS 弹性容器指南：_[Basic Concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS 弹性容器指南：_[Aligning items in a flex container](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS 弹性容器指南：_[Mastering wrapping of flex items](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_

- [MDN Web Docs Glossary](/zh-CN/docs/Glossary)

  - {{Glossary("Cross Axis")}}
  - {{Glossary("Flex")}}
  - {{Glossary("Flex Container")}}
  - {{Glossary("Flex Item")}}
  - {{Glossary("Grid")}}

- 相关 CSS 属性

  - {{cssxref("align-content")}}
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("flex")}}
  - {{cssxref("flex-basis")}}
  - {{cssxref("flex-direction")}}
  - {{cssxref("flex-flow")}}
  - {{cssxref("flex-grow")}}
  - {{cssxref("flex-shrink")}}
  - {{cssxref("flex-wrap")}}
  - {{cssxref("justify-content")}}
  - {{cssxref("order")}}

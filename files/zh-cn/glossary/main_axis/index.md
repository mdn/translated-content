---
title: 主轴
slug: Glossary/Main_Axis
---

{{GlossarySidebar}}

{{glossary("flexbox", "弹性盒")}}的主轴（main axis）由 {{cssxref("flex-direction")}} 属性设置的方向所定义。`flex-direction` 有四个取值，分别是：

- `row`
- `row-reverse`
- `column`
- `column-reverse`

假如选择 `row` 或者 `row-reverse`，那么主轴会沿行向延伸。

![此图中 flex-direction 为 row，由此构成主轴](basics1.png)

选择 `column` 或者 `column-reverse`，那么主轴会沿块向从页面上侧延伸到下侧。

![三个弹性元素占据了容器的全部宽度，按代码顺序依次从上到下显示。flex-direction 设置为 column。主轴为纵向的，即从上到下。](basics2.png)

元素的 `flex` 属性可将主轴上的任何可用空间加入元素自身，由此可在主轴上控制弹性元素的尺寸。或者你可以用 `justify-content` 属性控制元素之间和周围的空间。

## 参见

### 属性参考

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### 拓展阅读

- CSS 弹性盒指南：_[弹性盒的基本概念](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS 弹性盒指南：_[在弹性容器中对齐元素](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS 弹性盒指南：_[控制弹性元素在主轴上的占比](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_

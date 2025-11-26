---
title: Inset 属性
slug: Glossary/Inset_properties
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

CSS **inset 属性**通过指定元素相对于默认位置的偏移量控制定位元素的位置。inset 属性包括物理、逻辑和简写的 inset 属性。

inset 属性包括物理属性（{{cssxref("top")}}、{{cssxref("left")}}、{{cssxref("bottom")}} 和 {{cssxref("right")}}）、与流式布局相关的等价{{glossary("logical properties", "逻辑属性")}}（{{cssxref("inset-block-start")}}、{{cssxref("inset-block-end")}}、{{cssxref("inset-inline-start")}} 和 {{cssxref("inset-inline-end")}}），以及 {{cssxref("inset-block")}}、{{cssxref("inset-inline")}} 和 {{cssxref("inset")}} 简写。

**物理属性**引用元素的特定物理边界。逻辑属性使用相对于块轴和行轴的方向关键字。**块轴**是指定义块布局中元素堆叠顺序的轴。**行轴**与块轴垂直，代表文本等行级内容在区块内流动的方向。这些映射取决于元素的 {{cssxref("writing-mode")}}、{{cssxref("direction")}} 和 {{cssxref("text-orientation")}}。

inset 属性的解释取决于 {{cssxref("position")}} 属性的值。当设置 `position: absolute` 时，它们代表从[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)或[锚点元素](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning/Using)插入。如果使用 `position: relative`，它们表示从盒子的默认外边距边缘位置插入。如果使用 `sticky`，则表示从{{glossary("scroll container", "滚动容器")}}的边缘嵌入。`fixed` 值与 `absolute` 类似，只是元素的位置和大小是相对于其固定定位的包含块（通常是视口）而言的。

## 参见

- [布局与包含快](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)
- [CSS 定位布局](/zh-CN/docs/Web/CSS/Guides/Positioned_layout)模块
- [CSS 逻辑属性和值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)模块
- [CSS 锚点定位](/zh-CN/docs/Web/CSS/Guides/Anchor_positioning)模块

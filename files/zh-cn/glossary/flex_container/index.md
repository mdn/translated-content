---
title: 弹性容器
slug: Glossary/Flex_Container
---

{{GlossarySidebar}}

在父元素的 `display` 属性上使用 `flex` 或 `inline-flex` 值可定义{{glossary("flexbox", "弹性盒")}}布局。此元素由此变为**弹性容器**（flex container），其任意子元素变为{{glossary("flex item", "弹性元素")}}（flex item）。

`flex` 值导致元素变为块级弹性容器，而 `inline-flex` 为行级弹性容器。这些值为元素创建了与区块格式化上下文相似的**弹性格式化上下文**（flex formatting context），浮动体将不会侵入容器，且容器的外边距将不会与元素的外边距发生折叠。

## 参见

### 属性参考

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("flex")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### 拓展阅读

- CSS 弹性盒指南：_[弹性盒的基本概念](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS 弹性盒指南：_[在弹性容器中对齐元素](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS 弹性盒指南：_[掌握弹性元素的折行](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)_

---
title: 交叉轴
slug: Glossary/Cross_Axis
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{glossary("flexbox", "弹性盒子")}}的**交叉轴**和{{glossary("main axis", "主轴")}}垂直，因此如果 {{cssxref("flex-direction")}} 是 `row` 或 `row-reverse`，那么交叉轴就是从上至下垂直走向的。

![交叉轴沿列方向](basics3.png)

如果你的主轴是列（`column`）或者反向列（`column-reverse`），那么交叉轴就是水平走向的。

![交叉轴沿行方向](basics4.png)

交叉轴上的对齐由通过弹性容器的 `align-items` 属性，或每个弹性元素上的 `align-self` 属性控制。在多行弹性容器中，交叉轴上有多余控件的话，你还可以用 `align-content` 来控制行的间距。

## 参见

### 属性参考

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("order")}}

### 拓展阅读

- CSS 弹性盒子指南：
  - [弹性布局的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
  - [对齐弹性容器中的弹性项目](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
  - [掌握弹性项目的包装](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)

- [术语](/zh-CN/docs/Glossary)
  - {{Glossary("Flex", "弹性布局")}}
  - {{Glossary("Flex Container", "弹性容器")}}
  - {{Glossary("Flex Item", "弹性项目")}}
  - {{Glossary("Grid", "网格")}}

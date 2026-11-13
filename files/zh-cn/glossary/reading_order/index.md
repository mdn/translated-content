---
title: 阅读顺序
slug: Glossary/Reading_order
l10n:
  sourceCommit: 7dda25db814fed5ae7498baaee80009b3569a8dc
---

**阅读顺序**（Reading order）指的是内容被访问的顺序，例如被{{glossary("screen reader", "屏幕阅读器")}}朗读时的顺序，或通过顺序导航方式（如使用 Tab 键遍历链接或按钮）访问时的顺序。默认情况下，网页的阅读顺序由文档的源代码顺序决定。

通常，源代码顺序应符合内容合理的阅读顺序，并且应与内容布局的视觉顺序相一致。然而，有时视觉顺序与源代码顺序会不同步。例如，你可能会根据[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)为文档应用不同的布局，以适应各种设备或用户需求，或者通过 [`tabindex`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/tabindex) 调整 Tab 键导航顺序。

这些调整可能会导致无障碍相关的问题。例如，当有视觉能力的用户使用屏幕阅读器通过 Tab 键遍历内容时，如果屏幕阅读器的顺序与视觉顺序不一致，会产生糟糕的用户体验，甚至导致内容无法访问。无论用户如何访问内容，阅读顺序都应当合理。

## 在 CSS 中修改阅读顺序

可以通过 {{cssxref("reading-flow")}} 属性修改元素的阅读顺序，并通过为子项设置 {{cssxref("reading-order")}} 属性进一步调整。

理解修改后的阅读顺序时，以下的定义很重要：

- 阅读流容器
  - : 通过设置 {{cssxref("reading-flow")}} 和 {{cssxref("reading-order")}} 属性而具有修改后阅读顺序的元素。
- 阅读流
  - : 阅读流容器的子元素的修改后阅读顺序。

## 参见

- {{cssxref("reading-flow")}}
- {{cssxref("reading-order")}}
- {{cssxref("flex-direction")}}
- {{cssxref("order")}}
- [`tabindex`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/tabindex)

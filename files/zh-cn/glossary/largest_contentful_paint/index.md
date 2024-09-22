---
title: 最大内容绘制
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**最大内容绘制**（LCP）性能指标提供了在视口内可见的最大图像或文本块的渲染时间（从页面开始加载时开始记录）。

确定 LCP 时会考虑以下元素：

- {{HTMLElement("img")}} 元素。
- SVG 中的 [`<image>`](/zh-CN/docs/Web/SVG/Element/image) 元素。
- {{HTMLElement("video")}} 元素的封面图像。
- 具有 {{cssxref("background-image")}} 的元素。
- 文本节点（例如 {{HTMLElement("p")}}）分组。

## 参见

- [`LargestContentfulPaint`](/zh-CN/docs/Web/API/LargestContentfulPaint)
- [首次内容绘制](/zh-CN/docs/Glossary/First_contentful_paint)
- [首次绘制](/zh-CN/docs/Glossary/First_paint)

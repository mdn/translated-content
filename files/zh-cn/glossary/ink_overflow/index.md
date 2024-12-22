---
title: 墨水溢出
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

**墨水溢出**指的是盒子及其内容在边框外产生视觉效果的部分。由于只是视觉效果，墨水溢出不会影响布局，也不会对盒子模型属性产生影响。

墨水溢出包括诸如 [box-shadow](/zh-CN/docs/Web/CSS/box-shadow)、[边框图片](/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders)、[文本装饰](/zh-CN/docs/Web/CSS/CSS_text_decoration)、[轮廓](/zh-CN/docs/Web/CSS/outline)等绘制效果的溢出，这些效果不会影响布局或扩展可滚动溢出区域。墨水溢出还包括字形的悬挂部分，例如超出 em 盒的升部和降部。

由于[替换元素](/zh-CN/docs/Web/CSS/Replaced_element)始终建立一个独立的[格式化上下文](/zh-CN/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)，任何替换内容的溢出始终是墨水溢出（而非[可滚动溢出](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Overflow)）。

## 参见

- [CSS 溢出模块](/zh-CN/docs/Web/CSS/CSS_overflow)

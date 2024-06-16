---
title: 对齐主体
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

在 [CSS 盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)中，对齐主体是由属性决定的进行对齐的事物。

对于 {{cssxref("justify-self")}} 和 {{cssxref("align-self")}}，对齐主体是设置这些属性的盒子的外边距框，并且使用该盒子的书写模式。{{cssxref("justify-content")}}、{{cssxref("align-content")}} 属性也会使用盒子的书写模式。

对齐主体的定义取决于所使用的布局模式。

- 块级容器（包括表格单元格）
  - : 将整个块的内容作为一个单位。
- 多列容器
  - : 列盒子及其间插入的任何列间距。
- 弹性容器
  - : 对于 {{cssxref("justify-content")}}，是每个弹性行中的弹性项目。对于 {{cssxref("align-content")}}，是弹性行。注意，这只对多行弹性容器有效。
- 网格容器
  - : 适当轴上的网格轨道及轴之间的间距。合并的网格间距会被视作一个间距插入的机会。

## 参见

- [CSS 盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)模块

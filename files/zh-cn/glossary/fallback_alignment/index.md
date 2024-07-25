---
title: 备用对齐
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

在 [CSS 盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)中，可以通过指定备用对齐方式来应对无法满足请求的对齐的情况。例如，如果你指定了 `justify-content: space-between`，那么必须有多个[对齐对象](/zh-CN/docs/Glossary/Alignment_Subject)。如果没有，则使用备用对齐方式。每种对齐方法的具体备用对齐方式如下所示。

- 第一基线
  - : `start`
- 最后基线
  - : `safe end`
- 基线
  - : `start`
- 两端对齐
  - : `flex-start`（开始）
- 周围对齐
  - : `center`
- 均匀对齐
  - : `center`
- 拉伸
  - : `flex-start`（开始）

## 参见

- [CSS 盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)

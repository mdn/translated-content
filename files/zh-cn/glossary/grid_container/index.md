---
title: 网格容器
slug: Glossary/Grid_Container
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

通过使用 `grid` 或 `inline-grid` 的值，可以使用 [CSS 网格布局](/zh-CN/docs/Web/CSS/CSS_grid_layout)将一个元素变为为**网格容器**，并且使它的所有直接子元素都会成为网格项目。

网格容器会创建一个**网格格式化上下文**。它的直接子元素通过定义 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}} 属性可以将自己变为*显式网格*，当某个元素不在显示网格内时，它就会变为*隐式网格*。

## 参见

### 属性参考

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### 扩展阅读

- CSS 网格布局指南：_[网格布局的基本概念](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_

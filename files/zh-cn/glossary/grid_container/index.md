---
title: Grid container
slug: Glossary/Grid_Container
---

通过设置 CSS 属性 `display:grid;` 或 `display:inline-grid;` 可以将一个元素定义为**网格容器**(**grid container**)，并且它的所有直接子元素都会成为网格项。

网格容器会创建一个**网格化环境**(**grid firmatting context**) 。它的直接子元素通过定义 {{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-rows")}} 属性可以将自己变为*显式网格*，当某个元素不在显示网格内时，它就会变为*隐式网格*。

## 了解更过

### 属性参考

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### 扩展阅读

- CSS 网格布局：_[网格布局基本概念](/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_

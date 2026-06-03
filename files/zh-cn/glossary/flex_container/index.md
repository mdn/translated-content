---
title: 弹性容器
slug: Glossary/Flex_Container
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

在父元素的 `display` 属性上使用 `flex` 或 `inline-flex` 值可定义{{glossary("flexbox", "弹性盒")}}布局。此元素由此变为**弹性容器**（flex container），其任意子元素变为{{glossary("flex item", "弹性项目")}}。

`flex` 值会使元素变为块级弹性容器，而 `inline-flex` 值则会使元素变为行内级弹性容器。这些值为元素创建了一个**弹性格式化上下文**，类似于块格式化上下文，其中浮动元素不会侵入容器，容器的边距也不会与项目的边距重叠。

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

- CSS 弹性盒指南：_[flex 布局的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)_
- CSS 弹性盒指南：_[对齐弹性容器中的弹性项目](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)_
- CSS 弹性盒指南：_[掌握弹性项目的包装](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)_
- Firefox 开发者工具 > 如何：_[CSS 弹性盒检查器：检查弹性盒布局](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)_

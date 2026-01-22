---
title: 流相对值
slug: Glossary/Flow_relative_values
l10n:
  sourceCommit: 63249f6b1e89f42e172878c54a2f9674bee50904
---

CSS 中**流相对值**是相对于一个元素的块轴、行轴而言的方向性关键字值，包括 `block-start`、`block-end`、`inline-start`、`inline-end`、`start` 和 `end`。

CSS 的{{glossary("physical properties", "物理属性")}}基于物理方向与参考元素的特定边定义了位置。

CSS 的{{glossary("logical properties", "逻辑属性")}}则基于文档的书写模式、方向（而非视口的物理像素）定义了这些样式。逻辑属性是相对于内容流的，并且使用的是相对于一个元素的块轴、行内轴而言的方向性关键词。

## 块向

**块轴**指定了区块布局中元素的堆叠顺序的轴。它实际上是内容区块（如段落（{{htmlelement("p")}}）、标题和 {{htmlelement("div")}}）在网页上的布局方向。这也被称为**块向**。在从左到右和从左到右的语言中，块向是内容流的垂直方向：从上到下。

**block-start** 和 **block-end** 方向分别表示沿块轴的内容的*起始边*、_结束边_，或者“从”、“到”方向，水平书写模式中，`block-start` 相当于的 `top`，`block-end` 相当于 `bottom`。

## 行向

**行轴**与块轴垂直，表示块内的行级内容（如文本）的流动方向（**行向**）。在英语等从左到右的书写模式中，行向是水平的从左到右。在阿拉伯语和希伯来语等从右到左的语言中，行向则是水平的从右到左。

**inline-start** 和 **inline-end** 分别表示沿行轴的内容的*起始侧*和*结束侧*，其中 `inline-start` 和 `inline-end` 的值和属性等同于水平书写模式中的 `left` 和 `right` 属性和值（具体对应关系视书写方向而定）。例如，在从左到右的语言中，`inline-start` 是 `left`，在从右到左的语言中是 `right`。

## Start 与 End

CSS 属性的效果可以是一维的或二维的。例如，{{cssxref("text-align")}} 只涉及文本的行内方向，因此是一维的。当在上下文中限制为一维时，流相对关键字被缩写为 `start` 或 `end`。

## 参见

- [CSS 逻辑属性与值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)模块
- [逻辑属性与值的基本概念](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts)

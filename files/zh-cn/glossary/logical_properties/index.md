---
title: 逻辑属性
slug: Glossary/Logical_properties
l10n:
  sourceCommit: aa0ae01fcb69a07b099406e5d6ce907ee9b2f929
---

{{GlossarySidebar}}

CSS **逻辑属性**提供了一种基于文档的书写模式和方向而不是视口的物理尺寸来布局内容的方法。这使得设计更加灵活和易于维护，尤其是对那些支持多语言的网站。

{{glossary("physical properties", "物理属性")}}（如{{cssxref("top")}}、{{cssxref("right")}}、{{cssxref("padding-bottom")}} 和 {{cssxref("border-bottom-left-radius")}}）定义基于物理方向的位置和特性、引用元素的特定边，逻辑属性（如{{cssxref("inset-block-start")}}、{{cssxref("inset-inline-end")}}、{{cssxref("padding-block-end")}} 和 {{cssxref("border-end-end-radius")}}）则使用相对于块和行级轴的内容流的逻辑方向关键字。

## 块级方向

**块轴**指定了块布局中元素的堆叠顺序的轴。它实际上是内容块（如段落（{{htmlelement("p")}}）、标题和 {{htmlelement("div")}}）在网页上的布局方向。这也被称为**块级方向**。在从左到右和从左到右的语言中，块级方向是内容流的垂直方向：从上到下。

**block-start** 和 **block-end** 方向分别表示沿块轴的内容的*起始边*、_结束边_，或者“从”、“到”方向，其中 `block-start` 相当于水平书写模式中的 `top`，`block-end` 相当于 `bottom`。

## 行级方向

**行级轴**与块轴垂直，表示块内的行级内容（如文本）的流动方向（**行级方向**）。在英语等从左到右的书写模式中，行级方向是水平的从左到右。在阿拉伯语和希伯来语等从右到左的语言中，行级方向则是水平的从右到左。

**inline-start** 和 **inline-end** 分别表示沿行级轴的内容的*起始侧*和*结束侧*，其中 `inline-start` 和 `inline-end` 的值和属性等同于水平书写模式中的 `left` 和 `right` 属性和值。哪个等同于 `right` 或 `left` 取决于书写方向。例如，在从左到右的语言中，`inline-start` 是 `left`，在从右到左的语言中是 `right`。

## 参见

- [CSS 逻辑属性和值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)模块

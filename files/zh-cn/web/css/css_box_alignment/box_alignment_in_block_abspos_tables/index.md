---
title: 区块、绝对定位和表格布局中的盒子对齐
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
---

[盒子对齐规范](/zh-CN/docs/Web/CSS/CSS_box_alignment)详细说明了对齐在各种布局方法中的工作原理。在本页，我们研究盒子对齐在块布局上下文中的工作方式，包括浮动、定位和表格元素。由于本页旨在详细介绍专门与块布局和盒子对齐相关的内容，它应与主要的[盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)页面一起阅读，该页面详细介绍了盒子对齐在各种布局方法中的共同特性。

> [!NOTE]
> 在撰写本文时（2018 年 5 月），块布局中实际上还不支持盒子对齐属性。本文详细介绍了这些属性在规范中如何期望被实现的情况，以求完整性，并可能会随着规范和浏览器实现的发展而改变。

## align-content 和 justify-content

{{cssxref("justify-content")}} 属性不适用于块容器或表格单元格。

{{cssxref("align-content")}} 属性适用于块向轴，以对容器中的内容进行对齐。如果请求了一个内容分布方法如 `space-between`、`space-around` 或 `space-evenly`，那么将使用后备对齐，因为内容被视为一个[对齐主体](/zh-CN/docs/Glossary/Alignment_Subject)。

## justify-self

{{cssxref("justify-self")}} 属性用于在行向轴上对包含块中的项目进行对齐。

此属性不适用于浮动元素或表格单元格。

## align-self

{{cssxref("align-self")}} 属性不适用于块级框（包括浮动），因为块轴上有多个项目。它也不适用于表格单元格。

### 使用绝对定位的元素

对齐容器是带有 top、left、bottom 和 right 偏移值的定位块。正常关键字解析为 `stretch`，除非定位项目是一个替换元素，在这种情况下它解析为 `start`。

## 在这些布局方法中进行对齐的现状

由于我们当前没有浏览器支持块布局中的盒子对齐，因此你可以选择使用现有的对齐方法之一，或者将容器内的单个项目设置为弹性项目，以使用弹性盒子中指定的对齐属性。

区块水平对齐在弹性盒子之前通常通过对块设置自动边距来实现。{{cssxref("margin")}} 值为 `auto` 会吸收该维度中所有的可用空间，因此通过为块设置左右自动边距可以将其居中：

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

在表格布局中，你可以使用 {{cssxref("vertical-align")}} 属性对单元格中的内容在该单元格内进行对齐。

对于许多使用场景，将块容器转换为弹性项目将为你提供所需的对齐能力。在下面的示例中，含有单个项目的容器已转换为弹性容器，以便能够使用对齐属性。

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## 参考

### CSS 属性

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### 术语条目

- [对齐主体](/zh-CN/docs/Glossary/Alignment_Subject)
- [对齐容器](/zh-CN/docs/Glossary/Alignment_Subject)
- [后备对齐](/zh-CN/docs/Glossary/Fallback_Alignment)

{{CSSRef}}

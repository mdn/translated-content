---
title: 盒子布局方式：块布局、绝对定位和表格布局
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
page-type: guide
---

[Box对齐规格书](/en-US/docs/Web/CSS/CSS_box_alignment) 详细介绍了对齐在各种布局方法中的工作原理。在本页,我们研究 box 对齐在块布局上下文中的工作方式,包括浮动、定位和表格元素。由于本页旨在详细介绍专门与块布局和 box 对齐相关的内容,它应与主要的 [Box 对齐](/en-US/docs/Web/CSS/CSS_box_alignment) 页面一起阅读,该页面详细介绍了 box 对齐在各种布局方法中的共同特点。

> **注意:**在撰写本文时(2018 年 5 月),块布局中实际上还不支持 box 对齐属性。本文详细介绍了这些属性在规范中如何期望被实现的情况,以求完整性,并可能会随着规范和浏览器实现的发展而改变。

## align-content 和 justify-content

{{cssxref("justify-content")}} 属性不适用于块容器或表格单元格。

{{cssxref("align-content")}} 属性适用于块轴,以对容器中的内容进行对齐。如果请求了一个内容分布方法如 `space-between`、`space-around` 或 `space-evenly`,那么将使用后备对齐,因为内容被视为一个[对齐主体](/zh-CN/docs/Glossary/Alignment_Subject)。


## justify-self

{{cssxref("justify-self")}} 属性用于在内联轴上对包含块中的项目进行对齐。

此属性不适用于浮动元素或表格单元格。

## align-self

{{cssxref("align-self")}} 属性不适用于块级框(包括浮动),因为块轴上有多个项目。它也不适用于表格单元格。

### 使用绝对定位的元素

对齐容器是带有 top、left、bottom 和 right 偏移值的定位块。正常关键字解析为 `stretch`,除非定位项目是一个替换元素,在这种情况下它解析为 `start`。

## 在这些布局方法中进行对齐的现状

由于我们当前没有浏览器支持块布局中的 box 对齐,您对齐的选择是使用现有的对齐方法,或者使容器内的单个项目成为弹性项目,以利用flexbox中的对齐属性如规范中指定的那样。

块水平对齐在 flexbox 之前通常通过对块设置自动边距来实现。{{cssxref("margin")}}值为`auto` 会吸收该维度中所有的可用空间,因此通过为块设置左右自动边距可以将其 centered:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

在表格布局中,您可以使用{{cssxref("vertical-align")}}属性对单元格中的内容在该单元格内进行对齐。

对于许多使用场景,将块容器转换为弹性项目将给您 looking for 的对齐能力。在下面的示例中,含有单个项目的容器已转换为弹性容器,以便能够使用对齐属性。

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## 引用

### CSS 属性

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### 词汇条目

- [Alignment subject](/en-US/docs/Glossary/Alignment_Subject)
- [Alignment container](/en-US/docs/Glossary/Alignment_Container)
- [Fallback alignment](/en-US/docs/Glossary/Fallback_Alignment)

{{CSSRef}}
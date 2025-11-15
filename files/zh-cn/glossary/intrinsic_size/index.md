---
title: 固有尺寸
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: 726f971467b4cdd339e29ee10403fce5b3e87f42
---

在 CSS 中，元素的*固有尺寸*是指基于其内容的尺寸，不考虑它所在的上下文影响。例如，CSS [盒模型](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model)属性应用的尺寸。元素的固有尺寸由其 {{cssxref("min-content")}} 和 {{cssxref("max-content")}} 尺寸表示。

行级元素的尺寸是固有的：[尺寸](/zh-CN/docs/Web/CSS/Guides/Box_sizing)和[盒](/zh-CN/docs/Web/CSS/Guides/Box_model)属性，包括 {{cssxref("height")}}、{{cssxref("width")}}、{{cssxref("block-size")}}、{{cssxref("inline-size")}}、{{cssxref("padding-block")}} 和 {{cssxref("margin-block")}} 都对其没有影响（尽管 {{cssxref("margin-inline")}} 和 {{cssxref("padding-inline")}} 有影响）。

例如，行级元素 {{htmlelement("span")}} 的最小固有尺寸是在不应用其他 CSS 盒属性的情况下，它在一个行向尺寸为 `0px` 的容器内浮动时的最小尺寸。最大的固有尺寸则相反，是指其容器的行向尺寸为无限时的大小。

对于图像，固有尺寸与文本的含义相同——在不应用任何 CSS 来改变渲染的情况下，图像显示的尺寸。

像素密度和分辨率影响固有尺寸。默认情况下，假定图像具有“1x”像素密度（1 设备像素=1 CSS 像素），此时固有尺寸只是像素高度和宽度。图像的固有尺寸和分辨率可以在其 {{Glossary("EXIF")}} 数据中明确指定。图像的像素密度也可以使用 [`srcset`](/zh-CN/docs/Web/HTML/Reference/Elements/img#srcset) 属性设置。请注意，如果同时使用两种机制，则 `srcset` 值覆盖 EXIF 值。

固有尺寸及其计算方式在 [CSS 尺寸模块](/zh-CN/docs/Web/CSS/Guides/Box_sizing)中定义。

#### 最小固有尺寸

要根据元素的最小固有尺寸进行设置，可以将 {{cssxref("inline-size")}}（或在横向书写模式中使用的 {{cssxref("width")}}）设置为 {{cssxref("min-content")}}。这将元素设置为文本在行内方向尽可能小地换行而不溢出的尺寸，并尽可能多地进行软换行。对于包含一串文本的盒子，最小固有尺寸由最长的单词决定。

```html hidden
<p>文本会换行，让这个元素与最宽的单词一样宽。</p>
```

```css
p {
  inline-size: min-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('最小固有尺寸', '100%', '220') }}

## 最大固有尺寸

最大固有尺寸则相反。如果容器的行内尺寸是无限的，元素的尺寸是多大？文本内容将尽可能显示宽，不进行软换行，即使溢出容器。关键字值 {{cssxref("max-content")}} 设置了这种行为。

```html hidden
<p>因为文本不换行，元素会伸长。</p>
<p>
  这个段落可能会比整个页面的宽度还要大一些，也不会换行，因为设置了
  <code>width: max-content</code>。也因此，可能会溢出容器。
</p>
```

```css
p {
  width: max-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('最大固有尺寸', '100%', '200') }}

## 非固有尺寸

**非固有尺寸**（extrinsic size）与*固有尺寸*相反，是基于元素的上下文，而不考虑其内容的尺寸。非固有尺寸由盒模型属性值决定。在非固有尺寸中，百分比指定了盒子相对于其包含块的大小。

## 参见

- CSS {{cssxref("min-content")}}、{{cssxref("max-content")}} 和 {{cssxref("fit-content")}}属性值。
- CSS {{cssxref("aspect-ratio")}} 属性
- [CSS 盒模型](/zh-CN/docs/Web/CSS/Guides/Box_sizing)模块
- [CSS 尺寸规范：固有尺寸](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)

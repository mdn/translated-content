---
title: border-image
slug: Web/CSS/border-image
---

{{CSSRef}}

**`border-image`** [CSS](/zh-CN/docs/Web/CSS) 属性在给定元素的周围绘制图像，取代元素的常规[边框](/zh-CN/docs/Web/CSS/border)。

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> **注意：**你应该另外指定 {{cssxref("border-style")}} 以防边框图像没能加载。虽然规范并没有严格要求这一点，但当 {{cssxref("border-style")}} 为 `none` 或 {{cssxref("border-width")}} 为 `0` 时，某些浏览器不会渲染边框图像。

## 成分属性

此属性为以下 CSS 属性的简写：

- [`border-image-outset`](/zh-CN/docs/Web/CSS/border-image-outset)
- [`border-image-repeat`](/zh-CN/docs/Web/CSS/border-image-repeat)
- [`border-image-slice`](/zh-CN/docs/Web/CSS/border-image-slice)
- [`border-image-source`](/zh-CN/docs/Web/CSS/border-image-source)
- [`border-image-width`](/zh-CN/docs/Web/CSS/border-image-width)

## 语法

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;

/* Global values */
border-image: inherit;
border-image: initial;
border-image: revert;
border-image: revert-layer;
border-image: unset;
```

`border-image` 属性可以用下面列出的 1 到 5 个值中的任意值指定。

> **注意：**如果 {{cssxref("border-image-source")}} 的[计算值](/zh-CN/docs/Web/CSS/computed_value)为 `none`，或图像无法显示，则将显示 {{cssxref("border-style")}}。

### 值

- `<'border-image-source'>`
  - : 源图像。见 {{cssxref("border-image-source")}}。
- `<'border-image-slice'>`
  - : 尺寸，用于将源图像切割为多个部分。最多可以指定四个值。见 {{cssxref("border-image-slice")}}。
- `<'border-image-width'>`
  - : 边框图像的宽度。最多可以指定四个值。见 {{cssxref("border-image-width")}}。
- `<'border-image-outset'>`
  - : 边框图像到元素外部边缘的距离。最多可以指定四个值。见 {{cssxref("border-image-outset")}}。
- `<'border-image-repeat'>`
  - : 定义源图像边缘部分适应边框图像尺寸的方式。最多可以指定两个值。见 {{cssxref("border-image-repeat")}}。

### 无障碍考虑

辅助技术无法解析边框图像。如果图像包含对理解页面的整体内容至关重要的信息，最好在文档中对其进行语义描述。

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

### 正式语法

{{csssyntax}}

## 示例

### 位图

#### HTML 内容

```html
<div id="bitmap">The image is stretched to fill the area.</div>
```

#### CSS 内容

```css
#bitmap {
  border: 30px solid transparent;
  padding: 20px;
  border-image: url("border.png") 30;
}
```

{{ EmbedLiveSample('位图') }}

### 渐变

#### HTML 内容

```html
<div id="gradient">The image is stretched to fill the area.</div>
```

#### CSS 内容

```css
#gradient {
  border: 30px solid;
  border-image: linear-gradient(red, yellow) 10;
  padding: 20px;
}
```

{{ EmbedLiveSample('渐变') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

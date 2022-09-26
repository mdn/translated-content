---
title: mask-image
slug: Web/CSS/mask-image
---

{{CSSRef}}{{SeeCompatTable}}

## 概要

**`mask-image`** [CSS](/zh-CN/docs/Web/CSS)属性用于设置元素上遮罩层的图像。

{{cssinfo}}

## 语法

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url(masks.svg#mask1);

/* <image> values */
mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
mask-image: image(url(mask.png), skyblue);

/* Multiple values */
mask-image: image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1.0), transparent);

/* Global values */
mask-image: inherit;
mask-image: initial;
mask-image: unset;
```

### Values

- `none`
  - : 默认值，透明的黑色图像层，也就是没有遮罩层。
- `<mask-source>`
  - : `<mask>`或 CSS 图像的 url
- {{cssxref("&lt;image&gt;")}}
  - : 图片作为遮罩层

### Formal syntax

{{csssyntax}}

## 例子

### CSS

```css
#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
}
```

### HTML

```html
<div id="masked"></div>
```

{{EmbedLiveSample('例子', '100px', '100px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

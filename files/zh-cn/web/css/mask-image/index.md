---
title: mask-image
slug: Web/CSS/mask-image
---

{{CSSRef}}

**`mask-image`** [CSS](/zh-CN/docs/Web/CSS) 属性设置了用作元素蒙版层的图像。默认情况下，这意味着蒙版图像的 alpha 通道将与元素的 alpha 通道相乘。可以使用 {{cssxref("mask-mode")}} 属性对此进行控制。

```css
/* 关键字值 */
mask-image: none;

/* <mask-source> 值 */
mask-image: url(masks.svg#mask1);

/* <image> 值 */
mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
mask-image: image(url(mask.png), skyblue);

/* 多个属性值 */
mask-image:
  image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1), transparent);

/* 全局属性值 */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

## 语法

### 值

- `none`
  - : 默认值，透明的黑色图像层，也就是没有遮罩层。
- `<mask-source>`
  - : 一个引用了 {{SVGElement("mask")}} 或 CSS 图像的 {{cssxref("url_value", "&lt;url&gt;")}}。
- {{cssxref("&lt;image&gt;")}}
  - : 用作蒙版图像层的图像值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用 URL 设置蒙版图像

{{EmbedGHLiveSample("css-examples/masking/mask-image.html", '100%', 560)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 中的裁剪和遮罩](https://css-tricks.com/clipping-masking-css/)
- [使用 CSS 的 mask-image 属性对图像应用效果](https://web.developers.google.cn/articles/css-masking)

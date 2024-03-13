---
title: mask
slug: Web/CSS/mask
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`mask`** 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

```css
/* Keyword values */
mask: none;

/* Image values */
mask: url(mask.png); /* 使用位图来做遮罩 */
mask: url(masks.svg#star); /* 使用 SVG 图形中的形状来做遮罩 */

/* Combined values */
mask: url(masks.svg#star) luminance; /* Element within SVG graphic used as luminance mask */
mask: url(masks.svg#star) 40px 20px; /* 使用 SVG 图形中的形状来做遮罩并设定它的位置：离上边缘 40px，离左边缘 20px */
mask: url(masks.svg#star) 0 0/50px 50px; /* 使用 SVG 图形中的形状来做遮罩并设定它的位置和大小：长宽都是 50px */
mask: url(masks.svg#star) repeat-x; /* Element within SVG graphic used as horizontally repeated mask */
mask: url(masks.svg#star) stroke-box; /* Element within SVG graphic used as mask extending to the box enclosed by the stroke */
mask: url(masks.svg#star) exclude; /* Element within SVG graphic used as mask and combined with background using non-overlapping parts */

/* Global values */
mask: inherit;
mask: initial;
mask: unset;
```

> **备注：** mask 的简写会将 {{cssxref("mask-border")}} 设为初始值。使用 `mask` 的简写优于使用其他简写或者各自属性的设置来覆盖。这能保证 `mask-border` 也会重新设置为新的效果样式。

{{cssinfo}}

## Syntax

### Values

- `<mask-reference>`
  - : 设置遮罩图片的路径。详见 {{cssxref("mask-image")}}。
- `<masking-mode>`
  - : 设置遮罩图片的模式。详见 {{cssxref("mask-mode")}}。
- `<position>`
  - : 设置遮罩图片的位置。详见 {{cssxref("mask-position")}}。
- `<bg-size>`
  - : 设置遮罩的大小。详见 {{cssxref("mask-size")}}。
- `<repeat-style>`
  - : 设置遮罩图片的重复性。详见 {{cssxref("mask-repeat")}}。
- `<geometry-box>`
  - : 如果只有一个 \<geometry-box> 值被赋予，他将会设置 {{cssxref("mask-origin")}} 和 {{cssxref("mask-clip")}}。如果两个 \<geometry-box> 值显示，第一个值代表 {{cssxref("mask-origin")}} 第二个值代表 {{cssxref("mask-clip")}}。
- `<geometry-box> | no-clip`
  - : 设置区域，会被遮罩图片影响。详见 {{cssxref("mask-clip")}}。
- `<compositing-operator>`
  - : 设置遮罩图层的组合操作。详见 {{cssxref("mask-composite")}}。

### 正式语法

{{csssyntax}}

## 例子

```css
.target {
  mask: url(#c1) luminance;
}

.anothertarget {
  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("clip-path")}}, {{Cssxref("filter")}}
- [CSS Shapes, clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [Applying SVG effects to HTML content](/zh-CN/docs/Applying_SVG_effects_to_HTML_content)
- [SVG](/zh-CN/docs/SVG)

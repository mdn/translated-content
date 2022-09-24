---
title: border-image-source
slug: Web/CSS/border-image-source
---

{{CSSRef}}

## Summary

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-image-source`** 用于声明元素的[边框图片（border-image）](/zh-CN/docs/Web/CSS/border-image)的资源

{{EmbedInteractiveExample("pages/css/border-image-source.html")}}

属性 {{cssxref("border-image-slice")}} 被用于切割资源图片的区域，然后将其动态的应用到最终的边框图片

## Syntax

```css
/* no border-image, use the specified border-style */
border-image-source: none;

/* the image.jpg is used as image */
border-image-source: url(image.jpg);

/* a gradient is used as image */
border-image-source: linear-gradient(to top, red, yellow);

/* Global values */
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;
```

### Values

- `none`
  - : 不会使用图片边框。会被{{cssxref("border-style")}}属性所设置的边框样式替换掉
- `<image>`
  - : 用作边框的图片

### Formal syntax

{{csssyntax}}

## Examples

请查看示例 {{cssxref("border-image")}}。

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

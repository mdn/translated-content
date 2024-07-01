---
title: border-image-source
slug: Web/CSS/border-image-source
---

{{CSSRef}}

## Описание

The **`border-image-source`** CSS property defines the {{cssxref("&lt;image&gt;")}} to use instead of the style of the border. If this property is set to `none`, the style defined by {{cssxref("border-style")}} is used instead.

> **Примечание:** Though any {{cssxref("&lt;image&gt;")}} can be used with this CSS property, browser support is still limited and some browsers support only images defined using the `url()` functional notation.

{{cssinfo}}

## Синтаксис

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

### Значения

- `none`
  - : Specifies that no image should be used for the border. Instead the style defined by {{cssxref("border-style")}} is used.
- `<image>`
  - : Ссылка на изображение, которое будет использоваться в отрисовке границы.

### Формальный синтаксис

{{csssyntax}}

## Примеры

See {{cssxref("border-image")}} for examples of what the various source values will do.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

---
title: <image>
slug: Web/SVG/Reference/Element/image
---

{{SVGRef}}

Элемент \<image> позволяет включить растровые изображения в SVG документ.

## Usage context

{{svginfo}}

## Атрибуты

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("xlink:href")}}
- {{SVGAttr("preserveAspectRatio")}}

## DOM Interface

This element implements the [`SVGImageElement`](/ru/docs/Web/API/SVGImageElement) interface.

## Пример

Базовый рендеринг PNG изображения в качестве объекта SVG:

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image href="mdn_logo_only_color.png" height="200" width="200" />
</svg>
```

### Результат

{{EmbedLiveSample("Пример", 250, 260)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
---

{{SVGRef}}

Элемент **`<radialGradient>`** [SVG](/ru/docs/Web/SVG) позволяет авторам определять радиальные градиенты для заполнения или изменения графических элементов.

## Контекст использования

{{svginfo}}

## Атрибуты

- {{SVGAttr("gradientUnits")}}
- {{SVGAttr("gradientTransform")}}
- {{SVGAttr("cx")}}
- {{SVGAttr("cy")}}
- {{SVGAttr("r")}}
- {{SVGAttr("fx")}}
- {{SVGAttr("fy")}}
- {{SVGAttr("fr")}}
- {{SVGAttr("spreadMethod")}}
- {{SVGAttr("xlink:href")}}

## DOM интерфейс

Этот элемент реализует {{domxref("SVGRadialGradientElement")}} интерфейс.

## Пример

### SVG

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="exampleGradient">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="green" />
    </radialGradient>
  </defs>

  <circle fill="url(#exampleGradient)" cx="60" cy="60" r="50" />
</svg>
```

### Результат

{{EmbedLiveSample("Пример", 120, 120)}}

## Характеристики

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{SVGElement("linearGradient")}}

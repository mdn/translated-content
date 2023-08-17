---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
---

{{SVGRef}}

Элемент **`<radialGradient>`** [SVG](/ru/docs/Web/SVG) позволяет авторам определять радиальные градиенты для заполнения или изменения графических элементов.

## Контекст использования

{{svginfo}}

## Атрибуты

### Глобальные атрибуты

- [Основные атрибуты](/ru/docs/Web/SVG/Attribute#Core_attributes) »
- [Атрибуты презентации](/ru/docs/Web/SVG/Attribute#Presentation_attributes) »
- [Атрибуты Xlink](/ru/docs/Web/SVG/Attribute#XLink_attributes) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Специфические атрибуты

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

| Спецификация                                                                      | Статус              | Коммент               |
| --------------------------------------------------------------------------------- | ------------------- | --------------------- |
| {{SpecName('SVG2', 'pservers.html#RadialGradients', '&lt;radialGradient&gt;')}}   | {{Spec2('SVG2')}}   | Добавлен атрибут `fr` |
| {{SpecName('SVG1.1', 'pservers.html#RadialGradients', '&lt;radialGradient&gt;')}} | {{Spec2('SVG1.1')}} | Начальное определение |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- {{SVGElement("linearGradient")}}

---
title: <g>
slug: Web/SVG/Element/g
---

{{SVGRef}}

Элемент g используется для группировки других SVG элементов. Любые преобразования применяемые к g элементу наследуются его дочерними элементами. Также g используется для группировки различных элементов, чтобы позднее можно было сослаться на них с помощью {{SVGElement("use")}}.

## Контекст использования

{{svginfo}}

## Пример

```html
<svg viewBox="0 0 95 50" xmlns="http://www.w3.org/2000/svg">
  <g stroke="green" fill="white" stroke-width="5">
    <circle cx="25" cy="25" r="15" />
    <circle cx="40" cy="25" r="15" />
    <circle cx="55" cy="25" r="15" />
    <circle cx="70" cy="25" r="15" />
  </g>
</svg>
```

{{EmbedLiveSample("Пример",220,130)}}

## Атрибуты

### Глобальные атрибуты

- [Conditional processing attributes](/ru/docs/SVG/Attribute#ConditionalProccessing) »
- [Core attributes](/ru/docs/SVG/Attribute#Core) »
- [Graphical event attributes](/ru/docs/SVG/Attribute#GraphicalEvent) »
- [Presentation attributes](/ru/docs/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Специфичные атрибуты

_Нет специфичных атрибутов._

## Интерфейс DOM

Этот элемент реализует [`SVGGElement`](/ru/docs/DOM/SVGGElement) интерес.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{SVGElement("use")}}
- {{SVGElement("defs")}}
- {{SVGElement("symbol")}}
- [SVG элемент g](http://tutorials.jenkov.com/svg/g-element.html)

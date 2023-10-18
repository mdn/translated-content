---
title: <feBlend>
slug: Web/SVG/Element/feBlend
---

{{SVGRef}}

[SVG](/ru/docs/Web/SVG) фильтр примитивна **`<feBlend>`** объединяет два объекта, управляемых определённым режимом смешивания. Это похоже на работу программного обеспечения для редактирования изображений при смешивании двух слоёв. Режим определяется атрибутом {{SVGAttr("mode")}}.

## Используемый контекст

{{svginfo}}

## Атрибуты

### Глобальные атрибуты

- [Core attributes](/ru/docs/Web/SVG/Attribute#Core_attributes)
- [Presentation attributes](/ru/docs/Web/SVG/Attribute#Presentation_attributes)
- [Filter primitive attributes](/ru/docs/Web/SVG/Attribute#Filter_primitive_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Специальные атрибуты

- {{SVGAttr("in")}}
- {{SVGAttr("in2")}}
- {{SVGAttr("mode")}}

## DOM Interface

Этот элемент реализует интерфейс {{domxref("SVGFEBlendElement")}}.

## Пример

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feFlood
        result="floodFill"
        x="0"
        y="0"
        width="100%"
        height="100%"
        flood-color="green"
        flood-opacity="1" />
      <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
    </filter>
  </defs>

  <image
    xlink:href="//developer.mozilla.org/files/6457/mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    style="filter:url(#spotlight);" />
</svg>
```

### Результат

{{EmbedLiveSample("Пример", 200, 200)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/ru/docs/Web/SVG/Tutorial/Filter_effects)

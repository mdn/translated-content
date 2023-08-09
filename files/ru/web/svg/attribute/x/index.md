---
title: x
slug: Web/SVG/Attribute/x
---

« [Справочник SVG атрибутов](/ru/docs/Web/SVG/Attribute)

Этот атрибут указывает координату оси **`x`** в контексте системы координат. Точный эффект этого атрибута зависит от каждого элемента. В основном атрибут работает по оси x от верхнего левого угла прямоугольной области(см. документацию каждого отдельного элемента). Его синтаксис такой же, как и для [**`<length>`**.](https://www.w3.org/TR/SVG11/types.html#DataTypeLength)

Если атрибут **`x`** явно не указан, то эффект будет таким, как если бы значение атрибута равнялось бы **0**, за исключением элементов {{SVGElement ("filter")}} и {{SVGElement ("mask")}}, где значение по умолчанию равно **-10%**.

## Контекст использования

| Категории                  | None                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Значение                   | [\<coordinate>](/ru/SVG/Content_type#Coordinate)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Анимируемый                | Да                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Нормативные документы (en) | [SVG 1.1 (2nd Edition): altGlyph element](http://www.w3.org/TR/SVG/text.html#AltGlyphElementXAttribute) [SVG 1.1 (2nd Edition): cursor element](http://www.w3.org/TR/SVG/interact.html#CursorElementXAttribute) [SVG 1.1 (2nd Edition): fePointLight element](http://www.w3.org/TR/SVG/filters.html#fePointLightXAttribute) [SVG 1.1 (2nd Edition): feSpotLight element](http://www.w3.org/TR/SVG/filters.html#feSpotLightXAttribute) [SVG 1.1 (2nd Edition): filter element](http://www.w3.org/TR/SVG/filters.html#FilterElementXAttribute) [SVG 1.1 (2nd Edition): foreignObject element](http://www.w3.org/TR/SVG/extend.html#ForeignObjectElementXAttribute) [SVG 1.1 (2nd Edition): glyphRef element](http://www.w3.org/TR/SVG/text.html#GlyphRefElementXAttribute) [SVG 1.1 (2nd Edition): image element](http://www.w3.org/TR/SVG/struct.html#ImageElementXAttribute) [SVG 1.1 (2nd Edition): pattern element](http://www.w3.org/TR/SVG/pservers.html#PatternElementXAttribute) [SVG 1.1 (2nd Edition): rect element](http://www.w3.org/TR/SVG/shapes.html#RectElementXAttribute) [SVG 1.1 (2nd Edition): svg element](http://www.w3.org/TR/SVG/struct.html#SVGElementXAttribute) [SVG 1.1 (2nd Edition): text element](http://www.w3.org/TR/SVG/text.html#TextElementXAttribute) [SVG 1.1 (2nd Edition): use element](http://www.w3.org/TR/SVG/struct.html#UseElementXAttribute) [SVG 1.1 (2nd Edition): Filter primitive](http://www.w3.org/TR/SVG/filters.html#FilterPrimitiveXAttribute) [SVG 1.1 (2nd Edition): mask element](http://www.w3.org/TR/SVG/masking.html#MaskElementXAttribute) [SVG 1.1 (2nd Edition): tspan element](http://www.w3.org/TR/SVG/text.html#TSpanElementXAttribute) |

{{page("/ru/SVG/Content_type","coordinate")}}

## Пример

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100"/>
</svg>
```

## Элементы

Следующие элементы могут использовать атрибут `x`.

- `Filter primitive elements »`
- `{{SVGElement("altGlyph")}}`
- `{{SVGElement("fePointLight")}}`
- `{{SVGElement("feSpotLight")}}`
- `{{SVGElement("filter")}}`
- `{{SVGElement("foreignObject")}}`
- `{{SVGElement("glyphRef")}}`
- `{{SVGElement("image")}}`
- `{{SVGElement("pattern")}}`
- `{{SVGElement("rect")}}`
- `{{SVGElement("svg")}}`
- `{{SVGElement("text")}}`
- `{{SVGElement("use")}}`
- `{{SVGElement("mask")}}`
- `{{SVGElement("tref")}}`
- `{{SVGElement("tspan")}}`

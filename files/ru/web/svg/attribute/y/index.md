---
title: "y"
slug: Web/SVG/Attribute/y
---

« [Справочник SVG атрибутов](/ru/docs/Web/SVG/Attribute)

Атрибут **`y`** указывает координаты вертикальной оси системы координат в контексте объекта. В основном атрибут работает по оси y от верхнего левого угла прямоугольной области(см. документацию каждого отдельного элемента).

Если атрибут явно не указан, его значение по умолчанию равняется **0**, за исключением элементов {{SVGElement ("filter")}} и {{SVGElement ("mask")}}, где значение по умолчанию равняется **-10%** .

## Использование

| Категории                  | None                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Значение                   | [\<coordinate>](/ru/SVG/Content_type#Coordinate)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Анимация                   | Возможно                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Нормативные документы (en) | [SVG 1.1 (2nd Edition): altGlyph element](http://www.w3.org/TR/SVG/text.html#AltGlyphElementYAttribute) [SVG 1.1 (2nd Edition): cursor element](http://www.w3.org/TR/SVG/interact.html#CursorElementYAttribute) [SVG 1.1 (2nd Edition): fePointLight element](http://www.w3.org/TR/SVG/filters.html#fePointLightYAttribute) [SVG 1.1 (2nd Edition): feSpotLight element](http://www.w3.org/TR/SVG/filters.html#feSpotLightYAttribute) [SVG 1.1 (2nd Edition): filter element](http://www.w3.org/TR/SVG/filters.html#FilterElementYAttribute) [SVG 1.1 (2nd Edition): foreignObject element](http://www.w3.org/TR/SVG/extend.html#ForeignObjectElementYAttribute) [SVG 1.1 (2nd Edition): glyphRef element](http://www.w3.org/TR/SVG/text.html#GlyphRefElementYAttribute) [SVG 1.1 (2nd Edition): image element](http://www.w3.org/TR/SVG/struct.html#ImageElementYAttribute) [SVG 1.1 (2nd Edition): pattern element](http://www.w3.org/TR/SVG/pservers.html#PatternElementYAttribute) [SVG 1.1 (2nd Edition): rect element](http://www.w3.org/TR/SVG/shapes.html#RectElementYAttribute) [SVG 1.1 (2nd Edition): svg element](http://www.w3.org/TR/SVG/struct.html#SVGElementYAttribute) [SVG 1.1 (2nd Edition): text element](http://www.w3.org/TR/SVG/text.html#TextElementYAttribute) [SVG 1.1 (2nd Edition): use element](http://www.w3.org/TR/SVG/struct.html#UseElementYAttribute) [SVG 1.1 (2nd Edition): Filter primitive](http://www.w3.org/TR/SVG/filters.html#FilterPrimitiveYAttribute) [SVG 1.1 (2nd Edition): mask element](http://www.w3.org/TR/SVG/masking.html#MaskElementYAttribute) [SVG 1.1 (2nd Edition): tspan element](http://www.w3.org/TR/SVG/text.html#TSpanElementYAttribute) |

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

Следующие элементы могут использовать атрибут `y`.

- [Filter primitive elements](/ru/SVG/Element#FilterPrimitive) »
- {{SVGElement("altGlyph")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("filter")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("glyphRef")}}
- {{SVGElement("image")}}
- {{SVGElement("pattern")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("text")}}
- {{SVGElement("use")}}
- {{SVGElement("mask")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

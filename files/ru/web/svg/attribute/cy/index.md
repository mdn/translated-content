---
title: cy
slug: Web/SVG/Attribute/cy
---

« [Справочник SVG атрибутов](/ru/docs/Web/SVG/Attribute)

Для элементов {{ SVGElement("circle") }} и {{ SVGElement("ellipse") }} этот атрибут определяет координату центра элемента по оси y. Если атрибут не определён, то эффект такой, как если бы было указано значение "0".

Для элемента {{ SVGElement("radialGradient") }} этот атрибут определяет координату y небольшого(т.е. внешнего) круга в радиальном градиенте. Градиент будет нарисован так, чтобы значение градиента **100%** соответствовало периметру этого наибольшего(внешнего) круга. Если атрибут не определён, то эффект такой, как если бы было указано значение **50%**.

## Контекст использования

| Категории                  | None                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Значение                   | [\<coordinate>](/ru/docs/Web/SVG/Content_type#Coordinate)                                                                                                                                                                                                                                                                                            |
| Анимируемый                | Да                                                                                                                                                                                                                                                                                                                                                   |
| Нормативные документы (en) | [SVG 1.1 (2nd Edition): The circle element](http://www.w3.org/TR/SVG/shapes.html#CircleElementCYAttribute) [SVG 1.1 (2nd Edition): The ellipse element](http://www.w3.org/TR/SVG/shapes.html#EllipseElementCYAttribute) [SVG 1.1 (2nd Edition): The radialGradient element](http://www.w3.org/TR/SVG/pservers.html#RadialGradientElementCYAttribute) |

{{ page("/ru/docs/Web/SVG/Content_type","Coordinate") }}

## Пример

```xml
  <svg width="120" height="220"
     viewPort="0 0 120 120" version="1.1"
     xmlns="http://www.w3.org/2000/svg">

    <style type="text/css" >

      <![CDATA[
       circle.circleClass {
       stroke: #006600;
       fill:   #cc0000;
    }

      ]]>
    </style>
     <circle  class="circleClass"   cx="40" cy="50" r="26"/>
</svg>
```

## Элементы

Следующие элементы могут использовать атрибут `cy`

- {{ SVGElement("circle") }}
- {{ SVGElement("ellipse") }}
- {{ SVGElement("radialGradient") }}

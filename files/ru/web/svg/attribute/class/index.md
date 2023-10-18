---
title: class
slug: Web/SVG/Attribute/class
---

« [Домашняя страница справочника по SVG атрибутам](/en/SVG/Attribute)

Присвоение класса или набора классов элементу. Вы можете присвоить одинаковые классы/наборы классов любому количеству элементов. Если вы указываете(присваиваете) несколько имён классов, они должны быть разделены символом "пробел".

Класс элемента имеет 2 ключевые роли:

- Селектор таблицы стилей, для использования когда автор желает стилизировать набор(несколько) элементов.
- Для общих целей Броузера.

Класс может быть использован для стилизации SVG содержимого используя CSS.

## Контекст использования

| Категория            | None                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Значение             | [\<list-of-class-names>](/en/SVG/Content_type#List-of-Ts)                                          |
| Возможна анимация    | Yes                                                                                                |
| Нормативный документ | [SVG 1.1 (2nd Edition): The class attribute](http://www.w3.org/TR/SVG/styling.html#ClassAttribute) |

{{ page("/en/SVG/Content_type","List-of-Ts") }}

## Example

```html
<html>
  <body>
    <svg
      width="120"
      height="220"
      viewPort="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <style type="text/css">
        <![CDATA[
            rect.rectClass {
                stroke: #000066;
                fill:   #00cc00;
            }
            circle.circleClass {
                stroke: #006600;
                fill:   #cc0000;
            }
        ]]>
      </style>

      <rect class="rectClass" x="10" y="10" width="100" height="100" />
      <circle class="circleClass" cx="40" cy="50" r="26" />
    </svg>
  </body>
</html>
```

## Элементы

В следующих элементах допустимо использовать атрибут `class`

:{{ SVGElement("a") }}

- {{ SVGElement("altGlyph") }}
- {{ SVGElement("circle") }}
- {{ SVGElement("clipPath") }}
- {{ SVGElement("defs") }}
- {{ SVGElement("desc") }}
- {{ SVGElement("ellipse") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- {{ SVGElement("filter") }}
- {{ SVGElement("font") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("g") }}
- {{ SVGElement("glyph") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("image") }}
- {{ SVGElement("line") }}
- {{ SVGElement("linearGradient") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("mask") }}
- {{ SVGElement("missing-glyph") }}
- {{ SVGElement("path") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("polygon") }}
- {{ SVGElement("polyline") }}
- {{ SVGElement("radialGradient") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("stop") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("switch") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("text") }}
- {{ SVGElement("textPath") }}
- {{ SVGElement("title") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("tspan") }}
- {{ SVGElement("use") }}

## Совместимость с броузерами

{{Compat}}

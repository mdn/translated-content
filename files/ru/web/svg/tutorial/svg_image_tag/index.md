---
title: SVG image element
slug: Web/SVG/Tutorial/SVG_Image_Tag
---

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}

SVG тег {{ SVGElement("image") }} позволяет выводить растровые изображения внутри SVG-объектов.

В примере ниже растровое изображение **a.jpg**, заданное при помощи атрибута {{ SVGAttr("href") }}, отображено внутри SVG-объекта:

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
  <image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

> **Предупреждение:** Важные замечания (подробнее [W3 specs](http://www.w3.org/TR/SVG/struct.html#ImageElement)):

- Если параметры **x** или **y** не заданы, то им будут присвоены значения равные **0**.
- Если параметры **height** или **width** не заданы, то им будут присвоены значения равные **0**.
- Если значение любого из параметров изображения **height** или **width** равны **0**, то отображение отключено.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}

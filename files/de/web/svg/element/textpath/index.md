---
title: textPath
slug: Web/SVG/Element/textPath
translation_of: Web/SVG/Element/textPath
---
{{SVGRef}}

Neben der Fähigkeit, Text auf einer Geraden Linie zu zeichnen, kann SVG diesen auch entlang der Form eines {{ SVGElement("path") }} Elements platzieren. Um von dieser Funktion Gebrauch zu machen, füge den gewünschten Text in einem`textPath` Element mit einem`xlink:href` Attribut mit einer Referenz zu dem {{ SVGElement("path") }} Element.

## Usage context

{{svginfo}}

## Example

```html
<svg width="100%" height="100%" viewBox="0 0 1000 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path id="MyPath"
          d="M 100 200
             C 200 100 300   0 400 100
             C 500 200 600 300 700 200
             C 800 100 900 100 900 100" />
  </defs>

  <use xlink:href="#MyPath" fill="none" stroke="red"  />

  <text font-family="Verdana" font-size="42.5">
    <textPath xlink:href="#MyPath">
      We go up, then we go down, then up again
    </textPath>
  </text>

  <!-- Show outline of the viewport using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke="black" stroke-width="2" />
</svg>
```

Live result:

{{EmbedLiveSample("Example",500,175)}}

## Attributes

### Global attributes

- [Conditional processing attributes](/en/SVG/Attribute#ConditionalProccessing "en/SVG/Attribute#ConditionalProccessing") »
- [Core attributes](/en/SVG/Attribute#Core "en/SVG/Attribute#Core") »
- [Graphical event attributes](/en/SVG/Attribute#GraphicalEvent "en/SVG/Attribute#GraphicalEvent") »
- [Presentation attributes](/en/SVG/Attribute#Presentation "en/SVG/Attribute#Presentation") »
- [Xlink attributes](/en/SVG/Attribute#XLink "en/SVG/Attribute#XLink") »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}

### Specific attributes

- {{ SVGAttr("startOffset") }}
- {{ SVGAttr("method") }}
- {{ SVGAttr("spacing") }}
- {{ SVGAttr("xlink:href") }}

## DOM Interface

This element implements the [`SVGTextPathElement`](/en/DOM/SVGTextPathElement "en/DOM/SVGTextPathElement") interface.

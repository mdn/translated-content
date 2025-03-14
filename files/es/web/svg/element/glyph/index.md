---
title: glyph
slug: Web/SVG/Element/glyph
---

{{SVGRef}}

Un glifo define a un glifo en particular en una fuente SVG.

## Contexto de uso

| Categories         | Elemento de contenido de texto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Permitted content  | Cualquier número de los siguientes elementos, en cualquier orden: [elementos de animación](/es/docs/Web/SVG/Element#animation) » [elementos descriptivos](/es/docs/Web/SVG/Element#descriptive) » [elementos de forma](/es/docs/Web/SVG/Element#shape) » [elementos estructurales](/es/docs/Web/SVG/Element#structural) » [elementos de gradiente](/es/docs/Web/SVG/Element#gradient) » {{ SVGElement("a") }}, {{ SVGElement("altGlyphDef") }}, {{ SVGElement("clipPath") }}, {{ SVGElement("color-profile") }}, {{ SVGElement("cursor") }}, {{ SVGElement("filter") }}, {{ SVGElement("font") }}, {{ SVGElement("font-face") }}, {{ SVGElement("foreignObject") }}, {{ SVGElement("image") }}, {{ SVGElement("marker") }}, {{ SVGElement("mask") }}, {{ SVGElement("pattern") }}, {{ SVGElement("script") }}, {{ SVGElement("style") }}, {{ SVGElement("switch") }}, {{ SVGElement("text") }}, {{ SVGElement("view") }} |
| Normative document | [SVG 1.1 (Segunda edición)](https://www.w3.org/TR/SVG/fonts.html#GlyphElement)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Ejemplo

```xml
<?xml version="1.0" standalone="yes"?>
<svg width="400px" height="300px" version="1.1"
  xmlns = 'http://www.w3.org/2000/svg'>
<!-- Example copied from http://www.w3.org/TR/SVG/fonts.html#GlyphElement -->
  <defs>

    <font id="Font1" horiz-adv-x="1000">
      <font-face font-family="Super Sans" font-weight="bold" font-style="normal"
          units-per-em="1000" cap-height="600" x-height="400"
          ascent="700" descent="300"
          alphabetic="0" mathematical="350" ideographic="400" hanging="500">
        <font-face-src>
          <font-face-name name="Super Sans Bold"/>
        </font-face-src>
      </font-face>

      <missing-glyph><path d="M0,0h200v200h-200z"/></missing-glyph>
      <glyph unicode="!" horiz-adv-x="80" d="M0,0h200v200h-200z"></glyph>
      <glyph unicode="@" d="M0,50l100,300l400,100z"></glyph>

    </font>
  </defs>
  <text x="100" y="100"
           style="font-family: 'Super Sans', Helvetica, sans-serif;
                  font-weight: bold; font-style: normal">Text
    using embe@dded font!</text>
</svg>
```

## Atributos

### Atributos globales

- [Atributos centrales](/es/docs/Web/SVG/Attribute#core)»
- [Atributos de presentación](/es/docs/Web/SVG/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### Atributos específicos

- {{ SVGAttr("d") }}
- {{ SVGAttr("horiz-adv-x") }}
- {{ SVGAttr("vert-origin-x") }}
- {{ SVGAttr("vert-origin-y") }}
- {{ SVGAttr("vert-adv-y") }}
- {{ SVGAttr("unicode") }}
- {{ SVGAttr("glyph-name") }}
- {{ SVGAttr("orientation") }}
- {{ SVGAttr("arabic-form") }}
- {{ SVGAttr("lang") }}

## Interfaz DOM

Este elemento implementa la interfaz [`SVGGlyphElement`](/es/docs/Web/API/SVGGlyphElement).

## Relacionado

- {{ SVGElement("font") }}
- {{ SVGElement("missing-glyph") }}
- [Tutorial SVG: Fuentes SVG](/es/docs/Web/SVG/Tutorial/SVG_fonts)

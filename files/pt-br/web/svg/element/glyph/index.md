---
title: glyph
slug: Web/SVG/Element/glyph
tags:
  - Conteúdo de Texto SVG
  - Elemento
  - Referencia
  - SVG
translation_of: Web/SVG/Element/glyph
---
{{SVGRef}}

O `glyph` determina um único glifo em uma fonte SVG.

## Contexto de uso

{{svginfo}}

## Exemplo

```xml
<?xml version="1.0" standalone="yes"?>
<svg width="400px" height="300px" version="1.1"
  xmlns = 'http://www.w3.org/2000/svg'>
<!-- Exemplo copiado de http://www.w3.org/TR/SVG/fonts.html#GlyphElement -->
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
                  font-weight: bold; font-style: normal">Texto utilizando fonte embed@da!</text>
</svg>
```

## Atributos

### Atributos globais

- [Atributos principais](/pt-BR/SVG/Attribute#Core) »
- [Atributos de apresentação](/pt-BR/SVG/Attribute#Presentation) »
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

## Interface DOM

Este elemento implementa a interface do [`SVGGlyphElement`](/pt-BR/DOM/SVGGlyphElement).

## Relacionado

- {{ SVGElement("font") }}
- {{ SVGElement("missing-glyph") }}
- [Tutorial SVG: SVG fonts](/pt-BR/SVG/Tutorial/SVG_fonts)

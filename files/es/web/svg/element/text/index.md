---
title: text
slug: Web/SVG/Element/text
---

{{SVGRef}}

El elemento text define un elemento gráfico que consiste en texto. Nótese que es posible aplicar un degradado, patrón, recorte, máscara o filtro al texto

## Uso

{{svginfo}}

## Ejemplo

```xml
<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="100px" height="30px" viewBox="0 0 1000 300">

  <text x="250" y="150"
        font-family="Verdana"
        font-size="55">
    Hello, out there
  </text>

  <!-- Show outline of canvas using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke-width="2" />
</svg>
```

El elemento \<text> es usado para dibujar texto. El siguiente código de ejemplo es usado para dibujar texto con coordenadas.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10" y="20">SVG Text Example</text>
</svg>
```

El elemento text puede ser rotado. El siguiente código de ejemplo muestra cómo.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10"  y="20"
        transform="rotate(30 20,40)">
    SVG Text Rotation example
  </text>
</svg>
```

SVG text también puede ser estilizado

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10"  y="20"
        style="font-family: Times New Roman;
               font-size  : 24;
               stroke     : #00ff00;
               fill       : #0000ff;">
    SVG text styling
  </text>
</svg>
```

## Atributos

### Atributos globales

- [Atributos de procesamiento condicional »](/es/docs/Web/SVG/Attribute#conditionalproccessing)
- [Atributos base »](/es/docs/Web/SVG/Attribute#core)
- [Atributos de eventos gráficos »](/es/docs/Web/SVG/Attribute#graphicalevent)
- [Atributos de presentación](/es/docs/Web/SVG/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Atributos específicos

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("dx") }}
- {{ SVGAttr("dy") }}
- {{ SVGAttr("text-anchor") }}
- {{ SVGAttr("rotate") }}
- {{ SVGAttr("textLength") }}
- {{ SVGAttr("lengthAdjust") }}

## Interfaz DOM

Este elemento hereda la interfaz de [`SVGTextElement`](/es/docs/Web/API/SVGTextElement).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Relacionados

- {{ SVGElement("tspan") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("altGlyph") }}

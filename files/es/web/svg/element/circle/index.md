---
title: circle
slug: Web/SVG/Element/circle
---

{{SVGRef}}

El elemento circle es una forma básica de SVG, usada para crear circulos a partir de un punto, el cual indica el centro del circulo, y un radio.

## Contexto de uso

{{svginfo}}

## Ejemplo

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<?xml version="1.0"?>
<svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" />
</svg>
```

{{EmbedLiveSample}}

## Atributos

### Atributos globales

- [Atributos de procesamiento condicional](/es/docs/Web/SVG/Attribute#conditionalproccessing) »
- [Atributos principales](/es/docs/Web/SVG/Attribute#core) »
- [Atributos de eventos gráficos](/es/docs/Web/SVG/Attribute#graphicalevent) »
- [Atributos de presentación](/es/docs/Web/SVG/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Atributos específicos

- {{ SVGAttr("cx") }}
- {{ SVGAttr("cy") }}
- {{ SVGAttr("r") }}

## Interfaz DOM

Este elemento implementa la interfaz {{ domxref("SVGCircleElement") }}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Relacionado

- {{ SVGElement("ellipse") }}

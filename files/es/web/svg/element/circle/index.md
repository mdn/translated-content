---
title: circle
slug: Web/SVG/Element/circle
tags:
  - Elemento
  - Gráficos SVG
  - Referencia
  - SVG
translation_of: Web/SVG/Element/circle
---
{{SVGRef}}

El elemento circle es una forma básica de SVG, usada para crear circulos a partir de un punto, el cual indica el centro del circulo, y un radio.

## Contexto de uso

{{svginfo}}

## Ejemplo

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 120 120" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
```

» [circulo.svg](https://mdn.mozillademos.org/files/7707/circle2.svg)

## Atributos

### Atributos globales

- [Atributos de procesamiento condicional](/en/SVG/Attribute#ConditionalProccessing) »
- [Atributos principales](/en/SVG/Attribute#Core) »
- [Atributos de eventos gráficos](/en/SVG/Attribute#GraphicalEvent) »
- [Atributos de presentación](/en/SVG/Attribute#Presentation) »
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

## Compatibilidad de navegadores

{{Compat("svg.elements.circle")}}

## Relacionado

- {{ SVGElement("ellipse") }}

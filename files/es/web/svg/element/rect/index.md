---
title: rect
slug: Web/SVG/Element/rect
tags:
  - Elemento
  - Gráficos SVG
  - Referencia
  - SVG
translation_of: Web/SVG/Element/rect
---
{{SVGRef}}

El elemento `rect` es una forma básica de SVG, usada para crear rectángulos basada en la posición de una esquina, su alto y ancho.
También podría ser usada para crear rectángulos con esquinas redondeadas.

## Contexto de uso

{{svginfo}}

## Ejemplo

### Uso simple de `rect`

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100"/>
</svg>
```

» [rect-1.svg](https://mdn.mozillademos.org/files/8893/rect-1.svg)

### `rect` con esquinas redondeados

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10"
        width="100" height="100"
        rx="15" ry="15"/>

</svg>
```

» [rect-2.svg](https://mdn.mozillademos.org/files/8897/rect-2.svg)

## Atributos

### Atributos globales

- [Conditional processing attributes](/en/SVG/Attribute#ConditionalProccessing) »
- [Core attributes](/en/SVG/Attribute#Core) »
- [Graphical event attributes](/en/SVG/Attribute#GraphicalEvent) »
- [Presentation attributes](/en/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Atributos específicos

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("rx") }}
- {{ SVGAttr("ry") }}

## Interfaz DOM

Este elemento implementa la interfaz [`SVGRectElement`](/en/DOM/SVGRectElement).

## Compatibilidad de los Navegadores

{{Compat("svg.elements.rect")}}

## Ver también

- {{ SVGElement("path") }}

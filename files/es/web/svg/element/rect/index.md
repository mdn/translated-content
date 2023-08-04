---
title: rect
slug: Web/SVG/Element/rect
---

{{SVGRef}}

El elemento `rect` es una forma básica de SVG, usada para crear rectángulos basada en la posición de una esquina, su alto y ancho.
También podría ser usada para crear rectángulos con esquinas redondeadas.

## Contexto de uso

{{svginfo}}

## Ejemplo

### Uso simple de `rect`

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100" />
</svg>
```

{{EmbedLiveSample}}

### `rect` con esquinas redondeados

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100" rx="15" ry="15" />
</svg>
```

{{EmbedLiveSample}}

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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ SVGElement("path") }}

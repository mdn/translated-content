---
title: style
slug: Web/SVG/Element/style
---

{{SVGRef}}

El elemento `style` permite agregar directamente hojas de estilo en el contenido del SVG. El elemento style de SVG tiene los mismos atributos que el elemento correspondiente en HTML (ver elemento {{ HTMLElement("style") }} de HTML).

## Usage context

{{svginfo}}

## Ejemplo

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">
  <style type="text/css">
    /* <![CDATA[ */
    circle {
      fill: orange;
      stroke: black;
      stroke-width: 10px; // Note that the value of a pixel depend on the viewBox
    }
    /* ]]> */
  </style>

  <circle cx="50" cy="50" r="40" />
</svg>
```

Live result:

{{EmbedLiveSample("Ejemplo",150,165)}}

## Atributos

### Atributos globales

- [Core attributes](/en/SVG/Attribute#Core) »

### Atributos específicos

- {{ SVGAttr("type") }}
- {{ SVGAttr("media") }}
- {{ SVGAttr("title") }}

## DOM Interface

Este elemento implementa la interfaz [`SVGStyleElement`](/en/DOM/SVGStyleElement).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [\<style> element in HTML](/en/HTML/Element/style)

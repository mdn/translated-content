---
title: g
slug: Web/SVG/Element/g
---

{{SVGRef}}El elemento `g` es un contenedor usado para agrupar objetos. Las transformaciones aplicadas al elemento `g` son realizadas sobre todos los elementos hijos del mismo. Los atributos aplicados son heredados por los elementos hijos. Además, puede ser usado para definir objetos complejos que pueden luego ser referenciados con el elemento {{SVGElement("use")}}.

## Contexto de uso

{{svginfo}}

## Ejemplo

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 95 50"
  xmlns="http://www.w3.org/2000/svg">
  <g stroke="green" fill="white" stroke-width="5">
    <circle cx="25" cy="25" r="15" />
    <circle cx="40" cy="25" r="15" />
    <circle cx="55" cy="25" r="15" />
    <circle cx="70" cy="25" r="15" />
  </g>
</svg>
```

{{EmbedLiveSample("Ejemplo",220,130)}}

## Atributos

### Atributos globales

- [Conditional processing attributes](/es/docs/SVG/Attribute#ConditionalProccessing) »
- [Core attributes](/es/docs/SVG/Attribute#Core) »
- [Graphical event attributes](/es/docs/SVG/Attribute#GraphicalEvent) »
- [Presentation attributes](/es/docs/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Atributos Específicos

_No hay atributos específicos_

## Interfaz DOM

Este elemento implementa la interfaz [`SVGGElement`](/es/docs/DOM/SVGGElement).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

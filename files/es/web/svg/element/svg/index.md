---
title: <svg>
slug: Web/SVG/Element/svg
---

El elemento `svg` es un contenedor que define un nuevo sistema de coordenadas y [viewport](/es/docs/Web/SVG/Attribute/viewBox). Es usado como el elemento más externo de cualquier documento SVG, pero también puede ser usado para agregar un fragmento de un SVG dentro de un documento SVG o HTML.

## Contexto de Uso

{{svginfo}}

## Ejemplo

Considere la sigiente imagen SVG (representando la bandera nacional de Italia):

```xml
<svg xmlns="http://www.w3.org/2000/svg"
     width="150" height="100" viewBox="0 0 3 2">

  <rect width="1" height="2" x="0" fill="#008d46" />
  <rect width="1" height="2" x="1" fill="#ffffff" />
  <rect width="1" height="2" x="2" fill="#d2232c" />
</svg>
```

Esta puede ser incluida en un documento HTML5 de la siguiente manera:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML/SVG Example</title>
  </head>

  <body>
    <svg width="150" height="100" viewBox="0 0 3 2">
      <rect width="1" height="2" x="0" fill="#008d46" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#d2232c" />
    </svg>
  </body>
</html>
```

## Atributos

### Atributos Globales

- [Atributos de procesamiento condicional](/es/docs/Web/SVG/Attribute#ConditionalProccessing) »
- [Atributo Central](/es/docs/Web/SVG/Attribute#Core_attributes) »
- [Atributos de evento del Documento](/es/docs/Web/SVG/Attribute#DocumentEvent) »
- [Atributo de Eventos Gráficos](/es/docs/Web/SVG/Attribute#GraphicalEvent) »
- [Atributos de presentación](/es/docs/Web/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Specific attributes

- {{SVGAttr("version")}}
- {{SVGAttr("baseProfile")}}
- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("contentScriptType")}}
- {{SVGAttr("contentStyleType")}}
- {{SVGAttr("viewBox")}}

## Interfaz DOM

Este elemento implementa [`SVGSVGElement`](/es/docs/Web/API/SVGSVGElement) en la interfaz.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

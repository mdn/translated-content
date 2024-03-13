---
title: <use>
slug: Web/SVG/Element/use
---

{{SVGRef}}

El elemento `use` toma los nodos que están dentro del documento SVG y duplica el contenido donde éste esté siendo utilizado. El efecto es el mismo, como si éstos nodos hubiesen sido profundamente clonados en un elemento DOM no expuesto, y luego pegados donde se encuentra el elemento `use`, al igual que los [elementos plantilla](/es/docs/Web/HTML/Element/template) son clonados en HTML5. Desde que los elementos clonados no sean expuestos como DOM, su cuidado debe tomarse en cuenta durante el uso de [CSS](/en/CSS) para estilizar un elemento `use` y sus descendientes ocultos. Los atributos CSS no ofrecen la garantía de heredarse en los elementos DOM clonados y escondidos, a no ser que lo realice utilizando [herencia CSS](/en/CSS/inheritance).

Por razones de seguridad, algunos navegadores podrían aplicar una política del mismo origen sobre los elementos `use` y podrían negarse a cargar una URI de origen cruzado dentro del atributo `xlink:href`.

## Contexto de uso

{{svginfo}}

## Ejemplo

```xml
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
    .classA { fill:red }
  </style>
  <defs>
    <g id="Port">
      <circle style="fill:inherit" r="10"/>
    </g>
  </defs>

  <text y="15">black</text>
  <use x="50" y="10" xlink:href="#Port" />
  <text y="35">red</text>
  <use x="50" y="30" xlink:href="#Port" class="classA"/>
  <text y="55">blue</text>
  <use x="50" y="50" xlink:href="#Port" style="fill:blue"/>
 </svg>
```

## Atributos

### Atributos Globales

- [Atributos de procesamiento condicional](/en/SVG/Attribute#ConditionalProccessing) »
- [Atributos núcleo](/en/SVG/Attribute#Core) »
- [Atributos de eventos gráficos](/en/SVG/Attribute#GraphicalEvent) »
- [Atributos de presentación](/en/SVG/Attribute#Presentation) »
- [Atributos Xlink](/en/SVG/Attribute#XLink) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Atributos específicos

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("xlink:href") }}

## Interfaz DOM

Este elemento implementa la interface [`SVGUseElement`](/en/DOM/SVGUseElement).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

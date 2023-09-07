---
title: hgroup
slug: Web/HTML/Element/hgroup
---

## Resumen

El _elemento de grupo de cabeceras HTML_ (\<hgroup>) representa el encabezado de una sección. Define un solo título que participa de [la estructura del documento](/en/Sections_and_Outlines_of_an_HTML5_document) como el encabezado de la sección implícita o explícita a la que pertenece.

Su _text_ o para el algoritmo de estructura es el texto del primer elemento de encabezado HTML de más alto rango (ip.ej., el primer {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }} o {{ HTMLElement("h6") }} con el número más pequeño entre sus descendientes) y el _rango_ es el rango del mismo elemento de encabezado HTML.

Por tanto, este elemento agrupa varios encabezados, pero solo el primero contribuye a la estructura del documento. Permite asociar títulos secundarios, como subencabezados, títulos alternativos, e incluso lemas, con el encabezado principal, sin contaminar la estructura del documento.

Este elemento se fue removido de la especificacion HTML5 (W3C), por favor no usar mas.

### Contexto de uso

| Contenido permitido        | Cero o más elementos HTML de encabezado ({{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}) |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omisión de etiqueta        | Ninguna, ambas, la etiqueta de inicio y fin son obligatorias                                                                                                                                   |
| Elementos padre permitidos | Cualquier elemento que acepte [flujo de contenido](/en/HTML/Content_categories#flow_content).                                                                                                  |
| Documento nomativo         | [HTML5, section 4.4.7](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-hgroup-element)                                                                           |

### Atributos

Este elemento no tiene más atributos que los [atributos globales](/en/HTML/Global_attributes), común a todos los elementos.

## Notas de uso

> **Nota:** Si bien el elemento `<hgroup>` se eliminó de la especificación HTML5 (W3C), todavía se mantiene en la versión WHATWG de HTML. De todos modos, está parcialmente implementado en la mayoría de los navegadores, por lo que es improbable que desaparezca.
> Sin embargo, dado que el propósito principal del elemento `<hgroup>` es afectar cómo [el algoritmo de generación de esquemas de documento](/es/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#The_HTML5_outline_algorithm) muestra los encabezados, pero **dicho algoritmo no ha sido implementado por ningún navegador**, la semántica de `<hgroup>` es por el momento solo teórica.
> La especificación HTML5 (W3C) aconseja entonces cómo maquetar [subtítulos, títulos alternativos y lemas](https://www.w3.org/TR/html52/common-idioms-without-dedicated-elements.html#common-idioms-without-dedicated-elements) sin utilizar `<hgroup>`.

### Interfaz DOM

Este elemento implementa la interfaz `HTMLElement`.

### Ejemplos

```html
<hgroup>
  <h1>Main title</h1>
  <h2>Secondary title</h2>
</hgroup>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

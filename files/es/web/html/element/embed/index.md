---
title: embed
slug: Web/HTML/Element/embed
---

> **Nota:** este tema documenta sólo el elemento \<embed> que se define como parte de HTML5. No trata las implementaciones anteriores no estandarizadas del elemento `<embed>`.

El _Elemento HTML Embed_ ( `<embed>` ) representa un punto de integración para una aplicación externa o de contenido interactivo (en otras palabras, un plug-in).

## Contexto de uso

| Contenido permitido            | Ninguno; es un elemento vacío.                                                                     |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| Omisión de etiquetas           | Debe tener una etiqueta de inicio, pero no debe tener una etiqueta de cierre.                      |
| Elementos primarios permitidos | Cualquier elemento que acepte [contenido estático](/en/HTML/Content_categories#phrasing_content) . |
| Documento normativo            | [HTML 5, sección 4.8.3](http://www.w3.org/TR/html5/the-iframe-element.html#the-embed-element)      |

## Atributos

Este elemento admite los siguientes atributos además de los [atributos globales](/en/HTML/Global_attributes) .

- `height`
  - : La altura del recurso mostrada en píxeles CSS.
- `src`
  - : La dirección URL del recurso que se está incrustado.
- `type`
  - : El tipo MIME que se va a usar para la selección del plug-in para crear una instancia.
- `width`
  - : El ancho del recurso mostrado en píxeles CSS.

## Interfaz DOM

- [HTMLEmbedElement](/en/DOM/HTMLEmbedElement)

## Consulta también

Otros elementos que se utilizan para incrustar el contenido de varios tipos incluyen {{ HTMLElement("audio") }}, {{ HTMLElement("canvas") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("math") }}, {{ HTMLElement("object") }}, {{ HTMLElement("svg") }} y {{ HTMLElement("video") }}.

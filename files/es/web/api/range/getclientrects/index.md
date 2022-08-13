---
title: Range.getClientRects()
slug: Web/API/Range/getClientRects
tags:
  - API
  - Experimental
  - Rango
  - Vista CSSOM
  - metodo
translation_of: Web/API/Range/getClientRects
---
{{ApiRef("DOM")}}{{ seeCompatTable }}

El método **`Range.getClientRects()`**regresa una lista de objetos {{ domxref("DOMRect") }} los cuales representan el área de la pantalla ocupada por el [rango](/es/DOM/range "https://developer.mozilla.org/es/dom:range"). El resultado es generado al agregar los resultados de las llamadas a {{ domxref("Element.getClientRects()") }} para cada uno de los elementos dentro del rango.

## Sintaxis

    rectList = range.getClientRects()

## Ejemplo

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
rectList = range.getClientRects();
```

## Especificación

| Especificación                                                                                               | Estatus                          | Comentario              |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------- |
| {{SpecName('CSSOM View', '#dom-range-getclientrects', 'Range.getClientRects()')}} | {{Spec2('CSSOM View')}} | Especificación inicial. |

## Compatibilidad en los Navegadores

{{Compat("api.Range.getClientRects")}}

## Ver también

- {{domxref("Range")}}

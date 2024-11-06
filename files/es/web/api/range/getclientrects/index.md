---
title: Range.getClientRects()
slug: Web/API/Range/getClientRects
---

{{ApiRef("DOM")}}{{ seeCompatTable }}

El método **`Range.getClientRects()`** regresa una lista de objetos {{ domxref("DOMRect") }} los cuales representan el área de la pantalla ocupada por el [rango](/es/DOM/range). El resultado es generado al agregar los resultados de las llamadas a {{ domxref("Element.getClientRects()") }} para cada uno de los elementos dentro del rango.

## Sintaxis

```
rectList = range.getClientRects()
```

## Ejemplo

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
rectList = range.getClientRects();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Range")}}

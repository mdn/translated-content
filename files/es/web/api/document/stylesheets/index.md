---
title: Document.styleSheets
slug: Web/API/Document/styleSheets
---

{{ ApiRef() }}

### Resumen

Devuelve una lista de objetos de tipo [stylesheet](/es/DOM/stylesheet) para las hojas de estilo que están específicamente enlazadas o contenidas en el documento.

### Propiedades

`styleSheetList.length` - devuelve el número de objetos de tipo stylesheet contenidos en el objeto.

### Sintaxis

```js
styleSheetList = document.styleSheets;
```

El objeto devuelto es del tipo [StyleSheetList](https://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-DocumentStyle-styleSheets).

Es una colección ordenada de objetos de tipo [stylesheet](/es/DOM/stylesheet). `styleSheetList.item(index)` o simplemente `styleSheetList[ index ]` devuelve un único objeto de tipo stylesheet con el índice especificado (el índice es de origen 0).

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

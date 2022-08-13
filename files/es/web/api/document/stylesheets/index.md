---
title: Document.styleSheets
slug: Web/API/Document/styleSheets
translation_of: Web/API/DocumentOrShadowRoot/styleSheets
translation_of_original: Web/API/Document/styleSheets
original_slug: Web/API/DocumentOrShadowRoot/styleSheets
---
{{ ApiRef() }}

### Resumen

Devuelve una lista de objetos de tipo [stylesheet](/es/DOM/stylesheet "es/DOM/stylesheet") para las hojas de estilo que están específicamente enlazadas o contenidas en el documento.

### Propiedades

`styleSheetList.length` - devuelve el número de objetos de tipo stylesheet contenidos en el objeto.

### Sintaxis

    styleSheetList = document.styleSheets

El objeto devuelto es del tipo [StyleSheetList](http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-DocumentStyle-styleSheets).

Es una colección ordenada de objetos de tipo [stylesheet](/es/DOM/stylesheet "es/DOM/stylesheet"). `styleSheetList.item(index)` o simplemente `styleSheetList{{ mediawiki.external('
 <i>
  index</i>
 ') }}` devuelve un único objeto de tipo stylesheet con el índice especificado (el índice es de origen 0).

### Especificación

[DOM Level 2 Style: styleSheets](http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-DocumentStyle-styleSheets)

{{ languages( { "ja": "ja/DOM/document.styleSheets", "pl": "pl/DOM/document.styleSheets" } ) }}

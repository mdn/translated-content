---
title: Document.documentURI
slug: Web/API/Document/documentURI
---

{{ApiRef("DOM")}}

La propiedad **`documentURI`** de la interfaz del documento ({{domxref("Document")}}) devuelve la ubicación del documento como un _string_.

Originalmente DOM3 fue definido como un atributo de lectura/escritura. En DOM4 se especifica unicamente como de lectura.

## Sintaxis

```js
var string = document.documentURI;
```

## Notas

Los documentos HTML tienen una propiedad {{domxref("document.URL")}} la cual devuelve el mismo valor (ubicación del documento). A diferencia de `URL`, `documentURI` está disponible para todos los tipos de documentos web.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

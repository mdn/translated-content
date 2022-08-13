---
title: Document.documentURI
slug: Web/API/Document/documentURI
tags:
  - API
  - ContenidoNecesario
  - DOM
  - EjemploNecesario
  - Propiedad
  - Referencia
  - UbicaciónDocumento
translation_of: Web/API/Document/documentURI
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

| Especificación                                                                           | Estado                       | Comentario         |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('DOM4', '#dom-document-documenturi','documentURI')}}     | {{Spec2('DOM4')}}     |                    |
| {{SpecName('DOM3 Core', '#Document3-documentURI', 'documentURI')}} | {{Spec2('DOM3 Core')}} | Definición inicial |

## Compatibilidad de navegadores

{{Compat("api.Document.documentURI")}}

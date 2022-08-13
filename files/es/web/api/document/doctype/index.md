---
title: Document.doctype
slug: Web/API/Document/doctype
tags:
  - API
  - DOCTYPE
  - DOM
  - Document
  - Propiedad
  - Referencia
translation_of: Web/API/Document/doctype
---
{{ApiRef("DOM")}}

Devuelve la Declaración de tipo de documento (Document Type Declaration (DTD)), asociada al documento actual. El objeto devuelto implementa la interfaz {{domxref("DocumentType")}}. Utilice {{domxref("DOMImplementation.createDocumentType()")}} para crear un `DocumentType`.

## Sintaxis

    doctype = document.doctype;

- `doctype` es una propiedad de sólo lectura.

## Ejemplo

```js
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: "           + doctypeObj.name            + "\n" +
  "doctypeObj.internalSubset: " + doctypeObj.internalSubset  + "\n" +
  "doctypeObj.publicId: "       + doctypeObj.publicId        + "\n" +
  "doctypeObj.systemId: "       + doctypeObj.systemId
);
```

## Notas

La propiedad devuelve `null` si no hay DTD asociada al documento actual.

El nivel 2 de DOM no soporta la edición de la declaración de tipo de documento.

## Especificaciones

| Especificación                                                                                   | Estado                       | Comentario                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("DOM3 Core", "core.html#ID-B63ED1A31", "Document.doctype")}} | {{Spec2("DOM3 Core")}} | Cambiado el valor de retorno para documentos HTML sin el elemento {{HTMLElement("html")}}. Define que el tipo de documento puede ser modificado. |
| {{SpecName("DOM2 Core", "core.html#ID-B63ED1A31", "Document.doctype")}} | {{Spec2("DOM2 Core")}} | Definición inicial                                                                                                                                        |

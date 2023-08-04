---
title: Document.doctype
slug: Web/API/Document/doctype
---

{{ApiRef("DOM")}}

Renvoie la "Document Type Declaration (DTD)" (_déclaration de type de document_) associée avec le document actuel. L'objet renvoyé implémente l'interface {{domxref("DocumentType")}}. Utilisez {{domxref("DOMImplementation.createDocumentType()")}} pour créer un `DocumentType`.

## Syntaxe

```js
doctype = document.doctype;
```

- `doctype` est une propriété en lecture seule.

## Exemple

```js
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: " +
    doctypeObj.name +
    "\n" +
    "doctypeObj.internalSubset: " +
    doctypeObj.internalSubset +
    "\n" +
    "doctypeObj.publicId: " +
    doctypeObj.publicId +
    "\n" +
    "doctypeObj.systemId: " +
    doctypeObj.systemId,
);
```

## Notes

La propriété renvoie `null` si aucune DTD n'est associée au document en cours.

DOM level 2 ne prend pas en charge l'édition de la déclaration de type de document (DTD).

## Spécifications

{{Specifications}}

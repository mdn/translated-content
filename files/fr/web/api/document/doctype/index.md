---
title: Document.doctype
slug: Web/API/Document/doctype
tags:
  - API
  - DOM
  - DTD
  - Document
  - Propriétés
  - Type
translation_of: Web/API/Document/doctype
---
{{ApiRef("DOM")}}

Renvoie la "Document Type Declaration (DTD)" (_déclaration de type de document_) associée avec le document actuel. L'objet renvoyé implémente l'interface {{domxref("DocumentType")}}. Utilisez {{domxref("DOMImplementation.createDocumentType()")}} pour créer un `DocumentType`.

## Syntaxe

    doctype = document.doctype;

- `doctype` est une propriété en lecture seule.

## Exemple

```js
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: "           + doctypeObj.name            + "\n" +
  "doctypeObj.internalSubset: " + doctypeObj.internalSubset  + "\n" +
  "doctypeObj.publicId: "       + doctypeObj.publicId        + "\n" +
  "doctypeObj.systemId: "       + doctypeObj.systemId
);
```

## Notes

La propriété renvoie `null` si aucune DTD n'est associée au document en cours.

DOM level 2 ne prend pas en charge l'édition de la déclaration de type de document (DTD).

## Spécifications

| Spécification                                                                                    | Statut                       | Commentaire                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("DOM3 Core", "core.html#ID-B63ED1A31", "Document.doctype")}} | {{Spec2("DOM3 Core")}} | Valeur de retour modifiée pour les documents HTML avec absence d'élément {{HTMLElement("html")}}. Définit que le type de document peut être modifié. |
| {{SpecName("DOM2 Core", "core.html#ID-B63ED1A31", "Document.doctype")}} | {{Spec2("DOM2 Core")}} | Définition initiale                                                                                                                                           |

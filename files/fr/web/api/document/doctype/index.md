---
title: "Document : propriété doctype"
short-title: doctype
slug: Web/API/Document/doctype
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("DOM")}}

La propriété en lecture seule **`doctype`** de l'interface {{DOMxRef("Document")}} est un objet {{DOMxRef("DocumentType")}} représentant le {{Glossary("Doctype", "Document Type Declaration (DTD)")}} associé au document en cours.

## Valeur

Un objet {{DOMxRef("DocumentType")}}.

## Exemples

```js
const doctypeObj = document.doctype;

console.log(`doctypeObj.name: ${doctypeObj.name}`);
console.log(`doctypeObj.internalSubset: ${doctypeObj.internalSubset}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);
```

## Notes

La propriété retourne `null` si aucune DTD n'est associée au document en cours.

Le niveau 2 du DOM ne prend pas en charge la modification de la déclaration de type de document (DTD).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

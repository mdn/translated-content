---
title: "Document : méthode createRange()"
short-title: createRange()
slug: Web/API/Document/createRange
l10n:
  sourceCommit: 1abe075be40cd938aa9131a42b4e03b21b78627c
---

{{APIRef("DOM")}}

La méthode **`createRange()`** de l'interface {{DOMxRef("Document")}} retourne un nouvel objet {{DOMxRef("Range")}} dont le début et la fin sont au décalage 0 de l'objet {{DOMxRef("Document")}} sur lequel elle a été appelée.

## Syntaxe

```js-nolint
createRange()
```

### Paramètres

Aucun.

### Valeur de retour

L'objet {{DOMxRef("Range")}} nouvellement créé.

## Exemples

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## Notes

Une fois un objet `Range` créé, il est nécessaire de définir les limites de départ et de fin avant de pouvoir utiliser la plupart des méthodes.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

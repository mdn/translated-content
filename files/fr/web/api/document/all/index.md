---
title: "Document : propriété all"
short-title: all
slug: Web/API/Document/all
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

La propriété en lecture seule **`all`** de l'interface {{DOMxRef("Document")}} retourne une collection d'éléments ({{DOMxRef("HTMLAllCollection")}}) ancrée au nœud du document.

Plutôt que d'utiliser `document.all` pour retourner une collection d'éléments ({{DOMxRef("HTMLAllCollection")}}) de tous les éléments du document dans l'ordre du document, vous pouvez utiliser {{DOMxRef("Document.querySelectorAll")}} pour retourner une {{DOMxRef("NodeList")}} de tous les éléments du document dans l'ordre du document&nbsp;:

```js
const allElements = document.querySelectorAll("*");
```

## Valeur

Un objet {{DOMxRef("HTMLAllCollection")}} qui contient tous les éléments du document.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

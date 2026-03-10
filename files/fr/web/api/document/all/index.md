---
title: "Document : propriété all"
short-title: all
slug: Web/API/Document/all
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

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

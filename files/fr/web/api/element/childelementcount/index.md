---
title: "Element : propriété childElementCount"
short-title: childElementCount
slug: Web/API/Element/childElementCount
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

La propriété en lecture seule **`childElementCount`** de l'interface {{DOMxRef("Element")}} retourne le nombre d'éléments enfants de cet élément.

## Exemples

```js
let barreLaterale = document.getElementById("barreLaterale");
if (barreLaterale.childElementCount > 0) {
  // faire quelque chose
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Document.childElementCount")}}
- La propriété {{DOMxRef("DocumentFragment.childElementCount")}}

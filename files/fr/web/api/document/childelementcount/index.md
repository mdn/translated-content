---
title: "Document : propriété childElementCount"
short-title: childElementCount
slug: Web/API/Document/childElementCount
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`childElementCount`** de l'interface {{DOMxRef("Document")}} retourne le nombre d'éléments enfants du document.

Pour obtenir le nombre d'enfants d'un élément spécifique, voir {{DOMxRef("Element.childElementCount")}}.

## Valeur

Un nombre.

## Exemples

```js
document.children;
// HTMLCollection, généralement contenant un élément <html>, le seul enfant du document

document.childElementCount;
// 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.childElementCount")}}
- La propriété {{DOMxRef("DocumentFragment.childElementCount")}}

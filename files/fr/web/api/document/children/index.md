---
title: "Document : propriété children"
short-title: children
slug: Web/API/Document/children
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`children`** retourne un objet {{DOMxRef("HTMLCollection")}} dynamique qui contient tous les {{DOMxRef("Element", "éléments", "", 1)}} enfants du document sur lequel elle a été appelée.

Pour les documents HTML, cela contient généralement uniquement l'élément racine `<html>`.

Voir {{DOMxRef("Element.children")}} pour les éléments enfants d'éléments HTML spécifiques dans le document.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}} dynamique et ordonné des éléments DOM qui sont enfants du document actuel. Vous pouvez accéder aux nœuds enfants individuels dans la collection en utilisant soit la méthode {{DOMxRef("HTMLCollection.item()", "item()")}} sur la collection, soit la notation de style tableau en JavaScript.

Si le document n'a pas d'éléments enfants, alors `children` est une liste vide avec une `length` de `0`.

## Exemples

```js
document.children;
// HTMLCollection [<html>]
// Contient généralement uniquement l'élément racine <html>, le seul enfant direct du document
```

Voir {{DOMxRef("Element.children")}} pour les éléments enfants d'éléments HTML spécifiques dans le document.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.children")}}
- La propriété {{DOMxRef("Node.childNodes")}}

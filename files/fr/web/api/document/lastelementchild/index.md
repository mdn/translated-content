---
title: "Document : propriété lastElementChild"
short-title: lastElementChild
slug: Web/API/Document/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

La propriété en lecture seule **`lastElementChild`** de l'interface {{DOMxRef("Document")}} retourne le dernier {{DOMxRef("Element")}} enfant du document, ou `null` s'il n'y a aucun élément enfant.

Pour les documents HTML, il s'agit généralement du seul enfant, l'élément racine `<html>`.

Voir {{DOMxRef("Element.lastElementChild")}} pour le dernier élément enfant d'éléments spécifiques dans un document.

## Valeur

L'élément racine `<html>`.

## Exemples

```js
document.lastElementChild;
// retourne l'élément <html> racine, le seul enfant du document
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.lastElementChild")}}

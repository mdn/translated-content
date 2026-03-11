---
title: "Document : propriété firstElementChild"
short-title: firstElementChild
slug: Web/API/Document/firstElementChild
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

La propriété en lecture seule **`firstElementChild`** de l'interface {{DOMxRef("Document")}} retourne le premier {{DOMxRef("Element")}} enfant du document, ou `null` s'il n'y a pas d'éléments enfants.

Pour les documents HTML, il s'agit généralement du seul enfant, l'élément racine `<html>`.

Voir {{DOMxRef("Element.firstElementChild")}} pour le premier élément enfant d'éléments spécifiques dans un document.

## Valeur

Un objet {{DOMxRef("Element")}}, ou `null`.

## Exemples

```js
document.firstElementChild;
// retourne l'élément racine <html>, le seul enfant du document
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.firstElementChild")}}

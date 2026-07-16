---
title: "AbstractRange : propriété startContainer"
short-title: startContainer
slug: Web/API/AbstractRange/startContainer
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

La propriété en lecture seule **`startContainer`** de l'interface {{DOMxRef("AbstractRange")}} retourne le {{DOMxRef("Node")}} dans lequel se trouve le début de la plage.

Pour modifier la position de début, utilisez la méthode {{DOMxRef("Range.setStart()")}} ou une méthode similaire.

## Valeur

L'objet {{DOMxRef("Node")}} dans lequel se trouve le début de la plage.

## Exemples

```js
const plage = document.createRange();
plage.setStart(startNode, startOffset);
plage.setEnd(endNode, endOffset);

const noeudDebutPlage = plage.startContainer;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

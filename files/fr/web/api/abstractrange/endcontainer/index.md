---
title: "AbstractRange : propriété endContainer"
short-title: endContainer
slug: Web/API/AbstractRange/endContainer
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

La propriété en lecture seule **`endContainer`** de l'interface {{DOMxRef("AbstractRange")}} retourne le {{DOMxRef("Node")}} dans lequel se trouve la fin de la plage.

Pour modifier la position de fin, utilisez la méthode {{DOMxRef("Range.setEnd()")}} ou une méthode similaire.

## Valeur

L'objet {{DOMxRef("Node")}} qui contient le dernier caractère de la plage.

## Exemples

```js
const plage = document.createRange();
plage.setStart(startNode, startOffset);
plage.setEnd(endNode, endOffset);

const noeudFinPlage = plage.endContainer;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

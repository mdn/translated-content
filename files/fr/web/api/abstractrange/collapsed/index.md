---
title: "AbstractRange : propriété collapsed"
short-title: collapsed
slug: Web/API/AbstractRange/collapsed
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

La propriété en lecture seule **`collapsed`** de l'interface {{DOMxRef("AbstractRange")}} retourne `true` si la position de début et la position de fin de la plage sont identiques.

Une plage réduite est vide (ne contenant aucun contenu) et définit un point unique dans un arbre DOM. Pour réduire une plage, voir la méthode {{DOMxRef("Range.collapse()")}}.

## Valeur

Une valeur booléenne qui est `true` si la plage est _réduite_. Une plage réduite est une plage dans laquelle les positions de début et de fin sont identiques, ce qui donne une plage de longueur zéro.

## Exemples

```js
const plage = document.createRange();
plage.setStart(startNode, startOffset);
plage.setEnd(endNode, endOffset);

const estReduite = plage.collapsed;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

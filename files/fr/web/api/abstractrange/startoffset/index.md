---
title: "AbstractRange : propriété startOffset"
short-title: startOffset
slug: Web/API/AbstractRange/startOffset
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

La propriété en lecture seule **`startOffset`** de l'interface {{DOMxRef("AbstractRange")}} retourne le décalage par rapport au premier nœud de la position de début de la plage.

Pour modifier la position de début, utilisez la méthode {{DOMxRef("Range.setStart()")}} ou une méthode similaire.

## Valeur

Un entier indiquant le nombre de caractères dans le nœud ({{DOMxRef("Node")}}) indiqué par {{DOMxRef("AbstractRange.startContainer", "startContainer")}} à l'endroit où se trouve le premier caractère de la plage.

Si `startContainer` est un nœud ({{DOMxRef("Node")}}) de type {{DOMxRef("Text")}}, {{DOMxRef("Comment")}} ou {{DOMxRef("CDATASection")}}, alors le décalage est le nombre de caractères depuis le début du `startContainer` jusqu'au point de frontière de la plage. Pour les autres types de {{DOMxRef("Node")}}, le `startOffset` est le nombre de nœuds enfants entre le début du `startContainer` et le point de frontière de la plage.

## Exemples

```js
const plage = document.createRange();
plage.setStart(startNode, startOffset);
plage.setEnd(endNode, endOffset);

const decalageDebutPlage = plage.startOffset;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

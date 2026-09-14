---
title: "AbstractRange : propriété endOffset"
short-title: endOffset
slug: Web/API/AbstractRange/endOffset
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

La propriété en lecture seule **`endOffset`** de l'interface {{DOMxRef("AbstractRange")}} retourne le décalage par rapport au dernier nœud de la position de fin de la plage.

Pour modifier la position de fin, utilisez la méthode {{DOMxRef("Range.setEnd()")}} ou une méthode similaire.

## Valeur

Un entier indiquant le nombre de caractères dans le nœud ({{DOMxRef("Node")}}) indiqué par {{DOMxRef("AbstractRange.endContainer", "endContainer")}} à l'endroit où se trouve le dernier caractère de la plage.

Si `endContainer` est un nœud ({{DOMxRef("Node")}}) de type {{DOMxRef("Text")}}, {{DOMxRef("Comment")}} ou {{DOMxRef("CDATASection")}}, alors le décalage est le nombre de caractères depuis le début du `endContainer` jusqu'au point de frontière de la plage. Pour les autres types de {{DOMxRef("Node")}}, le `endOffset` est le nombre de nœuds enfants entre le début du `endContainer` et le point de frontière de la plage.

## Exemples

```js
const plage = document.createRange();
plage.setStart(startNode, startOffset);
plage.setEnd(endNode, endOffset);

const decalageFinPlage = plage.endOffset;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

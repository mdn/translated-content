---
title: NodeIterator.referenceNode
slug: Web/API/NodeIterator/referenceNode
---

{{APIRef("DOM")}}{{ SeeCompatTable }}

La propriété en lecture seule **`NodeIterator.referenceNode`** renvoie le {{domxref("Node")}} auquel l'itérateur est ancré ; si de nouveaux noeuds sont insérés, l'itérateur reste ancré au noeud de référence spécifié par cette propriété.

## Syntaxe

```js
node = nodeIterator.referenceNode;
```

## Exemple

```js
var nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode: function (node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
  false,
);
node = nodeIterator.referenceNode;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}

---
title: NodeIterator.previousNode()
slug: Web/API/NodeIterator/previousNode
---

{{APIRef("DOM")}}

La méthode **`NodeIterator.previousNode()`** renvoie le noeud précédent dans l'ensemble représenté par le {{domxref("NodeIterator")}} et déplace la position de l'itérateur vers l'arrière à l'intérieur de cet ensemble.

Cette méthode renvoie `null` si le noeud courant est le premier noeud dans l'ensemble.

Dans les navigateurs anciens, comme spécifié dans les anciennes version des spécifications, la méthode pouvait déclencher une `INVALID_STATE_ERR` {{domxref("DOMException")}} si elle était appelée après la méthode {{domxref("NodeIterator.detach()")}}. Les navigateurs récents ne lancent rien.

## Syntaxe

```js
node = nodeIterator.previousNode();
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
  false, // cet argument facultatif n'est plus utilisé
);
currentNode = nodeIterator.nextNode(); // renvoie le noeud suivant
previousNode = nodeIterator.previousNode(); // même résultat, puisque nous sommes retournés au noeud précédent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}.

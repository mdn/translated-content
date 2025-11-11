---
title: NodeIterator.root
slug: Web/API/NodeIterator/root
---

{{APIRef("DOM")}}

La propriété en lecture seule **`NodeIterator.root`** représente le {{DOMxref("Node")}} qui est la racine de ce que le {{DOMxref("NodeIterator")}} traverse.

## Syntaxe

```js
root = nodeIterator.root;
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
root = nodeIterator.root; // document.body dans ce cas
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}.

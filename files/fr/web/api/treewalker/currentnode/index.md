---
title: TreeWalker.currentNode
slug: Web/API/TreeWalker/currentNode
---

{{ APIRef("DOM") }}

La propriété **`TreeWalker.currentNode`** représente le {{domxref("Node")}} (_noeud_) sur lequel le {{domxref("TreeWalker")}} est actuellement pointé.

## Syntaxe

```js
node = treeWalker.currentNode;
treeWalker.currentNode = node;
```

## Exemple

```js
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode: function (node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
  false,
);
root = treeWalker.currentNode; // l'élément racine car c'est le premier élément!
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}}.

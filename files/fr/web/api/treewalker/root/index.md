---
title: TreeWalker.root
slug: Web/API/TreeWalker/root
---

{{ APIRef("DOM") }}

La propriété en lecture seule **`TreeWalker.root`** renvoie le noeud qui est la racine de ce que TreeWalker doit traverser.

## Syntaxe

```js
root = TreeWalker.root;
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
root = treeWalker.root; // document.body dans ce cas
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}}.

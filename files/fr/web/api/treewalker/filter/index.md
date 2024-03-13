---
title: TreeWalker.filter
slug: Web/API/TreeWalker/filter
---

{{ APIRef("DOM") }}

La propriété en lecture seule **`TreeWalker.filter`** renvoie un {{domxref("NodeFilter")}} (_filtre de noeuds_) qui est l'objet de filtrage associé à {{domxref("TreeWalker")}}.

Lors de la création du `TreeWalker`, l'objet filtre est transmis comme 3ème paramètre et sa méthode {{domxref("NodeFilter.acceptNode()")}} est appelée sur tous les noeuds pour déterminer s'il doit ou non l'accepter.

## Syntaxe

```js
nodeFilter = treeWalker.filter;
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
nodeFilter = treeWalker.filter; // document.body dans ce cas
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

---
title: TreeWalker.root
slug: Web/API/TreeWalker/root
tags:
  - API
  - Arborescence
  - DOM
  - Noeuds
  - Propriétés
translation_of: Web/API/TreeWalker/root
---
{{ APIRef("DOM") }}

La propriété en lecture seule **`TreeWalker.root`** renvoie le noeud qui est la racine de ce que TreeWalker doit traverser.

## Syntaxe

    root = TreeWalker.root;

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = treeWalker.root; // document.body dans ce cas
```

## Spécifications

| Spécification                                                                                                                        | Statut                                       | Commentaire                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-root', 'TreeWalker.root')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-root', 'TreeWalker.root')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.root")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}}.

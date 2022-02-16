---
title: TreeWalker.currentNode
slug: Web/API/TreeWalker/currentNode
tags:
  - API
  - Arborescence
  - DOM
  - Noeuds
  - Propriété
translation_of: Web/API/TreeWalker/currentNode
---
{{ APIRef("DOM") }}

La propriété **`TreeWalker.currentNode`** représente le {{domxref("Node")}} (_noeud_) sur lequel le {{domxref("TreeWalker")}} est actuellement pointé.

## Syntaxe

    node = treeWalker.currentNode;
    treeWalker.currentNode = node;

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = treeWalker.currentNode; // l'élément racine car c'est le premier élément!
```

## Spécifications

| Spécification                                                                                                                                            | Statut                                       | Commentaire                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-currentnode', 'TreeWalker.currrentNode')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-currentNode', 'TreeWalker.currentNode')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.currentNode")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}}.

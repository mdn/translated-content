---
title: TreeWalker.nextNode()
slug: Web/API/TreeWalker/nextNode
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/nextNode
---
{{ APIRef("DOM") }}

La méthode **`TreeWalker.nextNode()`** déplace le {{domxref("Node")}} courant au noeud suivant _visible_ dans l'ordre du document et renvoie le noeud trouvé. Elle déplace aussi le noeud courant vers celui-ci. Si aucun noeud n'existe, elle renvoie `null` et le noeud courant est inchangé.

## Syntaxe

    node = treeWalker.nextNode();

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.nextNode(); // renvoie le premier enfant de la racine, car il s'agit du noeud suivant dans l'ordre du document
```

## Spécifications

| Spécification                                                                                                                                    | Statut                                       | Commentaire                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-nextnode', 'TreeWalker.nextNode')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-nextNode', 'TreeWalker.nextNode')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.nextNode")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

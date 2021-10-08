---
title: TreeWalker.parentNode()
slug: Web/API/TreeWalker/parentNode
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/parentNode
---
{{ APIRef("DOM") }}

La méthode **`TreeWalker.parentNode()`** déplace le {{domxref("Node")}} courant vers le premier noeud ancêtre _visible_ dans l'ordre du document et renvoie le noeud trouvé. Si aucun noeud n'existe ou s'il est au-dessus du _noeud racine_ du `TreeWalker`, elle renvoie `null` et le noeud actuel reste inchangé.

## Syntaxe

    node = treeWalker.parentNode();

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.parentNode(); // returns null as there is no parent
```

## Spécifications

| Spécification                                                                                                                                        | Statut                                       | Commentaire                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-parentnode', 'TreeWalker.parentNode')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-parentNode', 'TreeWalker.parentNode')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.parentNode")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

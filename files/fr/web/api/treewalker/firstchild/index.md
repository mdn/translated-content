---
title: TreeWalker.firstChild()
slug: Web/API/TreeWalker/firstChild
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/firstChild
---
{{ APIRef("DOM") }}

La méthode **`TreeWalker.firstChild()`** déplace le {{domxref("Node")}} courant vers le premier enfant _visible_ du noeud courant et renvoie l'enfant trouvé. Il déplace aussi le noeud courant vers cet enfant. Si aucun enfant n'existe, elle renvoie `null` et le noeud courant n'est pas modifié.

## Syntaxe

    node = treeWalker.firstChild;

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.firstChild(); // renvoie le premier enfant de l'élément racine ou null si aucun
```

## Spécifications

| Spécification                                                                                                                                        | Statut                                       | Commentaire                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-firstchild', 'TreeWalker.firstChild')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-firstChild', 'TreeWalker.firstChild')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.firstChild")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

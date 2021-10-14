---
title: TreeWalker.previousSibling()
slug: Web/API/TreeWalker/previousSibling
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/previousSibling
---
{{ APIRef("DOM") }}

La méthode **`TreeWalker.previousSibling()`** déplace le {{domxref("Node")}} courant vers son frère précédent, le cas échéant, et renvoie le frère trouvé. S'il n'y en a pas, elle renvoie `null` et le noeud actuel est inchangé.

## Syntaxe

    node = treeWalker.previousSibling();

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.previousSibling(); // renvoie null car il n'y a pas de frère précédent
```

## Spécifications

| Spécification                                                                                                                                                    | Statut                                       | Commentaire                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-previoussibling', 'TreeWalker.previousSibling')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-previousSibling', 'TreeWalker.previousSibling')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.previousSibling")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

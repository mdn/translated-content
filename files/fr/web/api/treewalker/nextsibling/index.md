---
title: TreeWalker.nextSibling()
slug: Web/API/TreeWalker/nextSibling
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/nextSibling
---
{{ APIRef("DOM") }}

La méthode **`TreeWalker.nextSibling()`** déplace le {{domxref("Node")}} courant vers son frère suivant, le cas échéant, et renvoie le frère trouvé. Si aucun noeud frère n'est trouvé, elle renvoie `null` et le noeud courant reste inchangé.

## Syntaxe

    node = treeWalker.nextSibling();

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
treeWalker.firstChild();
var node = treeWalker.nextSibling(); // renvoie null si le premier enfant de l'élément racine n'a pas de frère
```

## Spécifications

| Spécification                                                                                                                                            | Statut                                       | Commentaire                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-nextsibling', 'TreeWalker.nextSibling')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-nextSibling', 'TreeWalker.nextSibling')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.nextSibling")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

---
title: TreeWalker.lastChild()
slug: Web/API/TreeWalker/lastChild
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/TreeWalker/lastChild
---
{{ APIRef("DOM") }}

La méthode **`TreeWalker.lastChild()`** déplace le {{domxref("Node")}} courant au dernier enfant _visible_ du noeud courant et renvoie l'enfant trouvé. Il déplace aussi le noeud courant vers cet enfant. Si aucun enfant n'existe, elle retourne `null` et le noeud courant reste inchangé.

## Syntaxe

    node = treeWalker.lastChild();

## Exemple

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.lastChild(); // renvoie le dernier enfant visible de l'élément racine
```

## Spécifications

| Spécification                                                                                                                                    | Statut                                       | Commentaire                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-treewalker-lastchild', 'TreeWalker.lastChild')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}} |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-TreeWalker-lastChild', 'TreeWalker.lastChild')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.TreeWalker.firstChild")}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

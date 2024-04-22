---
title: TreeWalker.previousNode()
slug: Web/API/TreeWalker/previousNode
---

{{ APIRef("DOM") }}

La méthode **`TreeWalker.previousNode()`** déplace le {{domxref("Node")}} courant vers le noeud précédent _visible_ dans l'ordre du document et renvoie le noeud trouvé. Elle déplace aussi le noeud courant vers celui-ci. S'il n'en existe aucun ou s'il est avant le _noeud racine_ défini lors de la construction de l'objet, elle renvoie `null` et le noeud actuel n'est pas changé.

## Syntaxe

```js
node = treeWalker.previousNode();
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
var node = treeWalker.previousNode(); // renvoie null car il n'y a pas de parent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

---
title: TreeWalker.nextNode()
slug: Web/API/TreeWalker/nextNode
---

{{ APIRef("DOM") }}

La méthode **`TreeWalker.nextNode()`** déplace le {{domxref("Node")}} courant au noeud suivant _visible_ dans l'ordre du document et renvoie le noeud trouvé. Elle déplace aussi le noeud courant vers celui-ci. Si aucun noeud n'existe, elle renvoie `null` et le noeud courant est inchangé.

## Syntaxe

```js
node = treeWalker.nextNode();
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
var node = treeWalker.nextNode(); // renvoie le premier enfant de la racine, car il s'agit du noeud suivant dans l'ordre du document
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

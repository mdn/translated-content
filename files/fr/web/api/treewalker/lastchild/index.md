---
title: TreeWalker.lastChild()
slug: Web/API/TreeWalker/lastChild
---

{{ APIRef("DOM") }}

La méthode **`TreeWalker.lastChild()`** déplace le {{domxref("Node")}} courant au dernier enfant _visible_ du noeud courant et renvoie l'enfant trouvé. Il déplace aussi le noeud courant vers cet enfant. Si aucun enfant n'existe, elle retourne `null` et le noeud courant reste inchangé.

## Syntaxe

```js
node = treeWalker.lastChild();
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
var node = treeWalker.lastChild(); // renvoie le dernier enfant visible de l'élément racine
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

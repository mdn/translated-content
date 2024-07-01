---
title: TreeWalker.previousSibling()
slug: Web/API/TreeWalker/previousSibling
---

{{ APIRef("DOM") }}

La méthode **`TreeWalker.previousSibling()`** déplace le {{domxref("Node")}} courant vers son frère précédent, le cas échéant, et renvoie le frère trouvé. S'il n'y en a pas, elle renvoie `null` et le noeud actuel est inchangé.

## Syntaxe

```js
node = treeWalker.previousSibling();
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
var node = treeWalker.previousSibling(); // renvoie null car il n'y a pas de frère précédent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

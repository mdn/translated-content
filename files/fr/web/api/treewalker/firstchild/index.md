---
title: TreeWalker.firstChild()
slug: Web/API/TreeWalker/firstChild
---

{{ APIRef("DOM") }}

La méthode **`TreeWalker.firstChild()`** déplace le {{domxref("Node")}} courant vers le premier enfant _visible_ du noeud courant et renvoie l'enfant trouvé. Il déplace aussi le noeud courant vers cet enfant. Si aucun enfant n'existe, elle renvoie `null` et le noeud courant n'est pas modifié.

## Syntaxe

```js
node = treeWalker.firstChild;
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
var node = treeWalker.firstChild(); // renvoie le premier enfant de l'élément racine ou null si aucun
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

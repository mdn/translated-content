---
title: TreeWalker.nextSibling()
slug: Web/API/TreeWalker/nextSibling
---

{{ APIRef("DOM") }}

La méthode **`TreeWalker.nextSibling()`** déplace le {{domxref("Node")}} courant vers son frère suivant, le cas échéant, et renvoie le frère trouvé. Si aucun noeud frère n'est trouvé, elle renvoie `null` et le noeud courant reste inchangé.

## Syntaxe

```js
node = treeWalker.nextSibling();
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
treeWalker.firstChild();
var node = treeWalker.nextSibling(); // renvoie null si le premier enfant de l'élément racine n'a pas de frère
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

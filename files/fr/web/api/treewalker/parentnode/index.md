---
title: TreeWalker.parentNode()
slug: Web/API/TreeWalker/parentNode
---

{{ APIRef("DOM") }}

La méthode **`TreeWalker.parentNode()`** déplace le {{domxref("Node")}} courant vers le premier noeud ancêtre _visible_ dans l'ordre du document et renvoie le noeud trouvé. Si aucun noeud n'existe ou s'il est au-dessus du _noeud racine_ du `TreeWalker`, elle renvoie `null` et le noeud actuel reste inchangé.

## Syntaxe

```js
node = treeWalker.parentNode();
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
var node = treeWalker.parentNode(); // returns null as there is no parent
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("TreeWalker")}} à laquelle elle appartient.

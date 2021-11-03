---
title: NodeIterator.root
slug: Web/API/NodeIterator/root
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriété
translation_of: Web/API/NodeIterator/root
---
{{APIRef("DOM")}}

La propriété en lecture seule **`NodeIterator.root`** représente le {{DOMxref("Node")}} qui est la racine de ce que le {{DOMxref("NodeIterator")}} traverse.

## Syntaxe

    root = nodeIterator.root;

## Exemple

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = nodeIterator.root; // document.body dans ce cas
```

## Spécifications

| Spécification                                                                                                                            | Statut                                       | Commentaire                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-nodeiterator-root', 'NodeIterator.root')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}}. |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeIterator-root', 'NodeIterator.root')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                   |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator.root")}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}.

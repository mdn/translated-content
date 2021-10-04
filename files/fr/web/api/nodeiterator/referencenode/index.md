---
title: NodeIterator.referenceNode
slug: Web/API/NodeIterator/referenceNode
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriétés
translation_of: Web/API/NodeIterator/referenceNode
---
{{APIRef("DOM")}}{{ SeeCompatTable }}

La propriété en lecture seule **`NodeIterator.referenceNode`** renvoie le {{domxref("Node")}} auquel l'itérateur est ancré ; si de nouveaux noeuds sont insérés, l'itérateur reste ancré au noeud de référence spécifié par cette propriété.

## Syntaxe

    node = nodeIterator.referenceNode;

## Exemple

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
node = nodeIterator.referenceNode;
```

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-nodeiterator-referencenode', 'NodeIterator.referenceNode')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator.referenceNode")}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}

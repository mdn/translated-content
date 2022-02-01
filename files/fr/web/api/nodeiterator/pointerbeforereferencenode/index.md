---
title: NodeIterator.pointerBeforeReferenceNode
slug: Web/API/NodeIterator/pointerBeforeReferenceNode
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriétés
translation_of: Web/API/NodeIterator/pointerBeforeReferenceNode
---
{{APIRef("DOM")}} {{SeeCompatTable}}

La propriété en lecture seule **`NodeIterator.pointerBeforeReferenceNode`** renvoie un {{domxref("Boolean")}} (booléen) qui indique si le {{domxref("NodeFilter")}} est ancré avant (si la valeur est `true` (_vrai_)) ou après (`false` (_faux_)) le noeud-ancre indiqué par la propriété {{domxref("NodeIterator.referenceNode")}}.

## Syntaxe

    flag = nodeIterator.pointerBeforeReferenceNode;

## Exemple

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
flag = nodeIterator.pointerBeforeReferenceNode;
```

## Spécifications

| Spécification                                                                                                                                                | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-nodeiterator-pointerbeforereferencenode', 'NodeIterator.pointerBeforeReferenceNode')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator.pointerBeforeReferenceNode")}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}

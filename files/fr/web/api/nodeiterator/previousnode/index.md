---
title: NodeIterator.previousNode()
slug: Web/API/NodeIterator/previousNode
tags:
  - API
  - Arborescence
  - DOM
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeIterator/previousNode
---
{{APIRef("DOM")}}

La méthode **`NodeIterator.previousNode()`** renvoie le noeud précédent dans l'ensemble représenté par le {{domxref("NodeIterator")}} et déplace la position de l'itérateur vers l'arrière à l'intérieur de cet ensemble.

Cette méthode renvoie `null` si le noeud courant est le premier noeud dans l'ensemble.

Dans les navigateurs anciens, comme spécifié dans les anciennes version des spécifications, la méthode pouvait déclencher une `INVALID_STATE_ERR` {{domxref("DOMException")}} si elle était appelée après la méthode {{domxref("NodeIterator.detach()")}}. Les navigateurs récents ne lancent rien.

## Syntaxe

    node = nodeIterator.previousNode();

## Exemple

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false // cet argument facultatif n'est plus utilisé
);
currentNode = nodeIterator.nextNode(); // renvoie le noeud suivant
previousNode = nodeIterator.previousNode(); // même résultat, puisque nous sommes retournés au noeud précédent
```

## Spécifications

| Spécification                                                                                                                                                    | Statut                                       | Commentaire                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-nodeiterator-previousnode', 'NodeIterator.previousNode')}}                                         | {{Spec2('DOM WHATWG')}}             | Comme `detach()` est maintenant une méthode non opérante, cette méthode ne peut plus rien lancer. |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeIterator-previousNode', 'NodeIterator.previousNode')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                                              |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator.previousNode")}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}.

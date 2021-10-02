---
title: NodeIterator.filter
slug: Web/API/NodeIterator/filter
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriétés
translation_of: Web/API/NodeIterator/filter
---
{{APIRef("DOM")}}

La méthode en lecture seule **`NodeIterator.filter`** renvoie un objet {{domxref("NodeFilter")}}, c'est-à-dire un objet implémentant la méthode `acceptNode(node)`, utilisée pour filtrer les noeuds.

Lors de la création du {{domxref("NodeIterator")}}, l'objet filtre est transmis en 3ème paramètre et l'objet méthode `acceptNode(node)` est appelé sur chaque noeud pour déterminer s'il doit ou non l'accepter. Cette fonction doit renvoyer la constante `NodeFilter.FILTER_ACCEPT` quand le noeud doit être accepté et `NodeFilter.FILTER_REJECT` s'il doit être rejeté.

## Syntaxe

    nodeFilter = nodeIterator.filter;

## Exemple

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
nodeFilter = nodeIterator.filter;
```

## Spécifications

| Spécification                                                                                                                                    | Statut                                       | Commentaire                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ---------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-nodeiterator-filter', 'NodeIterator.filter')}}                                         | {{Spec2('DOM WHATWG')}}             | Pas de changement de {{SpecName('DOM2 Traversal_Range')}}. |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeIterator-filter', 'NodeIterator.filter')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.                                                   |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator.filter")}}

## Voir aussi

- L'interface à laquelle cette propriété appartient : {{domxref("NodeIterator")}}.

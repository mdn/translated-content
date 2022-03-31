---
title: NodeIterator.expandEntityReferences
slug: Web/API/NodeIterator/expandEntityReferences
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Noeuds
  - Propriété
translation_of: Web/API/NodeIterator/expandEntityReferences
---
{{APIRef("DOM")}} {{deprecated_header}}

La propriété en lecture seule **`NodeIterator.expandEntityReferences`** renvoie un {{domxref("Boolean")}} (_booléen_) indiquant si les enfants des noeuds de référence d'entité sont visibles ou non pour le {{domxref("NodeIterator")}}.

Si cette valeur est `false` (_faux_), les enfants des nœuds de référence d'entité (ainsi que tous leurs descendants) sont rejetés. Cela a préséance sur la valeur de la méthode  {{domxref("NodeIterator.whatToShow")}} et le filtre associé.

## Syntaxe

    expand = nodeIterator.expandEntityReferences;

## Exemple

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
expand = nodeIterator.expandEntityReferences;
```

## Spécifications

| Spécification                                                                                                                                                                            | Statut                                       | Commentaire                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------- |
| {{SpecName('DOM WHATWG', '#nodeiterator', 'NodeIterator')}}                                                                                                         | {{Spec2('DOM WHATWG')}}             | Suppression de la spécification |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeIterator-expandEntityReferences', 'NodeIterator.expandEntityReferences')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.            |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator.expandEntityReferences")}}

## Voir aussi

- L'interface à laquelle cette propriété appartient : {{domxref("NodeIterator")}}.

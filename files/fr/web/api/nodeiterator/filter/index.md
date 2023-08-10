---
title: NodeIterator.filter
slug: Web/API/NodeIterator/filter
---

{{APIRef("DOM")}}

La méthode en lecture seule **`NodeIterator.filter`** renvoie un objet {{domxref("NodeFilter")}}, c'est-à-dire un objet implémentant la méthode `acceptNode(node)`, utilisée pour filtrer les noeuds.

Lors de la création du {{domxref("NodeIterator")}}, l'objet filtre est transmis en 3ème paramètre et l'objet méthode `acceptNode(node)` est appelé sur chaque noeud pour déterminer s'il doit ou non l'accepter. Cette fonction doit renvoyer la constante `NodeFilter.FILTER_ACCEPT` quand le noeud doit être accepté et `NodeFilter.FILTER_REJECT` s'il doit être rejeté.

## Syntaxe

```js
nodeFilter = nodeIterator.filter;
```

## Exemple

```js
var nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode: function (node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
  false,
);
nodeFilter = nodeIterator.filter;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface à laquelle cette propriété appartient : {{domxref("NodeIterator")}}.

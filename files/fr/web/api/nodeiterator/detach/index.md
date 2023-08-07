---
title: NodeIterator.detach()
slug: Web/API/NodeIterator/detach
---

{{APIRef("DOM")}}{{deprecated_header}}

La méthode **`NodeIterator.detach()`** est une non opération, conservée seulement pour la rétro-compatibilité.

Initialement, elle détachait {{domxref("NodeIterator")}} de l'ensemble sur lequel il itérait, libérant toutes les ressources utilisées par lui et basculant son état à `INVALID`. Une fois cette méthode utilisée, l'appel d'autres méthodes sur le `NodeIterator` déclenchait une exception `INVALID_STATE_ERR`.

## Syntaxe

```js
nodeIterator.detach();
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
nodeIterator.detach(); // détache l'itérateur

nodeIterator.nextNode(); // lance une exception INVALID_STATE_ERR
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}.

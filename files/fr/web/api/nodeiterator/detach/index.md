---
title: NodeIterator.detach()
slug: Web/API/NodeIterator/detach
tags:
  - API
  - Arborescence
  - DOM
  - Itérateur
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeIterator/detach
---
{{APIRef("DOM")}}{{obsolete_header}}

La méthode **`NodeIterator.detach()`** est une non opération, conservée seulement pour la rétro-compatibilité.

Initialement, elle détachait {{domxref("NodeIterator")}} de l'ensemble sur lequel il itérait, libérant toutes les ressources utilisées par lui et basculant son état à `INVALID`. Une fois cette méthode utilisée, l'appel d'autres méthodes sur le `NodeIterator` déclenchait une exception `INVALID_STATE_ERR`.

## Syntaxe

    nodeIterator.detach();

## Exemple

    var nodeIterator = document.createNodeIterator(
        document.body,
        NodeFilter.SHOW_ELEMENT,
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
        false
    );
    nodeIterator.detach(); // détache l'itérateur

    nodeIterator.nextNode(); // lance une exception INVALID_STATE_ERR

## Spécifications

| Spécification                                                                                                                                    | Statut                                       | Commentaire                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-nodeiterator-detach', 'NodeIterator.detach')}}                                         | {{Spec2('DOM WHATWG')}}             | Transformation en non opération |
| {{SpecName('DOM2 Traversal_Range', 'traversal.html#Traversal-NodeIterator-detach', 'NodeIterator.detach')}} | {{Spec2('DOM2 Traversal_Range')}} | Définition initiale.            |

## Compatibilité des navigateurs

{{Compat("api.NodeIterator.detach")}}

## Voir aussi

- L'interface à laquelle elle appartient : {{domxref("NodeIterator")}}.

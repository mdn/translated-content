---
title: NodeFilter
slug: Web/API/Document/createNodeIterator
---

{{APIRef("DOM")}}Uma interface **`NodeFilter`** representa um objeto usado para filtrar os nós (elementos), em uma iteração {{ domxref("NodeIterator") }} ou {{ domxref("TreeWalker") }}. Essas interfaces não conhecem nada sobre o DOM ou sobre como percorrer ou atravessar, elementos; elas apenas sabem como avaliar se um único nó atende aos requisitos do filtro fornecido ou não.

> **Nota:** O navegador não fornece nenhum objeto que implemente essa interface. É esperado que o desenvolvedor escreva tal objeto, utilizando o método `acceptNode()` conforme as suas necessidades, podendo mesclar com objetos do tipo {{domxref("TreeWalker")}} ou {{domxref("NodeIterator")}} em sua implementação..

## Properties

_Essa interface não implementa, nem herda, nenhuma propriedade._

## Methods

_Essa interface não herda nenhum método._

- {{domxref("NodeFilter.acceptNode()")}}

  - : Returns an `unsigned short` that will be used to tell if a given {{domxref("Node")}} must be accepted or not by the {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker") }} iteration algorithm. This method is expected to be written by the user of a `NodeFilter`. Possible return values are:

    | Constant        | Description                                                                                                                                                                                                                                                                        |
    | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `FILTER_ACCEPT` | Value returned by the {{ domxref("NodeFilter.acceptNode()") }} method when a node should be accepted.                                                                                                                                                                              |
    | `FILTER_REJECT` | Value to be returned by the {{ domxref("NodeFilter.acceptNode()") }} method when a node should be rejected. For {{ domxref("TreeWalker") }}, child nodes are also rejected. For {{ domxref("NodeIterator") }}, this flag is synonymous with FILTER_SKIP.                           |
    | `FILTER_SKIP`   | Value to be returned by {{ domxref("NodeFilter.acceptNode()") }} for nodes to be skipped by the {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker") }} object. The children of skipped nodes are still considered. This is treated as "skip this node but not its children". |

## Example

```js
var nodeIterator = document.createNodeIterator(
  // Node to use as root
  document.getElementById("someId"),

  // Only consider nodes that are text nodes (nodeType 3)
  NodeFilter.SHOW_TEXT,

  // Object containing the function to use for the acceptNode method
  // of the NodeFilter
  {
    acceptNode: function (node) {
      // Logic to determine whether to accept, reject or skip node
      // In this case, only accept nodes that have content
      // other than whitespace
      if (!/^\s*$/.test(node.data)) {
        return NodeFilter.FILTER_ACCEPT;
      }
    },
  },
  false,
);

// Show the content of every non-empty text node that is a child of root
var node;

while ((node = nodeIterator.nextNode())) {
  alert(node.data);
}
```

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- Related interfaces: {{domxref("TreeWalker")}}, {{domxref("NodeIterator")}}.

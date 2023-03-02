---
title: NodeFilter
slug: Web/API/Document/createNodeIterator
original_slug: Web/API/NodeFilter
---

{{APIRef("DOM")}}

**`NodeFilter`** 인터페이스는 {{ domxref("NodeIterator") }}나 {{ domxref("TreeWalker") }}에서 노드를 거를 때 사용하는 객체를 나타냅니다. `NodeFilter`는 DOM이나 노드 순회 방법은 알지 못하며, 주어진 필터에 대해 단일 노드를 평가하는 방법만 알 수 있습니다.

> **참고:** The browser doesn't provide any object implementing this interface. It is the user who is expected to write one, tailoring the `acceptNode()` method to its needs, and using it with some {{domxref("TreeWalker")}} or {{domxref("NodeIterator")}} objects.

## Properties

_This interface neither implements, nor inherits, any properties._

## Methods

_This interface doesn't inherit any methods._

- {{domxref("NodeFilter.acceptNode()")}}
  - | : Returns an `unsigned short` that will be used to tell if a given {{domxref("Node")}} must be accepted or not by the {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker") }} iteration algorithm. This method is expected to be written by the user of a `NodeFilter`. Possible return values are: | Constant                                                                                                                                                                                                                                                                                                           | Description |
    | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
    | `FILTER_ACCEPT`                                                                                                                                                                                                                                                                                                                   | Value returned by the {{ domxref("NodeFilter.acceptNode()") }} method when a node should be accepted.                                                                                                                                                                                                  |
    | `FILTER_REJECT`                                                                                                                                                                                                                                                                                                                   | Value to be returned by the {{ domxref("NodeFilter.acceptNode()") }} method when a node should be rejected. For {{ domxref("TreeWalker") }}, child nodes are also rejected. For {{ domxref("NodeIterator") }}, this flag is synonymous with FILTER_SKIP.                           |
    | `FILTER_SKIP`                                                                                                                                                                                                                                                                                                                     | Value to be returned by {{ domxref("NodeFilter.acceptNode()") }} for nodes to be skipped by the {{ domxref("NodeIterator") }} or {{ domxref("TreeWalker") }} object. The children of skipped nodes are still considered. This is treated as "skip this node but not its children". |

## Example

```js
var nodeIterator = document.createNodeIterator(
  // Node to use as root
  document.getElementById('someId'),

  // Only consider nodes that are text nodes (nodeType 3)
  NodeFilter.SHOW_TEXT,

  // Object containing the function to use for the acceptNode method
  // of the NodeFilter
    { acceptNode: function(node) {
      // Logic to determine whether to accept, reject or skip node
      // In this case, only accept nodes that have content
      // other than whitespace
      if ( ! /^\s*$/.test(node.data) ) {
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  },
  false
);

// Show the content of every non-empty text node that is a child of root
var node;

while ((node = nodeIterator.nextNode())) {
  alert(node.data);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- Related interfaces: {{domxref("TreeWalker")}}, {{domxref("NodeIterator")}}.

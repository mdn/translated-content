---
title: Node.cloneNode()
slug: Web/API/Node/cloneNode
---

{{APIRef("DOM")}}**`Node.cloneNode()`** 메서드는 이 메서드를 호출한 Node 의 복제된 Node를 반환합니다.

## Syntax

```js
var dupNode = node.cloneNode(deep);
```

- _node_
  - : 복제되어야 할 node.
- _dupNode_
  - : _복제된 새로운 node._
- _deep {{optional_inline}}_
  - : _해당 node의 children 까지 복제하려면 true, 해당 node 만 복제하려면 false_

## Example

```js
var p = document.getElementById("para1");
var p_prime = p.cloneNode(true);
```

## Notes

Cloning a node copies all of its attributes and their values, including intrinsic (in–line) listeners. It does not copy event listeners added using [`addEventListener()`](/ko/docs/DOM/element.addEventListener) or those assigned to element properties. (e.g. `node.onclick = fn`) Moreover, for a \<canvas> element, the painted image is not copied.

The duplicate node returned by `cloneNode()` is not part of the document until it is added to another node that is part of the document using {{domxref("Node.appendChild()")}} or a similar method. It also has no parent until it is appended to another node.

If `deep` is set to `false`, child nodes are not cloned. Any text that the node contains is not cloned either, as it is contained in one or more child {{domxref("Text")}} nodes.

If `deep` evaluates to `true`, the whole subtree (including text that may be in child {{domxref("Text")}} nodes) is copied too. For empty nodes (e.g. {{HTMLElement("img")}} and {{HTMLElement("input")}} elements) it doesn't matter whether `deep` is set to `true` or `false`.

> **경고:** `cloneNode()` may lead to duplicate element IDs in a document.

If the original node has an ID and the clone is to be placed in the same document, the ID of the clone should be modified to be unique. Name attributes may need to be modified also, depending on whether duplicate names are expected.

To clone a node for appending to a different document, use {{domxref("Document.importNode()")}} instead.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

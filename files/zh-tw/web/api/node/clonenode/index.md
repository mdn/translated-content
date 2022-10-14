---
title: Node.cloneNode()
slug: Web/API/Node/cloneNode
---

{{APIRef("DOM")}}

**`Node.cloneNode()`** 方法會回傳一個呼叫此方法之節點物件的拷貝。

## 語法

```plain
var dupNode = node.cloneNode(deep);
```

- _node_
  - : The node to be cloned.
- _dupNode_
  - : The new node that will be a clone of `node`
- _deep {{optional_inline}}_
  - : `true` if the children of the node should also be cloned, or `false` to clone only the specified node.

> **備註：** In the DOM4 specification (as implemented in Gecko 13.0 {{geckoRelease(13)}}), `deep` is an optional argument. If omitted, the method acts as if the value of `deep` was **`true`**, defaulting to using deep cloning as the default behavior. To create a shallow clone, `deep` must be set to `false`.This behavior has been changed in the latest spec, and if omitted, the method will act as if the value of `deep` was **`false`**. Though It's still optional, you should always provide the `deep` argument both for backward and forward compatibility. With Gecko 28.0 {{geckoRelease(28)}}), the console warned developers not to omit the argument. Starting with Gecko 29.0 {{geckoRelease(29)}}), a shallow clone is defaulted instead of a deep clone.

## 範例

```js
var p = document.getElementById("para1");
var p_prime = p.cloneNode(true);
```

## 備註

Cloning a node copies all of its attributes and their values, including intrinsic (in–line) listeners. It does not copy event listeners added using [`addEventListener()`](/zh-TW/docs/DOM/element.addEventListener) or those assigned to element properties. (e.g. `node.onclick = fn`) Moreover, for a \<canvas> element, the painted image is not copied.

The duplicate node returned by `cloneNode()` is not part of the document until it is added to another node that is part of the document using {{domxref("Node.appendChild()")}} or a similar method. It also has no parent until it is appended to another node.

If `deep` is set to `false`, child nodes are not cloned. Any text that the node contains is not cloned either, as it is contained in one or more child {{domxref("Text")}} nodes.

If `deep` evaluates to `true`, the whole subtree (including text that may be in child {{domxref("Text")}} nodes) is copied too. For empty nodes (e.g. {{HTMLElement("img")}} and {{HTMLElement("input")}} elements) it doesn't matter whether `deep` is set to `true` or `false`.

> **警告：** `cloneNode()` may lead to duplicate element IDs in a document.

If the original node has an ID and the clone is to be placed in the same document, the ID of the clone should be modified to be unique. Name attributes may need to be modified also, depending on whether duplicate names are expected.

To clone a node for appending to a different document, use {{domxref("Document.importNode()")}} instead.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

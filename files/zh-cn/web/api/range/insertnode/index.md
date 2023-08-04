---
title: Range.insertNode()
slug: Web/API/Range/insertNode
---

{{ApiRef("DOM")}}

**`Range.insertNode()`** 是在{{domxref("Range")}}的起始位置插入节点的方法。

新节点是插入在 `Range` 起始位置。如果将新节点添加到一个文本{{domxref("Node", "节点")}}，则该节点在插入点处被拆分，插入发生在两个文本节点之间

如果新节点是一个文档片段，则插入文档片段的子节点。

## Syntax

```plain
range.insertNode(newNode);
```

### Parameters

- _newNode_
  - : The {{domxref("Node")}} to insert at the start of the `range`.

## Example

```js
range = document.createRange();
newNode = document.createElement("p");
newNode.appendChild(document.createTextNode("New Node Inserted Here"));
range.selectNode(document.getElementsByTagName("div").item(0));
range.insertNode(newNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/zh-CN/docs/Web/API/Document_Object_Model)

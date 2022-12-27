---
title: Range.intersectsNode()
slug: Web/API/Range/intersectsNode
---

{{ApiRef("DOM")}} {{SeeCompatTable}}

**`Range.intersectsNode()` **方法返回一个布尔值，表明其给定的 {{domxref("Node")}} 节点是否与{{domxref("Range")}}的范围相交

## Syntax

```plain
bool = range.intersectsNode( referenceNode )
```

### Parameters

- _referenceNode_
  - : 与{{domxref("Range")}}做比较的{{domxref("Node")}}节点

## Example

```js
var range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
var bool = range.intersectsNode(document.getElementsByTagName("p").item(0));
```

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)

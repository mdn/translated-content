---
title: Range.setStartBefore()
slug: Web/API/Range/setStartBefore
---

{{ApiRef("DOM")}}

**`Range.setStartBefore()`** 方法相对另一个 {{domxref("Node")}}来设置一个{{domxref("Range")}} 的开始位置。{{domxref("Range")}}的开始节点（focusNode）的父节点，和 `referenceNode`的父节点是同一个。

## Syntax

```plain
range.setStartBefore(referenceNode);
```

### Parameters

- _referenceNode_
  - : 一个{{domxref("Range")}}新的开始位置上的{{domxref("Node")}}.

## Example

```js
var range = document.createRange();
var referenceNode = document.getElementsByTagName("div").item(0);

range.setStartBefore(referenceNode);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)

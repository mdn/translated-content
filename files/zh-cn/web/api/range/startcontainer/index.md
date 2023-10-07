---
title: Range.startContainer
slug: Web/API/Range/startContainer
---

Range.startContainer 是只读属性，返回 Range 开始的节点。要更改节点的起始位置，请使用 Range.setStart() 方法。

## Syntax

```plain
startRangeNode = range.startContainer;
```

## Example

```js
range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
startRangeNode = range.startContainer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)

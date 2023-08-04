---
title: Document.createRange()
slug: Web/API/Document/createRange
---

{{APIRef("DOM")}}

Возвращает новый объект типа {{domxref("Range")}}.

## Syntax

```
range = document.createRange();
```

`range` содержит созданный объект {{domxref("Range")}}.

## Example

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## Notes

После того, как Range был создан, вам необходимо установить границы, прежде чем вы сможете использовать большую часть методов.

## Specification

- [DOM Level 2 Range: DocumentRange.createRange](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level2-DocumentRange-method-createRange)

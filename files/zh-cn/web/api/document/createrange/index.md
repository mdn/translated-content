---
title: Document.createRange()
slug: Web/API/Document/createRange
---

{{APIRef("DOM")}}

返回一个 {{domxref("Range")}} 对象。

## 语法

```plain
range = document.createRange();
```

`range` 是一个 {{domxref("Range")}} 对象。

## 例子

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## 注意

一旦一个 Range 对象被建立，在使用他的大多数方法之前需要去设置他的临界点。

## Specification

- [DOM Level 2 Range: DocumentRange.createRange](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level2-DocumentRange-method-createRange)

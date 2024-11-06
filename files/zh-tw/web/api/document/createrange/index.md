---
title: Document.createRange()
slug: Web/API/Document/createRange
---

{{APIRef("DOM")}}

回傳一 {{domxref("Range")}} 物件。

## 語法

```plain
range = document.createRange();
```

`創造 range` 為 {{domxref("Range")}} 物件.

## 示例

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## 註意

當 `Range` 被創建之後，必須先設定其範圍初始點及結束點， 才能使用大部分 {{domxref("Range")}} 所提供的方法。

## 規範

- [DOM Level 2 Range: DocumentRange.createRange](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level2-DocumentRange-method-createRange)

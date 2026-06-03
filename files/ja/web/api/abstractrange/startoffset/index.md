---
title: "AbstractRange: startOffset プロパティ"
short-title: startOffset
slug: Web/API/AbstractRange/startOffset
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

**`startOffset`** は {{domxref("AbstractRange")}} インターフェイスの読み取り専用プロパティで、開始ノードにおける範囲の開始位置のオフセットを返します。

先頭の位置を変更するには、{{domxref("Range.setStart()")}} メソッドなどを使用してください。

## 値

範囲の最初の文字が位置を {{domxref("AbstractRange.startContainer", "startContainer")}} が示す {{domxref("Node")}} 内の文字数で示す整数値です。

`startContainer` が {{domxref("Node")}} であり、その型が {{domxref("Text")}}、{{domxref("Comment")}}、{{domxref("CDATASection")}} のいずれかの場合、オフセットは `startContainer` の先頭から範囲の先頭までの文字数です。それ以外の {{domxref("Node")}} 型の場合、`endOffset` は `startContainer` の先頭から範囲の先頭までの子ノードの数です。

## 例

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const startRangeOffset = range.startOffset;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

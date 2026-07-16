---
title: "AbstractRange: endOffset プロパティ"
short-title: endOffset
slug: Web/API/AbstractRange/endOffset
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

**`endOffset`** は {{domxref("AbstractRange")}} インターフェイスの読み取り専用プロパティで、範囲の末尾の位置の、最後のノードの中におけるオフセットを返します。

末尾の位置を変更するには、{{domxref("Range.setEnd()")}} メソッドなどを使用してください。

## 値

範囲の最後の文字が位置する {{domxref("AbstractRange.endContainer", "endContainer")}} が示す {{domxref("Node")}} 内の文字数を示す整数値です。

`endContainer` が {{domxref("Node")}} であり、その型が {{domxref("Text")}}、{{domxref("Comment")}}、{{domxref("CDATASection")}} のいずれかの場合、オフセットは `endContainer` の先頭から範囲の末尾までの文字数です。それ以外の {{domxref("Node")}} 型の場合、`endOffset` は `endContainer` の先頭から範囲の末尾までの子ノードの数です。

## 例

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const endRangeOffset = range.endOffset;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

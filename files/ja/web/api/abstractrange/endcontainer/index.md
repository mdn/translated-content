---
title: "AbstractRange: endContainer プロパティ"
short-title: endContainer
slug: Web/API/AbstractRange/endContainer
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

**`endContainer`** は {{domxref("AbstractRange")}} インターフェイスの読み取り専用プロパティで、範囲の末尾がある {{domxref("Node")}} を返します。

末尾の位置を変更するには、{{domxref("Range.setEnd()")}} メソッドなどを使用してください。

## 値

範囲の末尾の文字を含む {{domxref("Node")}} です。

## 例

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const endRangeNode = range.endContainer;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

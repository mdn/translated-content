---
title: "AbstractRange: startContainer プロパティ"
short-title: startContainer
slug: Web/API/AbstractRange/startContainer
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("DOM")}}

**`startContainer`** は {{domxref("AbstractRange")}} インターフェイスの読み取り専用プロパティで、範囲の先頭の {{domxref("Node")}} を返します。

先頭の位置を変更するには、{{domxref("Range.setStart()")}} メソッドなどを使用してください。

## 値

範囲の開始位置が内部にある {{domxref("Node")}} です。

## 例

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const startRangeNode = range.startContainer;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

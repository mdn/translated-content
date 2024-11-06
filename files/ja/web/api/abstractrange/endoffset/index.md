---
title: "AbstractRange: endOffset プロパティ"
short-title: endOffset
slug: Web/API/AbstractRange/endOffset
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`endOffset`** は {{domxref("AbstractRange")}} インターフェイスの読み取り専用プロパティで、範囲の終了位置の最後のノードの中のオフセットを返します。

## 値

範囲の最後の文字が位置する {{domxref("AbstractRange.endContainer", "endContainer")}} が示す {{domxref("Node")}} 内の文字数を示す整数値です。

## 例

```js
let endOffset = range.endOffset;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

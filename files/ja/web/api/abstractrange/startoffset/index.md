---
title: "AbstractRange: startOffset プロパティ"
short-title: startOffset
slug: Web/API/AbstractRange/startOffset
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

**`startOffset`** は {{domxref("AbstractRange")}} インターフェイスの読み取り専用プロパティで、開始ノードにおける範囲の開始位置のオフセットを返します。

## 値

範囲の最初の文字が位置を {{domxref("AbstractRange.startContainer", "startContainer")}} が示す {{domxref("Node")}} 内の文字数で示す整数値です。

## 例

```js
let startOffset = range.startOffset;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

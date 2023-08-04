---
title: "Node: ownerDocument プロパティ"
slug: Web/API/Node/ownerDocument
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

**`ownerDocument`** は {{domxref("Node")}} インターフェイスの読み取り専用プロパティで、このノードの最上位の文書オブジェクトを返します。

## 値

すべての子ノードが作成された最上位の {{domxref("Document")}} オブジェクトです。

このプロパティが文書自身のノードで使用された場合、値は `null` になります。

## 例

```js
// 指定された "p" から、文書オブジェクトの子である最上位の HTML を取得します。

const d = p.ownerDocument;
const html = d.documentElement;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

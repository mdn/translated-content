---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Node.ownerDocument
translation_of: Web/API/Node/ownerDocument
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

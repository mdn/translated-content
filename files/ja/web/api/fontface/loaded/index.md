---
title: "FontFace: loaded プロパティ"
short-title: loaded
slug: Web/API/FontFace/loaded
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`loaded`** は {{domxref("FontFace")}} インターフェイスの読み取り専用プロパティで、 {{jsxref('Promise')}} を返します。これはオブジェクトのコンストラクターで指定されたフォントの読み込みが完了した時に、現在の `FontFace` オブジェクトで解決するか、 `SyntaxError` で拒否されます。

## 値

{{jsxref('Promise')}} で、現在の `FontFace` オブジェクトで解決します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

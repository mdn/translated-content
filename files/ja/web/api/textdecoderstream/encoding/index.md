---
title: "TextDecoderStream: encoding プロパティ"
slug: Web/API/TextDecoderStream/encoding
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`encoding`** は {{domxref("TextDecoderStream")}} インターフェイスの読み取り専用プロパティで、このデコーダーが使用するエンコーディングアルゴリズムの名前が入った文字列を返します。

エンコーダーは [コンストラクター](/ja/docs/Web/API/TextDecoderStream/TextDecoderStream) の `label` 引数で設定し、既定値は `utf-8` となります。

## 値

文字列で、エンコーディング形式の名前を表す小文字の ASCII 名が入ります。

取りうる値は [`TextDecoder.encoding`](/ja/docs/Web/API/TextDecoder/encoding) に挙げられているもの（[エンコーディング API のエンコーディング](/ja/docs/Web/API/Encoding_API/Encodings)にあるラベル）と同じです。

## 例

`TextDecoderStream` から `encoding` の値を返します。

```js
stream = new TextDecoderStream();
console.log(stream.encoding); // 既定値の "utf-8" を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

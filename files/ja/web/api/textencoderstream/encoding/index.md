---
title: "TextEncoderStream: encoding プロパティ"
slug: Web/API/TextEncoderStream/encoding
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`encoding`** は {{domxref("TextEncoderStream")}} インターフェイスの読み取り専用プロパティで、現在の `TextEncoderStream` オブジェクトが使用するエンコーディングアルゴリズムの名前が入った文字列を返します。

## 値

`utf-8` のエンコードされたデータが入った文字列です。

## 例

以下の例は、`TextEncoderStream` オブジェクトが `encoding` を返す方法を示しています。

```js
stream = new TextEncoderStream();
console.log(stream.encoding);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

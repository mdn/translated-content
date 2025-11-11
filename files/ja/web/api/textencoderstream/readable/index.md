---
title: "TextEncoderStream: readable プロパティ"
slug: Web/API/TextEncoderStream/readable
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`readable`** は {{domxref("TextEncoderStream")}} インターフェイスの読み取り専用プロパティで、{{domxref("ReadableStream")}} を返します。

## 値

{{domxref("ReadableStream")}} です。

## 例

次の例は、`ReadableStream` を `TextEncoderStream` オブジェクトから返す方法を示しています。

```js
stream = new TextEncoderStream();
console.log(stream.readable); // ReadableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

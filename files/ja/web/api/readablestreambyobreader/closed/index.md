---
title: "ReadableStreamBYOBReader: closed プロパティ"
short-title: closed
slug: Web/API/ReadableStreamBYOBReader/closed
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`closed`** は {{domxref("ReadableStreamBYOBReader")}} インターフェイスの読み取り専用プロパティで、ストリームが閉じられた場合、またはリーダーのロックが解除された場合に履行され、ストリームがエラーの場合は拒否されるプロミスを返します。

このプロパティにより、ストリーミング処理の終わりに応答するコードを書くことができます。

### 値

{{jsxref("Promise")}} です。

## 例

下記コードは BYOBReader の閉じられたかエラーかの状態を処理するパターンを示します。

```js
const reader = stream.getReader({ mode: "byob" });
reader.closed
  .then(() => {
    // 解決 - ストリームを閉じるコード
  })
  .catch(() => {
    // 拒否 - エラーを扱うコード
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_byte_streams)

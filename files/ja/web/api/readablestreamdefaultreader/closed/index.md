---
title: "ReadableStreamDefaultReader: closed プロパティ"
short-title: closed
slug: Web/API/ReadableStreamDefaultReader/closed
l10n:
  sourceCommit: d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{APIRef("Streams")}}

**`closed`** は {{domxref("ReadableStreamDefaultReader")}} インターフェイスの読み取り専用プロパティで、ストリームが閉じられた場合、またはリーダーのロックが解除された場合に履行され、ストリームがエラーの場合に拒否されるプロミス ({{jsxref("Promise")}}) を返します。このプロパティを使用すると、ストリーミング処理の終わりに応答するコードを書くことができます。

## 値

{{jsxref("Promise")}} です。

## 例

このスニペットでは、以前に作成したリーダーに問い合わせて、ストリームが閉じられているかどうかを確認します。 閉じられるとプロミスが履行され、メッセージをコンソールに出力します。

```js
reader.closed.then(() => {
  console.log("reader closed");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/Web/API/Streams_API/Using_readable_streams)

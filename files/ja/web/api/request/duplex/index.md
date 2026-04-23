---
title: "Request: duplex プロパティ"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: 3a9a6f9dd92859dca2f928c59b34d9177adb9ae5
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

**`duplex`** は {{domxref("Request")}} インターフェイスの読み取り専用のプロパティで、全二重モードを返します。このモードは、ブラウザーがレスポンスを処理する前にリクエスト全体を送信する必要があるかどうかを決定します。

## 値

以下の値を取りうる文字列です。

- `"half"`
  - : ブラウザーはレスポンスを処理する前にリクエスト全体を送信しなければなりません。

## メモ

`duplex` は `Request` オブジェクトの構築時にオプションとして渡すことができますが、現時点ではすべてのブラウザーにおいて、結果オブジェクト上で読み取り可能なプロパティとして公開されることはありません。

## 例

### リクエストの全二重モードをチェック

```js
const stream = new ReadableStream({
  /* ... */
});
const request = new Request("/upload", {
  method: "POST",
  body: stream,
  duplex: "half", // ストリーミングリクエストで必要
});

console.log(request.duplex); // "half"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- {{domxref("Request.Request", "Request()")}} コンストラクター
- [`RequestInit.duplex`](/ja/docs/Web/API/RequestInit#duplex) （リクエストオプション）
- [フェッチをストリームとして消費する](/ja/docs/Web/API/Streams_API/Using_readable_streams#フェッチをストリームとして消費する)

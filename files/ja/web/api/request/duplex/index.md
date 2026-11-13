---
title: "Request: duplex プロパティ"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

**`duplex`** は {{domxref("Request")}} インターフェイスの読み取り専用のプロパティで、双方向通信モードを返します。このモードは、ブラウザーがレスポンスを処理する前にリクエスト全体を送信する必要があるかどうかを決定します。

## 値

以下の値を取りうる文字列です。

- `"half"`
  - : ブラウザーはレスポンスを処理する前にリクエスト全体を送信しなければなりません。

## メモ

`duplex` は `Request` オブジェクトの構築時にオプションとして渡すことができますが、現時点ではすべてのブラウザーにおいて、結果オブジェクト上で読み取り可能なプロパティとして公開されることはありません。

## 例

### リクエストの双方向通信モードをチェック

```js
const stream = new ReadableStream({/* ... */});
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

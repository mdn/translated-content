---
title: Request
slug: Web/API/Request
---

{{APIRef("Fetch API")}}

**`Request`** は [Fetch API](/ja/docs/Web/API/Fetch_API) のインターフェイスで、リソースのリクエストを表します。

新しい `Request` オブジェクトは {{domxref("Request.Request","Request()")}} コンストラクターを用いて生成することができますが、 `Request` オブジェクトは他の API 操作、例えばサービスワーカーの {{domxref("FetchEvent.request")}} などの結果として返されたものに遭遇することの方が多いでしょう。

## コンストラクター

- {{domxref("Request.Request","Request()")}}
  - : 新しい `Request` オブジェクトを生成します。

## プロパティ

- {{domxref("Request.body")}} {{readonlyInline}}
  - : body の中身を {{domxref("ReadableStream")}} として取り出すために使用されるシンプルなゲッターです。
- {{domxref("Request.bodyUsed")}} {{readonlyInline}}
  - : `true` または `false` で、レスポンス中で本文が既に使用されたかどうかを示します。
- {{domxref("Request.cache")}} {{readonlyInline}}
  - : リクエストのキャッシュモード (`default`, `reload`, `no-cache` など) が入ります。
- {{domxref("Request.credentials")}} {{readonlyInline}}
  - : リクエストの認証情報 (`omit`, `same-origin`, `include` など) が入ります。既定値は `same-origin` です。
- {{domxref("Request.destination")}} {{ReadOnlyInline}}
  - : 文字列で、リクエストの方向を示します。これはその種類のコンテンツがリクエストされることを示す文字列です。
- {{domxref("Request.headers")}} {{readonlyInline}}
  - : リクエストに関連付けられた {{domxref("Headers")}} オブジェクトが入ります。
- {{domxref("Request.integrity")}} {{readonlyInline}}
  - : リクエストの [subresource integrity](/ja/docs/Web/Security/Subresource_Integrity) 値 (例えば `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`) が入ります。
- {{domxref("Request.method")}} {{readonlyInline}}
  - : リクエストメソッド (`GET`, `POST` など) が入ります。
- {{domxref("Request.mode")}} {{readonlyInline}}
  - : リクエストのモード ( `cors`, `no-cors`, `same-origin`, `navigate` など) が入ります。
- {{domxref("Request.redirect")}} {{readonlyinline}}
  - : リダイレクトをどう扱うかのモードが入ります。 `follow`, `error`, `manual` のいずれかです。
- {{domxref("Request.referrer")}} {{readonlyInline}}
  - : リクエストのリファラー (`client` など) が入ります。
- {{domxref("Request.referrerPolicy")}} {{readonlyInline}}
  - : リファラに関するポリシー (`no-referrer` など) が入ります。
- {{domxref("Request.url")}} {{readonlyInline}}
  - : リクエストの URL が入ります。

## メソッド

- {{domxref("Request.arrayBuffer()")}}
  - : リクエスト本体を表す {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。
- {{domxref("Request.blob()")}}
  - : リクエスト本体を表す {{domxref("Blob")}} で解決するプロミスを返します。
- {{domxref("Request.clone()")}}
  - : 現在の `Request` オブジェクトのコピーを生成します。
- {{domxref("Request.formData()")}}
  - : リクエスト本体を表す {{domxref("FormData")}} で解決するプロミスを返します。
- {{domxref("Request.json()")}}
  - : リクエスト本体を表す {{domxref("JSON")}} で解決するプロミスを返します。
- {{domxref("Request.text()")}}
  - : リクエスト本体を表す {{domxref("USVString")}} (テキスト) で解決するプロミスを返します。

> **メモ:** リクエスト本文の関数は 1 度しか呼び出せません。 2 回目以降は空の文字列または ArrayBuffer で解決します。

## 例

次のスニペットでは、`Request()` コンストラクターを使用して (スクリプトと同じディレクトリーにある画像ファイルのために) 新しい request を生成し、いくつかリクエストのプロパティ値を返しています。

```js
const request = new Request('https://www.mozilla.org/favicon.ico');

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

このリクエストは、下記のように `Request` オブジェクトを引数として {{domxref("WindowOrWorkerGlobalScope.fetch()")}} に渡すことで読み取ることができます。

```js
fetch(request)
  .then(response => response.blob())
  .then(blob => {
    image.src = URL.createObjectURL(blob);
  });
```

以下のスニペットでは、 `Request()` コンストラクターにいくつかの初期化データと本文コンテンツを付けて、本文ペイロードを必要とする API リクエストのための新しいリクエストを生成します。

```js
const request = new Request('https://example.com', {method: 'POST', body: '{"foo": "bar"}'});

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> **メモ:** body の型は {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} {{domxref("ReadableStream")}} のいずれかで、ペイロードにそのオブジェクトを文字列化するのに必要な JSON オブジェクトでも同様です。

すると `Request` オブジェクトを、例えば {{domxref("WindowOrWorkerGlobalScope.fetch()")}} 呼び出しの引数として渡すことで API リクエストを取得できて、レスポンスを取得できます。

```js
fetch(request)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
    // ...
  }).catch(error => {
    console.error(error);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

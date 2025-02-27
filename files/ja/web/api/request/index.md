---
title: Request
slug: Web/API/Request
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`Request`** は[フェッチ API](/ja/docs/Web/API/Fetch_API) のインターフェイスで、リソースのリクエストを表します。

新しい `Request` オブジェクトは {{domxref("Request.Request","Request()")}} コンストラクターを用いて生成することができますが、 `Request` オブジェクトは他の API 操作、例えばサービスワーカーの {{domxref("FetchEvent.request")}} などの結果として返されたものに遭遇することの方が多いでしょう。

## コンストラクター

- {{domxref("Request.Request","Request()")}}
  - : 新しい `Request` オブジェクトを生成します。

## プロパティ

- {{domxref("Request.body")}} {{ReadOnlyInline}}
  - : 本体の中身の {{domxref("ReadableStream")}} です。
- {{domxref("Request.bodyUsed")}} {{ReadOnlyInline}}
  - : `true` または `false` で、レスポンス中で本体が既に使用されたかどうかを示します。
- {{domxref("Request.cache")}} {{ReadOnlyInline}}
  - : リクエストのキャッシュモード (`default`, `reload`, `no-cache` など) が入ります。
- {{domxref("Request.credentials")}} {{ReadOnlyInline}}
  - : リクエストの認証情報 (`omit`, `same-origin`, `include` など) が入ります。既定値は `same-origin` です。
- {{domxref("Request.destination")}} {{ReadOnlyInline}}
  - : 文字列で、リクエストされたコンテンツの型を表します。
- {{domxref("Request.headers")}} {{ReadOnlyInline}}
  - : リクエストに関連付けられた {{domxref("Headers")}} オブジェクトが入ります。
- {{domxref("Request.integrity")}} {{ReadOnlyInline}}
  - : リクエストの[サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)の値を保持します（`sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=` など）。
- {{domxref("Request.isHistoryNavigation")}} {{ReadOnlyInline}}
  - : 論理値で、このリクエストが履歴のナビゲーションであるかどうかを示します。
- {{domxref("Request.keepalive")}} {{ReadOnlyInline}}
  - : リクエストの `keepalive` 設定（`true` または `false`）が入ります。これは、リクエストが完全に完了する前に開始ページが読み込まれなかった場合に、ブラウザーが関連付けられたリクエストを維持するかどうかを示します。
- {{domxref("Request.method")}} {{ReadOnlyInline}}
  - : リクエストメソッド (`GET`, `POST` など) を保持します。
- {{domxref("Request.mode")}} {{ReadOnlyInline}}
  - : リクエストのモード ( `cors`, `no-cors`, `same-origin`, `navigate` など) を保持します。
- {{domxref("Request.redirect")}} {{ReadOnlyInline}}
  - : リダイレクトをどう扱うかのモードが入ります。 `follow`, `error`, `manual` のいずれかです。
- {{domxref("Request.referrer")}} {{ReadOnlyInline}}
  - : このリクエストのリファラー (`client` など) が入ります。
- {{domxref("Request.referrerPolicy")}} {{ReadOnlyInline}}
  - : リファラに関するポリシー (`no-referrer` など) が入ります。
- {{domxref("Request.signal")}} {{ReadOnlyInline}}
  - : リクエストに関連付けられた {{domxref("AbortSignal")}} を返します。
- {{domxref("Request.url")}} {{ReadOnlyInline}}
  - : リクエストの URL が入ります。

## メソッド

- {{domxref("Request.arrayBuffer()")}}
  - : リクエストの本体の {{jsxref("ArrayBuffer")}} 表現で解決するプロミスを返します。
- {{domxref("Request.blob()")}}
  - : リクエストの本体の {{domxref("Blob")}} 表現で解決するプロミスを返します。
- {{domxref("Request.bytes()")}}
  - : リクエスト本体の {{jsxref("Uint8Array")}} 表現で解決するプロミスを返します。
- {{domxref("Request.clone()")}}
  - : 現在の `Request` オブジェクトのコピーを生成します。
- {{domxref("Request.formData()")}}
  - : リクエストの本体の {{domxref("FormData")}} 表現で解決するプロミスを返します。
- {{domxref("Request.json()")}}
  - : リクエストの本体を {{JSxRef("JSON")}} で解釈した結果で解決するプロミスを返します。
- {{domxref("Request.text()")}}
  - : リクエストの本体のテキスト表現で解決するプロミスを返します。

> [!NOTE]
> リクエスト本体の機能は一度しか実行することができません。それ以降の呼び出しは、TypeError で拒否され、本体ストリームがすでに使用されていることを示すエラーが表示されます。

## 例

次のスニペットでは、`Request()` コンストラクターを使用して (スクリプトと同じディレクトリーにある画像ファイルのために) 新しい request を生成し、いくつかリクエストのプロパティ値を返しています。

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

このリクエストは、下記のように `Request` オブジェクトを引数として {{domxref("Window/fetch", "fetch()")}} に渡すことで読み取ることができます。

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

以下のスニペットでは、 `Request()` コンストラクターにいくつかの初期化データと本体コンテンツを付けて、本体ペイロードを必要とする API リクエストのための新しいリクエストを生成します。

```js
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> [!NOTE]
> body の型は {{domxref("Blob")}}, {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("ReadableStream")}}, {{jsxref("String")}} オブジェクトのいずれか、および文字列リテラルのみですので、 JSON オブジェクトを本体に追加するには、そのオブジェクトの文字列化をする必要があります。

すると `Request` オブジェクトを、例えば {{domxref("Window/fetch", "fetch()")}} 呼び出しの引数として渡すことで API リクエストを取得できて、レスポンスを取得できます。

```js
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("API サーバーで問題が発生しました。");
    }
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

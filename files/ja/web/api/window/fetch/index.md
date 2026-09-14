---
title: "Window: fetch() メソッド"
short-title: fetch()
slug: Web/API/Window/fetch
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("Fetch API")}}

**`fetch()`** は {{domxref("Window")}} インターフェイスのメソッドで、ネットワークからリソースを取得するプロセスを開始し、レスポンスが利用できるようになったら履行されるプロミスを返します。

このプロミスは、そのリクエストに対するレスポンスを表す {{domxref("Response")}} で解決します。

`fetch()` のプロミスは、ネットワークエラーが発生した場合（普通は権限の問題があったときなど）のみ拒否されます。
`fetch()` のプロミスは、サーバーがエラーを示す HTTP ステータスコード（`404`、`504` など）を返しても拒否されません。
代わりに、 `then()` ハンドラーで {{domxref("Response.ok")}} や {{domxref("Response.status")}} プロパティをチェックする必要があります。

`fetch()` メソッドは取得するリソースのディレクティブではなく、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)の `connect-src` ディレクティブによって制御されます。

> [!NOTE]
> `fetch()` メソッドの引数は {{domxref("Request.Request","Request()")}} コンストラクターと全く同じです。

## 構文

```js-nolint
fetch(resource)
fetch(resource, options)
```

### 引数

- `resource`
  - : 取得したいリソースを定義します。以下のどちらかが使用できます。
    - 文字列または{{Glossary("stringifier", "文字列化")}}できるその他のオブジェクト（{{domxref("URL")}} オブジェクトを含む）。取得したいリソースの直接の URL を含む文字列です。この URL は、文書内の {{domxref("Node.baseURI", "baseURI")}}、ワーカーコンテキストでは {{domxref("WorkerGlobalScope.location")}} となります。
    - {{domxref("Request")}} オブジェクト。

- `options` {{optional_inline}}
  - : リクエストに適用する独自の設定を含む {{domxref("RequestInit")}} オブジェクトです。

### 返値

{{jsxref("Promise")}} で、 {{domxref("Response")}} オブジェクトに解決します。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : {{domxref("AbortController")}} の {{domxref("AbortController.abort", "abort()")}} メソッドの呼び出しによりリクエストが中止された。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - [トピック API](/ja/docs/Web/API/Topics_API) を使用することが、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)の {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} によって特別に禁止されており、`browsingTopics` が `true` に設定されていたとき。
    - [プライベートステートトークン API](/ja/docs/Web/API/Private_State_Token_API) の操作は、仕様上、{{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} または {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} を含む[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)によって明示的に禁止されており、かつ `privateToken` オプションが指定され、その中に許可されていない `privateToken.operation` の種類が含まれている場合です。
- {{jsxref("TypeError")}}
  - : 以下の理由で発生する可能性があります。
    - リクエストされた URL が無効である。
    - リクエストされた URL に資格情報（ユーザー名とパスワード）が含まれている。
    - `options` の値として渡された {{domxref("RequestInit")}} オブジェクトに、無効な値を持つプロパティが含まれている。
    - リクエストが権限ポリシーによってブロックされている。
    - ネットワークエラーが発生している（例えば、端末がネットワークに接続していないため）。
    - `privateToken` 初期化オプションが指定されており、`privateToken.operation` の種類が `send-redemption-record` であるにもかかわらず、`privateToken.issues` 配列が空であるか設定されていないか、または指定された `issuers` のうち 1 つ以上が信頼できない HTTPS URL であるため。

## 例

[フェッチリクエストの例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request)（[フェッチリクエストのライブ版](https://mdn.github.io/dom-examples/fetch/fetch-request/)を参照）では、 {{domxref("Request")}} オブジェクトを関連するコンストラクターで作成しています。
その後で `fetch()` を呼び出して取得しています。
画像を読み取っているため、レスポンスで {{domxref("Response.blob()")}} を実行して正しい MIME タイプを指定して正しく扱われるようにし、オブジェクト URL を作成して {{htmlelement("img")}} 要素に追加して表示させています。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

window
  .fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```

[Fetch Request with init の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init)（[Fetch Request init のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)）では上記の内容に加えて、`fetch()` を呼び出すとき、初期化オブジェクト `init` を渡しています。
この場合、{{HTTPHeader("Cache-Control")}} 値を設定することで、どのようなキャッシュレスポンスであれば問題ないかを示すことができます。

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// キャッシュされたレスポンスは、それが 1 週間以上前のものでなければ問題ない
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// init をヘッダーと一緒に "options" オブジェクトとして渡す
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // …
});
```

同様に `init` オブジェクトを `Request` コンストラクターに渡しても、同じ効果が得られます。

```js
const req = new Request("flowers.jpg", options);
```

`init` の `headers` でオブジェクトリテラルを使用することもできます。

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

「[fetch の使用方法](/ja/docs/Web/API/Fetch_API/Using_Fetch)」の記事では、`fetch()` の使用例をさらに詳しく提供しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WorkerGlobalScope.fetch()")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)

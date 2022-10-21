---
title: WindowOrWorkerGlobalScope.fetch()
slug: Web/API/fetch
original_slug: Web/API/WindowOrWorkerGlobalScope/fetch
---

{{APIRef("Fetch API")}}

**`fetch()`** は {{domxref("WindowOrWorkerGlobalScope")}} ミックスインのメソッドで、ネットワークからリソースを取得するプロセスを開始し、レスポンスが利用できるようになったら満足するプロミスを返します。このプロミスはリクエストに対するレスポンスを表す {{domxref("Response")}} で解決します。プロミスは HTTP エラーでは拒否されず、ネットワークエラーでのみ拒否されます。 HTTP エラーをチェックするには、 `then` ハンドラーを使用する必要があります。

`WindowOrWorkerGlobalScope` は {{domxref("Window")}} と {{domxref("WorkerGlobalScope")}} の両方で実装されています。これはつまり `fetch()` メソッドはあなたがリソースを取得したいと思うような大部分コンテキストで使用可能ということです。

{{domxref("WindowOrWorkerGlobalScope.fetch","fetch()")}} のプロミスはネットワークエラーが発生した場合 (すなわち普通はパーミッション問題などがあったとき) のみ拒否されます。 {{domxref("WindowOrWorkerGlobalScope.fetch","fetch()")}} のプロミスは HTTP エラー (`404` など) では拒否*されません*。代わりに、 `then()` ハンドラーで {{domxref("Response.ok")}} や {{domxref("Response.status")}} プロパティをチェックする必要があります。

`fetch()` メソッドは取得するリソースのディレクティブではなく [Content Security Policy](/ja/docs/Security/CSP/CSP_policy_directives) の `connect-src` ディレクティブによって制御されます。

> **メモ:** `fetch()` メソッドの引数は {{domxref("Request.Request","Request()")}} コンストラクターと全く同じです。

## 構文

```
const fetchResponsePromise = fetch(resource [, init])
```

### 引数

- `resource`

  - : 取得したいリソースを定義します。以下の 2 つが使用出来ます。

    - 取得したいリソースの直接の URL を含む {{domxref("USVString")}}。ブラウザーによってはスキームとして `blob:` と `data:` を受け入れます。
    - {{domxref("Request")}} オブジェクト。

- `init` {{optional_inline}}

  - : リクエストに適用したいカスタム設定を含むオブジェクト。可能なオプションは以下の通りです。

    - `method`
      - : リクエストするメソッド、`GET`、`POST` など。なお、 {{httpheader("Origin")}} ヘッダーは {{HTTPMethod("HEAD")}} または {{HTTPMethod("GET")}} メソッドの読み取りリクエストでは設定されません。
        (この動作は Firefox 65 で修正されました — {{bug(1508661)}} を参照)
    - `headers`
      - : リクエストに追加したいヘッダーで、{{domxref("Headers")}} オブジェクトか {{domxref("ByteString")}} 値を持つオブジェクトリテラルで指定してください。なお、[一部の名前は禁止されています](/ja/docs/Glossary/Forbidden_header_name)。
    - `body`
      - : リクエストに追加したい本文です。これには {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}}, {{domxref("ReadableStream")}} オブジェクトなどが使用できます。メソッドが `GET` や `HEAD` の場合使用できないので注意してください。
    - `mode`
      - : リクエストで使いたいモードです。例: `cors`, `no-cors`, `same-origin`
    - `credentials`
      - : リクエストに使用したいリクエスト認証情報、 `omit`, `same-origin`, `include` です。現在のドメインの Cookie を自動で送るためにはこのオプションを指定する必要があります。 Chrome 50 から、このプロパティは{{domxref("FederatedCredential")}} インスタンスや {{domxref("PasswordCredential")}} インスタンスを受け付けるようになりました。
    - `cache`
      - : 使用したいリクエストの[キャッシュモード](/ja/docs/Web/API/Request/cache)です。
    - `redirect`
      - : 使用するリダイレクトモードです。 `follow` (自動でリダイレクトに従う)、 `error` (リダイレクトが起こった場合エラーを伴って中止する)、 `manual` (手動でリダイレクトを処理する)。Chrome の既定値は `follow` です (バージョン 47 より前の既定値は `manual` でした)。
    - `referrer`
      - : {{domxref("USVString")}} でリクエストのリファラーを指定します。これは同じオリジンの URL、 `about:client`、空文字列のいずれかを取ることができます。
    - `referrerPolicy`
      - : リクエストで使用する[リファラーポリシー](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies)を指定します。使用可能な値は、 `no-referrer`, `no-referrer-when-downgrade`, `same-origin`, `origin`, `strict-origin`, `origin-when-cross-origin`, `strict-origin-when-cross-origin`, or `unsafe-url` のいずれかです。
    - `integrity`
      - : リソースに [subresource integrity](/ja/docs/Web/Security/Subresource_Integrity) 値を含ませることが出来ます (例：`sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`)。
    - `keepalive`
      - : `keepalive` オプションはページより長生きするリクエストを許可するのに使われます。`keepalive` フラグつきの Fetch は{{domxref("Navigator.sendBeacon()")}} API の置き換えです。
    - `signal`
      - : {{domxref("AbortSignal")}} オブジェクトのインスタンスです。つまり {{domxref("AbortController")}} 経由で fetch リクエストと通信したり望む場合には中止したりできます。

### 返値

{{domxref("Promise")}} で、 {{domxref("Response")}} オブジェクトに解決します。

### 例外

- `AbortError`
  - : {{domxref("AbortController")}} メソッドまたは {{domxref("AbortController.abort", "abort()")}} メソッドの呼び出しによりリクエストが中止された。
- `TypeError`
  - : 指定された URL がユーザー認証情報を含んでいる。この情報は {{HTTPHeader("Authorization")}} ヘッダーを用いて提供するべきです。

## 例

[Fetch Request example](https://github.com/mdn/fetch-examples/tree/master/fetch-request) リポジトリ (デモ: [Fetch Request live](https://mdn.github.io/fetch-examples/fetch-request/)) では {{domxref("Request")}} オブジェクトを関連するコンストラクターを使って作成しています。その後 `fetch()` を呼んで取得しています。画像を fetch している時から適切な MIME タイプを与えるために response の {{domxref("Body.blob")}} を実行し、適切に処理されます。そして ObjectURL を作成し {{htmlelement("img")}} 要素に追加して表示させています。

```js
const myImage = document.querySelector('img');

let myRequest = new Request('flowers.jpg');

fetch(myRequest)
.then(function(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
})
.then(function(response) {
  let objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});
```

[Fetch with init then Request example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-with-init-then-request/index.html) リポジトリ (デモ: [Fetch Request init live](https://mdn.github.io/fetch-examples/fetch-with-init-then-request/)) では上記の内容に加えて、`fetch()` を呼び出すとき、初期化オブジェクト `init` を渡しています。

```js
const myImage = document.querySelector('img');

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('flowers.jpg');

fetch(myRequest, myInit).then(function(response) {
  // ...
});
```

同様に `init` オブジェクトを `Request` コンストラクターに渡しても、同じ効果が得られます。

```js
let myRequest = new Request('flowers.jpg', myInit);
```

`init` の `headers` でオブジェクトリテラルを使用することもできます。

```js
const myInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'image/jpeg'
  },
  mode: 'cors',
  cache: 'default'
};

let myRequest = new Request('flowers.jpg', myInit);
```

## 仕様書

| 仕様書                                                               | 状態                                         | 備考                                                                                                                                                  |
| -------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Fetch','#fetch-method','fetch()')}}     | {{Spec2('Fetch')}}                     | 最新の仕様では `WindowOrWorkerGlobalScope` の中で部分的に定義。                                                                                       |
| {{SpecName('Fetch','#dom-global-fetch','fetch()')}} | {{Spec2('Fetch')}}                     | 初回定義                                                                                                                                              |
| {{SpecName('Credential Management')}}                     | {{Spec2('Credential Management')}} | {{domxref("FederatedCredential")}} または {{domxref("PasswordCredential")}} のインスタンスを `init.credentials` の値として追加。 |

## ブラウザーの互換性

{{Compat("api.WindowOrWorkerGlobalScope.fetch")}}

## 関連情報

- [Fetch API](/ja/docs/Web/API/Fetch_API)
- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

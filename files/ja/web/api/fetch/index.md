---
title: fetch()
slug: Web/API/fetch
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef("Fetch API")}}

**`fetch()`** はグローバルのメソッドで、ネットワークからリソースを取得するプロセスを開始し、レスポンスが利用できるようになったら履行されるプロミスを返します。

このプロミスはそのリクエストに対するレスポンスを表す {{domxref("Response")}} で解決します。

{{domxref("fetch()")}} のプロミスはネットワークエラーが発生した場合（普通は権限の問題があったときなど）のみ拒否されます。 {{domxref("fetch()")}} のプロミスは HTTP エラー（`404` など）では拒否*されません*。代わりに、 `then()` ハンドラーで {{domxref("Response.ok")}} や {{domxref("Response.status")}} プロパティをチェックする必要があります。

`WindowOrWorkerGlobalScope` は {{domxref("Window")}} と {{domxref("WorkerGlobalScope")}} の両方で実装されています。これはつまり `fetch()` メソッドは、リソースを取得したいと思うような大部分コンテキストで使用可能ということです。

`fetch()` メソッドは取得するリソースのディレクティブではなく、[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Headers/Content-Security-Policy)の `connect-src` ディレクティブによって制御されます。

> **メモ:** `fetch()` メソッドの引数は {{domxref("Request.Request","Request()")}} コンストラクターと全く同じです。

## 構文

```js-nolint
fetch(resource)
fetch(resource, options)
```

### 引数

- `resource`

  - : 取得したいリソースを定義します。以下のどちらかが使用できます。

    - 文字列または{{Glossary("stringifier", "文字列化")}}できるその他のオブジェクト（{{domxref("URL")}} オブジェクトを含む）。取得したいリソースの直接の URL を含む文字列です。
    - {{domxref("Request")}} オブジェクト。

- `options` {{optional_inline}}

  - : リクエストに適用したいカスタム設定を含むオブジェクト。可能なオプションは以下の通りです。

    - `method`
      - : リクエストするメソッド、`GET`、`POST` など。なお、 {{httpheader("Origin")}} ヘッダーは {{HTTPMethod("HEAD")}} または {{HTTPMethod("GET")}} メソッドの読み取りリクエストでは設定されません。
        (この動作は Firefox 65 で修正されました。 [Firefox バグ 1508661](https://bugzil.la/1508661) を参照)
    - `headers`
      - : リクエストに追加したいヘッダーで、 {{domxref("Headers")}} オブジェクトまたは {{jsxref("String")}} 値を持つオブジェクトリテラルで指定してください。なお、[一部の名前は禁止されています](/ja/docs/Glossary/Forbidden_header_name)。
    - `body`
      - : リクエストに追加したい本体です。これには {{domxref("Blob")}}, {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, 文字列オブジェクトまたはリテラル、 {{domxref("ReadableStream")}} オブジェクトなどが使用できます。これは最新の利用可能状況で、まだ実験的なものです。[互換性情報](/ja/docs/Web/API/Request#ブラウザーの互換性)を調べて、あなたがこれを使用できるかどうかを確認してください。メソッドが `GET` や `HEAD` の場合は使用できないので注意してください。
    - `mode`
      - : リクエストで使用するモードです。例: `cors`, `no-cors`, `same-origin`
    - `credentials`

      - : ブラウザーが資格情報を使用して何を行うか（[クッキー](/ja/docs/Web/HTTP/Cookies)、 [HTTP 認証](/ja/docs/Web/HTTP/Authentication)項目、 TLS クライアント証明書）を制御します。以下の文字列のうちの何れかでなければなりません。

        - `omit`
          - : リクエストから資格情報を除外し、レスポンスで返される資格情報（{{HTTPHeader("Set-Cookie")}} ヘッダーなど）を無視するようブラウザーに指示します。
        - `same-origin`
          - : 同一オリジンの URL へのリクエストに資格情報を記載し、同一オリジンの URL からのレスポンスで送り返されるすべての資格情報を使用するようブラウザーに指示します。**これが既定値です。**
        - `include`

          - : ブラウザーに、同一オリジンおよびオリジン間リクエストの両方に資格情報を記載し、レスポンスで送り返された資格情報を常に使用するように指示します。

            > **メモ:** 資格情報は単純な、そして「最終的な」オリジン間リクエストに記載することができますが、 [CORS プリフライトリクエスト](/ja/docs/Web/HTTP/CORS#preflight_requests_and_credentials)には記載されるべきではありません。

    - `cache`
      - : 文字列で、このリクエストがブラウザーの [HTTP キャッシュ](/ja/docs/Web/HTTP/Caching)にどう作用するかを示します。利用可能な値は `default`, `no-store`, `reload`, `no-cache`, `force-cache`, `only-if-cached` で、 {{domxref("Request")}} オブジェクトの {{domxref("Request/cache", "cache")}} プロパティの記事に記述されています。
    - `redirect`

      - : リダイレクトレスポンスを取り扱う方法を示します。

        - `follow`: 自動的にリダイレクトに従います。他の方法が指定されていない限り、リダイレクトモードは `follow` に設定されます。
        - `error`: リダイレクトが発生した場合は、エラーで中止します。
        - `manual`: 呼び出し側は、レスポンスを別のコンテキストで処理する予定です。
          詳しくは [WHATWG fetch standard](https://fetch.spec.whatwg.org/#requests) を参照してください。

    - `referrer`
      - : 文字列で、リクエストのリファラーを指定します。これは同じオリジンの URL、 `about:client`、空文字列のいずれかを取ることができます。
    - `referrerPolicy`
      - : リクエストで使用する[リファラーポリシー](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies)を指定します。使用可能な値は、 `no-referrer`, `no-referrer-when-downgrade`, `same-origin`, `origin`, `strict-origin`, `origin-when-cross-origin`, `strict-origin-when-cross-origin`, `unsafe-url` のいずれかです。
    - `integrity`
      - : リクエストの[サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity)の値を保持します（`sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=` など）。
    - `keepalive`
      - : `keepalive` オプションは、ページの終了後のリクエストを許可するのに使用されます。`keepalive` フラグつきのフェッチは {{domxref("Navigator.sendBeacon()")}} API の置き換えです。
    - `signal`
      - : {{domxref("AbortSignal")}} オブジェクトのインスタンスです。つまり {{domxref("AbortController")}} 経由でフェッチリクエストと通信したり望む場合には中止したりできます。

### 返値

{{jsxref("Promise")}} で、 {{domxref("Response")}} オブジェクトに解決します。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : {{domxref("AbortController")}} の {{domxref("AbortController.abort", "abort()")}} メソッドの呼び出しによりリクエストが中止された。
- {{jsxref("TypeError")}}
  - : 以下の理由で発生します。

<table>
  <thead>
    <tr>
      <th scope="col">理由</th>
      <th scope="col">失敗する例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ヘッダー名が無効である。</td>
      <td>
        <pre>
// "C ontent-Type" に空白がある
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        ヘッダーの値が無効である。ヘッダーオブジェクトは正確に 2 つの要素を含まなければなならない。
      </td>
      <td>
        <pre>
const headers = [
  ['Content-Type', 'text/html', 'extra'],
  ['Accept'],
];
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        URLまたはスキームが無効であるか、フェッチが対応していないスキームを使用しているか、または特定のリクエストモードに対応していないスキームを使用している。
      </td>
      <td>
        <pre>
fetch('blob://example.com/', { mode: 'cors' });
        </pre>
      </td>
    </tr>
      <td>URL に資格情報が入っている。</td>
      <td>
        <pre>
fetch('https://user:password@example.com/');
        </pre>
      </td>
    <tr>
      <td>リファラー URL が不正である。</td>
      <td>
        <pre>
fetch('https://example.com/', { referrer: './abc\u0000df' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>モードが不正（<code>navigate</code> や <code>websocket</code>）。</td>
      <td>
        <pre>
fetch('https://example.com/', { mode: 'navigate' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        リクエストキャッシュモードが "only-if-cached" で、かつリクエストモードが "same-origin" 以外の場合。
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  cache: 'only-if-cached',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        リクエストメソッドが無効な名前トークンである場合、または禁止されたヘッダー（<code>'CONNECT'</code>, <code>'TRACE'</code>, <code>'TRACK'</code>）の 1 つである場合。
      </td>
      <td>
        <pre>
fetch('https://example.com/', { method: 'CONNECT' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        リクエストモードが "no-cors" であり、リクエストメソッドが CORS-safe に掲載されているメソッド（<code>'GET'</code>, <code>'HEAD'</code>, <code>'POST'</code>）でない場合。
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'CONNECT',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        リクエストメソッドが <code>'GET'</code> または <code>'HEAD'</code> で、本体が null でないか、 undefined でない場合。
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>fetch がネットワークエラーを発生した場合。</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 例

[Fetch Request の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request)（[Fetch Request のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-request/)を参照）では、 {{domxref("Request")}} オブジェクトを関連するコンストラクターで作成しています。その後で `fetch()` を呼び出して取得しています。画像を読み取っているため、レスポンスで {{domxref("Response.blob()")}} を実行して正しい MIME タイプを指定して正しく扱われるようにし、オブジェクト URL を作成して {{htmlelement("img")}} 要素に追加して表示させています。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
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

[Fetch with init then Request の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-with-init-then-request/index.html)（[Fetch Request init のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-with-init-then-request/)) では上記の内容に加えて、`fetch()` を呼び出すとき、初期化オブジェクト `init` を渡しています。

```js
const myImage = document.querySelector("img");

const myHeaders = new Headers();
myHeaders.append("Accept", "image/jpeg");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg");

fetch(myRequest, myInit).then((response) => {
  // …
});
```

同様に `init` オブジェクトを `Request` コンストラクターに渡しても、同じ効果が得られます。

```js
const myRequest = new Request("flowers.jpg", myInit);
```

`init` の `headers` でオブジェクトリテラルを使用することもできます。

```js
const myInit = {
  method: "GET",
  headers: {
    Accept: "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myInit);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

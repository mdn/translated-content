---
title: "Window: fetch() メソッド"
short-title: fetch()
slug: Web/API/Window/fetch
l10n:
  sourceCommit: 80d3325431bf238f06c986c2dc78944ac5227372
---

{{APIRef("Fetch API")}}

**`fetch()`** は {{domxref("Window")}} インターフェイスのメソッドで、ネットワークからリソースを取得するプロセスを開始し、レスポンスが利用できるようになったら履行されるプロミスを返します。

このプロミスは、そのリクエストに対するレスポンスを表す {{domxref("Response")}} で解決します。

`fetch()` のプロミスは、ネットワークエラーが発生した場合（普通は権限の問題があったときなど）のみ拒否されます。
`fetch()` のプロミスは、サーバーがエラーを示す HTTP ステータスコード（`404`、`504` など）を返しても拒否されません。
代わりに、 `then()` ハンドラーで {{domxref("Response.ok")}} や {{domxref("Response.status")}} プロパティをチェックする必要があります。

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
  - : [トピック API](/ja/docs/Web/API/Topics_API) を使用することが、[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)の {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} によって特別に禁止されており、そして `fetch()` リクエストが `browsingTopics: true` で行われたときに発生します。
- {{jsxref("TypeError")}}
  - : 以下の理由で発生する可能性があります。

<table>
  <thead>
    <tr>
      <th scope="col">理由</th>
      <th scope="col">失敗する例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>権限ポリシーによるブロック</td>
      <td><a href="/ja/docs/Web/API/Attribution_Reporting_API">Attribution Reporting API</a> の使用は、<a href="/ja/docs/Web/HTTP/Headers/Permissions-Policy/attribution-reporting"><code>attribution-reporting</code></a> {{httpheader("Permissions-Policy")}} で、<code>fetch()</code> リクエストが <code>attributionReporting</code> を指定して行われました。</td>
    </tr>
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
        ヘッダーの値が無効である。ヘッダーオブジェクトは正確に 2 つの要素を含まなければならない。
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
        URL またはスキームが無効であるか、フェッチが対応していないスキームを使用しているか、または特定のリクエストモードに対応していないスキームを使用している。
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
        リクエストモードが "no-cors" であり、リクエストメソッドが CORS セーフリストに掲載されているメソッド（<code>'GET'</code>, <code>'HEAD'</code>, <code>'POST'</code>）でない場合。
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

[Fetch Request with init の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init)（[Fetch Request init のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init)）では上記の内容に加えて、`fetch()` を呼び出すとき、初期化オブジェクト `init` を渡しています。
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
  // ...
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WorkerGlobalScope.fetch()")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

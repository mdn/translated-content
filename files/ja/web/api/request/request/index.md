---
title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Fetch API")}}

**`Request()`** コンストラクターは、新しい {{domxref("Request")}} オブジェクトを生成します。

## 構文

```js-nolint
new Request(input)
new Request(input, options)
```

### 引数

- `input`

  - : 取得したいリソースを定義します。次のいずれかの値を取ります。

    - 取得したいリソースの直接の URL を含む文字列。
    - 効率的にコピーを作成するための {{domxref("Request")}} オブジェクト。なお、コンストラクターが例外を発生させる可能性を下げるため、セキュリティーを保持するための以下の動作上の更新に注意してください。

      - このオブジェクトがコンストラクターの呼び出しとは別のオリジンに存在する場合、 {{domxref("Request.referrer")}} が削除されます。
      - このオブジェクトの {{domxref("Request.mode")}} が `navigate` である場合、 `mode` の値が `same-origin` に変換されます。

- `options` {{optional_inline}}

  - : リクエストに適用するカスタム設定を含むオプションオブジェクトです。設定可能なオプションは次の通りです。

    - `method`
      - : リクエストメソッド、 `GET`, `POST` など。
    - `headers`
      - : {{domxref("Headers")}} オブジェクトまたは {{jsxref("String")}} を含む、リクエストに追加するヘッダーです。
    - `body`
      - : リクエストに追加する本体で、 {{domxref("Blob")}}, {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, 文字列、 {{domxref("ReadableStream")}} オブジェクトが使用できます。
        なお、リクエストが `GET` または `HEAD` メソッドを使用している場合、本体を持てません。
    - `mode`
      - : リクエストで使用するモード。例えば、 `cors`, `no-cors`, `same-origin`, `navigate` です。既定値は `cors` です。
    - `credentials`
      - : リクエストで使用するリクエストの資格情報です。 `omit`, `same-origin`, `include` の何れかです。既定値は `same-origin` です。
    - `cache`
      - : リクエストで使用する[キャッシュモード](/ja/docs/Web/API/Request/cache)です。
    - `redirect`
      - : 使用するリダイレクトモードです。 `follow`, `error`, `manual` の何れかです。
    - `referrer`
      - : 文字列で、 `no-referrer`, `client` または URL を示します。既定値は `client` です。
    - `referrerPolicy`
      - : 特定のアクション（サブリソースのフェッチ、 先読み、ナビゲーションの実行など）の際に、リファラーヘッダーがどのように入力されるかを変更する文字列です。
    - `integrity`
      - : リクエストの[サブリソースの完全性](/ja/docs/Web/Security/Subresource_Integrity)の値です（`sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=` など）。
    - `keepalive`
      - : 論理値で、複数のリクエストや レスポンスに対して持続的な接続を行うかどうかを示します。
    - `signal`
      - : [AbortSignal](/ja/docs/Web/API/AbortSignal) オブジェクトで、リクエストの通信/中止を行うために使用することができます。

    既存の `Request` から新しい `Request` を作成する場合、新しいリクエストの _options_ 引数に設定したオプションは、元の `Request` に設定された対応するオプションを置き換えます。例えば次の通りです。

    ```js
    const oldRequest = new Request(
      "https://github.com/mdn/content/issues/12959",
      { headers: { From: "webmaster@example.org" } },
    );
    oldRequest.headers.get("From"); // "webmaster@example.org"
    const newRequest = new Request(oldRequest, {
      headers: { From: "developer@example.org" },
    });
    newRequest.headers.get("From"); // "developer@example.org"
    ```

## エラー

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">型</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        <a href="/ja/docs/Mozilla/Firefox/Releases/43">Firefox 43</a> 以降、 <code>Request()</code> は http://user:password@example.com のような認証情報を含む URL の場合に TypeError を発生させます。
      </td>
    </tr>
  </tbody>
</table>

## 例

[Fetch Request の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) ([Fetch Request のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-request/) を参照) では、コンストラクターを使用して新しいリクエストオブジェクトを生成してから、 {{domxref("fetch()")}} 呼び出しを使用して取得しています。画像を取得してから、それを適切に処理できるように MIME タイプを設定するため、レスポンスの {{domxref("Response.blob")}} を実行しています。それから、オブジェクト URL を生成して、 {{htmlelement("img")}} 要素に表示しています。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => response.blob())
  .then((response) => {
    const objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

[Fetch Request with init の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-with-init-then-request) ([Fetch Request init のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-with-init-then-request/) を参照) では、 `fetch()` を呼び出すときに初期化オブジェクトを渡している以外は同じです。

```js
const myImage = document.querySelector("img");

const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

const myOptions = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myOptions);

fetch(myRequest).then((response) => {
  // ...
});
```

同様の効果を得るために、 `fetch` 呼び出しに初期化オブジェクトを渡せることにも注目してください。例えば次の通りです。

```js
fetch(myRequest, myOptions).then((response) => {
  // ...
});
```

`myOptions` の中の `headers` としてオブジェクトリテラルを使用することもできます。

```js
const myOptions = {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myOptions);
```

リクエストのコピーを作成するために、 {{domxref("Request")}} オブジェクトを `Request()` コンストラクターに渡すこともできます（これは {{domxref("Request.clone","clone()")}} メソッドを呼び出すのと似ています）。

```js
const copy = new Request(myRequest);
```

> **メモ:** 最後の使い方は[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)内でのみ使用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

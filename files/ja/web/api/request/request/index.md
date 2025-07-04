---
title: "Request: Request() コンストラクター"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`Request()`** コンストラクターは、新しい {{domxref("Request")}} オブジェクトを生成します。

## 構文

```js-nolint
new Request(input)
new Request(input, options)
```

### 引数

- `input`
  - : 取得したいリソースを定義します。次のいずれかの値を取ります。
    - 取得したいリソースの URL の入った文字列。 URL は、ベース URL に対する相対 URL である可能性があります。ベース URL とは、ウィンドウコンテキストでは文書内の {{domxref("Node.baseURI", "baseURI")}}、ワーカーコンテキストでは {{domxref("WorkerGlobalScope.location")}} です。
    - 効率的にコピーを作成するための {{domxref("Request")}} オブジェクト。なお、コンストラクターが例外を発生させる可能性を下げるため、セキュリティーを保持するための以下の動作上の更新に注意してください。
      - このオブジェクトがコンストラクターの呼び出しとは別のオリジンに存在する場合、 {{domxref("Request.referrer")}} が削除されます。
      - このオブジェクトの {{domxref("Request.mode")}} が `navigate` である場合、 `mode` の値が `same-origin` に変換されます。

- `options` {{optional_inline}}
  - : リクエストに適用したいカスタム設定が含まれている {{domxref("RequestInit")}} オブジェクトです。

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

### 例外

- `TypeError`
  - : URL に `http://user:password@example.com` のように資格情報が入っていたり、解釈できなかったりした場合。

## 例

[Fetch Request の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) ([Fetch Request のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-request/) を参照) では、コンストラクターを使用して新しいリクエストオブジェクトを生成してから、 {{domxref("Window/fetch", "fetch()")}} 呼び出しを使用して取得しています。画像を取得してから、それを適切に処理できるように MIME タイプを設定するため、レスポンスの {{domxref("Response.blob")}} を実行しています。それから、オブジェクト URL を生成して、 {{htmlelement("img")}} 要素に表示しています。

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

[Fetch Request with init の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) ([Fetch Request init のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/) を参照) では、 `fetch()` を呼び出すときに初期化オブジェクトを渡している以外は同じです。
この場合、 {{httpheader("Cache-Control")}} の値を設定して、どのようなキャッシュレスポンスなら許容できるかを示すことができます。

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// キャッシュされたレスポンスは、 1 週間以上経過していなければ OK。
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// 初期値をヘッダーの "options" オブジェクトとして渡す
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // ...
});
```

同様の効果を得るために、 `fetch` 呼び出しに初期化オブジェクトを渡せることにも注目してください。例えば次の通りです。

```js
fetch(req, options).then((response) => {
  // ...
});
```

`options` の中の `headers` としてオブジェクトリテラルを使用することもできます。

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

リクエストのコピーを作成するために、 {{domxref("Request")}} オブジェクトを `Request()` コンストラクターに渡すこともできます（これは {{domxref("Request.clone","clone()")}} メソッドを呼び出すのと似ています）。

```js
const copy = new Request(req);
```

> [!NOTE]
> 最後の使い方は[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)内でのみ使用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)

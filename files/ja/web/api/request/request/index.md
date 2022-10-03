---
title: Request()
slug: Web/API/Request/Request
---

{{APIRef("Fetch")}}

**`Request()`** コンストラクターは、新しい {{domxref("Request")}} オブジェクトを生成します。

## 構文

```
var myRequest = new Request(input[, init]);
```

### 引数

- _input_

  - : 取得したいリソースを定義します。次のいずれかの値を取ります。

    - 取得したいリソースの直接の URL を含む {{domxref("USVString")}}。
    - 効率的にコピーを作成するための {{domxref("Request")}} オブジェクト。なお、コンストラクターが例外をスローする可能性を下げるため、セキュリティーを保持するための以下の動作上の更新に注意してください。

      - このオブジェクトがコンストラクターの呼び出しとは別のオリジンに存在する場合、 {{domxref("Request.referrer")}} が削除されます。
      - このオブジェクトの {{domxref("Request.mode")}} が `navigate` である場合、 `mode` の値が `same-origin` に変換されます。

- _init_ {{optional_inline}}

  - : リクエストに適用するカスタム設定を含むオプションオブジェクトです。設定可能なオプションは次の通りです。

    - `method`: リクエストメソッド、 `GET`, `POST` など。
    - `headers`: {{domxref("Headers")}} オブジェクトか {{domxref("ByteString")}} を含む、リクエストに追加するヘッダー。
    - `body`: リクエストに追加する本文で、 {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}}, {{domxref("ReadableStream")}} オブジェクトが使用できます。なお、リクエストが `GET` 又は `HEAD` メソッドを使用している場合、本文を持てません。
    - `mode`: リクエストで使用するモード。例えば、 `cors`, `no-cors`, `same-origin`, `navigate` です。既定値は `cors` です。 Chrome では、既定値は 47 以前は `no-cors` でしたが、 47 から `same-origin` になりました。
    - `credentials`: リクエストで使用するリクエストの資格情報です。 `omit`, `same-origin`, `include` の何れかです。既定値は `omit` です。 Chrome では、既定値は 47 以前は `same-origin` でしたが、 47 から `include` になりました。
    - `cache`: リクエストで使用する [cache モード](/ja/docs/Web/API/Request/cache)です。
    - `redirect`: 使用するリダイレクトモードです。 `follow`, `error`, `manual` の何れかです。 Chrome では、既定値は 47 以前は `follow` でしたが、 47 から `manual` になりました。
    - `referrer`: `no-referrer`, `client` 又は URL を示す {{domxref("USVString")}} です。既定値は `client` です。
    - `integrity`: リクエストの [subresource integrity](/ja/docs/Web/Security/Subresource_Integrity) の値です (例えば、 `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`)。

## エラー

| 型          | 説明                                                                                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError` | [Firefox 43](/ja/docs/Mozilla/Firefox/Releases/43) 以降、`http://user:password@example.com` のような認証情報を含む URL だった場合、Request() は TypeError をスローします。 |

## 例

[Fetch Request example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request) ([Fetch Request live](http://mdn.github.io/fetch-examples/fetch-request/) を参照) では、コンストラクターを使用して新しいリクエストオブジェクトを生成してから、 {{domxref("GlobalFetch.fetch")}} 呼び出しを使用して取得しています。画像を取得してから、それを適切に処理できるように MIME タイプを設定するため、レスポンスの {{domxref("Body.blob")}} を実行しています。それから、オブジェクト URL を生成して、 {{htmlelement("img")}} 要素に表示しています。

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(response) {
  var objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});
```

[Fetch Request with init example](https://github.com/mdn/fetch-examples/tree/master/fetch-request-with-init) ([Fetch Request init live](http://mdn.github.io/fetch-examples/fetch-request-with-init/) を参照) では、 `fetch()` を呼び出すときに init オブジェクトを渡している以外は同じです。

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg',myInit);

fetch(myRequest).then(function(response) {
  ...
});
```

同様の効果を得るために、 `fetch` 呼び出しに init オブジェクトを渡せることにも注目してください。例えば次の通りです。

```js
fetch(myRequest,myInit).then(function(response) {
  ...
});
```

`init` の中の `headers` としてオブジェクトリテラルを使用することもできます。

```js
var myInit = { method: 'GET',
               headers: {
                   'Content-Type': 'image/jpeg'
               },
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg', myInit);
```

リクエストのコピーを作成するために、 `Request()` コンストラクターに {{domxref("Request")}} オブジェクトを渡すこともできます (これは {{domxref("Request.clone","clone()")}} メソッドを呼び出すのと似ています)。

```
var copy = new Request(myRequest);
```

> **メモ:** 最後の使い方は[サービスワーカー](/ja/docs/Web/API/ServiceWorker_API)内でのみ使用できます。

## 仕様書

| 仕様書                                                           | 状態                     | 備考 |
| ---------------------------------------------------------------- | ------------------------ | ---- |
| {{SpecName('Fetch','#dom-request','Request()')}} | {{Spec2('Fetch')}} |      |

## ブラウザーの対応

{{Compat("api.Request.Request")}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

---
title: Response
slug: Web/API/Response
---

{{APIRef("Fetch API")}}

**`Response`** は [Fetch API](/ja/docs/Web/API/Fetch_API) のインターフェイスで、リクエストのレスポンスを表します。

`Response` オブジェクトは {{domxref("Response.Response()")}} コンストラクターを用いて生成することができますが、他の API 操作の結果として返される `Response` オブジェクトに出会う可能性が高いでしょう。例えば、サービスワーカーの {{domxref("Fetchevent.respondWith")}} や、単純な {{domxref("WindowOrWorkerGlobalScope.fetch()")}} などです。

## コンストラクター

- {{domxref("Response.Response","Response()")}}
  - : 新しい `Response` オブジェクトを返します。

## プロパティ

- {{domxref("Response.body")}} {{readonlyInline}}
  - : 本文のコンテンツの {{domxref("ReadableStream")}} です。
- {{domxref("Response.bodyUsed")}} {{readonlyInline}}
  - : 本文がレスポンスで使用されたかどうかを定義する論理値が格納されます。
- {{domxref("Response.headers")}} {{readonlyinline}}
  - : レスポンスに関連した {{domxref("Headers")}} オブジェクトが入ります。
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : レスポンスが成功 (`200`–`299` の範囲のステータス) したか否かを通知する論理値が入ります。
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : レスポンスがリダイレクトの結果である (つまり、その URL リストには複数のエントリーがある) かどうかを示します。
- {{domxref("Response.status")}} {{readonlyinline}}
  - : このレスポンスのステータスコードを返します (成功ならば `200` になります)。
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : ステータスコードに対応したステータスメッセージが入ります (たとえば `200` ならば `OK`)。
- {{domxref("Response.trailers")}}
  - : {{jsxref("Promise")}} であり、 {{domxref("Headers")}} オブジェクトを返します。これは {{domxref("Response.headers")}} にある HTTP の {{HTTPHeader("Trailer")}} ヘッダーの値です。
- {{domxref("Response.type")}} {{readonlyinline}}
  - : レスポンスの種類です。 (例えば `basic`, `cors`)
- {{domxref("Response.url")}} {{readonlyinline}}
  - : レスポンスの URL を返します。

## メソッド

- {{domxref("Response.arrayBuffer()")}}
  - : レスポンスの本文を表す {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。
- {{domxref("Response.blob()")}}
  - : レスポンスの本文を表す {{domxref("Blob")}} で解決するプロミスを返します。
- {{domxref("Response.clone()")}}
  - : `Response` オブジェクトの複製を生成します。
- {{domxref("Response.error()")}}
  - : ネットワークエラーに関連した新しい `Response` オブジェクトを返します。
- {{domxref("Response.formData()")}}
  - : レスポンスの本文を表す {{domxref("FormData")}} で解決するプロミスを返します。
- {{domxref("Response.json()")}}
  - : レスポンスの本文のテキストを {{jsxref("JSON")}} として解釈した結果で解決するプロミスを返します。
- {{domxref("Response.redirect()")}}
  - : 異なる URL で新しい response を生成します。
- {{domxref("Response.text()")}}
  - : レスポンスの本文のテキスト表現で解決するプロミスを返します。

## 例

### 画像のフェッチ

[basic fetch example](https://github.com/mdn/fetch-examples/tree/master/basic-fetch) ([run example live](https://mdn.github.io/fetch-examples/basic-fetch/)) では image を取得するために単純な `fetch()` を使用し、それを {{htmlelement("img")}} タグの中に入れて表示しています。`fetch()` はプロミスを返し、これはこのリソースフェッチ捜査に関連付けられた `Response` オブジェクトで解決します。

画像をリクエストするとき、レスポンスに正しい MIME タイプを設定するために、{{domxref("Response.blob")}} を実行する必要があることに注意してください。

```js
const image = document.querySelector('.my-image');
fetch('flowers.jpg')
.then(response => response.blob())
.then(blob => {
  const objectURL = URL.createObjectURL(blob);
  image.src = objectURL;
});
```

{{domxref("Response.Response()")}} コンストラクターを使用して、独自の `Response` オブジェクトを生成することもできます。

```js
const response = new Response();
```

### Ajax 呼び出し

ここで JSON 文字列を生成する PHP のプログラムファイルを呼び出し、結果として JSON の値を表示します。簡単なエラーハンドリングも含んでいます。

```js
// Function to do an Ajax call
const doAjax = async () => {
  const response = await fetch('Ajax.php'); // Generate the Response object
  if (response.ok) {
    const jsonValue = await response.json(); // Get JSON value from the response body
    return Promise.resolve(jsonValue);
  } else {
    return Promise.reject('*** PHP file not found');
  }
}

// Call the function and output value or error message to console
doAjax().then(console.log).catch(console.log);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

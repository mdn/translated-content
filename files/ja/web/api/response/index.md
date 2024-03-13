---
title: Response
slug: Web/API/Response
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Fetch API")}}

**`Response`** は[フェッチ API](/ja/docs/Web/API/Fetch_API) のインターフェイスで、リクエストのレスポンスを表します。

`Response` オブジェクトは {{domxref("Response.Response", "Response()")}} コンストラクターを用いて生成することができますが、他の API 操作の結果として返される `Response` オブジェクトに出会う可能性が高いでしょう。例えば、サービスワーカーの {{domxref("FetchEvent.respondWith")}} や、単純な {{domxref("fetch()")}} などです。

## コンストラクター

- {{domxref("Response.Response","Response()")}}
  - : 新しい `Response` オブジェクトを返します。

## プロパティ

- {{domxref("Response.body")}} {{ReadOnlyInline}}
  - : 本文のコンテンツの {{domxref("ReadableStream")}} です。
- {{domxref("Response.bodyUsed")}} {{ReadOnlyInline}}
  - : 本文がレスポンスで使用されたかどうかを定義する論理値が格納されます。
- {{domxref("Response.headers")}} {{ReadOnlyInline}}
  - : レスポンスに関連した {{domxref("Headers")}} オブジェクトが入ります。
- {{domxref("Response.ok")}} {{ReadOnlyInline}}
  - : レスポンスが成功 (`200`–`299` の範囲のステータス) したか否かを通知する論理値が入ります。
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : レスポンスがリダイレクトの結果である (つまり、その URL リストには複数のエントリーがある) かどうかを示します。
- {{domxref("Response.status")}} {{ReadOnlyInline}}
  - : このレスポンスのステータスコードを返します (成功ならば `200` になります)。
- {{domxref("Response.statusText")}} {{ReadOnlyInline}}
  - : ステータスコードに対応したステータスメッセージが入ります (たとえば `200` ならば `OK`)。
- {{domxref("Response.trailers")}}
  - : {{jsxref("Promise")}} であり、 {{domxref("Headers")}} オブジェクトを返します。これは {{domxref("Response.headers")}} にある HTTP の {{HTTPHeader("Trailer")}} ヘッダーの値です。
- {{domxref("Response.type")}} {{ReadOnlyInline}}
  - : レスポンスの種類です。 (例えば `basic`, `cors`)
- {{domxref("Response.url")}} {{ReadOnlyInline}}
  - : レスポンスの URL を返します。

## メソッド

- {{domxref("Response.arrayBuffer()")}}
  - : レスポンスの本体を表す {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。
- {{domxref("Response.blob()")}}
  - : レスポンスの本体を表す {{domxref("Blob")}} で解決するプロミスを返します。
- {{domxref("Response.clone()")}}
  - : `Response` オブジェクトの複製を生成します。
- {{domxref("Response.error()")}}
  - : ネットワークエラーに関連した新しい `Response` オブジェクトを返します。
- {{domxref("Response.formData()")}}
  - : レスポンスの本体を表す {{domxref("FormData")}} で解決するプロミスを返します。
- {{domxref("Response.json()")}}
  - : レスポンスの本体のテキストを {{jsxref("JSON")}} として解釈した結果で解決するプロミスを返します。
- {{domxref("Response.redirect()")}}
  - : 異なる URL で新しいレスポンスを生成します。
- {{domxref("Response.text()")}}
  - : レスポンスの本体のテキスト表現で解決するプロミスを返します。

## 例

### 画像のフェッチ

[basic fetch example](https://github.com/mdn/dom-examples/tree/main/basic-fetch) ([例をライブで実行](https://mdn.github.io/dom-examples/basic-fetch/)) では画像を取得するために単純な `fetch()` を使用し、それを {{htmlelement("img")}} タグの中に入れて表示しています。`fetch()` を呼び出すとプロミスを返します。これは、このリソースフェッチ操作に関連付けられた `Response` オブジェクトで解決します。

画像をリクエストされているので、レスポンスに正しい MIME タイプを与えるために {{domxref("Response.blob")}} を実行する必要があることにお気づきでしょう。

```js
const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then((response) => response.blob())
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  });
```

{{domxref("Response.Response", "Response()")}} コンストラクターを使用して、独自の `Response` オブジェクトを生成することもできます。

```js
const response = new Response();
```

### Ajax 呼び出し

ここで JSON 文字列を生成する PHP のプログラムファイルを呼び出し、結果として JSON の値を表示します。簡単なエラー処理も含んでいます。

```js
// Ajax 呼び出しを行う関数
const doAjax = async () => {
  const response = await fetch("Ajax.php"); // Response オブジェクトを生成する
  if (response.ok) {
    const jsonValue = await response.json(); // レスポンスの本体から JSON の値を取得
    return Promise.resolve(jsonValue);
  } else {
    return Promise.reject("*** PHP file not found");
  }
};

// 関数を呼び出され、値やエラーメッセージをコンソールに出力する
doAjax().then(console.log).catch(console.log);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

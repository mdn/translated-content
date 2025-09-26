---
title: Response
slug: Web/API/Response
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

**`Response`** は[フェッチ API](/ja/docs/Web/API/Fetch_API) のインターフェイスで、リクエストのレスポンスを表します。

`Response` オブジェクトは {{domxref("Response.Response", "Response()")}} コンストラクターを用いて生成することができますが、他の API 操作の結果として返される `Response` オブジェクトに出会う可能性が高いでしょう。例えば、サービスワーカーの {{domxref("FetchEvent.respondWith")}} や、単純な {{domxref("Window/fetch", "fetch()")}} などです。

## コンストラクター

- {{domxref("Response.Response","Response()")}}
  - : 新しい `Response` オブジェクトを返します。

## インスタンスプロパティ

- {{domxref("Response.body")}} {{ReadOnlyInline}}
  - : 本文のコンテンツの {{domxref("ReadableStream")}} です。
- {{domxref("Response.bodyUsed")}} {{ReadOnlyInline}}
  - : 本文がレスポンスで使用されたかどうかを定義する論理値が格納されます。
- {{domxref("Response.headers")}} {{ReadOnlyInline}}
  - : レスポンスに関連した {{domxref("Headers")}} オブジェクトが入ります。
- {{domxref("Response.ok")}} {{ReadOnlyInline}}
  - : レスポンスが成功（`200` – `299` の範囲のステータス）したか否かを通知する論理値が入ります。
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : レスポンスがリダイレクトの結果である (つまり、その URL リストには複数のエントリーがある) かどうかを示します。
- {{domxref("Response.status")}} {{ReadOnlyInline}}
  - : このレスポンスのステータスコードを返します (成功ならば `200` になります)。
- {{domxref("Response.statusText")}} {{ReadOnlyInline}}
  - : ステータスコードに対応したステータスメッセージが入ります (たとえば `200` ならば `OK`)。
- {{domxref("Response.type")}} {{ReadOnlyInline}}
  - : レスポンスの種類です。 (例えば `basic`, `cors`)
- {{domxref("Response.url")}} {{ReadOnlyInline}}
  - : レスポンスの URL を返します。

## 静的メソッド

- {{domxref("Response.error_static","Response.error()")}}
  - : ネットワークエラーに関連付けられた新しい `Response` オブジェクトを返します。
- {{domxref("Response.redirect_static", "Response.redirect()")}}
  - : 別の URL で新しいレスポンスを返します。
- {{domxref("Response.json_static", "Response.json()")}}
  - : 指定された JSON エンコードデータを返すための新しい `Response` オブジェクトを返します。

## インスタンスメソッド

- {{domxref("Response.arrayBuffer()")}}
  - : レスポンスの本体を表す {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。
- {{domxref("Response.blob()")}}
  - : レスポンスの本体を表す {{domxref("Blob")}} で解決するプロミスを返します。
- {{domxref("Response.bytes()")}}
  - : レスポンス本体の {{jsxref("Uint8Array")}} 表現を解決するプロミスを返します。
- {{domxref("Response.clone()")}}
  - : `Response` オブジェクトの複製を生成します。
- {{domxref("Response.formData()")}}
  - : レスポンスの本体を表す {{domxref("FormData")}} で解決するプロミスを返します。
- {{domxref("Response.json()")}}
  - : レスポンスの本体のテキストを {{jsxref("JSON")}} として解釈した結果で解決するプロミスを返します。
- {{domxref("Response.text()")}}
  - : レスポンスの本体のテキスト表現で解決するプロミスを返します。

## 例

### 画像の取得

[basic fetch example](https://github.com/mdn/dom-examples/tree/main/basic-fetch) ([例をライブで実行](https://mdn.github.io/dom-examples/basic-fetch/)) では画像を取得するために単純な `fetch()` を使用し、それを {{htmlelement("img")}} タグの中に入れて表示しています。`fetch()` を呼び出すとプロミスを返します。これは、このリソース取得操作に関連付けられた `Response` オブジェクトで解決します。

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

### PHP の呼び出し

ここで JSON 文字列を生成する PHP のプログラムファイルを呼び出し、結果として JSON の値を表示します。

```js
// PHP を使用した JSON を呼び出す関数
const getJSON = async () => {
  // Response オブジェクトを生成
  const response = await fetch("getJSON.php");
  if (response.ok) {
    // レスポンスの本体から JSON の値を取得
    return response.json();
  }
  throw new Error("*** PHP ファイルが見つかりません");
};

// 関数を呼び出され、値やエラーメッセージをコンソールに出力する
getJSON()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)

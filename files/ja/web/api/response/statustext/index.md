---
title: Response.statusText
slug: Web/API/Response/statusText
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`statusText`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Response.status")}} にある HTTP ステータスコードに対応するステータスメッセージを保持します。

例えば、ステータスコード `200` に対しては `OK`、 `100` に対しては `Continue`、 `404` に対しては `Not Found` です。

## 値

文字列で、レスポンスに関連する HTTP ステータスメッセージを保持します。
既定値は "" です。

コードと関連するステータスメッセージの一覧は、 [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)を参照してください。
なお、 HTTP/2 はステータスメッセージに[対応していません](https://fetch.spec.whatwg.org/#concept-response-status-message)。

## 例

[Fetch Response の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) （[Fetch Response のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-response/) を参照）では、新しい {{domxref("Request")}} オブジェクトを、 {{domxref("Request.Request","Request()")}} コンストラクターを使用して作成し、 JPG のパスを渡します。次に {{domxref("fetch()")}} を使用してこのリクエストをフェッチし、 {{domxref("Response.blob")}} を使用してリクエストから blob を抽出し、 {{domxref("URL.createObjectURL")}} を使用してオブジェクト URL を作成し、これを {{htmlelement("img")}} に表示します。

なお、 `fetch()` ブロックの先頭で、レスポンスの `statusText` 値をコンソールにログ出力していることに注意してください。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.statusText); // レスポンスが成功した場合は "OK" を返す
  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

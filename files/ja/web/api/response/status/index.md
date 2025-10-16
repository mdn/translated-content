---
title: "Response: status プロパティ"
short-title: status
slug: Web/API/Response/status
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

**`status`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、このレスポンスの [HTTP ステータスコード](/ja/docs/Web/HTTP/Reference/Status)を保持します。

例えば、 `200` は成功を、 `404` はリソースが見つからなかったことを表します。

## 値

符号なし整数です。
これは [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)のうちの一つです。

## 例

[Fetch Response の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) （[Fetch Response のライブ版](https://mdn.github.io/dom-examples/fetch/fetch-response/) を参照）では、新しい {{domxref("Request")}} オブジェクトを、 {{domxref("Request.Request","Request()")}} コンストラクターを使用して作成し、 JPG のパスを渡します。次に {{domxref("Window/fetch", "fetch()")}} を使用してこのリクエストをフェッチし、 {{domxref("Response.blob")}} を使用してリクエストから blob を抽出し、 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} を使用してオブジェクト URL を作成し、これを {{htmlelement("img")}} に表示します。

なお、 `fetch()` ブロックの先頭で、レスポンスの `status` 値をコンソールにログ出力していることに注意してください。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.status =", response.status); // response.status = 200
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)

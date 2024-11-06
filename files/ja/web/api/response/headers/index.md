---
title: "Response: headers プロパティ"
short-title: headers
slug: Web/API/Response/headers
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

**`headers`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、このレスポンスに関連付けられた {{domxref("Headers")}} オブジェクトが含まれています。

### 値

{{domxref("Headers")}} オブジェクト

## 例

[Fetch Response の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) ( [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/) を参照) では、新しい {{domxref("Request")}} オブジェクトを、 {{domxref("Request.Request","Request()")}} コンストラクターを使用して作成し、 JPG のパスを渡します。次に {{domxref("Window/fetch", "fetch()")}} を使用してこのリクエストをフェッチし、 {{domxref("Response.blob")}} を使用してリクエストから blob を抽出し、 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} を使用してオブジェクト URL を作成し、これを {{htmlelement("img")}} に表示します。

`fetch()` ブロックの上部でレスポンス `headers` の値をコンソールに記録している事に注意して下さい。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("レスポンスヘッダー =", response.headers);
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
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

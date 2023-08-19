---
title: Response.ok
slug: Web/API/Response/ok
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

**`ok`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、このレスポンスが（ステータスが 200-299 で）成功したかどうかを表す論理値です。

## 値

論理値です。

## 例

[Fetch Response の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) （[Fetch Response のライブ](https://mdn.github.io/dom-examples/fetch/fetch-response/) を参照）では、新しい {{domxref("Request")}} オブジェクトを、 {{domxref("Request.Request","Request()")}} コンストラクターを使用して作成し、 JPG のパスを渡します。次に {{domxref("fetch()")}} を使用してこのリクエストをフェッチし、 {{domxref("Response.blob")}} を使用してリクエストから blob を抽出し、 {{domxref("URL.createObjectURL")}} を使用してオブジェクト URL を作成し、これを {{htmlelement("img")}} に表示します。

> **メモ:** `fetch()` ブロックの先頭で、レスポンスの `ok` 値をコンソールにログ出力します。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.ok); // レスポンスが正常に返された場合に true を返します。
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

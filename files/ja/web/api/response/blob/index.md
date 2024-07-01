---
title: Response.blob()
slug: Web/API/Response/blob
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Fetch")}}

**`blob()`** は {{domxref("Response")}} インターフェイスのメソッドで、 {{domxref("Response")}} ストリームを取得して完全に読み込みます。 {{domxref("Blob")}} で解決するプロミスを返します。

## 構文

```js-nolint
blob()
```

### 引数

なし。

> **メモ:** {{domxref("Response")}} の {{domxref("Response.type")}} が `"opaque"` の場合、結果の {{domxref("Blob")}} の {{domxref("Blob.size")}} は `0`、{{domxref("Blob.type")}} は空文字列 `""` になり、{{domxref("URL.createObjectURL")}} のようなメソッドでは*役に立たなく*なります。

### 返値

{{domxref("Blob")}} で解決するプロミスです。

## 例

[fetch request の例](https://github.com/mdn/fetch-examples/tree/main/fetch-request) ([fetch request をライブで](https://mdn.github.io/fetch-examples/fetch-request/)実行) では、{{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して JPG を読み取ります。読み取りが成功したら、`blob()` を使用してレスポンスから {{domxref("Blob")}} を読み取り、それを {{domxref("URL.createObjectURL")}} を使用してオブジェクト URL に入れ、その URL を {{htmlelement("img")}} 要素のソースとして設定して画像を表示します。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => response.blob())
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

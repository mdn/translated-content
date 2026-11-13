---
title: "Response: blob() メソッド"
short-title: blob()
slug: Web/API/Response/blob
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

**`blob()`** は {{domxref("Response")}} インターフェイスのメソッドで、 {{domxref("Response")}} ストリームを取得して完全に読み込みます。 {{domxref("Blob")}} で解決するプロミスを返します。

## 構文

```js-nolint
blob()
```

### 引数

なし。

> [!NOTE]
> {{domxref("Response")}} の {{domxref("Response.type")}} が `"opaque"` の場合、結果の {{domxref("Blob")}} の {{domxref("Blob.size")}} は `0`、{{domxref("Blob.type")}} は空文字列 `""` になり、{{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} のようなメソッドでは*役に立たなく*なります。

### 返値

{{domxref("Blob")}} で解決するプロミスです。

### 例外

- {{domxref("DOMException")}} `AbortError`
  - : リクエストが[中止された](/ja/docs/Web/API/Fetch_API/Using_Fetch#リクエストの中止)場合。
- {{jsxref("TypeError")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheader("Content-Encoding")}} ヘッダーが不正な場合など）。

## 例

[fetch request の例](https://github.com/mdn/dom-examples/tree/main/fetch-request) ([fetch request をライブで](https://mdn.github.io/dom-examples/fetch-request/)実行) では、{{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して JPG を読み取ります。読み取りが成功したら、`blob()` を使用してレスポンスから {{domxref("Blob")}} を読み取り、それを {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} を使用してオブジェクト URL に入れ、その URL を {{htmlelement("img")}} 要素のソースとして設定して画像を表示します。

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
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)

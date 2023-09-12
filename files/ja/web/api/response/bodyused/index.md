---
title: Response.bodyUsed
slug: Web/API/Response/bodyUsed
l10n:
  sourceCommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{APIRef("Fetch")}}

**`bodyUsed`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、本体が読み取り済みであるかどうかを示す論理値です。

## 値

論理値です。

## 例

[フェッチリクエストの例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request)（[フェッチリクエストをライブで](https://mdn.github.io/dom-examples/fetch/fetch-request/)実行）では、 {{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して JPG を読み取ります。読み取りが成功したら、`blob()` を使用してレスポンスから {{domxref("Blob")}} を読み取り、{{domxref("URL.createObjectURL")}} を使用してオブジェクト URL に格納し、その URL を {{htmlelement("img")}} 要素のソースとして設定して画像を表示します。

`response.bodyUsed` を `response.blob()` の呼び出し前後にコンソールに記録していることに注目してください。 その時点で本文が読み取られたかによるため、これは呼び出し前では `false` を返し、その後では `true` を返します。

### HTML コンテンツ

```html
<img
  class="my-image"
  src="https://wikipedia.org/static/images/project-logos/frwiki-1.5x.png" />
```

### JS コンテンツ

```js
const myImage = document.querySelector(".my-image");
fetch("https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg")
  .then((response) => {
    console.log(response.bodyUsed);
    const res = response.blob();
    console.log(response.bodyUsed);
    return res;
  })
  .then((response) => {
    const objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

### 結果

{{ EmbedLiveSample('Examples', '100%', '250px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

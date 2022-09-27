---
title: Response.bodyUsed
slug: Web/API/Response/bodyUsed
original_slug: Web/API/Body/bodyUsed
---

{{APIRef("Fetch")}}

**`bodyUsed`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、本文が読取済みであるかどうかを示す論理値です。

## 構文

```js
response.bodyUsed;
```

### 値

論理値。

## 例

[Fetch リクエストの例](https://github.com/mdn/fetch-examples/tree/master/fetch-request)（[Fetch リクエストをライブで](https://mdn.github.io/fetch-examples/fetch-request/)実行）では、 {{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して JPG を読み取ります。読み取りが成功したら、`blob()` を使用してレスポンスから {{domxref("Blob")}} を読み取り、{{domxref("URL.createObjectURL")}} を使用してオブジェクト URL に格納し、その URL を {{htmlelement("img")}} 要素のソースとして設定して画像を表示します。

`response.bodyUsed` を `response.blob()` の呼び出し前後にコンソールに記録していることに注目してください。 その時点で本文が読み取られたかによるため、これは呼び出し前では `false` を返し、その後では `true` を返します。

### HTML コンテンツ

```html
<img class="my-image" src="https://wikipedia.org/static/images/project-logos/frwiki-1.5x.png">
```

### JS コンテンツ

```js
var myImage = document.querySelector('.my-image');
fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg').then(function(response) {
    console.log(response.bodyUsed);
    var res = response.blob();
    console.log(response.bodyUsed);
    return res;
}).then(function(response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
});
```

{{ EmbedLiveSample('例', '100%', '250px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

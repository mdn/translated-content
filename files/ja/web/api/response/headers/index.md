---
title: Response.headers
slug: Web/API/Response/headers
---

{{APIRef("Fetch")}}

{{domxref("Response")}} インターフェイスの **`headers`** 読み取り専用プロパティはレスポンスに関連付けられた {{domxref("Headers")}} オブジェクトが含まれています。

## 構文

```
var myHeaders = response.headers;
```

### 値

{{domxref("Headers")}} オブジェクト

## 例

[Fetch Response の例](https://github.com/mdn/fetch-examples/tree/master/fetch-response) ( [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/) を参照) では、 {{domxref("Request.Request","Request()")}} コンストラクタを使用して新しい {{domxref("Request")}} オブジェクトを作成し、 JPG のパスを渡します。次に {{domxref("GlobalFetch.fetch","fetch()")}} を使用してこのリクエストをフェッチし、 {{domxref("Body.blob")}} を使用してリクエストから blob を抽出し、 {{domxref("URL.createObjectURL")}} を使用してオブジェクト URL を作成し、これを {{htmlelement("img")}} に表示します。

`fetch()` ブロックの上部でレスポンス `headers` の値をコンソールに記録している事に注意して下さい。

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.headers); // returns a Headers{} object
  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});
```

## 仕様

| 仕様                                                                     | ステータス               | 備考     |
| ------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName('Fetch','#dom-response-headers','headers')}} | {{Spec2('Fetch')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Response.headers")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

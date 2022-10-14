---
title: Request.url
slug: Web/API/Request/url
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

{{domxref("Request")}} インターフェースの **`url`** 読み取り専用プロパティは、 リクエストの URL を含みます。

## 構文

```
var myURL = request.url;
```

### 値

リクエストの url を示す {{domxref("USVString")}}。

## 例

次のスニペットでは、{{domxref("Request.Request()")}} コンストラクタを使って（スクリプトと同じディレクトリにある画像ファイルのために）新しいリクエストを生成してから、変数にリクエストの url を保存しています：

```js
var myRequest = new Request('flowers.jpg');
var myURL = myRequest.url; // "http://mdn.github.io/fetch-examples/fetch-request/flowers.jpg"
```

## 仕様

| 仕様                                                         | 状態                     | コメント           |
| ------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('Fetch','#dom-request-url','url')}} | {{Spec2('Fetch')}} | Initial definition |

## ブラウザ実装状況

{{Compat("api.Request.url")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

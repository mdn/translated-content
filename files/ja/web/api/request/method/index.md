---
title: Request.method
slug: Web/API/Request/method
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

{{domxref("Request")}} インターフェースの **`method`** 読み取り専用プロパティには、リクエストメソッド（`GET`、`POST` など）を含みます。

## 構文

```
var myMode = request.mode;
```

### 値

リクエストメソッドを示す {{domxref("ByteString")}}。

## 例

次のスニペットは、{{domxref("Request.Request()")}} コンストラクタを使って（スクリプトと同じディレクトリにある画像ファイルのために）新しいリクエストを生成してから、リクエストメソッドを変数に保存しています：

```js
var myRequest = new Request('flowers.jpg');
var myMethod = myRequest.method; // GET
```

## 仕様

| 仕様                                                                 | 状態                     | コメント           |
| -------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('Fetch','#dom-request-method','method')}} | {{Spec2('Fetch')}} | Initial definition |

## ブラウザ実装状況

{{Compat("api.Request.method")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

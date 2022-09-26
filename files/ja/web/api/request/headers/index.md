---
title: Request.headers
slug: Web/API/Request/headers
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

{{domxref("Request")}} のインターフェースの **`headers`** 読み取り専用プロパティは、リクエストに関連する {{domxref("Headers")}} オブジェクトを含みます。

## 構文

```
var myHeaders = request.headers;
```

### 値

{{domxref("Headers")}} オブジェクト。

## 例

次のスニペットは、{{domxref("Request.Request()")}} コンストラクタを使って（スクリプトと同じディレクトリにある画像ファイルのために）新しいリクエストを生成してから、リクエストの headers を変数に保存しています：

```js
var myRequest = new Request('flowers.jpg');
var myHeaders = myRequest.headers; // Headers {}
```

{{domxref("Headers")}} オブジェクトにヘッダを追加するためには、{{domxref("Headers.append")}} を使用します。初期化オプションとしてのヘッダを渡し、 2 番目の初期化パラメータと一緒に新しい request を生成ます：

```js
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

var myRequest = new Request('flowers.jpg',myInit);

myContentType = myRequest.headers.get('Content-Type'); // 'image/jpeg' を返す。
```

## 仕様

| 仕様                                                                     | 状態                     | コメント           |
| ------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('Fetch','#dom-request-headers','headers')}} | {{Spec2('Fetch')}} | Initial definition |

## ブラウザ実装状況

{{Compat("api.Request.headers")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

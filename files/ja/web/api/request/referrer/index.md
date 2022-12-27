---
title: Request.referrer
slug: Web/API/Request/referrer
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

{{domxref("Request")}} インターフェースの **`referrer`** 読み取り専用プロパティには、ユーザーエージェントによってリクエストのリファラが設定されます（たとえば、`about:client` や `no-referrer`、URL）。

> **メモ:** リファラの値が no-referrer だった場合、空文字が返されます。

## 構文

```
var myReferrer = request.referrer;
```

### 値

リクエストのリファラを表す {{domxref("DOMString")}}。

## 例

次のスニペットでは、{{domxref("Request.Request()")}} コンストラクタを使って（スクリプトと同じディレクトリにある画像ファイルのために）新しいリクエストを生成してから、変数にリクエストのリファラを変数に保存しています。

```js
var myRequest = new Request('flowers.jpg');
var myReferrer = myRequest.referrer; // 既定で "about:client" を返す。
```

## 仕様

| 仕様                                                                         | 状態                     | コメント           |
| ---------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('Fetch','#dom-request-referrer','referrer')}} | {{Spec2('Fetch')}} | Initial definition |

## ブラウザ実装状況

{{Compat("api.Request.referrer")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

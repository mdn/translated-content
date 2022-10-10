---
title: Request.redirect
slug: Web/API/Request/redirect
---

{{APIRef("Fetch")}}

{{domxref("Request")}} インターフェイスの **`redirect`** 読み取り専用プロパティには、リダイレクトの処理方法モードが含まれています。

## 構文

```js
var myRedirect = request.redirect;
```

### 値

`RequestRedirect` 列挙値、次の文字列のいずれかになります:

- `follow`
- `error`
- `manual`

request の作成時に指定されない場合、デフォルト値の `follow` になります。

## 例

次のスニペットでは、 {{domxref("Request.Request()")}} コンストラクタを使用して新しい request を作成し ( script と同じディレクトリにある画像ファイルの場合)、 request の `redirect` 値を変数に保存します:

```js
var myRequest = new Request('flowers.jpg');
var myCred = myRequest.redirect;
```

## 仕様

| 仕様                                                                         | 状態                     | コメント   |
| ---------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('Fetch','#dom-request-redirect','redirect')}} | {{Spec2('Fetch')}} | 初回定義。 |

## ブラウザーの実装状況

{{Compat("api.Request.redirect")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

---
title: Request.integrity
slug: Web/API/Request/integrity
---

{{APIRef("Fetch")}}

{{domxref("Request")}} インターフェイスの **`integrity`** 読み取り専用プロパティには、リクエストの [サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity) 値が含まれています。

## 構文

```js
var myIntegrity = request.integrity;
```

### 値

リクエストの [サブリソース完全性](/ja/docs/Web/Security/Subresource_Integrity) 値 (例, `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`)。

完全性が指定されていない場合、 `''` を返します。

## 例

次のスニペットでは {{domxref("Request.Request()")}} コンストラクタを使用して新しい request を作成し ( script と同じディレクトリにある画像ファイルの場合)、 request の `integrity` 値を変数に保存します:

```js
var myRequest = new Request('flowers.jpg');
var myIntegrity = myRequest.integrity;
```

## 仕様

| 仕様                                                                         | 状態                     | コメント   |
| ---------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('Fetch','#dom-request-integrity','integrity')}} | {{Spec2('Fetch')}} | 初回定義。 |

## ブラウザーの実装状況

{{Compat("api.Request.integrity")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

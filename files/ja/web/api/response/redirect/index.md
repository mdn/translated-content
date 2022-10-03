---
title: Response.redirect()
slug: Web/API/Response/redirect
---

{{APIRef("Fetch")}}

{{domxref("Response")}} インターフェイスの **`redirect()`** メソッドは、指定された URL へのレダイレクトをもたらす `Response` を返します。

> **メモ:** これは主に [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API) に関連しています。制御 service worker は、ページのリクエストを中断し、必要に応じてリダイレクトできます。もし Service worker が上流に送信を行うと、実際に本当のリダイレクトが発生します。

## 構文

```
var response = Response.redirect(url, status);
```

### 引数

- `url`
  - : 新しい reponse の発信元 URL。
- `status` {{optional_inline}}
  - : response のオプションのステータスコード (例 `302` )

### 返り値

{{domxref("Response")}} オブジェクト

### 例外

| 例外         | 説明                                                         |
| ------------ | ------------------------------------------------------------ |
| `RangeError` | 指定されたステータスはリダイレクトステータスではありません。 |
| `TypeError`  | 指定された URL は無効です。                                  |

## 例

```js
responseObj.redirect('https://www.example.com', 302);
```

## 仕様

| 仕様                                                                             | 状態                     | コメント |
| -------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('Fetch','#dom-response-redirect','redirect()')}} | {{Spec2('Fetch')}} |          |

## ブラウザー実装状況

{{Compat("api.Response.redirect")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)

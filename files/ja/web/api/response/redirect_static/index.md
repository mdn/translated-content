---
title: Response.redirect()
slug: Web/API/Response/redirect_static
---

{{APIRef("Fetch")}}

**`redirect()`** は {{domxref("Response")}} インターフェイスのメソッドで、指定された URL へのリダイレクトをもたらす `Response` を返します。

> **メモ:** これは主に[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) に関連しています。
> 制御するサービスワーカーは、ページのリクエストに介入し、希望通りにリダイレクトすることができます。
> もしサービスワーカーが上流に送信を行うと、実際に本当のリダイレクトが発生します。

## 構文

```js-nolint
redirect(url)
redirect(url, status)
```

### 引数

- `url`
  - : 新しいレスポンスの発信元 URL。
- `status` {{optional_inline}}
  - : response のオプションのステータスコード (例 `302`)

### 返値

{{domxref("Response")}} オブジェクト。

### 例外

- {{jsxref("RangeError")}}
  - : 指定されたステータスがリダイレクトステータスではない場合。
- {{jsxref("TypeError")}}
  - : 指定された URL が不正な場合。

## 例

```js
Response.redirect("https://www.example.com", 302);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)

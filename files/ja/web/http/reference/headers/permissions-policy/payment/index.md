---
title: "Permissions-Policy: payment"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/payment
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーフィールドにおける `payment` ディレクティブは、現在の文書が[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) を使用することを許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{DOMxRef("PaymentRequest.PaymentRequest", "PaymentRequest()")}} コンストラクターを呼び出すと {{domxref("DOMException")}} の `SecurityError` 型が発生します。

## 構文

```http
Permissions-Policy: payment=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`payment` 機能の既定の許可リストの値は `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダーフィールド
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

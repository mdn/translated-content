---
title: "Feature-Policy: payment"
slug: Web/HTTP/Headers/Permissions-Policy/payment
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーフィールドにおける `payment` ディレクティブは、現在の文書が [Payment Request API](/ja/docs/Web/API/Payment_Request_API) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{DOMxRef("PaymentRequest()")}} コンストラクターで `SyntaxError` の {{domxref("DOMException")}} が発生します。

## 構文

```
Feature-Policy: payment <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

`payment` 機能の既定の許可リストの値は `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダーフィールド
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

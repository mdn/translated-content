---
title: 'Feature-Policy: payment'
slug: Web/HTTP/Headers/Feature-Policy/payment
tags:
  - ディレクティブ
  - 機能ポリシー
  - Feature-Policy
  - HTTP
  - Payment Request API
  - Payments API
  - リファレンス
  - 実験的
browser-compat: http.headers.Feature-Policy.payment
translation_of: Web/HTTP/Headers/Feature-Policy/payment
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーフィールドにおける `payment` ディレクティブは、現在の文書が [Payment Request API](/ja/docs/Web/API/Payment_Request_API) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{DOMxRef("PaymentRequest()")}} コンストラクターで {{exception("SyntaxError")}} 例外が発生します。

## 構文

```
Feature-Policy: payment <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#syntax) を参照してください。

## 既定のポリシー

`payment` 機能の既定の許可リストの値は `'self'` です。

## 仕様書

| 仕様書                         | 状態                        | 備考                                                                                                   |
| ------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{SpecName('Payment')}}        | {{Spec2('Payment')}}        | [Section 16. Feature Policy integration](https://w3c.github.io/payment-request/#feature-policy) を参照 |
| {{SpecName('Feature Policy')}} | {{Spec2('Feature Policy')}} | 初回定義                                                                                               |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダーフィールド
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

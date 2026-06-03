---
title: "Permissions-Policy: otp-credentials"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/otp-credentials
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `otp-credentials` ディレクティブは、現在の文書が [WebOTP API](/ja/docs/Web/API/WebOTP_API) を使用して、アプリのサーバーから送信された特別な形式の SMS メッセージからワンタイムパスワード (OTP) をリクエストすること、すなわち {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}} を許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 `navigator.credentials.get({otp})` によって返されるプロミス ({{jsxref("Promise")}}) は `SecurityError` の {{domxref("DOMException")}} で拒否されます。

## 構文

```http
Permissions-Policy: otp-credentials=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`otp-credentials` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [WebOTP API](/ja/docs/Web/API/WebOTP_API)
- {{DOMxRef("OTPCredential")}} インターフェイス

---
title: "Permissions-Policy: microphone"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/microphone
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `microphone` ディレクティブは、現在の文書がオーディオ入力機器を使用することを許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{domxref("MediaDevices.getUserMedia()")}} で返却されたプロミス ({{jsxref("Promise")}}) が `NotAllowedError` の {{domxref("DOMException")}} で拒否されます。

## 構文

```http
Permissions-Policy: microphone=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`microphone` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

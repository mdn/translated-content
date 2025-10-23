---
title: "Permissions-Policy: display-capture"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/display-capture
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `display-capture` ディレクティブは、現在の文書が[画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API)、すなわち {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} を使用して画面の内容をキャプチャすることを許可するかどうかを制御します。

文書で `display-capture` が無効になっていた場合、文書は {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} を通じて画面キャプチャを行うことができなくなります。

## 構文

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`display-capture` の許可リストの既定値は `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API)
- [画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)

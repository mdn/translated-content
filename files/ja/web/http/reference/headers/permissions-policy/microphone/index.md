---
title: "Permissions-Policy: microphone"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/microphone
original_slug: Web/HTTP/Headers/Permissions-Policy/microphone
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `microphone` ディレクティブは、現在の文書がオーディオ入力機器を使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxref("MediaDevices.getUserMedia()")}} で返却された {{jsxref('Promise')}} が `NotAllowedError` で拒否されます。

## 構文

```
Permissions-Policy: microphone <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

`geolocation` の既定の許可リストは `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Guides/Feature_Policy/Using_Feature_Policy)

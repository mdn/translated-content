---
title: 'Feature-Policy: microphone'
slug: Web/HTTP/Headers/Feature-Policy/microphone
tags:
  - 機能ポリシー
  - Feature-Policy
  - HTTP
  - ヘッダー
  - microphone
  - 実験的
browser-compat: http.headers.Feature-Policy.microphone
translation_of: Web/HTTP/Headers/Feature-Policy/microphone
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `microphone` ディレクティブは、現在の文書がオーディオ入力機器を使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxref("MediaDevices.getUserMedia()")}} で返却された {{jsxref('Promise')}} が `NotAllowedError` で拒否されます。

## 構文

```
Feature-Policy: microphone <allowlist>;
```

 - \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#syntax) を参照してください。

## 既定のポリシー

`geolocation` の既定の許可リストは `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

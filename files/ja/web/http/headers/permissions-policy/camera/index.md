---
title: "Feature-Policy: camera"
slug: Web/HTTP/Headers/Permissions-Policy/camera
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `camera` ディレクティブは、現在の文書が動画入力機器を使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxref("MediaDevices.getUserMedia()")}} から返却された {{jsxref("Promise")}} が `NotAllowedError` で拒否されます。

## 構文

```
Feature-Policy: camera <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

`camera` の許可リストの既定値は `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

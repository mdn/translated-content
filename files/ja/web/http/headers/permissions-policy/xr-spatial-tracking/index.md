---
title: "Feature-Policy: xr-spatial-tracking"
slug: Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `xr-spatial-tracking` ディレクティブは、現在の文書が [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) を使用することを許可するかどうかを制御します。このポリシーは、 {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} が空間追跡を必要とする {{DOMxRef("XRSession")}} を返すことができるかどうか、またユーザーエージェントが {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} と {{domxref("MediaDevices/devicechange_event", "devicechange")}} イベントを通じて空間追跡をサポートするセッションへのサポートを {{DOMxRef("Navigator.xr","navigator.xr")}} オブジェクトで示せるかどうかを制御します。

## 構文

```
Feature-Policy: xr-spatial-tracking <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

既定の許可リストは `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}}, {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}}, {{DOMxRef("Navigator.xr","navigator.xr")}} の {{domxref("MediaDevices/devicechange_event", "devicechange")}} イベント
- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

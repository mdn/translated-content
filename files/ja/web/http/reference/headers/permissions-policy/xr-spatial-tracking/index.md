---
title: "Permissions-Policy: xr-spatial-tracking"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `xr-spatial-tracking` ディレクティブは、現在の文書が [WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) を使用することを許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、

- {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} および {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} から返されるプロミス ({{jsxref("Promise")}}) は {{domxref("DOMException")}} の `SecurityError` 型で拒否されます。

- {{domxref("XRSystem/devicechange_event", "devicechange")}} イベントは {{DOMxRef("Navigator.xr","navigator.xr")}} オブジェクト上では発生しません。

## 構文

```http
Permissions-Policy: xr-spatial-tracking=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`xr-spatial-tracking` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}}, {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}}, {{DOMxRef("Navigator.xr","navigator.xr")}} の {{domxref("XRSystem/devicechange_event", "devicechange")}} イベント
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

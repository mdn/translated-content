---
title: "Permissions-Policy: ambient-light-sensor"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/ambient-light-sensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `ambient-light-sensor` ディレクティブは、現在の文書が {{domxref('AmbientLightSensor')}} インターフェイスを通じて端末の周囲の環境における明るさの量に関する情報を収集することを許可するかどうかを制御します。

仕様上、この機能の使用がブロックされる場合、 {{domxref("AmbientLightSensor.AmbientLightSensor", "AmbientLightSensor()")}} コンストラクターを呼び出すと、 {{domxref("DOMException")}} の `SecurityError` 型が発生します。

## 構文

```http
Permissions-Policy: ambient-light-sensor=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`ambient-light-sensor` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

---
title: 'Feature-Policy: ambient-light-sensor'
slug: Web/HTTP/Headers/Feature-Policy/ambient-light-sensor
tags:
  - Ambient Light Sensor
  - 機能ポリシー
  - HTTP
  - 実験的
browser-compat: http.headers.Feature-Policy.ambient-light-sensor
translation_of: Web/HTTP/Headers/Feature-Policy/ambient-light-sensor
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader('Feature-Policy')}} ヘッダーにおける `ambient-light-sensor` ディレクティブは、現在の文書が {{domxref('AmbientLightSensor')}} インターフェイスを通じて端末の周囲の環境における明るさの量に関する情報を収集することを許可するかどうかを制御します。

## 構文

```
Feature-Policy: ambient-light-sensor <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#syntax) を参照してください。

## 既定のポリシー

`ambient-light-sensor` の既定の許可リストは `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader('Feature-Policy')}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

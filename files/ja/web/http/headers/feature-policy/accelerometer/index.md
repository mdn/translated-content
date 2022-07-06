---
title: 'Feature-Policy: accelerometer'
slug: Web/HTTP/Headers/Feature-Policy/accelerometer
tags:
  - Accelerometer
  - ディレクティブ
  - 機能ポリシー
  - HTTP
  - リファレンス
  - 実験的
browser-compat: http.headers.Feature-Policy.accelerometer
translation_of: Web/HTTP/Headers/Feature-Policy/accelerometer
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader('Feature-Policy')}} ヘッダーにおける `accelerometer` ディレクティブは、現在の文書が {{domxref('Accelerometer')}} インターフェイスを通じて端末の加速度に関する情報を収集することを許可するかどうかを制御します。

## 構文

```
Feature-Policy: accelerometer <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#syntax) を参照してください。

## 既定のポリシー

この機能の `allowlist` 値の既定値は `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader('Feature-Policy')}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

---
title: "Permissions-Policy: accelerometer"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader('Permissions-Policy')}} ヘッダーにおける `accelerometer` ディレクティブは、現在の文書が {{domxref('Accelerometer')}} インターフェイスを通じて端末の加速度に関する情報を収集することを許可するかどうかを制御します。

仕様上、この機能の使用がブロックされる場合、 {{domxref("Accelerometer.Accelerometer", "Accelerometer()")}} コンストラクターを呼び出すと、 {{domxref("DOMException")}} の `SecurityError` 型が発生します。

## 構文

```http
Permissions-Policy: accelerometer=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`accelerometer` の許可リスト値の既定値は `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader('Permissions-Policy')}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

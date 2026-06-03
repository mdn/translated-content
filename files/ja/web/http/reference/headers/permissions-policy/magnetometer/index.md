---
title: "Permissions-Policy: magnetometer"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/magnetometer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `magnetometer` ディレクティブは、現在の文書が端末の方向についての情報を {{domxref("Magnetometer")}} インターフェイスで収集することを許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{domxref("Magnetometer.Magnetometer", "Magnetometer()")}} コンストラクターを呼び出すと {{domxref("DOMException")}} の `SecurityError` 型が発生します。

## 構文

```http
Permissions-Policy: magnetometer=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`magnetometer` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

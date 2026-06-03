---
title: "Permissions-Policy: gyroscope"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/gyroscope
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `gyroscope` ディレクティブは、現在の文書が {{domxref("Gyroscope")}} インターフェイスを通じて端末の方向に関する情報を収集することを許可するかどうかをコントロールします。

具体的には、定義されたポリシーでこの機能の使用がブロックされた場合、 {{domxref("Gyroscope.Gyroscope", "Gyroscope()")}} コンストラクターを呼び出すと、 {{domxref("DOMException")}} の `SecurityError` 型が発生します。

## 構文

```http
Permissions-Policy: gyroscope=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`gyroscope` の着ての許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

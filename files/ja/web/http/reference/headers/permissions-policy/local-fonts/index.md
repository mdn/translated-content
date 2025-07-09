---
title: "Permissions-Policy: local-fonts"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `local-fonts` ディレクティブは、現在の文書が {{DOMxRef("Window.queryLocalFonts()")}} メソッドを介してユーザーのローカルにインストールされているフォントに関するデータを収集することを許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{DOMxRef("Window.queryLocalFonts()")}} によって返されるプロミス ({{jsxref("Promise")}}) は、 {{domxref("DOMException")}} の `SecurityError` 型で拒否されます。

## 構文

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`local-fonts` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Local Font Access API", "ローカルフォントアクセス API", "", "nocode")}}
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

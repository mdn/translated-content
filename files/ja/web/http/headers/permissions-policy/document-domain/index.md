---
title: "Feature-Policy: document-domain"
slug: Web/HTTP/Headers/Permissions-Policy/document-domain
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `document-domain` ディレクティブは、現在の文書が {{domxref("document.domain")}} を設定することを許可するかどうかを制御します。このポリシーが無効であった場合、 {{domxref("document.domain")}} を設定しようとすると失敗し、 `SecurityError` の {{domxref("DOMException")}} が発生します。

## 構文

```
Feature-Policy: document-domain <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

`document-domain` の既定の許可リストは `*` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

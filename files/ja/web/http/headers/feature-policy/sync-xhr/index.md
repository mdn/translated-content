---
title: 'Feature-Policy: sync-xhr'
slug: Web/HTTP/Headers/Feature-Policy/sync-xhr
---

{{HTTPSidebar}} {{SeeCompatTable}}{{Non-standard_header}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `sync-xhr` ディレクティブは、現在の文書が同期の {{domxref("XMLHttpRequest")}} リクエストをすることを許可するかどうかを制御します。

## 構文

```http
Feature-Policy: sync-xhr <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。[`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

規定ではこのポリシーは `*` に設定されます。これは同期リクエストがすべてのフレームで許可されることを意味します。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Feature Policy](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)

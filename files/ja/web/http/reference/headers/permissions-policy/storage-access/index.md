---
title: "Permissions-Policy: storage-access"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `speaker-selection` ディレクティブは、第三者のコンテキスト（{{htmlelement("iframe")}} に埋め込まれたものなど）に読み込まれた文書が、{{domxref("Storage Access API", "ストレージアクセス API", "", "nocode")}} を使用してパーティション化されていない Cookie へのアクセスを要求することを許可するかどうかを制御します。

これは、プライバシー保護（例えば、追跡の防止）のために、第三者のコンテキストで読み込まれたサイトによるパーティション化されていない Cookie へのアクセスを既定でブロックするユーザーエージェントに関連します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{domxref("Document.requestStorageAccess()")}} を呼び出すと返されるプロミス ({{jsxref("Promise")}}) が {{domxref("DOMException")}} の `NotAllowedError` 型で拒否されます。

## 構文

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`storage-access` の既定の許可リストは `*` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

---
title: "Permissions-Policy: screen-wake-lock"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける **`screen-wake-lock`** ディレクティブは、現在の文書が[画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API) を使用して、端末が画面を暗くしたりオフにしたりしないよう指示することを許可するかどうか制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{domxref("WakeLock.request()")}} を呼び出すと返されるプロミス ({{jsxref("Promise")}}) が {{domxref("DOMException")}} の `NotAllowedError` 型で拒否されます。

## 構文

```http
Permissions-Policy: screen-wake-lock=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`screen-wake-lock` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

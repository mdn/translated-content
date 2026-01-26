---
title: "Permissions-Policy: idle-detection"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/idle-detection
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `idle-detection` ディレクティブは、現在の文書が{{domxref("Idle Detection API", "アイドル検出 API", "", "nocode")}} を使用して、ユーザーが端末を操作しているかどうかを検出することを許可するかどうかを制御します。例えば、チャットアプリケーションで「利用可能」/「離席中」のステータスを報告する場合などです。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{domxref("IdleDetector.start()")}} を呼び出すと、 `NotAllowedError` 型の {{domxref("DOMException")}} で拒否するプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```http
Permissions-Policy: idle-detection=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`idle-detection` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

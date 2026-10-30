---
title: "Permissions-Policy: aria-notify ディレクティブ"
short-title: aria-notify
slug: Web/HTTP/Reference/Headers/Permissions-Policy/aria-notify
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `aria-notify` ディレクティブは、現在の文書が {{domxref("Document.ariaNotify()")}} および {{domxref("Element.ariaNotify()")}} メソッドを使用して{{glossary("screen reader", "スクリーンリーダー")}}への通知を発信することができるかどうかを制御します。

仕様上、定義されたポリシーによって使用がブロックされている場合、`ariaNotify()` を使用して作成されたアナウンスは、暗黙に失敗します（送信されません）。

## 構文

```http
Permissions-Policy: aria-notify=<allowlist>;
```

- `<allowlist>`
  - : この機能を使用する権限が与えられたオリジンの一覧です。詳細については、[`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## デフォルトのポリシー

`aria-notify` のデフォルトの許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- {{domxref("Document.ariaNotify()")}}, {{domxref("Element.ariaNotify()")}}

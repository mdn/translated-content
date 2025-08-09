---
title: "Permissions-Policy: web-share"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `web-share` ディレクティブは、現在の文書がウェブ共有 API の {{domxref("Navigator.share","Navigator.share()")}} メソッドを使用して、テキスト、リンク、画像、その他のコンテンツをユーザーが選択した任意の宛先にシェアすることを許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{domxref("Navigator.share()")}} を呼び出すと返されるプロミス ({{jsxref("Promise")}}) が {{domxref("DOMException")}} の `NotAllowedError` 型で拒否されます。

## 構文

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`web-share` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

<!--
ブラウザーへの実装は <https://github.com/w3c/web-share/issues/169> で議論されています。
-->

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

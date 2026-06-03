---
title: "Permissions-Policy: window-management"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `window-management` ディレクティブは、現在の文書が[ウィンドウ管理 API](/ja/docs/Web/API/Window_Management_API) を使用して複数のディスプレイ上のウィンドウを管理することを許可するかどうかを制御します。

このポリシーがこの API の利用を禁止している場合、

- {{domxref("Window.getScreenDetails()")}} メソッドから返されるプロミス ({{jsxref("Promise")}}) が `NotAllowedError` 例外で拒否されます。
- {{domxref("Screen.isExtended", "Window.screen.isExtended")}} プロパティは常に `false` を返します。

## 構文

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`window-management` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウィンドウ管理 API](/ja/docs/Web/API/Window_Management_API)
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)

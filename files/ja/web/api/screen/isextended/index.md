---
title: "Screen: isExtended プロパティ"
short-title: isExtended
slug: Web/API/Screen/isExtended
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

**`isExtended`** は {{domxref("Screen")}} インターフェイスの読み取り専用プロパティで、ユーザーの端末が複数の画面を持っている場合は `true`、持っていない場合は `false` を返します。

このプロパティは通常、 `window.screen.isExtended` を介してアクセスし、[ウィンドウ管理 API](/ja/docs/Web/API/Window_Management_API) を使用してマルチウィンドウ、マルチ画面レイアウトを作成する前に、複数の画面が利用可能かどうかを検査するために使用することができます。

## 値

論理値です。端末に複数の画面がある場合は `true`、ない場合は `false`。

> [!NOTE]
> {{httpheader("Permissions-Policy/window-management", "window-management")}} の [Permissions-Policy](/ja/docs/Web/HTTP/Guides/Permissions_Policy) が設定されており、ウィンドウ管理 API の使用をブロックしている場合、 `isExtended` は常に `false` を返します。

## 例

```js
if (window.screen.isExtended) {
  // マルチ画面ウィンドウのレイアウトを作成
} else {
  // 単一画面ウィンドウのレイアウトを作成
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウィンドウ管理 API](/ja/docs/Web/API/Window_Management_API)

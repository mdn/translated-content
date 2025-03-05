---
title: "Document: fullscreen プロパティ"
short-title: fullscreen
slug: Web/API/Document/fullscreen
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

廃止された {{domxref("Document")}} インターフェイスの **`fullscreen`** プロパティは読み取り専用で、文書が現在全画面モードで表示されているかどうかを報告します。

このプロパティは読み取り専用ですが、変更されても（厳格モードでも）例外を投げません。セッターは何もしないので、無視されます。

> [!NOTE]
> このプロパティは非推奨であり、文書が全画面モードになっているかどうかは、 {{DOMxRef("Document.fullscreenElement")}} が `null` ではないことで確認することができます。

## 返値

真偽値であり、文書が全画面モードで表示されているときに `true`、それ以外の場合に `false` になります。

## 例

このシンプルな関数は、現在全画面モードがアクティブになっているかどうかを、廃止された `fullscreen` プロパティを使用して報告しています。

```js
function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
```

一方、次の例では、現在の `fullscreenElement` プロパティを使用して同じことを確認しています。

```js
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
```

`fullscreenElement` が `null` でなければ、これは `true` を返し、全画面モードで表示されていることを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- [全画面 API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{DOMxRef("Document.fullscreenEnabled")}}

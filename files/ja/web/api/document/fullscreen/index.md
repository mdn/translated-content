---
title: Document.fullscreen
slug: Web/API/Document/fullscreen
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

廃止された {{domxref("Document")}} インターフェイスの **`fullscreen`** プロパティは読み取り専用で、文書が現在全画面モードで表示されているかどうかを報告します。

このプロパティは読み取り専用ですが、変更されても (strict モードでも) 例外を投げません。セッターは何もしないので、無視されます。

> **メモ:** このプロパティは非推奨であり、文書が全画面モードになっているかどうかは、 {{DOMxRef("Document.fullscreenElement")}} が `null` ではないことで確認することができます。

## 構文

```
var isFullScreen = document.fullscreen;
```

### 返値

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

| 仕様書                                                                                                   | 状態                             | 備考                            |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------- |
| {{SpecName("Fullscreen", "#dom-document-fullscreen", "Document.fullscreen")}} | {{Spec2("Fullscreen")}} | 初回定義 (廃止プロパティとして) |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{DOMxRef("Document.fullscreenEnabled")}}

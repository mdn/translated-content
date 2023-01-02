---
title: Document.origin
slug: conflicting/Web/API/origin
original_slug: Web/API/Document/origin
---

{{APIRef("DOM")}}{{deprecated_header}}

> **メモ:** 代わりに `self.origin` を使用してください。

**`Document.origin`** は読み取り専用プロパティで、文書のオリジンを返します。ほとんどの場合、このプロパティは `document.defaultView.location.origin` と等価です。

## 値

この文書のオリジンを示す文字列です。

## 例

```js
var origin = document.origin;
// このページでは、 'https://developer.mozilla.org' を返します

var origin = document.origin;
// "about:blank" では 'null' を返します

var origin = document.origin;
// "data:text/html,<b>foo</b>" では、 'null' を返します。
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("URLUtils.origin")}} プロパティ

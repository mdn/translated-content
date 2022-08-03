---
title: Document.width
slug: Web/API/Document/width
page-type: web-api-instance-property
tags:
  - API
  - Document
  - HTML DOM
  - NeedsBrowserAgnosticism
  - NeedsSpecTable
  - プロパティ
  - リファレンス
  - 非推奨
browser-compat: api.Document.width
translation_of: Web/API/Document/width
---
{{APIRef("DOM")}} {{deprecated_header}}

> **Note:** {{Gecko("6.0")}} より `document.width` には対応しなくなりました。代わりに `document.body.clientWidth` を使用してください。 {{domxref("element.clientWidth")}} を参照してください。

現在の文書の {{HTMLElement("body")}} 要素の現在の幅をピクセル値で返します。

Internet Explorer は対応していません。

## 値

文書の幅をピクセル単位で表した数値。

## 例

```js
function init() {
  alert("文書の幅は " + document.width + " ピクセルです。");
}
```

## 代替策

```js
document.body.clientWidth              /* <body> の幅 */
document.documentElement.clientWidth   /* <html> の幅 */
window.innerWidth                      /* window の幅 */
```

## 仕様書

HTML5

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.height")}}
- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}

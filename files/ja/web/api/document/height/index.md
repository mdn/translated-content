---
title: Document.height
slug: Web/API/Document/height
page-type: web-api-instance-property
tags:
  - API
  - Document
  - HTML DOM
  - NeedsMarkupWork
  - NeedsSpecTable
  - プロパティ
  - リファレンス
  - 非推奨
browser-compat: api.Document.height
translation_of: Web/API/Document/height
---
{{APIRef("DOM")}} {{deprecated_header}}

> **Note:** {{Gecko("6.0")}} より `document.height` には対応しなくなりました。代わりに `document.body.clientHeight` を使用してください。 {{domxref("element.clientHeight")}} を参照してください。

現在の {{domxref("document")}} オブジェクトの高さを返します。多くの場合、これは現在の文書の {{HTMLElement("body")}} 要素の高さと同じ値です。

## 例

```js
// 文書の高さを表示
alert(document.height);
```

## 代替策

```js
document.body.clientHeight
document.documentElement.clientHeight
document.documentElement.scrollHeight
```

## 仕様書

HTML5

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.width")}}
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}

---
title: HTMLTableElement.border
slug: Web/API/HTMLTableElement/border
tags:
  - API
  - Deprecated
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLTableElement.border
translation_of: Web/API/HTMLTableElement/border
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLTableElement.border`** プロパティは、 {{HtmlElement("table")}} 要素の境界の幅を表します。

## 構文

```js
HTMLTableElement.border = border;
var border = HTMLTableElement.border;
```

- `border` は文字列で、境界の幅をピクセル単位で表します。

## 例

```js
// 表の境界を 2 ピクセルに設定
var t = document.getElementById('TableA');
t.border = '2';
```

## 仕様書

W3C DOM 2 HTML Specification [_HTMLTableElement_
.border](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-50969400).

この属性は HTML 4.0 で非推奨になりました。

## ブラウザーの互換性

{{Compat}}

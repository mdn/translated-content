---
title: HTMLTableElement.cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - NeedsSpecTable
  - プロパティ
  - リファレンス
  - cellSpacing
  - 非推奨
browser-compat: api.HTMLTableElement.cellSpacing
translation_of: Web/API/HTMLTableElement/cellSpacing
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

代わりに CSS の {{cssxref("border-spacing")}} プロパティを使うべきですが、旧式の {{domxref("HTMLTableElement")}} インターフェースの **`cellSpacing`** プロパティは、表のセルを表す個々の {{HTMLElement("th")}} および {{HTMLElement("td")}} 要素の周りの間隔を表わします。任意の 2 つのセルは、それぞれの `cellSpacing` の合計値で区切られます。

## 構文

```js
HTMLTableElement.cellSpacing = spacing;
var spacing = HTMLTableElement.cellSpacing;
```

### 値

{{domxref("DOMString")}} で、ピクセル数 (例えば `"10"`) またはパーセント値 (`"10%"` など) です。

## 例

This example sets cell spacing for a given table to 10 pixels.

```js
var t = document.getElementById('TableA');
t.cellSpacing = "10";
```

## 仕様書

- W3C DOM 2 HTML Specification [_HTMLTableElement_
  .cellSpacing](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-68907883).

## ブラウザーの互換性

{{Compat}}

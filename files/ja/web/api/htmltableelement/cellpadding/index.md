---
title: HTMLTableElement.cellPadding
slug: Web/API/HTMLTableElement/cellPadding
tags:
  - API
  - HTML DOM
  - NeedsSpecTable
  - プロパティ
  - リファレンス
  - 非推奨
browser-compat: api.HTMLTableElement.cellPadding
translation_of: Web/API/HTMLTableElement/cellPadding
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

**`HTMLTableElement.cellPadding`** プロパティは、表のそれぞれのセルの周囲にあるパディングを表します。

## 構文

```js
HTMLTableElement.cellPadding = padding;
var padding = HTMLTableElement.cellPadding;
```

- `padding` はピクセル数 (例えば "10") またはパーセント値 (例えば "10%") です。

## 例

```js
// セルのパディングを 10 ピクセルに設定
let t = document.getElementById('TableA');
t.cellPadding = '10';
```

## 仕様書

- W3C DOM 2 HTML Specification [_HTMLTableElement_
  .cellPadding](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-59162158).

## ブラウザーの互換性

{{Compat}}

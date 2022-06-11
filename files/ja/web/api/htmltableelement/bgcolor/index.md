---
title: HTMLTableElement.bgColor
slug: Web/API/HTMLTableElement/bgColor
tags:
  - API
  - 非推奨
  - HTML DOM
  - NeedsBrowserCompatibility
  - NeedsMarkupWork
  - NeedsSpecTable
  - プロパティ
  - リファレンス
browser-compat: api.HTMLTableElement.bgColor
translation_of: Web/API/HTMLTableElement/bgColor
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

**`HTMLTableElement.bgcolor`** プロパティは、この表の背景色を表します。

`bgColor` 属性は HTML 4.01 で非推奨になりました。代わりに、 CSS の {{cssxref("background-color")}} プロパティをその要素の [`style`](/ja/docs/Web/API/HTMLElement/style) オブジェクトで変更するか、スタイルルールを使用するかしてください。

DOM の [`tbody`](/ja/docs/Web/API/HTMLTableElement/tBodies), [`row`](/ja/docs/Web/API/HTMLTableElement/rows), [`cell`](/ja/docs/DOM/table.cells) オブジェクトでも利用できます。

## 構文

```js
color = table.bgColor
table.bgColor = color
```

### 引数

- `color` は色の値を表す文字列です。

## 例

```js
// 表の背景色をライトブルーに設定
var t = document.getElementById('TableA');
t.bgColor = 'lightblue';
```

## 仕様書

- [DOM Level 2
  HTML:_HTMLTableElement_ .bgColor](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-83532985)

## ブラウザーの互換性

{{Compat}}

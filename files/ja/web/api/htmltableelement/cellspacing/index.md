---
title: "HTMLTableElement: cellSpacing プロパティ"
short-title: cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

代わりに CSS の {{cssxref("border-spacing")}} プロパティを使うべきですが、旧式の {{domxref("HTMLTableElement")}} インターフェースの **`cellSpacing`** プロパティは、表のセルを表す個々の {{HTMLElement("th")}} および {{HTMLElement("td")}} 要素の周りの間隔を表わします。任意の 2 つのセルは、それぞれの `cellSpacing` の合計値で区切られます。

## 値

文字列で、ピクセル数（例えば `"10"`）またはパーセント値（`"10%"` など）です。

## 例

This example sets cell spacing for a given table to 10 pixels.

```js
const t = document.getElementById("TableA");
t.cellSpacing = "10";
```

## 仕様書

- W3C DOM 2 HTML Specification [_HTMLTableElement.cellSpacing_](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-68907883).

## ブラウザーの互換性

{{Compat}}

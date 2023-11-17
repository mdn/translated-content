---
title: "HTMLTableElement: cellPadding プロパティ"
short-title: cellPadding
slug: Web/API/HTMLTableElement/cellPadding
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

**`HTMLTableElement.cellPadding`** プロパティは、表のそれぞれのセルの周囲にあるパディングを表します。

## 値

文字列で、ピクセル数（例えば "10"）またはパーセント値（例えば "10%"）を表します。

## 例

```js
// セルのパディングを 10 ピクセルに設定
let t = document.getElementById("TableA");
t.cellPadding = "10";
```

## 仕様書

- W3C DOM 2 HTML Specification [_HTMLTableElement.cellPadding_](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-59162158).

## ブラウザーの互換性

{{Compat}}

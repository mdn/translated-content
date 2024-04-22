---
title: "HTMLTableElement: border プロパティ"
short-title: border
slug: Web/API/HTMLTableElement/border
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLTableElement.border`** プロパティは、 {{HtmlElement("table")}} 要素の境界の幅を表します。

## 値

文字列で、境界の幅をピクセル単位で表します。

## 例

```js
// 表の境界を 2 ピクセルに設定
const t = document.getElementById("TableA");
t.border = "2";
```

## 仕様書

W3C DOM 2 HTML Specification [_HTMLTableElement.border_](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-50969400).

この属性は HTML 4.0 で非推奨になりました。

## ブラウザーの互換性

{{Compat}}

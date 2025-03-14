---
title: "HTMLTableElement: cellSpacing プロパティ"
short-title: cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

代わりに CSS の {{cssxref("border-spacing")}} プロパティを使うべきですが、旧式の {{domxref("HTMLTableElement")}} インターフェイスの **`cellSpacing`** プロパティは、表のセルを表す個々の {{HTMLElement("th")}} および {{HTMLElement("td")}} 要素の周りの間隔を表わします。任意の 2 つのセルは、それぞれの `cellSpacing` の合計値で区切られます。

## 値

文字列で、ピクセル数（例えば `"10"`）またはパーセント値（`"10%"` など）です。

`null` 値に設定すると、`null` 値は空文字列 (`""`) に変換されるので、`elt.cellSpacing = null` は `elt.cellSpacing = ""` と等価です。

## 例

この例では、指定された表のセル間を 10 ピクセルに設定します。

```js
const t = document.getElementById("TableA");
t.cellSpacing = "10";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

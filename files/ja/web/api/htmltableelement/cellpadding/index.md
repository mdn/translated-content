---
title: "HTMLTableElement: cellPadding プロパティ"
short-title: cellPadding
slug: Web/API/HTMLTableElement/cellPadding
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

**`HTMLTableElement.cellPadding`** プロパティは、表のそれぞれのセルの周囲にあるパディングを表します。

## 値

文字列で、ピクセル数（例えば `"10"`）またはパーセント値（例えば `"10%"`）を表します。

`null` 値に設定するには、その `null` 値を空文字列 (`""`) に変換します。そのため、`elt.cellPadding = null` は `elt.cellPadding = ""` と同等です。

## 例

```js
// セルのパディングを 10 ピクセルに設定
let t = document.getElementById("TableA");
t.cellPadding = "10";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

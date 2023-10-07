---
title: "HTMLTableElement: bgColor プロパティ"
short-title: bgColor
slug: Web/API/HTMLTableElement/bgColor
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

**`bgcolor`** は {{domxref("HTMLTableElement")}} のプロパティで、この表の背景色を表します。

> **メモ:** この属性は使用しないでください。代わりに、 CSS の {{cssxref("background-color")}} プロパティをその要素の [`style`](/ja/docs/Web/API/HTMLElement/style) オブジェクトで変更するか、スタイルルールを使用するかしてください。

## 値

色の値を表す文字列です。

## 例

```js
// 表の背景色をライトブルーに設定
const t = document.getElementById("TableA");
t.bgColor = "lightblue";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("background-color")}}

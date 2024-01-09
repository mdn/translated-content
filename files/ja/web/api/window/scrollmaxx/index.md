---
title: Window.scrollMaxX
slug: Web/API/Window/scrollMaxX
---

{{APIRef}} {{Non-standard_header}}

**`Window.scrollMaxX`** は読み取り専用プロパティで、文書が横方向にスクロールできる最大ピクセル数を返します。

## 構文

```js
xMax = window.scrollMaxX;
```

- `xMax` はピクセル数です。

## 例

```js
// ページの右端までスクロールする
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## 注

このプロパティを、文書の全体の幅を取得するためには使用しないでください。これは [window.innerWidth](/ja/docs/Web/API/Window/innerWidth) + window\.scrollMaxX とは等しくありません。これは {{domxref("window.innerWidth")}} には表示中の垂直スクロールバーがすべて含まれるからであり、結果は文書の幅よりすべての表示中の垂直スクロールバーの幅だけ大きくなります。代わりに {{domxref("element.scrollWidth","document.body.scrollWidth")}} を使用してください。 {{domxref("window.scrollMaxY")}} も参照してください。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

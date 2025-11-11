---
title: Window.scrollMaxY
slug: Web/API/Window/scrollMaxY
---

{{APIRef}} {{Non-standard_header}}

**`Window.scrollMaxY`** は読み取り専用プロパティで、文書が縦方向にスクロールできる最大ピクセル数を返します。

## 構文

```js
yMax = window.scrollMaxY;
```

- `yMax` はピクセル数です。

## 例

```js
// ページの下端までスクロールする
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## 注

このプロパティを、文書の全体の高さを取得するためには使用しないでください。これは {{domxref("window.innerHeight")}} + window\.scrollMaxY とは等しくありません。これは {{domxref("window.innerHeight")}} には表示中の水平スクロールバーがすべて含まれるからであり、結果は文書の幅よりすべての表示中の水平スクロールバーの幅だけ大きくなります。代わりに {{domxref("element.scrollHeight","document.body.scrollHeight")}} を使用してください。 {{domxref("window.scrollMaxX")}} および {{domxref("window.scrollTo")}} も参照してください。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

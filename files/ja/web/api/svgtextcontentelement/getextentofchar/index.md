---
title: "SVGTextContentElement: getExtentOfChar() メソッド"
short-title: getExtentOfChar()
slug: Web/API/SVGTextContentElement/getExtentOfChar
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

`getExtentOfChar()` は {{domxref("SVGTextContentElement")}} インターフェイスのメソッドで、指定されたタイポグラフィ文字に対応するグリフセルの最小の境界ボックスの計算値を表します。

## 構文

```js-nolint
getExtentOfChar(index)
```

### 引数

- `index`
  - : `integer` です。文字のインデックスです。

### 返値

{{domxref("DOMRect")}} オブジェクトです。指定された文字の最小の境界ボックスです。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` の位置に文字がなかった場合に発生します。

## 例

### 文字の範囲の取得

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// インデックス 0 （最初の文字）の文字の範囲（境界ボックス）を取得します。
const extent = textElement.getExtentOfChar(0);

// 先頭文字の境界ボックス
console.dir(extent); // 出力: DOMRect { x: 10, y: 38, width: 11.55, height: 16 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMRect")}}

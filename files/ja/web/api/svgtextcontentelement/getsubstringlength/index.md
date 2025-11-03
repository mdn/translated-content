---
title: "SVGTextContentElement: getSubStringLength() メソッド"
short-title: getSubStringLength()
slug: Web/API/SVGTextContentElement/getSubStringLength
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

`getSubStringLength()` は {{domxref("SVGTextContentElement")}} インターフェイスのメソッドで、これは、要素内のテキストの部分の書式化されたテキストの進む距離の計算値を表します。

このメソッドは、サブストリング内のグリフの幅と、CSS の [`letter-spacing`](/ja/docs/Web/CSS/Reference/Properties/letter-spacing) および [`word-spacing`](/ja/docs/Web/CSS/Reference/Properties/word-spacing) プロパティによって挿入された追加の間隔のみを考慮します。 [`x`](/ja/docs/Web/CSS/x) 属性によって視覚的に調整された間隔は無視されます。

## 構文

```js-nolint
getSubStringLength(index, length)
```

### 引数

- `index`
  - : `integer` です。計算する部分の先頭のインデックスです。
- `length`
  - : `integer` です。計算する部分に含まれる文字列です。

### 返値

float 値です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` がインデックスの最大値を上回っているか、 `length` が負の数の場合。

## 例

### 文字列の部分の長さを取得

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// 文字 0 から始まる 5 文字の部分文字列の長さを取得
const substringLength = textElement.getSubStringLength(0, 5);

console.log(substringLength); // 出力: 35.55
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

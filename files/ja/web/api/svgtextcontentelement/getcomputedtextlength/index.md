---
title: "SVGTextContentElement: getComputedTextLength() メソッド"
short-title: getComputedTextLength()
slug: Web/API/SVGTextContentElement/getComputedTextLength
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

`getComputedTextLength()` は {{domxref("SVGTextContentElement")}} インターフェイスのメソッドで、この要素内のテキストの計算された長さを表します。

## 構文

```js-nolint
getComputedTextLength()
```

### 引数

なし。

### 返値

実数です。

## 例

### テキストの長さの計算

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// 計算されたテキストの長さを取得
const textLength = textElement.getComputedTextLength();

console.log(textLength); // 出力: 124.5 （例。フォントサイズやテキストコンテンツによって変わる）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

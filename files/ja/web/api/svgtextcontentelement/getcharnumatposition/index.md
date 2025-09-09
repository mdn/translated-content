---
title: "SVGTextContentElement: getCharNumAtPosition() メソッド"
short-title: getCharNumAtPosition()
slug: Web/API/SVGTextContentElement/getCharNumAtPosition
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

`getCharNumAtPosition()` は {{domxref("SVGTextContentElement")}} インターフェイスのメソッドで、指定された座標の位置にテキストグリフがレンダリングされた文字を表します。文字とグリフの関係は一対一ではないため、関連するタイポグラフィ文字の最初の文字のみが返されます。

指定した位置で文字がみつからない場合は、 `-1` が返されます。

## 構文

```js-nolint
getCharNumAtPosition(point)
```

### 引数

- `point`
  - : {{domxref("DOMPoint")}} オブジェクトです。ユーザー座標空間で文字の位置を調べる座標 (x, y) です。

### 返値

long 型です。位置に対応する文字のインデックス。

## 例

### 指定された位置の文字を探す

```html
<svg width="200" height="100">
  <text id="exampleText" x="10" y="40" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// DOMPoint を (30, 40) の位置で作成
const point = new DOMPoint(30, 40);

// 指定された位置の文字を取得
const charIndex = textElement.getCharNumAtPosition(point);

console.log(charIndex); // 出力: 2 (文字 "l")

// 文字が存在しない位置の点をチェック
const offPoint = new DOMPoint(300, 40);
const offCharIndex = textElement.getCharNumAtPosition(offPoint);

console.log(offCharIndex); // 出力: -1 （文字が見つからない）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

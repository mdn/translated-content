---
title: "SVGTextContentElement: getStartPositionOfChar() メソッド"
short-title: getStartPositionOfChar()
slug: Web/API/SVGTextContentElement/getStartPositionOfChar
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

`getStartPositionOfChar()` は {{domxref("SVGTextContentElement")}} インターフェイスのメソッドで、組版された文字の、テキストのレイアウトが実行された後の位置を返します。

## 構文

```js-nolint
getStartPositionOfChar(index)
```

### 引数

- `index`
  - : `integer` です。文字のインデックスです。

### 返値

{{domxref("DOMPoint")}} オブジェクトです。ユーザー座標での文字の位置です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` の位置に文字がなかった場合に発生します。

## 例

### 文字の位置の取得

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50" font-size="16">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// インデックス 0 （最初の文字）の位置を取得
const position = textElement.getStartPositionOfChar(0);

// 最初の文字の X 座標と Y 座標を取得
console.log(position.x, position.y); // 出力: 10 50
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

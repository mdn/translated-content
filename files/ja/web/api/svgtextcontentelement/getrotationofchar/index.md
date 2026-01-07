---
title: "SVGTextContentElement: getRotationOfChar() メソッド"
short-title: getRotationOfChar()
slug: Web/API/SVGTextContentElement/getRotationOfChar
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

`getRotationOfChar()` は {{domxref("SVGTextContentElement")}} インターフェイスのメソッドで、組版された文字の回転を表します。

## 構文

```js-nolint
getRotationOfChar(index)
```

### 引数

- `index`
  - : `integer` です。文字のインデックスです。

### 返値

float 値です。文字の回転角を角度で表します。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `index` の位置に文字がなかった場合に発生します。

## 例

### Getting the Rotation of a Character

```html
<svg width="200" height="100">
  <text id="exampleText" x="10" y="40" writing-mode="vertical-rl">
    Hello, SVG
  </text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// 最初の文字 "H" の回転角を取得
const rotation = textElement.getRotationOfChar(0);

console.log(extent); // 出力: 90
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`writing-mode`](/ja/docs/Web/CSS/Reference/Properties/writing-mode)

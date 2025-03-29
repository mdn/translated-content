---
title: "SVGTextContentElement: getNumberOfChars() メソッド"
short-title: getNumberOfChars()
slug: Web/API/SVGTextContentElement/getNumberOfChars
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("SVG")}}

`getNumberOfChars()` は {{domxref("SVGTextContentElement")}} インターフェイスのメソッドで、レンダリングされるかどうかに関わらず、現在の要素内でレンダリングできる利用できる文字の総数を表します。

## 構文

```js-nolint
getNumberOfChars()
```

### 引数

なし。

### 返値

long 値です。

## 例

### テキスト要素の文字数を数える

```html
<svg width="300" height="100">
  <text id="exampleText" x="10" y="50">Hello, SVG World!</text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// テキスト要素内の文字数を取得する
const charCount = textElement.getNumberOfChars();

console.log(charCount); // 出力: 17
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

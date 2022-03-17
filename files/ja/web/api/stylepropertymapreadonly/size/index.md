---
title: StylePropertyMapReadOnly.size
slug: Web/API/StylePropertyMapReadOnly/size
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - 実験的
  - Houdini
  - Property
  - リファレンス
  - StylePropertyMapReadOnly
  - size
browser-compat: api.StylePropertyMapReadOnly.size
translation_of: Web/API/StylePropertyMapReadOnly/size
---
{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

**`size`** は {{domxref("StylePropertyMapReadOnly")}} インターフェイスの読み取り専用プロパティで、 `StylePropertyMapReadOnly` オブジェクトの大きさを符号なし長整数で返します。

## 構文

```js
var size = StylePropertyMapReadOnly.size
```

### 値

符号なし長整数です。

## 例

ここでは size プロパティを使用して、この button 要素の {{domxref('Element.computedStyleMap()','computedStyleMap')}} に含まれる項目の数を返します。

```js
// 要素を取得
const buttonEl = document.querySelector('button');

// `computedStyleMap` ですべての計算済みスタイルが取得できます
const allComputedStyles = buttonEl.computedStyleMap();

// size を使用してマップ内にあるスタイルの数を取得します
const amountStyles = allComputedStyles.size;
console.log(amountStyles); // 338 と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

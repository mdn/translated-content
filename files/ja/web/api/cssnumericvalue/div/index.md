---
title: CSSNumericValue.div()
slug: Web/API/CSSNumericValue/div
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - div()
browser-compat: api.CSSNumericValue.div
translation_of: Web/API/CSSNumericValue/div
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`div()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、 `CSSNumericValue` を指定された値で除算します。

## 構文

```js
div(number)
```

### 引数

- `number`
  - : 数値または {{domxref('CSSNumericValue')}} です。

### 返値

{{domxref('CSSMathProduct')}} です。

### 例外

- {{jsxref("TypeError")}}
  - : 無効な型がメソッドに渡された場合に発生します。

## 例

```js
let mathProduct = CSS.px("24").div(CSS.percent("4"));
// Prints "calc(24px / 4%)"
mathProduct.toString();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

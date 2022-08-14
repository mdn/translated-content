---
title: CSSNumericValue.mul()
slug: Web/API/CSSNumericValue/mul
tags:
  - API
  - CSS 型付きオブジェクトモデル API
  - CSSNumericValue
  - 実験的
  - Houdini
  - メソッド
  - リファレンス
  - mul()
browser-compat: api.CSSNumericValue.mul
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

**`mul()`** は {{domxref("CSSNumericValue")}} インターフェイスのメソッドで、この `CSSNumericValue` に指定された値を乗算します。

## 構文

```js
mul(number)
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
let mathSum = CSS.px("23").mul(CSS.percent("4")).mul(CSS.cm("3")).mul(CSS.in("9"));
// Prints "calc(23px * 4% * 3cm * 9in)"
console.log(mathSum.toString());
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
browser-compat: javascript.builtins.Number.toPrecision
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---
{{JSRef}}

**`toPrecision()`** メソッドは {{jsxref("Number")}} オブジェクトを指定された精度で表した文字列を返します。

{{EmbedInteractiveExample("pages/js/number-toprecision.html")}}

## 構文

```js
toPrecision()
toPrecision(precision)
```

### 引数

- `precision` {{optional_inline}}
  - : 有効数字の数を指定する整数です。

### 返値

{{jsxref("Number")}} オブジェクトを `precision` で指定された桁で概数化された、固定小数点数、または指数表記で表した文字列です。概数の表現方法については {{jsxref("Number.prototype.toFixed()")}} メソッドの説明を参照してください。それは `toPrecision()` にも適用されます。

引数 `precision` が省略された場合、 {{jsxref("Number.prototype.toString()")}} のように振舞います。 `precision` が整数の値ではない場合は、最も近い整数に概数化されます。

## 例外

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : `precision` が 1 と 100 の間 (両端を含む) でない場合、 {{jsxref("RangeError")}} が発生します。実装上はこの範囲を超えた値にも対応できます。 ECMA-262 では 21 桁までの精度のみを要求しています。

## 例

### toPrecision の使用

```js
let numObj = 5.123456

console.log(numObj.toPrecision())    // '5.123456' と出力
console.log(numObj.toPrecision(5))   // '5.1235' と出力
console.log(numObj.toPrecision(2))   // '5.1' と出力
console.log(numObj.toPrecision(1))   // '5' と出力

numObj = 0.000123

console.log(numObj.toPrecision())    // '0.000123' と出力
console.log(numObj.toPrecision(5))   // '0.00012300' と出力
console.log(numObj.toPrecision(2))   // '0.00012' と出力
console.log(numObj.toPrecision(1))   // '0.0001' と出力

// なお、場合によっては指数表記が返されることがあります。
console.log((1234.5).toPrecision(2)) // '1.2e+3' と出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}

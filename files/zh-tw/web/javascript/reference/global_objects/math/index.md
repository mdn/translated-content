---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
---

{{JSRef}}

**`Math`** 是一個擁有數學常數及數學函數（非函式物件）屬性及方法的內建物件。

## 描述

不像其他的全域物件，`Math` 並非建構函式。所有 `Math` 的屬性及方法皆為靜態。你可以使用 `Math.PI` 來參考到圓周率 pi 的常數值，以及可以呼叫 `Math.sin(x)` 函式來計算三角函數正弦曲線 sine（`x` 為方法的引數）。常數是由 JavaScript 中實數的完整精度來定義。

## 屬性

- {{jsxref("Math.E")}}
  - : 歐拉常數 (此指自然常數) ，也是自然對數的底數，約為 2.718。
- {{jsxref("Math.LN2")}}
  - : 2 的自然對數，約為 0.693。
- {{jsxref("Math.LN10")}}
  - : 10 的自然對數，約為 2.303。
- {{jsxref("Math.LOG2E")}}
  - : 以 2 為底的 E 的對數，約為 1.443。
- {{jsxref("Math.LOG10E")}}
  - : 以 10 為底的 E 的對數，約為 0.434。
- {{jsxref("Math.PI")}}
  - : 一個圓的圓周和其直徑比值，約為 3.14159。
- {{jsxref("Math.SQRT1_2")}}
  - : 1/2 的平方根；也就是 1 除以 2 的平方根，約為 0.707。
- {{jsxref("Math.SQRT2")}}
  - : 2 的平方根，約為 1.414。

## 方法

> [!NOTE]
> 三角函數 (`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`) 的參數或回傳值的角度皆以弧度為單位。把角度乘上 `(Math.PI / 180)` 會得到弧度單位，將弧度除以該數則會轉換回一般所用的角度單位。

> [!NOTE]
> 許多數學方法的精度是取決於實作方式的。這意味著不同的瀏覽器可能會得到不同的結果，甚至同一個 JS 引擎在不同的作業系統或架構上所得到的結果都有可能相異。

- {{jsxref("Global_Objects/Math/abs", "Math.abs(x)")}}
  - : 回傳 x 的絕對值。
- {{jsxref("Global_Objects/Math/acos", "Math.acos(x)")}}
  - : 回傳 x 的反餘弦值。
- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(x)")}}
  - : Returns the hyperbolic arccosine of a number.
- {{jsxref("Global_Objects/Math/asin", "Math.asin(x)")}}
  - : 回傳 x 的反正弦值。
- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(x)")}}
  - : Returns the hyperbolic arcsine of a number.
- {{jsxref("Global_Objects/Math/atan", "Math.atan(x)")}}
  - : 回傳 x 的反正切值。
- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(x)")}}
  - : Returns the hyperbolic arctangent of a number.
- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(y, x)")}}
  - : Returns the arctangent of the quotient of its arguments.
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(x)")}}
  - : 回傳 x 的立方根值。
- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(x)")}}
  - : 回傳不小於 x 的最小整數值。
- {{jsxref("Global_Objects/Math/clz32", "Math.clz32(x)")}}
  - : Returns the number of leading zeroes of a 32-bit integer.
- {{jsxref("Global_Objects/Math/cos", "Math.cos(x)")}}
  - : 回傳 x 的餘弦值。
- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(x)")}}
  - : Returns the hyperbolic cosine of a number.
- {{jsxref("Global_Objects/Math/exp", "Math.exp(x)")}}
  - : 回傳 E^x，x 為給定數值，E 為歐拉常數 (自然對數的底數)。
- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(x)")}}
  - : 回傳 `exp(x)` 減去 1 的值。
- {{jsxref("Global_Objects/Math/floor", "Math.floor(x)")}}
  - : 回傳不大於 x 的最大整數值。
- {{jsxref("Global_Objects/Math/fround", "Math.fround(x)")}}
  - : Returns the nearest [single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of a number.
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([x[, y[, …]]])")}}
  - : 回傳參數平方之和的平方根。
- {{jsxref("Global_Objects/Math/imul", "Math.imul(x, y)")}}
  - : Returns the result of a 32-bit integer multiplication.
- {{jsxref("Global_Objects/Math/log", "Math.log(x)")}}
  - : 回傳 x 的自然對數值。
- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(x)")}}
  - : 回傳 `1 + x` 的自然對數值。
- {{jsxref("Global_Objects/Math/log10", "Math.log10(x)")}}
  - : 回傳以 10 為底，x 的對數值。
- {{jsxref("Global_Objects/Math/log2", "Math.log2(x)")}}
  - : 回傳以 2 為底，x 的對數值。
- {{jsxref("Global_Objects/Math/max", "Math.max([x[, y[, …]]])")}}
  - : 回傳給定數值中的最大值。
- {{jsxref("Global_Objects/Math/min", "Math.min([x[, y[, …]]])")}}
  - : 回傳給定數值中的最小值。
- {{jsxref("Global_Objects/Math/pow", "Math.pow(x, y)")}}
  - : 回傳 x 的 y 次方，也就是 `x^y`。
- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : 回傳一個 0 到 1 之間的偽隨機值。
- {{jsxref("Global_Objects/Math/round", "Math.round(x)")}}
  - : 回傳 x 的四捨五入值。
- {{jsxref("Global_Objects/Math/sign", "Math.sign(x)")}}
  - : 回傳 x 的正負號，也就是回傳 x 的正負。
- {{jsxref("Global_Objects/Math/sin", "Math.sin(x)")}}
  - : 回傳 x 的正弦值。
- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(x)")}}
  - : Returns the hyperbolic sine of a number.
- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(x)")}}
  - : 回傳 x 的正平方根。
- {{jsxref("Global_Objects/Math/tan", "Math.tan(x)")}}
  - : 回傳 x 的正切值。
- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(x)")}}
  - : Returns the hyperbolic tangent of a number.
- `Math.toSource()` {{non-standard_inline}}
  - : 回傳字串 `"Math"`。
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(x)")}}
  - : Returns the integral part of the number x, removing any fractional digits.

## 擴充 `Math` 物件

As most of the built-in objects in JavaScript, the `Math` object can be extended with custom properties and methods. To extend the `Math` object, you do not use 'prototype'. Instead, you directly extend `Math`:

```plain
Math.propName = propValue;
Math.methodName = methodRef;
```

For instance, the following example adds a method to the `Math` object for calculating the _greatest common divisor_ of a list of arguments.

```js
/* Variadic function -- Returns the greatest common divisor of a list of arguments */
Math.gcd = function () {
  if (arguments.length == 2) {
    if (arguments[1] == 0) return arguments[0];
    else return Math.gcd(arguments[1], arguments[0] % arguments[1]);
  } else if (arguments.length > 2) {
    var result = Math.gcd(arguments[0], arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      result = Math.gcd(result, arguments[i]);
    return result;
  }
};
```

Try it:

```js
console.log(Math.gcd(20, 30, 15, 70, 40)); // `5`
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Number")}}

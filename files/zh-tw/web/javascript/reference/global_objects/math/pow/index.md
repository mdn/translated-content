---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
---

{{JSRef}}

**`Math.pow()`** 函式回傳 `base` 的 `exponent` 次方（幂）值，也就是 `base^exponent`。

## 語法

```plain
Math.pow(base, exponent)
```

### 參數

- `base`
  - : 基數。
- `exponent`
  - : 要乘上 `base` 幾次的指數。

### 回傳值

A number representing the given base taken to the power of the given exponent.

## 敘述

The **`Math.pow()`** function returns the `base` to the `exponent` power, that is, `base^exponent`, the base and the exponent are in decimal numeral system.

由於 `pow()` 是 `Math` 的靜態方法，you always use it as `Math.pow()`, rather than as a method of a `Math` object you created（`Math` 並沒有建構子）。

## 示例

### 使用 `Math.pow()`

```js
// simple
Math.pow(7, 2);    // 49
Math.pow(7, 3);    // 343
Math.pow(2, 10);   // 1024
// fractional exponents
Math.pow(4, 0.5);  // 2 （4 的平方根）
Math.pow(8, 1/3);  // 2 （8 的立方根）
Math.pow(2, 0.5);  // 1.4142135623730951 （2 的平方根）
Math.pow(2, 1/3);  // 1.2599210498948732 （2 的立方根）
// signed exponents
Math.pow(7, -2);   // 0.02040816326530612 (1/49)
Math.pow(8, -1/3); // 0.5
// signed bases
Math.pow(-7, 2);   // 49 (負負得正，2次方都是正數)
Math.pow(-7, 3);   // -343 (3次方有可能為負數)
Math.pow(-7, 0.5); // NaN (負數沒辦法得出一個實數平方根)
// due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN
Math.pow(-7, 1/3); // NaN
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Exponentiation operator](/zh-TW/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation) {{experimental_inline}}

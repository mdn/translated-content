---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---

**`toExponential()`** method 用來將數字轉成「科學記數法」格式。

## 語法

```js-nolint
numObj.toExponential([fractionDigits])
```

### 參數

| 參數             | 可選 | 默認值                   | 類型                           | 說明                                |
| ---------------- | ---- | ------------------------ | ------------------------------ | ----------------------------------- |
| `fractionDigits` | ●    | 默認盡可能將數字完整顯示 | {{jsxref("Number")}}（正整數） | 小數點後的位數。需為 0 至 20 之間。 |

### 回傳值

一 string，將數字以「科學計數法」格式表示出來

### Exceptions

- {{jsxref("RangeError")}}
  - : 若 `fractionDigits` 超出範圍（可接受的範圍是 0 ～ 20 之間的正整數）觸發 {{jsxref("RangeError")}}。
- {{jsxref("TypeError")}}
  - : 若參數 `fractionDigits` 不是 {{jsxref("Number")}}，則觸發{{jsxref("TypeError")}}。

## Description

If the `fractionDigits` argument is omitted, the number of digits after the decimal point defaults to the number of digits necessary to represent the value uniquely.

If you use the `toExponential()` method for a numeric literal and the numeric literal has no exponent and no decimal point, leave whitespace(s) before the dot that precedes the method call to prevent the dot from being interpreted as a decimal point.

If a number has more digits than requested by the `fractionDigits` parameter, the number is rounded to the nearest number represented by `fractionDigits` digits. See the discussion of rounding in the description of the {{jsxref("Number.prototype.toFixed", "toFixed()")}} method, which also applies to `toExponential()`.

## 範例

### Using `toExponential`

```js
var numObj = 77.1234;

console.log(numObj.toExponential()); // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log((77.1234).toExponential()); // logs 7.71234e+1
console.log((77).toExponential()); // logs 7.7e+1
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}

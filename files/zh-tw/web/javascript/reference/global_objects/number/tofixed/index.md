---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---

**`toFixed()`** 方法會使用定點小數表示法（fixed-point notation）來格式化數字。

{{InteractiveExample("JavaScript Demo: Number.toFixed()")}}

```js interactive-example
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial("1.23e+5"));
// Expected output: "123000.00"
```

## 語法

```js-nolint
numObj.toFixed([digits])
```

### 參數

- `digits 小數位`
  - : 選擇性輸入。顯示數值至多少個小數點，範圍由 0 到 20 之間，執行時或可支援非常大範圍的數值。如果無輸入會默認做 0。

### 回傳值

一個代表以定點小數表示法（fixed-point notation）格式化數字後的字串。

### 例外

- {{jsxref("RangeError")}}
  - : If `digits` is too small or too large. Values between 0 and 100, inclusive, will not cause a {{jsxref("RangeError")}}. Implementations are allowed to support larger and smaller values as chosen.
- {{jsxref("TypeError")}}
  - : If this method is invoked on an object that is not a {{jsxref( "Number")}}.

## 說明

**`toFixed()`** returns a string representation of `numObj` that does not use exponential notation and has exactly `digits` digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length. If `numObj` is greater than `1e+21`, this method simply calls {{jsxref("Number.prototype.toString()")}} and returns a string in exponential notation.

## 範例

### Using `toFixed`

```js
var numObj = 12345.6789;

numObj.toFixed(); // Returns '12346': note rounding, no fractional part
numObj.toFixed(1); // Returns '12345.7': note rounding
numObj.toFixed(6); // Returns '12345.678900': note added zeros
(1.23e20).toFixed(2); // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2); // Returns '0.00'
(2.34).toFixed(1); // Returns '2.3'
(2.35).toFixed(1); // Returns '2.4'. Note that it rounds up in this case.
-(2.34).toFixed(1); // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1); // Returns '-2.3' (...unless you use parentheses)
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}

---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---

{{jsxref("Number")}} 值的 **`toExponential()`** 方法返回一个以指数表示法表示该数字的字符串。

{{InteractiveExample("JavaScript Demo: Number.toExponential()")}}

```js interactive-example
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));
// Expected output: "1.23e+5"

console.log(expo("123456"));
// Expected output: "1.23456e+5"

console.log(expo("oink"));
// Expected output: "NaN"
```

## 语法

```js-nolint
toExponential()
toExponential(fractionDigits)
```

### 参数

- `fractionDigits` {{optional_inline}}
  - : 可选。一个整数，用来指定小数点后有几位数字。默认设置为完整表示该数字所需要的数字。

### 返回值

一个以指数表示法表示给定 {{jsxref("Number")}} 对象的字符串，其小数点前为一位数字，小数点后舍入到 `fractionDigits` 位。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `fractionDigits` 不是介于 `0` 和 `100` 之间（包含两端）的整数，则抛出该错误。
- {{jsxref("TypeError")}}
  - : 如果在非 {{jsxref("Number")}} 对象上调用该方法，则抛出该错误。

## 描述

如果省略了 `fractionDigits` 参数，则小数点后的位数默认为精确表示该值的所需的位数。

如果你为一个没有指数也没有小数点的数字字面量使用 `toExponential()` 方法。请在方法调用之前的点之前留出空格，以防止该点被解释为小数点。

如果一个数字的位数比 `fractionDigits` 参数指定的位数更多，则该数字将被舍入为最接近的数字，请参阅 {{jsxref("Number.prototype.toFixed", "toFixed()")}} 方法的描述中关于舍入的讨论，这也适用于 `toExponential()`。

## 示例

### 使用 toExponential

```js
const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.prototype.toExponential` 的 polyfill，并对此方法进行了修复](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}

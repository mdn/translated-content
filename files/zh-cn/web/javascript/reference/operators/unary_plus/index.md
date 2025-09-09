---
title: 一元加（+）
slug: Web/JavaScript/Reference/Operators/Unary_plus
---

**一元加**（**`+`**）运算符在其操作数之前并计算其操作数，但会尝试将其[转换为数字](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)，如果它还不是的话。

{{InteractiveExample("JavaScript Demo: Expressions - Unary plus operator", "taller")}}

```js interactive-example
const x = 1;
const y = -1;

console.log(+x);
// Expected output: 1

console.log(+y);
// Expected output: -1

console.log(+"");
// Expected output: 0

console.log(+true);
// Expected output: 1

console.log(+false);
// Expected output: 0

console.log(+"hello");
// Expected output: NaN
```

## 语法

```js-nolint
+x
```

## 描述

虽然一元减（`-`）也可以转换非数字，但一元加是将某些东西转换为数字的最快和首选方法，因为它不对数字执行任何其他操作。它可以转换整数和浮点数的字符串表示形式，以及非字符串值 `true`、`false` 和 `null`。支持十进制和十六进制（以 `0x` 为前缀）格式的整数。支持负数（但不适用于十六进制）。对 BigInt 值使用该运算符会引发 TypeError。如果它无法解析特定值，它将计算为 {{jsxref("NaN")}}。

## 示例

### 数字用法

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### 非数字用法

```js-nolint
+true  // 1
+false // 0
+null  // 0
+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [加法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
- [减法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [乘法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [取余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [求幂运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [自增运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [自减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)

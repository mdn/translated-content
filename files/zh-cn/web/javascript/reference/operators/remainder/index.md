---
title: 取余（%）
slug: Web/JavaScript/Reference/Operators/Remainder
---

{{jsSidebar("Operators")}}

**取余**（**`%`**）运算符返回左侧操作数除以右侧操作数的余数。它总是与被除数的符号保持一致。

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## 语法

```js-nolint
x % y
```

## 描述

对于运算：`n % d`，其中 `n` 被称为被除数，`d` 被称为除数。如果其中的任意一个操作数为 `NaN`，或 `n` 为正负无穷（±Infinity），又或者 `d` 为 ±0，则该运算返回 `NaN`。否则，如果 `d` 为正负无穷（±Infinity），或 `n` 为 ±0，则返回被除数 `n`。

如果两个操作数都非零且有限（非正负无穷）时，余数 `r` 将通过 `r := n - d * q` 计算获得，其中 `q` 是一个使得 `r` 与被除数 `n` 具有相同符号，并且会使 `r` 尽可能地接近于 0 的整数。

请注意，虽然在大多数语言中，`%` 是取余运算符，但在某些语言（例如：[Python 和 Perl](https://zh.wikipedia.org/wiki/模除#定义与余数的计算)）中，它是取模运算符。取模运算被定义为 `k := n - d * q`，其中 `q` 是一个使得 `k` 与除数具有相同符号，并且会使 `k` 尽可能地接近于 0 的整数。对于同号的两根操作数，两者是等价的，但在操作数具有不同的符号时，取模运算的结果总是与*除数*同号，而取余运算则是余数与*被除数*同号，`d` 的符号即可使两者的结果不相同。为了在 JavaScript 中使用 `n % d` 实现取模运算，可以使用 `((n % d) + d) % d`。在 JavaScript 中，模运算（没有专用的运算符）用于规范化按位移位运算符（[`<<`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift)、[`>>`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Right_shift)，等等）的第二个操作数，以使得偏移量始终为一个正数。

## 示例

### 被除数为正数

```js
13 % 5; // 3
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5
```

### 被除数为负数

```js
-13 % 5; // -3
-1 % 2; // -1
-4 % 2; // -0
```

### 被除数为 NaN

```js
NaN % 2; // NaN
```

### 被除数为 Infinity

```js
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
2 % Infinity; // 2
0 % Infinity; // 0
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
- [幂运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [自增运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [自减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [一元加运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [取余运算和取模运算的区别](https://2ality.com/2019/08/remainder-vs-modulo.html)

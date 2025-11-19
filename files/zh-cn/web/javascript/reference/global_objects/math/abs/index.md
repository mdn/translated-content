---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
---

**`Math.abs(x)`** 函数返回一个数字的绝对值。

{{InteractiveExample("JavaScript Demo: Math.abs()")}}

```js interactive-example
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// Expected output: 2

console.log(difference(5, 3));
// Expected output: 2

console.log(difference(1.23456, 7.89012));
// Expected output: 6.6555599999999995
```

## 语法

```js-nolint
Math.abs(x)
```

### 参数

- `x`
  - : 一个数字。

### 返回值

`x` 的绝对值。如果 `x` 是负数（包括 `-0`），则返回 `-x`。否则，返回 `x`。

## 描述

由于 `abs()` 是 `Math` 中的一个静态方法，所以你应该通过 `Math.abs()` 调用，而不是作为你创建的 `Math` 对象的方法（`Math` 不是构造器）。

## 示例

### 使用 Math.abs()

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### 强制转换参数

`Math.abs()` 将其参数强制转换为数字。无法强制转换的值将变成 `NaN`，使 `Math.abs()` 也返回 `NaN`。

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}

---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Math.sin()`** 静态方法以弧度为单位返回一个数字的正弦值。

{{InteractiveExample("JavaScript Demo: Math.sin()")}}

```js interactive-example
function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}

console.log(getCircleY(1, 10));
// Expected output: 8.414709848078965

console.log(getCircleY(2, 10));
// Expected output: 9.092974268256818

console.log(getCircleY(Math.PI, 10));
// Expected output: 1.2246467991473533e-15
```

## 语法

```js-nolint
Math.sin(x)
```

### 参数

- `x`
  - : 一个数值（以弧度为单位）。

### 返回值

`x` 的正弦值，介于 -1 到 1 之间（包含 -1 和 1）。如果 `x` 为 {{jsxref("Infinity")}}、`-Infinity` 或 {{jsxref("NaN")}}，则返回 {{jsxref("NaN")}}。

## 描述

由于 `sin()` 是 `Math` 的静态方法，应该总是以 `Math.sin()` 的形式，而不是作为 `Math` 对象的方法来使用它（`Math` 不是构造函数）。

## 示例

### 使用 Math.sin()

```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}

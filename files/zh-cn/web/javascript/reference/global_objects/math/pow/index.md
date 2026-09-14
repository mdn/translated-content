---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
---

**`Math.pow()`** 函数返回基数（`base`）的指数（`exponent`）次幂，即 `base^exponent`。

{{InteractiveExample("JavaScript Demo: Math.pow()")}}

```js interactive-example
console.log(Math.pow(7, 3));
// Expected output: 343

console.log(Math.pow(4, 0.5));
// Expected output: 2

console.log(Math.pow(7, -2));
// Expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// Expected output: NaN
```

## 语法

```plain
Math.pow(base, exponent)
```

### 参数

- `base`
  - : 基数
- `exponent`
  - : 指数

## 描述

由于 `pow` 是 `Math` 的静态方法，所以应该像这样使用：`Math.pow()`，而不是作为你创建的 `Math` 对象的方法。

## 示例

### 使用 `Math.pow`

```js
function raisePower(x, y) {
  return Math.pow(x, y);
}
```

如果 `x` 是 2，且 `y` 是 7，则 raisePower 函数返回 128（2 的 7 次幂）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [乘方（`**`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)

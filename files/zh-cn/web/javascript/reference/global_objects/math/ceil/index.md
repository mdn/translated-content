---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
---

{{JSRef}}

**`Math.ceil()`** 静态方法总是向上舍入，并返回大于等于给定数字的最小整数。

{{EmbedInteractiveExample("pages/js/math-ceil.html")}}

## 语法

```js-nolint
Math.ceil(x)
```

### 参数

- `x`
  - : 一个数值。

### 返回值

大于等于 `x` 的最小整数。它的值与 [`-Math.floor(-x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 相同。

## 描述

因为 `ceil()` 是 `Math` 的静态方法，所以你应始终使用 `Math.ceil()`，而不是作为你创建的 `Math` 对象的方法（`Math` 不是构造函数）。

## 示例

### 使用 Math.ceil()

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}

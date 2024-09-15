---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
---

{{JSRef}}

## 概述

**`Math.sin()`** 静态方法返回一个弧度的正弦值。

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## 语法

```js-nolint
Math.sin(x)
```

### 参数

- `x`
  - : 一个数值（以弧度为单位）。

## 描述

`x` 的正弦值，介于 -1 到 1 之间（包含 -1 和 1）。如果 `x` 为 {{jsxref("Infinity")}}、`-Infinity` 或 {{jsxref("NaN")}},则返回 {{jsxref("NaN")}}。

由于 `sin` 是 `Math` 的静态方法，所以应该像这样使用：`Math.sin()`，而不是作为你创建的 `Math` 实例的方法（`Math` 不是构造函数）。

## 示例

### 示例：使用 `Math.sin`

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

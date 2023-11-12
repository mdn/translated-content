---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.sin()`** 函数返回一个数值的正弦值。

## 语法

```plain
Math.sin(x)
```

### 参数

- `x`
  - : 一个数值（以弧度为单位）。

## 描述

`sin` 方法返回一个 -1 到 1 之间的数值，表示给定角度（单位：弧度）的正弦值。

由于 `sin` 是 `Math` 的静态方法，所以应该像这样使用：`Math.sin()`，而不是作为你创建的 `Math` 实例的方法。

## 示例

### 示例：使用 `Math.sin`

```js
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}

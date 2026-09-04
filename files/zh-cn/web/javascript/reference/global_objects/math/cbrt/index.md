---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
---

**`Math.cbrt()`** 函数返回任意数字的立方根。

## 语法

```plain
Math.cbrt(x)
```

### 参数

- `x`
  - : 任意数字。

### 返回值

给定数字的立方根

## 描述

该方法为 Math 的静态方法，因此请直接通过 Math.cbrt() 方式调用。

而不是作为你创建的 Math 对象的方法 (Math 不是构造函数)。

cbrt 是 "cube root" 的缩写，意思是立方根。

## 示例

### 使用 Math.cbrt()

```js
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2); // 1.2599210498948732
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}

---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
---

{{JSRef}}

**`Math.sign()`** 函数返回一个数字的符号，指示数字是正数，负数还是零。

## 语法

```plain
Math.sign(x);
```

### 参数

- `x`
  - : 任意数字。

## 描述

因为 `sign` 是 `Math` 的一个静态方法，所以你应该使用 Math.sign()，而不是作为你创建的一个 Math 对象的一种方法（Math 不是一个构造函数）。

此函数共有 5 种返回值，分别是 **1, -1, 0, -0, NaN.** 代表的各是**正数，负数，正零，负零，NaN**。

传入该函数的参数会被**隐式转换**成数字类型。

## 示例

### 使用 Math.sign()

```js
Math.sign(3); //  1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); //  0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Math.sign` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}

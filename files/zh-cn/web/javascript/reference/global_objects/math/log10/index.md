---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
---

{{JSRef}}

## 概述

**`Math.log10()`** 函数返回一个数字以 10 为底的对数。

## 语法

```plain
Math.log10(x)
```

### 参数

- `x`
  - : 任意数字。

## 描述

如果传入的参数小于 0，则返回 NaN.

## 示例

```js
Math.log10(10); // 1
Math.log10(100); // 2
Math.log10("100"); // 2
Math.log10(1); // 0
Math.log10(0); // -Infinity
Math.log10(-2); // NaN
Math.log10("foo"); // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Math.log10` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}

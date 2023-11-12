---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.exp()`** 函数返回 `e^x`，`x` 表示参数，`e` 是[欧拉常数（Euler's constant）](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/E)，自然对数的底数。

## 语法

```plain
Math.exp(x)
```

### 参数

- `x`
  - : 一个数值

## 描述

由于 `exp` 是 `Math` 的静态方法，所以应该像这样使用：`Math.exp()`，而不是作为你创建的 `Math` 实例的方法。

## 示例

### 示例：使用 `Math.exp`

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
- {{jsxref("Math.E")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}

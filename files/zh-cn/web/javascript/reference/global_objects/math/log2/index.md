---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.log2()`** 函数返回一个数字以 2 为底的对数。

## 语法

```plain
Math.log2(x)
```

### 参数

- `x`
  - : 任意数字。

## 描述

如果传入的参数小于 0，则返回 `NaN`.

## 示例

```js
Math.log2(2); // 1
Math.log2(1024); // 10
Math.log2(1); // 0
Math.log2(0); // -Infinity
Math.log2(-2); // NaN
Math.log2("1024"); // 10
Math.log2("foo"); // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Global_Objects/Math", "Math")}} 对象。

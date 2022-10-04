---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.expm1()`** 函数返回 `E^x - 1`, 其中 `x` 是该函数的参数，`E` 是自然对数的底数 `2.718281828459045`。

## 语法

```plain
Math.expm1(x)
```

### 参数

- `x`
  - : 任意数字。

## 描述

参数 `x` 会被自动类型转换成 `number` 类型。

`expm1` 是 "exponent minus 1" 的缩写。

## 示例

```js
Math.expm1(1)     // 1.7182818284590453
Math.expm1(-38)   // -1
Math.expm1("-38") // -1
Math.expm1("foo") // NaN
```

## Polyfill

因为我们已经有了 `Math.exp` 函数，所以很容易 polyfill。

```js
Math.expm1 = Math.expm1 || function (x) {
    return Math.exp(x) - 1
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Global_Objects/Math", "Math")}} 对象。

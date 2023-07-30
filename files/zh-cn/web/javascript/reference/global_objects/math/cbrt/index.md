---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
---

{{JSRef("Global_Objects", "Math")}}

## 概述

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

而不是作为您创建的 Math 对象的方法 (Math 不是构造函数)。

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

## Polyfill

为了与旧版浏览器兼容，可使用下方函数模拟 cbrt():

```js
if (!Math.cbrt) {
  Math.cbrt = function (x) {
    var y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y;
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参见

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}

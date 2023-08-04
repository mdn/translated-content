---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.sinh()`** 函数返回一个数字 (单位为角度) 的双曲正弦值。

## 语法

```plain
Math.sinh(x)
```

### 参数

- `x`
  - : 任意数字 (单位为度).

## 描述

双曲正弦的图像如下：

![](http://upload.wikimedia.org/wikipedia/commons/1/17/Sinh.png)

## 示例

```js
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
Math.sinh("-1"); // -1.1752011936438014
Math.sinh("foo"); // NaN
```

## 规范

{{Specifications}}

## Polyfill

该函数可以使用 {{jsxref("Math.exp()")}} 函数来实现：

```js
function sinh(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
}
```

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}

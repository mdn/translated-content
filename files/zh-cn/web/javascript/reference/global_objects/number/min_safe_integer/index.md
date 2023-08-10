---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---

{{JSRef}}

**`Number.MIN_SAFE_INTEGER`** 代表在 JavaScript 中最小的安全的 integer 型数字 (`-(2^53 - 1)`)。

{{js_property_attributes(0, 0, 0)}}

## 描述

`MIN_SAFE_INTEGER` 的值是`-9007199254740991`. 形成这个数字的原因是 JavaScript 在 [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point)中使用[double-precision floating-point format numbers](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) 作为规定。在这个规定中能安全的表示数字的范围在`-(2^53 - 1)` 到 `2^53 - 1`之间。

`由于 MIN_SAFE_INTEGER` 是 {{jsxref("Number")}} 的一个静态属性，你可以直接使用`Number.MIN_SAFE_INTEGER`, 而不是自己去创建一个 {{jsxref("Number")}} 的属性。

## 示例

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(Math.pow(2, 53) - 1); // -9007199254740991
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}

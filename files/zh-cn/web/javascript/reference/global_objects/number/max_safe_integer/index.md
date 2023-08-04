---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---

{{JSRef}}

**`Number.MAX_SAFE_INTEGER`** 静态数据属性表示在 JavaScript 中最大的安全整数（2<sup>53</sup> – 1）。

{{js_property_attributes(0, 0, 0)}}

## 描述

`MAX_SAFE_INTEGER` 是一个值为 9007199254740991 的常量。因为 Javascript 的数字存储使用了 [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point) 中规定的[双精度浮点数](https://zh.wikipedia.org/zh-cn/%E9%9B%99%E7%B2%BE%E5%BA%A6%E6%B5%AE%E9%BB%9E%E6%95%B8)数据类型，而这一数据类型能够安全存储 `-(2^53 - 1)` 到 `2^53 - 1` 之间的数值（包含边界值）。

这里安全存储的意思是指能够准确区分两个不相同的值，例如 `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` 将得到 true 的结果，而这在数学上是错误的，参考{{jsxref("Number.isSafeInteger()")}}获取更多信息。

由于 `MAX_SAFE_INTEGER` 是 {{jsxref("Number")}} 的一个静态属性，所以你可以直接以 `Number.MAX_SAFE_INTEGER` 的形式使用这一属性，而无需作为数值属性来使用。

## 示例

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
Math.pow(2, 53) - 1; // 9007199254740991
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}

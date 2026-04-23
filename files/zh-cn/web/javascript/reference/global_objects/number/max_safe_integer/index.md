---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---

**`Number.MAX_SAFE_INTEGER`** 静态数据属性表示在 JavaScript 中最大的安全整数（2<sup>53</sup> – 1）。

对于更大的整数，请考虑使用 {{jsxref("BigInt")}}。

{{InteractiveExample("JavaScript Demo: Number.MAX_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

console.log(x);
// Expected output: 9007199254740992

console.log(x === y);
// Expected output: true
```

## 值

`9007199254740991`（9,007,199,254,740,991，或者约 9 千万亿）。

{{js_property_attributes(0, 0, 0)}}

## 描述

[双精度浮点格式](https://zh.wikipedia.org/wiki/雙精度浮點數)只有 52 位用于表示[尾数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_编码)，因此它只能安全地表示介于 -(2<sup>53</sup> – 1) 和 2<sup>53</sup> – 1 之间的整数。本文中，“安全”指的是能够精确表示整数并正确比较它们。例如，`Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` 的结果将为真，这在数学上是不正确的。有关更多信息，请参阅 {{jsxref("Number.isSafeInteger()")}}。

由于 `MAX_SAFE_INTEGER` 是 {{jsxref("Number")}} 的静态属性，你应该始终将其使用为 `Number.MAX_SAFE_INTEGER`，而不是一个数字值的属性。

## 示例

### MAX_SAFE_INTEGER 的返回值

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### MAX_SAFE_INTEGER 和 EPSILON 之间的关系

{{jsxref("Number.EPSILON")}} 是 2<sup>-52</sup>，而 `MAX_SAFE_INTEGER` 是 2<sup>53</sup> – 1，它们都源自尾数的宽度，即 53 位（最高位始终为 1）。将它们相乘会得到一个非常接近但不等于 2 的值。

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.MAX_SAFE_INTEGER` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}

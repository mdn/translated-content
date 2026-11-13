---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---

**`Number.MIN_SAFE_INTEGER`** 静态数据属性代表在 JavaScript 中最小的安全整数 -(2<sup>53</sup> - 1)。

要表示比这小的整数，请考虑使用 {{jsxref("BigInt")}}。

{{InteractiveExample("JavaScript Demo: Number.MIN_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

console.log(x);
// Expected output: -9007199254740992

console.log(x === y);
// Expected output: true
```

## 值

`-9007199254740991`（-9,007,199,254,740,991，或大约 -9 千万亿）。

{{js_property_attributes(0, 0, 0)}}

## 描述

[双精度浮点格式](https://zh.wikipedia.org/wiki/雙精度浮點數)只有 52 位用于表示[尾数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_编码)，因此它只能安全地表示介于 -(2<sup>53</sup> – 1) 和 2<sup>53</sup> – 1 之间的整数。本文中，“安全”指的是能够精确表示整数并正确比较它们。例如，`Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` 的结果将为真，这在数学上是不正确的。有关更多信息，请参阅 {{jsxref("Number.isSafeInteger()")}}。

由于 `MIN_SAFE_INTEGER` 是 {{jsxref("Number")}} 的静态属性，你应该始终将其使用为 `Number.MIN_SAFE_INTEGER`，而不是一个数字值的属性。

## 示例

### 使用 MIN_SAFE_INTEGER

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.MIN_SAFE_INTEGER` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}

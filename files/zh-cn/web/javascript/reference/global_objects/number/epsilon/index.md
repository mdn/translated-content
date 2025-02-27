---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
---

{{JSRef}}

**`Number.EPSILON`** 静态数据属性表示 1 与大于 1 的最小浮点数之间的差值。

{{InteractiveExample("JavaScript Demo: Number.EPSILON")}}

```js interactive-example
const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// Expected output: 2.7755575615628914e-17

console.log(result < Number.EPSILON);
// Expected output: true
```

## 值

2<sup>-52</sup>，或大约 `2.2204460492503130808472633361816E-16`。

{{js_property_attributes(0, 0, 0)}}

## 描述

`Number.EPSILON` 是数字中 1 和可表示的比 1 大的最小数字之间的差值，因为[双精度浮点格式](https://zh.wikipedia.org/wiki/雙精度浮點數)只有 52 位来表示[尾数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_编码)，并且最低位的有效值为 2<sup>-52</sup>。

请注意，浮点数的绝对精度随着数字变大而降低，因为指数增长而尾数的精度保持不变。{{jsxref("Number.MIN_VALUE")}} 是可表示的最小正数，远小于 `Number.EPSILON`。

由于 `EPSILON` 是 {{jsxref("Number")}} 的静态属性，因此你应该始终将其用作 `Number.EPSILON`，而不是作为数字值的属性。

## 示例

### 相等测试

任何占用位数有限的数字编码系统，无论你选择的是什么基数（例如十进制或二进制），都*必定*无法精确表示所有数字，因为你试图使用有限的内存来表示数轴上无限数量的点。例如，十进制系统无法准确表示 1/3，而二进制系统无法准确表示 `0.1`。因此，例如，`0.1 + 0.2` 并不完全等于 `0.3`：

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

因此，通常建议**不要使用 `===` 比较浮点数**。相反，我们可以认为两个数在彼此之间是*足够接近*的时候它们是相等的。如果算术运算的数量级在 `1` 附近，那么 `Number.EPSILON` 常数通常是一个合理的误差阈值，因为实质上，`EPSILON` 指定了数字“1”的精确度。

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

然而，对于任何具有更大数量级的算术运算，`Number.EPSILON` 是不适用的。如果你的数据数量级在 10<sup>3</sup> 的范围，那么小数部分的精确度将远远小于`Number.EPSILON`：

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(x + y); // 2000.3000000000002；误差为 10^-13 而不是 10^-16
console.log(equal(x + y, z)); // false
```

在这种情况下，需要更大的容差。由于进行比较的数字的数量级大约为 `2000`，使用类似于 `2000 * Number.EPSILON` 的乘积可以为此情况提供足够的容差。

```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

除了数量级之外，考虑输入的*精度*也非常重要。例如，如果数字是从表单输入收集的，并且输入值只能以 `0.1` 的步长调整（即 [`<input type="number" step="0.1">`](/zh-CN/docs/Web/HTML/Attributes/step)），通常可以允许更大的容差，例如 `0.01`，因为数据的精度只有 `0.1`。

> [!NOTE]
> 重点是：不要简单地将 `Number.EPSILON` 作为相等性测试的阈值。使用适合要比较的数字的数量级和精度的阈值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.EPSILON` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}

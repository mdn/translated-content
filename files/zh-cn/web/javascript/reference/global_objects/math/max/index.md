---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
---

{{JSRef}}

**`Math.max()`** 函数返回作为输入参数的最大数字，如果没有参数，则返回 -{{jsxref("Infinity")}}。

{{InteractiveExample("JavaScript Demo: Math.max()")}}

```js interactive-example
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3
```

## 语法

```js-nolint
Math.max()
Math.max(value0)
Math.max(value0, value1)
Math.max(value0, value1, /* … ,*/ valueN)
```

### 参数

- `value1`, `value2`, … , `valueN`
  - : 0 个或多个数字，将在其中选择，并返回最大的值。

### 返回值

给定数值中最大的数。如果任一参数不能转换为数值，则返回 {{jsxref("NaN")}}。如果没有提供参数，返回 -{{jsxref("Infinity")}}。

## 描述

因为 `max()` 是 `Math` 的静态方法，所以你应始终使用 `Math.max()`，而不是作为你创建的 `Math` 对象的方法（`Math` 不是构造函数）。

[`Math.max.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length) 是 2，这从某种程度上表明了它旨在处理至少两个参数。

## 示例

### 使用 Math.max()

```js
Math.max(10, 20); //  20
Math.max(-10, -20); // -10
Math.max(-10, 20); //  20
```

### 获取数组的最大元素

{{jsxref("Array.prototype.reduce()")}} 可以用来查找最大值元素，通过比较每个值：

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

下面的方法使用 {{jsxref("Function.prototype.apply()")}} 来获取数组的最大值。`getMaxOfArray([1, 2, 3])` 相当于 `Math.max(1, 2, 3)`，但是你可以使用 `getMaxOfArray()` 作用于任意长度的数组上。这应该只用于元素相对较少的数组。

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)是编写 `apply` 解决方案的一种更简短的方法，可以最大限度地利用数组：

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

但是，如果数组有太多的元素，展开语法（`...`）和 `apply` 都将失败或返回错误的结果，因为它们试图将数组元素作为函数形参传递。参见[使用 apply 和内置函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#使用_apply_和内置函数)了解更多细节。`reduce` 解决方案不存在这个问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.min()")}}

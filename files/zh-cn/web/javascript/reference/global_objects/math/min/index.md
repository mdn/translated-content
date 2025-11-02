---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
---

**`Math.min()`** 函数返回作为输入参数的数字中最小的一个，如果没有参数，则返回 {{jsxref("Infinity")}}。

{{InteractiveExample("JavaScript Demo: Math.min()")}}

```js interactive-example
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1
```

## 语法

```js-nolint
Math.min()
Math.min(value0)
Math.min(value0, value1)
Math.min(value0, value1, /* … ,*/ valueN)
```

### 参数

- `value1`, …, `valueN`
  - : 0 个或多个数字，将在其中选择，并返回最小值。

### 返回值

给定数值中最小的数。如果任一参数不能转换为数值，则返回 {{jsxref("NaN")}}。如果没有提供参数，返回 {{jsxref("Infinity")}}。

## 描述

因为 `min()` 是 `Math` 的静态方法，所以你应始终使用 `Math.min()`，而不是作为你创建的 `Math` 对象的方法（`Math` 不是构造函数）。

[`Math.min.length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length) 是 2，这从某种程度上表明了它旨在处理至少两个参数。

## 示例

### 使用 Math.min()

下例找出 `x` 和 `y` 的最小值，并把它赋值给 `z`：

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### 使用 Math.min() 裁剪值

`Math.min()` 经常用于裁剪一个值，以便使其总是小于或等于某个边界值。例如：

```js
let x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

可以写成：

```js
const x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} 可以以类似的方式用于在另一端裁剪一个值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.max()")}}

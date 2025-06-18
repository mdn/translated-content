---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
---

{{JSRef}}

**`fill()`** 方法用一个固定值填充一个数组中从起始索引（默认为 `0`）到终止索引（默认为 `array.length`）内的全部元素。它返回修改后的数组。

{{InteractiveExample("JavaScript Demo: Array.fill()")}}

```js interactive-example
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

## 语法

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### 参数

- `value`
  - : 用来填充数组元素的值。注意所有数组中的元素都将是这个确定的值：如果 `value` 是个对象，那么数组的每一项都会引用这个元素。
- `start` {{optional_inline}}
  - : 基于零的索引，从此开始填充，[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 负数索引从数组的末端开始计算，如果 `start < 0`，则使用 `start + array.length`。
    - 如果 `start < -array.length` 或 `start` 被省略，则使用 `0`。
    - 如果 `start >= array.length`，没有索引被填充。
- `end` {{optional_inline}}
  - : 基于零的索引，在此结束填充，[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。`fill()` 填充到但不包含 `end` 索引。
    - 负数索引从数组的末端开始计算，如果 `end < 0`，则使用 `end + array.length`。
    - 如果 `end < -array.length`，则使用 `0`。
    - 如果 `end >= array.length` 或 `end` 被省略，则使用 `array.length`，导致所有索引都被填充。
    - 如果经标准化后，`end` 的位置在 `start` 之前或之上，没有索引被填充。

### 返回值

经 `value` 填充修改后的数组。

## 描述

`fill()` 是个[修改方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)，不会改变 `this` 的长度，但会改变 `this` 的内容。

`fill()` 也会使用 `value` 填充[稀疏](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)数组的空槽。

`fill()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值有一个 `length` 属性。虽然字符串也是类似数组的，但这个方法不适合应用于它们，因为字符串是不可变的。

> [!NOTE]
> 在一个空数组（`length = 0`）上使用 `Array.prototype.fill()` 不会对其进行修改，因为数组没有要修改的内容。要在声明一个数组时使用 `Array.prototype.fill()`，请确保数组的 `length` 不为零。[参见示例](#使用_fill_填充空数组)。

## 示例

### 使用 fill

```js
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// 一个简单的对象，被数组的每个空槽所引用
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### 使用 fill() 创建全 1 矩阵

此示例演示了如何创建全 1 的矩阵，就像 Octave 或 MATLAB 的 `ones()` 函数做到的那样。

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 创建一个大小为 4 的数组，填充全 1
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### 使用 fill() 填充空数组

此示例演示了如何填充数组，将所有值设定为一个特定的值。无需指定 `end` 参数。

```js
const tempGirls = Array(5).fill("girl", 0);
```

注意，数组最初为[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，没有分配索引。`fill()` 仍然可以填充这个数组。

### 在非数组对象上调用 fill()

`fill()` 方法读取 `this` 的 `length` 属性，并设置从 `start` 到 `end` 的每个整数属性的值。

```js
const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.fill` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}

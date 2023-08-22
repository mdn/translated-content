---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
---

{{JSRef}}

**`reduceRight()`** 方法对累加器（accumulator）和数组的每个值（按从右到左的顺序）应用一个函数，并使其成为单个值。

对于从左至右遍历的相似方法，请参阅 {{jsxref("Array.prototype.reduce()")}}。

{{EmbedInteractiveExample("pages/js/array-reduce-right.html","shorter")}}

## 语法

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。其返回值将作为下一次调用 `callbackFn` 时的 `accumulator` 参数。对于最后一次调用，返回值将成为 `reduceRight()` 的返回值。该函数被调用时将传入以下参数：
    - `accumulator`
      - : 上一次调用 `callbackFn` 的结果。在第一次调用时，如果指定了 `initialValue` 则为指定的值，否则为数组最后一个元素的值。
    - `currentValue`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `reduceRight()` 的数组本身。
- `initialValue` {{optional_inline}}
  - : 首次调用 `callbackFn` 时累加器的值。如果不提供初始值，则将使用数组中的最后一个元素，并在迭代时跳过它。没有初始值的情况下，在空数组上调用 `reduceRight()` 会产生 `TypeError`。

### 返回值

聚合后的结果值。

## 描述

`reduceRight()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它为数组中的所有元素降序调用“reducer”回调函数，并将它们累积到一个单一的值中。

`callbackFn` 仅为已分配值的数组索引调用。它不会为[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽调用。

与其他[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)不同，`reduceRight()` 不接受 `thisArg` 参数。`callbackFn` 调用时始终以 `undefined` 作为 `this` 的值，如果 `callbackFn` 未处于严格模式，则该值将被替换为 `globalThis`。

`reduceRight()` 不会改变被调用的数组，但是作为 `callbackFn` 提供的函数可能会改变数组。但需要注意的是，在第一次调用 `callbackFn` _之前_，数组的长度会被保存。因此：

- 当开始调用 `reduceRight()` 时，`callbackFn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果数组中一个现有的、尚未访问的元素被 `callbackFn` 更改，则它传递给 `callbackFn` 的值将是该元素被修改后的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素则不会被访问。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`reduceRight()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 无初始值时 reduceRight() 如何运行

`reduceRight()` 方法调用 `callbackFn` 的格式如下：

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

在第一次调用函数时，`accumulator` 和 `currentValue` 的可能取值情况有两种。如果在调用 `reduceRight` 时提供了 `initialValue`，那么 `accumulator` 将等于 `initialValue`，而 `currentValue` 将等于数组中的最后一个值。如果没有提供 `initialValue`，则 `accumulator` 将等于数组中的最后一个值，而 `currentValue` 将等于倒数第二个值。

如果数组为空且没有提供 `initialValue`，则会抛出 {{jsxref("TypeError")}} 异常。如果数组只有一个元素（无论其位置如何）且没有提供 `initialValue`，或者提供了 `initialValue` 但数组为空，则直接返回该单个值，且 `callbackFn` 不会被调用。

这个函数的一些示例运行如下：

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);
```

一共会调用四次回调函数，每次调用的参数及返回值如下：

|            | `accumulator` | `currentValue` | `index` | 返回值 |
| ---------- | ------------- | -------------- | ------- | ------ |
| 第一次调用 | `4`           | `3`            | `3`     | `7`    |
| 第二次调用 | `7`           | `2`            | `2`     | `9`    |
| 第三次调用 | `9`           | `1`            | `1`     | `10`   |
| 第四次调用 | `10`          | `0`            | `0`     | `10`   |

`array` 参数在整个过程中始终不变，始终为 `[0, 1, 2, 3, 4]`。`reduceRight` 返回的值将是最后一次回调函数调用的返回值（`10`）。

### 有初始值时 reduceRight() 如何运行

这里我们使用相同的算法对同一数组进行 reduce，但是将 `initialValue` 参数设置为 `10`，作为第二个参数传递给 `reduceRight()` 方法：

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10,
);
```

|            | `accumulator` | `currentValue` | `index` | 返回值 |
| ---------- | ------------- | -------------- | ------- | ------ |
| 第一次调用 | `10`          | `4`            | `4`     | `14`   |
| 第二次调用 | `14`          | `3`            | `3`     | `17`   |
| 第三次调用 | `17`          | `2`            | `2`     | `19`   |
| 第四次调用 | `19`          | `1`            | `1`     | `20`   |
| 第五次调用 | `20`          | `0`            | `0`     | `20`   |

这次，`reduceRight` 返回值为 `20`。

### 求一个数组中所有值的和

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum 的值是 6
```

### 展平一个二维数组

```js
const arrays = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const flattened = arrays.reduceRight((a, b) => a.concat(b), []);
// flattened 的值是 [4, 5, 2, 3, 0, 1]
```

### 串联运行一列异步函数，每个函数都将其结果传给下一个函数

```js
const waterfall =
  (...functions) =>
  (callback, ...args) =>
    functions.reduceRight(
      (composition, fn) =>
        (...results) =>
          fn(composition, ...results),
      callback,
    )(...args);

const randInt = (max) => Math.floor(Math.random() * max);

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5); // Logs 14

// same as:

const computation2 = (input, callback) => {
  const f6 = (x) => div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = (x) => split(f5, x);
  const f3 = (x) => sub2(f4, x);
  const f2 = (x) => mult3(f3, x);
  add5(f2, input);
};
```

### `reduce` 与 `reduceRight` 之间的区别

```js
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left); // "12345"
console.log(right); // "54321"
```

### 定义可组合函数

函数组合是一种将函数组合在一起的机制，其中每个函数的输出都作为下一个函数的输入，最后一个函数的输出是最终的结果。在这个例子中，我们使用 `reduceRight()` 来实现函数组合。

参见维基百科上的[函数组合](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>)。

```js
const compose =
  (...args) =>
  (value) =>
    args.reduceRight((acc, fn) => fn(acc), value);

// Increment passed number
const inc = (n) => n + 1;

// Doubles the passed value
const double = (n) => n * 2;

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5
```

### 在稀疏数组中使用 reduceRight()

`reduceRight()` 会跳过稀疏数组中缺失的元素，但不会跳过 `undefined` 值。

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### 在非数组对象上调用 reduceRight()

`reduceRight()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.reduceRight.call(arrayLike, (x, y) => x - y));
// -1, 即 4 - 3 - 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.reduce` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}

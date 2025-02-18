---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---

{{JSRef}}

**`flatMap()`** 方法对数组中的每个元素应用给定的回调函数，然后将结果展开一级，返回一个新数组。它等价于在调用 {{jsxref("Array.prototype.map","map()")}} 方法后再调用深度为 1 的 {{jsxref("Array.prototype.flat","flat()")}} 方法（`arr.map(...args).flat()`），但比分别调用这两个方法稍微更高效一些。

{{InteractiveExample("JavaScript Demo: Array.flatMap()", "shorter")}}

```js interactive-example
const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
```

## 语法

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 一个在数组的每个元素上执行的函数。它应该返回一个包含新数组元素的数组，或是要添加到新数组中的单个非数组值。该函数将被传入以下参数：
    - `element`
      - : 数组中正在处理的当前元素。
    - `index`
      - : 数组中正在处理的当前元素的索引。
    - `array`
      - : 调用 `flatMap()` 的当前数组。
- `thisArg` {{optional_inline}}
  - : 在执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

一个新的数组，其中每个元素都是回调函数的结果，并且被展开一级。

## 描述

`flatMap()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。有关回调函数的详细说明，请参见 {{jsxref("Array.prototype.map()")}}。`flatMap()` 方法等同于调用 [`map(callbackFn, thisArg)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 后再调用 [`flat(1)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)——对于每个元素，它都会生成一个新元素数组，并将生成的数组连接起来形成一个新数组。

`flatMap()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只需要 `this` 值具有 `length` 属性和整数键属性即可。但是，如果要展开从回调函数 `callbackFn` 返回的值，则该值必须是数组。

### 替代方案

#### 预分配数组并显式迭代

```js
const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// 等价于
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
```

需要注意的是，在这种特定情况下，`flatMap` 方法的性能比 for 循环要慢——因为需要创建临时数组并进行垃圾回收，同时返回的数组不需要经常调整大小。但是，在注重灵活性和可读性的情况下，`flatMap` 仍可能是正确的解决方案。

## 示例

### map() 与 flatMap()

```js
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// 只有一层被展平
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

虽然上面的示例可以通过使用 `map()` 方法自行实现，但下面的示例更好地展示了 `flatMap()` 方法的用法。

让我们从一组句子中生成单词列表。

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

请注意，输出列表长度可能与输入列表长度不同。

### 在 `map()` 方法过程中添加和删除元素

`flatMap` 方法可以用作在 `map` 方法中添加和删除元素（修改元素数量）的方法。换句话说，它允许你将*一些项处理为另一些项*（通过单独处理每个输入项），而不总是*一对一*的。在这个意义上，它的作用类似于 [filter](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 的相反操作。如果要保留该项，则返回一个包含该项的单元素数组，如果要添加元素，则返回一个包含多个元素的数组，如果要删除该项，则返回一个空数组。

```js
// 假设我们想要删除所有负数，并将奇数拆分成偶数和 1
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(result); // [4, 1, 4, 20, 16, 1, 18]
```

### 在稀疏数组上使用 flatMap()

`callbackFn` 不会被源数组中的空槽调用，因为 `map()` 不会调用，而 `flat()` 将忽略返回数组中的空槽。

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### 在非数组对象上调用 flatMap()

`flatMap()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。如果回调函数的返回值不是数组，则始终直接将其附加到结果数组的末尾。

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// 回调函数返回的类数组对象不会被展平
console.log(
  Array.prototype.flatMap.call(arrayLike, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.flatMap` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}

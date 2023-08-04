---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
---

{{JSRef}}

**`every()`** 方法测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值。

{{EmbedInteractiveExample("pages/js/array-every.html","shorter")}}

## 语法

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)以指示元素通过测试，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `every()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

如果 `callbackFn` 为每个数组元素返回[真值](/zh-CN/docs/Glossary/Truthy)，则为 `true`。否则为 `false`。

## 描述

`every()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它为数组中的每个元素调用一次指定的 `callbackFn` 函数，直到 `callbackFn` 返回一个[假值](/zh-CN/docs/Glossary/Falsy)。如果找到这样的元素，`every()` 方法将会立即返回 `false` 并停止遍历数组。否则，如果 `callbackFn` 为每个元素返回一个[真值](/zh-CN/docs/Glossary/Truthy)，`every()` 就会返回 `true`。

`every` 和数学中的全称量词"任意（∀）"类似。特别的，对于空数组，它只返回 `true`。（这种情况属于[无条件正确](https://en.wikipedia.org/wiki/Vacuous_truth)，因为[空集](https://zh.wikipedia.org/wiki/空集)的所有元素都符合给定的条件。）

`callbackFn` 仅针对已分配值的数组索引调用。它不会为[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽调用。

`every()` 不会改变调用它的数组，但指定的 `callbackFn` 函数可以。但是请注意，数组的长度是在第一次调用 `callbackFn` *之前*保存的。所以：

- 当开始调用 `every()` 时，`callbackFn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果数组中一个现有的、尚未访问的元素被 `callbackFn` 更改，则它传递给 `callbackFn` 的值将是该元素被修改后的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素则不会被访问。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`every()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 检查所有数组元素的大小

下例测试数组中的所有元素是否都大于 10。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### 检查一个数组是否是另一个数组的子集

下面的示例测试一个数组的所有元素是否都存在于另一个数组中。

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### 在稀疏数组上使用 every()

`every()` 不会在空槽上运行它的断言函数。

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### 影响初始数组（修改、添加和删除）

以下示例测试修改数组时 `every` 方法的行为。

```js
// --------------
//   修 改 元 素
// --------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1]--;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// 循环会迭代 3 次
// 没有修改的情况下只会迭代 2 次
//
// 第 1 次迭代：[1,1,3,4][0] -> 1
// 第 2 次迭代：[1,1,2,4][1] -> 1
// 第 3 次迭代：[1,1,2,3][2] -> 2

// --------------
//   添 加 元 素
// --------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// 循环迭代 3 次，即使在添加新元素之后
//
// 第 1 次迭代：[1, 2, 3, new][0] -> 1
// 第 2 次迭代：[1, 2, 3, new, new][1] -> 2
// 第 3 次迭代：[1, 2, 3, new, new, new][2] -> 3

// --------------
//   删 除 元 素
// --------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// 循环仅迭代 2 次
// 因为剩余的元素被 `pop()` 删除
//
// 第 1 次迭代：[1,2,3][0] -> 1
// 第 2 次迭代：[1,2][1] -> 2
```

### 在非数组对象上调用 every()

`every()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引，直到到达末尾或 `callbackFn` 返回 `false`。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.every` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}

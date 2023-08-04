---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---

{{JSRef}}

**`findIndex()`** 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

另请参阅 {{jsxref("Array/find", "find()")}} 方法，它返回满足测试函数的第一个元素（而不是它的索引）。

{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}

## 语法

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)以指示已找到匹配元素，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `findIndex()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

数组中第一个满足测试条件的元素的索引。否则返回 `-1`。

## 描述

`findIndex()` 是一种[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它按照索引升序依次遍历数组中的每个元素，并调用提供的 `callbackFn` 函数，直到 `callbackFn` 返回一个[真值](/zh-CN/docs/Glossary/Truthy)。然后 `findIndex()` 返回该元素的索引并停止遍历数组。如果 `callbackFn` 从未返回一个真值，则 `findIndex()` 返回 `-1`。

`callbackFn` 被调用来处理数组的*每一个*索引，而不仅仅是那些有值的索引。在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中，未赋值的空槽与 `undefined` 表现相同。

`findIndex()` 不会改变被调用的数组，但是提供给 `callbackFn` 的函数可能会改变它。但需要注意的是，在第一次调用 `callbackFn` _之前_，数组的长度会被保存。因此：

- 当调用 `findIndex()` 时，`callbackFn` 不会访问超出数组初始长度的任何元素。
- 对已经访问过的索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果 `callbackFn` 改变了数组中已存在但尚未被访问的元素，则传递给 `callbackFn` 的该元素的值将是该元素在被访问时的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素被视为 `undefined`。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`findIndex()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 寻找数组中的首个素数的索引

以下示例返回数组中第一个素数的索引，如果没有素数则返回 `-1`。

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1，没有找到
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2（array[2] 是 7）
```

### 在稀疏数组上使用 findIndex()

你可以搜索稀疏数组中的 `undefined` 并来获取空槽的索引。

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### 在非数组对象上调用 findIndex()

`findIndex()` 方法读取 `this` 的 `length` 属性，并访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.findIndex` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}

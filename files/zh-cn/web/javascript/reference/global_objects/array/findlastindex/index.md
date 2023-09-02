---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
---

{{JSRef}}

**`findLastIndex()`** 方法反向迭代数组，并返回满足所提供的测试函数的第一个元素的索引。若没有找到对应元素，则返回 -1。

另请参见 {{jsxref("Array.findLast()", "findLast()")}} 方法，该方法返回最后一个满足测试函数的元素的值（而不是它的索引）。

{{EmbedInteractiveExample("pages/js/array-findlastindex.html","shorter")}}

## 语法

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### 参数

- `callbackFn`

  - : 对数组中的每个元素执行的函数。回调必须返回一个[真值](/zh-CN/docs/Glossary/Truthy)，表示已找到匹配的元素，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。函数在被调用时会传递以下参数：
    - `element`
      - : 当前遍历到的元素。
    - `index`
      - : 当前正在处理的元素的索引。
    - `array`
      - : 调用 `findLastIndex()` 的数组本身。

- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时，用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

数组中通过测试的最后一个（索引最大）元素的索引。如果没有找到任何匹配的元素，则返回 -1。

## 描述

`findLastIndex()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它为数组中的每个元素按索引降序调用一次提供的 `callbackFn` 函数，直到 `callbackFn` 返回一个[真值](/zh-CN/docs/Glossary/Truthy)。然后 `findLastIndex()` 返回元素的索引并且停止遍历数组。如果 `callbackFn` 没有返回一个真值，则 `findLastIndex()` 返回 `-1`。

`callbackFn` 会为数组中的*每个*元素调用，而不仅仅是那些被赋值的元素，这意味着对于[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)来说，空槽的行为和 `undefined` 相同。

`findLastIndex()` 方法不会改变调用它的数组，但是提供的 `callbackFn` 可以。但是请注意，数组的长度是在第一次调用 `callbackFn` *之前*保存的。因此：

- `callbackFn` 不会访问在调用 `findLastIndex()` 开始后才添加到数组中的任何元素。
- 对已访问索引的更改不会导致对它们再次调用 `callbackFn` 函数。
- 如果 `callbackFn` 更改了数组中现有的、尚未访问的元素，它传递给`callbackFn` 的值将是该元素被访问时的值。[已删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)元素被当作 `undefined` 来访问。

> **警告：** 上一段描述的并发修改的情况经常导致难以理解的代码，通常应该避免（特殊情况除外）。

`findLastIndex()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整型键属性。

## 示例

### 查找数组中最后一个素数的索引

下面的示例返回数组中作为素数的最后一个元素的索引，如果没有素数，则返回 `-1`。

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

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1，没有找到
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5
```

### 在稀疏数组上使用 findLastIndex()

你可以在稀疏数组中搜索 `undefined` 并获得空槽的索引。

```js
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1
```

### 在非数组对象上调用 findLastIndex()

`findLastIndex()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findLastIndex.call(arrayLike, (x) => Number.isInteger(x)),
); // 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.findIndex` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}

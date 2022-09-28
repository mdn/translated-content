---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
---

{{JSRef}}

**`findLastIndex()`** 方法返回数组中满足提供的测试函数条件的最后一个元素的索引。若没有找到对应元素，则返回 -1。

{{EmbedInteractiveExample("pages/js/array-findlastindex.html","shorter")}}

另请参见 {{jsxref("Array.findLast()", "findLast()")}} 方法，该方法返回满足测试函数最后一个元素的值（而不是索引）。

## 语法

```js
// 箭头函数
findLastIndex((element) => { /* … */ } )
findLastIndex((element, index) => { /* … */ } )
findLastIndex((element, index, array) => { /* … */ } )

// 回调函数
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)

// 内联回调函数
findLastIndex(function(element) { /* … */ })
findLastIndex(function(element, index) { /* … */ })
findLastIndex(function(element, index, array){ /* … */ })
findLastIndex(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callbackFn`

  - : 数组中测试元素的函数。

    函数在被调用时会传递以下参数：

    - `element`
      - : 当前遍历到的元素。
    - `index`
      - : 当前遍历到的元素的索引（位置）。
    - `array`
      - : 调用 `findLast()` 的数组本身。

     回调必须返回一个[真值](/zh-CN/docs/Glossary/Truthy)，表示发现一个适当的元素。然后这个元素的索引由 `findLastIndex()` 返回。

- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时，用作 {{jsxref("Operators/this", "this")}} 的对象。

### 返回值

数组中通过测试的最后一个元素（最大的索引）。如果没有任何元素匹配，则返回 -1。

## 描述

`findLastIndex()` 方法对数组每一个元素降序（索引从大到小）执行 `callbackFn` 函数，直到 `callbackFn` 返回一个[真值](/zh-CN/docs/Glossary/Truthy)。然后`findLastIndex()` 返回元素的索引并且停止迭代数组。如果 `callbackFn` 没有返回一个真值，则 `findLastIndex()` 返回 `-1`。

`callbackFn` 会为数组中的每个元素调用，而不仅仅是那些被赋值的元素，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。

如果为 `findLastIndex()` 提供了 `thisArg` 参数，它将在每次调用 `callbackFn` 时作为 `this` 值。如果没有被提供，则使用 {{jsxref("undefined")}}。

`findLastIndex()` 方法不会改变调用它的数组，但是提供的 `callbackFn` 可以。`findLastIndex()` 处理的元素是在第一次调用 `callbackFn` *之前*设置的。因此：

- `callbackFn` 不会访问在调用 `findLastIndex()` 开始后才添加到数组中的任何元素。
- 给已访问过的索引重新赋值将不会被 `callbackFn` 重新访问。
- 给初始的范围外的索引赋值，其将不会被 `callbackFn` 访问。
- 如果 `callbackFn` 更改了数组中现有的、尚未访问的元素，则其传递给 `callbackFn` 的值将是 `findLastIndex()`访问该元素索引时的值。
- 仍然会访问已{{jsxref("Operators/delete", "删除")}}的元素。

>**警告：** 上一段描述的并发修改的情况经常导致难以理解的代码，通常应该避免（特殊情况除外）。

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

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

### 使用箭头函数查找索引

以下示例使用箭头函数查找水果的索引。请注意，结果与使用 {{jsxref("Array.findIndex()")}} 相同。

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findLastIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}

---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---

{{JSRef}}

**`findIndex()`**方法返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回-1。

{{EmbedInteractiveExample("pages/js/array-findindex.html")}}

另请参见 {{jsxref("Array.find", "find()")}} 方法，它返回数组中找到的元素的**值**，而不是其索引。

## 语法

```js
// 箭头函数
findIndex((element) => { /* … */ } )
findIndex((element, index) => { /* … */ } )
findIndex((element, index, array) => { /* … */ } )

// 回调函数
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// 内联回调函数
findIndex(function(element) { /* … */ })
findIndex(function(element, index) { /* … */ })
findIndex(function(element, index, array){ /* … */ })
findIndex(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callback`

  - : 针对数组中的每个元素，都会执行该回调函数，执行时会自动传入下面三个参数：

    - `element`
      - : 当前元素。
    - `index`
      - : 当前元素的索引。
    - `array`
      - : 调用`findIndex`的数组。

- `thisArg`
  - : 可选。执行`callback`时作为`this`对象的值。

### 返回值

数组中通过提供测试函数的第一个元素的**索引**。否则，返回-1

## 描述

`findIndex`方法对数组中的每个数组索引`0..length-1`（包括）执行一次`callback`函数，直到找到一个`callback`函数返回真实值（强制为`true`）的值。如果找到这样的元素，`findIndex`会立即返回该元素的索引。如果回调从不返回真值，或者数组的`length`为 0，则`findIndex`返回-1。与某些其他数组方法（如 Array#some）不同，在稀疏数组中，即使对于数组中不存在的条目的索引也会调用回调函数。

回调函数调用时有三个参数：元素的值，元素的索引，以及被遍历的数组。

如果一个 `thisArg` 参数被提供给 `findIndex`, 它将会被当作`this`使用在每次回调函数被调用的时候。如果没有被提供，将会使用{{jsxref("undefined")}}。

`findIndex`不会修改所调用的数组。

在第一次调用`callback`函数时会确定元素的索引范围，因此在`findIndex`方法开始执行之后添加到数组的新元素将不会被`callback`函数访问到。如果数组中一个尚未被`callback`函数访问到的元素的值被`callback`函数所改变，那么当`callback`函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍然会被访问到。

## 示例

### 查找数组中首个质数元素的索引

以下示例查找数组中素数的元素的索引（如果不存在素数，则返回-1）。

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}

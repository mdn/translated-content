---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
---

{{JSRef}}

**`@@iterator`** 属性和 {{jsxref("Array.prototype.values()", "Array.prototype.values()")}} 属性的初始值是同一个函数对象。

## 语法

```js
arr[Symbol.iterator]()
```

### 返回值

数组的 **iterator** 方法，默认情况下，与 {{jsxref("Array.prototype.values()", "values()")}} 返回值相同， `arr[Symbol.iterator]` 则会返回 {{jsxref("Array.prototype.values()", "values()")}} 函数。

## 示例

### 使用 `for...of` 循环进行迭代

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
// 浏览器必须支持 for...of 循环
for (let letter of eArr) {
  console.log(letter);
}
```

### 另一种迭代方式

```js
var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // a
console.log(eArr.next().value); // b
console.log(eArr.next().value); // c
console.log(eArr.next().value); // d
console.log(eArr.next().value); // e
```

### Use Case for brace notation

The use case for this syntax over using the dot notation (`Array.prototype.values()`) is in a case where you don't know what object is going to be ahead of time. If you have a function that takes an iterator and then iterate over the value, but don't know if that Object is going to have a \[Iterable].prototype.values method. This could be a built-in object like [String](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) object or a custom object.

```js
function logIterable(it) {
  var iterator = it[Symbol.iterator]();
  // 浏览器必须支持 for...of 循环
  for (let letter of iterator) {
      console.log(letter);
  }
}

// Array
logIterable(['a', 'b', 'c']);
// a
// b
// c

// string
logIterable('abc');
// a
// b
// c
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype[@@iterator]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.values()")}}

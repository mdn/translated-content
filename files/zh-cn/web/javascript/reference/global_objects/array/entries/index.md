---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
---

**`entries()`** 方法返回一个新的[_数组迭代器_](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象包含数组中每个索引的键/值对。

{{InteractiveExample("JavaScript Demo: Array.entries()")}}

```js interactive-example
const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
```

## 语法

```js-nolint
entries()
```

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

## 描述

当在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)上使用时，`entries()` 方法迭代空槽，就像它们的值为 `undefined` 一样。

`entries()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只要求 `this` 值具有 `length` 属性和以整数为键的属性。

## 示例

### 迭代索引和元素

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### 使用 for...of 循环

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### 迭代稀疏数组

`entries()` 将访问空槽，就像它们是 `undefined` 一样。

```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

### 在非数组对象上调用 entries()

`entries()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.entries` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.entries()")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)

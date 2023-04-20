---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.keys
---

{{JSRef}}

**`keys()`** 方法返回一个新的 _[数组迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ 对象，其中包含数组中每个索引的键。

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## 语法

```js-nolint
keys()
```

### 返回值

一个新的[可迭代的迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

## 描述

当使用[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)时， `keys()` 方法迭代空槽，就像它们的值 `undefined` 一样。

`keys()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用的数组方法)。它只期望 `this` 值具有 `length` 属性和整型键属性。

## 示例

### 在稀疏数组中使用 keys() 

与 {{jsxref("Object.keys()")}} 只包含数组中实际存在的键不同， `keys()` 迭代器不会忽略缺失属性的键。

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### 在非数组对象上调用 keys()

`keys()` 方法读取 `this` 的 `length` 属性，然后生成0到 `length - 1` 之间的所有整数索引。

```js
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

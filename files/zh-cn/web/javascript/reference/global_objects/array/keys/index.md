---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
---

{{JSRef}}

**`keys()`** 方法返回一个新的[_数组迭代器_](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，其中包含数组中每个索引的键。

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## 语法

```js-nolint
keys()
```

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

## 描述

当用于[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)时，`keys()` 方法迭代空槽，就像它们的值为 `undefined` 一样。

`keys()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 在稀疏数组中使用 keys()

与 {{jsxref("Object.keys()")}} 只包含数组中实际存在的键不同，`keys()` 迭代器不会忽略缺失属性的键。

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### 在非数组对象上调用 keys()

`keys()` 方法读取 `this` 的 `length` 属性，然后生成 0 到 `length - 1` 之间的所有整数索引。实际并不会访问索引。

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

- [`core-js` 中 `Array.prototype.keys` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)

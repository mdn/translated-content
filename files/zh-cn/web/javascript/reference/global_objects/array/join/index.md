---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
---

{{JSRef}}

**`join()`** 方法将一个数组（或一个[类数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象)）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## 语法

```js-nolint
join()
join(separator)
```

### 参数

- `separator` {{optional_inline}}
  - : 指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略，数组元素用逗号（`,`）分隔。如果 `separator` 是空字符串（`""`），则所有元素之间都没有任何字符。

### 返回值

一个所有数组元素连接的字符串。如果 `arr.length` 为 `0`，则返回空字符串。

## 描述

所有数组元素被转换成字符串并连接到一个字符串中。如果一个元素是 `undefined` 或 `null`，它将被转换为空字符串，而不是字符串 `"undefined"` 或 `"null"`。

[`Array.prototype.toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) 会在内部访问 `join` 方法，不带参数。覆盖一个数组实例的 `join` 也将覆盖它的 `toString` 行为。

当在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)上使用时，`join()` 方法迭代空槽，就像它们的值为 `undefined` 一样。

`join()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 使用用四种不同的方式连接数组

下面的示例创建一个数组 `a`，其中包含三个元素，然后用四种不同的分隔符连接所有数组元素。首先是默认的分隔符逗号，然后是一个逗号加空格，接下来是一个加号前后加空格，最后是一个空字符串。

```js
const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'
```

### 在稀疏数组上使用 join()

`join()` 将空槽视为 `undefined`，并产生额外的分隔符：

```js
console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'
```

### 在非数组对象上调用 join()

`join()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.join.call(arrayLike));
// 2,3,4
console.log(Array.prototype.join.call(arrayLike, "."));
// 2.3.4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.join` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}

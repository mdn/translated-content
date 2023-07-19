---
title: Array.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
---

{{JSRef}}

{{jsxref("Array")}} 实例的 **`toReversed()`** 方法是 {{jsxref("Array/reverse", "reverse()")}} 方法对应的[复制](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)版本。它返回一个元素顺序相反的新数组。

## 语法

```js-nolint
toReversed()
```

### 返回值

一个包含以相反顺序排列元素的新数组。

## 描述

`toReversed()` 方法将调用该方法的数组对象的元素以相反的顺序调换，并返回一个新数组。

当用于[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)时，`toReversed()` 方法迭代空槽，就像它们的值是 `undefined` 一样。

`toReversed()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 反转数组中的元素

下面的示例创建了一个包含三个元素的数组 `items`，然后创建了一个新的数组，该数组是 `items` 的反转。`items` 数组保持不变。

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### 在稀疏数组上使用 toReversed()

`toReversed()` 的返回值永远不是稀疏的。空槽在返回的数组中变为 `undefined`。

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### 在非数组对象上调用 toReversed()

`toReversed()` 方法读取 `this` 的 `length` 属性。然后按降序访问 `length - 1` 和 `0` 之间的每个索引，并将原始数组中该索引的值添加到新数组相应的索引中。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// '0' 和 '1' 两个索引不存在，所以它们会变成 undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.toReversed` 的 polyfill](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}

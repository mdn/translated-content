---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
---

**`flat()`** 方法创建一个新的数组，并根据指定深度递归地将所有子数组元素拼接到新的数组中。

{{InteractiveExample("JavaScript Demo: Array.flat()")}}

```js interactive-example
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
```

## 语法

```js-nolint
flat()
flat(depth)
```

### 参数

- `depth` {{optional_inline}}
  - : 指定要提取嵌套数组的结构深度，默认值为 1。

### 返回值

一个新的数组，其中包含拼接后的子数组元素。

## 描述

`flat()` 方法属于[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)。它不会改变 `this` 数组，而是返回一个[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)，该浅拷贝包含了原始数组中相同的元素。

如果待展开的数组是[稀疏的](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)，`flat()` 方法会忽略其中的空槽。例如，如果 `depth` 是 1，那么根数组和第一层嵌套数组中的空槽都会被忽略，但在更深的嵌套数组中的空槽则会与这些数组一起保留。

`flat()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只需要 `this` 值具有 `length` 属性和整数键属性即可。但是，如果要展开元素，则它们必须是数组。

## 示例

### 展平嵌套数组

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 在稀疏数组上使用 flat()

`flat()` 方法删除数组中的空槽：

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]
```

### 在非数组对象上调用 flat()

`flat()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。如果元素不是数组，则直接将其附加到结果中。如果元素是数组，则根据 `depth` 参数进行展开操作。

```js
const arrayLike = {
  length: 3,
  0: [1, 2],
  // 嵌套的类数组对象不会被展平
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.flat` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}

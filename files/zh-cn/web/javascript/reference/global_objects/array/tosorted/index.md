---
title: Array.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
---

{{JSRef}}

{{jsxref("Array")}} 实例的 **`toSorted()`** 方法是 {{jsxref("Array/sort", "sort()")}} 方法的[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)版本。它返回一个新数组，其元素按升序排列。

## 语法

```js-nolint
// 不传入函数
toSorted()

// 传入箭头函数
toSorted((a, b) => { /* … */ })

// 传入比较函数
toSorted(compareFn)

// 內联比较函数
toSorted(function compareFn(a, b) { /* … */ })
```

### 参数

- `compareFn` {{optional_inline}}

  - : 指定一个定义排序顺序的函数。如果省略，则将数组元素转换为字符串，然后根据每个字符的 Unicode 码位值进行排序。

    - `a`
      - : 用于比较的第一个元素。
    - `b`
      - : 用于比较的第二个元素。

### 返回值

一个新数组，其元素按升序排序。

## 描述

有关 `compareFn` 参数的更多信息，请参阅 {{jsxref("Array/sort", "sort()")}}。

当在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)上使用 `toSorted()` 方法时，它迭代时会将空槽视为具有 `undefined` 值的元素。

`toSorted()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)，它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 对数组进行排序

```js
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
```

有关更多用法示例，请参见 {{jsxref("Array/sort", "sort()")}}。

### 在稀疏数组上使用 toSorted()

空槽被视为具有 `undefined` 值而被排序。它们总是排序到数组的末尾，并且 `compareFn` 不会对它们进行调用。

```js
console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]
```

### 在非数组对象上调用 toSorted()

`toSorted()` 方法会读取 `this` 的 `length` 属性。然后它会收集所有在 `0` 到 `length - 1` 范围内的整数键属性，对它们进行排序并将它们写入一个新的数组中。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.with` 的 polyfill](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}

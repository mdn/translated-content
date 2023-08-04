---
title: Array.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
---

{{JSRef}}

{{jsxref("Array")}} 实例的 **`with()`** 方法是使用[方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#方括号表示法)修改指定索引值的[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)版本。它会返回一个新数组，其指定索引处的值会被新值替换。

## 语法

```js-nolint
array.with(index, value)
```

### 参数

- `index`
  - : 要修改的数组索引（从 0 开始），[将会转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
    - 负数索引会从数组末尾开始计数——即当 `index < 0` 时，会使用 `index + array.length`。
    - 如果规范化后的索引超出数组边界，会抛出 {{jsxref("RangeError")}}。
- `value`
  - : 要分配给指定索引的任何值。

### 返回值

一个全新的数组，其中 `index` 索引处的元素被替换为 `value`。

### 异常

- {{jsxref("RangeError")}}
  - : `index > array.length` 或 `index < -array.length` 时抛出。

## 描述

`with()` 通过返回一个指定索引处的值被新值替换的新数组，来改变数组中指定索引处的值。原数组不会被修改。这使得你可以以链式调用数组方法的方式来对数组进行操作。

`with()` 方法永远不会产生[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)。如果原数组是稀疏的，新数组对应的空白索引位置会替换为 `undefined`。

`with()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 创建一个新的数组，改变其中一个元素

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

### 数组方法的链式调用

使用 `with()` 方法，你可以在更新一个数组元素后继续调用其他的数组方法。

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
```

### 在稀疏数组上使用 with()

`with()` 方法总会创建一个密集数组。

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### 在非数组对象上调用 with()

`with()` 方法会读取 `this` 上的 `length` 属性，之后读取 `this` 上的每个整数键并写入到新数组中，同时 `value` 会被写入指定的 `index`。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.with` 的 polyfill](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("TypedArray.prototype.with()")}}

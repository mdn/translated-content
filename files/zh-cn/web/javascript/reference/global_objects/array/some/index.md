---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
---

**`some()`** 方法测试数组中是否至少有一个元素通过了由提供的函数实现的测试。如果在数组中找到一个元素使得提供的函数返回 true，则返回 true；否则返回 false。它不会修改数组。

{{InteractiveExample("JavaScript Demo: Array.some()")}}

```js interactive-example
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

## 语法

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)以指示元素通过测试，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `some()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

如果回调函数对数组中至少一个元素返回一个[真值](/zh-CN/docs/Glossary/Truthy)，则返回 `true`。否则返回 `false`。

## 描述

`some()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它为数组中的每个元素调用一次指定的 `callbackFn` 函数，直到 `callbackFn` 返回一个[真值](/zh-CN/docs/Glossary/Truthy)。如果找到这样的元素，`some()` 方法将会立即返回 `true` 并停止遍历数组。否则，如果 `callbackFn` 对所有元素都返回[假值](/zh-CN/docs/Glossary/Falsy)，`some()` 就会返回 `false`。

`some()` 类似于数学中的“存在量词（∃）”。特别地，在对于一个空数组，任何条件下它都返回 `false`。

`callbackFn` 仅针对已分配值的数组索引调用。它不会为[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽调用。

`some()` 不会改变调用它的数组，但指定的 `callbackFn` 函数可以。但是请注意，数组的长度是在第一次调用 `callbackFn` *之前*保存的。因此：

- 当开始调用 `some()` 时，`callbackFn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果数组中一个现有的、尚未访问的元素被 `callbackFn` 更改，则它传递给 `callbackFn` 的值将是该元素被修改后的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素则不会被访问。

> [!WARNING]
> 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`some()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 测试数组元素的值

下面的例子检测在数组中是否有元素大于 10。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### 使用箭头函数测试数组元素的值

[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)可以通过更简洁的语法实现相同的用例。

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### 判断数组元素中是否存在某个值

此例为模仿 `includes()` 方法，若元素在数组中存在，则回调函数返回值为 `true` :

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

### 将任意值转换为布尔类型

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

### 在稀疏数组上使用 some()

`some()` 不会在空槽上运行它的断言函数。

```js
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

### 在非数组对象上调用 some()

`some()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引，直到到达末尾或 `callbackFn` 返回 `true`。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.every` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.some()")}}

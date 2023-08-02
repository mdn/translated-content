---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
---

{{JSRef}}

**`values()`** 方法返回一个新的[_数组迭代器_](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象迭代数组中每个元素的值。

{{EmbedInteractiveExample("pages/js/array-values.html")}}

## 语法

```js-nolint
values()
```

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

## 描述

`Array.prototype.values()` 是 [`Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) 的默认实现。

```js
Array.prototype.values === Array.prototype[Symbol.iterator]; // true
```

当应用于[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)时，`values()` 方法会将空槽作为 `undefined` 迭代。

`values()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只需要 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 使用 for...of 循环进行迭代

由于 `values()` 返回一个可迭代迭代器对象，你可以使用 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环来迭代它。

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"
```

### 使用 next() 迭代

由于返回值也是一个迭代器，你可以直接调用其 `next()` 方法。

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }
console.log(iterator.next().value); // undefined
```

### 重复使用可迭代对象

> **警告：** 数组迭代器对象应该是一次性使用的对象。不要重复使用它。

`values()` 返回的可迭代对象是不可重复使用的。当 `next().done = true` 或 `currentIndex > length` 时，[`for...of` 循环结束](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#语言和迭代协议之间的交互)，进一步迭代它没有任何效果。

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter);
}
// undefined
```

如果使用 [`break`](/zh-CN/docs/Web/JavaScript/Reference/Statements/break) 语句提前结束迭代，当继续迭代时，迭代器可以从当前位置恢复迭代。

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}
// "a" "b"

for (const letter of values) {
  console.log(letter);
}
// "c" "d" "e"
```

### 迭代期间的修改操作

`values()` 返回的数组迭代器对象中没有存储任何值；但是它存储了用于创建它的数组的地址，并在每次迭代中读取当前访问的索引。因此，它的迭代输出取决于在迭代时存储在该索引中的值。如果数组中的值发生了改变，数组迭代器对象的值也会改变。

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

### 迭代稀疏数组

`values()` 会访问空槽并将其视为 `undefined`。

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### 在非数组对象上调用 values()

`values()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
for (const entry of Array.prototype.values.call(arrayLike)) {
  console.log(entry);
}
// a
// b
// c
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.values` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.keys()")}}
- [`Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
- {{jsxref("TypedArray.prototype.values()")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)

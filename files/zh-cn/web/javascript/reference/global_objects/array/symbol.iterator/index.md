---
title: Array.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
---

{{jsxref("Array")}} 实例的 **`[Symbol.iterator]()`** 方法实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)，允许数组被大多数期望可迭代对象的语法所使用，例如[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)和 {{jsxref("Statements/for...of", "for...of")}} 循环。它返回一个[数组迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，该对象会产生数组中每个索引的值。

该属性的初始值与 {{jsxref("Array.prototype.values")}} 属性的初始值是相同的函数对象。

{{InteractiveExample("JavaScript Demo: Array.prototype[Symbol.iterator]()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## 语法

```js-nolint
array[Symbol.iterator]()
```

### 返回值

与 {{jsxref("Array.prototype.values()")}} 相同的返回值：一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，它会生成数组中每个索引的值。

## 示例

### 使用 for...of 循环进行迭代

请注意，你很少需要直接调用此方法。`[Symbol.iterator]()` 方法的存在使数组[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)，并且像 `for...of` 循环这样的迭代语法会自动调用此方法以获得要遍历的迭代器。

#### HTML

```html
<ul id="letterResult"></ul>
```

#### JavaScript

```js
const arr = ["a", "b", "c"];
const letterResult = document.getElementById("letterResult");
for (const letter of arr) {
  const li = document.createElement("li");
  li.textContent = letter;
  letterResult.appendChild(li);
}
```

#### 结果

{{EmbedLiveSample('使用 for...of 循环进行迭代')}}

### 手动执行迭代器

你仍然可以手动调用返回迭代器对象的 `next()` 方法，以实现对迭代过程的最大控制。

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### 使用相同的函数处理字符串和字符串数组

因为[字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)和数组都实现了可迭代协议，所以可以设计一个通用函数以相同的方式处理这两种输入。这比直接调用 {{jsxref("Array.prototype.values()")}} 更好，后者要求输入是一个数组，或者至少是一个具有这种方法的对象。

```js
function logIterable(it) {
  if (typeof it[Symbol.iterator] !== "function") {
    console.log(it, "不可迭代。");
    return;
  }
  for (const letter of it) {
    console.log(letter);
  }
}

// 数组
logIterable(["a", "b", "c"]);
// a
// b
// c

// 字符串
logIterable("abc");
// a
// b
// c

// 数值
logIterable(123);
// 123 不可迭代。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype[Symbol.iterator]` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- {{jsxref("Symbol.iterator")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)

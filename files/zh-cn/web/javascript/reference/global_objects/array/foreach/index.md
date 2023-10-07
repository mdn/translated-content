---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
---

{{JSRef}}

**`forEach()`** 方法对数组的每个元素执行一次给定的函数。

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## 语法

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中每个元素执行的函数。并会丢弃它的返回值。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中正在处理的当前元素。
    - `index`
      - : 数组中正在处理的当前元素的索引。
    - `array`
      - : 调用了 `forEach()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

`undefined`。

## 描述

`forEach()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它按索引升序地为数组中的每个元素调用一次提供的 `callbackFn` 函数。与 {{jsxref("Array.prototype.map()", "map()")}} 不同，`forEach()` 总是返回 {{jsxref("undefined")}}，而且不能继续链式调用。其典型的用法是在链式调用的末尾执行某些操作。

`callbackFn` 仅对已赋值的数组索引调用。对于[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中的空槽，它不会被调用。

`forEach()` 不会改变其调用的数组，但是，作为 `callbackFn` 的函数可以更改数组。请注意，在第一次调用 `callbackFn` _之前_，数组的长度已经被保存。因此：

- 当调用 `forEach()` 时，`callbackFn` 不会访问超出数组初始长度的任何元素。
- 已经访问过的索引的更改不会导致 `callbackFn` 再次调用它们。
- 如果 `callbackFn` 更改了数组中已经存在但尚未访问的元素，则传递给 `callbackFn` 的值将是在访问该元素时的值。已经被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素不会被访问。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`forEach()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键的属性。

除非抛出异常，否则没有办法停止或中断 `forEach()` 循环。如果有这样的需求，则不应该使用 `forEach()` 方法。

可以通过像 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for)、[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 和 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 这样的循环语句来实现提前终止。当不需要进一步迭代时，诸如 {{jsxref("Array/every", "every()")}}、{{jsxref("Array/some", "some()")}}、{{jsxref("Array/find", "find()")}} 和 {{jsxref("Array/findIndex", "findIndex()")}} 等数组方法也会立即停止迭代。

`forEach()` 期望的是一个同步函数，它不会等待 Promise 兑现。在使用 Promise（或异步函数）作为 `forEach` 回调时，请确保你意识到这一点可能带来的影响。

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// 期望的输出：14
// 实际的输出：0
```

如果希望按顺序的或者并发的执行一系列操作，可以[查看 promise 组合](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#组合)。

## 示例

### 在稀疏数组上使用 forEach()

```js-nolint
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
```

如你所见，不会为索引 2 处的缺失值调用回调函数。

### 将 for 循环转换为 forEach

```js
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
```

### 打印出数组的内容

> **备注：** 为了在控制台中显示数组的内容，你可以使用 {{domxref("console/table", "console.table()")}} 来展示经过格式化的数组。下面的例子则是另一种使用 `forEach()` 的格式化的方法。

下面的代码会为每一个数组元素输出一行记录：

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// 注意，索引 2 被跳过，因为数组中这个位置没有内容
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### 使用 thisArg

举个勉强的例子，按照每个数组中的元素值，更新一个对象的属性：

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // 只有函数表达式才有自己的 this 绑定
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

因为 `thisArg` 参数（`this`）传给了 `forEach()`，每次调用时，它都被传给 `callbackFn` 函数，作为它的 `this` 值。

> **备注：** 如果使用[箭头函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)来传入函数参数， `thisArg` 参数会被忽略，因为箭头函数在词法上绑定了 {{jsxref("Operators/this", "this")}} 值。

### 对象复制函数

下面的代码会创建一个给定对象的副本。创建对象的副本有不同的方法，以下是只是一种方法，并解释了 `Array.prototype.forEach()` 是如何使用 `Object.*` 实用工具函数。

```js
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // 现在 obj2 看起来和 obj1 一模一样了
```

### 在迭代期间修改数组

下面的例子会输出 `one`, `two`, `four`。

当到达包含值 `two` 的项时，整个数组的第一个项被移除了，这导致所有剩下的项上移一个位置。因为元素 `four` 正位于在数组更前的位置，所以 `three` 会被跳过。

`forEach()` 不会在迭代之前创建数组的副本。

```js
const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); //'one' 将从数组中删除
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
```

### 扁平化数组

下面的示例仅用于学习目的。如果你想使用内置方法来扁平化数组，你可以考虑使用 {{jsxref("Array.prototype.flat()")}}。

```js
const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// 用例
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 在非数组对象上调用 forEach()

`forEach()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
// 2
// 3
// 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.forEach` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}

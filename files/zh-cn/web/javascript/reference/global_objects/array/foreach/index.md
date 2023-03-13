---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
---

{{JSRef}}

**`forEach()`** 方法对数组的每个元素执行一次给定的函数。

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## 语法

```js
// 箭头函数
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })

// 回调函数
forEach(callbackFn)
forEach(callbackFn, thisArg)

// 内联回调函数
forEach(function(element) { /* … */ })
forEach(function(element, index) { /* … */ })
forEach(function(element, index, array){ /* … */ })
forEach(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callbackFn`

  - : 为数组中每个元素执行的函数。

    函数调用时带有以下参数：

    - `element`
      - : 数组中正在处理的当前元素。
    - `index`
      - : 数组中正在处理的当前元素的索引。
    - `array`
      - : `forEach()` 方法正在操作的数组。

- `thisArg` {{optional_inline}}
  - : 可选参数。当执行回调函数 `callbackFn` 时，用作 `this` 的值。

### 返回值

`undefined`。

## 描述

`forEach()` 方法按升序为数组中含有效值的每一项执行一次 `callbackFn` 函数，那些已删除或者未初始化的项将被跳过（例如在稀疏数组上，[见下方的示例](#不对未初始化的值进行任何操作（稀疏数组）)）。

可依次向 `callbackFn` 函数传入三个参数：

1. 数组当前项的值
2. 数组当前项的索引
3. 数组对象本身

如果 `thisArg` 参数有值，则每次 `callbackFn` 函数被调用时，`this` 都会指向 `thisArg` 参数。如果省略了 `thisArg` 参数，或者其值为 `null` 或 `undefined`，`this` 则指向全局对象。按照[函数观察到 `this` 的常用规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)，`callbackFn` 函数最终可观察到 `this` 值。

`forEach()` 遍历的范围在第一次调用 `callbackFn` 前就会确定。调用 `forEach` 后添加到数组中的项不会被 `callbackFn` 访问到。如果已经存在的值被改变，则传递给 `callbackFn` 的值是 `forEach()` 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 {{jsxref("Array.prototype.shift()", "shift()")}}），之后的元素将被跳过——[参见下面的示例](#如果数组在迭代时被修改了，则其他元素会被跳过。)。

`forEach()` 为每个数组元素执行一次 `callbackFn` 函数；与 {{jsxref("Array.prototype.map()", "map()")}} 或者 {{jsxref("Array.prototype.reduce()", "reduce()")}} 不同的是，它总是返回 {{jsxref("undefined")}} 值，并且不可链式调用。其典型用例是在一个调用链的最后执行副作用（side effects，函数式编程上，指函数进行 返回结果值 以外的操作）。

`forEach()` 被调用时，不会改变原数组，也就是调用它的数组（尽管 `callbackFn` 函数在被调用时可能会改变原数组）。（译注：此处说法可能不够明确，具体可参考 EMCA 语言规范：'`forEach` does not directly mutate the object on which it is called but the object may be mutated by the calls to `callbackfn`.'，即 `forEach` 不会直接改变调用它的对象，但是那个对象可能会被 `callbackFn` 函数改变。）

> **备注：** 除了抛出异常以外，没有办法中止或跳出 `forEach()` 循环。如果你需要中止或跳出循环，`forEach()` 方法不是应当使用的工具。
>
> 若你需要提前终止循环，你可以使用：
>
> - 一个简单的 [for](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 循环
> - [for...of](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) / [for...in](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}
>
> 这些数组方法则可以对数组元素判断，以便确定是否需要继续遍历：
>
> - {{jsxref("Array.prototype.every()", "every()")}}
> - {{jsxref("Array.prototype.some()", "some()")}}
> - {{jsxref("Array.prototype.find()", "find()")}}
> - {{jsxref("Array.prototype.findIndex()", "findIndex()")}}
>
> 译者注：只要条件允许，也可以使用 {{jsxref("Array.prototype.filter()", "filter()")}} 提前过滤出需要遍历的部分，再用 `forEach()` 处理。

`forEach()` 方法要求使用同步函数——它不会等待 promise 执行完成。当你使用 promise（或者 async 函数）作为 `forEach` 的回调函数时，请确保你知道自己在做什么。

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

### 不对未初始化的值进行任何操作（稀疏数组）

```js
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

如你所见，3 到 7 之间的缺失值没有调用回调函数。

### 将 for 循环转换为 forEach

```js
const items = ['item1', 'item2', 'item3'];
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

> **备注：** 为了在控制台中显示数组的内容，你可以使用 [`console.table()`](/zh-CN/docs/Web/API/Console/table) 来展示经过格式化的数组。下面的例子则是另一种使用 `forEach()` 的格式化的方法。

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

下面的代码会创建一个给定对象的副本。创建对象的副本有不同的方法，以下是只是一种方法，并解释了 `Array.prototype.forEach()` 是如何使用 ECMAScript 5 `Object.*` 元属性（meta property）函数工作的。

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
const words = ['one', 'two', 'three', 'four'];
words.forEach((word) => {
  console.log(word);
  if (word === 'two') {
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
}

// 使用
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}

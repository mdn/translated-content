---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`Iterator`** 对象是一个符合[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)的对象，其提供了 `next()` 方法用以返回迭代器结果对象。所有内置迭代器都继承自 `Iterator` 类。`Iterator` 类提供了 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator) 方法，该方法返回迭代器对象本身，使迭代器也[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)。它还提供了一些使用迭代器的辅助方法。

## 描述

以下都是内置的 JavaScript 迭代器：

- _数组迭代器_，返回自 {{jsxref("Array.prototype.values()")}}、{{jsxref("Array.prototype.keys()")}}、{{jsxref("Array.prototype.entries()")}}、[`Array.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)、{{jsxref("TypedArray.prototype.values()")}}、{{jsxref("TypedArray.prototype.keys()")}}、{{jsxref("TypedArray.prototype.entries()")}}、[`TypedArray.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator) 和 [`arguments[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)。
- _字符串迭代器_，返回自 [`String.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)。
- _Map 迭代器_，返回自 {{jsxref("Map.prototype.values()")}}、{{jsxref("Map.prototype.keys()")}}、{{jsxref("Map.prototype.entries()")}} 和 [`Map.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)。
- _Set 迭代器_，返回自 {{jsxref("Set.prototype.values()")}}、{{jsxref("Set.prototype.keys()")}}、{{jsxref("Set.prototype.entries()")}} 和 [`Set.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)。
- _正则表达式字符串迭代器_，返回自 [`RegExp.prototype[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) 和 {{jsxref("String.prototype.matchAll()")}}。
- {{jsxref("Generator")}} 对象，返回自[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)。
- _Segment 迭代器_，返回自 [`Intl.Segmenter.prototype.segment()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) 返回的 [`Segments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) 对象的 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator) 方法。
- _迭代器辅助方法_，返回自迭代器辅助方法例如 {{jsxref("Iterator.prototype.filter()")}} 和 {{jsxref("Iterator.prototype.map()")}}。

每个迭代器都有一个不同的原型对象，它定义了特定迭代器使用的 `next()` 方法。例如，所有字符串迭代器对象都继承自隐藏对象 `StringIteratorPrototype`，该对象具有按码位迭代当前字符串的 `next()` 方法。`StringIteratorPrototype` 还有一个 [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性，其初始值为字符串 `"String Iterator"`。该属性在 {{jsxref("Object.prototype.toString()")}} 中使用。类似地，其他迭代器原型也有自己的 `[Symbol.toStringTag]` 值，这些值与上面给出的名称相同。

所有这些原型对象都继承自 `Iterator.prototype`，它提供了一个返回迭代器对象本身的 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 方法，这使迭代器也变得[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)。

### 迭代器辅助方法

> [!NOTE]
> 这些方法是*迭代器*辅助方法，而不是*可迭代对象*辅助方法，因为可迭代对象的唯一要求就是具有 `[Symbol.iterator]()` 方法，因此它们没有共享的原型来安装这些方法。

`Iterator` 类本身提供了一些使用迭代器的辅助方法。例如，你可能想做以下事情：

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

这首先将 {{jsxref("Map.prototype.values()")}} 返回的迭代器器转换为数组，然后使用 {{jsxref("Array.prototype.reduce()")}} 方法计算总和。然而，这既创建了一个中间数组，又重复了数组两次。相反，你可以使用迭代器本身的 `reduce()` 方法：

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

这种方法更加高效，因为它只迭代迭代器一次，而不需要保存任何中间值。迭代器辅助方法对于使用无限迭代器是必需的：

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci();
const firstThreeDigitTerm = seq.find((n) => n >= 100);
```

你无法将 `seq` 转换为数组，因为它是无穷的。相反，你可以使用迭代器本身的 `find()` 方法，该方法仅需要迭代 `seq` 查找满足条件的第一个值。

你会发现许多迭代器方法类似于数组方法，例如：

| 迭代器方法                                 | 数组方法                                |
| ------------------------------------------ | --------------------------------------- |
| {{jsxref("Iterator.prototype.every()")}}   | {{jsxref("Array.prototype.every()")}}   |
| {{jsxref("Iterator.prototype.filter()")}}  | {{jsxref("Array.prototype.filter()")}}  |
| {{jsxref("Iterator.prototype.find()")}}    | {{jsxref("Array.prototype.find()")}}    |
| {{jsxref("Iterator.prototype.flatMap()")}} | {{jsxref("Array.prototype.flatMap()")}} |
| {{jsxref("Iterator.prototype.forEach()")}} | {{jsxref("Array.prototype.forEach()")}} |
| {{jsxref("Iterator.prototype.map()")}}     | {{jsxref("Array.prototype.map()")}}     |
| {{jsxref("Iterator.prototype.reduce()")}}  | {{jsxref("Array.prototype.reduce()")}}  |
| {{jsxref("Iterator.prototype.some()")}}    | {{jsxref("Array.prototype.some()")}}    |

{{jsxref("Iterator.prototype.drop()")}} 和 {{jsxref("Iterator.prototype.take()")}} 组合起来有点类似于 {{jsxref("Array.prototype.slice()")}}。

在这些方法中，{{jsxref("Iterator/filter", "filter()")}}、{{jsxref("Iterator/flatMap", "flatMap()")}}、{{jsxref("Iterator/map", "map()")}}、{{jsxref("Iterator/drop", "drop()")}} 和 {{jsxref("Iterator/take", "take()")}} 返回一个新的*迭代器辅助方法*对象。迭代器辅助方法也是一个 `Iterator` 实例，使辅助方法可链式调用。所有迭代器辅助方法对象都继承了一个通用的原型对象，该对象实现了迭代器协议：

- `next()`
  - : 调用底层迭代器的 `next()` 方法，将辅助方法应用于结果，并返回结果。
- `return()`
  - : 调用底层迭代器的 `return()` 方法，并返回结果。

迭代器辅助方法与底层迭代器共享相同的数据源，因此迭代迭代器辅助方法会导致底层迭代器也被迭代。没有办法“复刻”迭代器以允许它被多次迭代。

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // 本质上是一个副本
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### 恰当的迭代器

有两种“迭代器”：符合[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)（必需且只需具有 `next()` 方法）的对象，以及继承自 `Iterator` 类的对象，后者可以使用辅助方法。两者互不包含——继承自 `Iterator` 的对象不会自动变成迭代器，因为 `Iterator` 类并未定义 `next()` 方法。相反，这些对象需要自己定义 `next()` 方法。*恰当的迭代器*指的是即符合迭代器协议，同时又继承自 `Iterator` 的迭代器。大多数代码所期望的迭代器都是恰当的迭代器并可以通过迭代返回恰当的迭代器。要创建恰当的迭代器，可以定义一个继承 {{jsxref("Iterator/Iterator", "Iterator")}} 的类，或使用 {{jsxref("Iterator.from()")}} 方法。

```js
class MyIterator extends Iterator {
  next() {
    // …
  }
}

const myIterator = Iterator.from({
  next() {
    // …
  },
});
```

## 构造函数

- {{jsxref("Iterator/Iterator", "Iterator()")}} {{experimental_inline}}
  - ：旨在被创建迭代器的其他类[继承](/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)。直接用于构建会抛出错误。

## 静态方法

- {{jsxref("Iterator.from()")}} {{experimental_inline}}
  - : 从一个迭代器或可迭代对象创建一个新的 `Iterator` 对象。

## 实例属性

这些属性定义于 `Iterator.prototype` 并由所有 `Iterator` 实例所共享。

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `Iterator` 实例，其初始值是 {{jsxref("Iterator/Iterator", "Iterator")}} 构造函数。
- `Iterator.prototype[Symbol.toStringTag]`

  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"Iterator"`。该属性在 {{jsxref("Object.prototype.toString()")}} 中使用。

    > [!NOTE]
    > 与大多数内置类的 `[Symbol.toStringTag]` 不同，出于 web 兼容性原因，`Iterator.prototype[Symbol.toStringTag]` 是可写的。

## 实例方法

- {{jsxref("Iterator.prototype.drop()")}} {{experimental_inline}}
  - : 返回一个新的迭代器辅助方法，其会跳过当前迭代器开头给定数量的元素。
- {{jsxref("Iterator.prototype.every()")}} {{experimental_inline}}
  - : 测试是否所有由迭代器产生的元素都能通过由提供的函数实现的测试。
- {{jsxref("Iterator.prototype.filter()")}} {{experimental_inline}}
  - : 返回一个新的迭代器辅助方法，其只产生迭代器中令提供的回调函数返回 `true` 的那些元素。
- {{jsxref("Iterator.prototype.find()")}} {{experimental_inline}}
  - : 返回迭代器产生的第一个满足提供的测试函数的元素。如果没有满足测试函数的值，则返回 {{jsxref("undefined")}}。
- {{jsxref("Iterator.prototype.flatMap()")}} {{experimental_inline}}
  - : 返回一个新的迭代器辅助方法，其获取原始迭代器中的每个元素，通过映射函数进行映射，并产生映射函数返回的元素（包含在另一个迭代器或可迭代对象）。
- {{jsxref("Iterator.prototype.forEach()")}} {{experimental_inline}}
  - : 为迭代器生成的每个元素执行一次提供的函数。
- {{jsxref("Iterator.prototype.map()")}} {{experimental_inline}}
  - : 返回一个新的迭代器辅助方法，其生成的元素都由映射函数进行转换而来。
- {{jsxref("Iterator.prototype.reduce()")}} {{experimental_inline}}
  - : 对迭代器生成的每个元素执行用户提供的“reducer”回调函数，传入前一个元素计算的返回值。在所有元素上运行 reducer 的最终结果是单个值。
- {{jsxref("Iterator.prototype.some()")}} {{experimental_inline}}
  - : 测试迭代器中是否至少有一个能够的元素通过由提供的函数实现的测试。返回一个布尔值。
- {{jsxref("Iterator.prototype.take()")}} {{experimental_inline}}
  - : 返回一个新的迭代器帮助方法，它生成当前迭代器中给定数量的元素，然后结束。
- {{jsxref("Iterator.prototype.toArray()")}} {{experimental_inline}}
  - : 创建一个用迭代器产生的元素填充的新的 {{jsxref("Array")}} 实例。
- [`Iterator.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : 返回迭代器对象本身。这使迭代器对象也是可迭代的。

## 示例

### 使用迭代器作为可迭代对象

所有内置迭代器都是可迭代的，因此你可以在 `for...of` 循环中使用它们：

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// 打印：1, 2, 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)

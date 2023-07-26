---
title: 迭代器和生成器
slug: Web/JavaScript/Guide/Iterators_and_generators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}

处理集合中的每个项是很常见的操作。JavaScript 提供了许多迭代集合的方法，从简单的 {{jsxref("Statements/for","for")}} 循环到 {{jsxref("Global_Objects/Array/map","map()")}} 和 {{jsxref("Global_Objects/Array/filter","filter()")}}。迭代器和生成器将迭代的概念直接带入核心语言，并提供了一种机制来自定义 {{jsxref("Statements/for...of","for...of")}} 循环的行为。

若想了解更多详情，请参考：

- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of","for...of")}}
- {{jsxref("Statements/function*","function*")}} 和 {{jsxref("Generator")}}
- {{jsxref("Operators/yield","yield")}} 和 {{jsxref("Operators/yield*","yield*")}}

## 迭代器

在 JavaScript 中，**迭代器**是一个对象，它定义一个序列，并在终止时可能返回一个返回值。更具体地说，迭代器是通过使用 `next()` 方法实现 [Iterator protocol](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) 的任何一个对象，该方法返回具有两个属性的对象： `value`，这是序列中的 next 值；和 `done` ，如果已经迭代到序列中的最后一个值，则它为 `true` 。如果 `value` 和 `done` 一起存在，则它是迭代器的返回值。

一旦创建，迭代器对象可以通过重复调用 next（）显式地迭代。迭代一个迭代器被称为消耗了这个迭代器，因为它通常只能执行一次。在产生终止值之后，对 next（）的额外调用应该继续返回{done：true}。

Javascript 中最常见的迭代器是 Array 迭代器，它只是按顺序返回关联数组中的每个值。虽然很容易想象所有迭代器都可以表示为数组，但事实并非如此。数组必须完整分配，但迭代器仅在必要时使用，因此可以表示无限大小的序列，例如 0 和无穷大之间的整数范围。

这是一个可以做到这一点的例子。它允许创建一个简单的范围迭代器，它定义了从开始（包括）到结束（独占）间隔步长的整数序列。它的最终返回值是它创建的序列的大小，由变量 iterationCount 跟踪。

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}
```

使用这个迭代器看起来像这样：

```js
let it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // 5
```

> **备注：** 反射性地知道特定对象是否是迭代器是不可能的。如果您需要这样做，请使用 [Iterables](#Iterables).

## 生成器函数

虽然自定义的迭代器是一个有用的工具，但由于需要显式地维护其内部状态，因此需要谨慎地创建。生成器函数提供了一个强大的选择：它允许你定义一个包含自有迭代算法的函数，同时它可以自动维护自己的状态。生成器函数使用 {{jsxref("Statements/function*","function*")}}语法编写。最初调用时，生成器函数不执行任何代码，而是返回一种称为 Generator 的迭代器。通过调用生成器的下一个方法消耗值时，Generator 函数将执行，直到遇到 yield 关键字。

可以根据需要多次调用该函数，并且每次都返回一个新的 Generator，但每个 Generator 只能迭代一次。

我们现在可以调整上面的例子了。此代码的行为是相同的，但实现更容易编写和阅读。

```js
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}
var a = makeRangeIterator(1, 10, 2);
a.next(); // {value: 1, done: false}
a.next(); // {value: 3, done: false}
a.next(); // {value: 5, done: false}
a.next(); // {value: 7, done: false}
a.next(); // {value: 9, done: false}
a.next(); // {value: undefined, done: true}
```

## 可迭代对象

若一个对象拥有迭代行为，比如在 {{jsxref("Statements/for...of", "for...of")}} 中会循环哪些值，那么那个对象便是一个可迭代对象。一些内置类型，如 {{jsxref("Array")}} 或 {{jsxref("Map")}} 拥有默认的迭代行为，而其他类型（比如{{jsxref("Object")}}）则没有。

为了实现**可迭代**，一个对象必须实现 **@@iterator** 方法，这意味着这个对象（或其[原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)中的任意一个对象）必须具有一个带 {{jsxref("Symbol.iterator")}} 键（key）的属性。

可以多次迭代一个迭代器，或者只迭代一次。程序员应该知道是哪种情况。只能迭代一次的 Iterables（例如 Generators）通常从它们的**@@iterator**方法中返回它本身，其中那些可以多次迭代的方法必须在每次调用**@@iterator**时返回一个新的迭代器。

### 自定义的可迭代对象

我们可以像这样实现自己的可迭代对象：

```js
var myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (let value of myIterable) {
  console.log(value);
}
// 1
// 2
// 3

// 或者

[...myIterable]; // [1, 2, 3]
```

### 内置可迭代对象

{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}} 和 {{jsxref("Set")}} 都是内置可迭代对象，因为它们的原型对象都拥有一个 {{jsxref("Symbol.iterator")}} 方法。

### 用于可迭代对象的语法

一些语句和表达式专用于可迭代对象，例如 {{jsxref("Statements/for...of","for-of")}} 循环，{{jsxref("Operators/Spread_operator","展开语法")}}，{{jsxref("Operators/yield*", "yield*")}} 和 {{jsxref("Operators/Destructuring_assignment", "解构赋值")}}。

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"
```

## 高级生成器

生成器会按需计算它们的产生值，这使得它们能够有效的表示一个计算成本很高的序列，甚至是如上所示的一个无限序列。

The {{jsxref("Global_Objects/Generator/next","next()")}} 方法也接受一个参数用于修改生成器内部状态。传递给 `next()` 的参数值会被 yield 接收。要注意的是，传给第一个 `next()` 的值会被忽略。

下面的是斐波那契数列生成器，它使用了 `next(x)` 来重新启动序列：

```js
function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
```

你可以通过调用其 {{jsxref("Global_Objects/Generator/throw","throw()")}} 方法强制生成器抛出异常，并传递应该抛出的异常值。这个异常将从当前挂起的生成器的上下文中抛出，就好像当前挂起的 `yield` 是一个 `throw value` 语句。

如果在抛出的异常处理期间没有遇到 `yield`，则异常将通过调用 `throw()` 向上传播，对 `next()` 的后续调用将导致 `done` 属性为 `true`。

生成器具有 {{jsxref("Global_Objects/Generator/return","return(value)")}} 方法，返回给定的值并完成生成器本身。

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}

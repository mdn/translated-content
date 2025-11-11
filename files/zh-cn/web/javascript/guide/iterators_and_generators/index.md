---
title: 迭代器和生成器
slug: Web/JavaScript/Guide/Iterators_and_generators
---

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Meta_programming")}}

迭代器和生成器将迭代的概念直接带入核心语言，并提供了一种机制来自定义 {{jsxref("Statements/for...of","for...of")}} 循环的行为。

若想了解更多详情，请参考：

- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of","for...of")}}
- {{jsxref("Statements/function*","function*")}} 和 {{jsxref("Generator")}}
- {{jsxref("Operators/yield","yield")}} 和 {{jsxref("Operators/yield*","yield*")}}

## 迭代器

在 JavaScript 中，**迭代器**是一个对象，它定义一个序列，并在终止时可能附带一个返回值。

更具体地说，迭代器是通过使用 `next()` 方法实现了[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)的任何一个对象，该方法返回具有两个属性的对象：

- `value`
  - : 迭代序列的下一个值。
- `done`
  - : 如果已经迭代到序列中的最后一个值，则它为 `true`。如果 `value` 和 `done` 一起出现，则它就是迭代器的返回值。

一旦创建，迭代器对象可以通过重复调用 `next()` 显式地迭代。迭代一个迭代器被称为消耗了这个迭代器，因为它通常只能执行一次：在产生终值后，对 `next()` 的额外调用应该继续返回 `{done：true}`。

Javascript 中最常见的迭代器是数组迭代器，它按顺序返回关联数组中的每个值。

虽然很容易想象所有迭代器都可以表示为数组，但事实并非如此。数组必须完整分配，而迭代器则是按需分配。因此，迭代器可以表示无限大小的序列，例如 0 和 {{jsxref("Infinity")}} 之间的整数范围。

下面的例子展示了具体做法。它允许你创建一个简单的范围迭代器，以定义一个从 `start`（闭）到 `end`（开），以 `step` 为步长的整数序列。它的最终返回值是它创建的序列的大小，由变量 `iterationCount` 跟踪。

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
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

console.log(`已迭代序列的大小：${result.value}`); // 5
```

> [!NOTE]
> [反射性](https://zh.wikipedia.org/wiki/反射式编程)地知道特定对象是否是迭代器是不可能的。如果你需要这样做，请使用[可迭代对象](#可迭代对象)。

## 生成器函数

虽然自定义迭代器是一个有用的工具，但由于需要显式地维护其内部状态，因此创建时要格外谨慎。**生成器函数**（Generator 函数）提供了一个强大的替代选择：它允许你定义一个非连续执行的函数作为迭代算法。生成器函数使用 {{jsxref("Statements/function*","function*")}} 语法编写。

最初调用时，生成器函数不执行任何代码，而是返回一种称为**生成器**的特殊迭代器。通过调用 `next()` 方法消耗该生成器时，生成器函数将执行，直至遇到 `yield` 关键字。

可以根据需要多次调用该函数，并且每次都返回一个新的生成器，但每个生成器只能迭代一次。

我们现在可以调整上面的例子了。此代码的行为并没有改变，但更容易编写和阅读。

```js
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
```

## 可迭代对象

若一个对象拥有迭代行为，比如在 {{jsxref("Statements/for...of", "for...of")}} 中会循环一些值，那么那个对象便是一个可迭代对象。一些内置类型，如 {{jsxref("Array")}} 或 {{jsxref("Map")}} 拥有默认的迭代行为，而其他类型（比如 {{jsxref("Object")}}）则没有。

为了实现**可迭代**，对象必须实现 `[Symbol.iterator]()` 方法，这意味着这个对象（或其[原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)中的任意一个对象）必须具有一个键值为 {{jsxref("Symbol.iterator")}} 的属性。

程序员应知道一个可迭代对象可以多次迭代，还是只能迭代一次。

只能迭代一次的可迭代对象（例如生成器）通常从它们的 `[Symbol.iterator]()` 方法中返回 `this`，而那些可以多次迭代的方法必须在每次调用 `[Symbol.iterator]()` 时返回一个新的迭代器。

```js
function* makeIterator() {
  yield 1;
  yield 2;
}

const it = makeIterator();

for (const itItem of it) {
  console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); // true

// 这个例子向我们展示了生成器（迭代器）是可迭代对象，
// 它有一个 [Symbol.iterator]() 方法返回 it（它自己），
// 因此，it 对象只能迭代*一次*。

// 如果我们将它的 [Symbol.iterator]() 方法改为一个返回新的迭代器/生成器对象的函数/生成器，
// 它（it）就可以迭代多次了。

it[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
```

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
```

自定义的可迭代对象可用 `for...of` 循环或者展开语法进行迭代。

```js
for (let value of myIterable) {
  console.log(value);
}
// 1
// 2
// 3

[...myIterable]; // [1, 2, 3]
```

### 内置可迭代对象

{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}} 和 {{jsxref("Set")}} 都是内置可迭代对象，因为它们的原型对象都拥有一个 {{jsxref("Symbol.iterator")}} 方法。

### 用于可迭代对象的语法

一些语句和表达式专用于可迭代对象，例如 {{jsxref("Statements/for...of", "for...of")}} 循环、{{jsxref("Operators/Spread_syntax", "展开语法", "", 1)}}、{{jsxref("Operators/yield*", "yield*")}} 和{{jsxref("Operators/Destructuring_assignment", "解构", "", 1)}}语法。

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

生成器会*按需*计算它们 `yield` 的值，这使得它们能够高效地表示一个计算成本很高的序列，甚至是前文所示的一个无限序列。

{{jsxref("Global_Objects/Generator/next", "next()")}} 方法也接受一个参数用于修改生成器内部状态。传递给 `next()` 的参数值会被 `yield` 接收。

> [!NOTE]
> 传给*第一个* `next()` 的值会被忽略。

下面的是斐波那契数列生成器，它使用了 `next(x)` 来重启序列：

```js
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    const reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
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

你可以通过调用其 {{jsxref("Global_Objects/Generator/throw", "throw()")}} 方法强制生成器抛出异常，并传递应该抛出的异常值。这个异常将从当前挂起的生成器的上下文中抛出，就好像当前挂起的 `yield` 是一个 `throw value` 语句。

如果该异常没有在生成器内部被捕获，则它将通过 `throw()` 的调用向上传播，对 `next()` 的后续调用将导致 `done` 属性为 `true`。

生成器的 {{jsxref("Generator/return", "return()")}} 方法可返回给定的值并终结这个生成器。

{{PreviousNext("Web/JavaScript/Guide/Typed_arrays", "Web/JavaScript/Guide/Meta_programming")}}

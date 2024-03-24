---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
---

{{jsSidebar("Operators")}}

`yield` 关键字用于暂停和恢复[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)。

{{EmbedInteractiveExample("pages/js/expressions-yield.html", "taller")}}

## 语法

```plain
[rv] = yield [expression];
```

- `expression`
  - : 定义通过[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)从生成器函数返回的值。如果省略，则返回 `undefined`。
- `rv`
  - : 返回传递给生成器的 `next()` 方法的可选值，以恢复其执行。

## 描述

`yield` 关键字使生成器函数执行暂停，`yield` 关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的 `return` 关键字。

`yield` 关键字实际返回一个 `IteratorResult` 对象，它有两个属性，`value` 和 `done`。`value` 属性是对 `yield` 表达式求值的结果，而 `done` 是 `false`，表示生成器函数尚未完全完成。

一旦遇到 `yield` 表达式，生成器的代码将被暂停运行，直到生成器的 `next()` 方法被调用。每次调用生成器的 `next()` 方法时，生成器都会恢复执行，直到达到以下某个值：

- `yield`，导致生成器再次暂停并返回生成器的新值。下一次调用 `next()` 时，在 `yield` 之后紧接着的语句继续执行。
- {{jsxref("Statements/throw", "throw")}} 用于从生成器中抛出异常。这让生成器完全停止执行，并在调用者中继续执行，正如通常情况下抛出异常一样。
- 到达生成器函数的结尾。在这种情况下，生成器的执行结束，并且 `IteratorResult` 给调用者返回 `value` 的值是 {{jsxref("undefined")}} 并且 `done` 为 `true`。
- 到达 {{jsxref("Statements/return", "return")}} 语句。在这种情况下，生成器的执行结束，并将 `IteratorResult` 返回给调用者，其 `value` 的值是由 `return` 语句指定的，并且 `done` 为 `true`。

如果将参数传递给生成器的 `next()` 方法，则该值将成为生成器当前 `yield` 操作返回的值。

在生成器的代码路径中的 `yield` 运算符，以及通过将其传递给 {{jsxref("Generator.prototype.next()")}} 指定新的起始值的能力之间，生成器提供了强大的控制力。

> **警告：** 不幸地是，`next()` 是不对称的，但这并不是没有帮助：它总是向当前暂停的 `yield` 发送一个值，但是返回的是 `yield` 之后表达式的运算结果。

## 示例

### 使用 yield

以下代码是一个生成器函数的声明。

```js
function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
```

一旦生成器函数已定义，可以通过构造一个迭代器来使用它。

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

你也可以将带有 `next(value)` 的值发送给生成器。在 `rv = yield expression` 这个语法中，`step` 用于接收返回值——尽管第一次调用 `next()` 时忽略传递给生成器 `next()` 方法的值。

```js
function* counter(value) {
  let step;

  while (true) {
    step = yield value++;
    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 0
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield*", "yield*")}}

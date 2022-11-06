---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
---

{{jsSidebar("Operators")}}

`yield` 关键字用来暂停和恢复一个生成器函数（({{jsxref("Statements/function*", "function*")}} 或[遗留的生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)）。

## 语法

```plain
[rv] = yield [expression];
```

- `expression`
  - : 定义通过[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)从生成器函数返回的值。如果省略，则返回`undefined`。
- `rv`
  - : 返回传递给生成器的`next()`方法的可选值，以恢复其执行。

## 描述

`yield`关键字使生成器函数执行暂停，`yield`关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的`return`关键字。

`yield`关键字实际返回一个`IteratorResult`对象，它有两个属性，`value`和`done`。`value`属性是对`yield`表达式求值的结果，而`done`是`false`，表示生成器函数尚未完全完成。

一旦遇到 `yield` 表达式，生成器的代码将被暂停运行，直到生成器的 `next()` 方法被调用。每次调用生成器的`next()`方法时，生成器都会恢复执行，直到达到以下某个值：

- `yield`，导致生成器再次暂停并返回生成器的新值。下一次调用`next()`时，在`yield`之后紧接着的语句继续执行。
- {{jsxref("Statements/throw", "throw")}}用于从生成器中抛出异常。这让生成器完全停止执行，并在调用者中继续执行，正如通常情况下抛出异常一样。
- 到达生成器函数的结尾；在这种情况下，生成器的执行结束，并且`IteratorResult`给调用者返回{{jsxref("undefined")}}并且`done`为`true`。
- 到达{{jsxref("Statements/return", "return")}} 语句。在这种情况下，生成器的执行结束，并将`IteratorResult`返回给调用者，其值是由`return`语句指定的，并且`done` 为`true`。

如果将参数传递给生成器的`next()`方法，则该值将成为生成器当前`yield`操作返回的值。

在生成器的代码路径中的`yield`运算符，以及通过将其传递给{{jsxref("Generator.prototype.next()")}}指定新的起始值的能力之间，生成器提供了强大的控制力。

## 示例

以下代码是一个生成器函数的声明。

```js
function* countAppleSales () {
  var saleList = [3, 7, 5];
  for (var i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
```

一旦生成器函数已定义，可以通过构造一个迭代器来使用它。

```js
var appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [The Iterator protocol](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield*", "yield*")}}

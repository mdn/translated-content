---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

**`function*`** 声明创建一个{{Glossary("binding", "绑定")}}到给定名称的新生成器函数。生成器函数可以退出，并在稍后重新进入，其上下文（变量{{Glossary("binding", "绑定")}}）会在重新进入时保存。

你也可以使用 [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)来定义生成器函数。

{{InteractiveExample("JavaScript Demo: Statement - Function*")}}

```js interactive-example
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20
```

## 语法

```js-nolint
function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> 箭头函数不能用来定义生成器函数。

> [!NOTE]
> `function` 和 `*` 是两个单独的标记，因此它们可以用[空白或换行符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#空白符)分隔。

### 参数

- `name`
  - : 函数名称。
- `param` {{optional_inline}}
  - : 函数的形参名称。有关参数的语法，请参阅[函数参考](/zh-CN/docs/Web/JavaScript/Guide/Functions#函数参数)。
- `statements` {{optional_inline}}
  - : 构成函数体的语句。

## 描述

`function*` 声明创建一个 {{jsxref("GeneratorFunction")}} 对象。每次调用生成器函数时，它都会返回一个新的 {{jsxref("Generator")}} 对象，该对象符合[迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)。当迭代器的 `next()` 方法被调用时，生成器函数的主体会被执行，直到遇到第一个 {{jsxref("Operators/yield", "yield")}} 表达式，该表达式指定了迭代器要返回的值，或者用 {{jsxref("Operators/yield*", "yield*")}} 委托给另一个生成器函数。`next()` 方法返回一个对象，其 `value` 属性包含了 `yield` 表达式的值，`done` 属性是布尔类型，表示生成器是否已经返回了最后一个值。如果 `next()` 方法带有参数，那么它会恢复生成器函数的执行，并用参数替换暂停执行的 `yield` 表达式。

在 JavaScript 中，生成器——尤其是与 Promises 结合使用时——是一种非常强大的异步编程工具，它们解决了回调函数存在的一些的问题，如[回调地狱](http://callbackhell.com/)和[控制反转](https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/)。然而，通过使用{{jsxref("Statements/async_function", "异步函数", "", 1)}}，我们可以更简单地解决这些问题。

在生成器中执行 `return` 语句会使生成器结束（即返回的对象的 `done` 属性将被设置为 `true`）。如果返回一个值，它将被设置为生成器返回的对象的 `value` 属性。与 `return` 语句类似，如果生成器内部抛出错误，生成器也会结束，除非在生成器的代码体内捕获该错误。当生成器结束后，后续 `next()` 调用不会执行生成器的任何代码，只会返回一个形如 `{value: undefined, done: true}` 的对象。

`function*` 声明的行为与 {{jsxref("Statements/function", "function")}} 声明类似——它们会被[提升](/zh-CN/docs/Glossary/Hoisting)到其作用域的顶部，并且可以在当前作用域的任何位置被调用，且只能在特定的上下文中被重新声明。

## 示例

### 简单示例

```js
function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// …
```

### 使用 yield\* 示例

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### 传入参数给生成器

```js
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

// next 的第一次调用从函数的开头开始执行，直到第一个 yield 语句
gen.next(); // 0
gen.next("pretzel"); // 1 pretzel
gen.next("california"); // 2 california
gen.next("mayonnaise"); // 3 mayonnaise
```

### 生成器中的返回语句

```js
function* yieldAndReturn() {
  yield "产生的值";
  return "返回的值";
  yield "不会被访问到的值";
}

const gen = yieldAndReturn();
console.log(gen.next()); // { value: "产生的值", done: false }
console.log(gen.next()); // { value: "返回的值", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### 生成器作为对象属性

```js
const someObj = {
  *generator() {
    yield "a";
    yield "b";
  },
};

const gen = someObj.generator();

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### 生成器作为对象方法

```js
class Foo {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### 生成器作为计算属性

```js
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(Array.from(new Foo())); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
```

### 生成器是不可构造的

```js
function* f() {}
const obj = new f(); // throws "TypeError: f is not a constructor
```

### 使用表达式定义生成器

```js
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); // {value: 10, done: false}
```

### 生成器示例

```js
function* powers(n) {
  // 无限循环生成
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {
  // 控制生成器
  if (power > 32) {
    break;
  }
  console.log(power);
  // 2
  // 4
  // 8
  // 16
  // 32
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)指南
- [迭代器与生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("GeneratorFunction")}}
- [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Generator")}}
- GitHub 上的 [Regenerator](https://github.com/facebook/regenerator)
- [Promise 和生成器：控制流的乌托邦](https://youtu.be/qbKWsbJ76-s)——Forbes Lindesay 在 JSConf 上的演讲（2013）
- GitHub 上的 [Task.js](https://github.com/mozilla/task.js)
- [你不知道的 JS：异步和性能，第 4 章：生成器](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md)——Kyle Simpson

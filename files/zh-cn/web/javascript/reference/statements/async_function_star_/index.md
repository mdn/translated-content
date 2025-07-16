---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

**`async function*`** 声明创建一个{{Glossary("binding", "绑定")}}到给定名称的新异步生成器函数。

你也可以使用 [`async function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function*)来定义异步生成器函数。

{{InteractiveExample("JavaScript Demo: Expressions - Async Function Asterisk", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## 语法

```js-nolint
async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> 箭头函数不能用来定义异步生成器函数。

> [!NOTE]
> `function` 和 `*` 是两个单独的标记，因此它们可以用[空白或换行符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#空白符)分隔。然而，如果 `async` 和 `function` 之间有换行符，则会[自动插入](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)分号，导致 `async` 成为标识符，而其余内容成为 `function*` 声明。

### 参数

- `name`
  - : 函数名称。
- `param` {{optional_inline}}
  - : 函数的形参名称。有关参数的语法，请参阅[函数参考](/zh-CN/docs/Web/JavaScript/Guide/Functions#函数参数)。
- `statements` {{optional_inline}}
  - : 构成函数体的语句。

## 描述

`async function*` 声明创建一个 {{jsxref("AsyncGeneratorFunction")}} 对象。每次调用异步生成器函数时，它都会返回一个新的 {{jsxref("AsyncGenerator")}} 对象，该对象符合[异步迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)。每次调用 `next()` 都会返回一个 {{jsxref("Promise")}} 对象，该对象会兑现为迭代器结果对象。

异步生成器函数兼具[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)和[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)的特性。你可以在函数体中使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 和 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield) 关键字。这使你能够使用 `await` 优雅的地处理异步任务，同时利用生成器函数的惰性。

当从异步生成器产生一个 promsie 时，迭代器结果 promise 的最终状态将与生成器产生的 promise 状态相同。例如：

```js
async function* foo() {
  yield Promise.reject(1);
}

foo()
  .next()
  .catch((e) => console.error(e));
```

因为如果生成的 promise 被拒绝，迭代器的结果也将被拒绝，所以将输出 `1`。异步生成器兑现结果的 `value` 将不会是另一个 promise。

`async function*` 声明的行为类似于 {{jsxref("Statements/function", "function")}} 声明，它会被[提升](/zh-CN/docs/Glossary/Hoisting)到其作用域的顶部，并且可以在其作用域的任何位置被调用，并且只能在其他上下文中被重新声明。

## 示例

### 声明异步生成器函数

异步生成器函数总是产生结果 promise——即使每个 `yield` 步骤是同步的。

```js
async function* myGenerator(step) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield 0;
  yield step;
  yield step * 2;
}

const gen = myGenerator(2);
gen
  .next()
  .then((res) => {
    console.log(res); // { value: 0, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 2, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: 4, done: false }
    return gen.next();
  })
  .then((res) => {
    console.log(res); // { value: undefined, done: true }
    return gen.next();
  });
```

### 使用异步生成器函数读取一系列文件

在这个示例中，我们使用 Node 的 [`fs/promises`](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) 模块读取一系列文件并且仅当请求时获取它的内容。

```js
async function* readFiles(directory) {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const stats = await fs.stat(file);
    if (stats.isFile()) {
      yield {
        name: file,
        content: await fs.readFile(file, "utf8"),
      };
    }
  }
}

const files = readFiles(".");
console.log((await files.next()).value);
// 可能的输出；{ name: 'file1.txt', content: '...' }
console.log((await files.next()).value);
// 可能的输出：{ name: 'file2.txt', content: '...' }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)指南
- [迭代器和生成器指南](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncGeneratorFunction")}}
- [`async function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("AsyncGenerator")}}

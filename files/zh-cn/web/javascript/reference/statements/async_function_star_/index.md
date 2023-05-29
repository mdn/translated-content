---
title: async function*
slug: Web/JavaScript/Reference/Statements/async_function*
---

{{jsSidebar("Statements")}}

**`async function*`** 声明定义了一个*异步生成器函数*，其返回一个 {{jsxref("Global_Objects/AsyncGenerator","AsyncGenerator")}} 对象。

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

你也可以使用 {{jsxref("AsyncGeneratorFunction")}} 构造函数或者 [`async function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function*)语法定义异步生成器函数。

## 语法

```js-nolint
async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

> **备注：** 异步生成器函数没有对应的箭头函数。

### 参数

- `name`
  - : 函数名。
- `param` {{optional_inline}}
  - : 函数形式参数的名称。
- `statements` {{optional_inline}}
  - : 构成函数体的语句。

## 描述

异步生成器函数兼具[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)和[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)的特性。你可以在函数体中使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 和 [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield) 关键字。这使你能够使用 `await` 方便地处理异步任务，同时利用生成器函数的惰性。

与使用 `function*` 声明的标准生成器函数不同，异步生成器函数返回一个符合[异步可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols)的 {{jsxref("Global_Objects/AsyncGenerator","AsyncGenerator")}} 对象。每次调用 `next()` 都会返回一个 {{jsxref("Promise")}}，该 promise 会兑现为迭代器结果对象。

当从异步生成器产生一个 promsie 时，迭代器结果 promise 的最终状态将与生成器产生的 promise 状态相同。例如：

```js
async function* foo() {
  yield Promise.reject(1);
}

foo()
  .next()
  .catch((e) => console.error(e));
```

因为生成器内部生产的 promise 被拒绝，迭代器的结果也将被拒绝，所以将输出 `1`。异步生成器的兑现结果的 `value` 将不会是另一个 promise。

`async function*` 声明会被[提升](/zh-CN/docs/Glossary/Hoisting)到其作用域的顶部，并可以在其作用域的任何地方调用。

## 示例

### 声明异步函数

异步生成器函数总是产生结果的 promise——即使每个 `yield` 步骤是同步的。

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

### 使用异步生成器函数去读一系列文件

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

- {{jsxref("Operators/async_function*", "async function*")}} 表达式
- {{jsxref("AsyncGeneratorFunction")}} 对象
- [迭代器协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("GeneratorFunction")}} 对象
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} 对象
- {{jsxref("Functions", "函数", "", 1)}}

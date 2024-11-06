---
title: AsyncGenerator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/return
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("AsyncGenerator")}} 实例的 **`return()`** 方法的作用就好像一个 `return` 语句被插入到生成器主体的当前暂停位置，这会结束生成器并允许生成器与 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#finally_块) 块结合使用时执行任何清理任务。

## 语法

```js-nolint
asyncGeneratorInstance.return()
asyncGeneratorInstance.return(value)
```

### 参数

- `value` {{optional_inline}}
  - : 要返回的值。

### 返回值

一个 {{jsxref("Promise")}}，其兑现为一个 {{jsxref("Object")}}，包含以下两个属性：

- `done`
  - : 一个布尔值：
    - 如果生成器函数的控制流程已经结束，则为 `true`。
    - 如果生成器函数的控制流程还未结束并且还能产生更多的值，则为 `false`。只有在 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#finally_块) 中捕获 `return` 并且 `finally` 块中还有更多的 `yield` 表达式时才会发生这种情况。
- `value`
  - : 给定的作为参数的值，或者，如果 `yield` 表达式包含在 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#finally_块)，从 `finally` 块产生/返回的值。

## 描述

`return()` 方法在被调用时，可以看作是在生成器主体当前暂停的位置插入了一个 `return value;` 语句，其中 `value` 是传入给 `return()` 方法的值。因此，在典型的流程中，调用 `return(value)` 将返回 `{done: true, value: value }`。然而，如果 `yield` 表达式被包含在 `try...finally` 块中，控制流不会退出函数体，而是进入 `finally` 块。在这种情况下，如果 `finally` 块中有更多 `yield` 表达式，返回的值可能会不同，`done` 甚至可能是 `false`。

## 示例

### 使用 return()

以下例子展示了一个简单的异步生成器和 `return` 方法的使用。

```js
// 异步任务。假设它在实践中做了一些更有用的事情。
function delayedValue(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* createAsyncGenerator() {
  yield delayedValue(500, 1);
  yield delayedValue(500, 2);
  yield delayedValue(500, 3);
}

const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.return("foo").then((res) => console.log(res)); // { value: "foo", done: true }
asyncGen.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### 生成器结束后使用 return()

如果没有给 `return()` 方法传入 `value` 参数，promise 将会像 [next()](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next) 方法被调用了一样兑现。在本示例中，生成器已经结束，因此返回的值是 `undefined`。

在生成器处于“完成”状态后，仍然可以调用 `return()`，但是生成器将保持此状态。

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 3, done: false }
// 返回的值是 undefined，因为没有传入任何值并且生成器已经 'done'
asyncGen.return().then((res) => console.log(res)); // { value: undefined, done: true }
// 即使生成器完成，我们仍然可以返回一个值
asyncGen.return(1).then((res) => console.log(res)); // { value: 1, done: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/async_function*", "async function*")}}
- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南

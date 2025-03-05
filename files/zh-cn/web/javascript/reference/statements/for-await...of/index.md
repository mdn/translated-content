---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Statements")}}

**`for await...of`** 语句创建一个循环，该循环遍历[异步可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)以及[同步可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)。该语句只能在可以使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 的上下文中使用，包括[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)体内以及[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)中。

{{InteractiveExample("JavaScript Demo: Statement - For Await...Of", "taller")}}

```js interactive-example
async function* foo() {
  yield 1;
  yield 2;
}

(async function () {
  for await (const num of foo()) {
    console.log(num);
    // Expected output: 1

    break; // Closes iterator, triggers return
  }
})();
```

## 语法

```js-nolint
for await (variable of iterable)
  statement
```

- `variable`
  - : 每次迭代时从序列接收一个值。可以是用 [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const)、[`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 或 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 声明的变量，也可以是[赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)目标（例如之前声明的变量、对象属性或[解构赋值模式](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)）。使用 `var` 声明的变量不会局限于循环内部，即它们与 `for await...of` 循环所在的作用域相同。
- `iterable`
  - : 异步可迭代对象或同步可迭代对象。循环操作的序列值的来源。
- `statement`
  - : 每次迭代后执行的语句。可以引用 `variable`。可以使用[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)来执行多个语句。

## 描述

当 `for await...of` 循环迭代一个可迭代对象时，它首先获取可迭代对象的 [`[Symbol.asyncIterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) 方法并调用它，该方法返回一个[异步迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)。如果 `@asyncIterator` 方法不存在，则会查找 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 方法，该方法返回一个[同步迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)。然后将返回的同步迭代器封装成一个异步迭代器，通过将 `next()`、`return()` 和 `throw()` 方法返回的每个对象都包装成一个已兑现或已拒绝的 promise，如果 `value` 属性也是一个 promise，则将其兑现。然后循环重复调用最终异步迭代器的 [`next()`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议) 方法，并[等待](/zh-CN/docs/Web/JavaScript/Reference/Operators/await)（await）返回的 promise，以生成要分配给 `variable` 的值的序列。

如果 `for await...of` 循环提前退出（例如遇到 `break` 语句或抛出错误），则会调用迭代器的 [`return()`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议) 方法来执行任何清理任务。在循环退出之前，会等待返回的 promise。

`for await...of` 的功能与 [`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环基本上相同，并且共享许多相同的语法和语义。但也有一些区别：

- `for await...of` 可以用于同步和异步可迭代对象，而 `for...of` 仅适用于同步可迭代对象。
- `for await...of` 只能在可以使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 的上下文中使用，包括在[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)体内和[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)中使用。即使可迭代对象是同步的，循环仍会等待每次迭代的返回值，导致执行速度较慢，因为需要重复解包 promise。
- 如果 `iterable` 是一个产生 promise 的同步可迭代对象，`for await...of` 会生成一个已兑现的值序列，而 `for...of` 会生成一个 promise 序列。（然而，需要注意错误处理和清理——请参阅[迭代同步可迭代对象和生成器](#迭代同步可迭代对象和生成器)）
- 对于 `for await...of`，`variable` 可以是标识符 `async`（例如 `for await (async of foo)`）；`for...of` 不允许这种情况。

## 示例

### 迭代异步可迭代对象

你还可以迭代一个显式实现异步可迭代协议的对象：

```js
const LIMIT = 3;

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        const done = i === LIMIT;
        const value = done ? undefined : i++;
        return Promise.resolve({ value, done });
      },
      return() {
        // 如果消费者在循环中提前调用“break”或“return”，则会运行到这里。
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

### 迭代异步生成器

由于异步生成器函数的返回值符合异步可迭代协议，因此可以使用 `for await...of` 来迭代它们。

```js
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

如果需要使用 `for await...of` 迭代异步生成器的更具体示例时，可以考虑迭代来自 API 的数据。

该示例首先创建一个用于数据流的异步可迭代对象，然后使用它来查找 API 响应的大小。

```js
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

// 从 URL 获取数据并使用异步生成器计算响应的大小。
async function getResponseSize(url) {
  const response = await fetch(url);
  // 将保存响应的大小，以字节为单位。
  let responseSize = 0;
  // for-await-of 循环。异步迭代器遍历响应的每个部分。
  for await (const chunk of streamAsyncIterable(response.body)) {
    // 增加响应总长度。
    responseSize += chunk.length;
  }

  console.log(`响应大小：${responseSize} 字节`); // "响应大小：1071472 字节"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

### 迭代同步可迭代对象和生成器

`for await...of` 循环还可以处理同步可迭代对象和生成器。在这种情况下，它会在将值分配给循环控制变量之前，在内部对其进行等待。

```js
function* generator() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield 4;
}

(async () => {
  for await (const num of generator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

// 与 for-of 循环比较：

for (const numOrPromise of generator()) {
  console.log(numOrPromise);
}
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
```

> [!NOTE]
> 请注意，如果同步生成器生成了一个被拒绝的 promise，那么在使用 `for await...of` 进行处理时会抛出异常，并且**不会调用**生成器内部的 `finally` 块。如果你需要使用 `try/finally` 来释放一些已分配的资源，这可能是不可取的。

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(3);
    yield 4;
    throw 5;
  } finally {
    console.log("调用了 finally");
  }
}

(async () => {
  try {
    for await (const num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log("捕获了异常", e);
  }
})();
// 0
// 1
// 2
// 捕获了异常 3

// 与 for-of 循环比较：

try {
  for (const numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log("捕获了异常", e);
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> 3 }
// 4
// 捕获了异常 5
// 调用了 finally
```

为了确保同步生成器的 `finally` 块始终被调用，需要使用对应的循环形式——对于异步生成器使用 `for await...of`，对于同步生成器则使用 `for...of`，并在循环内显式地等待生成的 promise。

```js
(async () => {
  try {
    for (const numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log("捕获了异常", e);
  }
})();
// 0
// 1
// 2
// 捕获了异常 3
// 调用了 finally
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Symbol.asyncIterator")}}
- {{jsxref("Statements/for...of", "for...of")}}

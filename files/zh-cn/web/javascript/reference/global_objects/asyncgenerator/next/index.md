---
title: AsyncGenerator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jsxref("AsyncGenerator")}} 实例的 **`next()`** 方法返回序列中的下一个值。

## 语法

```js-nolint
next()
next(value)
```

### 参数

- `value` {{optional_inline}}
  - : 用于修改生成器内部状态的可选值。传入给 `next()` 方法的值将被 `yield` 接收。

### 返回值

一个 {{jsxref("Promise")}}，其兑现时将返回一个 {{jsxref("Object")}}，包含以下两个属性：

- `done`
  - : 一个布尔值：
    - 如果生成器的控制流程已经结束，则为 `true`。在这种情况下，`value` 指定生成器的*返回值*（可能是 undefined）。
    - 如果生成器还能产生更多的值，则为 `false`。
- `value`
  - : 生成器产生或返回的任何 JavaScript 值。

## 示例

### 使用 next()

以下示例展示了一个简单的生成器以及调用 `next` 方法后返回的对象：

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
asyncGen.next().then((res) => console.log(res)); // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 3, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### 向生成器传值

在此示例中，调用 `next` 时传入了值。

> [!NOTE]
> 第一次调用不会打印任何内容，因为生成器最初没有产生任何内容。

```js
// 异步任务。假设它在实践中做了一些更有用的事情。
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function* createAsyncGenerator() {
  while (true) {
    await sleep(500);
    const value = yield;
    console.log(value);
  }
}

async function main() {
  const asyncGen = createAsyncGenerator();
  // 这一步不会有输出：通过 `next` 发送的第一个值会被丢弃
  console.log(await asyncGen.next(1)); // { value: undefined, done: false }
  // 打印通过 `next` 发送的值——2
  console.log(await asyncGen.next(2)); // { value: undefined, done: false }
}

main();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/async_function*", "async function*")}}
- [迭代器和生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)指南

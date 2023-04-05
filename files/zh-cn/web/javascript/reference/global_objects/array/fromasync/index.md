---
title: Array.fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
---

{{JSRef}} {{SeeCompatTable}}

**`Array.fromAsync()`** 静态方法可以从一个[异步可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)、[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)或[类数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#使用类数组对象)中创建一个新的、浅拷贝的 `Array` 实例。

## 语法

```js-nolint
Array.fromAsync(arrayLike)
Array.fromAsync(arrayLike, mapFn)
Array.fromAsync(arrayLike, mapFn, thisArg)
```

### 参数

- `arrayLike`
  - : 要转换为数组的异步可迭代、可迭代或类数组对象。
- `mapFn` {{optional_inline}}
  - : 为数组中的每个元素执行的函数。如果提供了该函数，则每个要添加到数组中的值都会先通过该函数处理，`mapFn` 的返回值将代替该值被添加到数组中（在经过 [await](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 处理后）。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。由于所有元素都会先被 [await](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 处理，因此该值永远不会是 [thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)。
    - `index`
      - : 正在处理的元素在数组中的索引。
- `thisArg` {{optional_inline}}
  - : 执行 `mapFn` 时用作 `this` 的值。

### 返回值

一个新的 {{jsxref("Promise")}}，其完成值是一个新的 {{jsxref("Array")}} 实例。

## 描述

`Array.fromAsync()` 允许你从以下对象中创建数组：

- [异步可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议) (如 {{domxref("ReadableStream")}} 和 {{jsxref("AsyncGenerator")}})；
- [可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议) (如 {{jsxref("Map")}} 和 {{jsxref("Set")}})；
- 类数组的对象 (带有 `length` 属性和索引元素的对象)。

`Array.fromAsync()` 迭代异步可迭代对象的方式与 {{jsxref("Statements/for-await...of", "for await...of")}} 很相似。`Array.fromAsync()` 在行为上与 {{jsxref("Array.from()")}} 几乎等价，除了以下几点：

- `Array.fromAsync()` 处理异步可迭代对象。
- `Array.fromAsync()` 返回一个 {{jsxref("Promise")}}，该 Promise 在解析为数组实例之前进行了处理。
- 如果使用非异步可迭代对象调用 `Array.fromAsync()`，则要添加到数组中的每个元素都会先进行 [await](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 处理。
- 如果提供了 `mapFn`，则其输入和输出会在内部进行 `await` 处理。

`Array.fromAsync()` 和 {{jsxref("Promise.all()")}} 都可以将一个 promise 可迭代对象转换为一个数组的 promise。然而，它们有两个关键区别：

- `Array.fromAsync()` 会依次 `await` 对象中产生的每个值。`Promise.all()` 会并行 `await` 所有值。
- `Array.fromAsync()` 惰性迭代可迭代对象，并且不会获取下一个值，直到当前值被处理完成。`Promise.all()` 预先获取所有值并等待它们全部处理完成。

## 示例

### 从异步可迭代对象创建数组

```js
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
```

### 从同步可迭代对象创建数组

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### 从产生 promises 的同步可迭代对象创建数组

```js
Array.fromAsync(
  new Set([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### 从 promise 的类数组对象创建数组

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### 使用 mapFn

`Array.fromAsync()` 内部会 `await` `mapFn` 的输入和输出。

```js
function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [
    delayedValue(1),
    delayedValue(2),
    delayedValue(3),
  ],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));
// [2, 4, 6]
```

### 与 Promise.all() 的比较

`Array.fromAsync()` 会依次 `await` 对象中产生的每个值。`Promise.all()` 会并行 `await` 所有值。

```js
function* makeAsyncIterable() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeAsyncIterable());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeAsyncIterable());
  console.timeEnd("Promise.all() time");
  // Promise.all() time: 101.728ms
})();
```

### 没有对同步可迭代对象的错误处理

如果被迭代的对象是同步可迭代对象，并且在迭代时抛出错误，类似于 [`for await...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of#迭代同步可迭代对象和生成器)，底层迭代器的 `return()` 方法将不会被调用，因此迭代器不会被关闭。

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(3);
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    await Array.fromAsync(generatorWithRejectedPromises());
  } catch (e) {
    console.log("caught", e);
  }
})();
// caught 3
// 没有 "called finally" 信息
```

如果需要关闭迭代器，则需要使用 {{jsxref("Statements/for...of", "for...of")}} 循环，并手动 `await` 每个值。

```js
(async () => {
  const arr = [];
  try {
    for (const val of generatorWithRejectedPromises()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// called finally
// caught 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.fromAsync` 的 polyfill](https://github.com/zloirock/core-js#arrayfromasync)
- {{jsxref("Statements/for-await...of", "for await...of")}}}
- {{jsxref("Array")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}

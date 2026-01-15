---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

**`Atomics.waitAsync()`** 静态方法异步等待共享内存的特定位置并返回一个 {{jsxref("Promise")}}。

与 {{jsxref("Atomics.wait()")}} 不同，`waitAsync` 是非阻塞的且可用于主线程。

> [!NOTE]
> 此操作仅适用于基于 {{jsxref("SharedArrayBuffer")}} 的 {{jsxref("Int32Array")}} 或 {{jsxref("BigInt64Array")}} 视图。

## 语法

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### 参数

- `typedArray`
  - : 基于 {{jsxref("SharedArrayBuffer")}} 的 {{jsxref("Int32Array")}} 或 {{jsxref("BigInt64Array")}}。
- `index`
  - : `typedArray` 中要等待的位置。
- `value`
  - : 要测试的期望值。
- `timeout` {{optional_inline}}
  - : 等待时间，以毫秒为单位。{{jsxref("NaN")}}（以及会被转换为 `NaN` 的值，例如 `undefined`）会被转换为 {{jsxref("Infinity")}}。负值会被转换为 `0`。

### 返回值

一个 {{jsxref("Object")}}，包含以下属性：

- `async`
  - : 一个布尔值，指示 `value` 属性是否为 {{jsxref("Promise")}}。
- `value`
  - : 如果 `async` 是 `false`，它将是一个内容为 `"not-equal"` 或 `"timed-out"` 的字符串（仅当 `timeout` 参数为 `0` 时）。如果 `async` 是 `true`，它将会是一个 {{jsxref("Promise")}}，其兑现值为一个内容为 `"ok"` 或 `"timed-out"` 的字符串。这个 promise 永远不会被拒绝。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `typedArray` 不是一个基于 {{jsxref("SharedArrayBuffer")}} 的 {{jsxref("Int32Array")}} 或 {{jsxref("BigInt64Array")}}，则抛出该异常。
- {{jsxref("RangeError")}}
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 waitAsync()

给定一个共享的 `Int32Array`。

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

令一个读取线程休眠并在位置 0 处等待，预期该位置的值为 0。`result.value` 将是一个 promise。

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

在该读取线程或另一个线程中，对内存位置 0 调用以令该 promise 解决为 `"ok"`。

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

如果它没有解决为 `"ok"`，则共享内存该位置的值不符合预期（`value` 将是 `"not-equal"` 而不是一个 promise）或已经超时（该 promise 将解决为 `"time-out"`）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}

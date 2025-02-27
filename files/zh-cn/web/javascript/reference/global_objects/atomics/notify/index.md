---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`Atomics.notify()`** 静态方法唤醒一些在等待队列中休眠的代理。

> [!NOTE]
> 此操作仅适用于基于 {{jsxref("SharedArrayBuffer")}} 的 {{jsxref("Int32Array")}} 或 {{jsxref("BigInt64Array")}} 视图。对于非共享的 `ArrayBuffer` 对象，其将返回 `0`。

## 语法

```js-nolint
Atomics.notify(typedArray, index, count)
```

### 参数

- `typedArray`
  - : 基于 {{jsxref("SharedArrayBuffer")}} 的 {{jsxref("Int32Array")}} 或 {{jsxref("BigInt64Array")}}。
- `index`
  - : `typedArray` 中要唤醒的位置。
- `count` {{optional_inline}}
  - : 要唤醒的休眠代理的数量。默认为 {{jsxref("Infinity")}}。

### 返回值

- 返回唤醒的代理数量。
- 如果在非共享的 {{jsxref("ArrayBuffer")}} 上调用则返回 `0`。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `typedArray` 不是一个基于 {{jsxref("SharedArrayBuffer")}} 的 {{jsxref("Int32Array")}} 或 {{jsxref("BigInt64Array")}}，则抛出该异常。
- {{jsxref("RangeError")}}
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 notify()

给定一个共享的 `Int32Array`：

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

令一个读取线程休眠并在位置 0 处等待，预期该位置的值为 0。只要条件一直为真，则将不会继续运行。然而，一旦写入线程存储了一个新的值，它将被读取线程唤醒并返回新的值（123）。

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

写入线程存储一个新的值并在写入后唤醒等待的线程：

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.waitAsync()")}}

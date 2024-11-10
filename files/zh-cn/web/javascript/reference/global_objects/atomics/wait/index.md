---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

**`Atomics.wait()`** 静态方法验证共享内存特定位置是否仍然包含给定值，如果是则休眠，直到被唤醒或超时。其返回一个内容为 `"ok"`、`"not-equal"` 或 `"timed-out"` 的字符串。

> [!NOTE]
> 此操作仅适用于基于 {{jsxref("SharedArrayBuffer")}} 的 {{jsxref("Int32Array")}} 或 {{jsxref("BigInt64Array")}} 视图，并且在主线程中可能不可用。有关此方法的非阻塞异步版本，请参见 {{jsxref("Atomics.waitAsync()")}}。

## 语法

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
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

一个内容为 `"ok"`、`"not-equal"` 或 `"timed-out"` 的字符串。

### 异常

- {{jsxref("TypeError")}}
  - : 有下列情况之一，则抛出该异常：
    - 如果 `typedArray` 不是一个基于 {{jsxref("SharedArrayBuffer")}} 的 {{jsxref("Int32Array")}} 或 {{jsxref("BigInt64Array")}}。
    - 如果当前线程无法被阻塞（例如主线程）。
- {{jsxref("RangeError")}}
  - : 如果 `index` 超出 `typedArray` 的范围，则抛出该异常。

## 示例

### 使用 wait()

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
- {{jsxref("Atomics.waitAsync()")}}
- {{jsxref("Atomics.notify()")}}

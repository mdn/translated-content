---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

**`Atomics`** 命名空间对象包含对 {{jsxref("SharedArrayBuffer")}} 和 {{jsxref("ArrayBuffer")}} 对象执行原子操作的静态方法。

## 描述

与一般的全局对象不同，`Atomics` 不是构造函数。因此你不能将其与 [new 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)一起使用或将 `Atomics` 对象作为一个函数来进行调用。`Atomics` 的所有属性和方法都是静态的（与 {{jsxref("Math")}} 对象一样）。

### 原子操作

当内存被共享时，多个的线程能够读写内存上的同一数据。原子操作会确保正在读或写的数据的值是符合预期的，即下一个原子操作一定会在上一个原子操作结束后才会开始，其操作不会被中断。

### 等待和通知

`wait()` 和 `notify()` 方法采用的是 Linux 上的 futex 模型（“快速用户空间互斥体”），可以让进程一直等待直到某个特定的条件为真，主要用于实现阻塞。

## 静态属性

- `Atomics[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"Atomics"`。这个属性在 {{jsxref("Object.prototype.toString()")}} 中使用。

## 静态方法

- {{jsxref("Atomics.add()")}}
  - : 将给定的值与数组上指定位置的元素相加，并返回相加前该元素的值。
- {{jsxref("Atomics.and()")}}
  - : 将指定位置上的数组元素与给定的值相与，并返回与操作前该元素的值。
- {{jsxref("Atomics.compareExchange()")}}
  - : 如果数组中指定的元素与给定的值相等，则将其更新为新的值，并返回该元素原先的值。
- {{jsxref("Atomics.exchange()")}}
  - : 将数组中指定的元素更新为给定的值，并返回该元素更新前的值。
- {{jsxref("Atomics.isLockFree()")}}
  - : 一个优化原语，可用于确定是使用锁还是原子操作。如果给定元素大小的数组上的原子操作将使用硬件原子操作来实现（而不是锁），则返回`true`。仅供专家使用。
- {{jsxref("Atomics.load()")}}
  - : 返回数组中指定元素的值。
- {{jsxref("Atomics.notify()")}}
  - : 通知正在等待数组指定索引的代理。返回收到通知的代理数量。
- {{jsxref("Atomics.or()")}}
  - : 将指定位置上的数组元素与给定的值相或，并返回或操作前该元素的值。
- {{jsxref("Atomics.store()")}}
  - : 将值储存到数组的指定位置，并返回该值。
- {{jsxref("Atomics.sub()")}}
  - : 将指定位置上的数组元素与给定的值相减，并返回相减前该元素的值。
- {{jsxref("Atomics.wait()")}}
  - : 检测数组中某个指定位置上的值是否仍然是给定值，是则保持挂起直到被唤醒或超时。返回值为 `"ok"`、`"not-equal"` 或 `"time-out"`。调用时，如果当前代理不允许阻塞，则会抛出异常（大多数浏览器都不允许在主线程中调用 `wait()`）。
- {{jsxref("Atomics.waitAsync()")}}
  - : 在共享内存位置上异步等待（即没有阻塞，与 `Atomics.wait` 不同）并返回一个 {{jsxref("Promise")}}。
- {{jsxref("Atomics.xor()")}}
  - : 将指定位置上的数组元素与给定的值相异或，并返回异或操作前该元素的值。

## 示例

### 使用 Atomics

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

ta[0]; // 0
ta[0] = 5; // 5

Atomics.add(ta, 0, 12); // 5
Atomics.load(ta, 0); // 17

Atomics.and(ta, 0, 1); // 17
Atomics.load(ta, 0); // 1

Atomics.compareExchange(ta, 0, 5, 12); // 1
Atomics.load(ta, 0); // 1

Atomics.exchange(ta, 0, 12); // 1
Atomics.load(ta, 0); // 12

Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true

Atomics.or(ta, 0, 1); // 12
Atomics.load(ta, 0); // 13

Atomics.store(ta, 0, 12); // 12

Atomics.sub(ta, 0, 2); // 12
Atomics.load(ta, 0); // 10

Atomics.xor(ta, 0, 1); // 10
Atomics.load(ta, 0); // 11
```

### 等待和通知

给定一个共享的 `Int32Array`：

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

如果位置 0 上的值为 0，则读取线程将保持休眠且代码不会继续执行。但是，一旦写入线程储存了一个新的值，则写入线程将通知它并返回新的值（123）。

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

写入线程存储一个新值并在写入完成时通知一次等待线程该位置被写入：

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

- {{jsxref("ArrayBuffer")}}
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
- [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API)
- [Shared Memory——一个简短的教程](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md)，在 TC39 ecmascript-sharedmem 提案中
- [JavaScript 新并行语法的初体验](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) 在 hacks.mozilla.org 上（2016）

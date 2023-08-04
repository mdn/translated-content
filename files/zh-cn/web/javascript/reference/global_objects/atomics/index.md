---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
---

{{JSRef}}

**`Atomics`** 对象提供了一组静态方法对 {{jsxref("SharedArrayBuffer")}} 和 {{jsxref("ArrayBuffer")}} 对象进行原子操作。

## 描述

这些原子操作属于 `Atomics` 模块。与一般的全局对象不同，`Atomics` 不是构造函数，因此不能使用 [new](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作符调用，也不能将其当作函数直接调用。`Atomics` 的所有属性和方法都是静态的（与 {{jsxref("Math")}} 对象一样）。

### 原子操作

多个共享内存的线程能够同时读写同一位置上的数据。原子操作会确保正在读或写的数据的值是符合预期的，即下一个原子操作一定会在上一个原子操作结束后才会开始，其操作过程不会中断。

### 等待和通知

`wait()` 和 `notify()` 方法采用的是 Linux 上的 futexes 模型（“快速用户空间互斥量”），可以让进程一直等待直到某个特定的条件为真，主要用于实现阻塞。

## 方法

- {{jsxref("Atomics.add()")}}
  - : 将指定位置上的数组元素与给定的值相加，并返回相加前该元素的值。
- **{{jsxref("Atomics.and()")}}**
  - : 将指定位置上的数组元素与给定的值相与，并返回与操作前该元素的值。
- {{jsxref("Atomics.compareExchange()")}}
  - : 如果数组中指定的元素与给定的值相等，则将其更新为新的值，并返回该元素原先的值。
- {{jsxref("Atomics.exchange()")}}
  - : 将数组中指定的元素更新为给定的值，并返回该元素更新前的值。
- {{jsxref("Atomics.isLockFree()", "Atomics.isLockFree(size)")}}
  - : 可以用来检测当前系统是否支持硬件级的原子操作。对于指定大小的数组，如果当前系统支持硬件级的原子操作，则返回 `true`；否则就意味着对于该数组，`Atomics` 对象中的各原子操作都只能用锁来实现。此函数面向的是技术专家。
- {{jsxref("Atomics.load()")}}
  - : 返回数组中指定元素的值。
- {{jsxref("Atomics.notify()")}}
  - : 唤醒等待队列中正在数组指定位置的元素上等待的线程。返回值为成功唤醒的线程数量。
- {{jsxref("Atomics.or()")}}
  - : 将指定位置上的数组元素与给定的值相或，并返回或操作前该元素的值。
- {{jsxref("Atomics.store()")}}
  - : 将数组中指定的元素设置为给定的值，并返回**该值**。
- {{jsxref("Atomics.sub()")}}
  - : 将指定位置上的数组元素与给定的值相减，并返回相减前该元素的值。
- {{jsxref("Atomics.wait()")}}
  - : 检测数组中某个指定位置上的值是否仍然是给定值，是则保持挂起直到被唤醒或超时。返回值为 "`ok`"、"`not-equal`" 或 "`time-out`"。调用时，如果当前线程不允许阻塞，则会抛出异常（大多数浏览器都不允许在主线程中调用 `wait()`）。
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

### Waiting 和 notifiying

给定一个共享的 `Int32Array`：

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

读取线程正在休眠并位置 0 上等待。只要该位置应为 0，它就不会继续。但是，一旦写入线程存储了新值，写入线程将通知它并返回新值（123）。

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

写入线程存储一个新值并再写入完成时通知等待线程：

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
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – a simple library providing synchronization and work distribution abstractions.
- [Shared Memory – a brief tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [A Taste of JavaScript's New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)

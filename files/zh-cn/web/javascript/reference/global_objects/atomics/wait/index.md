---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
---

{{JSRef}}

静态方法 **`Atomics.wait()`** 确保了一个在 {{jsxref("Int32Array")}} 数组中给定位置的值没有发生变化、仍然是给定的值时进程将会睡眠，直到被唤醒或超时。该方法返回一个字符串，值为`"ok"`, `"not-equal"`, 或 `"timed-out"` 之一。

> **备注：** 这项操作仅允许同一个共享内存的 {{jsxref("Int32Array")}} 配合使用并且无法运行在主线程中。

## 语法

```plain
Atomics.wait(typedArray, index, value[, timeout])
```

### 参数

- `typedArray`
  - : 一个共享内存的 {{jsxref("Int32Array")}} 数组。
- `index`
  - : 给定需要检测的 `typedArray` 数组的位置索引。
- `value`
  - : 给定需要检测的位置索引的预期值。
- `timeout` {{optional_inline}}
  - : 超时前等待的毫秒数。 {{jsxref("Infinity")}}, 如未提供该参数，将为无穷大。

### 返回值

一个 {{jsxref("String")}} 字符串，值为 "`ok`", "`not-equal`", 或 "`timed-out`" 三种之一。

### 异常

- 如果参数 `typedArray` 不是一个共享内存的 {{jsxref("Int32Array")}} 数组，将会抛出一个 {{jsxref("TypeError")}} 。
- 如果参数 `index` 超出了参数 `typedArray`的边界，将会抛出一个 {{jsxref("RangeError")}} 。

## 示例

创建一个共享内存的 `Int32Array` :

```js
var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
```

检测给定的数组索引 0 的值，如果它如预期一般的等于我们给定的值 0，则这个读取线程将会睡眠等待。一旦当有一个写入线程在这个位置存储了一个新值，它将会收到写入线程的通知并且返回新值 (123) :

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

一旦某个写入线程存储了一个新值到`int32` 的索引 0 位置，则通知给该等待线程：

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关参阅

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.notify()")}}

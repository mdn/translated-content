---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
---

{{JSRef}}

静态方法 **`Atomics.notify()`** 提醒一些在等待队列中休眠的代理。

> **备注：** 本操作仅在共享的 {{jsxref("Int32Array")}} 下可用。

## 语法

```plain
Atomics.notify(typedArray, index, count)
```

### 参数

- `typedArray`
  - : 一个共享的 {{jsxref("Int32Array")}}。
- `index`
  - : `typedArray` 中要唤醒的目标索引。
- `count`
  - : 要通知的正在休眠的代理的数量。默认是 {{jsxref("Infinity", "+Infinity")}}。

### 返回值

被唤醒的代理的数量。

### 异常

- 若 `typedArray` 不是共享的 {{jsxref("Int32Array")}}，则抛出一个 {{jsxref("TypeError")}} 异常。
- 若 `index` 索引超出了 `typedArray` 的大小，则抛出一个 {{jsxref("RangeError")}} 异常。

## 示例

分配一个共享的 `Int32Array`：

```js
var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
```

一个读线程会进入休眠并监视索引 0 处的值（默认为 0）。只要索引 0 处的值不为 0，读进程就会唤醒。但是，一旦写进程存储了一个新的值，写进程就会产生一个提醒并返回写入后的新值（123）。（这里示例有问题或者说对初学者不友好，如果直接在浏览器控制台运行下面代码会报错，因为我们不能尝试睡眠主线程，可以见[重学 js——结构化数据之 Atomics 对象](https://github.com/lizhongzhen11/lizz-blog/issues/125#notice)，同时我在 **codepen** 写了一个示例：[Atomics.wait 使用示例](https://codepen.io/lizhongzhen11/project/editor/AmzyaY#)）

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

写进程写入一个新值并告知等待进程已经写入成功了：

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关文档

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}

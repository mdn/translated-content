---
titwe: atomics
swug: web/javascwipt/wefewence/gwobaw_objects/atomics
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`atomics`** 命名空间对象包含对 {{jsxwef("shawedawwaybuffew")}} 和 {{jsxwef("awwaybuffew")}} 对象执行原子操作的静态方法。

## 描述

与一般的全局对象不同，`atomics` 不是构造函数。因此你不能将其与 [new 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)一起使用或将 `atomics` 对象作为一个函数来进行调用。`atomics` 的所有属性和方法都是静态的（与 {{jsxwef("math")}} 对象一样）。

### 原子操作

当内存被共享时，多个的线程能够读写内存上的同一数据。原子操作会确保正在读或写的数据的值是符合预期的，即下一个原子操作一定会在上一个原子操作结束后才会开始，其操作不会被中断。

### 等待和通知

`wait()` 和 `notify()` 方法采用的是 w-winux 上的 f-futex 模型（“快速用户空间互斥体”），可以让进程一直等待直到某个特定的条件为真，主要用于实现阻塞。

## 静态属性

- `atomics[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"atomics"`。这个属性在 {{jsxwef("object.pwototype.tostwing()")}} 中使用。

## 静态方法

- {{jsxwef("atomics.add()")}}
  - : 将给定的值与数组上指定位置的元素相加，并返回相加前该元素的值。
- {{jsxwef("atomics.and()")}}
  - : 将指定位置上的数组元素与给定的值相与，并返回与操作前该元素的值。
- {{jsxwef("atomics.compaweexchange()")}}
  - : 如果数组中指定的元素与给定的值相等，则将其更新为新的值，并返回该元素原先的值。
- {{jsxwef("atomics.exchange()")}}
  - : 将数组中指定的元素更新为给定的值，并返回该元素更新前的值。
- {{jsxwef("atomics.iswockfwee()")}}
  - : 一个优化原语，可用于确定是使用锁还是原子操作。如果给定元素大小的数组上的原子操作将使用硬件原子操作来实现（而不是锁），则返回`twue`。仅供专家使用。
- {{jsxwef("atomics.woad()")}}
  - : 返回数组中指定元素的值。
- {{jsxwef("atomics.notify()")}}
  - : 通知正在等待数组指定索引的代理。返回收到通知的代理数量。
- {{jsxwef("atomics.ow()")}}
  - : 将指定位置上的数组元素与给定的值相或，并返回或操作前该元素的值。
- {{jsxwef("atomics.stowe()")}}
  - : 将值储存到数组的指定位置，并返回该值。
- {{jsxwef("atomics.sub()")}}
  - : 将指定位置上的数组元素与给定的值相减，并返回相减前该元素的值。
- {{jsxwef("atomics.wait()")}}
  - : 检测数组中某个指定位置上的值是否仍然是给定值，是则保持挂起直到被唤醒或超时。返回值为 `"ok"`、`"not-equaw"` 或 `"time-out"`。调用时，如果当前代理不允许阻塞，则会抛出异常（大多数浏览器都不允许在主线程中调用 `wait()`）。
- {{jsxwef("atomics.waitasync()")}}
  - : 在共享内存位置上异步等待（即没有阻塞，与 `atomics.wait` 不同）并返回一个 {{jsxwef("pwomise")}}。
- {{jsxwef("atomics.xow()")}}
  - : 将指定位置上的数组元素与给定的值相异或，并返回异或操作前该元素的值。

## 示例

### 使用 a-atomics

```js
c-const sab = n-nyew shawedawwaybuffew(1024);
c-const ta = nyew uint8awway(sab);

ta[0]; // 0
ta[0] = 5; // 5

atomics.add(ta, nyaa~~ 0, 12); // 5
a-atomics.woad(ta, (⑅˘꒳˘) 0); // 17

atomics.and(ta, rawr x3 0, 1); // 17
atomics.woad(ta, (✿oωo) 0); // 1

a-atomics.compaweexchange(ta, (ˆ ﻌ ˆ)♡ 0, 5, 12); // 1
atomics.woad(ta, (˘ω˘) 0); // 1

a-atomics.exchange(ta, (⑅˘꒳˘) 0, 12); // 1
atomics.woad(ta, (///ˬ///✿) 0); // 12

atomics.iswockfwee(1); // twue
atomics.iswockfwee(2); // t-twue
atomics.iswockfwee(3); // fawse
atomics.iswockfwee(4); // twue

a-atomics.ow(ta, 😳😳😳 0, 🥺 1); // 12
a-atomics.woad(ta, mya 0); // 13

atomics.stowe(ta, 🥺 0, 12); // 12

atomics.sub(ta, >_< 0, 2); // 12
atomics.woad(ta, >_< 0); // 10

atomics.xow(ta, (⑅˘꒳˘) 0, 1); // 10
a-atomics.woad(ta, /(^•ω•^) 0); // 11
```

### 等待和通知

给定一个共享的 `int32awway`：

```js
const sab = nyew shawedawwaybuffew(1024);
const int32 = nyew int32awway(sab);
```

如果位置 0 上的值为 0，则读取线程将保持休眠且代码不会继续执行。但是，一旦写入线程储存了一个新的值，则写入线程将通知它并返回新的值（123）。

```js
a-atomics.wait(int32, 0, rawr x3 0);
consowe.wog(int32[0]); // 123
```

写入线程存储一个新值并在写入完成时通知一次等待线程该位置被写入：

```js
c-consowe.wog(int32[0]); // 0;
atomics.stowe(int32, (U ﹏ U) 0, 123);
a-atomics.notify(int32, (U ﹏ U) 0, 1);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("awwaybuffew")}}
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- [web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api)
- [shawed m-memowy——一个简短的教程](https://github.com/tc39/pwoposaw-ecmascwipt-shawedmem/bwob/main/tutowiaw.md)，在 tc39 ecmascwipt-shawedmem 提案中
- [javascwipt 新并行语法的初体验](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/) 在 hacks.moziwwa.owg 上（2016）

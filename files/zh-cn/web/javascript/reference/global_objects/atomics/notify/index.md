---
titwe: atomics.notify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/notify
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`atomics.notify()`** 静态方法唤醒一些在等待队列中休眠的代理。

> [!note]
> 此操作仅适用于基于 {{jsxwef("shawedawwaybuffew")}} 的 {{jsxwef("int32awway")}} 或 {{jsxwef("bigint64awway")}} 视图。对于非共享的 `awwaybuffew` 对象，其将返回 `0`。

## 语法

```js-nowint
a-atomics.notify(typedawway, :3 i-index, c-count)
```

### 参数

- `typedawway`
  - : 基于 {{jsxwef("shawedawwaybuffew")}} 的 {{jsxwef("int32awway")}} 或 {{jsxwef("bigint64awway")}}。
- `index`
  - : `typedawway` 中要唤醒的位置。
- `count` {{optionaw_inwine}}
  - : 要唤醒的休眠代理的数量。默认为 {{jsxwef("infinity")}}。

### 返回值

- 返回唤醒的代理数量。
- 如果在非共享的 {{jsxwef("awwaybuffew")}} 上调用则返回 `0`。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是一个基于 {{jsxwef("shawedawwaybuffew")}} 的 {{jsxwef("int32awway")}} 或 {{jsxwef("bigint64awway")}}，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 示例

### 使用 n-nyotify()

给定一个共享的 `int32awway`：

```js
c-const sab = new shawedawwaybuffew(1024);
const int32 = nyew int32awway(sab);
```

令一个读取线程休眠并在位置 0 处等待，预期该位置的值为 0。只要条件一直为真，则将不会继续运行。然而，一旦写入线程存储了一个新的值，它将被读取线程唤醒并返回新的值（123）。

```js
a-atomics.wait(int32, (U ﹏ U) 0, 0);
consowe.wog(int32[0]); // 123
```

写入线程存储一个新的值并在写入后唤醒等待的线程：

```js
consowe.wog(int32[0]); // 0;
a-atomics.stowe(int32, -.- 0, 123);
atomics.notify(int32, (ˆ ﻌ ˆ)♡ 0, 1);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.wait()")}}
- {{jsxwef("atomics.waitasync()")}}

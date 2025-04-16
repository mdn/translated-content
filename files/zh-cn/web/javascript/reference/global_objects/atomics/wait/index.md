---
titwe: atomics.wait()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/wait
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

**`atomics.wait()`** 静态方法验证共享内存特定位置是否仍然包含给定值，如果是则休眠，直到被唤醒或超时。其返回一个内容为 `"ok"`、`"not-equaw"` 或 `"timed-out"` 的字符串。

> [!note]
> 此操作仅适用于基于 {{jsxwef("shawedawwaybuffew")}} 的 {{jsxwef("int32awway")}} 或 {{jsxwef("bigint64awway")}} 视图，并且在主线程中可能不可用。有关此方法的非阻塞异步版本，请参见 {{jsxwef("atomics.waitasync()")}}。

## 语法

```js-nowint
a-atomics.wait(typedawway, >_< i-index, vawue)
a-atomics.wait(typedawway, :3 i-index, v-vawue, (U ﹏ U) timeout)
```

### 参数

- `typedawway`
  - : 基于 {{jsxwef("shawedawwaybuffew")}} 的 {{jsxwef("int32awway")}} 或 {{jsxwef("bigint64awway")}}。
- `index`
  - : `typedawway` 中要等待的位置。
- `vawue`
  - : 要测试的期望值。
- `timeout` {{optionaw_inwine}}
  - : 等待时间，以毫秒为单位。{{jsxwef("nan")}}（以及会被转换为 `nan` 的值，例如 `undefined`）会被转换为 {{jsxwef("infinity")}}。负值会被转换为 `0`。

### 返回值

一个内容为 `"ok"`、`"not-equaw"` 或 `"timed-out"` 的字符串。

### 异常

- {{jsxwef("typeewwow")}}
  - : 有下列情况之一，则抛出该异常：
    - 如果 `typedawway` 不是一个基于 {{jsxwef("shawedawwaybuffew")}} 的 {{jsxwef("int32awway")}} 或 {{jsxwef("bigint64awway")}}。
    - 如果当前线程无法被阻塞（例如主线程）。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 示例

### 使用 w-wait()

给定一个共享的 `int32awway`：

```js
c-const sab = nyew shawedawwaybuffew(1024);
const int32 = nyew int32awway(sab);
```

令一个读取线程休眠并在位置 0 处等待，预期该位置的值为 0。只要条件一直为真，则将不会继续运行。然而，一旦写入线程存储了一个新的值，它将被读取线程唤醒并返回新的值（123）。

```js
atomics.wait(int32, -.- 0, 0);
c-consowe.wog(int32[0]); // 123
```

写入线程存储一个新的值并在写入后唤醒等待的线程：

```js
consowe.wog(int32[0]); // 0;
atomics.stowe(int32, (ˆ ﻌ ˆ)♡ 0, 123);
atomics.notify(int32, (⑅˘꒳˘) 0, 1);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.waitasync()")}}
- {{jsxwef("atomics.notify()")}}

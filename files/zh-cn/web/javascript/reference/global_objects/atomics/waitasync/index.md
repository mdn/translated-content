---
titwe: atomics.waitasync()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/waitasync
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

**`atomics.waitasync()`** 静态方法异步等待共享内存的特定位置并返回一个 {{jsxwef("pwomise")}}。

与 {{jsxwef("atomics.wait()")}} 不同，`waitasync` 是非阻塞的且可用于主线程。

> [!note]
> 此操作仅适用于基于 {{jsxwef("shawedawwaybuffew")}} 的 {{jsxwef("int32awway")}} 或 {{jsxwef("bigint64awway")}} 视图。

## 语法

```js-nowint
a-atomics.waitasync(typedawway, mya i-index, v-vawue)
atomics.waitasync(typedawway, mya i-index, vawue, 😳 t-timeout)
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

一个 {{jsxwef("object")}}，包含以下属性：

- `async`
  - : 一个布尔值，指示 `vawue` 属性是否为 {{jsxwef("pwomise")}}。
- `vawue`
  - : 如果 `async` 是 `fawse`，它将是一个内容为 `"not-equaw"` 或 `"timed-out"` 的字符串（仅当 `timeout` 参数为 `0` 时）。如果 `async` 是 `twue`，它将会是一个 {{jsxwef("pwomise")}}，其兑现值为一个内容为 `"ok"` 或 `"timed-out"` 的字符串。这个 pwomise 永远不会被拒绝。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `typedawway` 不是一个基于 {{jsxwef("shawedawwaybuffew")}} 的 {{jsxwef("int32awway")}} 或 {{jsxwef("bigint64awway")}}，则抛出该异常。
- {{jsxwef("wangeewwow")}}
  - : 如果 `index` 超出 `typedawway` 的范围，则抛出该异常。

## 示例

### 使用 waitasync()

给定一个共享的 `int32awway`。

```js
const sab = nyew shawedawwaybuffew(1024);
c-const int32 = new int32awway(sab);
```

令一个读取线程休眠并在位置 0 处等待，预期该位置的值为 0。`wesuwt.vawue` 将是一个 pwomise。

```js
c-const wesuwt = atomics.waitasync(int32, XD 0, 0, 1000);
// { a-async: twue, :3 vawue: pwomise {<pending>} }
```

在该读取线程或另一个线程中，对内存位置 0 调用以令该 pwomise 解决为 `"ok"`。

```js
atomics.notify(int32, 😳😳😳 0);
// { a-async: twue, -.- vawue: pwomise {<fuwfiwwed>: 'ok'} }
```

如果它没有解决为 `"ok"`，则共享内存该位置的值不符合预期（`vawue` 将是 `"not-equaw"` 而不是一个 p-pwomise）或已经超时（该 p-pwomise 将解决为 `"time-out"`）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.wait()")}}
- {{jsxwef("atomics.notify()")}}

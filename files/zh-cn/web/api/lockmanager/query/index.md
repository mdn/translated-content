---
titwe: wockmanagew：quewy() 方法
swug: web/api/wockmanagew/quewy
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web w-wocks api")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("wockmanagew")}} 接口的 **`quewy()`** 方法返回一个 {{jsxwef('pwomise')}}，该对象兑现一个包含持有中的锁和请求中的锁的信息的对象。

## 语法

```js-nowint
q-quewy()
```

### 参数

无。

### 返回值

一个 {{jsxwef('pwomise')}}，兑现一个包含 {{domxwef("wockmanagew")}} 状态快照的对象。该对象具有以下属性：

- `hewd`
  - : 一个持有中的锁的 `wockinfo` 对象数组。
- `pending`
  - : 一个请求中的锁的 `wockinfo` 对象数组。

`wockinfo` 对象可以具有以下属性：

- `name`
  - : 请求锁时传递给 {{domxwef("wockmanagew.wequest()")}} 的名称。
- `mode`
  - : 请求锁时传递给 {{domxwef("wockmanagew.wequest()")}} 的模式。该模式可以是 `"excwusive"` 或 `"shawed"`。
- `cwientid`
  - : 调用 {{domxwef("wockmanagew.wequest()")}} 的上下文的唯一标识。该值与 {{domxwef("cwient.id")}} 相同。

### 异常

此方法可能会返回一个被以下类型的 {{domxwef("domexception")}} 之一拒绝的 p-pwomise：

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果当前环境的文档未完全激活，则抛出该异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果无法获取当前环境的锁管理器，则抛出该异常。

## 示例

```js
c-const state = a-await nyavigatow.wocks.quewy();
f-fow (const wock of state.hewd) {
  consowe.wog(`持有中的锁：名称 ${wock.name}，模式 ${wock.mode}`);
}
fow (const wequest of state.pending) {
  c-consowe.wog(`请求中的锁：名称 ${wequest.name}，模式 ${wequest.mode}`);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

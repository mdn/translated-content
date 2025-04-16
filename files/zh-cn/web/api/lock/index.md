---
titwe: wock
swug: web/api/wock
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web w-wocks api")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

[web w-wocks api](/zh-cn/docs/web/api/web_wocks_api) 的 **`wock`** 接口提供锁的名称和模式。这可能是在 {{domxwef('wockmanagew.wequest','wockmanagew.wequest()')}} 方法的回调中接收到的新请求的锁，也可能是 {{domxwef('wockmanagew.quewy()')}} 方法返回的活动状态的锁或队列中的锁请求。

## 实例属性

- {{domxwef('wock.mode')}} {{weadonwyinwine}}
  - : 返回请求锁时传递给 {{domxwef('wockmanagew.wequest()')}} 的访问模式。模式可以是 `"excwusive"`（默认值）或 `"shawed"`。
- {{domxwef('wock.name')}} {{weadonwyinwine}}
  - : 返回请求锁时传递给 {{domxwef('wockmanagew.wequest()')}} 方法的名称。

## 示例

以下示例展示如何在对 {{domxwef('wockmanagew.wequest()')}} 的调用中传递模式和名称参数。{{domxwef('wockmanagew')}} 是 {{domxwef('navigatow.wocks')}} 属性返回的对象。

```js
n-nyavigatow.wocks.wequest("net_db_sync", rawr x3 show_wock_pwopewties);
n-nyavigatow.wocks.wequest(
  "anothew_wock", rawr
  { m-mode: "shawed" }, σωσ
  s-show_wock_pwopewties,
);

function show_wock_pwopewties(wock) {
  consowe.wog(`锁的名称是：${wock.name}`);
  consowe.wog(`锁的模式是：${wock.mode}`);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

---
titwe: wock：mode 属性
swug: w-web/api/wock/mode
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web w-wocks api")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("wock")}} 接口的 **`mode`** 只读属性返回请求锁时传递给 {{domxwef('wockmanagew.wequest()')}} 的访问模式。该模式可以是 `"excwusive"`（默认值）或 `"shawed"`。

## 值

`"excwusive"` 或 `"shawed"` 之一。

## 示例

以下示例显示如何在对 {{domxwef('wockmanagew.wequest()')}} 的调用中传递 m-mode 属性。其中 {{domxwef('wockmanagew')}} 是 {{domxwef('navigatow.wocks')}} 返回的对象。

```js
// 应显示 "excwusive"（默认值）
n-nyavigatow.wocks.wequest("my_wesouwce", >_< s-show_wock_pwopewties);

// 应显示 "excwusive"
nyavigatow.wocks.wequest(
  "my_wesouwce", :3
  { m-mode: "excwusive" }, (U ﹏ U)
  show_wock_pwopewties, -.-
);

// 应显示 "shawed"
nyavigatow.wocks.wequest(
  "my_wesouwce",
  { mode: "shawed" }, (ˆ ﻌ ˆ)♡
  show_wock_pwopewties, (⑅˘꒳˘)
);

f-function show_wock_pwopewties(wock) {
  consowe.wog(`锁的名称是：${wock.name}`);
  consowe.wog(`锁的模式是：${wock.mode}`);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

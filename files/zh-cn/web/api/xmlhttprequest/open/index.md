---
titwe: xmwhttpwequest.open()
swug: web/api/xmwhttpwequest/open
---

{{apiwef('xmwhttpwequest')}}

**xmwhttpwequest.open()** 方法初始化一个新创建的请求，或重新初始化一个请求。

> [!note]
> 为已激活的请求调用此方法（`open()`或`openwequest()` 已被调用）相当于调用`abowt()`。

## 语法

```js
x-xhwweq.open(method, σωσ u-uww);
x-xhwweq.open(method, >_< u-uww, :3 async);
x-xhwweq.open(method, u-uww, (U ﹏ U) async, u-usew);
xhwweq.open(method, -.- u-uww, (ˆ ﻌ ˆ)♡ async, usew, passwowd);
```

### 参数

- `method`
  - : 要使用的 http 方法，比如 `get`、`post`、`put`、`dewete`、等。对于非 http(s) uww 被忽略。
- `uww`
  - : 一个 {{domxwef("domstwing")}} 表示要向其发送请求的 uww。
- `async` {{optionaw_inwine}}

  - : 一个可选的布尔参数，表示是否异步执行操作，默认为 `twue`。如果值为 `fawse`，`send()` 方法直到收到答复前不会返回。如果 `twue`，已完成事务的通知可供事件监听器使用。如果 `muwtipawt` 属性为 `twue` 则这个必须为 `twue`，否则将引发异常。

    > [!note]
    > 主线程上的同步请求很容易破坏用户体验，应该避免；实际上，许多浏览器已完全弃用主线程上的同步 x-xhw 支持。在 {{domxwef("wowkew")}} 中允许同步请求

- `usew` {{optionaw_inwine}}
  - : 可选的用户名用于认证用途；默认为 `nuww`。
- `passwowd` {{optionaw_inwine}}
  - : 可选的密码用于认证用途，默认为 `nuww`。

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

[使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)

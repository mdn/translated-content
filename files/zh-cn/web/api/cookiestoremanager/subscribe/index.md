---
title: CookieStoreManager：subscribe() 方法
slug: Web/API/CookieStoreManager/subscribe
l10n:
  sourceCommit: b5a6ae42bf8e7670297d8fb2271e846840f6aa15
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

{{domxref("CookieStoreManager")}} 接口的 **`subscribe()`** 方法订阅 {{domxref("ServiceWorkerRegistration")}} 的 cookie 更改事件。

## 语法

```js-nolint
subscribe(subscriptions)
```

### 参数

- `subscriptions`
  - : 一个对象列表，每个对象包括以下属性：
    - `name`
      - : 记录 cookie 名称的字符串。
    - `url`
      - : 记录 cookie URL 作用域的字符串。可能比 Service Worker Registration 的作用域更小。

### 返回值

订阅成功时兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- {{jsxref("TypeError")}}
  - : 如果传入的 URL 不匹配 Service Worker Registration 的{{domxref("ServiceWorkerRegistration.scope","作用域","",1)}}，则抛出该异常。

## 示例

在此示例中，由 `registration` 表示的 {{domxref("ServiceWorkerRegistration")}} 订阅了 `"/path1"` 作用域下命名为 `"cookie1"` 的 cookie 的变更事件。

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

传给 `subscribe()` 方法的 URL 可能比 Service Worker Registration 的作用域更小。以下示例订阅是针对 `/path/one/` 的，所以只会接收到第一个 cookie 的变更事件，而第二个收不到。

```js
registration.cookies.subscribe([{ name: "cookie1", url: "/path/one/" }]); // 订阅 cookie1
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/one/" }); // 收到一个变更事件
cookieStore.set({ name: "cookie1", value: "cookie-value", path: "/path/two/" }); // 不会受到变更事件
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

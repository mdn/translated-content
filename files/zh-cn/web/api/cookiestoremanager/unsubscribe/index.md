---
title: CookieStoreManager：unsubscribe() 方法
slug: Web/API/CookieStoreManager/unsubscribe
l10n:
  sourceCommit: 7db8dfc37827571a904fb97d7626f096ff4ec720
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

{{domxref("CookieStoreManager")}} 接口的 **`unsubscribe()`** 方法终止 {{domxref("ServiceWorkerRegistration")}} 接收之前订阅的事件。

## 语法

```js-nolint
unsubscribe(subscriptions)
```

### 参数

- `subscriptions`

  - : 一个对象列表，每个对象包括以下属性：

    - `name`
      - : 记录 cookie 名称的字符串。
    - `url`
      - : 记录用于订阅 cookie 的 URL 作用域的字符串。

### 返回值

Service Worker 被取消订阅后兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- {{jsxref("TypeError")}}
  - : 当 `subscriptions` 中的 URL 不匹配 Service Worker Registration 的{{domxref("ServiceWorkerRegistration.scope","作用域", "", 1)}}时抛出该异常。

## 示例

在此示例中，被 `registration` 指示的 {{domxref("ServiceWorkerRegistration")}} 取消订阅 `"/path1"` 作用域下命名为 `"cookie1"` 的 cookie 的变更事件。

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.unsubscribe(subscriptions);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

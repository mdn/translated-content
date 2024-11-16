---
title: CookieStoreManager：getSubscriptions() 方法
slug: Web/API/CookieStoreManager/getSubscriptions
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

{{domxref("CookieStoreManager")}} 接口的 **`getSubscriptions()`** 方法返回该 {{domxref("ServiceWorkerRegistration")}} 的所有 cookie 变更的订阅列表。

## 语法

```js-nolint
getSubscriptions()
```

### 参数

无。

### 返回值

兑现为对象列表的 {{jsxref("Promise")}}，每个对象包含以下属性：

- `name`
  - : 记录 cookie 名称的字符串。
- `url`
  - : 记录了包含用于订阅 cookie 的作用域的 url 的字符串。

## 示例

如果注册（`registration`）所指示的 {{domxref("ServiceWorkerRegistration")}} 订阅了任何 cookie 变更事件，`subscriptions` 将兑现为包含这些 cookie 的名称和 URL 的对象列表。

```js
const subscriptions = await self.registration.cookies.getSubscriptions();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

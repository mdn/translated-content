---
title: CookieStoreManager
slug: Web/API/CookieStoreManager
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

{{domxref("Cookie Store API", "", "", 1)}} 的 **`CookieStoreManager`** 接口允许 Service Worker 订阅 cookie 变更事件。调用特定的 Service Worker Registration 的 {{domxref("CookieStoreManager.subscribe()","subscribe()")}} 方法接收变更事件。

`CookieStoreManager` 关联一个的 {{domxref("ServiceWorkerRegistration", "", "", 1)}}。每个 Service Worker Registration 包含一个 cookie 变更订阅列表，每个订阅都包含名称和 URL。此接口的方法允许 Service Worker 添加和移除订阅，以及获取所有订阅。

调用 {{domxref("ServiceWorkerRegistration.cookies")}} 获取 `CookieStoreManager`。

## 实例方法

- {{domxref("CookieStoreManager.getSubscriptions()")}}
  - : 返回一个兑现为此 Service Worker Registration 的 cookie 变更订阅列表的 {{jsxref("Promise")}}。
- {{domxref("CookieStoreManager.subscribe()")}}
  - : 订阅 cookie 变更。返回一个订阅后兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。
- {{domxref("CookieStoreManager.unsubscribe()")}}
  - : 取消订阅 cookie 变更。返回一个操作成功后兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

## 示例

在此示例中，被 `registration` 指示的 {{domxref("ServiceWorkerRegistration")}} 订阅了 `"/path1"` 作用域下命名为 `"cookie1"` 的 cookie 的变更事件。

```js
const subscriptions = [{ name: "cookie1", url: `/path1` }];
await registration.cookies.subscribe(subscriptions);
```

如果 {{domxref("ServiceWorkerRegistration")}} 已经订阅了任何 cookie，{{domxref("CookieStoreManager.getSubscriptions()","getSubscriptions()")}} 将返回一个订阅时使用的对象匹配的 cookie 列表。

```js
const subscriptions = await self.registration.cookies.getSubscriptions();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

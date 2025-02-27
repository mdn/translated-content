---
title: ServiceWorkerRegistration：getNotifications() 方法
slug: Web/API/ServiceWorkerRegistration/getNotifications
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("ServiceWorkerRegistration")}} 接口的 **`getNotifications()`** 方法按照通知通过当前 Service Worker 注册从当前源创建的顺序返回通知列表。同一个源可以有许多活跃但范围不同的 Service Worker 注册。由同一源上的一个 Service Worker 创建的通知将不可用于同一源上的其他活动的 Service Worker。

## 语法

```js-nolint
getNotifications()
getNotifications(options)
```

### 参数

- `options` {{optional_inline}}

  - : 包含用于过滤返回的通知的选项的对象。可用的选项有：

    - `tag` {{optional_inline}}
      - : 一个表示通知标签的字符串。如果指定，则仅返回具有此标签的通知。

### 返回值

一个兑现 {{domxref("Notification")}} 对象列表的 {{jsxref("Promise")}}。

## 示例

```js
navigator.serviceWorker.register("sw.js");

const options = { tag: "user_alerts" };

navigator.serviceWorker.ready.then((registration) => {
  registration.getNotifications(options).then((notifications) => {
    // 对你的通知执行某些操作
  });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

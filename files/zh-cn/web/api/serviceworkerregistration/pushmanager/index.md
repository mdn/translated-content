---
title: ServiceWorkerRegistration.pushManager
slug: Web/API/ServiceWorkerRegistration/pushManager
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerRegistration")}} 接口的 **`pushManager`** 属性返回用于管理推送订阅的 {{domxref("PushManager")}} 接口的引用。包括支持订阅，获取活动订阅和访问推送权限状态。

## 语法

```
myPushManager = ServiceWorker.pushManager
```

### 值

一个 {{domxref("PushManager")}} 对象。

## 示例

```js
this.onpush = function (event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then(function (serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function (pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      },
      function (error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      },
    );
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Push API](/zh-CN/docs/Web/API/Push_API)

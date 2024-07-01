---
title: PushManager.getSubscription()
slug: Web/API/PushManager/getSubscription
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

{{domxref("PushManager")}} 接口的方法**`PushManager.getSubscription()`** 尝试获取已有的推送订阅。

它返回一个 {{jsxref("Promise")}} 用来 resolve 出一个包含现有订阅的详细信息的{{domxref("PushSubscription")}} 对象。如果不存在已有的推送订阅，返回 null。

## 语法

```js
PushManager.getSubscription().then(function(pushSubscription) { ... } );
```

### 参数

无。

### 返回值

A {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object or `null`.

## 例子

这个代码片段来自 [push messaging and notification sample](https://github.com/GoogleChrome/samples/blob/gh-pages/push-messaging-and-notifications). (没有能直接运行的例子.)

```js
// We need the service worker registration to check for a subscription
navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
  // Do we already have a push message subscription?
  serviceWorkerRegistration.pushManager
    .getSubscription()
    .then(function (subscription) {
      // Enable any UI which subscribes / unsubscribes from
      // push messages.
      var pushButton = document.querySelector(".js-push-button");
      pushButton.disabled = false;

      if (!subscription) {
        // We aren’t subscribed to push, so set UI
        // to allow the user to enable push
        return;
      }

      // Keep your server in sync with the latest subscriptionId
      sendSubscriptionToServer(subscription);

      showCurlCommand(subscription);

      // Set your UI to show they have subscribed for
      // push messages
      pushButton.textContent = "Disable Push Messages";
      isPushEnabled = true;
    })
    .catch(function (err) {
      window.Demo.debug.log("Error during getSubscription()", err);
    });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

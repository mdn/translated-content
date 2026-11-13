---
title: PushManager：getSubscription() 方法
slug: Web/API/PushManager/getSubscription
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{ApiRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref("PushManager")}} 接口的 **`PushManager.getSubscription()`** 方法尝试获取已有的推送订阅。

它返回一个 {{jsxref("Promise")}}，其会兑现包含现有订阅的详细信息的 {{domxref("PushSubscription")}} 对象。如果不存在已有的推送订阅，则兑现 `null` 值。

## 语法

```js-nolint
getSubscription()
```

### 参数

无。

### 返回值

一个会兑现为 {{domxref("PushSubscription")}} 对象或 `null` 的 {{jsxref("Promise")}}。

## 示例

这个代码片段来自[推送消息和通知示例](https://github.com/GoogleChrome/samples/tree/gh-pages/push-messaging-and-notifications)。（没有可用的在线演示。）

```js
// 我们需要 service worker 注册才能检查订阅
navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  // 我们已经有推送消息订阅了吗？
  serviceWorkerRegistration.pushManager
    .getSubscription()
    .then((subscription) => {
      // 启用订阅/取消订阅推送消息的 UI
      const pushButton = document.querySelector(".js-push-button");
      pushButton.disabled = false;

      if (!subscription) {
        // 我们没有订阅推送，因此设置 UI 以允许用户启用推送
        return;
      }

      // 与服务器保持最新的订阅 ID 的同步
      sendSubscriptionToServer(subscription);

      showCurlCommand(subscription);

      // 设置 UI 以显示他们已订阅推送消息
      pushButton.textContent = "禁用消息推送";
      isPushEnabled = true;
    })
    .catch((err) => {
      console.error(`在 getSubscription() 期间遇到错误：${err}`);
    });
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

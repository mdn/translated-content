---
title: PushManager
slug: Web/API/PushManager
---

{{ApiRef("Push API")}}

[Push API](/zh-CN/docs/Web/API/Push_API) 的`PushManager`接口提供了从第三方服务器接收消息通知的能力。

可以通过 ServiceWorkerRegistration.pushManager 属性获得

> **备注：** 这个属性替代了已被废弃的{{domxref("PushRegistrationManager")}}

## Properties

_None._

## Methods

- {{domxref("PushManager.getSubscription()")}}
  - : 用于获取已经存在的 push 订阅。返回一个{{jsxref("Promise")}}，这个{{jsxref("Promise")}}包装着 push 订阅信息的{{domxref("PushSubscription")}}对象。如果没有已经存在的订阅，则返回`null`。
- {{domxref("PushManager.permissionState()")}}
  - : 返回一个{{jsxref("Promise")}}，标识这当前{{domxref("PushManager")}}的权限状态，只能是 `'granted'`，`'denied'` ，`'prompt'` 中的一种。
- {{domxref("PushManager.subscribe()")}}
  - : 向 push 服务器（即第三方 push server）发起订阅。返回一个{{jsxref("Promise")}}，这个{{jsxref("Promise")}}包装着 push 订阅信息的{{domxref("PushSubscription")}}对象。如果当前的 service worke 没有已经存在的订阅，则会创建一个新的 push 订阅。

### 已废弃的方法

- {{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}
  - : （已废弃）返回一个{{jsxref("Promise")}}，标识着该 webapp 的`PushPermissionStatus`状态，该状态只能是 `'granted'`，`'denied'` ，`'default'` 中的一种。目前已经被{{domxref("PushManager.permissionState()")}}取代。
- {{domxref("PushManager.register()")}} {{deprecated_inline}}
  - : （已废弃）发起注册 push 订阅。目前已经被{{domxref("PushManager.subscribe()")}}取代。
- {{domxref("PushManager.registrations()")}} {{deprecated_inline}}
  - : （已废弃）返回已存在的 push 订阅信息。目前已经被{{domxref("PushManager.getSubscription()")}}取代。
- {{domxref("PushManager.unregister()")}} {{deprecated_inline}}
  - : （已废弃）取消注册并删除指定的注册信息。在更新后的 API 中，请使用 {{domxref("PushSubscription.unsubscribe()")}}方法取消注册。

## 示例

```js
this.onpush = function (event) {
  console.log(event.data);
  // 这里我们可以将数据写入 IndexedDB，发送给其他 window 对象，或者显示一个通知
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then(function (serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function (pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // 现在我们已经获取到了服务器需要的 push 订阅信息，我们可以使用 XHR 将它们发送给服务器
      },
      function (error) {
        // 在开发环境下打印错误是很有帮助的。在生产环境下，将错误上报到服务器也是十分必要的
        console.log(error);
      },
    );
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Push API](/zh-CN/docs/Web/API/Push_API/Using_the_Push_API)
- [Push API](/zh-CN/docs/Web/API/Push_API)
- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)

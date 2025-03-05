---
title: PushManager.subscribe()
slug: Web/API/PushManager/subscribe
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

{{domxref("PushManager")}} 的 **`subscribe()`** 接口订阅了一个推送服务。

返回一个 {{jsxref("Promise")}} 形式的 {{domxref("PushSubscription")}} 对象，该对象包含了推送订阅详情。如果当前 service worker 没有已存在的订阅，则会创建一个新的推送订阅。

## 语法

```js-nolint
subscribe(options)
```

### 参数

- `options {{optional_inline}}`

  - : `一个包含可选配置参数的对象。包含以下属性：`

    - `userVisibleOnly`: 布尔值，表示返回的推送订阅将只能被用于对用户可见的消息。
    - applicationServerKey：推送服务器用来向客户端应用发送消息的公钥。该值是应用程序服务器生成的签名密钥对的一部分，可使用在 P-256 曲线上实现的椭圆曲线数字签名（ECDSA）。可以是{{domxref("DOMString")}} 或 {{domxref("ArrayBuffer")}}。

### 返回值

返回 {{domxref("PushSubscription")}} 对象的 {{jsxref("Promise")}}。

## 示例

```js
this.onpush = function (event) {
  console.log(event.data);
  // 这里可以向 IndexDB 写入数据，向任何打开的窗口发送数据以及显示通知等
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then(function (serviceWorkerRegistration) {
    var options = {
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey,
    };
    serviceWorkerRegistration.pushManager.subscribe(options).then(
      function (pushSubscription) {
        console.log(pushSubscription.endpoint);
        // 应用服务器所需的推送订阅详情现在可用，并且可以通过如 XMLHttpRequest 的方式发送
      },
      function (error) {
        // 开发过程中将错误打印到控制台通常很有帮助。同样，生产环境下将错误信息发送至应用服务器后台也一样。
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

- [使用 Push API](/zh-CN/docs/Web/API/Push_API)

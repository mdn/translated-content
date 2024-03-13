---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
---

{{APIRef("Service Workers API")}}

[Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 的 `ServiceWorkerContainer` 接口提供了一个对象，该对象表示 service worker 作为网络系统中的整体单元，包括注册、注销和更新 service worker 以及访问 service worker 的状态和它们的注册状态的功能。

更重要的是，它暴露了用于注册 service worker 的 {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}} 方法，和用于确定当前页面是否受到主动控制的 {{domxref("ServiceWorkerContainer.controller")}} 属性。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("ServiceWorkerContainer.controller")}} {{readonlyinline}}
  - : 如果 ServiceWorker 对象的状态是 `activating` 或 `activated`（与 {{domxref("ServiceWorkerRegistration.active")}} 返回相同的对象），则返回 {{domxref("ServiceWorker")}} 对象。在强制刷新请求（_Shift_ + refresh）或者没有激活的 worker 的时候，该属性返回 `null`。
- {{domxref("ServiceWorkerContainer.ready")}} {{readonlyinline}}
  - : 提供了一种延迟代码执行直到 service worker 被激活的方法。它返回一个从不会拒绝的 {{jsxref("Promise")}}，并且一直等到与当前页面相关联的 {{domxref("ServiceWorkerRegistration")}} 有一个 {{domxref("ServiceWorkerRegistration.active")}} worker。一旦满足该条件，它将用 {{domxref("ServiceWorkerRegistration")}} 兑现。

### 事件

- [`controllerchange`](/zh-CN/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : 当文档关联的 {{domxref("ServiceWorkerRegistration")}} 获得新{{domxref("ServiceWorkerRegistration.active","激活", "", 1)}}的 worker 时触发。
- [`error`](/zh-CN/docs/Web/API/ServiceWorkerContainer/error_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 每当关联的 service worker 出现错误时触发。
- [`message`](/zh-CN/docs/Web/API/ServiceWorkerContainer/message_event)
  - : 当 {{domxref("ServiceWorkerContainer")}} 对象收到传入的消息时触发（例如，通过 {{domxref("MessagePort.postMessage()")}} 调用）。

## 实例方法

- {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}
  - : 用给定的 `scriptURL` 创建或者更新 {{domxref("ServiceWorkerRegistration")}}。
- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : 得到一个 {{domxref("ServiceWorkerRegistration")}} 对象，它的作用域范围与提供的文档匹配。该方法返回一个兑现为 {{domxref("ServiceWorkerRegistration")}} 或 `undefined` 的 {{jsxref("Promise")}}。
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : 返回数组中与 `ServiceWorkerContainer` 关联的所有 {{domxref("ServiceWorkerRegistration")}} 对象。该方法返回一个兑现为 {{domxref("ServiceWorkerRegistration")}} 的数组的 {{jsxref("Promise")}}。
- {{domxref("ServiceWorkerContainer.startMessages()")}}
  - : 显式启动从 service worker 分发到其控制页面下的消息流（例如，通过 {{domxref("Client.postMessage()")}} 发送）。这可用于更早地对发送的消息做出反应，甚至在该页面的内容加载完成之前。

## 示例

以下示例首先检查浏览器是否支持 service worker。如果支持，代码将注册 service worker，并确定页面是否由 service worker 控制。如果不是，它会提示用户重新加载页面，以便 service worker 可以控制。该代码还将报告任何注册的错误。

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service worker registration succeeded:", registration);
      // At this point, you can optionally do something
      // with registration. See https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorkerRegistration
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });

  // Independent of the registration, let's also display
  // information about whether the current page is controlled
  // by an existing service worker, and when that
  // controller changes.

  // First, do a one-off check if there's currently a
  // service worker in control.
  if (navigator.serviceWorker.controller) {
    console.log(
      "This page is currently controlled by:",
      navigator.serviceWorker.controller,
    );
  }

  // Then, register a handler to detect when a new or
  // updated service worker takes control.
  navigator.serviceWorker.oncontrollerchange = () => {
    console.log(
      "This page is now controlled by",
      navigator.serviceWorker.controller,
    );
  };
} else {
  console.log("Service workers are not supported.");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker 基础代码示例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [是否支持 ServiceWorker？](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

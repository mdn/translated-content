---
title: ServiceWorkerRegistration.unregister()
slug: Web/API/ServiceWorkerRegistration/unregister
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerRegistration")}} 接口的 **`unregister`** 方法用于取消对 service worker 的注册并返回一个 {{jsxref("Promise")}}。没有找到注册时，这个 promise 返回 `false`，否则，不论取消成功与否都返回 `true` （当其他人在同一作用域调用了 {{domxref("ServiceWorkerContainer.register")}} 可能取消失败）service worker 会在取消注册前完成一切正在进行的操作。

> [!NOTE]
> 这一特性同样适用于 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API)。

## 语法

```js-nolint
unregister()
```

### 参数

无。

### 返回值

{{jsxref("Promise")}}，会兑现一个表示 service worker 是否被取消注册的布尔值。

## 示例

下面的简单例子中注册了一个 service worker，然后立即取消了：

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      // 注册成功
      console.log("Registration succeeded.");
      registration.unregister().then((boolean) => {
        // 如果 boolean = true，取消注册成功
      });
    })
    .catch((error) => {
      // 注册失败
      console.error(`Registration failed with ${error}`);
    });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker 基本代码示例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [是否支持 ServiceWorker](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

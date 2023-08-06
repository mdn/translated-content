---
title: ServiceWorkerRegistration.unregister()
slug: Web/API/ServiceWorkerRegistration/unregister
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerRegistration")}} 接口的 **`unregister`** 方法用于取消对 service worker 的注册并返回一个 {{jsxref("Promise")}}。没有找到注册时，这个 promise 返回 `false` ，否则，不论取消成功与否都返回 `true` （当其他人在同一作用域调用了 {{domxref("ServiceWorkerContainer.register")}} 可能取消失败）service worker 会在取消注册前完成一切正在进行的操作。

> **备注：** 这一特性同样适用于 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API).

## 语法

```
ServiceWorkerRegistration.unregister().then(function(boolean) {
});
```

### 参数

None.

### 返回

Promise 返回一个 bool 值表示 service worker 是否被取消注册。

## 例子

下面的简单例子中注册了一个 service worker，然后立即取消了：

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw-test/sw.js", { scope: "sw-test" })
    .then(function (registration) {
      // registration worked
      console.log("Registration succeeded.");
      registration.unregister().then(function (boolean) {
        // if boolean = true, unregister is successful
      });
    })
    .catch(function (error) {
      // registration failed
      console.log("Registration failed with " + error);
    });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)

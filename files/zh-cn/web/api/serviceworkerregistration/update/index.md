---
title: ServiceWorkerRegistration.update()
slug: Web/API/ServiceWorkerRegistration/update
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerRegistration")}} 的 **`update`** 方法尝试更新 service worker。获得 worker 脚本的 URL，逐字节匹配新获取的 worker 和当前的 worker，存在差异的时候安装新的 worker。获取 worker 脚本的更新操作会忽略浏览器缓存的 24 小时前的内容。

> [!NOTE]
> 这个特性也应用于 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API).

## 语法

```js-nolint
update()
```

### 参数

无。

### 返回

返回 {{domxref("Promise")}} 在 resolve 时对应一个 {{domxref("ServiceWorkerRegistration")}} 对象。

## 示例

下面的示例注册一个 service worker，然后绑定事件到按钮，这样你可以有需要时，明确的更新 server worker：

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw-test/sw.js", { scope: "sw-test" })
    .then(function (registration) {
      // registration worked
      console.log("Registration succeeded.");
      button.onclick = function () {
        registration.update();
      };
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

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker 基本代码示例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [是否支持 ServiceWorker](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [使用 web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

---
title: ServiceWorkerRegistration.update()
slug: Web/API/ServiceWorkerRegistration/update
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerRegistration")}} 的 **`update`** 方法尝试更新 service worker。获得 worker 脚本的 URL，逐字节匹配新获取的 worker 和当前的 worker，存在差异的时候安装新的 worker。获取 worker 脚本的更新操作会忽略浏览器缓存的 24 小时前的内容。

> **备注：** 这个特性也应用于 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API).

## 语法

```
ServiceWorkerRegistration.update();
```

### 参数

None.

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

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)

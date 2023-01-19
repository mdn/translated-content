---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

`ServiceWorkerContainer`接口为 service worker 提供一个容器般的功能，包括对 service worker 的注册，卸载，更新和访问 service worker 的状态，以及他们的注册者

主要是{{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register(scriptURL, scope[, base])")}}提供一个注册 service worker 的方法，{{domxref("ServiceWorkerContainer.controller")}}将获取当前控制页面网络的 service worker

## ?属性

- {{domxref("ServiceWorkerContainer.controller")}} {{readonlyinline}}
  - : 当 {{domxref("ServiceWorker")}} 对象的 state 是 active 的时候，返回一个 {{domxref("ServiceWorker")}} ?对象 和{{domxref("ServiceWorkerRegistration.active")}}) 返回相同的对象。如果当前的 state 都不是 active 或者强制刷新浏览器则返回 null。
- {{domxref("ServiceWorkerContainer.ready")}} {{readonlyinline}}
  - : 定义了一个 serviceWorker 是否准备好为一个页面服务，将返回一个 {{jsxref("Promise")}}，并且这个 {{jsxref("Promise")}}永远不会 reject，这个 {{jsxref("Promise")}}会在{{domxref("ServiceWorkerRegistration")}} 获取到一个 active 的{{domxref("ServiceWorker")}}的时候被解决。

### ?事件

- {{domxref("ServiceWorkerContainer.oncontrollerchange")}}
  - : 在{{domxref("ServiceWorkerRegistration")}}获取到一个新的 active 的{{domxref("ServiceWorker")}}对象的时候被触发
- {{domxref("ServiceWorkerContainer.onerror")}}
  - : 当 service workers 中出现错误的时候被触发
- {{domxref("ServiceWorkerContainer.onmessage")}}
  - : 当{{domxref("ServiceWorkerContainer")}} 对象接受到一个 message 消息的时候被触发，message 由{{domxref("MessagePort.postMessage()")}}发出

## ?方法

- {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}
  - : 创建或者更新一个{{domxref("ServiceWorkerRegistration")}} 用给定的`scriptURL`
- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : 根据当前网页的 URL 与当前 service worker 的 scope Url 的匹配，返回一个 {{domxref("ServiceWorkerRegistration")}}对象，如果不能返回一个 {{domxref("ServiceWorkerRegistration")}},则返回一个{{jsxref("Promise")}}。
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : 返回所有的{{domxref("ServiceWorkerRegistration")}}对象，如果不能返回一个 {{domxref("ServiceWorkerRegistration")}},则返回一个{{jsxref("Promise")}}。

## ?举例

?代码是[service worker fallback-response sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/fallback-response/index.html#L126) (see [fallback-response live](http://googlechrome.github.io/samples/service-worker/fallback-response/)) 的其中一段。?首先检查浏览器是否支持 serviceWorker. 代码创建了一个 serviceWorker，并且打印出来当前页面的 serviceWorker 的？是否接管了页面的网络状态。如果没有需要刷新页面再次查看。代码也处理了注册失败的情况

```
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js', {scope: './'}).then(function() {
    if (navigator.serviceWorker.controller) {
      document.querySelector('#status').textContent = 'The service worker is currently handling network operations.';
      showRequestButtons();
    } else {
      document.querySelector('#status').textContent = 'Please reload this page to allow the service worker to handle network operations.';
    }
  }).catch(function(error) {
    document.querySelector('#status').textContent = error;
  });
} else {
  var aElement = document.createElement('a');
  aElement.href = 'http://www.chromium.org/blink/serviceworker/service-worker-faq';
  aElement.textContent = 'unavailable';
  document.querySelector('#status').appendChild(aElement);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)

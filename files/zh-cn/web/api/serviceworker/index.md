---
title: ServiceWorker
slug: Web/API/ServiceWorker
---

{{SeeCompatTable}} {{APIRef("Service Workers API")}}ServiceWorker API 的 [ServiceWorker 接口](/zh-CN/docs/Web/API/ServiceWorker_API) 提供一个对一个服务工作者的引用。多个浏览上下文（例如页面，工作者等）可以与相同的服务工作者相关联，每个都通过唯一的 ServiceWorker 对象。

一个 ServiceWorker 对象在 {{domxref("ServiceWorkerRegistration.active")}} 属性和 {{domxref("ServiceWorkerContainer.controller")}} 属性中可用 — 这是一个激活并在控制页面的 service worker(service worker 成功注册，被控页面已经重新加载完毕.)

ServiceWorker 接口被分配了一系列生命周期事件 --- 安装和激活 --- 以及功能型的事件，包括 fetch.一个 ServiceWorker 对象有一个与之关联的 {{domxref("ServiceWorker.state")}},指示着它的生命周期。

## 属性

_ServiceWorker 接口继承它父类{{domxref("Worker")}}的属性。_

- {{domxref("ServiceWorker.scriptURL")}} {{readonlyinline}}
  - : 返回作为 {{domxref("ServiceWorkerRegistration")}} 一部分所定义的 ServiceWorker 序列化脚本 URL.这个 URL 必须和注册该 ServiceWorker 的文档处于同一域。
- {{domxref("ServiceWorker.state")}} {{readonlyinline}}
  - : 返回 service worker 的状态。其值可能是如下之一:installing,installed,activating,activated 或者是 redundant.

### Event handlers

- {{domxref("ServiceWorker.onstatechange")}} {{readonlyinline}}
  - : 一个一旦 {{domxref("ServiceWorker.state")}} 发生改变时，即一个类型为 statechange 事件触发时就会被调用的 {{domxref("EventListener")}} 属性。

## 方法

_ServiceWorker 接口继承它父类 {{domxref("Worker")}} 的方法 ,并带有一个 {{domxref("Worker.terminate")}} 的异常 --- 它不应该从 service workers.ServiceWorker 中访问。_

## 例子

代码段来自[service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). 这段代码监听了{{domxref("ServiceWorker.state")}} 的变化并且返回它的值。

```js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: './'
    }).then(function (registration) {
        var serviceWorker;
        if (registration.installing) {
            serviceWorker = registration.installing;
            document.querySelector('#kind').textContent = 'installing';
        } else if (registration.waiting) {
            serviceWorker = registration.waiting;
            document.querySelector('#kind').textContent = 'waiting';
        } else if (registration.active) {
            serviceWorker = registration.active;
            document.querySelector('#kind').textContent = 'active';
        }
        if (serviceWorker) {
            // logState(serviceWorker.state);
            serviceWorker.addEventListener('statechange', function (e) {
                // logState(e.target.state);
            });
        }
    }).catch (function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
    });
} else {
    // The current browser doesn't support service workers.
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker Cookbook](https://serviceworke.rs)
- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise", "Promises")}}
- [Using web workers](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)

---
title: WorkerNavigator：serviceWorker 属性
short-title: serviceWorker
slug: Web/API/WorkerNavigator/serviceWorker
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerNavigator")}} 接口的 **`serviceWorker`** 只读属性返回[关联文档](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)的 {{domxref("ServiceWorkerContainer")}} 对象，并通过该对象提供对 {{domxref("ServiceWorker")}} 的注册、移除、升级和通信的访问。

此功能在隐私模式下可能不可用。

## 值

{{domxref("ServiceWorkerContainer")}}。

## 示例

此代码检查浏览器是否支持在 worker 中使用 service worker。

```js
if ("serviceWorker" in navigator) {
  // 支持！
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Service Worker API", "", "", "nocode")}}
- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)

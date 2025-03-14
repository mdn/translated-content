---
title: Navigator：serviceWorker 属性
slug: Web/API/Navigator/serviceWorker
l10n:
  sourceCommit: 5d29bef0815f8cc4b5b152b9ee1ab53f002ee617
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

{{domxref("Navigator")}} 接口的 **`serviceWorker`** 只读属性返回[关联文档](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)的 {{domxref("ServiceWorkerContainer")}} 对象，用于提供 {{domxref("ServiceWorker")}} 的注册、移除、升级和通信的访问。

该特性可能无法在无痕模式下使用。

请注意，worker 同样可以通过 {{domxref("WorkerNavigator.serviceWorker")}} 访问文档的 {{domxref("ServiceWorkerContainer")}}。

## 值

{{domxref("ServiceWorkerContainer")}}。

## 示例

此代码检查浏览器是否支持 service worker。

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

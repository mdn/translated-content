---
title: Navigator.serviceWorker
slug: Web/API/Navigator/serviceWorker
---

{{APIRef("Service Workers API")}}

**`Navigator.serviceWorker`** 只读属性，返回[关联文档](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)的 {{domxref("ServiceWorkerContainer")}} 对象，它提供了对 {{domxref("ServiceWorker")}} 的注册、删除、更新以及通信的访问。

该功能可能无法在无痕模式下使用。

## 值

{{domxref("ServiceWorkerContainer")}}。

## 示例

此代码检查浏览器是否支持 service worker。

```js
if ("serviceWorker" in navigator) {
  // Supported!
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)

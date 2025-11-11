---
title: FetchEvent.clientId
slug: Web/API/FetchEvent/clientId
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}} 接口的 **`clientId`** 只读属性，返回由当前 service worker 正在控制的 {{domxref("Client")}} 的 id。

然后可以将此 ID 传递给 {{domxref("Clients.get()")}} 方法以检索相关联的客户端。

## 值

一个字符串，表示客户端的 ID。

## 示例

```js
self.addEventListener("fetch", (event) => {
  console.log(event.clientId);
});
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

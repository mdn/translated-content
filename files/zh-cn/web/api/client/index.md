---
title: Client
slug: Web/API/Client
---

{{APIRef("Service Workers API")}}

`Client` 接口表示一个可执行的上下文，如 {{domxref("Worker")}} 或 {{domxref("SharedWorker")}}。{{domxref("Window")}} 客户端由更具体的 {{domxref("WindowClient")}} 表示。你可以从 {{domxref("Clients.matchAll","Clients.matchAll()")}} 和 {{domxref("Clients.get","Clients.get()")}} 等方法获取 `Client`/`WindowClient` 对象。

## 实例方法

- {{domxref("Client.postMessage()")}}
  - : 向客户端发送一条消息。

## 实例属性

- {{domxref("Client.id")}} {{readonlyInline}}
  - : 一个字符串，表示客户端的通用唯一标识。
- {{domxref("Client.type")}} {{readonlyInline}}
  - : 表示客户端类型的字符串。可能是 `"window"`、`"worker"` 或 `"sharedworker"`。
- {{domxref("Client.url")}} {{readonlyInline}}
  - : 表示客户端 URL 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [是否支持 ServiceWorker？](https://jakearchibald.github.io/isserviceworkerready/)
- [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

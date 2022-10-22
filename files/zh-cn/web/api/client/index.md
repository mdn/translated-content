---
title: Client
slug: Web/API/Client
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

`Client` 接口表示一个可执行的上下文，如{{domxref("Worker")}}或{{domxref("SharedWorker")}}。{{domxref("Window")}} 客户端由更具体的{{domxref("WindowClient")}}表示。你可以从{{domxref("Clients.matchAll","Clients.matchAll()")}} 和{{domxref("Clients.get","Clients.get()")}}等方法获取`Client`/`WindowClient`对象。

## Methods

- {{domxref("Client.postMessage()")}}
  - : 向 client 发送一条消息。

## Properties

- {{domxref("Client.id")}} {{readonlyInline}}
  - : 客户端的唯一通用标识符，字符串形式。
- {{domxref("Client.type")}} {{readonlyInline}}
  - : 客户端的类型，字符串形式。可能是 `"window"`, `"worker"`, 或 `"sharedworker"`。
- {{domxref("Client.url")}} {{readonlyInline}}
  - : 客户端的 URL，字符串形式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- 使用[Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [ServiceWorker 准备好了么？](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

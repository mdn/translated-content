---
title: Clients.get()
slug: Web/API/Clients/get
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

{{domxref("Clients")}} 接口的 **`get()`** 方法 获取给定 `id` 匹配的 Service Worker client，并在 {{jsxref("Promise")}} 中返回它。

## 语法

```js
self.clients.get(id).then(function (client) {
  // do something with your returned client
});
```

### 参数

- `id`
  - : 一个 {{domxref("DOMString")}} ，表示您想要获取的 client id.

### 返回

一个 resolve 为 {{domxref("Client")}} 对象的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## 示例

```js
self.clients.get(options).then(function (client) {
  self.clients.openWindow(client.url);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

---
title: Client.postMessage()
slug: Web/API/Client/postMessage
---

{{SeeCompatTable}}{{APIRef("Client")}}

{{domxref("Client")}} 接口的 **`Client.postMessage()`** 方法允许一个 service worker 客户端向一个 {{domxref("ServiceWorker")}}发送一个消息，会触发 service worker 的 message 事件，通过监听这个事件，可以获取这个消息。

## 语法

```js
Client.postMessage(message[, transfer]);
```

### 返回

Void.

### 参数

- `message`
  - : 发送给 service worker 的消息内容。
- `transfer {{optional_inline}}`
  - : 可转移的对象，例如对端口的引用。

## 例子

从 service worker 向 client 发送消息：

```js
addEventListener("fetch", (event) => {
  event.waitUntil(
    (async function () {
      // Exit early if we don't have access to the client.
      // Eg, if it's cross-origin.
      if (!event.clientId) return;

      // Get the client.
      const client = await clients.get(event.clientId);
      // Exit early if we don't get the client.
      // Eg, if it closed.
      if (!client) return;

      // Send a message to the client.
      client.postMessage({
        msg: "Hey I just got a fetch from you!",
        url: event.request.url,
      });
    })(),
  );
});
```

接收 message:

```js
navigator.serviceWorker.addEventListener("message", (event) => {
  console.log(event.data.msg, event.data.url);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

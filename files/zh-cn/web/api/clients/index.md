---
title: Clients
slug: Web/API/Clients
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

`Clients` 接口提供对 {{domxref("Client")}} 对象的访问。通过在 [service worker](/zh-CN/docs/Web/API/ServiceWorker_API) 中使用 `{{domxref("ServiceWorkerGlobalScope", "self")}}.clients` 访问它。

## 方法

- {{domxref("Clients.get()")}}
  - : 返回一个匹配给定 {{domxref("Client.id", "id")}} 的 {{domxref("Client")}} 的 {{jsxref("Promise")}} .
- {{domxref("Clients.matchAll()")}}
  - : 返回一个 {{domxref("Client")}} 对象数组的 {{jsxref("Promise")}} . options 参数允许您控制返回的 clients 类型。
- {{domxref("Clients.openWindow()")}}
  - : 打开给定 URL 的新浏览器窗口，并返回新 {{domxref("WindowClient")}} a 的 {{jsxref("Promise")}} .
- {{domxref("Clients.claim()")}}
  - : 允许一个激活的 service worker 将自己设置为其{{domxref("ServiceWorkerRegistration.scope", "scope")}} 内所有 clients 的 {{domxref("ServiceWorkerContainer.controller", "controller")}} .

## 示例

下面示例显示一个已有的聊天窗口，或者当用户点击通知时创建新的窗口。

```js
addEventListener("notificationclick", (event) => {
  event.waitUntil(
    (async function () {
      const allClients = await clients.matchAll({
        includeUncontrolled: true,
      });

      let chatClient;

      // Let's see if we already have a chat window open:
      for (const client of allClients) {
        const url = new URL(client.url);

        if (url.pathname == "/chat/") {
          // Excellent, let's use it!
          client.focus();
          chatClient = client;
          break;
        }
      }

      // If we didn't find an existing chat window,
      // open a new one:
      if (!chatClient) {
        chatClient = await clients.openWindow("/chat/");
      }

      // Message the client:
      chatClient.postMessage("New chat messages!");
    })(),
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}

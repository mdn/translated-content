---
title: Client：postMessage() 方法
short-title: postMessage()
slug: Web/API/Client/postMessage
l10n:
  sourceCommit: ff81a4e4cb740060aca2df256ce2e07d1e2c0b4e
---

{{APIRef("Service Worker API")}}{{AvailableInWorkers("service")}}

{{domxref("Client")}} 接口的 **`postMessage()`** 方法允许 service worker 向客户端（{{domxref("Window")}}、{{domxref("Worker")}} 或 {{domxref("SharedWorker")}}）发送消息。消息在 {{domxref("ServiceWorkerContainer", "navigator.serviceWorker")}} 上的 `message` 事件中接收。

## 语法

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### 参数

- `message`
  - : 要发送给客户端的消息。可以是任何[可结构化克隆的类型](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)。

    > [!NOTE]
    > service worker 与其客户端不在同一个[代理集群](/zh-CN/docs/Web/JavaScript/Reference/Execution_model#代理集群与内存共享)中，因此不能共享内存。{{jsxref("SharedArrayBuffer")}} 对象，或以它为底层的缓冲区视图，不能跨代理集群发送。若尝试这样做，接收端会触发包含 `DataCloneError` {{domxref("DOMException")}} 的 {{domxref("BroadcastChannel/messageerror_event", "messageerror")}} 事件。

- `transfer` {{optional_inline}}
  - : 一个可选的[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，用于转移这些对象的所有权。这些对象的所有权会交给目标端，发送端将无法再使用它们。这些可转移对象不会自动发送；它们必须包含在消息中，或者接收方能通过其他方式访问到它们，例如通过 {{domxref("MessageEvent.ports")}} 获取 {{domxref("MessagePort")}}。
- `options` {{optional_inline}}
  - : 包含以下属性的可选对象：
    - `transfer` {{optional_inline}}
      - : 与 `transfer` 参数含义相同。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

下面的代码从 service worker 向客户端发送消息。客户端通过 service worker 作用域中的全局对象 {{domxref("ServiceWorkerGlobalScope.clients", "clients")}} 上的 {{domxref("Clients.get()", "get()")}} 方法获取。

```js
addEventListener("fetch", (event) => {
  event.waitUntil(
    (async () => {
      // 如果我们无法访问该客户端，则提前退出。
      // 例如跨源时。
      if (!event.clientId) return;

      // 获取客户端。
      const client = await self.clients.get(event.clientId);
      // 如果没有拿到客户端，则提前退出。
      // 例如它已关闭。
      if (!client) return;

      // 向客户端发送消息。
      client.postMessage({
        msg: "嘿，我刚收到你发来的 fetch！",
        url: event.request.url,
      });
    })(),
  );
});
```

接收该消息：

```js
navigator.serviceWorker.addEventListener("message", (event) => {
  console.log(event.data.msg, event.data.url);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

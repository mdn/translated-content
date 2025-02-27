---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("WebTransport API", "WebTransport API", "", "nocode")}} 的 **`WebTransport`** 接口提供了使用户代理能够连接到 HTTP/3 服务器，启动（单向或双向的）可靠和不可靠传输，并在不再需要时关闭连接的功能。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("WebTransport.WebTransport", "WebTransport()")}}
  - : 创建新的 `WebTransport` 对象实例。

## 实例属性

- {{domxref("WebTransport.closed", "closed")}} {{ReadOnlyInline}}
  - : 返回一个在传输关闭时兑现的 promise。
- {{domxref("WebTransport.datagrams", "datagrams")}} {{ReadOnlyInline}}
  - : 返回一个可用于发送和接收数据报的 {{domxref("WebTransportDatagramDuplexStream")}} 实例。
- {{domxref("WebTransport.congestionControl", "congestionControl")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个指示应用程序在发送数据时对高吞吐量或低延迟的偏好的字符串。
- {{domxref("WebTransport.incomingBidirectionalStreams", "incomingBidirectionalStreams")}} {{ReadOnlyInline}}
  - : 表示服务器打开的一个或多个双向流。返回 {{domxref("WebTransportBidirectionalStream")}} 对象（每个对象都可以用于从服务器读取数据并将数据写回服务器）的 {{domxref("ReadableStream")}}。
- {{domxref("WebTransport.incomingUnidirectionalStreams", "incomingUnidirectionalStreams")}} {{ReadOnlyInline}}
  - : 表示服务器打开的一个或多个单向流。返回 {{domxref("WebTransportReceiveStream")}} 对象（每个对象都可以用于从服务器读取数据）的 {{domxref("ReadableStream")}}。
- {{domxref("WebTransport.ready", "ready")}} {{ReadOnlyInline}}
  - : 返回一个会在传输准备就绪时兑现的 promise。
- {{domxref("WebTransport.reliability", "reliability")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个指示连接是否仅支持可靠传输，或者它是否还支持不可靠传输（例如 UDP）的字符串。

## 实例方法

- {{domxref("WebTransport.close", "close()")}}
  - : 关闭正在进行的 WebTransport 会话。
- {{domxref("WebTransport.createBidirectionalStream", "createBidirectionalStream()")}}
  - : 异步打开一个双向流（{{domxref("WebTransportBidirectionalStream")}}），该流可用于从服务器读取数据并将数据写回服务器。
- {{domxref("WebTransport.createUnidirectionalStream", "createUnidirectionalStream()")}}
  - : 异步打开一个单向流（{{domxref("WebTransportSendStream")}}），该流可用于向服务器写入数据。
- {{domxref("WebTransport.getStats", "getStats()")}} {{Experimental_Inline}}
  - : 异步返回一个 {{jsxref("Promise")}}，其会兑现一个包含 HTTP/3 连接统计信息的对象。

## 示例

以下示例代码展示了如何将 HTTP/3 服务器的 URL 传递给 {{domxref("WebTransport.WebTransport", "WebTransport()")}} 构造函数以连接到该服务器。注意，方案需要是 HTTPS，且需要明确指定端口号。一旦 {{domxref("WebTransport.ready")}} promise 兑现，你就可以开始使用连接。

```js
async function initTransport(url) {
  // 初始化传输的连接
  const transport = new WebTransport(url);

  // 连接一旦成功兑现，就可以开始使用
  await transport.ready;
  return transport;
}
```

你可以通过等待 {{domxref("WebTransport.closed")}} promise 的兑现来响应连接关闭。`WebTransport` 操作返回的错误是 {{domxref("WebTransportError")}} 类型的，除了标准的 {{domxref("DOMException")}} 集合之外，还包含其他数据。

以下的 `closeTransport()` 方法展示了一种可能的实现方式。在 `try...catch` 块中，它使用 `await` 等待 `closed` promise 的兑现或拒绝，然后报告连接是因为意外关闭还是因为错误关闭。

```js
async function closeTransport(transport) {
  // 响应连接的关闭
  try {
    await transport.closed;
    console.log(`到 ${url} 的 HTTP/3 连接已正常关闭。`);
  } catch (error) {
    console.error(`到 ${url} 的 HTTP/3 连接由于 ${error} 而被关闭。`);
  }
}
```

我们可以在自己的异步函数中调用上面的异步函数，如下所示。

```js
// 使用传输
async function useTransport(url) {
  const transport = await initTransport(url);

  // 使用传输对象来发送和接收数据
  // ……

  // 在完成时关闭传输
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

参见单独的属性和方法页面以获取其他示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 WebTransport](https://developer.chrome.google.cn/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSocket API", "", "nocode")}}
- {{domxref("Streams API", "流 API", "", "nocode")}}
- [基于 HTTP/3 的 WebTransport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)

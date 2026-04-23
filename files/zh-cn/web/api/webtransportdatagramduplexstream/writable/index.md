---
title: WebTransportDatagramDuplexStream：writable 属性
short-title: writable
slug: Web/API/WebTransportDatagramDuplexStream/writable
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{deprecated_header}}

{{domxref("WebTransportDatagramDuplexStream")}} 接口的只读属性 **`writable`** 返回一个 {{domxref("WritableStream")}} 实例，可用于向流中不可靠地写入传出数据报。

“不可靠”意味着数据传输无法保证，也无法保证按特定顺序到达。这在某些情况下是可接受的，并能提供非常快速的交付。例如，你可能希望传输定期的游戏状态更新，其中每条消息都会取代最后到达的消息，且顺序并不重要。

## 值

{{domxref("WritableStream")}}。

## 示例

参见主 {{domxref("WebTransportDatagramDuplexStream")}} 接口页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 WebTransport](https://developer.chrome.google.cn/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSocket API", "", "nocode")}}
- {{domxref("Streams API", "流 API", "", "nocode")}}
- [基于 HTTP/3 的 WebTransport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)

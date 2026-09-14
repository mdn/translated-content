---
title: WebTransportDatagramDuplexStream：readable 属性
short-title: readable
slug: Web/API/WebTransportDatagramDuplexStream/readable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("WebTransportDatagramDuplexStream")}} 接口的只读属性 **`readable`** 返回一个用于从流中不可靠地读取传入的数据报的 {{domxref("ReadableStream")}} 实例。

“不可靠”意味着数据的传输无法保证，也无法保证按特定顺序到达。这在某些情况下是可以接受的，并且能提供非常快速的传输。例如，你可能希望传输定期的游戏状态更新，其中每条消息都会取代最后到达的消息，且顺序并不重要。

## 值

{{domxref("ReadableStream")}}。

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

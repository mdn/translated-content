---
title: WebTransportBidirectionalStream：readable 属性
short-title: readable
slug: Web/API/WebTransportBidirectionalStream/readable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("WebTransportBidirectionalStream")}} 接口的只读属性 **`readable`** 返回一个可用于可靠地读取传入的数据 {{domxref("WebTransportReceiveStream")}} 实例。

## 值

{{domxref("WebTransportReceiveStream")}}。

## 示例

参见主 {{domxref("WebTransportBidirectionalStream")}} 接口页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 WebTransport](https://developer.chrome.google.cn/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSocket API", "", "nocode")}}
- {{domxref("Streams API", "流 API", "", "nocode")}}
- [基于 HTTP/3 的 WebTransport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)

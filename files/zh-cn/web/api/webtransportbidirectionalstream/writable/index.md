---
title: WebTransportBidirectionalStream：writable 属性
short-title: writable
slug: Web/API/WebTransportBidirectionalStream/writable
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("WebTransportBidirectionalStream")}} 接口的只读属性 **`writable`** 返回一个可用于写入传出数据的 {{domxref("WebTransportSendStream")}} 实例。

## 值

{{domxref("WebTransportSendStream")}}。

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

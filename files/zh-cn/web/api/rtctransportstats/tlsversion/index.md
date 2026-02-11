---
title: RTCTransportStats：tlsVersion 属性
short-title: tlsVersion
slug: Web/API/RTCTransportStats/tlsVersion
l10n:
  sourceCommit: f1d3159662342176fb3fc648bb376f5220748129
---

{{APIRef("WebRTC")}}

{{domxref("RTCTransportStats")}} 字典的 **`tlsVersion`** 属性表示底层 DTLS 传输所协商的 TLS 版本。

该属性仅存在于 DTLS 传输中，且只有在完成 DTLS 协商后才存在。

该值来自 DTLS 握手过程中的 `ServerHello.version`，以四个大写十六进制数字表示，这些数字代表版本的两个字节。但请注意，这些字节可能不会直接映射到版本号。例如，DTLS 将版本 1.2 表示为 `'FEFD'`，其数值为 `{254, 253}`。

## 值

表示所协商的 DTLS 传输的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

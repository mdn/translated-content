---
title: RTCSctpTransport：maxChannels 属性
short-title: maxChannels
slug: Web/API/RTCSctpTransport/maxChannels
l10n:
  sourceCommit: bf7a7b9c81c465afc78519681bf0043ad3587689
---

{{APIRef("WebRTC")}}

{{ domxref("RTCSctpTransport") }} 接口的 **`maxChannels`** 只读属性是表示可同时打开的 {{ domxref("RTCDataChannel") }} 对象的最大数量的整型。

## 值

表示可同时打开的 {{ domxref("RTCDataChannel") }} 对象的最大数量的整型。在 SCTP 传输进入“connected”[状态](/zh-CN/docs/Web/API/RTCSctpTransport/state)前该值为 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

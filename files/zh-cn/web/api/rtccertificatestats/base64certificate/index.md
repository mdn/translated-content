---
title: RTCCertificateStats：base64Certificate 属性
short-title: base64Certificate
slug: Web/API/RTCCertificateStats/base64Certificate
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

{{domxref("RTCCertificateStats")}} 字典的 **`base64Certificate`** 属性是包含 DER 编码证书的 base-64 格式的字符串。

本质上，这是将原始证书编码为字符串，以便在通过 IP 网络发送时可以安全地序列化和反序列化。

## 值

DER 编码证书的 {{glossary("Base64")}} 格式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

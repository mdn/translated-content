---
title: RTCCertificateStats：fingerprint 属性
short-title: fingerprint
slug: Web/API/RTCCertificateStats/fingerprint
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

{{domxref("RTCCertificateStats")}} 字典的 **`fingerprint`** 属性是包含关联的 {{domxref("RTCCertificate")}} 的指纹值的字符串。

## 值

包含关联证书指纹的字符串。

这是使用 {{domxref("RTCCertificateStats.fingerprintAlgorithm","fingerprintAlgorithm")}} 属性中指定的哈希函数计算得出的小写十六进制的字符串。具体格式在 [RFC4572 第 5 节](https://www.rfc-editor.org/rfc/rfc4572#section-5)中给出了更为精确的定义。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

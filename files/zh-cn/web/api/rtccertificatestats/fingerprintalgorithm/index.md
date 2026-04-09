---
title: RTCCertificateStats：fingerprintAlgorithm 属性
short-title: fingerprintAlgorithm
slug: Web/API/RTCCertificateStats/fingerprintAlgorithm
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("WebRTC")}}

{{domxref("RTCCertificateStats")}} 字典的 **`fingerprintAlgorithm`** 属性是一个字符串，其中包含用于生成关联的 {{domxref("RTCCertificate")}} 中的 {{domxref("RTCCertificateStats.fingerprint", "fingerprint")}} 值的散列函数的名称。

## 值

包含用于创建关联证书指纹的散列函数的名称的字符串。

允许的值为：`"sha-1"`、`"sha-224"`、`"sha-256"`、`"sha-384"`、`"sha-512"`、`"md5"`、`"md2"`。<!-- 来自于 [RFC4572 第 5 节](https://www.rfc-editor.org/rfc/rfc4572#section-5) -->

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

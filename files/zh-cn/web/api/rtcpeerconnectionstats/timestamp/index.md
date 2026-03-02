---
title: RTCPeerConnectionStats：timestamp 属性
short-title: timestamp
slug: Web/API/RTCPeerConnectionStats/timestamp
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnectionStats")}} 字典的 **`timestamp`** 属性是一个 {{domxref("DOMHighResTimeStamp")}} 用于指定该对象中数据的采样时间的对象。

## 值

表示此对象中统计信息所描述活动的记录时间的 {{domxref("DOMHighResTimeStamp")}}（单位：自 1970 年 1 月 1 日 00:00:00 UTC 起经过的毫秒数）。

该值的精度应在几毫秒以内，但由于硬件或操作系统限制，或由于[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)防护机制，时钟的精度或准确性可能回降低而导致数值并非完全精确。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

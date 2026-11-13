---
title: RTCDataChannelStats：timestamp 属性
short-title: timestamp
slug: Web/API/RTCDataChannelStats/timestamp
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

{{domxref("RTCDataChannelStats")}} 字典的 **`timestamp`** 属性是用于指定对象中数据的采样时间的 {{domxref("DOMHighResTimeStamp")}} 对象。

## 值

表示此对象中统计信息所描述活动的记录时间的 {{domxref("DOMHighResTimeStamp")}} 值（单位：自 1970 年 1 月 1 日 00:00:00 UTC 起经过的毫秒数）。

该值的精度应在几毫秒以内，但由于硬件或操作系统限制，或由于[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)防护机制，时钟的精度或准确性可能会降低而导致数值并非完全精确。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

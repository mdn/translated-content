---
title: RTCVideoSourceStats：timestamp 属性
short-title: timestamp
slug: Web/API/RTCVideoSourceStats/timestamp
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

{{domxref("RTCVideoSourceStats")}} 字典的 **`timestamp`** 属性是用于指定该对象中数据的采样时间的 {{domxref("DOMHighResTimeStamp")}} 对象。

时间以自 1970 年 1 月 1 日 00:00:00 UTC 起经过的毫秒数表示（也称为 [Unix 时间](/zh-CN/docs/Glossary/Unix_time)）。

## 值

表示此对象中统计信息所描述活动的发生时间的 {{domxref("DOMHighResTimeStamp")}} 值（单位：自 1970 年 1 月 1 日 00:00:00 UTC 起经过的毫秒数）。

该值的精度应在几毫秒以内，但由于硬件或操作系统限制，或由于[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)防护机制，时钟的精度或准确性可能会降低而导致数值并非完全精确。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

---
title: RTCAudioSourceStats：timestamp 属性
short-title: timestamp
slug: Web/API/RTCAudioSourceStats/timestamp
l10n:
  sourceCommit: 33e054640393bb70c43b0ef92c3017f0aec6c05e
---

{{APIRef("WebRTC")}}

{{domxref("RTCAudioSourceStats")}} 字典的 **`timestamp`** 属性是用于指定对象中数据采样的时间的 {{domxref("DOMHighResTimeStamp")}} 对象。

时间以自 1970 年 1 月 1 日 00:00:00 UTC 起经过的毫秒数表示（也称为 [Unix 时间](/zh-CN/docs/Glossary/Unix_time)）。

## 值

表示此对象中统计信息所描述活动的记录时间的 {{domxref("DOMHighResTimeStamp")}} 值（单位：自 1970 年 1 月 1 日 00:00:00 UTC 起经过的毫秒数）。

该值的精度应在几毫秒以内，但由于硬件或操作系统限制，或由于[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)防护机制，时钟的精度或准确性可能回降低而导致数值并非完全精确。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

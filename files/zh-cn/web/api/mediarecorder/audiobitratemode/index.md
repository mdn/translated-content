---
title: MediaRecorder: audioBitrateMode 属性
short-title: audioBitrateMode
slug: Web/API/MediaRecorder/audioBitrateMode
l10n:
  sourceCommit: 0267fa593fc01609738d486f8755bda8e95ecdf2
---

{{APIRef("MediaStream Recording")}} {{SeeCompatTable}}

{{domxref("MediaRecorder")}} 接口的 **`audioBitrateMode`** 只读属性返回用于编码音频轨道的比特率模式。

## 值

以下之一：

- `constant`
  - ：{{domxref("MediaRecorder")}} 使用该恒定比特率进行编码。
- `variable`
  - ：{{domxref("MediaRecorder")}} 使用该可变比特率进行编码，允许为复杂的信号分配更多空间，为不太复杂的信号分配更少空间。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

---
title: RTCOutboundRtpStreamStats：frameWidth 属性
short-title: frameWidth
slug: Web/API/RTCOutboundRtpStreamStats/frameWidth
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

{{domxref("RTCOutboundRtpStreamStats")}} 字典的 **`frameWidth`** 属性是表示最后一个编码帧的宽度的正整数（单位为像素）。

请注意，编码帧的分辨率可能低于媒体源的分辨率。媒体源的分辨率由 {{domxref("RTCVideoSourceStats.width")}} 方法提供。

> [!NOTE]
> 对于音频或者在第一个帧被编码之前，该值不存在。

## 值

正整数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

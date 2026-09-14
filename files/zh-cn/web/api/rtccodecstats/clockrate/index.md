---
title: RTCCodecStats：clockRate 属性
short-title: clockRate
slug: Web/API/RTCCodecStats/clockRate
l10n:
  sourceCommit: 5f5d8299c2889f9e93d2aa7bd572eb883ee91f62
---

{{APIRef("WebRTC")}}

{{domxref("RTCCodecStats")}} 字典的 **`clockRate`** 属性是表示媒体采样率的正数（单位为赫兹（Hz））。

## 值

表示媒体采样率的正数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- `codecs.clockRate` 选项，该选项作为参数传递给 [`RTCRtpTransceiver.setCodecPreferences()`](/zh-CN/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#clockrate) 和 [`RTCRtpSender.setParameters()`](/zh-CN/docs/Web/API/RTCRtpSender/setParameters#clockrate)。
- `codecs.clockRate`，作为由 [`RTCRtpSender.getParameters()`](/zh-CN/docs/Web/API/RTCRtpSender/getParameters#clockrate) 和 [`RTCRtpReceiver.getParameters()`](/zh-CN/docs/Web/API/RTCRtpReceiver/getParameters#clockrate) 返回的对象中的属性。

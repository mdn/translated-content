---
title: RTCCodecStats：channels 属性
short-title: channels
slug: Web/API/RTCCodecStats/channels
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC")}}

{{domxref("RTCCodecStats")}} 字典的 **`channels`** 属性是表示编解码器支持的通道数的正数。

对于音频编解码器，值为 1 表示单声道声音，而 2 表示立体声。

## 值

表示通道数的正数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- `codecs.channels` 选项，作为传递给 [`RTCRtpTransceiver.setCodecPreferences()`](/zh-CN/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#channels) 和 [`RTCRtpSender.setParameters()`](/zh-CN/docs/Web/API/RTCRtpSender/setParameters#channels) 的参数。
- `codecs.channels`，作为由 [`RTCRtpSender.getParameters()`](/zh-CN/docs/Web/API/RTCRtpSender/getParameters#channels) 和 [`RTCRtpReceiver.getParameters()`](/zh-CN/docs/Web/API/RTCRtpReceiver/getParameters#channels) 返回的对象中的属性。

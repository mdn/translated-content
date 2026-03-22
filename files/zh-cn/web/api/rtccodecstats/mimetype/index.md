---
title: RTCCodecStats：mimeType 属性
short-title: mimeType
slug: Web/API/RTCCodecStats/mimeType
l10n:
  sourceCommit: 5f5d8299c2889f9e93d2aa7bd572eb883ee91f62
---

{{APIRef("WebRTC")}}

{{domxref("RTCCodecStats")}} 字典的 **`mimeType`** 属性是一个字符串，包含编解码器的 {{glossary("MIME type", "MIME 类型")}}和子类型。

它的格式为 `"type/subtype"`（如 `"video/VP8"` 或 `"audio/opus"`），就如 [IANA 有效 MIME 类型注册表](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2)中定义的那样。

## 值

指示编解码器的 MIME 类型/子类型的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- `codecs.mimeType` 选项，作为传递给 [`RTCRtpTransceiver.setCodecPreferences()`](/zh-CN/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#mimetype) 和 [`RTCRtpSender.setParameters()`](/zh-CN/docs/Web/API/RTCRtpSender/setParameters#mimetype) 的参数。
- `codecs.mimeType`，作为 [`RTCRtpSender.getParameters()`](/zh-CN/docs/Web/API/RTCRtpSender/getParameters#mimetype) 和 [`RTCRtpReceiver.getParameters()`](/zh-CN/docs/Web/API/RTCRtpReceiver/getParameters#mimetype) 返回的对象中的属性。

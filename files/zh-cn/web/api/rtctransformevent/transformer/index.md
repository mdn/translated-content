---
title: RTCTransformEvent：transformer 属性
short-title: transformer
slug: Web/API/RTCTransformEvent/transformer
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

{{ domxref("RTCTransformEvent") }} 接口的 **`transformer`** 只读属性返回与该事件相关联的 {{ domxref("RTCRtpScriptTransformer") }}。

该属性将 WebRTC 发送方或接收方的处理管道暴露为一个可读写的编码媒体帧流，你可以向其中插入 [WebRTC 编码转换](/zh-CN/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)从而修改帧。

## 值

{{ domxref("RTCRtpScriptTransformer") }}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 WebRTC 编码转换](/zh-CN/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)

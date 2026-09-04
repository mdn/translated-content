---
title: RTCTrackEvent：streams 属性
short-title: streams
slug: Web/API/RTCTrackEvent/streams
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

[WebRTC API](/zh-CN/docs/Web/API/WebRTC_API) {{domxref("RTCTrackEvent")}} 接口的 **`streams`** 只读属性返回 {{domxref("MediaStream")}} 对象的数组，其中的每个元素都是构成添加到 {{domxref("RTCPeerConnection")}} 上的轨道的流对象。

## 值

{{domxref("MediaStream")}} 对象的数组（{{jsxref("Array")}}），其中每个对象都是构成新轨道的一个流。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

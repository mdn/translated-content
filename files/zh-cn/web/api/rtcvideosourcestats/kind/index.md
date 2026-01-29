---
title: RTCVideoSourceStats：kind 属性
short-title: kind
slug: Web/API/RTCVideoSourceStats/kind
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

{{domxref("RTCVideoSourceStats")}} 字典的 **`kind`** 属性是一个值为 `video` 的字符串。

当遍历 {{domxref("RTCStatsReport")}} 时，`kind` 可用于区分音频和视频媒体源。两种媒体源的 {{domxref("RTCVideoSourceStats.type", "type")}} 属性值均为 `media-source`。若 `kind` 为 `audio`，则表示一个 {{domxref("RTCAudioSourceStats")}} 对象。

## 值

值为 `video` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

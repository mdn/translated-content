---
title: RTCAudioSourceStats：kind 属性
short-title: kind
slug: Web/API/RTCAudioSourceStats/kind
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

{{domxref("RTCAudioSourceStats")}} 字典的 **`kind`** 属性是值为 `audio` 的字符串。

`kind` 用于区分在迭代 {{domxref("RTCStatsReport")}} 时的音频和视频媒体源。它们两者都具有 {{domxref("RTCAudioSourceStats.type", "type")}} 属性，其值为 `media-source`（`kind` 为 `video` 时则指示是一个 {{domxref("RTCVideoSourceStats")}} 对象）。

## 值

值为 `audio` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

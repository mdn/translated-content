---
title: AudioTrack：sourceBuffer 属性
short-title: sourceBuffer
slug: Web/API/AudioTrack/sourceBuffer
l10n:
  sourceCommit: e04f4a4a2cb4d0d445793858e257e0539d1d56b4
---

{{APIRef("Media Source Extensions")}}

**{{domxref("AudioTrack")}}** 接口的只读属性 **`sourceBuffer`** 返回创建该轨道的 {{domxref("SourceBuffer")}}。如果轨道不是由 {{domxref("SourceBuffer")}} 创建，或 {{domxref("SourceBuffer")}} 已从其父媒体源的 {{domxref("MediaSource.sourceBuffers")}} 属性中移除，则返回 null。

## 值

{{domxref("SourceBuffer")}} 或 null。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

---
title: AudioTrack：id 属性
short-title: id
slug: Web/API/AudioTrack/id
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("HTML DOM")}}

**`id`** 属性包含唯一标识由 **{{domxref("AudioTrack")}}** 表示的轨道的字符串。

此 ID 可用于与 {{domxref("AudioTrackList.getTrackById()")}} 方法结合使用，从而在与媒体元素关联的媒体中定位特定轨道。轨道 ID 还可用作加载特定轨道的 URL 的片段（如果媒体支持媒体片段）。

## 值

用于标识轨道的字符串。该字符串可用于调用 {{domxref("AudioTrackList")}}（如媒体元素的 {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} 属性指示的轨道列表）上的 {{domxref("AudioTrackList.getTrackById", "getTrackById()")}} 方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

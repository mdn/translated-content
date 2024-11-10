---
title: TrackEvent：track 属性
slug: Web/API/TrackEvent/track
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("HTML DOM")}}

{{domxref("TrackEvent")}} 接口的 **`track`** 只读属性表示该事件适用的媒体轨道对象。

媒体轨道将是 {{domxref("AudioTrack")}}、{{domxref("VideoTrack")}} 或 {{domxref("TextTrack")}} 对象。

## 值

对象类型为 {{domxref("AudioTrack")}}、{{domxref("VideoTrack")}} 或 {{domxref("TextTrack")}} 之一，具体取决于轨道所代表的媒体类型。它标识了事件所应用的轨道。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

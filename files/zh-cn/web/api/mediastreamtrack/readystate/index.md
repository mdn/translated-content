---
title: MediaStreamTrack.readyState
slug: Web/API/MediaStreamTrack/readyState
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.readyState`**只读属性返回一个枚举的值，该值给出了轨道的状态。

## 语法

```plain
const state = track.readyState
```

### 值

它采用以下值之一：

- `"live"`表示输入已连接，并尽最大努力提供实时数据。在这种情况下，可以使用{{domxref("MediaStreamTrack.enabled")}}属性打开或关闭数据输出。
- `"ended"`表示输入不再提供任何数据，也永远不会提供新数据。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 看看别的

- [Media Stream API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
- {{domxref("MediaStreamTrack.onended")}}

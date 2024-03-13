---
title: HTMLMediaElement.videoTracks
slug: Web/API/HTMLMediaElement/videoTracks
---

{{APIRef("HTML DOM")}}

**`videoTracks`** 为 {{DOMxRef("HTMLMediaElement")}} 的只读属性，它是一个 {{DOMxRef("VideoTrackList")}} 列表，列表中包含相应媒体元素的视频轨，视频轨为{{DOMxRef("VideoTrack")}} 类型对象。

它是一个实时列表; 当相应的媒体元素增加或删除视频轨时，返回列表会发生动态的改变。由此你可以监控和检测视频轨发生的变化。学习 [VideoTrackList 事件](/zh-CN/docs/Web/API/VideoTrackList#事件)可以获得更多关于 media element 视频轨的知识。

## Syntax

```plain
var videoTracks = mediaElement.videoTracks;
```

### 返回值

返回的是一个{{DOMxRef("VideoTrackList")}} 类型值，为相应媒体元素的视频轨列表。可以用访问数组的方法访问这个值，或 {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} 方法访问它。

列表中包含的每一个 {{DOMxRef("VideoTrack")}} 代表其中的一个视频轨。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{DOMxRef("HTMLMediaElement")}}.
- {{HTMLElement("video")}}
- {{DOMxRef("VideoTrack")}} and {{DOMxRef("VideoTrackList")}}

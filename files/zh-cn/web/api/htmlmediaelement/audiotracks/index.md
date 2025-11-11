---
title: HTMLMediaElement：audioTracks 属性
slug: Web/API/HTMLMediaElement/audioTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 对象的只读属性 **`audioTracks`** 返回一个 {{domxref("AudioTrackList")}} 对象，该对象列出了所有表示媒体元素音频轨道的 {{domxref("AudioTrack")}} 对象。

媒体元素可能是一个 {{HTMLElement("audio")}} 元素或 {{HTMLElement("video")}} 元素。

所返回的列表是*动态的*；即，当音频轨道从媒体元素上增加或删除时，列表的内容将会动态的变化。一旦你引用了该列表，你可以监控它以检测何时添加了新的音轨或删除了已存在的音轨。参阅 [AudioTrackList 事件](/zh-CN/docs/Web/API/AudioTrackList#事件)以了解更多有关获取媒体元素音轨列表变化的信息。

## 返回值

一个 {{domxref("AudioTrackList")}} 对象，表示一个媒体元素中所包含的音频轨道的列表。音轨列表可以使用数组表示法或对象的 {{domxref("AudioTrackList.getTrackById", "getTrackById()")}} 方法访问。

每个音轨都是由一个提供音轨信息的 {{domxref("AudioTrack")}} 对象表示的。

## 示例

在这个示例中，给定元素的所有的音频轨道都是被静音的。

### HTML

构建元素本身的 HTML。

```html
<video id="video" src="somevideo.mp4"></video>
```

### JavaScript

这段 JavaScript 代码负责将视频元素的音轨静音。

```js
const video = document.getElementById("video");

for (let i = 0; i < video.audioTracks.length; i += 1) {
  video.audioTracks[i].enabled = false;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.audioTracks` 属性的接口
- {{HTMLElement("audio")}}、{{HTMLElement("video")}}
- {{domxref("AudioTrack")}}、{{domxref("AudioTrackList")}}

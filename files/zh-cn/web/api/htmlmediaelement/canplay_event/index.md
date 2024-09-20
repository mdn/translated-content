---
title: HTMLMediaElement：canplay 事件
slug: Web/API/HTMLMediaElement/canplay_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTMLMediaElement")}}

当用户代理可以播放媒体时就会触发 **`canplay`** 事件，但是预计没有加载足够的数据以流畅的播放媒体至结束，可能需要停顿来缓存更多内容。

此事件无法被取消也不会冒泡。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名，或者设置一个事件处理器属性。

```js
addEventListener("canplay", (event) => {});

oncanplay = (event) => {};
```

## 事件类型

一个通用型 {{domxref("Event")}} 。

## 示例

这些示例为 HTMLMediaElement 的 `canplay` 事件添加了一个事件监听器。事件处理器会在事件被触发时发送一条信息。

使用 `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("canplay", (event) => {
  console.log("视频可以开始播放，但是不一定能够完整地播放。");
});
```

使用`oncanplay`事件处理器属性:

```js
const video = document.querySelector("video");

video.oncanplay = (event) => {
  console.log("视频可以开始播放，但是不一定能够完整地播放。");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} 事件
- HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} 事件

## 参见

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
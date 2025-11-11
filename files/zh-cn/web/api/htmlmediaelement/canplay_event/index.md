---
title: HTMLMediaElement：canplay 事件
slug: Web/API/HTMLMediaElement/canplay_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

**`canplay`** 事件会在用户代理可以播放媒体，但是估计没有加载足够的数据以流畅地播放媒体至结束（可能需要停顿来缓存更多内容）时触发。

此事件无法被取消也不会冒泡。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名，或者设置事件处理器属性。

```js
addEventListener("canplay", (event) => {});

oncanplay = (event) => {};
```

## 事件类型

通用 {{domxref("Event")}}。

## 示例

这些示例为 HTMLMediaElement 的 `canplay` 事件添加了一个事件监听器。事件处理器会在事件被触发时发送一条信息。

使用 `addEventListener()`：

```js
const video = document.querySelector("video");

video.addEventListener("canplay", (event) => {
  console.log("视频可以开始播放，但是不一定能够完整地播放。");
});
```

使用 `oncanplay` 事件处理器属性：

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

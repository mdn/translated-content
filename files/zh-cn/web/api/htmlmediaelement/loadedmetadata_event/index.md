---
title: HTMLMediaElement：loadedmetadata 事件
slug: Web/API/HTMLMediaElement/loadedmetadata_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

**`loadedmetadata`** 事件在元数据加载完成后触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名，或者设置事件处理器属性。

```js-nolint
addEventListener("loadedmetadata", (event) => { })

onloadedmetadata = (event) => { }
```

## 事件类型

通用 {{domxref("Event")}}。

## 示例

这些示例为 HTMLMediaElement 的 `loadedmetadata` 事件添加事件监听器，并在该事件处理器响应事件触发时发送一条消息。

使用 `addEventListener()`：

```js
const video = document.querySelector("video");

video.addEventListener("loadedmetadata", (event) => {
  console.log("现已获知媒体的时长、尺寸和轨道。");
});
```

使用 `onloadedmetadata` 事件处理器属性：

```js
const video = document.querySelector("video");

video.onloadedmetadata = (event) => {
  console.log("现已获知媒体的时长、尺寸和轨道。");
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

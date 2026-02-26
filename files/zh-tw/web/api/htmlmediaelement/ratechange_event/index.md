---
title: HTMLMediaElement：ratechange 事件
short-title: ratechange
slug: Web/API/HTMLMediaElement/ratechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTMLMediaElement")}}

`ratechange` 事件將在播放速度改變時被觸發。

此事件不可取消且不會冒泡。

## 語法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名稱，或設定事件處理器屬性。

```js-nolint
addEventListener("ratechange", (event) => { })

onratechange = (event) => { }
```

## 事件類型

通用的 {{domxref("Event")}}。

## 範例

這些範例為 HTMLMediaElement 的 `ratechange` 事件新增了一個事件監聽器，並在該事件處理器對事件觸發做出反應時顯示訊息。

使用 `addEventListener()`：

```js
const video = document.querySelector("video");

video.addEventListener("ratechange", (event) => {
  console.log("播放速率已變更。");
});
```

使用 `onratechange` 事件處理器屬性：

```js
const video = document.querySelector("video");

video.onratechange = (event) => {
  console.log("播放速率已變更。");
};
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相關事件

- HTMLMediaElement 的 {{domxref("HTMLMediaElement.playing_event", 'playing')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.ended_event", 'ended')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.play_event", 'play')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.pause_event", 'pause')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} 事件
- HTMLMediaElement 的 {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} 事件

## 參見

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}

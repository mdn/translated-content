---
title: MediaSession
slug: Web/API/MediaSession
---

{{SeeCompatTable}}{{APIRef("Media Session API")}}

[Media Session API](/zh-CN/docs/Web/API/Media_Session_API) 的 **`MediaSession`** 接口允许页面为标准媒体交互提供自定义行为。

## 属性

- {{domxref("MediaSession.metadata")}}
  - : 指向一个 {{domxref("MediaMetadata")}} 的实例，其包含富媒体的元数据。该数据将用于平台显示。
- {{domxref("MediaSession.playbackState")}}
  - : 展示当前 mediasession 是否处于播放状态。有效值为`"none"`, `"paused"`, `"playing"`.

## 方法

- {{domxref("MediaSession.setActionHandler()")}}
  - : 设置一个监听 mediasession 动作 (如 play 或者 pause) 的事件句柄。浏览方法页以获取所有动作的列表。

## 例子

下面的例子创建了一个新的 media session，并且给其绑定了一些动作句柄：

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Podcast Episode Title",
    artist: "Podcast Host",
    album: "Podcast Name",
    artwork: [{ src: "podcast.jpg" }],
  });
  navigator.mediaSession.setActionHandler("play", function () {});
  navigator.mediaSession.setActionHandler("pause", function () {});
  navigator.mediaSession.setActionHandler("seekbackward", function () {});
  navigator.mediaSession.setActionHandler("seekforward", function () {});
  navigator.mediaSession.setActionHandler("previoustrack", function () {});
  navigator.mediaSession.setActionHandler("nexttrack", function () {});
}
```

下面例子为暂停和播放设置了事件句柄：

```js
var audio = document.querySelector("#player");
audio.src = "song.mp3";

navigator.mediaSession.setActionHandler("play", play);
navigator.mediaSession.setActionHandler("pause", pause);

function play() {
  audio.play();
  navigator.mediaSession.playbackState = "playing";
}

function pause() {
  audio.pause();
  navigator.mediaSession.playbackState = "Paused";
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

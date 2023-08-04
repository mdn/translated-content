---
title: MediaSession.setActionHandler()
slug: Web/API/MediaSession/setActionHandler
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

{{domxref("MediaSession")}} 接口的属性 **`setActionHandler()`** 为 media session 动作设置一个监听器。这些动作让网页程序在用户操作设备的内置物理或屏上媒体控制项时收到消息，例如播放、停止或搜寻按钮。

## 语法

```plain
navigator.mediaSession.setActionHandler(type, callback)
```

### 参数

- `type`
  - : 一个提供要监听的动作类型的 {{domxref("DOMString")}} 。它可以是 `play`、`pause`、`seekbackward`、`seekforward`、`previoustrack` 或 `nexttrack`。
- `callback`
  - : 一个在指定动作被调用时要调用的方法。回调方法不会收到参数，并且不应该返回值。

### 返回值

`undefined`。

## 使用说明

要移除一个已经存在的监听器，再调用一次 `setActionHandler()` ，将 `null` 作为回调方法。

## 示例

下面的示例创建一个新的 media session 并且为它添加监听器（不做任何事情）。

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "播客音乐名字",
    artist: "播客主持人",
    album: "播客名字",
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

这个示例使用了适当的监听器来允许在不同的方向搜寻正在播放的媒体。

```js
let skipTime = 10; // 要跳过的秒数

navigator.mediaSession.setActionHandler("seekbackward", (evt) => {
  // 用户点击了“向后搜寻”的媒体按钮
  audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
});

navigator.mediaSession.setActionHandler("seekforward", (evt) => {
  // 用户点击了“向前搜寻”的媒体按钮
  audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration);
});
```

要移除一个监听器，将它设为 null。

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

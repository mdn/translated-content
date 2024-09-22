---
title: Navigator：mediaSession 属性
slug: Web/API/Navigator/mediaSession
l10n:
  sourceCommit: 29d4051fef07473fd0f0eb471528382d6af66e94
---

{{APIRef("Media Session API")}}

{{domxref("Navigator")}} 接口的 **`mediaSession`** 只读属性返回一个 {{domxref("MediaSession")}} 对象，该对象可用于与浏览器共享关于文档正在处理的媒体的当前播放状态的元数据和其他信息。

这些信息可以进一步与设备和/或操作系统共享，以便使用设备的标准媒体控制用户体验来描述和控制媒体的播放。

此外，`MediaSession` 接口还提供了 {{domxref("MediaSession.setActionHandler", "setActionHandler()")}} 方法，该方法允许你在用户使用设备控制（例如屏幕上或物理上的播放、暂停、跳转和其他类似控制）时接收事件。例如，网络电台应用程序可以使用 `setActionHandler()` 来让用户设备上的键盘或其他位置的媒体控制用于控制应用程序的媒体播放。

## 值

当前文档可以使用 {{domxref("MediaSession")}} 对象来共享有关正在播放的媒体及其当前播放状态的信息。此信息可以包括典型元数据，例如正在播放的歌曲的标题、艺术家和专辑名称，以及可能包含专辑封面、艺术家照片等内容的一张或多张图片。

## 示例

在这个示例中，元数据被提交给 `mediaSession` 对象。请注意，代码首先确保 {{domxref("navigator.mediaSession")}} 属性可用，然后再尝试使用它。

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "播客剧集标题",
    artist: "播客主持人",
    album: "播客名称",
    artwork: [{ src: "播客.jpg" }],
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

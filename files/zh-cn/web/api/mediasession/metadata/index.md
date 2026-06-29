---
title: MediaSession：metadata 属性
short-title: metadata
slug: Web/API/MediaSession/metadata
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Session API")}}

{{domxref("MediaSession")}} 接口的 **`metadata`** 属性包含一个 {{domxref("MediaMetadata")}} 对象，该对象提供当前正在播放媒体的描述信息；如果尚未设置 `metadata`，其值为 `null`。浏览器将此元数据提供给设备，以便在设备可能提供的任何标准媒体控制用户界面中进行展示。

## 值

一个 {{domxref("MediaMetadata")}} 实例，包含当前正在播放媒体的信息。

## 示例

下面的示例检查兼容性，并创建一个具有相关元数据的新媒体会话：

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "纳特·金·科尔",
    album: "终极合集（重制版）",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

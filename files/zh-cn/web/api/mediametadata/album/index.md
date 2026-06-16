---
title: MediaMetadata：album 属性
short-title: album
slug: Web/API/MediaMetadata/album
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{APIRef("Media Session API")}}

{{domxref("MediaMetadata")}} 接口的 **`album`** 属性用于返回或设置包含待播放媒体的专辑或集合的名称。

## 值

一个包含专辑名称的{{jsxref("String", "字符串", , 1)}}。

## 示例

以下示例检查浏览器兼容性并设置媒体会话当前的元数据。

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

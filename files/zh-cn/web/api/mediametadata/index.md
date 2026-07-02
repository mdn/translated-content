---
title: MediaMetadata
slug: Web/API/MediaMetadata
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}

{{domxref("Media Session API", "媒体会话 API", "", "nocode")}} 的 **`MediaMetadata`** 接口允许网页提供丰富的媒体元数据，以便在平台用户界面中显示。

## 构造函数

- {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}}
  - : 创建一个新的 `MediaMetaData` 对象。

## 实例属性

- {{domxref("MediaMetadata.album")}}
  - : 返回或设置包含待播放媒体的专辑或播放列表的名称。
- {{domxref("MediaMetadata.artist")}}
  - : 返回或设置待播放媒体的艺术家、乐队、创作者等的名称。
- {{domxref("MediaMetadata.artwork")}}
  - : 返回或设置与正在播放的媒体相关的图像数组。
- {{domxref("MediaMetadata.chapterInfo")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 返回包含正在播放的媒体相关的章节信息元数据的数组，元数据由 {{domxref("ChapterInformation")}} 对象实例表示。
- {{domxref("MediaMetadata.title")}}
  - : 返回或设置待播放媒体的标题。

## 示例

以下示例检查了浏览器兼容性并为媒体会话设置了当前的元数据。

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

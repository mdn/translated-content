---
title: MediaMetadata：artwork 属性
slug: Web/API/MediaMetadata/artwork
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{APIRef("Media Session API")}}

{{domxref("MediaMetadata")}} 接口的 **`artwork`** 属性返回或设置正在播放的媒体相关的图像信息数组。

## 值

一个对象{{jsxref("Array", "数组", , 1)}}，每个对象都包含以下字段：

- `src`
  - : 用户代理用于获取图像数据的 URL。
- `sizes` {{optional_inline}}
  - : 指定多种尺寸的资源，以便用户代理无需对单张图片进行缩放。默认为空字符串（`""`）。
- `type` {{optional_inline}}
  - : 允许用户代理忽略其不支持类型图像的 {{Glossary("MIME type", "MIME 类型")}}提示。不过，用户代理在下载图像后仍可能通过 MIME 类型嗅探来确定其类型。默认为空字符串（`""`）。

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

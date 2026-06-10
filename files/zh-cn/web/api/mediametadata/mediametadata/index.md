---
title: MediaMetadata：MediaMetadata() 构造函数
slug: Web/API/MediaMetadata/MediaMetadata
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Session API")}}

**`MediaMetadata()`** 构造函数创建一个新的 {{domxref("MediaMetadata")}} 对象。

## 语法

```js-nolint
new MediaMetadata()
new MediaMetadata(metadata)
```

### 参数

- `metadata` {{optional_inline}}
  - : metadata 参数如下：
    - `album` {{optional_inline}}
      - : 包含待播放媒体的专辑或合集的名称。默认为空字符串（`""`）。
    - `artist` {{optional_inline}}
      - : 包含待播放媒体的艺术家、乐队、创作者等的名称。默认为空字符串（`""`）。
    - `artwork` {{optional_inline}}
      - : 表示与正在播放的媒体相关联的图像的{{jsxref("Array", "对象数组")}}，默认值为空数组。对象结构如下：
        - `src`
          - : 用户代理用于获取图像数据的 URL。
        - `sizes` {{optional_inline}}
          - : 指定多种尺寸的资源，以便用户代理无需对单张图片进行缩放。默认为空字符串（`""`）。
        - `type` {{optional_inline}}
          - : {{Glossary("MIME type", "MIME 类型")}}提示用户代理忽略其不支持类型的图像。不过，用户代理在下载图像后仍可能通过 MIME 类型嗅探来确定其类型。默认为空字符串（`""`）。
    - `chapterInfo` {{optional_inline}}
      - : 包含 {{domxref("ChapterInformation")}} 对象实例的数组，这些实例表示与媒体相关的章节信息元数据。对象结构如下：
        - `artwork` {{optional_inline}}
          - : 包含 `artwork` 对象的{{jsxref("Array", "数组")}}（参见上文），这些对象代表与该章节相关的图片。如果缺省，`artwork` 默认为空数组。
        - `startTime` {{optional_inline}}
          - : 表示章节开始时间的秒数。如果缺省，`startTime` 的默认值为 `0`。
        - `title` {{optional_inline}}
          - : 表示章节标题的字符串。如果缺省，`title` 默认为空字符串（`""`）。
    - `title` {{optional_inline}}
      - : 待播放媒体的标题。默认为空字符串（`""`）。

## 示例

以下示例使用正确的元数据格式创建了一个新的 {{domxref("MediaMetadata")}} 对象。

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

---
title: MediaRecorder：isTypeSupported() 静态属性
slug: Web/API/MediaRecorder/isTypeSupported_static
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("MediaStream Recording")}}

{{domxref("MediaRecorder")}} 接口的 **`isTypeSupported()`** 静态方法返回一个 {{jsxref("Boolean")}}，如果指定的 MIME 媒体类型是用户代理应能成功录制的类型，则为 `true`。

## 语法

```js-nolint
MediaRecorder.isTypeSupported(mimeType)
```

### 参数

- `mimeType`
  - : 需要检查的 MIME 媒体类型。

### 返回值

一个 {{jsxref("Boolean")}} 值，如果 {{domxref("MediaRecorder")}} 实现能够录制指定 MIME 类型的 {{domxref("Blob")}} 对象，则为 `true`。如果没有足够的资源支持录制和编码过程，录制仍可能失败。如果值为 `false`，则表示用户代理无法录制指定格式。

## 示例

```js
const types = [
  "video/webm",
  "audio/webm",
  "video/webm;codecs=vp8",
  "video/webm;codecs=daala",
  "video/webm;codecs=h264",
  "audio/webm;codecs=opus",
  "video/mp4",
];

for (const type of types) {
  console.log(
    `支持 ${type} 类型吗？${
      MediaRecorder.isTypeSupported(type) ? "也许！" : "不能 :("
    }`,
  );
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [媒体流录制 API](/zh-CN/docs/Web/API/MediaStream_Recording_API)
- [使用媒体流录制 API](/zh-CN/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [web 上的媒体类型和格式指南](/zh-CN/docs/Web/Media/Guides/Formats)
- [常见媒体类型的编解码器](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter)
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaCapabilities")}}

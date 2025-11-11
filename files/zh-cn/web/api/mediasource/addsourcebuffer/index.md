---
title: MediaSource.addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
---

{{APIRef("Media Source Extensions")}}

{{domxref("MediaSource")}} 的 **`addSourceBuffer()`** 方法会根据给定的 MIME 类型创建一个新的 {{domxref("SourceBuffer")}} 对象，然后会将它追加到 `MediaSource` 的 {{domxref("SourceBuffers")}} 列表中。

## 语法

```js-nolint
addSourceBuffer(mimeType)
```

### 参数

- mimeType
  - : 你想创建的 source buffer 的 MIME 类型。

### 返回值

一个 {{domxref("SourceBuffer")}} 对象。

### 异常

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 如果 `mimeType` 指定的值是一个空字符串而不是有效的媒体（MIME）类型，则抛出异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("MediaSource.readyState")}} 的状态不是 `"open"`，则抛出异常。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果{{Glossary("user agent", "用户代理")}}不支持指定的 `mimeType`，或者与媒体源 {{domxref("MediaSource.sourceBuffers", "sourceBuffer")}} 列表中已包含的其他 {{domxref("SourceBuffer")}} 对象的媒体类型不兼容，则抛出异常。
- `QuotaExceededError` {{domxref("DOMException")}}
  - : 如果用户代理不能处理更多的 `SourceBuffer` 对象，或者使用给定的 `mimeType` 创建了一个新的 `SourceBuffer`，这将导致 [`SourceBuffer` 的配置不受支持](https://w3c.github.io/media-source/#sourcebuffer-configuration)。

## 示例

以下片段基于 Nick Desaulniers 编写的一个简单示例（[查看完整的在线演示](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)进行进一步研究）。

```js
const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  const mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  mediaSource.addEventListener("sourceopen", sourceOpen);
  video.src = URL.createObjectURL(mediaSource);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen() {
  //console.log(this.readyState); // open
  const mediaSource = this;
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

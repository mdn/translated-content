---
title: MediaSource.endOfStream()
slug: Web/API/MediaSource/endOfStream
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 接口的 **`endOfStream()`** 方法意味着流的结束。

## 语法

```js
mediaSource.endOfStream(endOfStreamError);
```

### 参数

- endOfStreamError {{optional_inline}}

  - : 一个 {{domxref("DOMString")}}，表示当流结束之时需要抛出的异常名。可选的值为：

    - `network`
      - : 中止播放并且发出发生网络错误的信号。这可用于创建一个与媒体流相关的自定义处理程序。例如，你可能有一个与其他网络请求分开的，单独处理媒体分块请求的函数。当你调用 [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest)（以获取媒体分块）而触发 `onabort` 或 `onerror` 时，你可能需要调用 `endOfStream('network')`，在 UI 中展示描述性的错误，并且立即重试网络请求或者等到网络恢复（通过某种轮询）。
    - `decode`
      - : 中止播放并且发出发生解码错误的信号。这可用于指示当获取媒体数据时发生了解析错误；可能数据已损坏，或者是使用浏览器不知道如何解码的编解码器进行编码。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("MediaSource.readyState")}} 的状态不是 `open`，或者有一个或多个在 {{domxref("MediaSource.sourceBuffers")}} 中的 {{domxref("SourceBuffer")}} 对象被更新（例如它们的 {{domxref("SourceBuffer.updating")}} 属性是 `true`），则抛出该错误。

## 示例

以下片段基于 Nick Desaulniers 编写的一个简单示例（[查看完整的在线演示](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)进行进一步研究）。

```js
var assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen() {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", function () => {
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

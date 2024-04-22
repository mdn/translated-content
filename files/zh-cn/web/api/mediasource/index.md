---
title: MediaSource
slug: Web/API/MediaSource
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`MediaSource`** 是 [Media Source Extensions API](/zh-CN/docs/Web/API/Media_Source_Extensions_API) 表示媒体资源 {{domxref("HTMLMediaElement")}} 对象的接口。`MediaSource` 对象可以附着在 {{domxref("HTMLMediaElement")}} 在客户端进行播放。

## 构造函数

- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
  - : 创建并且返回一个新的 `MediaSource` 的空对象（with no associated source buffers）。

## 属性

- {{domxref("MediaSource.sourceBuffers")}} {{readonlyInline}}
  - : 返回一个 {{domxref("SourceBufferList")}} 对象，包含了这个 `MediaSource` 的 {{domxref("SourceBuffer")}} 的对象列表。
- {{domxref("MediaSource.activeSourceBuffers")}} {{readonlyInline}}
  - : 返回一个 {{domxref("SourceBufferList")}} 对象，包含了这个 {{domxref("MediaSource.sourceBuffers")}} 中的 {{domxref("SourceBuffer")}}
    子集的对象—即提供当前被选中的视频轨（video track），启用的音频轨（audio tracks）以及显示/隐藏的字幕轨（text tracks）的对象列表。
- {{domxref("MediaSource.readyState")}} {{readonlyInline}}

  - : 返回一个代表当前 `MediaSource` 状态的枚举值，即当前是否未连接到媒体元素（`closed`），是否已连接并准备好接收 {{domxref("SourceBuffer")}} 对象（`open`），或者是否已连接但已通过 {{domxref("MediaSource.endOfStream()")}} 结束媒体流（`ended`）。

- {{domxref("MediaSource.duration")}}
  - : 获取和设置当前正在推流媒体的持续时间。

## 方法

_从父接口{{domxref("EventTarget")}}上继承而来。_

- {{domxref("MediaSource.addSourceBuffer()")}}
  - : 创建一个带有给定 MIME 类型的新的 {{domxref("SourceBuffer")}} 并添加到 `MediaSource` 的 {{domxref("SourceBuffers")}} 列表。
- {{domxref("MediaSource.removeSourceBuffer()")}}
  - : 删除指定的 {{domxref("SourceBuffer")}} 从这个 `MediaSource` 对象中的 {{domxref("SourceBuffers")}}列表。
- {{domxref("MediaSource.endOfStream()")}}
  - : 表示流的结束。

## 静态方法

- {{domxref("MediaSource.isTypeSupported()")}}
  - : 返回一个 {{domxref("Boolean")}} 值表明给定的 MIME 类型是否被当前的浏览器支持——这意味着是否可以成功的创建这个 MIME 类型的 {{domxref("SourceBuffer")}} 对象。

## 示例

这个例子尽可能快地逐块加载视频，并在加载好后立刻播放。以下片段基于 Nick Desaulniers 编写的一个简单示例（[查看完整的在线演示](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)进行进一步研究）。

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  const mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen(_) {
  //console.log(this.readyState); // open
  const mediaSource = this;
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB(url, cb) {
  console.log(url);
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = function () {
    cb(xhr.response);
  };
  xhr.send();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

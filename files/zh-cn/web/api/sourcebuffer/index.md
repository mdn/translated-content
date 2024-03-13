---
title: SourceBuffer
slug: Web/API/SourceBuffer
---

{{APIRef("Media Source Extensions")}}

**`SourceBuffer`** 接口表示通过 {{domxref("MediaSource")}} 对象传递到 {{domxref("HTMLMediaElement")}} 并播放的媒体分块。它可以由一个或者多个媒体片段组成。

{{InheritanceDiagram}}

## 属性

- {{domxref("SourceBuffer.appendWindowEnd")}}
  - : 控制 append window 结束的时间戳。
- {{domxref("SourceBuffer.appendWindowStart")}}
  - : 控制 [append window](https://w3c.github.io/media-source/#append-window) 开始的时间戳。这是一个时间戳范围，可以用于过滤附加到 `SourceBuffer` 的媒体数据。此时间戳范围的编码媒体帧将被附加，而超出此范围的将被忽略。
- {{domxref("SourceBuffer.audioTracks")}} {{readonlyInline}}
  - : 当前包含在 `SourceBuffer` 中的音轨列表。
- {{domxref("SourceBuffer.buffered")}} {{readonlyInline}}
  - : 返回当前在 `SourceBuffer` 中缓冲的时间范围。
- {{domxref("SourceBuffer.mode")}}
  - : 控制如何处理 `SourceBuffer` 中媒体片段的顺序，即它们是否可以按任何顺序被加载，或者他们必须保持一个严格的顺序。
- {{domxref("SourceBuffer.textTracks")}} {{readonlyInline}}
  - : 当前包含在 `SourceBuffer` 中的文本轨列表。
- {{domxref("SourceBuffer.timestampOffset")}}
  - : 控制应用于随后附加到 `SourceBuffer` 的媒体片段内的时间戳偏移量。
- {{domxref("SourceBuffer.updating")}} {{readonlyInline}}
  - : 一个布尔值，表示 `SourceBuffer` 当前是否正在更新——即当前是否正在进行 {{domxref("SourceBuffer.appendBuffer()")}}、{{domxref("SourceBuffer.appendStream()")}} 或 {{domxref("SourceBuffer.remove()")}} 操作。
- {{domxref("SourceBuffer.videoTracks")}} {{readonlyInline}}
  - : 当前包含在 `SourceBuffer` 中的视频轨列表。

## 方法

_从它的父接口 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("SourceBuffer.abort()")}}
  - : 中止当前片段并且重置片段解析器。
- {{domxref("SourceBuffer.appendBuffer()")}}
  - : 将来自 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 对象的媒体片段数据附加到 `SourceBuffer`。
- {{domxref("SourceBuffer.appendBufferAsync()")}} {{experimental_inline}}
  - : 启动异步进程，将指定缓冲数据附加到 `SourceBuffer`。返回一个 {{jsxref("Promise")}}，一旦添加了缓冲数据，该 promise 将会兑现。
- {{domxref("SourceBuffer.appendStream()")}}
  - : 将来自 `ReadableStream` 对象的媒体片段数据附加到 `SourceBuffer`。
- {{domxref("SourceBuffer.changeType()")}}
  - : 更改 {{Glossary("MIME type","MIME 类型")}}，使其符合将来调用 {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} 附加的新数据的类型。
- {{domxref("SourceBuffer.remove()")}}
  - : 从 `SourceBuffer` 移除指定时间范围内的媒体片段。
- {{domxref("SourceBuffer.removeAsync()")}} {{experimental_inline}}
  - : 启动异步进程，从 `SourceBuffer` 移除指定时间范围的媒体片段。返回一个 {{jsxref("Promise")}}，一旦所有匹配的片段被删除，该 promise 将会兑现。

## 事件

- {{domxref("SourceBuffer.abort_event", "abort")}}
  - : 当 {{domxref("SourceBuffer.appendBuffer()")}} 或 {{domxref("SourceBuffer.appendStream()")}} 结束时通过调用 {{domxref("SourceBuffer.abort()")}} 触发。{{domxref("SourceBuffer.updating")}} 从 `true` 改变为 `false`。
- {{domxref("SourceBuffer.error_event", "error")}}
  - : 在 {{domxref("SourceBuffer.appendBuffer()")}} 或 {{domxref("SourceBuffer.appendStream()")}} 期间发生错误时触发。{{domxref("SourceBuffer.updating")}} 从 `true` 改变为 `false`。
- {{domxref("SourceBuffer.update_event", "update")}}
  - : 在 {{domxref("SourceBuffer.appendBuffer()")}} 或 {{domxref("SourceBuffer.remove()")}} 完成时触发。{{domxref("SourceBuffer.updating")}} 从 `true` 改变为 `false`。这个事件在 `updateend` 之前触发。
- {{domxref("SourceBuffer.updateend_event", "updateend")}}
  - : 在 {{domxref("SourceBuffer.appendBuffer()")}} 或 {{domxref("SourceBuffer.remove()")}} 结束后触发。这个事件在 `update` 后触发。
- {{domxref("SourceBuffer.updatestart_event", "updatestart")}}
  - : 当 {{domxref("SourceBuffer.updating")}} 从 `false` 改变为 `true` 时触发。

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

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}

---
title: MediaSource.addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
translation_of: Web/API/MediaSource/addSourceBuffer
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 的 **`addSourceBuffer()`** 方法会根据给定的 MIME 类型创建一个新的 {{domxref("SourceBuffer")}} 对象，然后会将它追加到 `MediaSource` 的 {{domxref("SourceBuffers")}} 列表中。

## 语法

```js
var sourceBuffer = mediaSource.addSourceBuffer(mimeType);
```

### 参数

- mimeType
  - : 你想创建的 source buffer 的 MIME 类型。

### 返回值

一个 {{domxref("SourceBuffer")}} 对象。

### 异常

下面的错误可能会在调用该方法时被抛出。

| Error                | Explanation                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidAccessError` | 提交的 `mimeType` 是一个空字符串。                                                                                                                                                                                                          |
| `InvalidStateError`  | {{domxref("MediaSource.readyState")}} 的值不等于 `open`.                                                                                                                                                                                    |
| `NotSupportedError`  | 当前浏览器不支持你提交的 `mimeType` , 或者 it is not compatible with the `mimeType`s specified for the {{domxref("SourceBuffer")}} objects that already exist in {{domxref("MediaSource.sourceBuffers")}}.                                  |
| `QuotaExceededError` | The user agent can't handle any more SourceBuffer objects, or creating a SourceBuffer based on this `mimeType` would result in an unsupported [SourceBuffer configuration.](https://w3c.github.io/media-source/#sourcebuffer-configuration) |

## 示例

以下片段基于 Nick Desaulniers 编写的一个简单示例（[查看完整的在线演示](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)进行进一步研究。）

```js
var assetURL = 'frag_bunny.mp4';
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource;
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec);
}

function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

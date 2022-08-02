---
title: MediaSource.endOfStream()
slug: Web/API/MediaSource/endOfStream
translation_of: Web/API/MediaSource/endOfStream
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

    - `network`: Terminates playback and signals that a network error has occured. This can be used
      create a custom error handler related to media streams. For example, you might have a function that handles
      media chunk requests, separate from other network requests. When you make an [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) call for a media chunk, and `onabort`
      or `onerror` triggers, you might want to call `endOfStream('network')`, display a
      descriptive message in the UI, and maybe retry the network request immediately or wait until the network is back
      up (via some kind of polling.)
    - `decode`: Terminates playback and signals that a decoding error has occured. This can be used to
      indicate that a parsing error has occured while fetching media data; maybe the data is corrupt, or is encoded
      using a codec that the browser doesn't know how to decode.

### 返回值

无。

### 错误

修改此属性值的时候，以下异常可能会被触发。

| 错误                | 解释                                                                                                                                                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError` | {{domxref("MediaSource.readyState")}} is not equal to `open`, or one or more of the {{domxref("SourceBuffer")}} objects in {{domxref("MediaSource.sourceBuffers")}} are being updated (i.e. their {{domxref("SourceBuffer.updating")}} property is `true`.) |

## 示例

下面的代码段来自于 Nick Desaulniers 的一个简单的例子。([查看完整示例](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)以供学习。)

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

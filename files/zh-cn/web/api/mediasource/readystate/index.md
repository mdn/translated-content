---
title: MediaSource.readyState
slug: Web/API/MediaSource/readyState
translation_of: Web/API/MediaSource/readyState
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`readyState`**是 {{domxref("MediaSource")}}
接口的一个只读属性。它返回一个集合表明当前`MediaSource`的状态。它有三种可能的返回值：

- `closed`: 当前源并未附着到一个 media 元素上。
- `open`: 当前源已附着到一个 media 元素并准备好接收 {{domxref("SourceBuffer")}} 对象。
- `ended`: 当前源已附着到一个 media 元素，但流已被{{domxref("MediaSource.endOfStream()")}}结束。

## 语法

```js
var myReadyState = mediaSource.readyState;
```

### 值

一个 {{domxref("DOMString")}}.

## 示例

The following snippet is from a simple example written by Nick Desaulniers ([view the full demo live](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html), or [download the source](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) for
further investigation.)

```js
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

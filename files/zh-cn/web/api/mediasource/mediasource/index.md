---
title: MediaSource.MediaSource()
slug: Web/API/MediaSource/MediaSource
translation_of: Web/API/MediaSource/MediaSource
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`MediaSource()`** 是 {{domxref("MediaSource")}} 的构造函数 返回一个没有分配 source buffers 新的 `MediaSource` 对象。

## 语法

```js
var mediaSource = new MediaSource();
```

### 参数

无。

## 示例

下面的代码片段取自 Nick Desaulniers 写的简单例子 (想进一步了解 [查看完整例子](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) 或者 [下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) .)

```js
var video = document.querySelector('video');

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

...
```

## 浏览器兼容性

{{Compat("api.MediaSource.MediaSource")}}

## 相关链接

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

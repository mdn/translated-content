---
title: MediaSource.isTypeSupported()
slug: Web/API/MediaSource/isTypeSupported_static
---

{{APIRef("Media Source Extensions")}}

**`MediaSource.isTypeSupported()`** 静态方法返回一个布尔值，如果给定的 MIME 类型和（可选的）编解码器*可能*被当前的{{Glossary("user agent", "用户代理")}}支持，则返回 `true`。

也就是说，它可以成功地为该媒体类型创建一个 {{domxref("SourceBuffer")}} 对象。如果返回值是 `false`，则用户代理确定它*不*支持指定的媒体格式。

## 语法

```js-nolint
isTypeSupported(type)
```

### 参数

- `type`
  - : 一个指定媒体 MIME 类型的字符串和（可选）包含一个使用逗号分隔的受支持的编解码器集合的[`编解码器`参数](/zh-CN/docs/Web/Media/Formats/codecs_parameter)。

### 返回值

如果给定的媒体类型将*不能*播放，则返回 `false`。

如果浏览器*或许*可以播放给定的媒体类型，则返回 `true`。这不能得到保证，所以你必须为你的代码做好可能无法正常播放媒体的准备。

在确定是否可以使用媒体类型时，所有处理媒体文件的 Web API 都使用“否/可能/或许”方法（或者，在这种情况下，“否或可能”）。这是因为媒体文件是复杂的，它具有太多微妙变化的复杂结构，在你实际使用这个媒体内容之前将无法确定任何事情。

## 示例

以下片段基于 Nick Desaulniers 编写的一个简单示例（[查看完整的在线演示](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)进行进一步研究）。

```js
const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  let mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen() {
  //console.log(this.readyState); // open
  let mediaSource = this;
  let sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
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

- [Media Source Extensions API](/zh-CN/docs/Web/API/Media_Source_Extensions_API)
- [Guide to media types and formats on the web](/zh-CN/docs/Web/Media/Formats)
- [The "codecs" parameter in common media types](/zh-CN/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

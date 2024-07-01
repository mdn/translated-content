---
title: MediaSource.readyState
slug: Web/API/MediaSource/readyState
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`readyState`**是 {{domxref("MediaSource")}} 接口的一个只读属性。它返回一个集合表明当前 `MediaSource` 的状态。它有三种可能的返回值：

- `closed`：当前源并未附着到一个 media 元素上。
- `open`：当前源已附着到一个 media 元素并准备好接收 {{domxref("SourceBuffer")}} 对象。
- `ended`：当前源已附着到一个 media 元素，但流已被 {{domxref("MediaSource.endOfStream()")}} 结束。

## 语法

```js
var myReadyState = mediaSource.readyState;
```

### 值

一个 {{domxref("DOMString")}}。

## 示例

以下片段基于 Nick Desaulniers 编写的一个简单示例（[查看完整的在线演示](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)进行进一步研究）。

```js
if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen(_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", function (_) {
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

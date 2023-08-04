---
title: MediaSource.sourceBuffers
slug: Web/API/MediaSource/sourceBuffers
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 接口的只读属性 **`sourceBuffers`** 返回一个 {{domxref("SourceBufferList")}} 对象，该对象包含着与 `MediaSource` 关联的 {{domxref("SourceBuffer")}} 对象列表。

## 值

一个 {{domxref("SourceBufferList")}}。

## 示例

以下片段基于 Nick Desaulniers 编写的一个简单示例（[查看完整的在线演示](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)进行进一步研究）。

```js
function sourceOpen() {
  //console.log(this.readyState); // open
  const mediaSource = this;
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      console.log(mediaSource.sourceBuffers); // will contain the source buffer that was added above
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

// …
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

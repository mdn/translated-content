---
title: MediaSource.duration
slug: Web/API/MediaSource/duration
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 接口的属性 **`duration`** 用来获取或者设置当前媒体展示的时长。

### 值

以秒为单位的双精度浮点数。

### 异常

设置新的值的时候可能会有下面的错误抛出。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 时长尝试设置一个负数，或者为 `NaN` 则抛出。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("MediaSource.readyState")}} 的状态不是 `open`，或者有一个或多个在 {{domxref("MediaSource.sourceBuffers")}} 中的 {{domxref("SourceBuffer")}} 对象被更新（例如它们的 {{domxref("SourceBuffer.updating")}} 属性是 `true`），则抛出该错误。

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
      mediaSource.duration = 120;
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

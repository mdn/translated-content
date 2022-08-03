---
title: MediaSource.duration
slug: Web/API/MediaSource/duration
translation_of: Web/API/MediaSource/duration
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 接口的属性 **`duration`** 用来获取或者设置当前媒体展示的时长。

## 语法

```js
mediaSource.duration = 5.5; // 5.5 seconds

var myDuration = mediaSource.duration;
```

### 值

以秒为单位的 双精度浮点数。

### 异常

设置新的值的时候可能会有下面的错误抛出。

| 错误                 | 异常                                                                                                                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidAccessError` | 时长尝试设置一个负数，或者 `NaN`.                                                                                                                                                                                          |
| `InvalidStateError`  | {{domxref("MediaSource.readyState")}} 状态不是 `open`, 或者 一个或多个 {{domxref("SourceBuffer")}} 对象在 {{domxref("MediaSource.sourceBuffers")}} 中被更新 (例如。该 {{domxref("SourceBuffer.updating")}}属性 为 `true`.) |

## 示例

下面的代码片段取自 Nick Desaulniers 写的简单例子 (想进一步了解 [查看完整例子](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html), 或者 [下载源代码](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) .)

```js
function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      mediaSource.duration = 120;
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};

...
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}

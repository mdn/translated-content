---
title: VideoPlaybackQuality.totalVideoFrames
slug: Web/API/VideoPlaybackQuality/totalVideoFrames
---

```
videoPlaybackQuality 的totalVideoFrames 属性为一个只读属性，用于表述已经被加载的媒体资源中已经被渲染播放或者被废弃的视频帧总数
```

## Syntax

```
value = videoPlaybackQuality.totalVideoFrames;
```

### Value

video 容器**已经被加载的媒体资源中已经被渲染播放或者被废弃的视频帧总数，本质上讲，这个总数是指没有发生播放异常问题下的数目。**

## Example

下面的例子想要表述的是通过已经丢弃（丢帧）或者播放异常的帧数总和占 totalVideoFrames 的比例超过 10%，则触发一个例如名为 lostFramesThresholdExceeded 的回调函数以反应我们当前视频资源丢帧已经播放异常的程度，从而帮助业务进行调整

```js
var videoElem = document.getElementById("my_vid");
var quality = videoElem.getVideoPlaybackQuality();

if (
  (quality.corruptedVideoFrames + quality.droppedVideoFrames) /
    quality.totalVideoFrames >
  0.1
) {
  lostFramesThresholdExceeded();
}
```

```
触发回调函数后，我们可以使用一些算法来尝试切换到需要较少带宽，码率低的，较低分辨率视频，以避免丢帧。
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method for constructing and returning this interface.

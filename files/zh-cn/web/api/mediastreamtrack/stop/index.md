---
title: MediaStreamTrack.stop()
slug: Web/API/MediaStreamTrack/stop
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.stop()`**方法停止跟踪。

## 语法

```plain
track.stop()
```

## 说明

调用`stop()`告诉{{glossary("user agent")}} ，{{domxref("MediaStreamTrack")}}不再需要轨道的来源，无论该来源是什么，包括文件，网络流，本地摄像机或麦克风。由于多个音轨可能使用同一音源（例如，如果两个选项卡使用设备的麦克风），则音源本身并不一定会立即停止。而是从轨道取消关联，并且停止跟踪对象。一旦没有媒体轨道正在使用源，则实际上可能会完全停止该源。

调用`stop()`之后，{{domxref("MediaStreamTrack.readyState", "readyState")}}属性立即设置为`ended`。

## 示例

### 停止视频流

在此示例中，我们看到一个函数，该函数通过在给定{{HTMLElement("video")}}的每个轨道上调用`stop()`来停止流式视频。

```js
function stopStreamedVideo(videoElem) {
  const stream = videoElem.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(function (track) {
    track.stop();
  });

  videoElem.srcObject = null;
}
```

这是通过从其{{domxref("HTMLMediaElement.srcObject", "srcObject")}} 属性获得视频元素的流来实现的。然后，通过调用其{{domxref("MediaStream.getTracks", "getTracks()")}}方法来获取流的轨道列表。从那里开始，剩下要做的就是使用{{jsxref("Array.forEach", "forEach()")}}遍历轨道列表并调用每个轨道的`stop()`方法。

最后，将`srcObject`设置为`null`以切断与{{domxref("MediaStream")}} 对象的链接，以便将其释放。

Finally, `srcObject` is set to `null` to sever the link to the {{domxref("MediaStream")}} object so it can be released.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 看看别的

- {{domxref("MediaStreamTrack")}}，它所属的接口。
- {{domxref("MediaStreamTrack.readyState")}}
- [`ended`](/zh-CN/docs/Web/API/HTMLMediaElement/ended_event)

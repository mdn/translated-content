---
title: HTMLCanvasElement.captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

该 **`HTMLCanvasElement.captureStream()`** 方法返回的 {{domxref("CanvasCaptureMediaStream")}} 是一个实时视频捕获的画布。

## 语法

```plain
MediaStream = canvas.captureStream(frameRate);
```

### 参数

- `frameRate` 可选
  - : 设置双精准度浮点值为每个帧的捕获速率。如果未设置，则每次画布更改时都会捕获一个新帧。如果设置为`0`，则会捕获单个帧。

### 返回值

对一个 {{domxref("MediaStream")}} 对象的引用。

## 例子

```js
//获取所需要截取媒体流的 canvas element
var canvasElt = document.querySelector("canvas");

//截取到媒体流
var stream = canvasElt.captureStream(25); // 25 FPS

//使用媒体流
// E.g.使用 RTCPeerConnection 来传输给其他的电脑
// 下面的 pc 是其他地方创建的一个 RTCPeerConnection
pc.addStream(stream);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 看看其他

- {{domxref("CanvasCaptureMediaStream")}},所属接口。
- {{domxref("HTMLMediaElement.captureStream()")}}, 允许从一个媒体中获取流
- {{domxref("MediaStream")}}
- {{domxref("Media Capture and Streams API")}}

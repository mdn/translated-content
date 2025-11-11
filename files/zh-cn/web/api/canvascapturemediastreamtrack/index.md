---
title: CanvasCaptureMediaStream
slug: Web/API/CanvasCaptureMediaStreamTrack
---

{{APIRef}}{{SeeCompatTable}}

**`CanvasCaptureMediaStream`** 接口表示 {{domxref("MediaStream")}} 对 {{domxref("HTMLCanvasElement")}} 元素进行实时画面捕捉的内容。

## 属性

_此接口继承了其父类 {{domxref("MediaStream")}} 与 {{domxref("EventTarget")}} 的属性。_

- {{domxref("CanvasCaptureMediaStream.canvas")}} {{readonlyInline}}
  - : 可返回当前媒体流所对应的 {{domxref("HTMLCanvasElement")}} 元素对象。

## 方法

_此接口继承了其父类 {{domxref("MediaStream")}} 与 {{domxref("EventTarget")}} 的方法。_

- {{domxref("CanvasCaptureMediaStream.requestFrame()")}}
  - : 手动获取媒体流的一帧。可以捕捉部分渲染帧画面。

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他参考资料

- {{domxref("HTMLCanvasElement.captureStream()")}}

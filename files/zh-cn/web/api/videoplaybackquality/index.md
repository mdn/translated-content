---
title: VideoPlaybackQuality
slug: Web/API/VideoPlaybackQuality
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`VideoPlaybackQuality`** 对象表示了一系列描述视频播放质量的指标。

可以通过 {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} 创建一个实例。

## 属性

_`VideoPlaybackQuality` 对象不继承任何属性。_

- {{domxref("VideoPlaybackQuality.creationTime")}} {{readonlyInline}}
  - : 一个用毫秒表示从开始页面浏览到对象创建的 {{domxref("DOMHighResTimeStamp")}} 对象。
- {{domxref("VideoPlaybackQuality.totalVideoFrames")}} {{readonlyInline}}
  - : 一个表示相关联的 {{domxref("HTMLVideoElement")}} 自从创建起的已创建和丢弃帧数数量总和的 unsigned long 值。
- {{domxref("VideoPlaybackQuality.droppedVideoFrames")}} {{readonlyInline}}
  - : 一个表示相关联的 {{domxref("HTMLVideoElement")}} 自从创建起的已丢弃帧数数量的 `unsigned long` 值。
- {{domxref("VideoPlaybackQuality.corruptedVideoFrames")}} {{readonlyInline}}
  - : 一个表示相关联的 {{domxref("HTMLVideoElement")}} 自从创建起的损坏帧数数量的 `unsigned long` 值。一个损坏帧可能属于创建帧或丢弃帧。
- {{domxref("VideoPlaybackQuality.totalFrameDelay")}} {{readonlyInline}} {{Deprecated_Inline}}
  - : 一个表示相关联的 {{domxref("HTMLVideoElement")}} 自从创建起的帧延迟总和的 double 值。帧延迟是指一个帧的理论展示时间与实际显示时间的差值。

## 方法

_`VideoPlaybackQuality` 对象没有实现任何特定方法，也没有继承任何方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} method for constructing and returning this interface.
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}

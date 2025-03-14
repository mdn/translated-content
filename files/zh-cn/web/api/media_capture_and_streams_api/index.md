---
title: 媒体捕捉与媒体流 API（媒体流）
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{DefaultAPISidebar("Media Capture and Streams")}}

**媒体捕捉与媒体流 API**（Media Capture and Streams API），通常被称为**媒体流 API**（Media Streams API、MediaStream API），是与 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 相关的 API，提供对音频或视频数据流的支持。

它提供了用于处理媒体流及其组成轨道的接口和方法、与数据格式相关的约束、异步使用数据时成功和错误的回调以及在处理期间触发的事件。

## 概念和用法

这个 API 基于对表示音视频相关数据流的 {{domxref("MediaStream")}} 对象的所有操作。参见[获取媒体流](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#startup_函数)中的示例。

一个 `MediaStream` 包含零个或多个代表各种声音和视频**轨道**的 {{domxref("MediaStreamTrack")}} 对象。每一个 `MediaStreamTrack` 可能有一个或多个**通道**。这个通道代表着媒体流的最小单元，比如一个音频信号对应着一个对应的扬声器，像是在立体声道中的*左*声道或*右*声道。

`MediaStream` 对象有着单一的**输入**和**输出**。由 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 创建的 `MediaStream` 对象是在*本地*借助用户相机和麦克风的源输入。非本地的 `MediaStream` 可能代表一个媒体元素（如 {{HTMLElement("video")}} 或 {{HTMLElement("audio")}}），或是一个通过 WebRTC {{domxref("RTCPeerConnection")}} API 获得的源自网络的媒体流，又或是一个使用 [Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API) 的 {{domxref("MediaStreamAudioDestinationNode")}} 创建的媒体流。

`MediaStream` 对象的输出能连接到一个**消费端**（consumer）。它可以是一个媒体元素（如 `<audio>` 或 `<video>`），也可以是 WebRTC {{domxref("RTCPeerConnection")}} API 或 [Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API) 的 {{domxref("MediaStreamAudioSourceNode")}}。

## 接口

在这些参考文章中，你将找到需要了解的构成媒体捕捉和媒体流 API 的每个接口的基本信息。

- {{domxref("CanvasCaptureMediaStreamTrack")}}
- {{domxref("InputDeviceInfo")}}
- {{domxref("MediaDeviceInfo")}}
- {{domxref("MediaDevices")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStreamTrackEvent")}}
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaTrackSettings")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("OverconstrainedError")}}
- {{domxref("URL")}}

## 事件

- {{domxref("MediaStream/addtrack_event", "addtrack")}}
- {{domxref("MediaStreamTrack/ended_event", "ended")}}
- {{domxref("MediaStreamTrack/mute_event", "mute")}}
- {{domxref("MediaStreamTrack.overconstrained_event", "overconstrained")}}
- {{domxref("MediaStream/removetrack_event", "removetrack")}}
- {{domxref("MediaStreamTrack/unmute_event", "unmute")}}

## 指南和教程

[功能、约束和设置](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Constraints)文章讨论了**约束**、**功能**以及媒体设置的概念，并包含了一个[约束练习器](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Constraints#示例：约束练习器)，它允许你尝试应用于来自计算机音视频输入设备（如网络摄像头和麦克风）的音频和视频轨道的不同约束集的结果。

[使用 getUserMedia() 拍摄静态照片](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)文章展示了如何使用 [`getUserMedia()`](/zh-CN/docs/Web/API/MediaDevices/getUserMedia) 来访问支持 `getUserMedia()` 的计算机或移动设备上的摄像头，并使用它拍摄照片。

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)——API 介绍页面
- {{domxref("mediaDevices.getUserMedia()")}}
- [使用 WebRTC 拍摄静态照片](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos)：有关使用 `getUserMedia()` 的演示和教程。

---
title: MediaStream API
slug: Web/API/Media_Capture_and_Streams_API
---

{{SeeCompatTable}}

媒体流处理 API（通常被称为媒体流 API 或流 API）是描述音频或视频数据流的 [WebRTC](/zh-CN/docs/WebRTC) 的一部分，处理它们的方法，与数据类型相关的约束，成功和错误 当异步使用数据时的回调以及在处理期间触发的事件。

## 基本概念

这个 API 是基于操纵一个 MediaStream 对象代表音频或视频相关数据的流量。通常一个 MediaStream 是作为一个简单的 URL string 它可以用来引用存储在 DOM 中的数据 {{domxref("File")}}, 或者一个 {{domxref("Blob")}} 对象建立 {{domxref("window.URL.createObjectURL()")}}, [如视频所描述的](/zh-CN/docs/WebRTC/taking_webcam_photos#Get_the_video)。

一个 MediaStream 包含零个或更多的 MediaStreamTrack 对象，代表着各种的声轨和视频轨。每一个 MediaStreamTrack 可能有一个或更多的通道。这个通道代表着媒体流的最小单元，比如一个音频信号对应着一个对应的扬声器，像是在立体声音轨中的左通道或右通道。

MediaStream 对象有着单一的输入和输出。由 [`getUserMedia()`](/zh-CN/docs/Web/API/MediaDevices/getUserMedia) 创建的 MediaStream 对象是在本地借助用户相机和麦克风的源输入。非本地的 `MediaStream` 代表了一个媒体元素，像是{{HTMLElement("video")}} 元素或是 {{HTMLElement("audio")}}元素，一般是源自网络的流，并通过 WebRTC [PeerConnection API](/zh-CN/docs/WebRTC/PeerConnection_API) 或使用 [Web Audio API](/zh-CN/docs/Web_Audio_API) 获得{{domxref("MediaStreamAudioSourceNode")}} 元素。`MediaStream` 对象的输出能链接到一个**用户。** 它可以是一个媒体元素，像是 `<audio>` 或者 `<video>`， the WebRTC [PeerConnection API](/zh-CN/docs/WebRTC/PeerConnection_API) 或是 [Web Audio API](/zh-CN/docs/Web_Audio_API) {{domxref("MediaStreamAudioDestinationNode")}}。

## 参考

在这些参考文章中，您将找到构成 Media Capture 和 Streams API 的每个接口和事件需要了解的基本信息。

- {{event("addtrack")}} (event)
- {{domxref("AudioStreamTrack")}}
- {{domxref("BlobEvent")}}
- {{event("ended (MediaStream)")}} (event)
- {{event("ended (MediaStreamTrack)")}} (event)
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamConstraints")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStreamTrackEvent")}}
- {{domxref("MediaTrackConstraints")}}
- {{event("muted")}} (event)
- {{domxref("NavigatorUserMedia")}}
- {{domxref("NavigatorUserMediaError")}}
- {{event("overconstrained")}} (event)
- {{event("removetrack")}} (event)
- {{event("started")}} (event)
- {{event("unmuted")}} (event)
- {{domxref("URL")}}
- {{domxref("VideoStreamTrack")}}

## 浏览器支持

{{Compat}}

## See Also

- [WebRTC](/zh-CN/docs/WebRTC) - API 介绍页
- [getUserMedia()](/zh-CN/docs/Web/API/MediaDevices/getUserMedia)
- [Taking webcam photos](/zh-CN/docs/WebRTC/taking_webcam_photos) - 关于使用 `getUserMedia()` 的演示

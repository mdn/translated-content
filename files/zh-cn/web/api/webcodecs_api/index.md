---
title: WebCodecs API
slug: Web/API/WebCodecs_API
---

{{DefaultAPISidebar("WebCodecs API")}}

**WebCodecs API** 为 web 开发者提供了对视频流的单个帧和音频数据块的底层访问能力。这对于那些需要完全控制媒体处理方式的 web 应用程序非常有用。例如，视频或音频编辑器，以及视频会议。

## 概念和用法

许多 Web API 在内部都使用了媒体编码器。例如，{{domxref("Web Audio API")}}，以及 {{domxref("WebRTC API")}}。然而，这些 API 不允许开发者处理视频流的单个帧和未合成的编码音频块或视频块。

Web 开发者通常使用 WebAssembly 来绕过这一限制，并在浏览器中使用媒体编解码器。然而，这需要额外的带宽来下载浏览器中已经存在的编解码器，降低了性能和能效，并增加了额外的开发成本。

WebCodecs API 提供了对浏览器中已存在的编解码器的访问能力。它可以访问原始视频帧、音频数据块、图像解码器、音频和视频的编码器及解码器

## 接口

- {{domxref("AudioDecoder")}}
  - : 解码 {{domxref("EncodedAudioChunk")}} 对象。
- {{domxref("VideoDecoder")}}
  - : 解码 {{domxref("EncodedVideoChunk")}} 对象。
- {{domxref("AudioEncoder")}}
  - : 编码 {{domxref("AudioData")}} 对象。
- {{domxref("VideoEncoder")}}
  - : 编码 {{domxref("VideoFrame")}} 对象。
- {{domxref("EncodedAudioChunk")}}
  - : 表示特定于编解码器的编码音频字节。
- {{domxref("EncodedVideoChunk")}}
  - : 表示特定于编解码器的编码视频字节。
- {{domxref("AudioData")}}
  - : 表示未编码的音频数据。
- {{domxref("VideoFrame")}}
  - : 表示一帧未编码的视频数据。
- {{domxref("VideoColorSpace")}}
  - : 表示视频帧的颜色空间。
- {{domxref("ImageDecoder")}}
  - : 解包和解码图像数据，允许访问动画图像中的帧序列。
- {{domxref("ImageTrackList")}}
  - : 表示图像中可用的轨道列表。
- {{domxref("ImageTrack")}}
  - : 表示单个图像轨道。

## 示例

在下面这个例子中，获取从 {{domxref("MediaStreamTrackProcessor")}} 中返回的帧，然后对他们进行编码。在文章[使用 WebCodec 处理视频](https://developer.chrome.google.cn/docs/web-platform/best-practices/webcodecs)查看完整示例并了解更多细节。

```js
let frame_counter = 0;
const track = stream.getVideoTracks()[0];
const media_processor = new MediaStreamTrackProcessor(track);
const reader = media_processor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;
  let frame = result.value;
  if (encoder.encodeQueueSize > 2) {
    // Too many frames in flight, encoder is overwhelmed
    // let's drop this frame.
    frame.close();
  } else {
    frame_counter++;
    const insert_keyframe = frame_counter % 150 === 0;
    encoder.encode(frame, { keyFrame: insert_keyframe });
    frame.close();
  }
}
```

## 参考

- [使用 WebCodec 处理视频](https://developer.chrome.google.cn/docs/web-platform/best-practices/webcodecs)

---
title: オーディオセッション API
slug: Web/API/Audio_Session_API
l10n:
  sourceCommit: 7afb60028792bba6b9c809867bc6c5304f9868a6
---

{{DefaultAPISidebar("Audio Session API")}}{{SeeCompatTable}}

**オーディオセッション API** は、 Web アプリケーションが、デバイス上で再生されている他のオーディオとの相互作用を制御するためのメカニズムを提供します。

## 概念と使用法

人々はますますウェブを通じてメディアを消費するようになり、ウェブは今やオーディオやビデオコンテンツにアクセスするための主要なチャネルとなっています。しかし、ウェブ上のメディアは、基盤となるプラットフォームとのシームレスな統合が欠けている場合が少なくありません。 Audio Session API は、開発者がウェブアプリケーションで生成されたオーディオがデバイス上の他のアプリケーションのオーディオとどのように相互作用するかを指定できるようにすることで、このギャップを解消します。例えば、他のオーディオと同時に再生したり、音量を下げたり、一時停止してオーディオを単独で再生したりできます。

ウェブページは、 {{domxref("HTMLMediaElement")}} や [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)どのAPIを使用して、さまざまな方法で音声処理を実行できます。**オーディオセッション**は、ウェブページによって生成された集約された音声を表し、ウェブページが音声出力の一般的な性質を表現できるようにします。

### 音声セッションの種類

API は、アプリケーションが生成するオーディオの種類を指定する、いくつかのオーディオセッションタイプをサポートしています。

- `"auto"` — The default. The user agent automatically chooses the best type based on the audio APIs being used.
- `"playback"` — For media playback such as music or video. This type should not mix with other audio playback .
- `"transient"` — For short sounds like notifications. This type usually plays on top of other audio.
- `"transient-solo"` — For audio that should play exclusively, pausing all other audio (such as voice prompts).
- `"ambient"` — For audio that can mix with other audio sources.
- `"play-and-record"` — For applications that both play and record audio, such as video conferencing.

## Interfaces

- {{domxref("AudioSession")}} {{Experimental_Inline}}
  - : The main interface for controlling audio session behavior, including setting the audio session type.

### Extensions to other interfaces

- {{domxref("Navigator.audioSession")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("AudioSession")}} object for the current document.

## Examples

### Setting up a video conferencing audio session

In a video conferencing application, both playback and recording are required simultaneously; this is something the Audio Session API can help with.

First, we set the audio session type to `"play-and-record"` to inform the platform that this page requires microphone access alongside audio output. On supporting platforms, this may adjust system volume routing (for example, using the earpiece instead of the speaker on mobile devices) and prevent audio from other applications from interrupting the call.

```js
navigator.audioSession.type = "play-and-record";
```

Next, we set up the media streams for the video call as usual. The platform will now handle the audio produced by these streams according to the `"play-and-record"` session type.

```js
// Start playing remote media
remoteVideo.srcObject = remoteMediaStream;
remoteVideo.play();

// Start capturing local media
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then((stream) => {
    localVideo.srcObject = stream;
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioSession")}}
- {{domxref("Navigator.audioSession")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLMediaElement")}}

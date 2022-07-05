---
title: MediaStream.getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
tags:
  - API
  - Audio
  - 実験的
  - Media
  - メディアキャプチャとストリーム API
  - メディアストリーム API
  - MediaStream
  - MediaStreamTrack
  - メソッド
  - リファレンス
  - getAudioTracks
  - トラック
browser-compat: api.MediaStream.getAudioTracks
translation_of: Web/API/MediaStream/getAudioTracks
---
{{APIRef("Media Capture and Streams")}}

**`getAudioTracks()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、そのストリームの [`track set`](https://www.w3.org/TR/mediacapture-streams/#track-set) の中から、 {{domxref("MediaStreamTrack.kind")}} が `audio` である {{domxref("MediaStreamTrack")}} を表すオブジェクトの配列を返します。

## 構文

```js
var mediaStreamTracks = mediaStream.getAudioTracks()
```

### 引数

なし。

### 返値

ストリームに含まれる音声トラックである {{domxref("MediaStreamTrack")}} オブジェクトの配列です。音声トラックとは {{domxref("MediaStreamTrack.kind", "kind")}} プロパティが `audio` のトラックです。ストリーム内に音声トラックがない場合は、この配列は空になります。

> **Note:** 返されるトラックの順序は仕様書では定義されておらず、実際、 `getAudioTracks()` を呼び出すごとに変わる可能性があります。

この API の初期の版では、特別な `AudioStreamTrack` インターフェイスがあり、音声ストリームのリストに含まれる各項目の型として使用されていましたが、これはその後でメインの {{domxref("MediaStreamTrack")}} インターフェイスに統合されました。

## 例

この例では、ウェブカメラの音声と動画を {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使ってストリームとして取得し、そのストリームを {{HTMLElement("video")}} 要素に設定します。その後、終了時にストリーム内の最初の音声トラックを停止するタイマーを設定します。

```js
navigator.mediaDevices.getUserMedia({audio: true, video: true})
.then(mediaStream => {
  document.querySelector('video').srcObject = mediaStream;
  // Stop the audio stream after 5 seconds
  setTimeout(() => {
    const tracks = mediaStream.getAudioTracks()
    tracks[0].stop()
  }, 5000)
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

---
title: MediaStream.getTracks()
slug: Web/API/MediaStream/getTracks
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

**`getTracks()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、このストリームの[`トラックセット`](https://www.w3.org/TR/mediacapture-streams/#track-set)にあるすべての {{domxref("MediaStreamTrack")}} オブジェクトを {{domxref("MediaStreamTrack.kind")}} に関係なく表す配列を返します。

## 構文

```js
var mediaStreamTracks = mediaStream.getTracks();
```

### 引数

なし。

### 返値

{{domxref("MediaStreamTrack")}} オブジェクトの配列です。

## 例

```js
navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    // 5 秒後にストリームを停止
    setTimeout(() => {
      const tracks = mediaStream.getTracks();
      tracks[0].stop();
    }, 5000);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

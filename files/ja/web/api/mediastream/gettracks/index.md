---
title: "MediaStream: getTracks() メソッド"
short-title: getTracks()
slug: Web/API/MediaStream/getTracks
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

**`getTracks()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、このストリームの[`トラックセット`](https://www.w3.org/TR/mediacapture-streams/#track-set)にあるすべての {{domxref("MediaStreamTrack")}} オブジェクトを {{domxref("MediaStreamTrack.kind")}} に関係なく表す配列を返します。

## 構文

```js-nolint
getTracks()
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

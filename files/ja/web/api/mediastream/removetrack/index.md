---
title: "MediaStream: removeTrack() メソッド"
short-title: removeTrack()
slug: Web/API/MediaStream/removeTrack
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Capture and Streams")}}

**`removeTrack()`** は {{domxref("MediaStream")}} インターフェイスのメソッドで、ストリームから {{domxref("MediaStreamTrack")}} を除去します。

## 構文

```js-nolint
removeTrack(track)
```

### 引数

- `track`
  - : ストリームから除去される {{domxref("MediaStreamTrack")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

次の例は、 {{domxref("MediaStream")}} から音声トラックと映像トラックを除去する方法を示しています。 `fetchStreamFunction` は、 `fetchStreamButton` のイベントハンドラーです。このボタンがクリックされると、システムの機器から音声と動画がキャプチャされます。 `removeTracksFunction` は、 `removeTracksButton` のイベントハンドラーです。このボタンがクリックされると、音声と映像トラックが {{domxref("MediaStream")}} から除去されます。

```js
let initialStream = null;
let newStream = null;

let fetchStreamButton = document.getElementById("fetchStream");
let removeTracksButton = document.getElementById("removeTracks");

async function fetchStreamFunction() {
  initialStream = await navigator.mediaDevices.getUserMedia({
    video: { width: 620, height: 310 },
    audio: true,
  });
  if (initialStream) {
    await attachToDOM(initialStream);
  }
}

async function attachToDOM(stream) {
  newStream = new MediaStream(stream.getTracks());
  document.querySelector("video").srcObject = newStream;
}

async function removeTracksFunction() {
  let videoTrack = newStream.getVideoTracks()[0];
  let audioTrack = newStream.getAudioTracks()[0];

  newStream.removeTrack(videoTrack);
  newStream.removeTrack(audioTrack);

  // ストリームが空になる
  console.log(newStream.getTracks());
}

fetchStreamButton.addEventListener("click", fetchStreamFunction);
removeTracksButton.addEventListener("click", removeTracksFunction);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

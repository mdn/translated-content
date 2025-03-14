---
title: "AudioTrackList: change イベント"
slug: Web/API/AudioTrackList/change_event
l10n:
  sourceCommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{APIRef}}

`change` イベントは、音声トラックが有効または無効になったとき（トラックの [`enabled`](/ja/docs/Web/API/AudioTrack/enabled) プロパティを変更したときなど）に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

`addEventListener()` を使用する場合:

```js
const videoElement = document.querySelector("video");
videoElement.audioTracks.addEventListener("change", (event) => {
  console.log(`'${event.type}' イベント発生`);
});

// `enabled` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector(".toggle-track");
toggleTrackButton.addEventListener("click", () => {
  const track = videoElement.audioTracks[0];
  track.enabled = !track.enabled;
});
```

`onchange` イベントハンドラープロパティを使用する場合:

```js
const videoElement = document.querySelector("video");
videoElement.audioTracks.onchange = (event) => {
  console.log(`'${event.type}' イベント発生`);
};

// `enabled` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector(".toggle-track");
toggleTrackButton.addEventListener("click", () => {
  const track = videoElement.audioTracks[0];
  track.enabled = !track.enabled;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`addtrack`](/ja/docs/Web/API/AudioTrackList/addtrack_event), [`removetrack`](/ja/docs/Web/API/AudioTrackList/removetrack_event)
- [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) を対象としたこのイベント: [`change`](/ja/docs/Web/API/VideoTrackList/change_event)
- [メディアキャプチャおよびストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)

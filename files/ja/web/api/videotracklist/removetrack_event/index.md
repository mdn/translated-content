---
title: "VideoTrackList: removetrack イベント"
slug: Web/API/VideoTrackList/removetrack_event
l10n:
  sourceCommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{APIRef}}

`removetrack` イベントは、トラックが [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) から取り除かれたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('removetrack', (event) => { })

onremovetrack = (event) => { }
```

## イベント型

{{domxref("TrackEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("TrackEvent")}}

## イベントプロパティ

_下記に挙げたプロパティに加えて、親インターフェイスである {{domxref("Event")}} のプロパティも利用できます。_

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : イベントが参照している新しく追加された {{domxref("VideoTrack")}}。

## 例

`addEventListener()` を使用する場合

```js
const videoElement = document.querySelector('video');

videoElement.videoTracks.addEventListener('removetrack', (event) => {
  console.log(`Video track: ${event.track.label} removed`);
});
```

`onremovetrack` イベントハンドラープロパティを使用する場合

```js
const videoElement = document.querySelector('video');

videoElement.videoTracks.onremovetrack = (event) => {
  console.log(`Video track: ${event.track.label} removed`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`addtrack`](/ja/docs/Web/API/VideoTrackList/addtrack_event), [`change`](/ja/docs/Web/API/VideoTrackList/change_event)
- [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) を対象としたこのイベント: [`removetrack`](/ja/docs/Web/API/AudioTrackList/removetrack_event)
- [`MediaStream`](/ja/docs/Web/API/MediaStream) を対象としたこのイベント: [`removetrack`](/ja/docs/Web/API/MediaStream/removetrack_event)
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/ja/docs/Web/API/WebRTC_API)

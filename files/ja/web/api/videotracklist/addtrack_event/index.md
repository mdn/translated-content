---
title: "VideoTrackList: addtrack イベント"
slug: Web/API/VideoTrackList/addtrack_event
l10n:
  sourceCommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{APIRef}}

`addtrack` イベントは、トラックが [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) に追加されたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('addtrack', (event) => { })

onaddtrack = (event) => { }
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

videoElement.videoTracks.addEventListener('addtrack', (event) => {
  console.log(`Video track: ${event.track.label} added`);
});
```

`onaddtrack` イベントハンドラープロパティを使用する場合

```js
const videoElement = document.querySelector('video');

videoElement.videoTracks.onaddtrack = (event) => {
  console.log(`Video track: ${event.track.label} added`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`removetrack`](/ja/docs/Web/API/VideoTrackList/removetrack_event), [`change`](/ja/docs/Web/API/VideoTrackList/change_event)
- [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) を対象としたこのイベント: [`addtrack`](/ja/docs/Web/API/AudioTrackList/addtrack_event)
- [`MediaStream`](/ja/docs/Web/API/MediaStream) を対象としたこのイベント: [`addtrack`](/ja/docs/Web/API/MediaStream/addtrack_event)
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/ja/docs/Web/API/WebRTC_API)

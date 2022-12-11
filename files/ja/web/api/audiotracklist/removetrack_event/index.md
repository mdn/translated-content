---
title: "AudioTrackList: removetrack イベント"
slug: Web/API/AudioTrackList/removetrack_event
l10n:
  sourceCommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{APIRef}}

`removetrack` イベントは、トラックが [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) から取り除かれたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## イベント型

{{domxref("TrackEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("TrackEvent")}}

## イベントプロパティ

_`TrackEvent` は {{domxref("Event")}} に基づいているため、 `Event` のプロパティも `TrackEvent` オブジェクトで利用できます。_

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : このイベントが参照している DOM track オブジェクト。 `null` でなければ、これは常にいずれかのメディアトラック型のオブジェクトになります。{{domxref("AudioTrack")}}、{{domxref("VideoTrack")}}、{{domxref("TextTrack")}}) のいずれかです。

## 解説

### トリガー

{{domxref("AudioTrackList/removetrack_event", "removetrack")}} イベントは、 `AudioTrackList` オブジェクトで表される音声トラックを持つメディア要素からトラックが取り外されるたびに呼び出されます。

このイベントはキャンセル不可で、バブリングしません。

### 用途

このイベントを使用して、新しい音声トラックが利用できるようになったことに反応することができます。例えば、新しい音声トラックをユーザーが選択できるように、 UI 要素を更新することができます。

## 例

`AddEventListener()` を使用する場合:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("removetrack", (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
});
```

`onremovetrack` イベントハンドラープロパティを使用する場合:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.onremovetrack = (event) => {
  console.log(`Audio track: ${event.track.label} removed`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`addtrack`](/ja/docs/Web/API/AudioTrackList/addtrack_event), [`change`](/ja/docs/Web/API/AudioTrackList/change_event)
- [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) を対象としたこのイベント: [`removetrack`](/ja/docs/Web/API/VideoTrackList/removetrack_event)
- [`MediaStream`](/ja/docs/Web/API/MediaStream) を対象としたこのイベント: [`removetrack`](/ja/docs/Web/API/MediaStream/removetrack_event)
- [メディアキャプチャおよびストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)

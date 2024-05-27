---
title: "AudioTrackList: addtrack イベント"
short-title: addtrack
slug: Web/API/AudioTrackList/addtrack_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef}}

`addtrack` イベントは、トラックが [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) に追加されたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("addtrack", (event) => { })

onaddtrack = (event) => { }
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

この {{domxref("AudioTrackList/addtrack_event", "addtrack")}} イベントは、 `AudioTrackList` オブジェクトで表される音声トラックを持つメディア要素に新しいトラックが追加されるたびに呼び出されます。
これは、メディアが最初に要素に装着されたとき、トラックが追加されたときに起こります。メディアリソース内のそれぞれの音声トラックに対して、 1 つの `addtrack` イベントが発生します。

このイベントはキャンセル不可で、バブリングしません。

### 用途

このイベントを使用して、新しい音声トラックが利用できるようになったことに反応することができます。例えば、新しい音声トラックをユーザーが選択できるように、 UI 要素を更新することができます。

## 例

`addEventListener()` を使用する場合:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.addEventListener("addtrack", (event) => {
  console.log(`Audio track: ${event.track.label} added`);
});
```

`onaddtrack` イベントハンドラープロパティを使用する場合:

```js
const videoElement = document.querySelector("video");

videoElement.audioTracks.onaddtrack = (event) => {
  console.log(`Audio track: ${event.track.label} added`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`removetrack`](/ja/docs/Web/API/AudioTrackList/removetrack_event)、[`change`](/ja/docs/Web/API/AudioTrackList/change_event)
- [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) を対象としたこのイベント: [`addtrack`](/ja/docs/Web/API/VideoTrackList/addtrack_event)
- [`MediaStream`](/ja/docs/Web/API/MediaStream) を対象としたこのイベント: [`addtrack`](/ja/docs/Web/API/MediaStream/addtrack_event)
- [メディアキャプチャおよびストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)

---
title: "MediaStream: removetrack イベント"
short-title: removetrack
slug: Web/API/MediaStream/removetrack_event
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

**`removetrack`** イベントは、新しい {{domxref("MediaStreamTrack")}} オブジェクトが {{domxref("MediaStream")}} から除去されたときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("removetrack", (event) => {});

onremovetrack = (event) => {};
```

## イベント型

{{domxref("MediaStreamTrackEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## イベントプロパティ

_親インターフェイスである {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("MediaStreamTrackEvent.track")}} {{ReadOnlyInline}}
  - : {{domxref("MediaStreamTrack")}} オブジェクトで、このストリームから除去されたトラックを表します。

## 例

`addEventListener()` を使用すると次にようになります。

```js
const stream = new MediaStream();

stream.addEventListener("removetrack", (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

`onremovetrack` イベントハンドラープロパティを使用すると次にようになります。

```js
const stream = new MediaStream();

stream.onremovetrack = (event) => {
  console.log(`${event.track.kind} track removed`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`addtrack`](/ja/docs/Web/API/MediaStream/addtrack_event)
- [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) をターゲットとしたこのイベント: [`removetrack`](/ja/docs/Web/API/AudioTrackList/removetrack_event)
- [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) をターゲットとしたこのイベント: [`removetrack`](/ja/docs/Web/API/VideoTrackList/removetrack_event)
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/ja/docs/Web/API/WebRTC_API)

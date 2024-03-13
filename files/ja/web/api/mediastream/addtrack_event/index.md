---
title: "MediaStream: addtrack イベント"
slug: Web/API/MediaStream/addtrack_event
---

{{APIRef("Media Capture and Streams")}}

`addtrack` イベントは、新しい [`MediaStreamTrack`](/ja/docs/Web/API/MediaStreamTrack) オブジェクトが [`MediaStream`](/ja/docs/Web/API/MediaStream) に追加されたときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("addtrack", (event) => {});

onaddtrack = (event) => {};
```

## イベント型

{{domxref("MediaStreamTrackEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## イベントプロパティ

_親インターフェイスである {{domxref("Event")}} から継承したプロパティもあります。_

- `track` {{ReadOnlyInline}}
  - : {{domxref("MediaStreamTrack")}} オブジェクトで、このストリームに追加されたトラックを表します。

## 例

`addEventListener()` を使用すると次にようになります。

```js
let stream = new MediaStream();

stream.addEventListener("addtrack", (event) => {
  console.log(`New ${event.track.kind} track added`);
});
```

`onaddtrack` イベントハンドラープロパティを使用すると次にようになります。

```js
let stream = new MediaStream();

stream.onaddtrack = (event) => {
  console.log(`New ${event.track.kind} track added`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`removetrack`](/ja/docs/Web/API/MediaStream/removetrack_event)
- [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) をターゲットとしたこのイベント: [`addtrack`](/ja/docs/Web/API/AudioTrackList/addtrack_event)
- [`VideoTrackList`](/ja/docs/Web/API/VideoTrackList) をターゲットとしたこのイベント: [`addtrack`](/ja/docs/Web/API/VideoTrackList/addtrack_event)
- [メディアストリーム API](/ja/docs/Web/API/Media_Streams_API)
- [WebRTC](/ja/docs/Web/API/WebRTC_API)

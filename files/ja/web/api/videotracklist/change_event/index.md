---
title: "VideoTrackList: change イベント"
slug: Web/API/VideoTrackList/change_event
l10n:
  sourceCommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{APIRef}}

`change` イベントは、映像トラックがアクティブまたは非アクティブになったとき（トラックの [`selected`](/ja/docs/Web/API/VideoTrack/selected) プロパティを変更したときなど）に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('change', (event) => { })

onchange = (event) => { }
```

## イベント型

一般的な {{DOMxRef("Event")}} で、追加のプロパティはありません。

## 例

`addEventListener()` を使用する場合

```js
const videoElement = document.querySelector('video');
videoElement.videoTracks.addEventListener('change', (event) => {
    console.log(`'${event.type}' イベント発生`);
});

// `selected` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
```

`onchange` イベントハンドラープロパティを使用する場合

```js
const videoElement = document.querySelector('video');
videoElement.videoTracks.onchange = (event) => {
    console.log(`'${event.type}' イベント発生`);
};

// `selected` の値を変更すると `change` イベントを引き起こします
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`addtrack`](/ja/docs/Web/API/VideoTrackList/addtrack_event), [`removetrack`](/ja/docs/Web/API/VideoTrackList/removetrack_event)
- [`AudioTrackList`](/ja/docs/Web/API/AudioTrackList) を対象としたこのイベント: [`change`](/ja/docs/Web/API/AudioTrackList/change_event)
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/ja/docs/Web/API/WebRTC_API)

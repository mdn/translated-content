---
title: "HTMLMediaElement: waiting イベント"
short-title: waiting
slug: Web/API/HTMLMediaElement/waiting_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTMLMediaElement")}}

`waiting` イベントは、一時的にデータが欠落したために再生が停止したときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("waiting", (event) => {});

onwaiting = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

これらの例は、 HTMLMediaElement の `waiting` イベントのイベントリスナーを追加し、イベントの発生によりイベントハンドラーが動作したときにメッセージを登録します。

`addEventListener()` を使用する場合

```js
const video = document.querySelector("video");

video.addEventListener("waiting", (event) => {
  console.log("Video is waiting for more data.");
});
```

`onwaiting` イベントハンドラープロパティを使用する場合

```js
const video = document.querySelector("video");

video.onwaiting = (event) => {
  console.log("Video is waiting for more data.");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連イベント

- HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} イベント

## 関連情報

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}

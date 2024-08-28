---
title: "HTMLMediaElement: ended イベント"
short-title: ended
slug: Web/API/HTMLMediaElement/ended_event
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTMLMediaElement")}}

`ended` イベントは、メディアの終わりに達したため、またはそれ以上利用できるデータがないために再生またはストリーミングが停止したときに発生します。

このイベントは、 {{domxref("HTMLMediaElement")}}（{{HTMLElement("audio")}} および {{HTMLElement("video")}}）においてメディアの再生がメディアの最後に到達して終了した時に、 `ended` が発生します。

このイベントはキャンセル不可で、バブリングしません。

> **メモ:** `ended` イベントは [`loop`](/ja/docs/Web/API/HTMLMediaElement/loop) プロパティが `true` で [`playbackRate`](/ja/docs/Web/API/HTMLMediaElement/playbackRate) が負の数ではない場合には発生しません。

## 構文

このイベントを {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("ended", (event) => {});

onended = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

これらの例では、`HTMLMediaElement` の `ended` イベントのイベントリスナーを追加し、そのイベントハンドラーがイベントの発生に反応したときにメッセージを投稿します。

`addEventListener()` を使用する場合:

```js
const video = document.querySelector("video");

video.addEventListener("ended", (event) => {
  console.log(
    "動画は再生が完了したか、それ以上のデータが利用できないために停止しました。",
  );
});
```

`onended` イベントハンドラープロパティを使用する場合:

```js
const video = document.querySelector("video");

video.onended = (event) => {
  console.log(
    "動画は再生が完了したか、それ以上のデータが利用できないために停止しました。",
  );
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連イベント

- HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} イベント
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
- [メディアキャプチャとストリーム](/ja/docs/Web/API/Media_Capture_and_Streams_API)

  - [メディアキャプチャとストリーム](/ja/docs/Web/API/Media_Capture_and_Streams_API)[: ended イベント](/ja/docs/Web/API/MediaStreamTrack/ended_event)

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)

  - [ウェブオーディオ API: ended イベント](/ja/docs/Web/API/AudioScheduledSourceNode/ended_event)

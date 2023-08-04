---
title: "HTMLMediaElement: pause イベント"
slug: Web/API/HTMLMediaElement/pause_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTMLMediaElement")}}

`pause` イベントは、動作の一時停止のリクエストが処理され、動作が一時状態に入ったときに送信されるものであり、メディアが要素の {{domxref("HTMLMediaElement.pause", "pause()")}} の呼び出しを通して一時停止した後が最も一般的です。

イベントは `pause()` メソッドから戻り、メディア要素の {{domxref("HTMLMediaElement.paused", "paused")}} プロパティが `true` に変化した後で一度送信されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('pause', (event) => {});

onpause = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

これらの例は、 HTMLMediaElement の `pause` イベントにイベントリスナーを追加してから、イベントが発生したことでイベントハンドラーが動作したときにメッセージをポストします。

`addEventListener()` を使用した例:

```js
const video = document.querySelector('video');

video.addEventListener('pause', (event) => {
  console.log('The Boolean paused property is now true. Either the ' +
  'pause() method was called or the autoplay attribute was toggled.');
});
```

`onpause` イベントハンドラープロパティを使用した例:

```js
const video = document.querySelector('video');

video.onpause = (event) => {
  console.log('The Boolean paused property is now true. Either the ' +
  'pause() method was called or the autoplay attribute was toggled.');
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
- {{domxref("SpeechSynthesisUtterance")}}

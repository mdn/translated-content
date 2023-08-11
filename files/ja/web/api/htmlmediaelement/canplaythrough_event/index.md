---
title: "HTMLMediaElement: canplaythrough イベント"
slug: Web/API/HTMLMediaElement/canplaythrough_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTMLMediaElement")}}

`canplaythrough` イベントは、ユーザーエージェントがメディアを再生可能なときに発生し、コンテンツをさらにバッファリングするために再生を停止することなく、メディアを最後まで再生するのに十分なデータが読み込まれたと推定します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('canplaythrough', (event) => { });

oncanplaythrough = (event) => { };
```

## イベント型

一般の {{domxref("Event")}} です。

## 例

これらの例では、 HTMLMediaElement の `canplaythrough` イベントのイベントリスナーを追加し、そのイベントハンドラーがイベントの発生に反応したときにメッセージを投稿します。

`addEventListener()` を使用する場合:

```js
const video = document.querySelector('video');

video.addEventListener('canplaythrough', (event) =&gt; {
  console.log('バッファリングを止めることなく、' +
      '動画全体を再生できると思います。');
});</pre>

`oncanplaythrough` イベントハンドラープロパティを使用する場合:

```js
const video = document.querySelector('video');

video.oncanplaythrough = (event) =&gt; {
  console.log('バッファリングを止めることなく、' +
      '動画全体を再生できると思います。');
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

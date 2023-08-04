---
title: "HTMLMediaElement: timeupdate イベント"
slug: Web/API/HTMLMediaElement/timeupdate_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef("HTMLMediaElement")}}

`timeupdate` イベントは、`currentTime` 属性で示される時刻が更新されたときに発生します。

イベントの頻度はシステムの負荷に依存しますが、およそ 4Hz と 66Hz との間で発生します（イベントハンドラーが実行するのに 250ms 以上かかることはないと仮定します）。ユーザーエージェントはシステム負荷とその都度イベントを処理する平均コストに基づいて、イベントの頻度を変えることが推奨されているため、ユーザーエージェントがビデオのデコード中に快適に処理できるよりも頻繁に UI 更新が行われることはありません。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('timeupdate', (event) => {});

ontimeupdate = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

これらの例は、 HTMLMediaElement の `timeupdate` イベントのイベントリスナーを追加し、イベントが発生してイベントハンドラーが動作するときにメッセージを投稿します。なお、イベントの頻度はシステムの稼働状況に依存します。

`addEventListener()` を使用する場合:

```js
const video = document.querySelector('video');

video.addEventListener('timeupdate', (event) => {
  console.log('The currentTime attribute has been updated. Again.');
});
```

`ontimeupdate` イベントハンドラープロパティを使用する場合:

```js
const video = document.querySelector('video');

video.ontimeupdate = (event) => {
  console.log('The currentTime attribute has been updated. Again.');
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

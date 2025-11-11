---
title: "HTMLMediaElement: loadeddata イベント"
short-title: loadeddata
slug: Web/API/HTMLMediaElement/loadeddata_event
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTMLMediaElement")}}

**`loadeddata`** イベントは、メディアの現在の再生位置のフレームの読み込みが完了したときに発生します。ふつうは最初のフレームです。

> [!NOTE]
> なお、このイベントはモバイルやタブレットにおいて、ブラウザーの設定でデータセーバーがオンになっていると発生しません。

## 構文

このイベントを {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("loadeddata", (event) => {});

onloadeddata = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

これらの例では、 HTMLMediaElement の `loadeddata` イベントにイベントリスナーを追加し、イベントが発生してイベントハンドラーが動作したときにメッセージを投稿します。

`addEventListener()` を使用する場合:

```js
const video = document.querySelector("video");

video.addEventListener("loadeddata", (event) => {
  console.log(
    "やった! readyState が初めて HAVE_CURRENT_DATA 以上になりました。",
  );
});
```

`onloadeddata` イベントハンドラープロパティを使用する場合:

```js
const video = document.querySelector("video");

video.onloadeddata = (event) => {
  console.log(
    "やった! readyState が初めて HAVE_CURRENT_DATA 以上になりました。",
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
- HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} イベント
- HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} イベント
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

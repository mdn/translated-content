---
title: "MediaRecorder: stop イベント"
slug: Web/API/MediaRecorder/stop_event
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("Media Recorder API")}}

`stop` イベントは、{{domxref("MediaRecorder.stop()")}} メソッドを呼び出した結果として、またはキャプチャしているメディアストリームが終了したときに発生します。 いずれの場合も、`stop` イベントの前に `dataavailable` イベントがあり、それまでにキャプチャされた {{domxref("Blob")}} をアプリで使用できるようにします。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用sるうか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("stop", (event) => {});

onstop = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
mediaRecorder.onstop = (e) => {
  console.log("MediaRecorder.stop() 呼び出し後に利用可能なデータ。");

  const audio = document.createElement('audio');
  audio.controls = true;
  const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;
  console.log("レコーダー停止");
}

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[GitHub のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("Navigator.getUserMedia")}}

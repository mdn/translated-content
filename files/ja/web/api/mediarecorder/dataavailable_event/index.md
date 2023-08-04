---
title: "MediaRecorder: dataavailable イベント"
slug: Web/API/MediaRecorder/dataavailable_event
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("MediaStream Recording")}}

`dataavailable` イベントは、`MediaRecorder` がメディアデータをアプリで使用するために引き渡すときに発生します。 データはデータを含む {{domxref("Blob")}} オブジェクトで提供されます。 これは次の 4 つの状況で発生します。

- メディアストリームが終了すると、`ondataavailable` ハンドラーにまだ引き渡されていないメディアデータはすべて単一の {{domxref("Blob")}} で渡されます。
- {{domxref("MediaRecorder.stop()")}} を呼び出すと、収録を開始してから、または最後に `dataavailable` イベントが発生してからキャプチャされたすべてのメディアデータが {{domxref("Blob")}} で引き渡されます。 この後、キャプチャは終了します。
- {{domxref("MediaRecorder.requestData()")}} を呼び出すと、収録を開始してから、または最後に `dataavailable` イベントが発生してからキャプチャされたすべてのメディアデータが引き渡されます。 その後、新しい `Blob` が作成され、メディアのキャプチャがその blob に対して続行されます。
- `timeslice` プロパティをメディアキャプチャを開始した {{domxref("MediaRecorder.start()")}} メソッドに渡した場合は、`timeslice` ミリ秒ごとに `dataavailable` イベントが発生します。 つまり、各 blob は特定の期間を持つことになります（最後の blob を除いてで、最後のイベント以降に残っているものは何でもということになるので、これはもっと短いかもしれません）。 そのため、メソッド呼び出しが次のようになっていれば — `recorder.start(1000);` — `dataavailable` イベントはメディアキャプチャの毎秒後に発生し、イベントハンドラーは一秒の長さのメディアデータの blob で毎秒呼ばれるでしょう。 `timeslice` を {{domxref("MediaRecorder.stop()")}} および {{domxref("MediaRecorder.requestData()")}} と共に使用して、複数の同じ長さの blob と他の短い blob を生成することもできます。

> **メモ:** メディアデータを含む {{domxref("Blob")}} は、{{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントの `data` プロパティで利用できます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("dataavailable", (event) => {});

ondataavailable = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const chunks = [];

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

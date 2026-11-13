---
title: "MediaRecorder: stop イベント"
short-title: stop
slug: Web/API/MediaRecorder/stop_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("MediaStream Recording")}}

**`stop`** は {{domxref("MediaRecorder")}} インターフェイスのイベントで、{{domxref("MediaRecorder.stop()")}} メソッドを呼び出した結果として、またはキャプチャしているメディアストリームが終了したときに発生します。 いずれの場合も、`stop` イベントの前に `dataavailable` イベントがあり、それまでにキャプチャされた {{domxref("Blob")}} をアプリで使用できるようにします。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("stop", (event) => { })

onstop = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
mediaRecorder.onstop = (e) => {
  console.log("MediaRecorder.stop() 呼び出し後に利用可能なデータ。");

  const audio = document.createElement("audio");
  audio.controls = true;
  const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;
  console.log("レコーダー停止");
};

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 作（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)）。<sup>(英語)</sup>
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 作。<sup>(英語)</sup>
- {{domxref("Navigator.getUserMedia")}}

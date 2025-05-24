---
title: "MediaRecorder: pause イベント"
short-title: pause
slug: Web/API/MediaRecorder/pause_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("MediaStream Recording")}}

**`pause`** は {{domxref("MediaRecorder")}} インターフェイスのイベントで、 {{domxref("MediaRecorder.pause()")}} メソッドを呼び出した際に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("pause", (event) => { })

onpause = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
pause.onclick = () => {
  if (mediaRecorder.state === "recording") {
    mediaRecorder.pause();
    // 記録を一時停止
  } else if (mediaRecorder.state === "paused") {
    mediaRecorder.resume();
    // 記録を再開
  }
};

mediaRecorder.onpause = () => {
  // 記録の一時停止に
  // 応答して何かをする
};

mediaRecorder.onresume = () => {
  // 記録の再開に
  // 応答して何かをする
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 著（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)）。（英語）
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 著。（英語）
- {{domxref("Navigator.getUserMedia")}}

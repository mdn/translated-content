---
title: "SpeechRecognition: audioend イベント"
short-title: audioend
slug: Web/API/SpeechRecognition/audioend_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

**`audioend`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、ユーザーエージェントが音声認識のためのオーディオキャプチャを終了したときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("audioend", (event) => {});

onaudioend = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

`audioend` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("audioend", () => {
  console.log("音声認識が終了しました。");
});
```

または `onaudioend` イベントハンドラープロパティを使用してください。

```js
recognition.onaudioend = () => {
  console.log("Audio capturing ended");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

---
title: "SpeechRecognition: audiostart イベント"
short-title: audiostart
slug: Web/API/SpeechRecognition/audiostart_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

**`audiostart`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、ユーザーエージェントが音声認識のためのオーディオキャプチャを開始したときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("audiostart", (event) => {});

onaudiostart = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

`audiostart` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("audiostart", () => {
  console.log("音声キャプチャを開始しました。");
});
```

または `onaudiostart` イベントハンドラープロパティを使用してください。

```js
recognition.onaudiostart = () => {
  console.log("音声キャプチャを開始しました。");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

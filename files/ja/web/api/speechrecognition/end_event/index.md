---
title: "SpeechRecognition: end イベント"
slug: Web/API/SpeechRecognition/end_event
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Web Speech API")}}

**`end`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) の
{{domxref("SpeechRecognition")}} オブジェクトのイベントで、音声認識サービスが切断された時に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("end", (event) => {});

onend = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

`end` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("end", () => {
  console.log("音声認識サービスを切断しました。");
});
```

または `onend` イベントハンドラープロパティを使用してください。

```js
recognition.onend = () => {
  console.log("音声認識サービスを切断しました。");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

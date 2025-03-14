---
title: "SpeechRecognition: speechstart イベント"
slug: Web/API/SpeechRecognition/speechstart_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`speechstart`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、音声認識サービスにより音声として認識された音が検出されたときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("speechstart", (event) => {});

onspeechstart = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

`speechstart` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("speechstart", () => {
  console.log("音声が検出されました");
});
```

または `onspeechstart` イベントハンドラープロパティを使用してください。

```js
recognition.onspeechstart = () => {
  console.log("音声が検出されました");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

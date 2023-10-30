---
title: "SpeechRecognition: start イベント"
slug: Web/API/SpeechRecognition/start_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`speechstart`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) の {{domxref("SpeechRecognition")}} オブジェクトのイベントで、これは、音声認識サービスが、現在の `SpeechRecognition` に関連する文法を認識するために、入力される音声を聞き始めたときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("start", (event) => {});

onstart = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

`start` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("start", () => {
  console.log("音声認識サービスが開始しました");
});
```

または `onstart` イベントハンドラープロパティを使用してください。

```js
recognition.onstart = () => {
  console.log("音声認識サービスが開始しました");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

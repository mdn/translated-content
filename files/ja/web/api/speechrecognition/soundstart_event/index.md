---
title: "SpeechRecognition: soundstart イベント"
slug: Web/API/SpeechRecognition/soundstart_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`soundstart`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、何らかの音（認識できる音声、できない音声にかかわらず）が検出できた時に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("soundstart", (event) => {});

onsoundstart = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

`soundstart` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("soundstart", () => {
  console.log("音を受信し始めました");
});
```

または `onsoundstart` イベントハンドラープロパティを使用してください。

```js
recognition.onsoundstart = () => {
  console.log("音を受信し始めました");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

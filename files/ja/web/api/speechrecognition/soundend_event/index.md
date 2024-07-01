---
title: "SpeechRecognition: soundend イベント"
slug: Web/API/SpeechRecognition/soundend_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`soundend`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、何らかの音（認識できる音声、できない音声にかかわらず）が検出し終えた時に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("soundend", (event) => {});

onsoundend = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

`soundend` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("soundend", (event) => {
  console.log("音が受信できなくなりました");
});
```

または `onsoundend` イベントハンドラープロパティを使用してください。

```js
recognition.onsoundend = (event) => {
  console.log("音が受信できなくなりました");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

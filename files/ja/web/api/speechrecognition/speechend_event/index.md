---
title: "SpeechRecognition: speechend イベント"
slug: Web/API/SpeechRecognition/speechend_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`speechend`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、音声認識サービスで認識された音声が検出されなくなったときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("speechend", (event) => {});

onspeechend = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

`speechend` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("speechend", () => {
  console.log("音声が検出されなくなりました");
});
```

または `onspeechend` イベントハンドラープロパティを使用してください。

```js
recognition.onspeechend = () => {
  console.log("音声が検出されなくなりました");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

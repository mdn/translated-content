---
title: "SpeechRecognition: error イベント"
slug: Web/API/SpeechRecognition/error_event
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`error`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) の
{{domxref("SpeechRecognition")}} オブジェクトのイベントで、音声認識のエラーが発生した時に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## イベント型

{{domxref("SpeechRecognitionErrorEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("SpeechRecognitionErrorEvent")}}

## イベントプロパティ

_以下に列挙したプロパティに加えて、親インターフェイスである {{domxref("Event")}} から継承したプロパティも利用できます。_

- {{domxref("SpeechRecognitionErrorEvent.error")}} {{ReadOnlyInline}}
  - : 発生したエラーの種類を示します。
- {{domxref("SpeechRecognitionErrorEvent.message")}} {{ReadOnlyInline}}
  - : エラーの詳細を説明するメッセージを返します。

## 例

`error` イベントは、 [`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドで使用することができます。

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("error", (event) => {
  console.error(`音声認識エラーが発生しました: ${event.error}`);
});
```

または `onerror` イベントハンドラープロパティを使用してください。

```js
recognition.onerror = (event) => {
  console.error(`音声認識エラーが発生しました: ${event.error}`);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

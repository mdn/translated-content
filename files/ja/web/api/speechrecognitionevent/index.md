---
title: SpeechRecognitionEvent
slug: Web/API/SpeechRecognitionEvent
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

**`SpeechRecognitionEvent`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のインターフェイスで、 {{domxref("SpeechRecognition.result_event", "result")}} および {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} イベントのイベントオブジェクトを表し、中間または最終の音声認識結果に関連するすべてのデータを保持します。

{{InheritanceDiagram}}

## Instance properties

_`SpeechRecognitionEvent` は親インターフェイスである {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("SpeechRecognitionEvent.emma")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 結果の EMMA (Extensible MultiModal Annotation markup language) - XML - 表現を返します。
- {{domxref("SpeechRecognitionEvent.interpretation")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ユーザーが言ったことの意味づけを返します。
- {{domxref("SpeechRecognitionEvent.resultIndex")}} {{ReadOnlyInline}}
  - : 実際に変更された {{domxref("SpeechRecognitionResultList")}} 「配列」の中で最もインデックス値の小さい結果を返します。
- {{domxref("SpeechRecognitionEvent.results")}} {{ReadOnlyInline}}
  - : 現在のセッションのすべての音声認識結果を表す {{domxref("SpeechRecognitionResultList")}} オブジェクトを返します。

## 例

このコードは [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) の例から取得したものです。

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain
  // individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

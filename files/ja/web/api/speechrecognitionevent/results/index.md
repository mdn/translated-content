---
title: SpeechRecognitionEvent.results
slug: Web/API/SpeechRecognitionEvent/results
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`results`** は {{domxref("SpeechRecognitionEvent")}} インターフェイスの読み取り専用プロパティは、現在のセッションのすべての音声認識結果を表す {{domxref("SpeechRecognitionResultList")}} オブジェクトを返します。

具体的には、このオブジェクトには、返されたすべての最終結果と、それに続くすべての中間結果に対する現在の最良の仮説が保持されます。後続の {{domxref("SpeechRecognition.result_event", "result")}} イベントが発行されると、中間結果はより新しい中間結果や最終結果によって上書きされる可能性があり、"results" の配列の終わりで配列の長さが減少すると、それらは削除される可能性すらあります。一方、最終結果は上書きされたり削除されたりすることはありません。

## 値

{{domxref("SpeechRecognitionResultList")}} オブジェクトです。

## 例

このコードは [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) の例から取得したものです。

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
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

---
title: "SpeechRecognitionAlternative: transcript プロパティ"
short-title: transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

**`transcript`** は {{domxref("SpeechRecognitionResult")}} インターフェイスの読み取り専用プロパティで、認識した語の記録を含む文字列を返します。

連続認識において、連続した {{domxref("SpeechRecognitionResult")}} の連結がセッションの適切な記録を生成するように、必要に応じて先頭または末尾にホワイトスペースが含まれます。

## 値

文字列です。

## 例

このコードは、 [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) から抜き出しています。

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects
  // that contain individual results.
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

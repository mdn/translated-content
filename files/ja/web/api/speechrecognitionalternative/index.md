---
title: SpeechRecognitionAlternative
slug: Web/API/SpeechRecognitionAlternative
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の **`SpeechRecognitionAlternative`** インターフェイスは、音声認識サービスにより認識されている一つの単語を表します。

## プロパティ

- {{domxref("SpeechRecognitionAlternative.transcript")}} {{readonlyinline}}
  - : 認識された単語の transcript を含む文字列を返します。
- {{domxref("SpeechRecognitionAlternative.confidence")}} {{readonlyinline}}
  - : 音声認識システムの認識の正しさの信頼度を表す評価を数値で返します。

## 例

このコードは、私たちの [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) の例から抜粋しました。

```js
recognition.onresult = function (event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  diagnostic.textContent = "Result received: " + color + ".";
  bg.style.backgroundColor = color;
};
```

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat("api.SpeechRecognitionAlternative")}}

### Firefox OS の許可設定

アプリ内で音声認識を使用するには、[manifest](/ja/docs/Web/Apps/Build/Manifest) ファイルに次の許可設定を指定する必要があります:

```json
"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}
```

特権アプリも必要なため、以下も同様に含める必要があります:

```json
  "type": "privileged"
```

## 関連項目

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)

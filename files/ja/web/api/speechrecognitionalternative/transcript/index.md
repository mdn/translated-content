---
title: SpeechRecognitionAlternative.transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

{{domxref("SpeechRecognitionResult")}} インターフェースの **`transcript`** 読み取り専用プロパティは、認識したワードの記録を含む文字列を返します。

連続認識において、連続した {{domxref("SpeechRecognitionResult")}} の連結がセッションの適切な記録を生成するように、必要に応じて先頭または末尾の空白が含まれます。

## 構文

```
var myTranscript = speechRecognitionAlternativeInstance.transcript;
```

### 戻り値

{{domxref("DOMString")}}。

## 例

このコードは、[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) から抜き出しています。

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

## ブラウザー実装状況

{{Compat("api.SpeechRecognitionAlternative.transcript")}}

- \[1] Chrome では、SpeechRecognitionare インターフェースにプレフィックスが必要です。そのため、インターフェース名に `webkitSpeechRecognition` のようなプレフィックスが必要です; また、認識を動作させるには、Web サーバ上から提供する必要があります。
- \[2]&#x20;

  about:config

  &#x20;の `media.webspeech.recognition.enable` フラグで有効にできますが、現在の音声認識はデスクトップ版の Firefox では機能しません - 必要な内部権限が整理されればすぐに適切に公開されます。

### Firefox OS 許可

アプリで音声認識を使用するには、[manifest](/ja/docs/Web/Apps/Build/Manifest) で次の許可が必要です:

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

特権アプリも必要なため、次のものも含める必要があります。

```json
  "type": "privileged"
```

## 関連項目

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)

---
title: SpeechRecognitionResult.isFinal
slug: Web/API/SpeechRecognitionResult/isFinal
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

{{domxref("SpeechRecognitionResult")}}インターフェイスの **`isFinal`** リードオンリーのプロパティは結果がファイナルかどうかの ({{domxref("Boolean")}} 型) のことです。true の場合は、これは結果を返す最終の時間です。false の場合は、暫定の結果を返し、後々それは更新されます。

## 構文

```
var myIsFinal = speechRecognitionResultInstance.isFinal;
```

### 返り値

A {{domxref("Boolean")}}.

## 例

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

  console.log(event.results[0].isFinal);
};
```

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("api.SpeechRecognitionResult.isFinal")}}

### Firefox OS 権限

アプリで音声認識を利用する前に、下記の権限を [manifest](/ja/docs/Web/Apps/Build/Manifest) に追加する必要があります。

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

privileged アプリ権限も必要なので、下記も追加が必要です。

```json
  "type": "privileged"
```

## 関連情報

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)

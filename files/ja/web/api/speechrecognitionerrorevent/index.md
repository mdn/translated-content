---
title: SpeechRecognitionError
slug: Web/API/SpeechRecognitionErrorEvent
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の **`SpeechRecognitionError`** インターフェイスは、認識サービスからのエラーメッセージを表します。

## プロパティ

_`SpeechRecognitionError` は、親インターフェイスである {{domxref("Event")}} からのプロパティも継承します。_

- {{domxref("SpeechRecognitionError.error")}} {{readonlyinline}}
  - : 起こったエラーの種類を返します。
- {{domxref("SpeechRecognitionError.message")}} {{readonlyinline}}
  - : エラーの内容が詳しく書かれたメッセージを返します。

## 例

```js
var recognition = new SpeechRecognition();

recognition.onerror = function (event) {
  console.log("Speech recognition error detected: " + event.error);
  console.log("Additional information: " + event.message);
};
```

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat}}

### Firefox OS の許可設定

アプリ内で音声認識を使用するには、以下の許可設定を [manifest](/ja/docs/Web/Apps/Build/Manifest) で指定する必要があります:

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

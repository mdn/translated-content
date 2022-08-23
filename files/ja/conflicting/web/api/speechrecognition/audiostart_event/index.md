---
title: SpeechRecognition.onaudiostart
slug: conflicting/Web/API/SpeechRecognition/audiostart_event
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onaudiostart
  - recognition
  - speech
translation_of: Web/API/SpeechRecognition/onaudiostart
original_slug: Web/API/SpeechRecognition/onaudiostart
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}}インターフェイスの **`onaudiostart`** プロパティは、ユーザーエージェントが音声を取得し終えた時に ({{event("audiostart")}}イベントが発生した時) 、実行されるイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onaudiostart = function() { ... };
```

## 例

```js
var recognition = new SpeechRecognition();

recognition.onaudiostart = function() {
  console.log('音声認識は開始しました。');
}
```

## 仕様

| 仕様                                                                                     | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onaudiostart', 'onaudiostart')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onaudiostart")}}

### Firefox OS の権限

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

---
title: SpeechRecognition.onend
slug: Web/API/SpeechRecognition/end_event
original_slug: Web/API/SpeechRecognition/onend
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}}インターフェイスの **`onend`** プロパティは、音声認識のサービスが切断された後 ({{event("end_(SpeechRecognition)","end")}}イベントが発生した時) に、実行するイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onend = function() { ... };
```

## 例

```js
var recognition = new SpeechRecognition();

recognition.onend = function() {
  console.log('音声認識サービスが切断されました。');
}
```

## 仕様

| 仕様                                                                     | 状態                                 | コメント |
| ------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onend', 'onend')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onend")}}

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

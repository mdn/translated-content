---
title: SpeechRecognition.onerror
slug: Web/API/SpeechRecognition/error_event
original_slug: Web/API/SpeechRecognition/onerror
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}}インターフェイスの **`onerror`** プロパティは、音声の認識でエラーが発生した場合([error](/ja/docs/Web/Events/error_%28SpeechRecognitionError%29) イベントが発生した時) に、実行するイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onerror = function() { ... };
```

## 例

```js
var recognition = new SpeechRecognition();

recognition.onerror = function(event) {
  console.log('音声を認識する際にエラーが発生しました：' + event.error);
}
```

## 仕様

| 仕様                                                                         | 状態                                 | コメント |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onerror', 'onerror')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onerror")}}

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

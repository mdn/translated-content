---
title: SpeechRecognition.onstart
slug: Web/API/SpeechRecognition/start_event
original_slug: Web/API/SpeechRecognition/onstart
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}}インターフェイスの **`onstart`** プロパティは、現在の `SpeechRecognition` に関連する文法を認識する意図をもって、着信される音声を認識するサービスに接続された後 ({{event("start_(SpeechRecognition)","start")}}イベントが発生した時) に、実行するイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onstart = function() { ... };
```

## 例

```js
recognition.onstart = function() {
  console.log('音声認識サービスに接続されました。');
}
```

## 仕様

| 仕様                                                                         | 状態                                 | コメント |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onstart', 'onstart')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onstart")}}

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

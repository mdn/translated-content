---
title: SpeechRecognition.onaudioend
slug: Web/API/SpeechRecognition/audioend_event
original_slug: Web/API/SpeechRecognition/onaudioend
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}}インターフェイスの **`onaudioend`** プロパティは、ユーザーエージェントが音声を取り込んだ後 ({{event("audioend")}}イベントが発生した時) に、実行するイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onaudioend = function() { ... };
```

## 例

```js
var recognition = new SpeechRecognition();

recognition.onaudioend = function() {
  console.log('音声認識は終了しました。');
}
```

## 仕様

| 仕様                                                                                 | 状態                                 | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onaudioend', 'onaudioend')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onaudioend")}}

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

---
title: SpeechRecognition.onsoundstart
slug: Web/API/SpeechRecognition/soundstart_event
original_slug: Web/API/SpeechRecognition/onsoundstart
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}}インターフェイスの **`onsoundstart`** プロパティは、何らかの音（認識できる音声、できない音声にかかわらず）が検出できた時に ({{event("soundstart")}}イベントが発生した時)、実行されるイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onsoundstart = function() { ... };
```

## 例

```js
recognition.onsoundstart = function() {
  console.log('音が検出できました。');
}
```

## 仕様

| 仕様                                                                                     | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onsoundstart', 'onsoundstart')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onsoundstart")}}

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

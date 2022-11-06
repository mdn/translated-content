---
title: SpeechRecognition.onsoundend
slug: Web/API/SpeechRecognition/soundend_event
original_slug: Web/API/SpeechRecognition/onsoundend
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}} インターフェイスの **`onsoundend`** プロパティは、何らかの音（認識できる音声、できない音声にかかわらず）が検出し終えた時に({{event("soundend")}} イベントが発生した時)、実行するイベントハンドラーになります。

## 構文

```
mySpeechRecognition.onsoundend = function() { ... };
```

## 例

```js
recognition.onsoundend = function() {
  console.log('音の検出は終わりました。');
}
```

## 仕様

| 仕様                                                                                 | 状態                                 | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onsoundend', 'onsoundend')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onsoundend")}}

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

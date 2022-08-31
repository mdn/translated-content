---
title: SpeechRecognition.serviceURI
slug: orphaned/Web/API/SpeechRecognition/serviceURI
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - serviceURI
  - speech
translation_of: Web/API/SpeechRecognition/serviceURI
original_slug: Web/API/SpeechRecognition/serviceURI
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}} インターフェイスの **`serviceURI`** プロパティは現在の `SpeechRecognition` が利用している音声認識の場所を指定しています。デフォルト値はユーザーの音声サービスです。

## 構文

```
var myServiceURI = mySpeechRecognition.serviceURI;
mySpeechRecognition.serviceURI = 'path/to/my/service/';
```

### 値

音声認識サービスの URI を表す {{domxref("DOMString")}}。

## 例

```js
var recognition = new SpeechRecognition();

recognition.speechURI = 'http://www.example.com';

...
```

## 仕様

| 仕様                                                                                 | 状態                                 | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-serviceuri', 'serviceURI')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.serviceURI")}}

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

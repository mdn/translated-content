---
title: SpeechRecognition.onnomatch
slug: Web/API/SpeechRecognition/nomatch_event
original_slug: Web/API/SpeechRecognition/onnomatch
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}}インターフェイスの **`onnomatch`** プロパティ、文法の辞書による音声認識サービスの最終結果として何も認識されていない場合 ({{event("nomatch")}}イベントが発生した時)、実行するイベントハンドラーになります。

{{domxref("SpeechRecognitionAlternative.confidence","confidence")}}の閾値を超えたり満たしたりしない程度の認識がされた場合も含まれます。

> **メモ:** `onnomatch` ハンドラーは Firefox でまだ良く動作していませんので — 音声認識 API は正規なマッチを返し、文法の辞書による項目を推測します。この不具合は今対応中です。

## 構文

```
mySpeechRecognition.onnomatch = function() { ... };
```

## 例

```js
var recognition = new SpeechRecognition();

recognition.onnomatch = function() {
  console.log('音声は認識できませんでした。');
}
```

## 仕様

| 仕様                                                                             | 状態                                 | コメント |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-onnomatch', 'onnomatch')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.onnomatch")}}

### Firefox OS の権限

アプリで音声認識を利用する前に、下記の権限を [manifest](/ja/docs/Web/Apps/Build/Manifest) に追加するのは必要になります。

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

privileged アプリも必要なので、下記の追加も必要になります。

```json
  "type": "privileged"
```

## 関連情報

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)

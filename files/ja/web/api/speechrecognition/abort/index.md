---
title: SpeechRecognition.abort()
slug: Web/API/SpeechRecognition/abort
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の **`abort()`** メソッドは音声認識サービスが、入ってくる音声を聞くことを停止します。あと、{{domxref("SpeechRecognitionResult")}} を返しません。

## 構文

```
mySpeechRecognition.abort();
```

### 返り値

Void 型

### パラメーター

無し

## 例

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('色のコマンドを取得します');
}

abortBtn.onclick = function() {
  recognition.abort();
  console.log('音声認識サービスを停止します');
}

recognition.onspeechend = function() {
  recognition.stop();
  console.log('音声認識サービスが停止されました');
}
```

## 仕様

| 仕様                                                                     | 状態                                 | コメント |
| ------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-abort', 'abort()')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.abort")}}

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

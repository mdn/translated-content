---
title: SpeechRecognition()
slug: Web/API/SpeechRecognition/SpeechRecognition
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

**SpeechRecognition()** は {{domxref("SpeechRecognition")}} オブジェクトインスタンスを作成します。

## 構文

```
var myRecognition = new SpeechRecognition();
```

### パラメータ

なし。

## サンプル

このコードは、[Speech color changer](https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js) から引用しています。

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

...
```

## 仕様

| 仕様                                                                                                                             | 策定状況                             | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dom-speechrecognition-speechrecognition', 'SpeechRecognition()')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザ実装状況

{{Compat("api.SpeechRecognition.SpeechRecognition")}}

### Firefox OS permissions

speech recognition を使用するには、[manifest](/ja/docs/Web/Apps/Build/Manifest) に下記の permissions 設定が必要です:

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

特権を持ったアプリの場合は下記も設定して下さい:

```json
  "type": "privileged"
```

## 関連項目

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)

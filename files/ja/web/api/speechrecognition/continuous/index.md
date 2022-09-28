---
title: SpeechRecognition.continuous
slug: Web/API/SpeechRecognition/continuous
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}} インターフェイスの **`continuous`** プロパティは、認識が行われるたびに、継続的に結果を返すのか、あるいは１つの結果のみ返すのかを制御するようになります。

既定では１つの結果です (`false`)

## 構文

```
var myContinuous = mySpeechRecognition.continuous;
mySpeechRecognition.continuous = true;
```

### 値

現在の `SpeechRecognition` の継続の状態を表す {{domxref("Boolean")}} 型。`true` の場合は継続的で、`false` の場合は１つのみの返しです。

## 例

下記のソースコードは [Speech color changer](https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js) を参考しています

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'ja-JP';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

...
```

注意: 現在 `continuous` は Gecko で実装されておらず、いつも１つを返します。今のところ、継続的な返しをエミュレートするには、下記のソースコードのように何か返す結果が取れた時に、{{domxref("SpeechRecognition.start()")}} を実行します。

```js
recognition.onresult = function(event) {
    ...
  recognition.start();
}
```

## 仕様

| 仕様                                                                                 | 状態                                 | コメント |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-continuous', 'continuous')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.continuous")}}

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

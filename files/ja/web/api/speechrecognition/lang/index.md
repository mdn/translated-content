---
title: SpeechRecognition.lang
slug: Web/API/SpeechRecognition/lang
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechRecognition")}} インターフェイスの **`lang`** プロパティは現在の `SpeechRecognition` の言語を返します。指定されていない場合、HTML タグの {{htmlattrxref("lang","html")}} アトリビュートを返し、またそれも指定されていない場合、ユーザーエージェントの言語の設定を返します。

## 構文

```
var myLang = mySpeechRecognition.lang;
mySpeechRecognition.lang = 'ja-JP';
```

### 値

現在の `SpeechRecognition` での BCP 47 言語タグを表す {{domxref("DOMString")}}。

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

## 仕様

| 仕様                                                                 | 状態                                 | コメント |
| -------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Web Speech API', '#dfn-lang', 'lang')}} | {{Spec2('Web Speech API')}} |          |

## ブラウザー実装状況

{{Compat("api.SpeechRecognition.lang")}}

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

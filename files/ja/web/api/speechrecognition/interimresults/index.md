---
title: SpeechRecognition.interimResults
slug: Web/API/SpeechRecognition/interimResults
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`interimResults`** は {{domxref("SpeechRecognition")}} インターフェイスのプロパティで、中間の結果を返す (`true`) か返さない (`false`) か制御します。中間の結果は最終的ではない結果になります（例えば {{domxref("SpeechRecognitionResult.isFinal")}} プロパティは `false` となります）。

**`interimResults`** の既定値は `false` です。

### 値

論理値で、現在の `SpeechRecognition` の中間結果の状態を表します。 `true` の場合は中間の結果を返すことができ、 `false` の場合は返すことができません。

## 例

下記のソースコードは [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) を参考しています

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// ...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

---
title: "SpeechRecognition: interimResults プロパティ"
short-title: interimResults
slug: Web/API/SpeechRecognition/interimResults
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

**`interimResults`** は {{domxref("SpeechRecognition")}} インターフェイスのプロパティで、中間の結果を返す (`true`) か返さない (`false`) か制御します。中間の結果は最終的ではない結果になります（例えば {{domxref("SpeechRecognitionResult.isFinal")}} プロパティは `false` となります）。

**`interimResults`** の既定値は `false` です。

### 値

論理値で、現在の `SpeechRecognition` の中間結果の状態を表します。 `true` の場合は中間の結果を返すことができ、 `false` の場合は返すことができません。

## 例

下記のソースコードは [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) を参考しています

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)

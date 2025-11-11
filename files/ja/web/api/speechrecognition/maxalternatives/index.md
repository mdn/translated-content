---
title: "SpeechRecognition: maxAlternatives プロパティ"
short-title: maxAlternatives
slug: Web/API/SpeechRecognition/maxAlternatives
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

**`maxAlternatives`** は {{domxref("SpeechRecognition")}} インターフェイスのプロパティで、 {{domxref("SpeechRecognitionResult")}} ごとに提供される {{domxref("SpeechRecognitionAlternative")}} の最大数を設定します。

既定値は `1` です

## 値

数値で、それぞれの結果に対して返される選択肢の最大値を表します。

## 例

下記のソースコードは [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) を参考しています。

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

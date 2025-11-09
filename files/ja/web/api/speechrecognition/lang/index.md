---
title: "SpeechRecognition: lang プロパティ"
short-title: lang
slug: Web/API/SpeechRecognition/lang
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

**`lang`** は {{domxref("SpeechRecognition")}} インターフェイスのプロパティで、現在の `SpeechRecognition` の言語を返します。指定されていない場合、 HTML の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性を返し、またそれも指定されていない場合、ユーザーエージェントの言語の設定を返します。

### 値

文字列で、現在の `SpeechRecognition` での言語を表します。この値は有効な {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}である必要があります。

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
